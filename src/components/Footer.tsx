"use client";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/Shadow-Mo",
    icon: <IconBrandGithub className="h-5 w-5" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mounesha-zonde-3a8481153/",
    icon: <IconBrandLinkedin className="h-5 w-5" />,
  },
  {
    label: "Email",
    href: "mailto:mouneshe2002@gmail.com",
    icon: <IconMail className="h-5 w-5" />,
  },
];

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 pb-10 flex flex-col items-center gap-6">
        <div className="flex gap-3">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-border text-foreground/70 hover:text-foreground hover:border-foreground hover:-translate-y-0.5 transition-all"
            >
              {s.icon}
            </a>
          ))}
        </div>

        <p className="text-xs font-mono text-muted-foreground text-center">
          Designed &amp; built by Mounesha Zonde &middot; &copy;{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
