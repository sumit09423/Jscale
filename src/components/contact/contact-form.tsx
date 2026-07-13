"use client";

import { type FormEvent, useState } from "react";
import { siteConfig } from "@/lib/seo";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const first = String(data.get("firstName") ?? "");
    const last = String(data.get("lastName") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const message = String(data.get("message") ?? "");

    const body = [
      `Name: ${first} ${last}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
      `Contact from ${first} ${last}`,
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <form onSubmit={onSubmit} className="contact_form grid gap-3 sm:grid-cols-2">
      <input
        required
        name="lastName"
        type="text"
        placeholder="Last name"
        className="form_input rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none focus:border-[#5b92e5]"
      />
      <input
        required
        name="firstName"
        type="text"
        placeholder="First name"
        className="form_input rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none focus:border-[#5b92e5]"
      />
      <input
        required
        name="email"
        type="email"
        placeholder="Email address"
        className="form_input rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none focus:border-[#5b92e5] sm:col-span-1"
      />
      <input
        required
        name="phone"
        type="tel"
        placeholder="Phone number"
        className="form_input rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none focus:border-[#5b92e5]"
      />
      <textarea
        name="message"
        placeholder="Enter your message..."
        rows={5}
        className="form_input is-text-area rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none focus:border-[#5b92e5] sm:col-span-2"
      />
      <div className="contact_sub flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-end sm:justify-between">
        <p className="max-w-md text-xs leading-relaxed text-zinc-500 sm:text-sm">
          By submitting this form, you agree to receive emails, calls, or
          messages from JSCALE regarding your inquiry.
        </p>
        <button
          type="submit"
          className="inline-flex min-h-[var(--min-tap-target)] w-full items-center justify-center rounded-full bg-[#5b92e5] px-7 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:w-auto"
        >
          {submitted ? "Opening mail…" : "Submit"}
        </button>
      </div>
    </form>
  );
}
