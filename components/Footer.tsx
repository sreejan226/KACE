"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0a0a0c] to-black text-gray-300 py-12 border-t border-gray-800 relative overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 z-10 relative">
        
        {/* Left Section */}
        <div>
          <h2 className="text-yellow-400 font-bold text-lg">MUNSOC NITA KACE 2025</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-400">
            Empowering young minds to solve global challenges through diplomatic
            dialogue and international cooperation.
          </p>
          <div className="flex space-x-5 mt-5">
            <a
              href="https://www.instagram.com/munsoc.nita"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 hover:scale-110 transition-transform"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 hover:scale-110 transition-transform"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://linkedin.com/company/munsoc-nita"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 hover:scale-110 transition-transform"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 hover:scale-110 transition-transform"
            >
              <FaFacebook size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-yellow-400 font-semibold text-lg">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-yellow-400 hover:translate-x-1 inline-block transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-yellow-400 hover:translate-x-1 inline-block transition">
                Events
              </Link>
            </li>
            <li>
              <Link href="/register" className="hover:text-yellow-400 hover:translate-x-1 inline-block transition">
                Register
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-yellow-400 hover:translate-x-1 inline-block transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-yellow-400 font-semibold text-lg">Contact Info</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-yellow-400" /> munsoc.nita@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-yellow-400" /> sreejit.nita.ce@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-yellow-400" /> sohamdey.nita@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-yellow-400" /> +91 79086 17675
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-yellow-400" /> MUNSOC, NIT Agartala
            </li>
          </ul>
        </div>

        {/* Important Dates */}
        <div>
          <h2 className="text-yellow-400 font-semibold text-lg">Important Dates</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Early Bird: October 25, 2025</li>
            <li>Regular: October 30, 2025</li>
            <li>Event: November 8–9, 2025</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-500 text-xs mt-10 border-t border-gray-800 pt-4">
        © 2025 KACE 9. All rights reserved.
      </div>
    </footer>
  );
}
