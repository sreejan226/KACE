"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      className="relative py-20 px-6 lg:px-16"
      id="contact"
      style={{ background: "var(--hero-gradient-lr)" }}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start text-white">
        {/* Left Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-yellow-400">Contact Information</h2>

          <div className="flex items-center gap-3">
            <Mail className="text-yellow-500 w-6 h-6" />
            <div>
              <p className="font-semibold text-yellow-400">Email</p>
              <p className="text-white">sreejandas226@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="text-yellow-500 w-6 h-6" />
            <div>
              <p className="font-semibold text-yellow-400">Phone</p>
              <p className="text-white">+91 8132948021</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="text-yellow-500 w-6 h-6" />
            <div>
              <p className="font-semibold text-yellow-400">Address</p>
              <p className="text-white">
                Civil Building, Room-209, NIT Agartala
              </p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-black/60 border border-yellow-600 rounded-2xl p-8 shadow-lg shadow-yellow-900/30">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-6">Quick Inquiry</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 min-h-[120px]"
            />
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 rounded-full transition"
            >
              Send Message
            </button>
          </form>

          {status && <p className="mt-4 text-sm">{status}</p>}
        </div>
      </div>
    </section>
  );
}
