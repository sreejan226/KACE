"use client";

import { Instagram } from "lucide-react";

export default function UpdatesSection() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#0a0a0c] text-center">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-3 sm:mb-4">
        Latest Updates
      </h2>

      {/* Subtext */}
      <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-xl mx-auto">
        Follow us on Instagram for the latest news and event updates.
      </p>

      {/* Instagram Button */}
      <a
        href="https://www.instagram.com/munsoc.nita?igsh=MWxzcG5tbXNnczhocA=="
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-300 text-black font-semibold px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full shadow-lg hover:scale-105 hover:from-yellow-400 hover:to-yellow-200 transition-transform duration-300"
      >
        <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
        <span className="text-sm sm:text-base md:text-lg">
          Follow @munsoc.nita
        </span>
      </a>
    </section>
  );
}
