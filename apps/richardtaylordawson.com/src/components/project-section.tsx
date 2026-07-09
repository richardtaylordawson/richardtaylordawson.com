"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { ProjectCard, type ProjectCardItem } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

type ProjectSectionProps = {
  id?: string;
  kicker: string;
  description: string;
  items: ProjectCardItem[];
  divided?: boolean;
};

export function ProjectSection({
  id,
  kicker,
  description,
  items,
  divided,
}: ProjectSectionProps) {
  const initialVisibleCount = 2;
  const [showAll, setShowAll] = useState(false);
  const hasHiddenItems = items.length > initialVisibleCount;
  const visibleItems =
    hasHiddenItems && !showAll ? items.slice(0, initialVisibleCount) : items;

  return (
    <div
      id={id}
      className={divided ? "mt-8 border-t border-white/10 pt-6" : undefined}
    >
      <div data-reveal="hero">
        <SectionHeading kicker={kicker} description={description} />
      </div>
      <div className="motion-stagger mt-10 grid gap-5 lg:grid-cols-2">
        {visibleItems.map((item) => (
          <ProjectCard item={item} key={item.title} />
        ))}
      </div>
      {hasHiddenItems && !showAll ? (
        <div className="mt-8 flex justify-center">
          <Button
            type="button"
            variant="outline"
            size="lg"
            aria-expanded={showAll}
            onClick={() => setShowAll(true)}
            className="border-signal-teal/25 bg-signal-teal/[0.06] text-signal-teal hover:border-signal-lime/40 hover:bg-signal-lime/[0.08] hover:text-signal-lime"
          >
            Show more projects
            <ChevronDown className="size-4" aria-hidden="true" />
          </Button>
        </div>
      ) : null}
    </div>
  );
}
