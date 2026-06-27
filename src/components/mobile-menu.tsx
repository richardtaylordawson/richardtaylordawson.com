"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Menu, X } from "lucide-react";
import type { ComponentType } from "react";
import {
  useEffect,
  useEffectEvent,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { createPortal } from "react-dom";

import { BrandMark } from "@/components/brand-mark";

type MobileMenuLink = {
  href: string;
  label: string;
  internal?: boolean;
  logo?: string;
  icon?: ComponentType<{ className?: string }>;
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
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const handleKeydown = useEffectEvent((event: KeyboardEvent) => {
    if (!isOpen) {
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      setIsOpen(false);
      return;
    }

    if (event.key !== "Tab") {
      return;
    }

    const menu = document.getElementById("mobile-site-menu");

    if (!menu) {
      return;
    }

    const focusable = Array.from(
      menu.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    ).filter((element) => !element.hasAttribute("hidden"));

    if (focusable.length === 0) {
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement;

    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  });

  useEffect(() => {
    const shellRoot = document.querySelector<HTMLElement>("[data-site-shell-root]");
    const triggerElement = triggerRef.current;

    document.body.style.overflow = isOpen ? "hidden" : "";

    if (!isOpen) {
      shellRoot?.removeAttribute("inert");
      previousFocusRef.current = null;
      return () => {
        document.body.style.overflow = "";
      };
    }

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    shellRoot?.setAttribute("inert", "");
    closeButtonRef.current?.focus();
    document.addEventListener("keydown", handleKeydown);

    return () => {
      shellRoot?.removeAttribute("inert");
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeydown);

      if (isOpen) {
        (previousFocusRef.current ?? triggerElement)?.focus();
      }
    };
  }, [isOpen]);

  const overlay = (
    <div
      id="mobile-site-menu"
      className={`mobile-menu-overlay md:hidden ${isOpen ? "is-open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
    >
      <div className="mobile-menu-surface">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center"
            aria-label="Richard Taylor Dawson, home"
            onClick={() => setIsOpen(false)}
          >
            <BrandMark />
          </Link>
          <button
            ref={closeButtonRef}
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
                      <span className="flex min-w-0 items-center gap-3">
                        {link.logo ? (
                          <Image
                            src={link.logo}
                            alt=""
                            width={16}
                            height={16}
                            className="size-4 shrink-0 rounded-[4px] bg-white object-contain p-0.5"
                          />
                        ) : link.icon ? (
                          <link.icon className="size-4 shrink-0 text-white/72" />
                        ) : null}
                        <span className="truncate">{link.label}</span>
                      </span>
                      {link.internal ? null : (
                        <ExternalLink className="ml-auto size-3.5 shrink-0 text-white/35" />
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
                      aria-label={`${link.label} (opens in a new tab)`}
                      onClick={() => setIsOpen(false)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {content}
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  );
                })}
              </nav>
            </section>
          ))}
        </div>

      </div>
    </div>
  );

  return (
    <>
      <button
        ref={triggerRef}
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
