"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { BrandMark } from "@/components/brand-mark";

type MobileMenuProps = {
  links: {
    href: string;
    label: string;
  }[];
};

export function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className="mobile-menu-trigger md:hidden"
        aria-expanded={isOpen}
        aria-controls="mobile-site-menu"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      <div
        id="mobile-site-menu"
        className={`mobile-menu-overlay md:hidden ${isOpen ? "is-open" : ""}`}
      >
        <div className="mobile-menu-surface">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="flex items-center gap-3"
              aria-label="Richard Taylor Dawson, home"
              onClick={() => setIsOpen(false)}
            >
              <BrandMark />
              <div>
                <p className="text-sm font-semibold text-white">
                  Richard Taylor Dawson
                </p>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-white/45">
                  Product-minded engineer
                </p>
              </div>
            </Link>
            <button
              type="button"
              className="mobile-menu-trigger"
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
            >
              <X className="size-5" />
            </button>
          </div>

          <div className="mt-10">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-signal-teal/80">
              Navigate
            </p>
            <nav className="mt-5 grid gap-3" aria-label="Mobile navigation">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="mobile-menu-link"
                  onClick={() => setIsOpen(false)}
                >
                  <span>{link.label}</span>
                  <span className="text-white/30">/</span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="mt-auto rounded-[8px] border border-white/10 bg-white/[0.045] p-5">
            <p className="text-sm text-white/70">
              Modern web products with AI, accessibility, and thoughtful UI
              craft.
            </p>
            <a
              href="/documents/richardtaylordawson.pdf"
              className="command-link mt-5 w-full"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
