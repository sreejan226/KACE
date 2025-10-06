"use client";

import { Tourney } from "next/font/google";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

const tourney = Tourney({
  subsets: ["latin"],
});

export default function BoldCopy({
  text = "animata",
  className,
  textClassName,
  backgroundTextClassName,
  onClick,
}: {
  text: string;
  className?: string;
  textClassName?: string;
  backgroundTextClassName?: string;
  onClick?: () => void;
}) {
  const [clicked, setClicked] = useState(false);

  if (!text?.length) return null;

  const handleClick = () => {
    if (onClick) onClick();
    setClicked(true);
    setTimeout(() => setClicked(false), 300); // match animation duration
  };

  return (
    <div
      onClick={handleClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      className={cn(
        "group relative flex items-center justify-center px-2 py-2 md:px-4 md:py-3 cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        tourney.className,
        className
      )}
    >
      {/* Background faint text */}
      <div
        className={cn(
          "text-2xl font-bold uppercase text-foreground/15 transition-all md:text-5xl",
          backgroundTextClassName,
          {
            "opacity-50": clicked, // trigger fade like hover
            "group-hover:opacity-50": !clicked, // keep normal hover behavior
          }
        )}
      >
        {text}
      </div>

      {/* Foreground text */}
      <div
        className={cn(
          "text-sm absolute font-bold uppercase text-foreground transition-all md:text-xl",
          textClassName,
          {
            "text-2xl md:text-5xl": clicked, // trigger hover-scale on click
            "group-hover:text-2xl md:group-hover:text-5xl": !clicked,
          }
        )}
      >
        {text}
      </div>
    </div>
  );
}
