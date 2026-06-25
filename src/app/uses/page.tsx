import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Monitor } from "lucide-react";

import { ElsewhereLinks } from "@/components/elsewhere-links";
import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import { ToolGroupCard } from "@/components/tool-group-card";
import { elsewhere, toolGroups } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Uses | Richard Taylor Dawson",
  description:
    "The software, AI tools, web stack, and workspace Richard Taylor Dawson uses to design and ship products.",
};

export default function UsesPage() {
  return (
    <SiteShell>
      <section className="relative mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/55 transition hover:text-white"
        >
          <ArrowLeft className="size-4" />
          Back home
        </Link>

        <div className="mt-12 grid items-end gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-kicker">Uses</p>
            <h1 className="mt-5 text-balance text-5xl font-semibold leading-[0.98] tracking-normal text-white sm:text-6xl">
              The tools behind the work.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/[0.64]">
              A living list of the software, systems, and workspace details I
              use to turn an idea into something people can use.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-black/30">
            <Image
              src="/images/desk.jpg"
              alt="Richard's desk with two displays, speakers, plants, and a collection of LEGO Star Wars helmets"
              width={2048}
              height={1536}
              priority
              className="aspect-[4/3] w-full rounded-[6px] object-cover"
            />
            <div className="absolute bottom-6 left-6 inline-flex items-center gap-2 rounded-[6px] border border-white/15 bg-black/65 px-3 py-2 font-mono text-xs text-white/75 backdrop-blur-md">
              <Monitor className="size-3.5 text-signal-teal" />
              Current setup
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {toolGroups.map((group) => (
            <ToolGroupCard {...group} key={group.title} />
          ))}
        </div>

        <section className="mt-5 rounded-[8px] border border-white/10 bg-white/[0.035] p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading kicker="Elsewhere" title="Fun links and handles." />
            <p className="max-w-md text-sm leading-6 text-white/55">
              The stuff that does not quite belong next to GitHub, which is
              exactly why it belongs here.
            </p>
          </div>
          <ElsewhereLinks items={elsewhere} />
        </section>

        <aside className="mt-5 flex flex-col gap-5 rounded-[8px] border border-signal-amber/25 bg-signal-amber/[0.07] p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-signal-amber/80">
              Built with this stack
            </p>
            <p className="mt-2 text-sm leading-6 text-white/60">
              This site is the working example: Next.js, React, TypeScript,
              Tailwind, and AI-assisted iteration.
            </p>
          </div>
          <a
            href="https://github.com/richardtaylordawson/richardtaylordawson.com"
            className="command-link shrink-0"
            target="_blank"
            rel="noreferrer"
          >
            View source
            <ExternalLink className="size-4" />
          </a>
        </aside>
      </section>
    </SiteShell>
  );
}
