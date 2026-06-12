"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LogoMark from "@/components/ui/logo-mark";

export default function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1700);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          aria-hidden
        >
          <LogoMark animated className="h-32 w-32" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
