"use client";

import Link from "next/link";
import BoldCopy from "./animata/text/bold-copy";

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-lg border-b border-yellow-400/20"
      style={{ background: "var(--hero-gradient-lr)" }}
    >
      {/* Glowing golden underline */}
      <div
        className="absolute bottom-0 left-0 w-full h-[2px]"
        style={{ background: "var(--gold)" }}
      >
        <div
          className="absolute -bottom-[2px] left-0 w-full h-[8px] blur-md opacity-70"
          style={{ background: "var(--gold)" }}
        ></div>
      </div>

      {/* Header Content */}
      <div className="relative z-10 flex items-center justify-between px-8 py-4">
        {/* Left Text (Clickable Home Link) */}
        <Link href="/" className="group flex items-center gap-2">
          <BoldCopy
            text="KACE 9"
            textClassName="accent-gradient-text transition-transform duration-300 group-hover:scale-105"
            backgroundTextClassName="text-muted"
          />
        </Link>

        {/* Right Side Quick Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link
            href="/events"
            className="text-gray-200 hover:text-yellow-400 transition"
          >
            Events
          </Link>
          <Link
            href="/register"
            className="text-gray-200 hover:text-yellow-400 transition"
          >
            Register
          </Link>
          <Link
            href="/#contact"
            className="text-gray-200 hover:text-yellow-400 transition"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
