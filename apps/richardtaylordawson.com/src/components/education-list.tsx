import Link from "next/link";
import { ExternalLink, GraduationCap } from "lucide-react";

import { education } from "@/lib/site-content";

type EducationListProps = {
  compact?: boolean;
};

export function EducationList({ compact = false }: EducationListProps) {
  return (
    <div className={compact ? "grid gap-3 sm:grid-cols-2" : "grid gap-4"}>
      {education.map((item) => (
        <article
          className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5"
          data-reveal="card"
          key={item.degree}
        >
          <div className="flex items-start gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-[8px] border border-primary/30 bg-primary/10 text-primary">
              <GraduationCap className="size-5" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <h3 className="text-base font-semibold leading-6 text-white">
                {item.degree}
              </h3>
              <p className="mt-1 text-sm leading-6 text-white/55">
                {item.school}
              </p>
              <Link
                href={item.href}
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
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
