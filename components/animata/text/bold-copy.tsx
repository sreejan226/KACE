import { Tourney } from "next/font/google";
import { cn } from "@/lib/utils";

const tourney = Tourney({
  subsets: ["latin"],
});

export default function BoldCopy({
  text = "animata",
  className,
  textClassName,
  backgroundTextClassName,
}: {
  text: string;
  className?: string;
  textClassName?: string;
  backgroundTextClassName?: string;
}) {
  if (!text?.length) {
    return null;
  }

  return (
    <div
      className={cn(
        "group relative flex items-center justify-center px-2 py-2 md:px-4 md:py-3",
        tourney.className,
        className,
      )}
    >
      {/* Background faint text */}
      <div
        className={cn(
          "text-2xl font-bold uppercase text-foreground/15 transition-all group-hover:opacity-50 md:text-5xl",
          backgroundTextClassName,
        )}
      >
        {text}
      </div>

      {/* Foreground text */}
      <div
        className={cn(
          "text-sm absolute font-bold uppercase text-foreground transition-all group-hover:text-2xl md:text-xl group-hover:md:text-5xl",
          textClassName,
        )}
      >
        {text}
      </div>
    </div>
  );
}
