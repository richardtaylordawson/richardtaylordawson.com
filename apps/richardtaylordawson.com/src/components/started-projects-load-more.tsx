"use client";

import { useMemo, useState } from "react";
import { ExternalLink, Plus } from "lucide-react";

import { startedProjects } from "@/lib/site-content";

const INITIAL_COUNT = 4;
const STEP_COUNT = 4;

type StartedProject = (typeof startedProjects)[number];

function StartedProjectItem({ project }: { project: StartedProject }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="group grid gap-3 rounded-[8px] border border-white/10 bg-white/[0.035] p-4 transition hover:border-signal-teal/35 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:grid-cols-[minmax(0,1fr)_auto]"
      data-reveal="card"
      aria-label={`${project.title} on GitHub (opens in a new tab)`}
    >
      <span>
        <span className="flex flex-wrap items-center gap-2">
          <span className="text-base font-semibold text-white">{project.title}</span>
          <span className="rounded-[8px] border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/58">
            {project.tag}
          </span>
        </span>
        <span className="mt-2 block max-w-2xl text-sm leading-6 text-white/[0.62]">
          {project.text}
        </span>
      </span>
      <span className="inline-flex items-center gap-2 self-start text-sm font-medium text-signal-teal sm:justify-self-end">
        GitHub
        <ExternalLink className="size-3.5" />
      </span>
    </a>
  );
}

export function StartedProjectsLoadMore() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const visibleProjects = useMemo(
    () => startedProjects.slice(0, visibleCount),
    [visibleCount],
  );
  const hiddenCount = Math.max(startedProjects.length - visibleCount, 0);

  return (
    <div className="mt-8 border-t border-white/10 pt-6">
      <div data-reveal="hero">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-signal-amber">
              Started projects
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/[0.62]">
              Smaller experiments and early builds from GitHub, kept compact so the polished work stays up front.
            </p>
          </div>
          <p className="text-sm text-white/45">
            Showing {visibleProjects.length} of {startedProjects.length}
          </p>
        </div>
      </div>

      <div className="motion-stagger mt-6 grid gap-3">
        {visibleProjects.map((project) => (
          <StartedProjectItem key={project.href} project={project} />
        ))}
      </div>

      {hiddenCount > 0 ? (
        <div className="mt-5" data-reveal="hero">
          <button
            type="button"
            className="command-link"
            onClick={() => setVisibleCount((count) => count + STEP_COUNT)}
          >
            <Plus className="size-4" />
            Load {Math.min(hiddenCount, STEP_COUNT)} more
          </button>
        </div>
      ) : null}
    </div>
  );
}
