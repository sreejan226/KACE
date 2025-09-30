"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface TextProps {
  text: string;
  className?: string;
}

export default function TextBorderAnimation({ text = "Programming", className }: TextProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative inline-block"
    >
      {/* Gold text */}
      <span className={cn("text-5xl font-bold text-yellow-400", className)}>
        {text}
      </span>

      {/* Bottom border */}
      <span className="absolute left-0 bottom-0 h-[4px] w-full overflow-hidden">
        <span
          className={cn(
            "block h-full bg-yellow-500 transition-transform duration-300",
            hovered
              ? "transform scale-x-100 origin-left"
              : "transform scale-x-0 origin-right"
          )}
        />
      </span>
    </span>
  );
}
