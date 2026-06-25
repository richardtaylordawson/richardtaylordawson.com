import { Chip } from "@/components/chip-list";
import type { IconComponent } from "@/lib/site-content";

type ToolGroupCardProps = {
  icon: IconComponent;
  title: string;
  description: string;
  items: string[];
};

export function ToolGroupCard({
  icon: Icon,
  title,
  description,
  items,
}: ToolGroupCardProps) {
  return (
    <article className="surface-card">
      <Icon className="size-5 text-signal-teal" />
      <h2 className="mt-5 text-lg font-semibold text-white">{title}</h2>
      <p className="mt-3 min-h-18 text-sm leading-6 text-white/55">
        {description}
      </p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item}>
            <Chip label={item} />
          </li>
        ))}
      </ul>
    </article>
  );
}
