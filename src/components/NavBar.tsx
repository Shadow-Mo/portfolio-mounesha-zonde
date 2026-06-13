"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { IconExternalLink } from "@tabler/icons-react";
import LogoMark from "@/components/ui/logo-mark";
import ThemeToggle from "@/components/ThemeToggle";

const RESUME_URL =
  "https://drive.google.com/file/d/15cSm-qpmSotIeJKg1wQw0SzFTJ-eDhSZ/view?usp=sharing";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState<string>("home");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(sectionId);
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // At the bottom of the page, highlight Contact even if it never
      // crosses the spy line (it's a short section)
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10
      ) {
        setActive("contact");
        return;
      }

      let currentSection = "home";
      for (const { id } of NAV_ITEMS) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = id;
            break;
          }
        }
      }
      setActive(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "bg-background/80 backdrop-blur-md border-b border-border shadow-md",
        // Pill aligned to the same max-w-6xl column as the page content
        "md:top-4 md:mx-auto md:w-[calc(100%-3rem)] md:max-w-6xl md:rounded-full md:border md:shadow-lg"
      )}
    >
      <div className="flex items-center justify-between px-4 py-3 md:px-8 md:py-3">
        <div className="flex items-center space-x-3">
          <LogoMark className="h-8 w-8 md:h-10 md:w-10" />
          <span className="text-sm font-semibold text-foreground md:text-lg">
            Mounesha Zonde
          </span>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-foreground/70 hover:text-foreground focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              {menuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.225 4.811a.9.9 0 011.274 0L12 9.312l4.501-4.5a.9.9 0 111.274 1.274L13.312 10.586l4.463 4.462a.9.9 0 11-1.273 1.275L12 11.86l-4.462 4.462a.9.9 0 11-1.275-1.273l4.462-4.463-4.462-4.463a.9.9 0 010-1.274z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zm0 5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm.75 4.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z"
                />
              )}
            </svg>
          </button>
        </div>

        <nav className="hidden md:flex items-center space-x-4">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              aria-current={active === item.id ? "true" : undefined}
              className={cn(
                "text-sm font-medium px-3 py-2 rounded-full transition-colors",
                active === item.id
                  ? "bg-muted text-foreground"
                  : "text-foreground/60 hover:text-foreground"
              )}
            >
              {item.label}
            </button>
          ))}

          <ThemeToggle />

          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
            <Button
              variant="default"
              className="flex items-center space-x-1 px-4 py-2 text-sm font-medium rounded-full"
            >
              <span>Resume</span>
              <IconExternalLink className="h-4 w-4" />
            </Button>
          </a>
        </nav>
      </div>

      <nav
        className={cn(
          "absolute left-0 right-0 md:hidden bg-background border-b border-border shadow-lg",
          "transition-all duration-300 ease-in-out transform origin-top",
          menuOpen
            ? "scale-y-100 opacity-100 pointer-events-auto"
            : "scale-y-0 opacity-0 pointer-events-none"
        )}
        style={{ top: "100%" }}
      >
        <div className="flex flex-col items-start pb-3 px-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "w-full text-left text-sm font-medium px-4 py-2 my-1 rounded-md transition-all duration-300 ease-in-out",
                active === item.id
                  ? "bg-muted text-foreground shadow-md"
                  : "text-foreground/60 hover:text-foreground"
              )}
            >
              {item.label}
            </button>
          ))}

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-2"
          >
            <Button
              variant="default"
              className="w-full my-1 flex items-center justify-center space-x-1 px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ease-in-out"
            >
              <span>Resume</span>
              <IconExternalLink className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </nav>
    </header>
  );
}
