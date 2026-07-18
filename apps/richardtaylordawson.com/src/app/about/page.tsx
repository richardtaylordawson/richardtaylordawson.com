import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import { aboutCopy } from "@/lib/site-content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About Me",
  description:
    "Biography, background, and working style for Richard Taylor Dawson, a software engineer focused on accessible, polished web products.",
  pathname: "/about",
});

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="relative mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
        <Link href="/" className="back-link" data-reveal="hero">
          <ArrowLeft className="size-4" />
          Back home
        </Link>

        <header className="mt-10 max-w-3xl" data-reveal="hero">
          <p className="section-kicker">About me</p>
          <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl">
            The fuller story behind the work.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/[0.68] sm:text-lg sm:leading-8">
            Background, working style, and the details that shape how I build
            polished, accessible web products.
          </p>
        </header>

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
            <SectionHeading kicker="Biography" />
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
