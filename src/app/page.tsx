import { Download, Sparkles } from "lucide-react";

import { ChipList } from "@/components/chip-list";
import { ExperienceList } from "@/components/experience-list";
import { ProjectSection } from "@/components/project-section";
import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import {
  aboutCopy,
  businessSites,
  experience,
  projects,
  stack,
} from "@/lib/site-content";

const aboutFocusAreas = [
  "Product UI",
  "AI workflows",
  "Design systems",
  "Accessibility",
];

const aboutWorkingStyle = [
  {
    label: "Clarify",
    text: "Turn rough requirements and context into usable product shape.",
  },
  {
    label: "Build",
    text: "Move quickly through thoughtful interfaces and dependable code.",
  },
  {
    label: "Polish",
    text: "Sweat the details that make software feel considered.",
  },
];

export default function Home() {
  return (
    <SiteShell>
      <section
        id="top"
        className="relative mx-auto flex min-h-[60vh] max-w-7xl items-center px-4 pb-5 pt-10 sm:px-6 lg:px-8"
      >
        <div className="relative z-10 w-full">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 rounded-[8px] border border-signal-amber/30 bg-signal-amber/10 px-3 py-2 text-sm text-signal-amber">
              <Sparkles className="size-4" />
              AI-forward software engineer
            </div>
          </div>
          <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[0.98] tracking-normal text-white sm:text-6xl lg:text-7xl">
            Taylor Dawson.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.68] sm:text-xl">
            I design and ship modern web products where AI, accessibility, and
            product craft meet. The work is fast, pragmatic, and built for real
            people on real teams.
          </p>
          <div className="mt-8 flex">
            <a
              href="/documents/richardtaylordawson.pdf"
              className="command-link"
            >
              <Download className="size-4" />
              Resume
            </a>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"
      >
        <div className="rounded-[8px] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/10 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr]">
            <div className="space-y-8">
              <SectionHeading kicker="About me" />
              <div>
                <div className="flex flex-wrap gap-2">
                  {aboutFocusAreas.map((area) => (
                    <span
                      className="rounded-[8px] border border-white/10 bg-white/[0.055] px-3 py-2 font-mono text-xs uppercase tracking-[0.12em] text-white/[0.66]"
                      key={area}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
              <dl className="space-y-4">
                {aboutWorkingStyle.map((item) => (
                  <div
                    className="border-t border-white/10 pt-4"
                    key={item.label}
                  >
                    <dt className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-signal-teal">
                      {item.label}
                    </dt>
                    <dd className="mt-2 max-w-xs text-sm leading-6 text-white/[0.62]">
                      {item.text}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="space-y-5 text-base leading-7 text-white/[0.68]">
              {aboutCopy.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="border-y border-white/10 bg-white/[0.025] py-8"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionHeading kicker="Experience" />
            <div className="mt-6 flex flex-wrap gap-2">
              <ChipList items={stack} />
            </div>
          </div>
          <ExperienceList items={experience} />
        </div>
      </section>

      <section
        id="work"
        className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"
      >
        <ProjectSection
          kicker="Selected projects"
          description="A growing collection of things I’ve designed and built outside my day-to-day product work."
          items={projects}
        />
        <ProjectSection
          kicker="Business sites"
          description="Live sites I’ve worked on for businesses, separated from the personal projects and experiments."
          items={businessSites}
          divided
        />
      </section>
    </SiteShell>
  );
}
