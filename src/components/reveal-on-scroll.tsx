"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-revealed"));
      return;
    }

    let frame = 0;
    const revealVisible = () => {
      const triggerY = window.innerHeight;

      elements.forEach((element) => {
        if (element.classList.contains("is-revealed")) {
          return;
        }

        const rect = element.getBoundingClientRect();

        if (rect.top <= triggerY && rect.bottom >= 0) {
          element.classList.add("is-revealed");
        }
      });
    };
    const scheduleReveal = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(revealVisible);
    };

    scheduleReveal();
    const fallback = window.setTimeout(revealVisible, 120);
    window.addEventListener("scroll", scheduleReveal, { passive: true });
    window.addEventListener("resize", scheduleReveal);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(fallback);
      window.removeEventListener("scroll", scheduleReveal);
      window.removeEventListener("resize", scheduleReveal);
    };
  }, [pathname]);

  return <span hidden aria-hidden="true" />;
}
