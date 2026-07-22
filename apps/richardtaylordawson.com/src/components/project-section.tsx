import Link from "next/link";

import { ProjectCard, type ProjectCardItem } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

type ProjectSectionProps = {
  id?: string;
  kicker: string;
  description: string;
  items: ProjectCardItem[];
  divided?: boolean;
  columns?: 2 | 3;
  previewHref?: string;
  previewLabel?: string;
  desktopLimit?: number;
  mobileLimit?: number;
};

export function ProjectSection({
  id,
  kicker,
  description,
  items,
  divided,
  columns = 3,
  previewHref,
  previewLabel = "See more",
  desktopLimit,
  mobileLimit,
}: ProjectSectionProps) {
  const className = [
    id ? "scroll-mt-24" : null,
    divided ? "mt-8 border-t border-white/10 pt-10" : null,
  ]
    .filter(Boolean)
    .join(" ");
  const gridClass = columns === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3";
  const visibleItems = desktopLimit ? items.slice(0, desktopLimit) : items;

  return (
    <div id={id} className={className || undefined}>
      <div data-reveal="hero">
        <SectionHeading kicker={kicker} description={description} />
      </div>
      <div className={`motion-stagger mt-10 grid gap-5 ${gridClass}`}>
        {visibleItems.map((item, index) => (
          <ProjectCard
            className={cn(
              mobileLimit && index >= mobileLimit ? "hidden lg:block" : null
            )}
            item={item}
            key={item.title}
          />
        ))}
      </div>
      {previewHref ? (
        <div className="mt-6" data-reveal="hero">
          <Link href={previewHref} className="command-link">
            {previewLabel}
          </Link>
        </div>
      ) : null}
    </div>
  );
}
