"use client";

import { Instagram } from "lucide-react";

export default function UpdatesSection() {
  return (
    <section className="w-full py-16 px-6 bg-[#0a0a0c] text-center">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-yellow-400 mb-4">
        Latest Updates
      </h2>

      {/* Subtext */}
      <p className="text-gray-300 mb-8">
        Follow us on Instagram for the latest news and updates
      </p>

      {/* Instagram Button */}
      <a
        href="https://instagram.com/https://www.instagram.com/munsoc.nita?igsh=MWxzcG5tbXNnczhocA=="
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-300 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:from-yellow-400 hover:to-yellow-200 transition"
      >
        <Instagram className="w-5 h-5" />
        Follow @MUNSOC NITA
      </a>
    </section>
  );
}
