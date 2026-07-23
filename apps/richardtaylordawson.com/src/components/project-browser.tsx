"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";

import { ProjectCard, type ProjectCardItem } from "@/components/project-card";

type ProjectBrowserProps = {
  items: ProjectCardItem[];
};

const allFilter = "All" as const;
type ProjectStatus = NonNullable<ProjectCardItem["status"]>;
type StatusFilter = ProjectStatus | typeof allFilter;

const statusLabels = {
  deployed: "Deployed",
  "in-progress": "In progress / non-web",
} as const;

function isProjectStatus(status: ProjectCardItem["status"]): status is ProjectStatus {
  return Boolean(status);
}

export function ProjectBrowser({ items }: ProjectBrowserProps) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<StatusFilter>(allFilter);
  const [year, setYear] = useState<string>(allFilter);

  const statuses = useMemo<StatusFilter[]>(
    () => [
      allFilter,
      ...Array.from(
        new Set(items.map((item) => item.status).filter(isProjectStatus))
      ),
    ],
    [items]
  );
  const years = useMemo(
    () => [
      allFilter,
      ...Array.from(new Set(items.map((item) => item.year).filter(Boolean)))
        .sort()
        .reverse(),
    ],
    [items]
  );

  const normalizedQuery = query.trim().toLowerCase();
  const filteredItems = items.filter((item) => {
    const itemStatus = item.status ?? "deployed";
    const matchesQuery = normalizedQuery
      ? [
          item.title,
          item.tag,
          item.year,
          statusLabels[itemStatus],
          item.text,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery)
      : true;
    const matchesStatus = status === allFilter || itemStatus === status;
    const matchesYear = year === allFilter || item.year === year;

    return matchesQuery && matchesStatus && matchesYear;
  });

  const hasActiveFilters = Boolean(
    normalizedQuery || status !== allFilter || year !== allFilter
  );

  return (
    <div>
      <div
        className="rounded-[8px] border border-white/10 bg-white/[0.045] p-4 sm:p-5"
        data-reveal="card"
      >
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
          <label className="block">
            <span className="mb-2 block font-mono text-xs font-semibold uppercase tracking-[0.16em] text-white/48">
              Search projects
            </span>
            <span className="relative block">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-white/44"
                aria-hidden="true"
              />
              <input
                className="h-11 w-full rounded-[8px] border border-white/10 bg-black/20 pl-10 pr-10 text-sm text-white outline-none transition placeholder:text-white/32 hover:border-white/20 focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by title, year, status, or detail"
              />
              {query ? (
                <button
                  className="absolute right-2 top-1/2 grid size-7 -translate-y-1/2 place-items-center rounded-[6px] text-white/58 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                >
                  <X className="size-4" aria-hidden="true" />
                </button>
              ) : null}
            </span>
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <span className="mb-2 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-white/48">
                <SlidersHorizontal className="size-3.5" aria-hidden="true" />
                Status
              </span>
              <select
                className="h-11 w-full min-w-44 rounded-[8px] border border-white/10 bg-black/40 px-3 text-sm text-white outline-none transition hover:border-white/20 focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                value={status}
                onChange={(event) => setStatus(event.target.value as StatusFilter)}
                aria-label="Filter projects by status"
              >
                {statuses.map((itemStatus) => (
                  <option value={itemStatus} key={itemStatus}>
                    {itemStatus === allFilter
                      ? "All projects"
                      : statusLabels[itemStatus]}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <span className="mb-2 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-white/48">
                Year
              </span>
              <select
                className="h-11 w-full min-w-36 rounded-[8px] border border-white/10 bg-black/40 px-3 text-sm text-white outline-none transition hover:border-white/20 focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                value={year}
                onChange={(event) => setYear(event.target.value)}
                aria-label="Filter projects by year"
              >
                {years.map((itemYear) => (
                  <option value={itemYear} key={itemYear}>
                    {itemYear === allFilter ? "All years" : itemYear}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
          <p className="text-sm text-white/54">
            Showing {filteredItems.length} of {items.length} projects
          </p>
          {hasActiveFilters ? (
            <button
              className="command-link"
              type="button"
              onClick={() => {
                setQuery("");
                setStatus(allFilter);
                setYear(allFilter);
              }}
            >
              <X className="size-4" aria-hidden="true" />
              Clear filters
            </button>
          ) : null}
        </div>
      </div>

      {filteredItems.length ? (
        <div className="motion-stagger mt-8 grid gap-5 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <ProjectCard item={item} reveal={false} key={item.title} />
          ))}
        </div>
      ) : (
        <div
          className="mt-8 rounded-[8px] border border-white/10 bg-white/[0.045] p-8 text-center"
          data-reveal="card"
        >
          <p className="text-base font-medium text-white">No projects found</p>
          <p className="mt-2 text-sm leading-6 text-white/58">
            Try another search term or clear the active filters.
          </p>
        </div>
      )}
    </div>
  );
}
