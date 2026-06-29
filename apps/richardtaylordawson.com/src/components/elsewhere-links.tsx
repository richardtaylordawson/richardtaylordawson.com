import { ExternalLink } from "lucide-react";

import type { IconComponent } from "@/lib/site-content";

type ElsewhereItem = {
  icon: IconComponent;
  label: string;
  value: string;
  href?: string;
};

type ElsewhereLinksProps = {
  items: ElsewhereItem[];
};

export function ElsewhereLinks({ items }: ElsewhereLinksProps) {
  return (
    <div className="motion-stagger mt-6 grid gap-3 md:grid-cols-3">
      {items.map((item) => (
        <ElsewhereLink item={item} key={item.label} />
      ))}
    </div>
  );
}

function ElsewhereLink({ item }: { item: ElsewhereItem }) {
  const Icon = item.icon;
  const content = (
    <>
      <Icon className="size-5 text-signal-teal" />
      <div>
        <p className="text-sm font-semibold text-white">{item.label}</p>
        <p className="mt-1 font-mono text-xs text-white/[0.55]">{item.value}</p>
      </div>
      {item.href ? (
        <ExternalLink className="ml-auto size-4 text-white/35" />
      ) : null}
    </>
  );
  const className =
    "flex items-center gap-3 rounded-[8px] border border-white/10 bg-black/20 p-4";

  if (!item.href) {
    return (
      <div className={className} data-reveal="card">
        {content}
      </div>
    );
  }

  return (
    <a
      className={`${className} transition hover:border-signal-teal/40 hover:bg-white/[0.05] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary`}
      data-reveal="card"
      href={item.href}
      aria-label={`${item.label}: ${item.value} (opens in a new tab)`}
      target="_blank"
      rel="noreferrer"
    >
      {content}
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}
