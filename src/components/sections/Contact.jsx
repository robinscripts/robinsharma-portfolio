import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "loading", message: "Sending your message..." });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "48929b41-3724-4329-a0e0-4a8c93b54a96",
          name: name,
          email: email,
          message: message
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus({ type: "success", message: "✅ Message sent successfully!" });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus({ type: "error", message: "❌ Failed to send message. Please try again." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "⚠️ An unexpected error occurred." });
      console.log(error);
    }
    setTimeout(() => setStatus({ type: "", message: "" }), 10000);
  };

  return (
    <section id="contact" className="mt-24 bg-gray-100 py-16">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-(--color-fblack)">
          Thanks for taking the time to reach out.<br/> How can I help you today?
        </h2>
      </div>
      
      {/* Form */}
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white shadow-md rounded-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name & Email */}
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--color-primary)"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--color-primary)"
              />
            </div>

            {/* Message */}
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--color-primary)"
            ></textarea>

            {status.message && (
              <div
                className={`text-center mt-2 text-sm font-medium transition-all duration-300 ${
                  status.type === "success"
                    ? "text-green-400"
                    : status.type === "error"
                    ? "text-red-400"
                    : "text-gray-300"
                }`}
              >
                {status.message}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status.type === "loading"}
              className={`w-full bg-(--color-primary) text-white py-3 rounded-lg font-medium hover:bg-(--color-secondary) transition-colors 
                          ${status.type === "loading" ? "opacity-70 cursor-not-allowed" : "hover:bg-secondary" }`}
            >
              {status.type === "loading" ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;