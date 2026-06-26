import { ViewTransition } from "react";

import { AiAmbient } from "@/components/ai-ambient";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-background text-foreground">
      <AiAmbient />
      <div className="site-grid" aria-hidden="true" />
      <div className="signal-rail" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <RevealOnScroll />
      <SiteHeader />
      <main>
        <ViewTransition
          enter="signal-page-enter"
          exit="signal-page-exit"
          default="none"
        >
          {children}
        </ViewTransition>
      </main>
      <SiteFooter />
    </div>
  );
}
