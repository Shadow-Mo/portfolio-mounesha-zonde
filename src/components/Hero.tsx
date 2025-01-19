"use client";
import NavBar from "@/components/NavBar";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div
      id="home"
      className={[
        "bg-primary-foreground",
        "bg-[url('/hero-bg.webp')]",
        "bg-right-bottom bg-no-repeat bg-cover",
        "bg-[length:80%] sm:bg-[length:80%] md:bg-[length:70%] lg:bg-[length:70%] xl:bg-[length:70%] 2xl:bg-[length:70%]",
      ].join(" ")}
    >
      <div className="flex flex-col items-center justify-center w-full relative">
        <NavBar />

        <div className="flex flex-col items-start justify-center w-full min-h-screen max-w-6xl mx-auto px-4 sm:px-8 text-left space-y-6">
          {/* Intro Text */}
          <p className="text-logo-accent text-base sm:text-lg font-medium">
            Hi, my name is
          </p>

          {/* Main Heading with gradient text */}
          <h1
            className={[
              "text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight",
              "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
              "text-transparent bg-clip-text",
            ].join(" ")}
          >
            Mounesha Zonde.
          </h1>

          {/* Sub-Heading with drop shadow */}
          <h2 className="text-3xl sm:text-5xl font-semibold text-foreground tracking-tight drop-shadow-md">
            I build things for the web.
          </h2>

          {/* Description Paragraph */}
          <p className="max-w-md text-gray-500 leading-relaxed text-sm sm:text-base">
            I&apos;m a fullstack developer specializing in building (and occasionally
            designing) exceptional fullstack applications. Currently, I’m
            focused on building accessible, human-centered products.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1jGMJw2mDau4i1OJNs581clZQetcm3mM-/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="default"
              className="mt-6 px-6 py-3 sm:px-8 sm:py-4 font-medium text-sm sm:text-lg rounded-md"
            >
              Resume
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
