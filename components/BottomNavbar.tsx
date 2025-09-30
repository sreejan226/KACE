"use client";
import Link from "next/link";
import { Home, Calendar, UserPlus, Phone } from "lucide-react";

export default function BottomNavbar() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl rounded-full px-6 py-3">
        
        {/* Home */}
        <Link 
          href="/" 
          className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-white/20 transition"
        >
          <Home className="w-5 h-5 text-yellow-400" />
          <span className="text-sm text-white">Home</span>
        </Link>

        {/* Events */}
        <Link 
          href="/events" 
          className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-white/20 transition"
        >
          <Calendar className="w-5 h-5 text-blue-400" />
          <span className="text-sm text-white">Events</span>
        </Link>

        {/* Register */}
        <Link 
          href="/register" 
          className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-white/20 transition"
        >
          <UserPlus className="w-5 h-5 text-green-400" />
          <span className="text-sm text-white">Register</span>
        </Link>

        {/* Contact (goes to home page contact section) */}
        <Link 
          href="/#contact" 
          className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-white/20 transition"
        >
          <Phone className="w-5 h-5 text-pink-400" />
          <span className="text-sm text-white">Contact</span>
        </Link>

      </div>
    </div>
  );
}
