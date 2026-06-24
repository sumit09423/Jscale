"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowUp, CheckCircle, RefreshCw, X } from "lucide-react";

import shared from "../../../about-us/about-us.module.css";
import styles from "../sign-in/sign-in.module.css";
import { postData } from "../../../utils/api";

const cx = (...names) => names.filter(Boolean).join(" ");

export default function CandidateEmailOtpVerificationPage() {
  const [otp, setOtp] = useState("");
  const [popup, setPopup] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [notice, setNotice] = useState("Record created successfully.");

  const query = useMemo(() => {
    if (typeof window === "undefined") {
      return { email: "", role: "candidate" };
    }
    const params = new URLSearchParams(window.location.search);
    return {
      email: params.get("email") || localStorage.getItem("pendingOtpEmail") || "",
      role: params.get("role") || localStorage.getItem("pendingOtpRole") || "candidate"
    };
  }, []);

  useEffect(() => {
    if (!query.email) {
      setPopup({ title: "Email missing", message: "Please sign up first to receive your OTP.", type: "error" });
    }
  }, [query.email]);

  const handleVerify = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await postData("/auth/verify-email-otp", { email: query.email, role: query.role, otp });
      localStorage.removeItem("pendingOtpEmail");
      localStorage.removeItem("pendingOtpRole");
      setPopup({ title: "Email Verified", message: "Your account is verified. You can sign in now.", type: "success", href: "/candidate/auth/sign-in" });
      setOtp("");
    } catch (error) {
      setPopup({ title: "Verification Failed", message: error.message, type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResend = async () => {
    setIsResending(true);

    try {
      const response = await postData("/auth/resend-email-otp", { email: query.email, role: query.role });
      setNotice("OTP sent successfully.");
      setPopup({
        title: "OTP Sent",
        message: `New OTP generated successfully.${response.data?.devOtp ? ` Testing OTP: ${response.data.devOtp}` : ""}`,
        type: "success"
      });
    } catch (error) {
      setPopup({ title: "Could Not Send OTP", message: error.message, type: "error" });
    } finally {
      setIsResending(false);
    }
  };

  const closePopup = () => {
    if (popup?.href) {
      window.location.href = popup.href;
      return;
    }
    setPopup(null);
  };

  return (
    <main className={cx(shared.aboutPage, styles.signPage)}>
      <header className={shared.mainHeader}>
        <div className={shared.autoContainer}>
          <div className={shared.headerOuter}>
            <a className={shared.logoBox} href="/" aria-label="Jscale home">
              <img src="/logo.png" alt="Jscale" className={shared.brandLogo} />
            </a>
            <div className={shared.headerActions}>
              <a className={shared.loginLink} href="/candidate/auth/sign-in">Log In</a>
              <a className={shared.themeBtn} href="/contact/contact-us">Get Started</a>
            </div>
          </div>
        </div>
      </header>

      <section className={shared.pageTitle}>
        <div className={shared.autoContainer}>
          <div className={shared.pageTitleBox}>
            <h1>Candidate Sign Up</h1>
            <ul className={shared.breadcrumb}>
              <li>Candidate</li>
              <li>-</li>
              <li>Sign Up</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.signSection}>
        <div className={styles.patternLayer} />
        <div className={shared.autoContainer}>
          <div className={cx(styles.formInner, styles.otpForm)}>
            <div className={styles.otpNotice}>
              <CheckCircle size={17} />
              <div>
                <strong>Hooray!</strong>
                <span>{notice}</span>
              </div>
            </div>

            <form onSubmit={handleVerify}>
              <div className={styles.formGroup}>
                <label htmlFor="email-otp">OTP</label>
                <input
                  id="email-otp"
                  name="otp"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]{6}"
                  maxLength={6}
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(event) => setOtp(event.target.value.replace(/\D/g, "").slice(0, 6))}
                  required
                />
              </div>

              <div className={styles.otpActions}>
                <button className={shared.themeBtn} type="submit" disabled={isSubmitting || !query.email}>
                  {isSubmitting ? "Verifying..." : "Verify"}
                </button>
                <button className={styles.resendLink} type="button" onClick={handleResend} disabled={isResending || !query.email}>
                  <RefreshCw size={16} />
                  {isResending ? "Sending..." : "Resend Mail"}
                </button>
              </div>
              <div className={styles.lowerText}>
                <p>Already have an account? <a href="/candidate/auth/sign-in">Sign In</a></p>
              </div>
            </form>

            {query.email ? (
              <p className={styles.otpHint}>Testing email: {query.email}</p>
            ) : null}
          </div>
        </div>

        {popup ? <OtpPopup popup={popup} onClose={closePopup} /> : null}
      </section>

      <a className={shared.scrollTop} href="#" aria-label="Back to top"><ArrowUp size={26} /></a>
    </main>
  );
}

function OtpPopup({ popup, onClose }) {
  return (
    <div className={styles.popupOverlay} role="dialog" aria-modal="true" aria-labelledby="otp-popup-title">
      <div className={styles.popupCard}>
        <button className={styles.popupClose} type="button" aria-label="Close popup" onClick={onClose}>
          <X size={18} />
        </button>
        <div className={cx(styles.popupIcon, styles[popup.type])}>{popup.type === "success" ? "✓" : "!"}</div>
        <h3 id="otp-popup-title">{popup.title}</h3>
        <p>{popup.message}</p>
        <button className={shared.themeBtn} type="button" onClick={onClose}>OK</button>
      </div>
    </div>
  );
}
