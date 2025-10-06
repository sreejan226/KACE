"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Calendar, UserPlus, Phone } from "lucide-react";
import { useEffect, useState } from "react";

export default function BottomNavbar() {
  const pathname = usePathname();
  const [activeContact, setActiveContact] = useState(false);

  // Smooth scroll for contact section
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      const section = document.getElementById("contact");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setActiveContact(true); // mark contact as active
      }
    }
  };

  // Reset activeContact if user scrolls away
  useEffect(() => {
    if (!activeContact) return;

    const handleScroll = () => {
      const section = document.getElementById("contact");
      if (!section) return;
      const top = section.getBoundingClientRect().top;
      // If contact section is more than halfway down the viewport, deactivate
      if (top > window.innerHeight / 2) setActiveContact(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeContact]);

  // Active state logic
  const isHomeActive = pathname === "/" && !activeContact;
  const isContactActive = activeContact;
  const isEventsActive = pathname.startsWith("/events");
  const isRegisterActive = pathname.startsWith("/register");

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] sm:w-auto">
      <div className="flex justify-between sm:justify-center items-center gap-2 sm:gap-4 bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg rounded-full px-3 sm:px-6 py-2 sm:py-3 transition-all duration-300">
        {/* Home */}
        <Link
          href="/"
          className={`flex flex-col sm:flex-row items-center sm:gap-2 px-3 py-2 rounded-full transition ${
            isHomeActive ? "bg-white/20" : "hover:bg-white/10"
          }`}
        >
          <Home
            className={`w-5 h-5 ${isHomeActive ? "text-yellow-400" : "text-yellow-300"}`}
          />
          <span className="hidden sm:inline text-sm text-white">Home</span>
        </Link>

        {/* Events */}
        <Link
          href="/events"
          className={`flex flex-col sm:flex-row items-center sm:gap-2 px-3 py-2 rounded-full transition ${
            isEventsActive ? "bg-white/20" : "hover:bg-white/10"
          }`}
        >
          <Calendar
            className={`w-5 h-5 ${isEventsActive ? "text-blue-400" : "text-blue-300"}`}
          />
          <span className="hidden sm:inline text-sm text-white">Events</span>
        </Link>

        {/* Register */}
        <Link
          href="/register"
          className={`flex flex-col sm:flex-row items-center sm:gap-2 px-3 py-2 rounded-full transition ${
            isRegisterActive ? "bg-white/20" : "hover:bg-white/10"
          }`}
        >
          <UserPlus
            className={`w-5 h-5 ${isRegisterActive ? "text-green-400" : "text-green-300"}`}
          />
          <span className="hidden sm:inline text-sm text-white">Register</span>
        </Link>

        {/* Contact */}
        <Link
          href="/#contact"
          onClick={handleContactClick}
          className={`flex flex-col sm:flex-row items-center sm:gap-2 px-3 py-2 rounded-full transition ${
            isContactActive ? "bg-white/20" : "hover:bg-white/10"
          }`}
        >
          <Phone className="w-5 h-5 text-pink-400" />
          <span className="hidden sm:inline text-sm text-white">Contact</span>
        </Link>
      </div>
    </div>
  );
}
