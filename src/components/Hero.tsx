"use client";
import NavBar from "@/components/NavBar";
import { Button } from "./ui/button";
import Reveal from "./ui/reveal";
import Typewriter from "./ui/typewriter";
import RotatingText from "./ui/rotating-text";
import { IconArrowDown, IconArrowRight } from "@tabler/icons-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="home" className="relative bg-background overflow-hidden">
      {/* Theme-aware grid backdrop, fading toward the bottom-right */}
      <div
        aria-hidden
        className={[
          "absolute inset-0 pointer-events-none",
          "bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)]",
          "bg-[size:56px_56px]",
          "[mask-image:radial-gradient(ellipse_80%_75%_at_70%_70%,black_0%,transparent_70%)]",
        ].join(" ")}
      />

      <div className="flex flex-col items-center justify-center w-full relative">
        <NavBar />

        <div className="flex flex-col items-start justify-center w-full min-h-screen max-w-6xl mx-auto px-4 sm:px-8 text-left space-y-6">
          <Reveal delay={0.05}>
            <p className="text-logo-accent text-sm sm:text-base font-mono">
              Hi, my name is
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground">
              Mounesha Zonde<span className="text-logo-primary">.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.25}>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-muted-foreground">
              <Typewriter
                text="I build AI-powered things for the web."
                startDelay={2300}
              />
            </h2>
          </Reveal>

          <Reveal delay={0.35}>
            <p className="max-w-xl text-muted-foreground leading-relaxed text-sm sm:text-base">
              I&apos;m a full-stack developer at{" "}
              <a
                href="https://www.aihyr.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-logo-primary font-medium hover:underline underline-offset-4"
              >
                AI.HYR
              </a>
              , building{" "}
              <RotatingText
                words={[
                  "agentic AI workflows",
                  "LLM integrations",
                  "real-time systems",
                  "AI-first products",
                ]}
                className="text-foreground font-medium"
              />{" "}
              on Azure and GCP.
            </p>
          </Reveal>

          <Reveal delay={0.45}>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                onClick={() => scrollTo("projects")}
                variant="default"
                className="group px-6 py-3 sm:px-8 sm:py-4 font-medium text-sm sm:text-lg rounded-md"
              >
                <span>View my work</span>
                <IconArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
              <Button
                onClick={() => scrollTo("contact")}
                variant="outline"
                className="group px-6 py-3 sm:px-8 sm:py-4 font-medium text-sm sm:text-lg rounded-md border-border hover:border-foreground"
              >
                <span>Get in touch</span>
                <IconArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
