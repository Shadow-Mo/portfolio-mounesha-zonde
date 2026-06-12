"use client";
import { IconArrowUpRight } from "@tabler/icons-react";
import Reveal from "./ui/reveal";

const articles = [
  {
    title:
      "Why REST-based Video Uploads Failed - and Why We Moved to Azure Services",
    description:
      "Why our REST-based upload flow broke down at scale, and what changed when we moved to Azure Communication Services - tradeoffs, architecture, and lessons learned.",
    tags: ["Azure", "ACS", "Architecture", "Real-time"],
    link: "https://www.linkedin.com/pulse/why-rest-based-video-uploads-failed-we-moved-azure-services-zonde-4b3lf",
    platform: "LinkedIn",
    date: "2025",
  },
];

export default function Writing() {
  return (
    <div id="writing" className="bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-20">
        <Reveal>
          <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-logo-primary">
            Writing
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-10 max-w-2xl">
            Architecture decisions and lessons learned from systems I work on.
          </p>
        </Reveal>

        <div className="border-t border-border">
          {articles.map((article, idx) => (
            <Reveal key={article.title} delay={0.05 + idx * 0.08}>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-1 md:grid-cols-[150px_1fr_auto] gap-3 md:gap-8 py-8 border-b border-border items-start"
              >
                <p className="text-xs font-mono text-muted-foreground md:pt-1.5">
                  {article.platform} &middot; {article.date}
                </p>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-logo-primary transition-colors mb-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-3 max-w-2xl">
                    {article.description}
                  </p>
                  <ul className="flex flex-wrap gap-x-3 gap-y-1 text-xs font-mono text-muted-foreground">
                    {article.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>

                <IconArrowUpRight className="hidden md:block h-5 w-5 mt-1.5 text-muted-foreground group-hover:text-logo-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
