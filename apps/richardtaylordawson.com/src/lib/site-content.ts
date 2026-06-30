import type { ComponentType, SVGProps } from "react";
import { Bot, Code2, Database, Mail, Sparkles } from "lucide-react";
import { SiEpicgames } from "react-icons/si";
import { TbDeviceNintendo } from "react-icons/tb";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export const aboutCopy = [
  "I’m a software engineer focused on building accessible, polished user interfaces. I take pride in being thoughtful and meticulous, with a sharp eye for the small details that make software feel considered.",
  "A lot of my strength is in piecing together the real user story from requirements, stakeholder context, and rough edges, then turning that into something clearer and more useful than what was first imagined.",
  "Currently, I work at AudioEye, where I maintain and build internal websites and apps across marketing flows, forms, headless CMS integrations, sales quoting software, and the infrastructure around those systems. I also help manage pull requests, own new project work, and keep the apps moving in the right direction.",
  "I’ve worked across in-office, hybrid, and fully remote teams, from a larger company like Clearlink to a small startup like Calldrip. That experience has ranged from end-to-end product work with CRUD applications and databases to the marketing and sales software that helps generate leads and enables teams to sell the product.",
  "Outside of work, you can usually find me with my wife and kids, playing golf, or watching good sports.",
];

export const projects = [
  {
    title: "Gaming Trivia",
    tag: "Interactive game",
    year: "2019",
    text: "A retro gaming trivia experience built with NES.css and an open trivia API for a fresh set of questions each round.",
    href: "https://gaming-trivia.richardtaylordawson.com",
    image: "https://gaming-trivia.richardtaylordawson.com/images/social-share.png",
    cta: "Play gaming trivia",
  },
  {
    title: "Calculator",
    tag: "Web calculator",
    year: "2018",
    text: "A focused calculator built with Bootstrap, HTML, and ES6 modules, with a set of switchable Bootswatch themes.",
    href: "https://calculator.richardtaylordawson.com",
    image: "https://calculator.richardtaylordawson.com/images/social-share.png",
    cta: "Open calculator",
  },
];

export const businessSites = [
  {
    title: "Simply Rooted Spa",
    tag: "Business website",
    text: "A live small-business site for services, appointment booking, gift cards, and current spa information.",
    href: "https://www.simplyrootedspa.com",
    image: "https://www.simplyrootedspa.com/images/social-share.png",
    cta: "Visit site",
  },
  {
    title: "Balanced Tax Solutions",
    tag: "Business website",
    text: "A live site that gives customers a clear path to service details, tax information, and appointment booking.",
    href: "https://www.balancedtaxsolutions.com",
    image: "https://www.balancedtaxsolutions.com/images/social-share.png",
    cta: "Visit site",
  },
];

export const experience = [
  {
    company: "AudioEye",
    span: "May 2023 to present",
    logo: "/images/logos/audio.png",
    slug: "audioeye",
    siteHref: "https://www.audioeye.com/",
    detailHref: "/experience/audioeye",
    summary:
      "Internal marketing systems, headless CMS integrations, forms, quoting flows, accessibility work, and project ownership across product-adjacent web properties.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Vercel",
      "Storyblok",
      "HubSpot",
      "Internal Apps",
      "Agentic Workflows",
      "AI Automation",
      "Forms",
      "Sales Quoting",
      "Accessibility",
    ],
    roles: [
      {
        title: "Staff Software Engineer - Marketing",
        span: "Sep 2024 to present",
      },
      {
        title: "Senior Software Engineer - Marketing",
        span: "May 2023 to Sep 2024",
      },
    ],
  },
  {
    company: "Clearlink",
    span: "Jan 2019 to May 2023",
    logo: "/images/logos/clearlink.jpeg",
    slug: "clearlink",
    siteHref: "https://www.clearlink.com/",
    detailHref: "/experience/clearlink",
    summary:
      "Front-end development for marketing and sales experiences, with a focus on lead generation, campaign pages, reusable UI, and conversion-minded interfaces.",
    technologies: [
      "React",
      "Handlebars",
      "Gatsby",
      "Storybook",
      "Contentful",
      "Lead Generation",
      "Analytics",
      "Netlify",
      "Gatsby Cloud",
    ],
    roles: [
      {
        title: "Senior Front End Developer",
        span: "Dec 2019 to May 2023",
      },
      {
        title: "Front End Developer",
        span: "Jan 2019 to Dec 2019",
      },
    ],
  },
  {
    company: "Calldrip",
    span: "Jun 2015 to Jan 2019",
    logo: "/images/logos/calldrip.png",
    slug: "calldrip",
    siteHref: "https://www.calldrip.com/",
    detailHref: "/experience/calldrip",
    summary:
      "Full-stack product work across customer-facing features, CRUD workflows, database-backed tools, and the early product systems of a growing startup.",
    technologies: [
      "Full Stack",
      "Product UI",
      "CRUD apps",
      "Databases",
      "APIs",
      "Twilio",
      "PHP",
      "SQL",
    ],
    roles: [
      {
        title: "Full Stack Developer",
        span: "Jul 2016 to Jan 2019",
      },
      {
        title: "Helpdesk Technician",
        span: "Jun 2015 to Jun 2016",
      },
    ],
  },
];

export type ExperienceItem = (typeof experience)[number];

export function getExperienceBySlug(slug: string) {
  return experience.find((item) => item.slug === slug);
}

export const stack = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind CSS",
  "AI product UX",
  "Accessibility",
  "Performance",
  "Design systems",
];

export const setupSections = [
  {
    title: "Displays",
    items: ["Dell 27-inch Monitors x2"],
  },
  {
    title: "Input",
    items: ["Logitech MX Master 3S", "Logitech MX Mechanical Keys", "Logitech MX Palm Rest"],
  },
  {
    title: "Audio",
    items: ["AirPods Max", "HomePod"],
  },
  {
    title: "Camera",
    items: ["Logitech StreamCam"],
  },
  {
    title: "Compute",
    items: ["MacBook Pro", "Mac Mini"],
  },
  {
    title: "Desk",
    items: [
      "Custom Maple Butcher Block Countertop",
      "Custom Maple Desk Shelf",
      "“Fully” Mechanical Standing Desk Legs",
    ],
  },
] as const;

export const softwareSections = [
  {
    title: "AI",
    items: ["Codex", "Cursor"],
  },
  {
    title: "Build stack",
    items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Product standards",
    items: ["Accessibility", "Performance", "Design systems", "AI product UX"],
  },
  {
    title: "Platform",
    items: ["Vercel", "Clerk", "Supabase", "Resend"],
  },
] as const;

export const elsewhere = [
  {
    icon: Mail,
    label: "Email",
    value: "richard.taylor.dawson@gmail.com",
    href: "mailto:richard.taylor.dawson@gmail.com",
  },
  {
    icon: SiEpicgames,
    label: "Rocket League",
    value: "LilWizzie on Epic",
    href: "https://rocketleague.tracker.network/rocket-league/profile/epic/LilWizzie/overview",
  },
  {
    icon: TbDeviceNintendo,
    label: "Nintendo",
    value: "LilWizzie",
  },
] satisfies {
  icon: IconComponent;
  label: string;
  value: string;
  href?: string;
}[];
