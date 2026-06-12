"use client";
import { useEffect, useState } from "react";

type TypewriterProps = {
  text: string;
  speed?: number;
  startDelay?: number;
};

export default function Typewriter({
  text,
  speed = 50,
  startDelay = 600,
}: TypewriterProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!started || count >= text.length) return;
    const t = setTimeout(() => setCount((c) => c + 1), speed);
    return () => clearTimeout(t);
  }, [started, count, text.length, speed]);

  return (
    <span className="relative inline-block">
      {/* Invisible full text (plus cursor width) reserves the final layout, so nothing shifts or wraps while typing */}
      <span className="invisible" aria-hidden>
        {text}
        <span className="ml-1 inline-block w-[3px]" />
      </span>
      <span className="absolute inset-0">
        {text.slice(0, count)}
        <span className="ml-1 inline-block h-[0.8em] w-[3px] translate-y-[0.08em] bg-logo-primary animate-blink" />
      </span>
    </span>
  );
}
