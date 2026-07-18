import Link from "next/link";
import { ExternalLink, GraduationCap } from "lucide-react";

import { education } from "@/lib/site-content";

type EducationListProps = {
  compact?: boolean;
  variant?: "cards" | "inline";
};

export function EducationList({
  compact = false,
  variant = "cards",
}: EducationListProps) {
  const isInline = variant === "inline";

  return (
    <div
      className={
        compact || isInline ? "grid gap-3 sm:grid-cols-2" : "grid gap-4"
      }
    >
      {education.map((item) => (
        <article
          className={
            isInline
              ? "rounded-[8px] border border-white/[0.08] bg-white/[0.025] p-4"
              : "rounded-[8px] border border-white/10 bg-white/[0.04] p-5"
          }
          data-reveal="card"
          key={item.degree}
        >
          <div className="flex items-start gap-4">
            <div
              className={
                isInline
                  ? "flex size-9 shrink-0 items-center justify-center rounded-[8px] border border-primary/25 bg-primary/[0.08] text-primary"
                  : "flex size-10 shrink-0 items-center justify-center rounded-[8px] border border-primary/30 bg-primary/10 text-primary"
              }
            >
              <GraduationCap className="size-5" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <h3
                className={
                  isInline
                    ? "text-sm font-semibold leading-6 text-white"
                    : "text-base font-semibold leading-6 text-white"
                }
              >
                {item.degree}
              </h3>
              <p className="mt-1 text-sm leading-6 text-white/55">
                {item.school} · Graduated {item.year}
              </p>
              <Link
                href={item.href}
                className={
                  isInline
                    ? "mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                    : "mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                }
                target="_blank"
                rel="noreferrer"
              >
                {item.cta}
                <ExternalLink className="size-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
