"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SlideArrowButton from "@/components/animata/button/ButtonArrow";
import TextBorderAnimation from "../animata/Border/TextBorder";
import GibberishText from "../animata/text/Gibberish";

export default function HeroSection() {
  const [year, setYear] = useState(2022);

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
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-16 xl:px-24"
      style={{ background: "var(--hero-gradient-lr)" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            <GibberishText text="MUNSOC" />{" "}
            <span className="accent-gradient-text">
              <TextBorderAnimation text="KACE" />
            </span>{" "}
            {year}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted">
            Shaping Tomorrow&apos;s Global Leaders
          </p>

          <p className="text-sm sm:text-base md:text-lg text-muted max-w-xl mx-auto lg:mx-0">
            Join us for an immersive Model United Nations experience where
            diplomacy meets innovation. Engage in meaningful debates, forge
            international connections, and develop solutions for global
            challenges.
          </p>

          {/* Committees */}
          <div className="pt-2">
            <span
              className="text-4xl sm:text-5xl md:text-6xl font-bold block"
              style={{ color: "var(--gold)" }}
            >
              UN Women
            </span>
            <p className="text-muted text-sm sm:text-base">Committees</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <Link href="/register" className="rounded-full">
              <SlideArrowButton
                text="Register Now"
                primaryColor="#000000"
                className="px-4 py-[8px] text-base sm:text-lg"
                textClassName="text-black"
              />
            </Link>
            <Link href="/events" className="rounded-full">
              <SlideArrowButton
                text="View Events"
                primaryColor="#d4a31b"
                className="px-4 py-[8px] text-base sm:text-lg"
                textClassName="text-black"
              />
            </Link>
          </div>
        </div>

        {/* Right Logo */}
        <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
          <div
            className="rounded-2xl p-4 sm:p-6 glow-gold"
            style={{
              background:
                "linear-gradient(135deg, rgba(13,13,16,0.9), rgba(43,45,52,0.6))",
              border: "1px solid rgba(255,213,77,0.35)",
            }}
          >
            <Image
              src="/assets/MUNSOClogo.png"
              alt="MUNSOC KACE 2025 Logo"
              width={350}
              height={350}
              className="rounded-lg w-52 sm:w-72 md:w-80 lg:w-[400px] h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
