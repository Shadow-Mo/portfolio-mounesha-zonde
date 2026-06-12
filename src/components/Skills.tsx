"use client";
import dynamic from "next/dynamic";
import Reveal from "./ui/reveal";

const IconCloud = dynamic(() => import("@/components/ui/icon-cloud"), {
  ssr: false,
});

const slugs = [
  "typescript",
  "javascript",
  "python",
  "java",
  "react",
  "nextdotjs",
  "nodejs",
  "express",
  "tailwindcss",
  "materialui",
  "mongodb",
  "mysql",
  "openai",
  "microsoftazure",
  "googlecloud",
  "vercel",
  "github",
  "gitlab",
  "framer",
];

const technologies = [
  "TypeScript",
  "React / Next.js",
  "Node.js / Express",
  "Python",
  "Azure AI Foundry / ACS",
  "GCP Vertex AI",
  "MongoDB / MySQL",
  "Agentic AI / RAG",
];

export default function Skills() {
  return (
    <div id="about" className="bg-background w-full">
      <div className="flex flex-col md:flex-row min-h-screen p-8 items-center justify-between w-full max-w-6xl mx-auto relative gap-8">
        <div className="md:w-1/2 md:pr-8">
          <Reveal>
            <h1 className="text-3xl sm:text-5xl font-bold mb-6 text-logo-primary">
              About Me
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed mb-4 text-foreground/80">
              I&apos;m a full-stack developer at AI.HYR, where I build an
              AI-powered interview and assessment platform - LLM-driven
              conversational systems running in production on Azure and GCP.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base leading-relaxed mb-8 text-foreground/80">
              I got here by building for the web: MERN applications at
              BoomPanda, a published npm package, and plenty of side projects.
              I care about clean architecture and shipping reliable software
              end-to-end.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-base leading-relaxed mb-4 font-semibold">
              Technologies I work with most:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 text-sm font-mono text-foreground/80 max-w-lg">
              {technologies.map((tech) => (
                <li key={tech} className="flex items-center gap-2.5">
                  <span className="text-logo-accent">{"▹"}</span>
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="md:w-1/2 flex items-center justify-center">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </div>
  );
}
