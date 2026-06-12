"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type RotatingTextProps = {
  words: string[];
  interval?: number;
  className?: string;
};

export default function RotatingText({
  words,
  interval = 2500,
  className,
}: RotatingTextProps) {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState<number | "auto">("auto");
  const measureRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      interval
    );
    return () => clearInterval(id);
  }, [words.length, interval]);

  // Animate the container to each word's measured width so the
  // surrounding sentence closes up smoothly instead of leaving gaps.
  useEffect(() => {
    const el = measureRefs.current[index];
    if (el) setWidth(el.offsetWidth);
  }, [index]);

  return (
    <span className={cn("relative inline-flex align-bottom", className)}>
      {/* Hidden copies of every word, used only for measuring */}
      <span
        className="absolute invisible whitespace-nowrap pointer-events-none"
        aria-hidden
      >
        {words.map((word, i) => (
          <span
            key={word}
            ref={(el) => {
              measureRefs.current[i] = el;
            }}
            className="inline-block"
          >
            {word}
          </span>
        ))}
      </span>

      <motion.span
        animate={{ width }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="inline-flex overflow-hidden whitespace-nowrap"
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={words[index]}
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="whitespace-nowrap"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </span>
  );
}
