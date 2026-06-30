import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { ChipList } from "@/components/chip-list";
import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import { experience, getExperienceBySlug } from "@/lib/site-content";
import { buildPageMetadata } from "@/lib/seo";

type ExperiencePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return experience.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: ExperiencePageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getExperienceBySlug(slug);

  if (!job) {
    return buildPageMetadata({
      title: "Experience",
      description:
        "Work history and role details for Richard Taylor Dawson.",
      pathname: "/#experience",
    });
  }

  return buildPageMetadata({
    title: `${job.company} Experience`,
    description: job.summary,
    pathname: `/experience/${job.slug}`,
  });
}

export default async function ExperienceDetailPage({
  params,
}: ExperiencePageProps) {
  const { slug } = await params;
  const job = getExperienceBySlug(slug);

  if (!job) {
    notFound();
  }

  return (
    <SiteShell>
      <article className="relative mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
        <Link
          href="/#experience"
          className="back-link"
          data-reveal="hero"
        >
          <ArrowLeft className="size-4" />
          Back to experience
        </Link>

        <header className="mt-12 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <div data-reveal="hero">
              <SectionHeading kicker="Experience" />
            </div>
            <div
              className="motion-delay-1 mt-6 flex items-center gap-4"
              data-reveal="hero"
            >
              <Image
                src={job.logo}
                alt=""
                width={56}
                height={56}
                className="size-14 shrink-0 rounded-[8px] bg-white object-contain p-2"
                priority
              />
              <div>
                <h1 className="text-balance text-5xl font-semibold leading-[0.98] tracking-normal text-white sm:text-6xl">
                  {job.company}
                </h1>
                <time className="mt-3 block font-mono text-sm text-white/[0.48]">
                  {job.span}
                </time>
              </div>
            </div>
          </div>

          <div
            className="motion-delay-2 rounded-[8px] border border-white/10 bg-white/[0.045] p-6"
            data-reveal="card"
          >
            <p className="text-lg leading-8 text-white/[0.68]">
              {job.summary}
            </p>
            <div className="motion-stagger mt-6 flex flex-wrap gap-2">
              <ChipList items={job.technologies} />
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href={job.siteHref}
                className="experience-action-link experience-action-link-site"
                aria-label={`Visit ${job.company} company site (opens in a new tab)`}
                target="_blank"
                rel="noreferrer"
              >
                Company site
                <span className="sr-only">(opens in a new tab)</span>
                <ExternalLink className="size-3.5" />
              </a>
            </div>
          </div>
        </header>

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
          <aside
            className="rounded-[8px] border border-white/10 bg-white/[0.035] p-6"
            data-reveal="card"
          >
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
              Roles
            </p>
            <ol className="role-history">
              {job.roles.map((role, roleIndex) => (
                <li
                  className="role-history-item"
                  key={`${job.company}-${role.title}`}
                >
                  <span className="role-node" aria-hidden="true">
                    <svg
                      viewBox="0 0 16 16"
                      className="role-node-signal"
                      aria-hidden="true"
                    >
                      <circle
                        className="role-node-outline"
                        cx="8"
                        cy="8"
                        r="7"
                      />
                      <path
                        className="role-node-arc role-node-arc-left"
                        d="M 8 1 A 7 7 0 0 0 8 15"
                        pathLength="100"
                      />
                      <path
                        className="role-node-arc role-node-arc-right"
                        d="M 8 1 A 7 7 0 0 1 8 15"
                        pathLength="100"
                      />
                    </svg>
                  </span>
                  {roleIndex < job.roles.length - 1 ? (
                    <span className="role-segment" aria-hidden="true" />
                  ) : null}
                  <p className="text-sm font-medium text-white/[0.72]">
                    {role.title}
                  </p>
                  <time className="mt-0.5 block font-mono text-[0.6875rem] text-white/[0.48]">
                    {role.span}
                  </time>
                </li>
              ))}
            </ol>
          </aside>

          <section
            className="motion-delay-1 rounded-[8px] border border-signal-teal/25 bg-signal-teal/[0.07] p-6 sm:p-8"
            data-reveal="card"
          >
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-signal-teal">
              Deeper writeup
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-white">
              More detail is coming here.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/[0.64]">
              This page is ready for the fuller story: the specific products,
              systems, constraints, wins, and lessons from my work at{" "}
              {job.company}. For now, it keeps the company context, role
              history, and working tags in one place so the richer notes have a
              home when I add them.
            </p>
          </section>
        </div>
      </article>
    </SiteShell>
  );
}
