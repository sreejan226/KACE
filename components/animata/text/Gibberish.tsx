import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface GibberishTextProps {
  /**
   * The text to animate.
   */
  text: string;

  /**
   * The class name to apply to each letter.
   */
  className?: string;

  /**
   * Optional click handler.
   */
  onClick?: () => void;
}

const Letter = ({
  letter,
  className,
}: {
  letter: string;
  className?: string;
}) => {
  const [code, setCode] = useState(letter.toUpperCase().charCodeAt(0));

  useEffect(() => {
    let count = Math.floor(Math.random() * 10) + 5;
    const interval = setInterval(() => {
      setCode(() => Math.floor(Math.random() * 26) + 65);
      count--;
      if (count === 0) {
        setCode(letter.toUpperCase().charCodeAt(0));
        clearInterval(interval);
      }
    }, 24);

    return () => clearInterval(interval);
  }, [letter]);

  return (
    <span className={cn("relative inline-block whitespace-pre", className)}>
      {/* Invisible letter to maintain spacing */}
      <span className="opacity-0">{letter}</span>

      {/* Animated overlay */}
      <span className="absolute inset-0">
        {String.fromCharCode(code)}
      </span>
    </span>
  );
};

export default function GibberishText({
  text,
  className,
  onClick,
}: GibberishTextProps) {
  return (
    <span
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      className={cn(
        "inline-flex cursor-pointer select-none items-center outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        className
      )}
    >
      {text.split("").map((letter, index) => (
        <Letter
          className={className}
          letter={letter}
          key={`${index}-${letter}-${Math.random()}`}
        />
      ))}
    </span>
  );
}
