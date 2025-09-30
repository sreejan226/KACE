"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 border-t border-gray-800">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-yellow-400 font-bold text-lg">IISERK MUNdane 2025</h2>
          <p className="mt-3 text-sm leading-relaxed">
            Empowering young minds to solve global challenges through diplomatic
            dialogue and international cooperation.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-yellow-400 transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              <FaFacebook size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-yellow-400 font-semibold text-lg">Quick Links</h2>
          <ul className="mt-3 space-y-2">
            <li>
              <Link href="/" className="hover:text-yellow-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-yellow-400 transition">
                Events
              </Link>
            </li>
            <li>
              <Link href="/register" className="hover:text-yellow-400 transition">
                Register
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-yellow-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-yellow-400 font-semibold text-lg">Contact Info</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} /> sreejandas226@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> 93305 39813
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> MUNSOC, NIT Agartala
            </li>
          </ul>
        </div>

        {/* Important Dates */}
        <div>
          <h2 className="text-yellow-400 font-semibold text-lg">Important Dates</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Early Bird: October 25, 2025</li>
            <li>Regular: October 20, 2025</li>
            <li>Event: November 8–9, 2025</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-500 text-xs mt-8 border-t border-gray-800 pt-4">
        © 2025 KACE 9. All rights reserved.
      </div>
    </footer>
  );
}
