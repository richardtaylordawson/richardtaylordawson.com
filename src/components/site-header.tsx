import Link from "next/link";
import { Wrench } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiApplemusic, SiEpicgames } from "react-icons/si";

import { BrandMark } from "@/components/brand-mark";
import type { IconComponent } from "@/lib/site-content";

const primaryLinks = [
  { href: "/#about", label: "About Me" },
  { href: "/#experience", label: "Experience" },
  { href: "/#work", label: "Projects" },
  { href: "/#business-sites", label: "Business Sites" },
];

const iconLinks = [
  {
    href: "/uses",
    label: "Uses",
    icon: Wrench,
    internal: true,
  },
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
    href: "https://music.apple.com/profile/richardtaylordawson",
    label: "Apple Music",
    icon: SiApplemusic,
  },
  {
    href: "https://rocketleague.tracker.network/rocket-league/profile/epic/LilWizzie/overview",
    label: "Rocket League",
    icon: SiEpicgames,
  },
] satisfies {
  href: string;
  label: string;
  icon: IconComponent;
  internal?: boolean;
}[];

function IconNavLink({
  href,
  label,
  icon: Icon,
  internal,
}: (typeof iconLinks)[number]) {
  const content = <Icon />;

  if (internal) {
    return (
      <Link href={href} className="icon-link" aria-label={label}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className="icon-link"
      aria-label={label}
      target="_blank"
      rel="noreferrer"
    >
      {content}
    </a>
  );
}

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

        <div className="flex items-center gap-2">
          {iconLinks.map((link) => (
            <IconNavLink {...link} key={link.href} />
          ))}
        </div>
      </nav>
    </header>
  );
}
