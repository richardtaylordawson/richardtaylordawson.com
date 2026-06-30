import { ExternalLink, Link2 } from "lucide-react";

import { Chip } from "@/components/chip-list";

type SetupItemCardProps = {
  category: string;
  title: string;
  description: string;
  whyItStays: string;
  items: readonly string[];
  affiliateLabel: string;
  href?: string;
};

export function SetupItemCard({
  category,
  title,
  description,
  whyItStays,
  items,
  affiliateLabel,
  href,
}: SetupItemCardProps) {
  return (
    <article className="surface-card flex h-full flex-col" data-reveal="card">
      <div className="flex items-start justify-between gap-3">
        <p className="rounded-[6px] border border-signal-teal/20 bg-signal-teal/[0.08] px-2.5 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-signal-teal/85">
          {category}
        </p>
        <span className="inline-flex items-center gap-2 rounded-[6px] border border-signal-amber/20 bg-signal-amber/[0.08] px-2.5 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-signal-amber/80">
          <Link2 className="size-3" />
          Affiliate-ready
        </span>
      </div>

      <h2 className="mt-5 text-xl font-semibold leading-7 text-white">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-white/60">{description}</p>

      <div className="mt-4 rounded-[8px] border border-white/10 bg-black/15 p-3">
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-signal-lime/75">
          Why it stays
        </p>
        <p className="mt-2 text-sm leading-6 text-white/72">{whyItStays}</p>
      </div>

      <ul className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item}>
            <Chip label={item} />
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-4">
        <p className="text-xs leading-5 text-white/45">{affiliateLabel}</p>
        {href ? (
          <a
            href={href}
            className="command-link shrink-0"
            target="_blank"
            rel="noreferrer"
          >
            View item
            <ExternalLink className="size-4" />
          </a>
        ) : (
          <span className="inline-flex min-h-11 items-center rounded-[8px] border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/45">
            Link placeholder
          </span>
        )}
      </div>
    </article>
  );
}
