import { Tourney } from "next/font/google";
import { cn } from "@/lib/utils";
import React from "react";

const tourney = Tourney({
  subsets: ["latin"],
});

export default function BoldCopy({
  text = "animata",
  className,
  textClassName,
  backgroundTextClassName,
  onClick, // 👈 Added click handler support
}: {
  text: string;
  className?: string;
  textClassName?: string;
  backgroundTextClassName?: string;
  onClick?: () => void; // optional
}) {
  if (!text?.length) return null;

  return (
    <div
      onClick={onClick}
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
          "text-2xl font-bold uppercase text-foreground/15 transition-all group-hover:opacity-50 md:text-5xl",
          backgroundTextClassName
        )}
      >
        {text}
      </div>

      {/* Foreground text */}
      <div
        className={cn(
          "text-sm absolute font-bold uppercase text-foreground transition-all group-hover:text-2xl md:text-xl group-hover:md:text-5xl",
          textClassName
        )}
      >
        {text}
      </div>
    </div>
  );
}
