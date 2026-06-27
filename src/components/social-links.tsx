import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { Mail, Wrench } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiEpicgames } from "react-icons/si";

import type { IconComponent } from "@/lib/site-content";

export const socialLinks = [
  {
    href: "https://www.github.com/richardtaylordawson",
    label: "GitHub",
    icon: FaGithub,
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/taylor-dawson-482927123/",
    label: "LinkedIn",
    icon: FaLinkedinIn,
    external: true,
  },
  {
    href: "mailto:richard.taylor.dawson@gmail.com",
    label: "Email",
    icon: Mail,
    external: true,
  },
  {
    href: "/tools",
    label: "Tools",
    icon: Wrench,
    internal: true,
  },
  {
    href: "https://rocketleague.tracker.network/rocket-league/profile/epic/LilWizzie/overview",
    label: "Rocket League",
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
      aria-label={external ? `${label} (opens in a new tab)` : label}
      target="_blank"
      rel="noreferrer"
    >
      {content}
    </a>
  );
}
