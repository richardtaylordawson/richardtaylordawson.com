import Link from "next/link";
import { ArrowUpRight, Wrench } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

import { BrandMark } from "@/components/brand-mark";

const footerNav = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#work", label: "Work" },
  { href: "/uses", label: "Uses" },
];

const footerSocials = [
  {
    href: "https://www.github.com/richardtaylordawson",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "https://www.linkedin.com/in/taylor-dawson-482927123/",
    label: "LinkedIn",
    icon: FaLinkedinIn,
  },
];

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-3"
            aria-label="Richard Taylor Dawson, home"
          >
            <BrandMark />
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
              Richard Taylor Dawson
            </span>
          </Link>
          <p className="mt-5 max-w-xl text-sm leading-6 text-white/58">
            Building modern web products with careful interfaces, accessible
            systems, and practical AI collaboration.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:justify-self-end">
          <nav aria-label="Footer navigation">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-signal-teal">
              Site
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/62">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer social links">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-signal-lime">
              Connect
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/62">
              {footerSocials.map(({ href, label, icon: Icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="inline-flex items-center gap-2 transition hover:text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon className="size-4" />
                    {label}
                    <ArrowUpRight className="size-3.5 text-white/35" />
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/uses"
                  className="inline-flex items-center gap-2 transition hover:text-white"
                >
                  <Wrench className="size-4" />
                  Uses
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/[0.08] px-4 py-4 font-mono text-xs uppercase tracking-[0.14em] text-white/38 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>Copyright {new Date().getFullYear()} Richard Taylor Dawson</p>
      </div>
    </footer>
  );
}
