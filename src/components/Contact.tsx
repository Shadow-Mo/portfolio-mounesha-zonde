"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconMail,
  IconPhoneCall,
} from "@tabler/icons-react";

export default function Contact() {
  const links = [
    {
      title: "Email",
      icon: <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "mailto:mouneshe2002@gmail.com",
    },
    {
      title: "Phone",
      icon: <IconPhoneCall className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "tel:+918788288087",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://www.linkedin.com/in/mounesha-zonde-3a8481153/",
    },
    {
      title: "Twitter",
      icon: <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://x.com/shiroiakuma007",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://github.com/Shadow-Mo",
    },
  ];

  return (
    <div
      id="contact"
      className="bg-primary-foreground min-h-screen flex flex-col justify-between items-center py-10 px-4 sm:px-8"
    >
      {/* Title Section */}
      <div className="text-center mt-24 sm:mt-40">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-logo-primary">
          Get in Touch
        </h1>
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300">
          Let&apos;s connect! Reach me through any of the platforms below.
        </p>
      </div>

      {/* Floating Dock - Always Visible */}
      <div className="mt-16 w-full flex justify-center">
        <FloatingDock items={links} />
      </div>

      {/* Footer */}
      <footer className="text-center mt-10">
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Made with <span className="inline-block animate-pulse text-red-500">❤️</span> by Mounesha Zonde
        </p>
      </footer>
    </div>
  );
}
