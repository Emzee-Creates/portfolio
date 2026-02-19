"use client";
import { useState } from "react";
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle, FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // 'idle' | 'loading' | 'success' | 'error'

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
        setTimeout(() => setStatus(null), 5000); // Reset status after 5s
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-12">
      <div className="grid md:grid-cols-2 gap-16">
        
        {/* Left Side: Copy */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            Let’s Build the <span className="text-brand-accent">Future</span>.
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
            Whether you have a question about AI integration, blockchain architecture, or just want to say hi, my inbox is always open.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
              <div className="p-3 rounded-xl bg-brand-blue/10 text-brand-blue">
                <FaEnvelope size={20} />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-slate-500">Email</p>
                <p className="font-semibold text-slate-900 dark:text-white">your-email@example.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
               <a href="#" className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-brand-blue transition-colors">
                 <FaLinkedin size={20} />
               </a>
               <a href="#" className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-400 transition-colors">
                 <FaTwitter size={20} />
               </a>
            </div>
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue to-brand-accent rounded-2xl blur opacity-20"></div>
          <form 
            onSubmit={handleSubmit} 
            className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl shadow-xl space-y-5"
          >
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-slate-500 mb-2 ml-1">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-4 focus:ring-2 focus:ring-brand-blue outline-none transition-all dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-slate-500 mb-2 ml-1">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-4 focus:ring-2 focus:ring-brand-blue outline-none transition-all dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-slate-500 mb-2 ml-1">Message</label>
              <textarea
                name="message"
                placeholder="How can I help you?"
                rows="4"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-4 focus:ring-2 focus:ring-brand-blue outline-none transition-all dark:text-white resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className={`w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold transition-all ${
                status === "loading" 
                ? "bg-slate-400 cursor-not-allowed" 
                : "bg-brand-blue text-white hover:bg-blue-600 shadow-lg shadow-blue-500/30"
              }`}
            >
              {status === "loading" ? "Transmitting..." : "Send Message"}
              <FaPaperPlane size={14} className={status === "loading" ? "animate-pulse" : ""} />
            </button>

            {/* Status Messages */}
            {status === "success" && (
              <div className="flex items-center gap-2 text-green-500 text-sm font-medium bg-green-500/10 p-3 rounded-lg border border-green-500/20">
                <FaCheckCircle /> Message sent! I'll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-2 text-red-500 text-sm font-medium bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                <FaExclamationCircle /> Connection error. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
