"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/sendMail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("❌ Failed to send message. Try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-16 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24"
      style={{ background: "var(--hero-gradient-lr)" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start text-white">
        {/* Left Info */}
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-400">
            Contact Information
          </h2>

          <div className="flex items-start gap-3 sm:gap-4">
            <Mail className="text-yellow-500 w-6 h-6 sm:w-7 sm:h-7" />
            <div>
              <p className="font-semibold text-yellow-400 text-lg">Email</p>
              <p className="text-white text-sm sm:text-base break-words">
                munsoc.nita@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:gap-4">
            <Phone className="text-yellow-500 w-6 h-6 sm:w-7 sm:h-7" />
            <div>
              <p className="font-semibold text-yellow-400 text-lg">Phone</p>
              <p className="text-white text-sm sm:text-base">+91 79086 17675</p>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:gap-4">
            <MapPin className="text-yellow-500 w-6 h-6 sm:w-7 sm:h-7" />
            <div>
              <p className="font-semibold text-yellow-400 text-lg">Address</p>
              <p className="text-white text-sm sm:text-base max-w-xs sm:max-w-sm">
                Civil Building, Room-209, NIT Agartala
              </p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-black/60 border border-yellow-600 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg shadow-yellow-900/30">
          <h3 className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-6">
            Quick Inquiry
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm sm:text-base"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm sm:text-base"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 min-h-[120px] sm:min-h-[150px] text-sm sm:text-base"
            />
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 sm:py-3.5 rounded-full transition text-sm sm:text-base"
            >
              Send Message
            </button>
          </form>

          {status && (
            <p className="mt-4 text-sm sm:text-base text-yellow-300">{status}</p>
          )}
        </div>
      </div>
    </section>
  );
}
