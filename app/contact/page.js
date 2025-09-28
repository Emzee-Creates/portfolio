"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-brand-dark">Contact Me</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-3 sm:p-4 border rounded-lg text-sm sm:text-base"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-3 sm:p-4 border rounded-lg text-sm sm:text-base"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full p-3 sm:p-4 border rounded-lg text-sm sm:text-base"
        />
        <button
          type="submit"
          className="w-full bg-white text-brand-accent border-2 border-brand-accent font-semibold py-3 sm:py-4 rounded-lg transition hover:bg-brand-accent/20 hover:text-blue-600"
        >
          Send Message
        </button>
      </form>

      {status === "loading" && <p className="text-blue-500 mt-4">Sending...</p>}
      {status === "success" && (
        <p className="text-green-500 mt-4">
          Message sent successfully! I will get back to you shortly!
        </p>
      )}
      {status === "error" && (
        <p className="text-red-500 mt-4">Something went wrong. Try again.</p>
      )}
    </div>
  );
}
