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
          <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 space-y-2 list-disc list-outside pl-4">
            <li>
              Building AI-powered full-stack applications for real-time
              conversational and assessment systems.
            </li>
            <li>
              Integrated LLM workflows with Azure OpenAI and Azure AI Foundry,
              plus real-time communication via Azure Communication Services
              (ACS).
            </li>
            <li>
              Implemented agentic AI workflows on GCP Vertex AI using ADK
              agents with tool-calling and sub-agent orchestration.
            </li>
            <li>
              Automated deployments with GitLab CI/CD across Azure App
              Services, Function Apps, and Blob Storage.
            </li>
          </ul>
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
              <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 space-y-2 list-disc list-outside pl-4">
                <li>
                  Developed and maintained full-stack web applications with
                  Next.js, TypeScript, and MongoDB.
                </li>
                <li>
                  Built RESTful APIs and optimized database operations for
                  performance and scalability.
                </li>
              </ul>
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
                Jul 2023 - Jun 2024
              </p>
              <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 space-y-2 list-disc list-outside pl-4">
                <li>
                  Built frontend and backend modules using the MERN stack in
                  an agile environment.
                </li>
                <li>
                  Engineered APIs and optimized MySQL / MongoDB queries to
                  keep application data fast and reliable.
                </li>
              </ul>
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
    <div id="experience" className="bg-background">
      <Timeline data={experiences} />
    </div>
  );
}
