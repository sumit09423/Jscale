import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PageHero, Reveal } from '../components/UI'
import { useCart } from '../context/CartContext'

function sendOrderToWhatsApp(data, items, subtotal) {
  const phone = '918233633213'
  const itemLines = items.map(i =>
    `  • ${i.name} (${i.type}) — $${i.price.toLocaleString()} × ${i.quantity}`
  ).join('\n')
  const lines = [
    `🛒 *NEW ORDER — JScale*`,
    ``,
    `*Customer:* ${data.fullName}`,
    `*Email:* ${data.email}`,
    `*Phone:* ${data.phone}`,
    `*Location:* ${data.location}`,
    ``,
    `*Items:*`,
    itemLines,
    ``,
    `*Subtotal:* $${subtotal.toLocaleString()}`,
    ``,
    `*Notes:* ${data.notes || 'None'}`,
    ``,
    `Submitted via JScale website cart.`,
  ]
  const message = encodeURIComponent(lines.join('\n'))
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
}

async function submitOrder(data, items, subtotal) {
  try {
    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        customer: data,
        items: items.map(i => ({ id: i.id, name: i.name, type: i.type, price: i.price, quantity: i.quantity })),
        subtotal,
        createdAt: new Date().toISOString(),
      }),
    })
    return response.ok ? await response.json() : { success: false }
  } catch (err) {
    console.error('Order API error:', err)
    return { success: false }
  }
}

// ===== EMPTY CART =====
function EmptyCart() {
  return (
    <div className="empty-cart">
      <div className="empty-cart-icon">🛒</div>
      <h3>Your Cart is Empty</h3>
      <p>Browse our plans and add something to get started.</p>
      <Link to="/pricing" className="btn btn-primary"><span>Browse Plans</span><span className="btn-arrow">→</span></Link>
    </div>
  )
}

