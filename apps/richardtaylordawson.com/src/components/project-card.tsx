import Image from "next/image";
import { ExternalLink } from "lucide-react";

export type ProjectCardItem = {
  title: string;
  tag: string;
  year?: string;
  text: string;
  href: string;
  image: string;
  cta: string;
};

type ProjectCardProps = {
  item: ProjectCardItem;
};

export function ProjectCard({ item }: ProjectCardProps) {
  return (
    <a
      className="project-card group"
      data-reveal="card"
      href={item.href}
      aria-label={`${item.title}: ${item.cta} (opens in a new tab)`}
      target="_blank"
      rel="noreferrer"
    >
      <div className="project-preview">
        <Image
          src={item.image}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="project-preview-backdrop"
          aria-hidden="true"
        />
        <div className="project-preview-image">
          <Image
            src={item.image}
            alt={`${item.title} social share artwork`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain"
          />
        </div>
      </div>
      <div className="p-3 pb-4 pt-5 sm:p-5 sm:pb-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="project-tag">{item.tag}</span>
          {item.year ? (
            <span className="project-year">Built {item.year}</span>
          ) : null}
        </div>
        <h3 className="mt-4 text-2xl font-semibold text-white">
          {item.title}
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-6 text-white/[0.62]">
          {item.text}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-signal-teal">
          {item.cta}
          <span className="sr-only">(opens in a new tab)</span>
          <ExternalLink className="size-3.5" />
        </span>
      </div>
    </a>
  );
}
