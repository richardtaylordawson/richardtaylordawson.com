import { ProjectCard, type ProjectCardItem } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";

type ProjectSectionProps = {
  id?: string;
  kicker: string;
  description: string;
  items: ProjectCardItem[];
  divided?: boolean;
  columns?: 2 | 3;
};

export function ProjectSection({
  id,
  kicker,
  description,
  items,
  divided,
  columns = 3,
}: ProjectSectionProps) {
  const gridClass = columns === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3";

  return (
    <div
      id={id}
      className={divided ? "mt-8 border-t border-white/10 pt-6" : undefined}
    >
      <div data-reveal="hero">
        <SectionHeading kicker={kicker} description={description} />
      </div>
      <div className={`motion-stagger mt-10 grid gap-5 ${gridClass}`}>
        {items.map((item) => (
          <ProjectCard item={item} key={item.title} />
        ))}
      </div>
    </div>
  );
}
