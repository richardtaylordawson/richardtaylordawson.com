import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Bot,
  Code2,
  ExternalLink,
  Monitor,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiApplemusic, SiEpicgames } from "react-icons/si";
import { TbDeviceNintendo } from "react-icons/tb";

import { AiAmbient } from "@/components/ai-ambient";
import { BrandMark } from "@/components/brand-mark";

export const metadata: Metadata = {
  title: "Uses | Richard Taylor Dawson",
  description:
    "The software, AI tools, web stack, and workspace Richard Taylor Dawson uses to design and ship products.",
};

const groups = [
  {
    icon: Bot,
    title: "AI collaboration",
    description:
      "Planning, implementation, review, and the occasional second opinion.",
    items: ["Cursor", "Codex"],
  },
  {
    icon: Code2,
    title: "Web stack",
    description:
      "The dependable core I reach for when a product needs to move quickly and age well.",
    items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Sparkles,
    title: "Product craft",
    description:
      "The constraints and standards that shape the tools, not an afterthought at the end.",
    items: ["Accessibility", "Performance", "Design systems", "AI product UX"],
  },
];

const elsewhere = [
  {
    icon: SiApplemusic,
    label: "Apple Music",
    value: "@richardtaylordawson",
    href: "https://music.apple.com/profile/richardtaylordawson",
  },
  {
    icon: SiEpicgames,
    label: "Rocket League",
    value: "LilWizzie on Epic",
    href: "https://rocketleague.tracker.network/rocket-league/profile/epic/LilWizzie/overview",
  },
  {
    icon: TbDeviceNintendo,
    label: "Nintendo",
    value: "LilWizzie",
  },
];

export default function UsesPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-background text-foreground">
      <AiAmbient />
      <div className="site-grid" aria-hidden="true" />
      <div className="signal-rail" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-background/70 backdrop-blur-xl">
        <nav
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
          aria-label="Primary navigation"
        >
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="Richard Taylor Dawson, home"
          >
            <BrandMark />
            <span className="hidden text-sm font-medium text-white/80 sm:inline">
              Richard Taylor Dawson
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <a
              href="https://www.github.com/richardtaylordawson"
              className="icon-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/taylor-dawson-482927123/"
              className="icon-link"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </nav>
      </header>

      <section className="relative mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">
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
          {groups.map((group) => (
            <article className="surface-card" key={group.title}>
              <group.icon className="size-5 text-signal-teal" />
              <h2 className="mt-5 text-lg font-semibold text-white">
                {group.title}
              </h2>
              <p className="mt-3 min-h-18 text-sm leading-6 text-white/55">
                {group.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li className="skill-chip" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <section className="mt-5 rounded-[8px] border border-white/10 bg-white/[0.035] p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-kicker">Elsewhere</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                Fun links and handles.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/55">
              The stuff that does not quite belong next to GitHub, which is
              exactly why it belongs here.
            </p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {elsewhere.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <Icon className="size-5 text-signal-teal" />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {item.label}
                    </p>
                    <p className="mt-1 font-mono text-xs text-white/45">
                      {item.value}
                    </p>
                  </div>
                  {item.href ? (
                    <ExternalLink className="ml-auto size-4 text-white/35" />
                  ) : null}
                </>
              );

              return item.href ? (
                <a
                  className="flex items-center gap-3 rounded-[8px] border border-white/10 bg-black/20 p-4 transition hover:border-signal-teal/40 hover:bg-white/[0.05]"
                  href={item.href}
                  key={item.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  {content}
                </a>
              ) : (
                <div
                  className="flex items-center gap-3 rounded-[8px] border border-white/10 bg-black/20 p-4"
                  key={item.label}
                >
                  {content}
                </div>
              );
            })}
          </div>
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
    </main>
  );
}
