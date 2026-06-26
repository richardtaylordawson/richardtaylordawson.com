import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import { aboutCopy } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About Me | Richard Taylor Dawson",
  description:
    "Biography and background for Richard Taylor Dawson, a software engineer focused on accessible, polished web products.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="relative mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/55 transition hover:text-white"
          data-reveal="hero"
        >
          <ArrowLeft className="size-4" />
          Back home
        </Link>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div
            className="motion-delay-2 relative overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-black/30"
            data-reveal="image"
          >
            <Image
              src="/images/headshot.png"
              alt="Richard Taylor Dawson"
              width={712}
              height={724}
              priority
              className="aspect-[1/1.02] w-full rounded-[6px] object-cover"
            />
          </div>

          <div
            className="rounded-[8px] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/10 sm:p-8 lg:p-10"
            data-reveal="card"
          >
            <SectionHeading kicker="About me" />
            <div className="mt-8 space-y-5 text-base leading-7 text-white/[0.68] sm:text-lg sm:leading-8">
              {aboutCopy.map((paragraph) => (
                <p data-reveal="hero" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
