"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import SlideArrowButton from "@/components/animata/button/ButtonArrow";

export default function EventsComingSoon() {
  // 15 days from now
  const [timeLeft, setTimeLeft] = useState(15 * 24 * 60 * 60 * 1000); // milliseconds

  useEffect(() => {
    const targetTime = new Date().getTime() + timeLeft;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetTime - now;
      setTimeLeft(diff > 0 ? diff : 0);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Convert milliseconds to days, hours, minutes, seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  const timeBoxes = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 mb-6">
        Events Coming Soon
      </h1>
      <p className="text-white/80 text-lg md:text-xl mb-12 max-w-xl">
        The most exciting events are just around the corner. Countdown to join us!
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        {timeBoxes.map((box) => (
          <div
            key={box.label}
            className="flex flex-col items-center bg-black border border-yellow-500 rounded-lg p-6 w-28 h-28 justify-center shadow-lg relative overflow-hidden"
          >
            <span className="text-4xl md:text-5xl font-bold text-yellow-400">
              {String(box.value).padStart(2, "0")}
            </span>
            <span className="text-sm text-white/80 mt-2">{box.label}</span>

            {/* Thin spinning border */}
            <div className="absolute inset-0 border border-yellow-400 rounded-lg animate-spin-slow opacity-20"></div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex gap-4 flex-wrap justify-center">
        <Link
          href="/"
          className="0 text-black font-bold  rounded-full "
        >
          <SlideArrowButton
              text="Back Home"
              primaryColor="#d4a31b"
              className="px-2 py-[6px] text-lg"
              textClassName="text-black"
            />
        </Link>

        {/* Scroll to contact section on home page */}
        <Link
          href="/#contact"
          className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold py-2 px-12 rounded-full transition"
        >
          Contact Us
        </Link>
      </div>

      <p className="text-white/50 mt-10 text-sm">
        © 2025 MUNSOC KACE. All rights reserved.
      </p>
    </div>
  );
}
