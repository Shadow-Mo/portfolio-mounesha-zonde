"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export default function ThemeToggle({ className }: Props) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "inline-flex items-center justify-center h-9 w-9 rounded-full",
        "text-foreground/70 hover:text-foreground hover:bg-muted",
        "transition-all duration-300 ease-in-out hover:scale-110",
        className
      )}
    >
      {mounted ? (
        isDark ? (
          <IconSun className="h-5 w-5" />
        ) : (
          <IconMoon className="h-5 w-5" />
        )
      ) : (
        <span className="h-5 w-5" />
      )}
    </button>
  );
}
