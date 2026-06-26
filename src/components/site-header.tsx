"use client";

import Link from "next/link";

import { BrandMark } from "@/components/brand-mark";
import { MobileMenu } from "@/components/mobile-menu";

const primaryLinks = [
  { href: "/#experience", label: "Experience" },
  { href: "/#work", label: "Projects" },
  { href: "/#business-sites", label: "Business Sites" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/70 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Richard Taylor Dawson, home"
        >
          <BrandMark />
        </Link>

        <div className="hidden items-center gap-6 text-sm text-white/60 md:flex">
          {primaryLinks.map((link) => (
            <Link
              className="transition hover:text-white"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <MobileMenu links={primaryLinks} />
      </nav>
    </header>
  );
}
