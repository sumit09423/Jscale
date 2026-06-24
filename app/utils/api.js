const CONTACT_EMAIL = "contact@jscale.com";

const openMailto = (subject, body) => {
  const url = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = url;
};

export const postData = async (endpoint, payload) => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  if (endpoint === "/contacts") {
    const subject = `Contact form: ${payload.name || "New message"}`;
    const body = [
      `Name: ${payload.name || ""}`,
      `Email: ${payload.email || ""}`,
      `Phone: ${payload.phone || ""}`,
      "",
      payload.message || ""
    ].join("\n");
    openMailto(subject, body);
    return { success: true, message: "Opening your email client to send the message." };
  }

  if (endpoint === "/feedbacks") {
    const subject = `Feedback (${payload.feedbackType || "general"}): ${payload.name || "Visitor"}`;
    const body = [
      `Type: ${payload.feedbackType || ""}`,
      `Rating: ${payload.rating || ""}`,
      `Name: ${payload.name || ""}`,
      `Email: ${payload.email || ""}`,
      "",
      payload.message || ""
    ].join("\n");
    openMailto(subject, body);
    return { success: true, message: "Opening your email client to send feedback." };
  }

  if (endpoint === "/subscribers") {
    return { success: true, message: "Email Subscribed" };
  }

  if (endpoint.startsWith("/auth/")) {
    throw new Error("Authentication is not available yet. Please contact us at contact@jscale.com.");
  }

  throw new Error("This feature is currently unavailable.");
};
