import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

import { ChipList } from "@/components/chip-list";
import type { ExperienceItem } from "@/lib/site-content";

type ExperienceListProps = {
  items: ExperienceItem[];
};

export function ExperienceList({ items }: ExperienceListProps) {
  return (
    <ol className="motion-stagger space-y-3">
      {items.map((job) => (
        <Fragment key={job.company}>
          <li className="experience-row" data-reveal="card">
            <div className="flex items-start gap-4">
              <Image
                src={job.logo}
                alt=""
                width={40}
                height={40}
                className="size-10 shrink-0 rounded-[8px] bg-white object-contain p-1"
              />
              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <p className="font-medium text-white">{job.company}</p>
                  <time className="shrink-0 font-mono text-xs text-white/[0.42]">
                    {job.span}
                  </time>
                </div>
                <ol className="role-history">
                  {job.roles.map((role, roleIndex) => (
                    <li
                      className="role-history-item"
                      key={`${job.company}-${role.title}`}
                    >
                      <span className="role-node" aria-hidden="true" />
                      {roleIndex < job.roles.length - 1 ? (
                        <span className="role-segment" aria-hidden="true" />
                      ) : null}
                      <p className="text-sm font-medium text-white/[0.72]">
                        {role.title}
                      </p>
                      <time className="mt-0.5 block font-mono text-[0.6875rem] text-white/[0.4]">
                        {role.span}
                      </time>
                    </li>
                  ))}
                </ol>
                <div className="job-card-skills mt-5 flex flex-wrap gap-1.5">
                  <ChipList items={job.technologies} />
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  <a
                    href={job.siteHref}
                    className="experience-action-link experience-action-link-site"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Company site
                    <ExternalLink className="size-3.5" />
                  </a>
                  <Link
                    href={job.detailHref}
                    className="experience-action-link experience-action-link-details"
                  >
                    Work details
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </li>
          {job.slug === "calldrip" ? (
            <li className="experience-resume-row" data-reveal="card">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-signal-amber">
                  Resume
                </p>
                <a
                  href="/documents/richardtaylordawson.pdf"
                  className="experience-action-link experience-action-link-resume"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download resume
                  <ExternalLink className="size-3.5" />
                </a>
              </div>
            </li>
          ) : null}
        </Fragment>
      ))}
    </ol>
  );
}
