"use client";

import { useEffect } from "react";

export function AiAmbient() {
  useEffect(() => {
    const root = document.documentElement;

    function syncPointer(event: PointerEvent) {
      root.style.setProperty("--cursor-x", `${event.clientX}px`);
      root.style.setProperty("--cursor-y", `${event.clientY}px`);
    }

    window.addEventListener("pointermove", syncPointer, { passive: true });

    return () => {
      window.removeEventListener("pointermove", syncPointer);
    };
  }, []);

  return <div className="pointer-light" aria-hidden="true" />;
}
