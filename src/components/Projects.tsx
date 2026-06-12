"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Reveal from "./ui/reveal";
import { cn } from "@/lib/utils";
import {
  IconExternalLink,
  IconFolder,
  IconChevronDown,
} from "@tabler/icons-react";

type FeaturedProject = {
  title: string;
  context: string;
  description: string;
  tech: string[];
  link?: string;
  image: string;
  imageFit?: "cover" | "contain";
};

type OtherProject = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
};

const featuredProjects: FeaturedProject[] = [
  {
    title: "AI Interview & Assessment Platform",
    context: "Production - AI.HYR",
    description:
      "AI-powered interview and assessment platform: LLM-driven conversational interviews, evaluation workflows on Azure AI Foundry, and real-time communication built on Azure Communication Services.",
    tech: ["Next.js", "Python", "Azure AI Foundry", "ACS", "GCP Vertex AI"],
    link: "https://www.aihyr.com/",
    image: "/aihyr-logo.png",
    imageFit: "contain",
  },
  {
    title: "Focus Realm",
    context: "Client Work - BoomPanda",
    description:
      "Educational management system for students, teachers, and administrators - study sessions, assignment management, performance tracking, and real-time communication, built end-to-end on the MERN stack.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: "/focus-realm.jpg",
  },
  {
    title: "Create React Tailwind App",
    context: "Open Source - npm",
    description:
      "A published npm CLI that scaffolds a React app with Tailwind CSS pre-configured - one command, zero manual setup.",
    tech: ["Node.js", "CLI", "React", "Tailwind CSS"],
    link: "https://www.npmjs.com/package/@mouneshazonde/create-react-tailwind-app",
    image: "/npm-package.jpg",
  },
];

const otherProjects: OtherProject[] = [
  {
    title: "Mask Cursor",
    description:
      "A cursor-following mask that reveals hidden content beneath - an interaction study with Framer Motion.",
    tech: ["Next.js", "Framer Motion"],
    link: "https://mask-cursor-alpha.vercel.app/",
  },
  {
    title: "BoomPanda Admin Dashboard",
    description:
      "Admin interface with RESTful CRUD APIs for managing platform data at BoomPanda.",
    tech: ["Next.js", "MERN"],
  },
  {
    title: "Music Course",
    description:
      "Landing experience for a music-course platform with animated, scroll-driven sections.",
    tech: ["Next.js", "Tailwind CSS"],
    link: "https://musicnextjs-nu.vercel.app/",
  },
  {
    title: "3D Portfolio",
    description:
      "Interactive 3D models rendered inside a React application with Three.js.",
    tech: ["React", "Three.js"],
    link: "https://3-d-portfolio-tawny-two.vercel.app/",
  },
  {
    title: "Parallax Transition",
    description:
      "A study in smooth scroll-driven parallax transitions and visual storytelling.",
    tech: ["React", "GSAP"],
    link: "https://parallax-transition.vercel.app/",
  },
  {
    title: "Deadpool World",
    description:
      "An action-packed fan page for the iconic anti-hero, built while learning React.",
    tech: ["React", "CSS"],
    link: "https://deadpool-taupe.vercel.app/",
  },
  {
    title: "Portfolio v1",
    description:
      "An earlier iteration of this portfolio with responsive SASS styling.",
    tech: ["React", "SASS"],
    link: "https://portfolio-pi-seven-22.vercel.app/",
  },
  {
    title: "Secure Password Storage",
    description:
      "College project demonstrating password hashing and secure storage practices.",
    tech: ["PHP", "Security"],
    link: "https://shadow-mo.github.io/Secure-Password-Storage/register.html",
  },
  {
    title: "To-Do List",
    description: "The classic starter - my first project built with React.",
    tech: ["React"],
    link: "https://to-do-list-five-henna.vercel.app/",
  },
];

const INITIAL_VISIBLE = 6;

