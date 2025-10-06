"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

interface SlideArrowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  primaryColor?: string;
  textClassName?: string;
  href?: string; // target page
}

export default function SlideArrowButton({
  text = "Get Started",
  primaryColor = "#6f3cff",
  className = "",
  textClassName = "text-black",
  href,
  ...props
}: SlideArrowButtonProps) {
  const router = useRouter();
  const [animating, setAnimating] = useState(false);

  const handleClick = () => {
    if (!href) return;

    setAnimating(true);

    // wait for animation to finish before navigation
    setTimeout(() => {
      router.push(href);
    }, 300); // matches CSS animation
  };

  return (
    <button
      className={`group relative rounded-full border border-white bg-white p-2 text-xl font-semibold overflow-hidden ${className}`}
      {...props}
      onClick={handleClick}
    >
      {/* Sliding arrow background */}
      <div
        className={`absolute left-0 top-0 flex h-full w-11 items-center justify-end rounded-full transition-all duration-300 ease-in-out
          ${animating ? "w-full" : "group-hover:w-full"}`}
        style={{ backgroundColor: primaryColor }}
      >
        <span className="mr-3 text-white transition-all duration-300 ease-in-out">
          <ArrowRight size={20} />
        </span>
      </div>

      {/* Text */}
      <span
        className={`relative left-4 z-10 whitespace-nowrap px-8 font-semibold transition-all duration-300 ease-in-out
          ${animating ? "text-white -left-3" : "group-hover:text-white group-hover:-left-3"} ${textClassName}`}
      >
        {text}
      </span>
    </button>
  );
}
