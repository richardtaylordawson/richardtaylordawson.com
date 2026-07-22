import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { ProjectBrowser } from "@/components/project-browser";
import { SiteShell } from "@/components/site-shell";
import { projects } from "@/lib/site-content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Projects",
  description:
    "Browse Richard Taylor Dawson's personal projects, web experiments, games, and tools.",
  pathname: "/projects",
});

export default function ProjectsPage() {
  return (
    <SiteShell>
      <section className="relative mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
        <Link href="/#work" className="back-link" data-reveal="hero">
          <ArrowLeft className="size-4" />
          Back home
        </Link>

        <header className="mt-10 max-w-3xl" data-reveal="hero">
          <p className="section-kicker">Projects</p>
          <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Personal projects, tools, and experiments.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/[0.68] sm:text-lg sm:leading-8">
            Search and filter the full collection of side projects, from games
            and utilities to interface experiments.
          </p>
        </header>

        <div className="mt-12">
          <ProjectBrowser items={projects} />
        </div>
      </section>
    </SiteShell>
  );
}
