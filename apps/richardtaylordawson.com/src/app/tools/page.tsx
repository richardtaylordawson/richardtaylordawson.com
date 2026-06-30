import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Monitor } from "lucide-react";

import { Chip } from "@/components/chip-list";
import { SiteShell } from "@/components/site-shell";
import { deskSetupFacts, setupSections, softwareSections } from "@/lib/site-content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Tools",
  description:
    "The actual desk setup, hardware, software, and build stack Richard Taylor Dawson uses to design and ship products.",
  pathname: "/tools",
});

export default function ToolsPage() {
  return (
    <SiteShell>
      <section className="relative mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="back-link"
          data-reveal="hero"
        >
          <ArrowLeft className="size-4" />
          Back home
        </Link>

        <div className="mt-12 grid items-end gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-kicker motion-delay-1" data-reveal="hero">
              Tools
            </p>
            <h1
              className="motion-delay-2 mt-5 text-balance text-5xl font-semibold leading-[0.98] tracking-normal text-white sm:text-6xl"
              data-reveal="hero"
            >
              The actual setup behind the work.
            </h1>
            <p
              className="motion-delay-3 mt-6 max-w-xl text-lg leading-8 text-white/[0.64]"
              data-reveal="hero"
            >
              The monitors, desk, Macs, audio, and daily software I genuinely
              use. This page is part workstation tour, part stack breakdown,
              and eventually part affiliate setup guide.
            </p>
          </div>

          <div
            className="motion-delay-2 relative overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-black/30"
            data-reveal="image"
          >
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

        <div className="motion-stagger mt-8 flex flex-wrap gap-2">
          {deskSetupFacts.map((fact) => (
            <Chip key={fact} label={fact} />
          ))}
        </div>

        <section className="mt-16 grid gap-8 lg:grid-cols-[0.44fr_1.56fr]">
          <div>
            <p className="section-kicker" data-reveal="hero">
              Desk setup
            </p>
            <h2
              className="mt-5 max-w-sm text-3xl font-semibold leading-tight text-white"
              data-reveal="hero"
            >
              Hardware that actually lives on the desk.
            </h2>
            <p
              className="mt-4 max-w-md text-base leading-7 text-white/[0.6]"
              data-reveal="hero"
            >
              This is the real setup, not a generic roundup. Some names are
              temporary until I lock down the exact models, but the workstation
              itself is accurate.
            </p>
          </div>

          <div className="motion-stagger grid gap-4 md:grid-cols-2">
            {setupSections.map((section) => (
              <div className="surface-card" data-reveal="card" key={section.title}>
                <h2 className="text-lg font-semibold text-white">{section.title}</h2>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-white/68">
                  {section.items.map((item) => (
                    <li
                      className="border-b border-white/8 pb-3 last:border-b-0 last:pb-0"
                      key={item}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <aside
          className="mt-5 flex flex-col gap-5 rounded-[8px] border border-signal-amber/25 bg-signal-amber/[0.07] p-6 sm:flex-row sm:items-center sm:justify-between"
          data-reveal="card"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-signal-amber/80">
              Affiliate note
            </p>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-white/60">
              Some links on this page will become affiliate links once the exact
              models are confirmed. The setup recommendations will stay based on
              the real gear I use, not random roundup filler.
            </p>
          </div>
          <span className="inline-flex min-h-11 items-center rounded-[8px] border border-signal-amber/20 bg-signal-amber/[0.08] px-4 py-2 text-sm font-medium text-signal-amber">
            Exact product links coming soon
          </span>
        </aside>

        <section className="mt-16 grid gap-8 lg:grid-cols-[0.44fr_1.56fr]">
          <div>
            <p className="section-kicker" data-reveal="hero">
              Software stack
            </p>
            <h2
              className="mt-5 max-w-sm text-3xl font-semibold leading-tight text-white"
              data-reveal="hero"
            >
              The software behind the workstation.
            </h2>
            <p
              className="mt-4 max-w-md text-base leading-7 text-white/[0.6]"
              data-reveal="hero"
            >
              The short version of what I actually reach for to plan, build,
              review, and ship.
            </p>
          </div>

          <div className="motion-stagger grid gap-4 md:grid-cols-2">
            {softwareSections.map((section) => (
              <div className="surface-card" data-reveal="card" key={section.title}>
                <h2 className="text-lg font-semibold text-white">{section.title}</h2>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-white/68">
                  {section.items.map((item) => (
                    <li
                      className="border-b border-white/8 pb-3 last:border-b-0 last:pb-0"
                      key={item}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <aside
          className="mt-5 flex flex-col gap-5 rounded-[8px] border border-signal-teal/25 bg-signal-teal/[0.06] p-6 sm:flex-row sm:items-center sm:justify-between"
          data-reveal="card"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-signal-teal/80">
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
            aria-label="View source on GitHub (opens in a new tab)"
            target="_blank"
            rel="noreferrer"
          >
            View source
            <span className="sr-only">(opens in a new tab)</span>
            <ExternalLink className="size-4" />
          </a>
        </aside>
      </section>
    </SiteShell>
  );
}
