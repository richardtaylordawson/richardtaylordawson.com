"use client";

import Link from "next/link";
import { FileText, Mail, Wrench } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiEpicgames } from "react-icons/si";

import { BrandMark } from "@/components/brand-mark";
import { MobileMenu } from "@/components/mobile-menu";
import { experience } from "@/lib/site-content";

const primaryLinks = [
  { href: "/#experience", label: "Experience" },
  { href: "/#work", label: "Projects" },
  { href: "/#business-sites", label: "Business Sites" },
];

const mobileMenuSections = [
  {
    title: "Site",
    toneClassName: "text-signal-teal/80",
    links: [
      { href: "/about", label: "About Me", internal: true },
      { href: "/#work", label: "Projects", internal: true },
      { href: "/#business-sites", label: "Business Sites", internal: true },
    ],
  },
  {
    title: "Experience",
    toneClassName: "text-signal-amber/80",
    links: experience.map((item) => ({
      href: item.detailHref,
      label: item.company,
      internal: true,
      logo: item.logo,
    })),
  },
  {
    title: "Connect",
    toneClassName: "text-signal-lime/80",
    links: [
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
      {
        href: "mailto:richard.taylor.dawson@gmail.com",
        label: "Email",
        icon: Mail,
      },
    ],
  },
  {
    title: "Misc",
    toneClassName: "text-white/48",
    links: [
      { href: "/tools", label: "Tools", internal: true, icon: Wrench },
      {
        href: "/documents/richardtaylordawson.pdf",
        label: "Resume",
        icon: FileText,
      },
      {
        href: "https://rocketleague.tracker.network/rocket-league/profile/epic/LilWizzie/overview",
        label: "Rocket League",
        icon: SiEpicgames,
      },
    ],
  },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-xl">
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
              className="rounded-[6px] px-1.5 py-1 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <MobileMenu sections={mobileMenuSections} />
      </nav>
    </header>
  );
}
