"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SlideArrowButton from "@/components/animata/button/ButtonArrow";
import TextBorderAnimation from "../animata/Border/TextBorder";
import GibberishText from "../animata/text/Gibberish";

export default function HeroSection() {
  const [year, setYear] = useState(2022); // start year

  useEffect(() => {
    let currentYear = 2022;
    const endYear = 2025;
    const interval = setInterval(() => {
      if (currentYear < endYear) {
        currentYear += 1;
        setYear(currentYear);
      } else {
        clearInterval(interval);
      }
    }, 400); // change every 400ms
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative text-white py-20 px-6 lg:px-16"
      style={{ background: "var(--hero-gradient-lr)" }}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
            <GibberishText text="MUNSOC" />{" "}
            <span className="accent-gradient-text">
              <TextBorderAnimation text="KACE" />
            </span>{" "}
            {year} {/* Counter */}
          </h1>

          <p className="text-xl text-muted">
            Shaping Tomorrow&apos;s Global Leaders
          </p>
          <p className="text-muted max-w-xl">
            Join us for an immersive Model United Nations experience where diplomacy 
            meets innovation. Engage in meaningful debates, forge international 
            connections, and develop solutions for global challenges.
          </p>

          {/* Committees */}
          <div>
            <span className="text-5xl font-bold" style={{ color: "var(--gold)" }}>2</span>
            <p className="text-muted">Committees</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <Link href="/register" className="rounded-full">
              <SlideArrowButton
                text="Register Now"
                primaryColor="#000000"
                className="px-2 py-[6px] text-lg"
                textClassName="text-black"
              />
            </Link>
            <Link href="/events" className="rounded-full">
              <SlideArrowButton
                text="View Events"
                primaryColor="#d4a31b"
                className="px-2 py-[6px] text-lg"
                textClassName="text-black"
              />
            </Link>
          </div>
        </div>

        {/* Right Logo */}
        <div className="flex justify-center">
          <div
            className="rounded-2xl p-6 glow-gold"
            style={{
              background: "linear-gradient(135deg, rgba(13,13,16,0.9), rgba(43,45,52,0.6))",
              border: "1px solid rgba(255,213,77,0.35)",
            }}
          >
            <Image
              src="/assets/MUNSOClogo.png"
              alt="MUNSOC KACE 2025 Logo"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
