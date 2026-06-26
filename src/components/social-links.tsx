import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { Wrench } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiApplemusic, SiEpicgames } from "react-icons/si";

import type { IconComponent } from "@/lib/site-content";

export const socialLinks = [
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
      aria-label={label}
      target="_blank"
      rel="noreferrer"
    >
      {content}
    </a>
  );
}
