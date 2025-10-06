"use client";

import { useCallback, useRef, useState } from "react";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { cn } from "@/lib/utils";

interface EventCardProps {
  icon: React.ReactNode;
  title: string;
  description: string | string[];
  className?: string;
}

export default function EventCard({
  icon,
  title,
  description,
  className,
}: EventCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false); // for touch devices

  // Mouse / Pointer position updates the shine
  const update = useCallback(
    ({ x, y }: { x: number; y: number }) => {
      if (!overlayRef.current) return;
      const { width = 0, height = 0 } = overlayRef.current.getBoundingClientRect();
      overlayRef.current.style.setProperty("--x", `${x - width / 2}px`);
      overlayRef.current.style.setProperty("--y", `${y - height / 2}px`);
    },
    []
  );

  useMousePosition(containerRef, update);

  // Touch / click handler
  const handleTouch = () => {
    setActive(true);
    // remove shine after 1s
    setTimeout(() => setActive(false), 1000);
  };

  return (
    <div
      ref={containerRef}
      onTouchStart={handleTouch}
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-[#111111] p-6 shadow-md min-h-[220px] h-full glow-gold border",
        className
      )}
      style={{ borderColor: "rgba(255,213,77,0.35)" }}
    >
      {/* subtle shiny overlay */}
      <div
        ref={overlayRef}
        className={cn(
          "pointer-events-none absolute z-0 h-64 w-64 rounded-full bg-white/15 blur-3xl transition-opacity duration-200",
          (active ? "opacity-25" : "group-hover:opacity-25")
        )}
        style={{ transform: "translate(var(--x), var(--y))" }}
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-start text-center space-y-3">
        <div className="text-yellow-400 text-4xl">{icon}</div>
        <h3 className="text-lg font-semibold text-yellow-400">{title}</h3>
        {Array.isArray(description) ? (
          <ul className="text-gray-200 text-sm space-y-1">
            {description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-200 text-sm">{description}</p>
        )}
      </div>
    </div>
  );
}
