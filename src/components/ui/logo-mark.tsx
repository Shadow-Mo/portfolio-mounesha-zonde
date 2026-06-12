"use client";
import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  LOGO_VIEWBOX,
  CIRCLE_PATH,
  INITIALS_PATH,
  FLAME_PATH,
} from "./logo-paths";

type LogoMarkProps = {
  className?: string;
  /** When true, the brush circle paints itself on and the flame/initials follow */
  animated?: boolean;
};

/**
 * The brand mark, vector-traced from the original artwork (see
 * scripts/trace-logo.js): rough brush circle, flame, and "mz" initials.
 * The flame burns perpetually via turbulence distortion + a flicker loop.
 * Colors follow the theme tokens so the mark adapts to light/dark mode.
 */
export default function LogoMark({
  className,
  animated = false,
}: LogoMarkProps) {
  const maskId = useId();
  const flameFilterId = useId();
  const reduceMotion = useReducedMotion();

  return (
    <svg
      viewBox={LOGO_VIEWBOX}
      role="img"
      aria-label="Mounesha Zonde logo"
      className={cn("select-none", className)}
    >
      <defs>
        {animated && (
          // A sweeping stroke in the mask "paints" the brush circle on
          <mask id={maskId} maskUnits="userSpaceOnUse">
            <motion.circle
              cx="240"
              cy="267"
              r="212"
              fill="none"
              stroke="white"
              strokeWidth="130"
              transform="rotate(-90 240 267)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.9, ease: "easeInOut", delay: 0.1 }}
            />
          </mask>
        )}

        {/* Drifting turbulence warps the flame outline like heat haze */}
        {!reduceMotion && (
          <filter
            id={flameFilterId}
            x="-30%"
            y="-30%"
            width="160%"
            height="160%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.012 0.035"
              numOctaves="2"
              seed="3"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                dur="4s"
                values="0.012 0.035;0.018 0.055;0.012 0.035"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="10"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        )}
      </defs>

      <path
        d={CIRCLE_PATH}
        fill="hsl(var(--logo-primary))"
        mask={animated ? `url(#${maskId})` : undefined}
      />

      {/* Outer group: one-time entrance; inner group: perpetual flicker */}
      <motion.g
        initial={animated ? { opacity: 0, scale: 0.6 } : false}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.7 }}
        style={{ transformOrigin: "240px 285px" }}
        className="drop-shadow-[0_0_12px_rgba(251,123,75,0.35)]"
      >
        <motion.g
          style={{ transformOrigin: "240px 285px" }}
          animate={
            reduceMotion
              ? undefined
              : {
                  scaleY: [1, 1.05, 0.97, 1.03, 1],
                  scaleX: [1, 0.97, 1.02, 0.99, 1],
                  rotate: [0, -1.2, 1, -0.5, 0],
                }
          }
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d={FLAME_PATH}
            fill="hsl(var(--logo-accent))"
            filter={reduceMotion ? undefined : `url(#${flameFilterId})`}
          />
        </motion.g>
      </motion.g>

      <motion.path
        d={INITIALS_PATH}
        fill="hsl(var(--logo-primary))"
        initial={animated ? { opacity: 0, y: 14 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.9 }}
      />
    </svg>
  );
}
