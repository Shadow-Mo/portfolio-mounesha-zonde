"use client";
import { Button } from "./ui/button";
import Reveal from "./ui/reveal";
import { IconMail } from "@tabler/icons-react";

export default function Contact() {
  return (
    <div
      id="contact"
      className="bg-background flex flex-col justify-center items-center py-24 sm:py-32 px-4 sm:px-8"
    >
      <Reveal>
        <div className="text-center max-w-xl mx-auto">
          <p className="text-logo-accent text-xs font-semibold uppercase tracking-widest mb-3">
            What&apos;s next?
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-foreground">
            Get in Touch
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            I&apos;m open to interesting roles, collaborations, and
            conversations. Whether you have a question or just want to say hi,
            my inbox is always open.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-10">
          <Button
            asChild
            variant="outline"
            className="px-8 py-6 text-base font-medium rounded-md border-border hover:border-foreground"
          >
            <a href="mailto:mouneshe2002@gmail.com">
              <IconMail className="mr-2 h-5 w-5" />
              Say Hello
            </a>
          </Button>
        </div>
      </Reveal>
    </div>
  );
}
