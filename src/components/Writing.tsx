"use client";
import { IconArrowUpRight, IconBrandLinkedin } from "@tabler/icons-react";

export default function Writing() {
  const articles = [
    {
      title:
        "Why REST-based Video Uploads Failed — and Why We Moved to Azure Services",
      description:
        "A deep dive into the architectural shift from REST-based uploads to Azure Communication Services (ACS) for real-time communication workflows — covering real-time handling, scalability tradeoffs, and implementation considerations.",
      tags: ["Azure", "ACS", "Architecture", "Real-time"],
      link: "https://www.linkedin.com/pulse/why-rest-based-video-uploads-failed-we-moved-azure-services-zonde-4b3lf",
      platform: "LinkedIn",
      date: "2025",
    },
  ];

  return (
    <div id="writing" className="bg-primary-foreground min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16 sm:py-20">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-logo-primary">
          Writing
        </h1>
        <p className="text-base sm:text-lg text-gray-500 mb-10 max-w-2xl">
          Notes from the field — architecture decisions, lessons learned, and
          deep dives into the systems I work on.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, idx) => (
            <a
              key={idx}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block p-6 sm:p-8 rounded-2xl border border-gray-200 bg-white hover:border-logo-primary hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
                  <IconBrandLinkedin className="h-4 w-4" />
                  <span>{article.platform}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>
                <IconArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-logo-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-logo-primary transition-colors">
                {article.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                {article.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}