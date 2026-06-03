"use client";
import dynamic from "next/dynamic";

const IconCloud = dynamic(() => import("@/components/ui/icon-cloud"), {
  ssr: false,
});

const slugs = [
  "typescript",
  "javascript",
  "python",
  "materialui",
  "tailwindcss",
  "mysql",
  "mongodb",
  "java",
  "react",
  "nextdotjs",
  "html5",
  "css3",
  "express",
  "vercel",
  "openai",
  "microsoftazure",
  "googlecloud",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "nodejs",
];

export default function Skills() {
  return (
    <div id="about" className="bg-primary-foreground w-full">
      {/* Outer container centers content and enforces min-h-screen */}
      <div className="flex flex-col md:flex-row min-h-screen p-8 items-center justify-between w-full max-w-6xl mx-auto relative">
        {/* Left Column: About Me Text */}
        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-base leading-relaxed mb-4">
            Hello! I am a full-stack developer with a keen interest in
            crafting scalable web applications and AI-powered systems. My
            journey began with HTML & CSS and has evolved into building
            production-grade products with React, Next.js, Node.js, and
            Python.
          </p>
          <p className="text-base leading-relaxed mb-4">
            These days I spend most of my time building cloud-integrated,
            AI-first applications — designing agentic workflows, integrating
            LLMs, and shipping real-time experiences on Microsoft Azure and
            Google Cloud. I care about clean architecture, accessibility, and
            shipping reliable software end-to-end.
          </p>
          <p className="text-base leading-relaxed mb-4 font-semibold">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="grid grid-cols-2 gap-2 text-base mt-4">
            <li>TypeScript / Next.js</li>
            <li>Python / Node.js</li>
            <li>Azure AI Foundry & ACS</li>
            <li>GCP Vertex AI / ADK Agents</li>
            <li>Agentic AI & RAG</li>
            <li>MongoDB / MySQL</li>
          </ul>
        </div>

        {/* Right Column: Icon Cloud */}
        <div className="md:w-1/2 flex items-center justify-center">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </div>
  );
}
