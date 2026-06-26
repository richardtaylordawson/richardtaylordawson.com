import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Wrench } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

import { BrandMark } from "@/components/brand-mark";
import { experience } from "@/lib/site-content";

const footerSiteLinks = [
  { href: "/#about", label: "About Me" },
  { href: "/#work", label: "Projects" },
  { href: "/#business-sites", label: "Business Sites" },
];

const footerExperienceLinks = experience.map((item) => ({
  href: item.detailHref,
  label: item.company,
  logo: item.logo,
}));

const footerConnectLinks = [
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

const footerMiscLinks = [{ href: "/uses", label: "Uses", icon: Wrench }];

const footerLinkClass =
  "flex w-full items-center gap-2 rounded-[8px] px-2 py-2 transition hover:bg-white/[0.06] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/30";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-3"
            aria-label="Home"
          >
            <BrandMark />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <nav aria-label="Footer navigation">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-signal-teal">
              Site
            </p>
            <ul className="mt-4 space-y-1 text-sm text-white/62">
              {footerSiteLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={footerLinkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer experience links">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-signal-amber">
              Experience
            </p>
            <ul className="mt-4 space-y-1 text-sm text-white/62">
              {footerExperienceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={footerLinkClass}>
                    <Image
                      src={link.logo}
                      alt=""
                      width={16}
                      height={16}
                      className="size-4 shrink-0 rounded-[4px] bg-white object-contain p-0.5"
                    />
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
            <ul className="mt-4 space-y-1 text-sm text-white/62">
              {footerConnectLinks.map(({ href, label, icon: Icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    className={footerLinkClass}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="inline-flex min-w-0 items-center gap-2">
                      <Icon className="size-4 shrink-0" />
                      <span className="truncate">{label}</span>
                      <ArrowUpRight className="size-3.5 shrink-0 text-white/35" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer misc links">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-white/48">
              Misc
            </p>
            <ul className="mt-4 space-y-1 text-sm text-white/62">
              {footerMiscLinks.map(({ href, label, icon: Icon }) => (
                <li key={href}>
                  <Link href={href} className={footerLinkClass}>
                    <Icon className="size-4 shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/[0.08] px-4 py-4 font-mono text-xs uppercase tracking-[0.14em] text-white/38 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>Copyright {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
