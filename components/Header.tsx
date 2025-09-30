"use client";

import BoldCopy from "./animata/text/bold-copy";

export default function Header() {
  return (
    <div
      className="fixed top-0 left-0 w-full z-50"
      style={{ background: "var(--hero-gradient-lr)" }}
    >
      {/* Golden glowing underline */}
      <div
        className="absolute bottom-0 left-0 w-full h-[2px]"
        style={{ background: "var(--gold)" }}
      >
        <div
          className="absolute -bottom-[2px] left-0 w-full h-[8px] blur-md opacity-70"
          style={{ background: "var(--gold)" }}
        ></div>
      </div>

      {/* Text on left */}
      <div className="relative z-10 flex justify-start pl-16 py-4">
        <BoldCopy
          text="KACE 9"
          textClassName="accent-gradient-text"
          backgroundTextClassName="text-muted"
        />
      </div>
    </div>
  );
}
