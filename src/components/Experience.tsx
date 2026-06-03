"use client";
import { Timeline } from "@/components/ui/timeline";

export default function Experience() {
  const experiences = [
    {
      title: "AI.HYR",
      titlecolor: "aihyrcolor",
      logo: "/apple-touch-icon.png",
      content: (
        <div>
          <h4 className="text-lg text-secondary-foreground font-bold">
            Fullstack Developer
          </h4>
          <p className="text-sm text-primary mb-2 font-semibold">
            Sept 2024 - Present
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Building AI-powered full-stack applications with React, Next.js, TypeScript, Node.js, Python, and MongoDB.
            Integrated Python-based AI workflows with Azure OpenAI and Azure AI Foundry for real-time conversational and assessment systems,
            and built real-time communication features using Azure Communication Services (ACS) on top of Azure App Services, Function Apps, and Blob Storage.
            Implemented agentic AI workflows on GCP Vertex AI using ADK agents with tool-calling and sub-agent orchestration,
            and automated deployments via GitLab CI/CD for scalable, production-ready releases.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["React", "Next.js", "Node.js", "Python", "Azure", "ACS", "GCP", "Agentic AI", "MongoDB"].map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-md shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Boompanda",
      titlecolor: "boomcolor",
      logo: "/logo-panda-solo.png",
      content: (
        <div>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg text-secondary-foreground font-bold mb-2">
                Fullstack Developer
              </h4>
              <p className="text-sm text-primary mb-2 font-semibold">
                Jul 2024 - Aug 2024
              </p>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                Developed and maintained full-stack web applications using the
                MERN stack, Next.js, Tailwind CSS, and TypeScript. Focused on
                seamless integration, enhancing efficiency by 50%, while ensuring
                robust database performance and data integrity.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Nextjs", "TypeScript", "Tailwindcss", "MongoDB"].map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-md shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg text-secondary-foreground font-bold mb-2">
                Fullstack Developer Intern
              </h4>
              <p className="text-sm text-primary mb-2 font-semibold">
                Jun 2023 - Jun 2024
              </p>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                Developed and maintained full-stack web applications using the
                MERN stack, optimizing both front-end and back-end. Engineered
                APIs that boosted productivity by 50% and managed databases to
                ensure performance and data integrity.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["React", "JavaScript", "Node.js", "MySql"].map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-md shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div id="experience" className="bg-primary-foreground">
      <div className="w-full min-h-screen mx-auto px-8 py-20">
        <div className="w-full">
          <Timeline data={experiences} />
        </div>
      </div>
    </div>
  );
}
