import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { Mail, Wrench } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiEpicgames } from "react-icons/si";

import type { IconComponent } from "@/lib/site-content";

export const socialLinks = [
  {
    href: "https://www.github.com/richardtaylordawson",
    label: "GitHub profile",
    icon: FaGithub,
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/taylor-dawson-482927123/",
    label: "LinkedIn profile",
    icon: FaLinkedinIn,
    external: true,
  },
  {
    href: "mailto:richard.taylor.dawson@gmail.com",
    label: "Email Richard Taylor Dawson",
    icon: Mail,
    external: true,
  },
  {
    href: "/tools",
    label: "View tools page",
    icon: Wrench,
    internal: true,
  },
  {
    href: "https://rocketleague.tracker.network/rocket-league/profile/epic/LilWizzie/overview",
    label: "Rocket League profile",
    icon: SiEpicgames,
    external: true,
  },
] satisfies {
  href: string;
  label: string;
  icon: IconComponent;
  internal?: boolean;
  external?: boolean;
}[];

type SocialLinksProps = {
} & ComponentPropsWithoutRef<"div">;

export function SocialLinks({ className, ...props }: SocialLinksProps) {
  return (
    <div className={className} {...props}>
      {socialLinks.map((link) => (
        <SocialLink {...link} key={link.href} />
      ))}
    </div>
  );
}

function SocialLink({
  href,
  label,
  icon: Icon,
  internal,
  external,
}: (typeof socialLinks)[number]) {
  const accessibleText = external ? `${label} (opens in a new tab)` : label;
  const content = (
    <>
      <Icon aria-hidden="true" focusable="false" />
      <span className="sr-only">{accessibleText}</span>
    </>
  );

  if (internal) {
    return (
      <Link href={href} className="icon-link">
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className="icon-link"
      target="_blank"
      rel="noreferrer"
    >
      {content}
    </a>
  );
}