// ===== CART ITEM ROW =====
function CartItem({ item, onRemove, onUpdateQty }) {
  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <div className="cart-item-type">{item.type}</div>
        <div className="cart-item-name">{item.name}</div>
        {item.desc && <div className="cart-item-desc">{item.desc}</div>}
      </div>
      <div className="cart-item-controls">
        <div className="qty-control">
          <button className="qty-btn" onClick={() => onUpdateQty(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>−</button>
          <span className="qty-value">{item.quantity}</span>
          <button className="qty-btn" onClick={() => onUpdateQty(item.id, item.quantity + 1)}>+</button>
        </div>
        <div className="cart-item-price">${(item.price * item.quantity).toLocaleString()}</div>
        <button className="cart-item-remove" onClick={() => onRemove(item.id)} title="Remove">✕</button>
      </div>
    </div>
  )
}

// ===== SUCCESS STATE =====
function OrderSuccess() {
  return (
    <div className="order-success">
      <div className="success-icon">🎉</div>
      <h3>Order Submitted!</h3>
      <p>Your enrollment request has been sent to our team via WhatsApp. We'll reach out within a few hours to confirm and process your order.</p>
      <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' }}>
        <Link to="/pricing" className="btn btn-secondary">Browse More Plans</Link>
        <Link to="/" className="btn btn-primary"><span>Back to Home</span></Link>
      </div>
    </div>
  )
}

// ===== MAIN CART PAGE =====
export default function Cart() {
  const { items, removeItem, updateQuantity, clearCart, subtotal, totalItems } = useCart()
  const [step, setStep] = useState('cart') // cart | checkout | success
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', location: '', notes: '' })

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleCheckout = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    // 1. Try API
    await submitOrder(formData, items, subtotal)

    // 2. Send to WhatsApp
    sendOrderToWhatsApp(formData, items, subtotal)

    // 3. Clear & show success
    setSubmitting(false)
    clearCart()
    setStep('success')
  }

  return (
    <>
      <PageHero
        badge={step === 'success' ? 'Order Confirmed' : `${totalItems} item${totalItems !== 1 ? 's' : ''} in cart`}
        title={step === 'success' ? 'Thank You! <span class="gradient-text">🎉</span>' : 'Your <span class="gradient-text">Cart</span>'}
        subtitle={step === 'success' ? 'Your enrollment has been submitted successfully.' : 'Review your selected plans and proceed to enrollment.'}
      />

      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          {step === 'success' ? (
            <Reveal><OrderSuccess /></Reveal>
          ) : items.length === 0 && step === 'cart' ? (
            <Reveal><EmptyCart /></Reveal>
          ) : (
            <div className="cart-layout">
              {/* LEFT — Cart Items or Checkout Form */}
              <div className="cart-main">
                {step === 'cart' ? (
                  <Reveal>
                    <div className="glass-card cart-items-card">
                      <div className="cart-header-row">
                        <h3 className="cart-section-title">Cart Items</h3>
                        <button className="cart-clear-btn" onClick={clearCart}>Clear All</button>
                      </div>
                      <div className="cart-items-list">
                        {items.map(item => (
                          <CartItem key={item.id} item={item} onRemove={removeItem} onUpdateQty={updateQuantity} />
                        ))}
                      </div>
                    </div>
                  </Reveal>
                ) : (
                  <Reveal>
                    <div className="glass-card checkout-form-card">
                      <h3 className="cart-section-title">Enrollment Details</h3>
                      <p style={{ color: 'var(--text-dim)', fontSize: '.9rem', marginBottom: 28 }}>Fill in your details to complete enrollment. We'll send the order to our team and reach out to confirm.</p>
                      <form onSubmit={handleCheckout} className="checkout-form">
                        <div className="form-row">
                          <div className="form-group"><label>Full Name *</label><input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Your full name" required /></div>
                          <div className="form-group"><label>Email *</label><input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@email.com" required /></div>
                        </div>
                        <div className="form-row">
                          <div className="form-group"><label>Phone *</label><input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" required /></div>
                          <div className="form-group"><label>Location</label><input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="City, Country" /></div>
                        </div>
                        <div className="form-group"><label>Notes / Special Requests</label><textarea name="notes" value={formData.notes} onChange={handleChange} placeholder="Anything you'd like us to know..." rows="3" /></div>
                        <div className="checkout-actions">
                          <button type="button" className="btn btn-secondary" onClick={() => setStep('cart')}>← Back to Cart</button>
                          <button type="submit" className="btn btn-primary btn-submit" disabled={submitting}>
                            <span>{submitting ? 'Processing...' : 'Confirm & Send via WhatsApp'}</span>
                            {!submitting && <span className="btn-arrow">→</span>}
                          </button>
                        </div>
                      </form>
                    </div>
                  </Reveal>
                )}
              </div>

              {/* RIGHT — Order Summary */}
              <div className="cart-sidebar">
                <Reveal direction="right">
                  <div className="glass-card summary-card">
                    <h3 className="cart-section-title">Order Summary</h3>
                    <div className="summary-items">
                      {items.map(item => (
                        <div key={item.id} className="summary-line">
                          <div>
                            <span className="summary-item-name">{item.name}</span>
                            {item.quantity > 1 && <span className="summary-item-qty"> × {item.quantity}</span>}
                          </div>
                          <span className="summary-item-price">${(item.price * item.quantity).toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                    <div className="summary-divider" />
                    <div className="summary-total-row">
                      <span>Subtotal</span>
                      <span className="summary-total">${subtotal.toLocaleString()}</span>
                    </div>
                    <p className="summary-note">* Placement/success fees (if applicable) are charged separately after you get placed.</p>

                    {step === 'cart' && (
                      <button className="btn btn-primary" style={{ width: '100%', marginTop: 20 }} onClick={() => setStep('checkout')}>
                        <span>Proceed to Checkout</span><span className="btn-arrow">→</span>
                      </button>
                    )}

                    <Link to="/pricing" className="summary-continue">← Continue browsing plans</Link>
                  </div>
                </Reveal>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
