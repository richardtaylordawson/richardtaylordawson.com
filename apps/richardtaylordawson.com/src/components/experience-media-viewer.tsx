"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Film,
  Globe2,
  Image as ImageIcon,
  RotateCcw,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

import type { ExperienceProject } from "@/lib/site-content";
import { cn } from "@/lib/utils";

type ExperienceMediaViewerProps = {
  comparisonGroups?: ExperienceProject["comparisonGroups"];
  images?: ExperienceProject["images"];
  link?: {
    href: string;
    label: string;
  };
  media?: ExperienceProject["media"];
  title: string;
  workSites?: ExperienceProject["workSites"];
  workSitesNote?: ExperienceProject["workSitesNote"];
};

type MediaItem =
  | {
      type: "image";
      src: string;
      alt: string;
      caption: string;
      width: number;
      height: number;
    }
  | {
      type: "comparison";
      title: string;
      description: string;
      items: NonNullable<ExperienceProject["comparisonGroups"]>[number]["items"];
    }
  | {
      type: "video";
      src: string;
      label: string;
      contentType?: string;
    }
  | {
      type: "link";
      href: string;
      label: string;
    };

export function ExperienceMediaViewer({
  comparisonGroups,
  images,
  link,
  media,
  title,
  workSites,
  workSitesNote,
}: ExperienceMediaViewerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageZoom, setImageZoom] = useState(1);
  const titleId = useId();
  const mediaItems: MediaItem[] = useMemo(
    () => [
      ...(images ?? []).map((image) => ({
        type: "image" as const,
        ...image,
      })),
      ...(comparisonGroups ?? []).map((group) => ({
        type: "comparison" as const,
        ...group,
      })),
      ...(media?.type === "video"
        ? [
            {
              type: "video" as const,
              src: media.src,
              label: media.label,
              contentType: media.contentType,
            },
          ]
        : []),
      ...(link
        ? [
            {
              type: "link" as const,
              href: link.href,
              label: link.label,
            },
          ]
        : []),
    ],
    [comparisonGroups, images, link, media],
  );
  const currentItem = mediaItems[activeIndex] ?? mediaItems[0];
  const hasMediaItems = mediaItems.length > 0;
  const hasMultipleItems = mediaItems.length > 1;
  const hasVisualMedia = mediaItems.some((item) => item.type !== "link");
  const hasWorkSites = Boolean(workSites?.length);

  const showPreviousItem = useCallback(() => {
    setImageZoom(1);
    setActiveIndex((current) =>
      current === 0 ? mediaItems.length - 1 : current - 1,
    );
  }, [mediaItems.length]);

  const showNextItem = useCallback(() => {
    setImageZoom(1);
    setActiveIndex((current) =>
      current === mediaItems.length - 1 ? 0 : current + 1,
    );
  }, [mediaItems.length]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }

      if (event.key === "ArrowLeft" && hasMultipleItems) {
        showPreviousItem();
      }

      if (event.key === "ArrowRight" && hasMultipleItems) {
        showNextItem();
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [hasMultipleItems, isOpen, showNextItem, showPreviousItem]);

  if (!hasMediaItems && !hasWorkSites) {
    return null;
  }

  return (
    <>
      <button
        type="button"
        className="inline-flex min-h-9 shrink-0 items-center justify-center gap-1.5 rounded-[8px] border border-signal-teal/35 bg-signal-teal/[0.12] px-3 text-sm font-medium text-signal-teal transition hover:border-signal-lime/45 hover:bg-signal-lime/[0.1] hover:text-signal-lime focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        onClick={() => {
          setActiveIndex(0);
          setImageZoom(1);
          setIsOpen(true);
        }}
      >
        {hasVisualMedia ? (
          <ImageIcon className="size-3.5" />
        ) : (
          <Globe2 className="size-3.5" />
        )}
        View work
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 p-3 backdrop-blur-xl sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <button
            type="button"
            className="absolute inset-0"
            aria-label="Close media viewer"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative z-10 flex max-h-[calc(100dvh-1.5rem)] w-full max-w-7xl flex-col overflow-hidden rounded-[8px] border border-white/10 bg-card shadow-2xl shadow-black/40 sm:max-h-[calc(100dvh-3rem)]">
            <header className="flex min-h-14 items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
              <div className="min-w-0">
                <p className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-signal-teal">
                  Project work
                </p>
                <h2
                  className="mt-1 truncate text-base font-semibold text-white"
                  id={titleId}
                >
                  {title}
                </h2>
              </div>
              <button
                type="button"
                className="grid size-10 shrink-0 place-items-center rounded-[8px] border border-white/10 bg-white/[0.055] text-white/72 transition hover:border-signal-teal/40 hover:bg-signal-teal/[0.1] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                aria-label="Close media viewer"
                title="Close"
                onClick={() => setIsOpen(false)}
              >
                <X className="size-4" />
              </button>
            </header>

            <div className="grid min-h-0 flex-1 gap-3 overflow-y-auto p-3 sm:p-4">
              {currentItem ? (
                <figure className="grid min-h-0 gap-4">
                  <div
                    className={cn(
                      "rounded-[8px] border border-white/10 bg-black/35",
                      currentItem.type === "image"
                        ? "relative max-h-[68dvh] overflow-auto"
                        : currentItem.type === "comparison"
                          ? "max-h-[68dvh] overflow-auto"
                        : "relative min-h-[220px] overflow-hidden sm:min-h-[420px] lg:min-h-[560px]",
                    )}
                  >
                    {currentItem.type === "image" ? (
                      <div className="flex min-h-[220px] items-start justify-center p-2 sm:min-h-[420px]">
                        <Image
                          src={currentItem.src}
                          alt={currentItem.alt}
                          width={currentItem.width}
                          height={currentItem.height}
                          sizes="calc(100vw - 2rem)"
                          className="h-auto max-w-none rounded-[6px]"
                          priority
                          style={{
                            width: `${imageZoom * 100}%`,
                          }}
                        />
                      </div>
                    ) : currentItem.type === "comparison" ? (
                      <div className="grid gap-3 p-3 lg:grid-cols-3">
                        {currentItem.items.map((item) => (
                          <article
                            className="grid gap-3 rounded-[8px] border border-white/10 bg-white/[0.045] p-3"
                            key={item.src}
                          >
                            <div className="flex items-center justify-between gap-3">
                              <h3 className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-signal-teal">
                                {item.label}
                              </h3>
                              <a
                                href={item.src}
                                className="inline-flex min-h-8 items-center justify-center gap-1.5 rounded-[8px] border border-white/10 bg-white/[0.055] px-2.5 text-xs font-medium text-white/70 transition hover:border-signal-teal/35 hover:bg-signal-teal/[0.1] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Open
                                <span className="sr-only">
                                  {` ${item.label} full size (opens in a new tab)`}
                                </span>
                                <ExternalLink className="size-3" />
                              </a>
                            </div>
                            <div className="relative aspect-[4/3] overflow-hidden rounded-[6px] border border-white/10 bg-black/30">
                              <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                sizes="(min-width: 1024px) 30vw, 80vw"
                                className="object-contain object-top"
                              />
                            </div>
                            <p className="text-sm leading-6 text-white/[0.62]">
                              {item.caption}
                            </p>
                          </article>
                        ))}
                      </div>
                    ) : currentItem.type === "video" ? (
                      <video
                        aria-label={currentItem.label}
                        className="absolute inset-0 h-full w-full bg-black object-contain"
                        controls
                        playsInline
                        preload="metadata"
                      >
                        <source
                          src={currentItem.src}
                          type={currentItem.contentType}
                        />
                        Your browser does not support embedded videos.
                      </video>
                    ) : (
                      <div className="flex min-h-[220px] flex-col items-center justify-center gap-4 p-8 text-center sm:min-h-[420px] lg:min-h-[560px]">
                        <span className="grid size-16 place-items-center rounded-[8px] border border-signal-teal/25 bg-signal-teal/[0.1] text-signal-teal">
                          <Globe2 className="size-7" />
                        </span>
                        <div>
                          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-white/[0.46]">
                            Live project
                          </p>
                          <h3 className="mt-2 text-2xl font-semibold text-white">
                            {currentItem.label}
                          </h3>
                        </div>
                        <a
                          href={currentItem.href}
                          className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-[8px] border border-signal-teal/35 bg-signal-teal/[0.12] px-4 text-sm font-medium text-signal-teal transition hover:border-signal-lime/45 hover:bg-signal-lime/[0.1] hover:text-signal-lime focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {currentItem.label}
                          <span className="sr-only">(opens in a new tab)</span>
                          <ExternalLink className="size-3.5" />
                        </a>
                      </div>
                    )}
                    {hasMultipleItems && currentItem.type === "image" ? (
                      <>
                        <button
                          type="button"
                          className="absolute left-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-[8px] border border-white/10 bg-background/80 text-white/78 shadow-lg shadow-black/25 backdrop-blur transition hover:border-signal-teal/40 hover:bg-signal-teal/[0.18] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                          aria-label="Previous work example"
                          title="Previous"
                          onClick={showPreviousItem}
                        >
                          <ChevronLeft className="size-5" />
                        </button>
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-[8px] border border-white/10 bg-background/80 text-white/78 shadow-lg shadow-black/25 backdrop-blur transition hover:border-signal-teal/40 hover:bg-signal-teal/[0.18] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                          aria-label="Next work example"
                          title="Next"
                          onClick={showNextItem}
                        >
                          <ChevronRight className="size-5" />
                        </button>
                      </>
                    ) : null}
                  </div>
                  {currentItem.type === "image" ||
                  currentItem.type === "video" ? (
                    <div className="mt-1 flex flex-wrap items-center justify-between gap-2 rounded-[8px] border border-white/10 bg-black/15 px-3 py-2">
                      {currentItem.type === "image" ? (
                        <div className="flex flex-wrap gap-2">
                          <button
                            type="button"
                            className="grid size-9 place-items-center rounded-[8px] border border-white/10 bg-white/[0.055] text-white/72 transition hover:border-signal-teal/40 hover:bg-signal-teal/[0.1] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                            aria-label="Zoom out"
                            title="Zoom out"
                            onClick={() =>
                              setImageZoom((zoom) =>
                                Math.max(0.5, zoom - 0.25),
                              )
                            }
                          >
                            <ZoomOut className="size-4" />
                          </button>
                          <button
                            type="button"
                            className="grid size-9 place-items-center rounded-[8px] border border-white/10 bg-white/[0.055] text-white/72 transition hover:border-signal-teal/40 hover:bg-signal-teal/[0.1] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                            aria-label="Reset zoom"
                            title="Reset zoom"
                            onClick={() => setImageZoom(1)}
                          >
                            <RotateCcw className="size-4" />
                          </button>
                          <button
                            type="button"
                            className="grid size-9 place-items-center rounded-[8px] border border-white/10 bg-white/[0.055] text-white/72 transition hover:border-signal-teal/40 hover:bg-signal-teal/[0.1] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                            aria-label="Zoom in"
                            title="Zoom in"
                            onClick={() =>
                              setImageZoom((zoom) => Math.min(3, zoom + 0.25))
                            }
                          >
                            <ZoomIn className="size-4" />
                          </button>
                          <span className="inline-flex h-9 items-center rounded-[8px] border border-white/10 bg-white/[0.045] px-2.5 font-mono text-[0.6875rem] text-white/[0.54]">
                            {Math.round(imageZoom * 100)}%
                          </span>
                        </div>
                      ) : (
                        <span className="text-sm text-white/[0.56]">
                          If playback is blocked, open the video directly.
                        </span>
                      )}
                      <a
                        href={currentItem.src}
                        className="inline-flex min-h-9 items-center justify-center gap-1.5 rounded-[8px] border border-signal-teal/35 bg-signal-teal/[0.12] px-3 text-sm font-medium text-signal-teal transition hover:border-signal-lime/45 hover:bg-signal-lime/[0.1] hover:text-signal-lime focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {currentItem.type === "image"
                          ? "Open full size"
                          : "Open video"}
                        <span className="sr-only">(opens in a new tab)</span>
                        <ExternalLink className="size-3.5" />
                      </a>
                    </div>
                  ) : null}
                  <figcaption className="grid gap-3 rounded-[8px] border border-white/10 bg-black/15 px-3 py-2.5">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <span className="min-w-0 text-sm leading-6 text-white/[0.68]">
                        {currentItem.type === "image"
                          ? currentItem.caption
                          : currentItem.type === "comparison"
                            ? currentItem.description
                          : currentItem.type === "video"
                            ? currentItem.label
                            : "Open the live project in a new tab."}
                      </span>
                      <span className="shrink-0 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-white/[0.42]">
                        {activeIndex + 1} / {mediaItems.length}
                      </span>
                    </div>
                    {hasMultipleItems ? (
                      <div
                        className="flex gap-2 overflow-x-auto border-t border-white/10 pt-3"
                        aria-label={`${title} work examples`}
                      >
                        {mediaItems.map((item, index) => (
                          <button
                            type="button"
                            className={cn(
                              "relative h-16 w-28 shrink-0 overflow-hidden rounded-[8px] border bg-black/25 transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary",
                              index === activeIndex
                                ? "border-signal-teal"
                                : "border-white/10 opacity-60 hover:border-white/25 hover:opacity-100",
                            )}
                            aria-label={`Show work example ${index + 1}`}
                            aria-current={index === activeIndex}
                            key={
                              item.type === "link"
                                ? `${item.type}-${item.href}`
                                : item.type === "comparison"
                                  ? `${item.type}-${item.title}`
                                : `${item.type}-${item.src}`
                            }
                            onClick={() => {
                              setActiveIndex(index);
                              setImageZoom(1);
                            }}
                          >
                            {item.type === "image" ? (
                              <Image
                                src={item.src}
                                alt=""
                                fill
                                sizes="112px"
                                className="object-cover"
                              />
                            ) : item.type === "video" ? (
                              <span className="grid h-full w-full place-items-center text-white/72">
                                <Film className="size-5" />
                              </span>
                            ) : item.type === "comparison" ? (
                              <span className="grid h-full w-full place-items-center text-white/72">
                                <ImageIcon className="size-5" />
                              </span>
                            ) : (
                              <span className="grid h-full w-full place-items-center text-white/72">
                                <Globe2 className="size-5" />
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                    ) : null}
                  </figcaption>
                </figure>
              ) : null}

              {hasWorkSites ? (
                <div className="rounded-[8px] border border-white/10 bg-black/15 p-4">
                  {workSitesNote ? (
                    <p className="text-sm leading-6 text-white/[0.62]">
                      {workSitesNote}
                    </p>
                  ) : null}
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {workSites?.map((site) => (
                      <li key={site}>
                        <a
                          href={getWorkSiteHref(site)}
                          className="flex min-h-10 items-center justify-between gap-2 rounded-[8px] border border-white/10 bg-white/[0.045] px-3 py-2 font-mono text-xs text-white/[0.72] transition hover:border-signal-teal/35 hover:bg-signal-teal/[0.08] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span>{site}</span>
                          <ExternalLink className="size-3 shrink-0 text-white/35" />
                          <span className="sr-only">(opens in a new tab)</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function getWorkSiteHref(site: string) {
  if (/^https?:\/\//.test(site)) {
    return site;
  }

  return `https://${site}`;
}
