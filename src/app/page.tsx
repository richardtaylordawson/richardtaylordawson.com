import type { Metadata } from "next";
import Link from "next/link";

import { ExperienceList } from "@/components/experience-list";
import { ProjectSection } from "@/components/project-section";
import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import { SocialLinks } from "@/components/social-links";
import { aboutCopy, businessSites, experience, projects } from "@/lib/site-content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Software Engineer",
  description:
    "Richard Taylor Dawson designs and ships modern web products where accessibility, product craft, and AI-enabled workflows meet.",
  pathname: "/",
});

export default function Home() {
  return (
    <SiteShell>
      <section
        id="top"
        className="relative mx-auto flex min-h-[calc(68vh-4rem)] max-w-7xl items-center px-4 pb-5 pt-14 sm:px-6 lg:px-8"
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
        className="scroll-mt-24 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"
      >
        <div
          className="rounded-[8px] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/10 sm:p-8 lg:p-10"
          data-reveal="card"
        >
          <div className="grid gap-8 lg:grid-cols-[0.45fr_1.55fr]">
            <div>
              <SectionHeading kicker="About me" />
            </div>
            <div>
              <div className="about-preview-fade max-h-[216px] overflow-hidden">
                <div className="space-y-5 text-base leading-7 text-white/[0.68]">
                  {aboutCopy.map((paragraph) => (
                    <p data-reveal="hero" key={paragraph}>
                      {paragraph}
                    </p>
                  ))}
                </div>
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
        className="scroll-mt-24 border-y border-white/10 bg-white/[0.025] py-8"
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
        className="scroll-mt-24 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"
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
