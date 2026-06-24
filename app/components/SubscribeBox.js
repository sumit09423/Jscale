"use client";

import { useState } from "react";
import { postData } from "../utils/api";

export default function SubscribeBox({
  styles,
  source = "website",
  idPrefix = "subscribe",
  revealAttribute,
  statusClassName
}) {
  const [status, setStatus] = useState("");
  const revealProps = revealAttribute ? { [revealAttribute]: "" } : {};

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sending...");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email");

    try {
      await postData("/subscribers", { email, source });
      setStatus("Email Subscribed");
      alert("Email Subscribed");
      form.reset();
    } catch (error) {
      setStatus(error.message || "Subscription failed.");
    }
  };

  return (
    <section className={styles.subscribeSection}>
      <div className={styles.subscribeBg} />
      <div className={styles.autoContainer}>
        <div className={styles.subscribeInner} {...revealProps}>
          <div className={styles.subscribeShapeOne} />
          <div className={styles.subscribeShapeTwo} />
          <div className={styles.subscribeText}>
            <h2>Subscribe For <span>Latest Update</span></h2>
          </div>
          <form className={styles.subscribeForm} onSubmit={handleSubmit}>
            <label className={styles.srOnly} htmlFor={`${idPrefix}-email`}>Email address</label>
            <input id={`${idPrefix}-email`} name="email" type="email" placeholder="Email Address" required />
            <button className={styles.themeBtn} type="submit">Subscribe</button>
          </form>
          {status ? (
            <p className={statusClassName || styles.subscribeStatus}>{status}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
