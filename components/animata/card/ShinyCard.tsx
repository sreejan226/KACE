"use client";

import { useCallback, useRef } from "react";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { cn } from "@/lib/utils";

interface EventCardProps {
  icon: React.ReactNode;
  title: string;
  description: string | string[];
  className?: string;
}

export default function EventCard({ icon, title, description, className }: EventCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const update = useCallback(({ x, y }: { x: number; y: number }) => {
    if (!overlayRef.current) return;
    const { width = 0, height = 0 } = overlayRef.current.getBoundingClientRect();
    overlayRef.current.style.setProperty("--x", `${x - width / 2}px`);
    overlayRef.current.style.setProperty("--y", `${y - height / 2}px`);
  }, []);

  useMousePosition(containerRef, update);

  return (
    <div
      ref={containerRef}
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-[#111111] p-6 shadow-md min-h-[220px] h-full glow-gold border",
        className,
      )}
      style={{ borderColor: "rgba(255,213,77,0.35)" }}
    >
      {/* subtle shiny overlay; does not change design colors */}
      <div
        ref={overlayRef}
        className="pointer-events-none absolute z-0 h-64 w-64 rounded-full bg-white/15 opacity-0 blur-3xl transition-opacity duration-200 group-hover:opacity-25"
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

      {/* show the shine on hover */}
      <style jsx>{`
        div:hover > div.pointer-events-none { opacity: 0.25; }
      `}</style>
    </div>
  );
}
