"use client";

const TECH = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Python",
  "MongoDB",
  "MySQL",
  "Tailwind CSS",
  "Azure AI Foundry",
  "ACS",
  "GCP Vertex AI",
  "Agentic AI",
  "RAG",
  "GitLab CI/CD",
  "Framer Motion",
];

export default function TechMarquee() {
  // Duplicated list + translateX(-50%) makes the loop seamless
  const items = [...TECH, ...TECH];

  return (
    <div className="bg-background overflow-hidden py-5 border-y border-border/60 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {items.map((tech, i) => (
          <span
            key={i}
            className="text-sm font-mono text-muted-foreground whitespace-nowrap"
          >
            {tech}
            <span className="mx-8 text-logo-accent/60">&middot;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
