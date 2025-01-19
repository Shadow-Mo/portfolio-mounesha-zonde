"use client";
import dynamic from "next/dynamic";

const IconCloud = dynamic(() => import("@/components/ui/icon-cloud"), {
  ssr: false,
});

const slugs = [
  "typescript",
  "javascript",
  "materialui",
  "tailwindcss",
  "mysql",
  "mongodb",
  "java",
  "react",
  "html5",
  "css3",
  "express",
  "vercel",
  "openai",
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
            Hello! I am a passionate full-stack developer with a keen interest
            in crafting scalable and efficient web applications. My journey in
            web development began with exploring HTML & CSS and has now evolved
            into mastering frameworks like React, Node.js, and Next.js.
          </p>
          <p className="text-base leading-relaxed mb-4">
            Over the years, I have worked on various exciting projects ranging
            from building modern web applications to integrating cloud-based
            solutions using Azure, MongoDB, and MySQL. My primary focus is on
            creating user-friendly and accessible digital experiences for a
            variety of clients.
          </p>
          <p className="text-base leading-relaxed mb-4 font-semibold">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="grid grid-cols-2 gap-2 text-base mt-4">
            <li>Typescript</li>
            <li>Tailwindcss</li>
            <li>Nextjs</li>
            <li>Azure(Openai services)</li>
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
