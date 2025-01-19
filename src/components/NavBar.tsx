"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"; // Update path as needed
import { IconExternalLink } from "@tabler/icons-react"; // External link icon
import Image from "next/image";

export default function Navbar() {
  const [active, setActive] = useState<string>("home");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(sectionId);
      setMenuOpen(false); // Close menu after navigating
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "experience", "contact"];
      let currentSection = "home";

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = sections[i];
            break;
          }
        }
      }
      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50", // pinned + highest stacking
        "bg-white border-b border-gray-300 shadow-lg", // styling for top bar
        "md:top-4 md:left-10 md:right-10 md:rounded-full md:border md:shadow-lg"
      )}
    >
      {/* Top Bar Content */}
      <div className="flex items-center justify-between px-4 py-3 md:px-8 md:py-3">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.png" // Replace with your logo path
            alt="Logo"
            className="h-8 w-8 md:h-10 md:w-10"
          />
          <span className="text-sm font-semibold text-gray-800 md:text-lg">
            Mounesha Zonde
          </span>
        </div>

        {/* Hamburger Menu (mobile only) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-700 hover:text-gray-900 focus:outline-none md:hidden"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            {menuOpen ? (
              // X (Close) icon
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.225 4.811a.9.9 0 011.274 0L12 9.312l4.501-4.5a.9.9 0 111.274 1.274L13.312 10.586l4.463 4.462a.9.9 0 11-1.273 1.275L12 11.86l-4.462 4.462a.9.9 0 11-1.275-1.273l4.462-4.463-4.462-4.463a.9.9 0 010-1.274z"
              />
            ) : (
              // Hamburger icon
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zm0 5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm.75 4.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "experience", label: "Experience" },
            { id: "projects", label: "Projects" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ease-in-out transform",
                active === item.id
                  ? "bg-gray-200 text-gray-800 scale-105 shadow-md"
                  : "text-gray-600 hover:text-gray-800 hover:scale-105"
              )}
            >
              {item.label}
            </button>
          ))}

          {/* Resume Button with External Link Icon */}
          <a
            href="https://drive.google.com/file/d/1jGMJw2mDau4i1OJNs581clZQetcm3mM-/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="default"
              className="flex items-center space-x-1 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ease-in-out hover:scale-105"
            >
              <span>Resume</span>
              <IconExternalLink className="h-4 w-4" />
            </Button>
          </a>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={cn(
          // Absolutely position the mobile dropdown beneath the top bar
          "absolute left-0 right-0 md:hidden bg-white border-b border-gray-300 shadow-lg",
          // Transform origin + transition
          "transition-all duration-300 ease-in-out transform origin-top",
          menuOpen
            ? "scale-y-100 opacity-100 pointer-events-auto"
            : "scale-y-0 opacity-0 pointer-events-none"
        )}
        style={{ top: "100%" }} // place it right under the top bar
      >
        <div className="flex flex-col items-start pb-3">
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "experience", label: "Experience" },
            { id: "projects", label: "Projects" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "w-full text-left text-sm font-medium px-4 py-2 my-1 rounded-md transition-all duration-300 ease-in-out transform",
                active === item.id
                  ? "bg-gray-200 text-gray-800 scale-105 shadow-md"
                  : "text-gray-600 hover:text-gray-800 hover:scale-105"
              )}
            >
              {item.label}
            </button>
          ))}

          {/* Mobile version of Resume Button */}
          <a
            href="https://drive.google.com/file/d/1jGMJw2mDau4i1OJNs581clZQetcm3mM-/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button
              variant="default"
              className="ml-4 my-1 flex items-center space-x-1 px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ease-in-out hover:scale-105"
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
