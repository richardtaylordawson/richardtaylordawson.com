"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Search } from "lucide-react";

import { startedProjects } from "@/lib/site-content";

const PAGE_SIZE = 6;
const ALL_TAGS = "All";

export function StartedProjectsSearch() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState(ALL_TAGS);
  const [page, setPage] = useState(1);

  const tags = useMemo(
    () => [ALL_TAGS, ...Array.from(new Set(startedProjects.map((project) => project.tag))).sort()],
    [],
  );

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return startedProjects.filter((project) => {
      const matchesTag = activeTag === ALL_TAGS || project.tag === activeTag;
      const matchesQuery = normalizedQuery
        ? `${project.title} ${project.text} ${project.tag}`.toLowerCase().includes(normalizedQuery)
        : true;

      return matchesTag && matchesQuery;
    });
  }, [activeTag, query]);

  const totalPages = Math.max(Math.ceil(filteredProjects.length / PAGE_SIZE), 1);
  const currentPage = Math.min(page, totalPages);
  const pageProjects = filteredProjects.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  function chooseTag(tag: string) {
    setActiveTag(tag);
    setPage(1);
  }

  function updateQuery(value: string) {
    setQuery(value);
    setPage(1);
  }

  return (
    <div className="mt-8 border-t border-white/10 pt-6">
      <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end" data-reveal="hero">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-signal-amber">
            Started projects
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/[0.62]">
            Smaller experiments and early builds from GitHub, tucked into a searchable directory below the featured work.
          </p>
        </div>

        <div className="grid gap-3">
          <label className="relative block">
            <span className="sr-only">Search started projects</span>
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-white/42" />
            <input
              type="search"
              value={query}
              onChange={(event) => updateQuery(event.target.value)}
              placeholder="Search projects"
              className="min-h-11 w-full rounded-[8px] border border-white/10 bg-white/[0.055] py-2 pl-10 pr-3 text-sm text-white outline-none transition placeholder:text-white/38 hover:border-white/20 focus:border-signal-teal/45 focus:ring-2 focus:ring-signal-teal/20"
            />
          </label>
          <div className="flex gap-2 overflow-x-auto pb-1" aria-label="Filter started projects by language">
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => chooseTag(tag)}
                className={
                  tag === activeTag
                    ? "min-h-9 shrink-0 rounded-[8px] border border-signal-teal/45 bg-signal-teal/15 px-3 text-sm font-medium text-white"
                    : "min-h-9 shrink-0 rounded-[8px] border border-white/10 bg-white/[0.04] px-3 text-sm font-medium text-white/62 transition hover:border-white/20 hover:text-white"
                }
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm text-white/45" data-reveal="hero">
        <span>
          {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
        </span>
        <span>
          Page {currentPage} of {totalPages}
        </span>
      </div>

      <div className="motion-stagger mt-4 grid gap-3 md:grid-cols-2">
        {pageProjects.map((project) => (
          <a
            key={project.href}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="group rounded-[8px] border border-white/10 bg-white/[0.035] p-4 transition hover:border-signal-teal/35 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            data-reveal="card"
            aria-label={`${project.title} on GitHub (opens in a new tab)`}
          >
            <span className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-base font-semibold text-white">{project.title}</span>
              <span className="rounded-[8px] border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/58">
                {project.tag}
              </span>
            </span>
            <span className="mt-2 block text-sm leading-6 text-white/[0.62]">
              {project.text}
            </span>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-signal-teal">
              GitHub
              <ExternalLink className="size-3.5" />
            </span>
          </a>
        ))}
      </div>

      {pageProjects.length === 0 ? (
        <p className="mt-5 rounded-[8px] border border-white/10 bg-white/[0.035] p-4 text-sm text-white/62" data-reveal="card">
          No started projects match that search.
        </p>
      ) : null}

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3" data-reveal="hero">
        <button
          type="button"
          className="command-link disabled:pointer-events-none disabled:opacity-40"
          onClick={() => setPage((value) => Math.max(value - 1, 1))}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="size-4" />
          Previous
        </button>
        <button
          type="button"
          className="command-link disabled:pointer-events-none disabled:opacity-40"
          onClick={() => setPage((value) => Math.min(value + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
