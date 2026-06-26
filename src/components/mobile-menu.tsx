"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

import { BrandMark } from "@/components/brand-mark";

type MobileMenuLink = {
  href: string;
  label: string;
  internal?: boolean;
  logo?: string;
};

type MobileMenuProps = {
  sections: {
    title: string;
    toneClassName: string;
    links: MobileMenuLink[];
  }[];
};

export function MobileMenu({ sections }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const overlay = (
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

        <div className="mt-10 grid gap-7">
          {sections.map((section) => (
            <section key={section.title}>
              <p
                className={`font-mono text-xs uppercase tracking-[0.18em] ${section.toneClassName}`}
              >
                {section.title}
              </p>
              <nav
                className="mt-4 grid gap-3"
                aria-label={`${section.title} mobile navigation`}
              >
                {section.links.map((link) => {
                  const content = (
                    <>
                      {link.logo ? (
                        <Image
                          src={link.logo}
                          alt=""
                          width={16}
                          height={16}
                          className="size-4 shrink-0 rounded-[4px] bg-white object-contain p-0.5"
                        />
                      ) : null}
                      <span>{link.label}</span>
                      {link.internal ? (
                        <span className="ml-auto text-white/30">/</span>
                      ) : (
                        <ArrowUpRight className="ml-auto size-3.5 shrink-0 text-white/35" />
                      )}
                    </>
                  );

                  return link.internal ? (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="mobile-menu-link"
                      onClick={() => setIsOpen(false)}
                    >
                      {content}
                    </Link>
                  ) : (
                    <a
                      key={link.href}
                      href={link.href}
                      className="mobile-menu-link"
                      onClick={() => setIsOpen(false)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {content}
                    </a>
                  );
                })}
              </nav>
            </section>
          ))}
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
  );

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
      {isMounted ? createPortal(overlay, document.body) : null}
    </>
  );
}
