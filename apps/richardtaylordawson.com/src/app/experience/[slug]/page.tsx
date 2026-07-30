import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";

import { ChipList } from "@/components/chip-list";
import { ExperienceMediaViewer } from "@/components/experience-media-viewer";
import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import {
  experience,
  getExperienceBySlug,
  type ExperienceProject,
} from "@/lib/site-content";
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

  const detail = job.detail;

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

        <div className="mt-10 space-y-10">
          <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
            <aside
              className="flex h-full flex-col rounded-[8px] border border-white/10 bg-white/[0.035] p-6"
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
                    {role.note ? (
                      <p className="mt-2 max-w-sm text-sm leading-6 text-white/[0.58]">
                        {role.note}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ol>
            </aside>

            {detail ? (
              <ExperienceOverview detail={detail} />
            ) : (
              <ExperiencePlaceholder company={job.company} />
            )}
          </div>

          {detail ? <ExperienceProjects detail={detail} /> : null}
        </div>
      </article>
    </SiteShell>
  );
}

function ExperienceOverview({
  detail,
}: {
  detail: NonNullable<ReturnType<typeof getExperienceBySlug>>["detail"];
}) {
  if (!detail) {
    return null;
  }

  return (
    <section
      className="motion-delay-1 rounded-[8px] border border-signal-teal/25 bg-signal-teal/[0.07] p-6 sm:p-8"
      data-reveal="card"
    >
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-signal-teal">
        Overview
      </p>
      <div className="mt-4 space-y-4 text-base leading-7 text-white/[0.68]">
        {detail.overview.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

function ExperienceProjects({
  detail,
}: {
  detail: NonNullable<ReturnType<typeof getExperienceBySlug>>["detail"];
}) {
  if (!detail) {
    return null;
  }

  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
            Key projects
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white">
            Systems I owned or helped shape
          </h2>
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {detail.projects.map((project) => (
          <ProjectDetailCard
            project={project}
            key={project.title}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectDetailCard({ project }: { project: ExperienceProject }) {
  const hasProjectWork = Boolean(
    project.images?.length ||
      project.comparisonGroups?.length ||
      project.media ||
      project.workSites?.length ||
      project.hrefInMedia,
  );

  return (
    <article className="rounded-[8px] border border-white/10 bg-white/[0.045] p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-signal-amber">
            {project.eyebrow}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">
            {project.title}
          </h3>
        </div>
        {project.href && !hasProjectWork ? (
          <a
            href={project.href}
            className="inline-flex min-h-9 shrink-0 items-center justify-center gap-1.5 rounded-[8px] border border-signal-teal/35 bg-signal-teal/[0.12] px-3 text-sm font-medium text-signal-teal transition hover:border-signal-lime/45 hover:bg-signal-lime/[0.1] hover:text-signal-lime focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            target="_blank"
            rel="noreferrer"
          >
            {project.cta ?? "Open link"}
            <span className="sr-only">(opens in a new tab)</span>
            <ArrowUpRight className="size-3.5" />
          </a>
        ) : null}
        {hasProjectWork ? (
          <ExperienceMediaViewer
            comparisonGroups={project.comparisonGroups}
            images={project.images}
            link={
              project.href
                ? {
                    href: project.href,
                    label: project.cta ?? "Open link",
                  }
                : undefined
            }
            media={project.media}
            title={project.title}
            workSites={project.workSites}
            workSitesNote={project.workSitesNote}
          />
        ) : null}
      </div>
      <p className="mt-4 text-base leading-7 text-white/[0.68]">
        {project.description}
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <ProjectDetailNote title="Ownership" text={project.ownership} />
        <ProjectDetailNote title="Impact" text={project.impact} />
      </div>
      {project.confidentialityNote ? (
        <p className="mt-4 rounded-[8px] border border-signal-amber/20 bg-signal-amber/[0.06] p-3 text-sm leading-6 text-signal-amber/80">
          {project.confidentialityNote}
        </p>
      ) : null}
      <div className="mt-5 flex flex-wrap gap-1.5">
        <ChipList items={project.technologies} />
      </div>
    </article>
  );
}

function ProjectDetailNote({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[8px] border border-white/10 bg-black/15 p-4">
      <h4 className="font-mono text-xs uppercase tracking-[0.16em] text-white/[0.5]">
        {title}
      </h4>
      <p className="mt-2 text-sm leading-6 text-white/[0.62]">{text}</p>
    </div>
  );
}

function ExperiencePlaceholder({ company }: { company: string }) {
  return (
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
        This page is ready for the fuller story: the specific products, systems,
        constraints, wins, and lessons from my work at {company}. For now, it
        keeps the company context, role history, and working tags in one place
        so the richer notes have a home when I add them.
      </p>
    </section>
  );
}
