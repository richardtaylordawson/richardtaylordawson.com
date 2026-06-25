import { ProjectCard, type ProjectCardItem } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";

type ProjectSectionProps = {
  kicker: string;
  description: string;
  items: ProjectCardItem[];
  divided?: boolean;
};

export function ProjectSection({
  kicker,
  description,
  items,
  divided,
}: ProjectSectionProps) {
  return (
    <div className={divided ? "mt-8 border-t border-white/10 pt-6" : undefined}>
      <SectionHeading kicker={kicker} description={description} />
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {items.map((item) => (
          <ProjectCard item={item} key={item.title} />
        ))}
      </div>
    </div>
  );
}
