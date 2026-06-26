import Link from "next/link";

import { ExperienceList } from "@/components/experience-list";
import { ProjectSection } from "@/components/project-section";
import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import { SocialLinks } from "@/components/social-links";
import {
  aboutCopy,
  businessSites,
  experience,
  projects,
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
          <div className="mb-6" data-reveal="hero">
            <div className="inline-flex items-center rounded-[8px] border border-signal-amber/30 bg-signal-amber/10 px-3 py-2 text-sm text-signal-amber">
              Software Engineer
            </div>
          </div>
          <h1
            className="motion-delay-1 max-w-4xl text-balance text-5xl font-semibold leading-[0.98] tracking-normal text-white sm:text-6xl lg:text-7xl"
            data-reveal="hero"
          >
            Taylor Dawson.
          </h1>
          <p
            className="motion-delay-2 mt-6 max-w-2xl text-lg leading-8 text-white/[0.68] sm:text-xl"
            data-reveal="hero"
          >
            I design and ship modern web products where AI, accessibility, and
            product craft meet. The work is fast, pragmatic, and built for real
            people on real teams.
          </p>
          <SocialLinks
            className="motion-delay-3 mt-8 flex flex-wrap gap-2"
            data-reveal="hero"
          />
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"
      >
        <div
          className="rounded-[8px] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/10 sm:p-8 lg:p-10"
          data-reveal="card"
        >
          <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr]">
            <div className="space-y-8">
              <SectionHeading kicker="About me" />
              <div>
                <div className="motion-stagger flex flex-wrap gap-2">
                  {aboutFocusAreas.map((area) => (
                    <span
                      className="rounded-[8px] border border-white/10 bg-white/[0.055] px-3 py-2 font-mono text-xs uppercase tracking-[0.12em] text-white/[0.66]"
                      data-reveal="chip"
                      key={area}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
              <dl className="motion-stagger space-y-4">
                {aboutWorkingStyle.map((item) => (
                  <div
                    className="border-t border-white/10 pt-4"
                    data-reveal="hero"
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
            <div>
              <div className="relative max-h-[150px] overflow-hidden">
                <div className="space-y-5 text-base leading-7 text-white/[0.68]">
                  {aboutCopy.map((paragraph) => (
                    <p data-reveal="hero" key={paragraph}>
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-[#26152f] via-[#26152f]/92 to-transparent"
                />
              </div>
              <div className="mt-5" data-reveal="hero">
                <Link href="/about" className="command-link">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="border-y border-white/10 bg-white/[0.025] py-8"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div data-reveal="hero">
            <SectionHeading kicker="Experience" />
          </div>
          <ExperienceList items={experience} />
        </div>
      </section>

      <section
        id="work"
        className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"
      >
        <ProjectSection
          kicker="Projects"
          description="A growing collection of things I’ve designed and built outside my day-to-day product work."
          items={projects}
        />
        <ProjectSection
          kicker="Business sites"
          id="business-sites"
          description="Live sites I’ve worked on for businesses, separate from the personal projects and experiments."
          items={businessSites}
          divided
        />
      </section>
    </SiteShell>
  );
}