function FeaturedRow({
  project,
  reversed,
}: {
  project: FeaturedProject;
  reversed: boolean;
}) {
  const image = (
    <div
      className={cn(
        "group relative rounded-2xl border border-border overflow-hidden",
        project.imageFit === "contain"
          ? "bg-white flex items-center justify-center p-10 sm:p-14 aspect-video"
          : "bg-card"
      )}
    >
      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={450}
        className={cn(
          "transition-transform duration-500 group-hover:scale-[1.03]",
          project.imageFit === "contain"
            ? "object-contain max-h-full w-auto"
            : "object-cover w-full aspect-video"
        )}
      />
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 items-center">
      <div
        className={cn(
          "md:col-span-7 md:row-start-1",
          reversed ? "md:col-start-6" : "md:col-start-1"
        )}
      >
        {project.link ? (
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {image}
          </a>
        ) : (
          image
        )}
      </div>

      <div
        className={cn(
          "md:col-span-6 md:row-start-1 z-10",
          reversed ? "md:col-start-1 md:text-left" : "md:col-start-7 md:text-right"
        )}
      >
        <p className="text-logo-accent text-xs font-semibold uppercase tracking-widest mb-2">
          {project.context}
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-logo-primary transition-colors"
            >
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>

        <div className="rounded-xl border border-border bg-card p-5 shadow-xl mb-4">
          <p className="text-sm text-foreground/80 leading-relaxed">
            {project.description}
          </p>
        </div>

        <ul
          className={cn(
            "flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono text-muted-foreground mb-3",
            !reversed && "md:justify-end"
          )}
        >
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title}`}
            className={cn(
              "inline-flex text-muted-foreground hover:text-logo-primary transition-colors",
              !reversed && "md:float-right"
            )}
          >
            <IconExternalLink className="h-5 w-5" />
          </a>
        )}
      </div>
    </div>
  );
}

function OtherProjectCard({ project }: { project: OtherProject }) {
  const inner = (
    <>
      <div className="flex items-center justify-between mb-4">
        <IconFolder className="h-8 w-8 text-logo-primary" stroke={1.25} />
        {project.link && (
          <IconExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-logo-primary transition-colors" />
        )}
      </div>
      <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-logo-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-foreground/70 leading-relaxed flex-1">
        {project.description}
      </p>
      <ul className="flex flex-wrap gap-x-3 gap-y-1 mt-4 text-xs font-mono text-muted-foreground">
        {project.tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </>
  );

  const cardClasses =
    "group h-full flex flex-col rounded-2xl border border-border bg-card/40 p-6 hover:bg-card hover:-translate-y-1 hover:shadow-xl transition-all duration-300";

  return project.link ? (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={cardClasses}
    >
      {inner}
    </a>
  ) : (
    <div className={cardClasses}>{inner}</div>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll
    ? otherProjects
    : otherProjects.slice(0, INITIAL_VISIBLE);

  return (
    <div id="projects" className="bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16 sm:py-20">
        <Reveal>
          <h1 className="text-2xl sm:text-4xl font-bold mb-12 sm:mb-16 text-logo-primary">
            Projects
          </h1>
        </Reveal>

        <div className="space-y-16 sm:space-y-24 mb-20 sm:mb-28">
          {featuredProjects.map((project, idx) => (
            <Reveal key={project.title} delay={0.1}>
              <FeaturedRow project={project} reversed={idx % 2 === 1} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h2 className="text-xl sm:text-2xl font-bold text-center text-foreground mb-10">
            Other Noteworthy Projects
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleProjects.map((project, idx) => (
            <Reveal key={project.title} delay={(idx % INITIAL_VISIBLE) * 0.05}>
              <OtherProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {otherProjects.length > INITIAL_VISIBLE && (
          <div className="flex justify-center mt-10">
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="group"
            >
              <span>{showAll ? "Show less" : "Show more"}</span>
              <IconChevronDown
                className={cn(
                  "ml-2 h-4 w-4 transition-transform",
                  showAll && "rotate-180"
                )}
              />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
