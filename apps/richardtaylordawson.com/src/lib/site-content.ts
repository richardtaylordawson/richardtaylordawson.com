import type { ComponentType, SVGProps } from "react";
import { Mail } from "lucide-react";
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

export const education = [
  {
    degreeType: "Bachelor’s Degree",
    field: "Computer Science",
    school: "Weber State University",
    year: "2017",
    href: "/documents/bachelors-degree-computer-science.pdf",
    cta: "View degree",
  },
  {
    degreeType: "Associate’s Degree",
    field: "Computer Science",
    school: "Weber State University",
    year: "2017",
    href: "/documents/associates-degree-computer-science.pdf",
    cta: "View degree",
  },
] as const;

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
  {
    title: "PWA Shields",
    tag: "Badge Generator",
    year: "2019",
    text: "A small tool for creating custom PWA badges that make app READMEs feel more personal and polished.",
    href: "https://pwa-shields.richardtaylordawson.com",
    image: "https://pwa-shields.richardtaylordawson.com/images/social-share.png",
    cta: "Create PWA shields",
  },
  {
    title: "Snake",
    tag: "Browser game",
    year: "2018",
    text: "A browser-based take on Snake built around simple controls, fast feedback, and a lightweight arcade loop.",
    href: "https://snake.richardtaylordawson.com",
    image: "https://snake.richardtaylordawson.com/images/social-share.png",
    cta: "Play snake",
  },
  {
    title: "Giphy Search",
    tag: "Search app",
    year: "2021",
    text: "A simple Create React App project for searching Giphy's open API and browsing animated results.",
    href: "https://giphy-search.richardtaylordawson.com",
    image: "https://giphy-search.richardtaylordawson.com/images/social-share.png",
    cta: "Search Giphy",
  },
  {
    title: "Easy as Pie UI",
    tag: "Component library",
    year: "2020",
    text: "A themeable React component library exploring reusable layout primitives, styled UI pieces, and flexible site composition.",
    href: "https://easy-as-pie-ui.richardtaylordawson.com",
    image: "https://easy-as-pie-ui.richardtaylordawson.com/images/social-share.png",
    cta: "View Easy as Pie UI",
  },
  {
    title: "Bruner Dynamics",
    tag: "Marketing site",
    year: "2020",
    text: "A Gatsby and React demo site built with strong visual hierarchy, clear package messaging, and a custom UI system.",
    href: "https://bruner-dynamics.richardtaylordawson.com",
    image: "https://bruner-dynamics.richardtaylordawson.com/images/social-share.png",
    cta: "Visit Bruner Dynamics",
  },
  {
    title: "Button Creator",
    tag: "Design tool",
    year: "2021",
    text: "A real-time button styling tool for adjusting visual details and generating CSS that can be copied into a project.",
    href: "https://button-creator.richardtaylordawson.com",
    image: "https://button-creator.richardtaylordawson.com/images/social-share.png",
    cta: "Create a button",
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

export type ExperienceProject = {
  title: string;
  eyebrow: string;
  description: string;
  ownership: string;
  impact: string;
  technologies: string[];
  confidentialityNote?: string;
  href?: string;
  cta?: string;
};

export type ExperienceDetail = {
  overview: string[];
  scopeHighlights: string[];
  ownershipHighlights: string[];
  impactHighlights: string[];
  constraintHighlights: string[];
  projects: ExperienceProject[];
  visualNotes?: {
    title: string;
    description: string;
    href?: string;
    cta?: string;
  }[];
};

export type ExperienceRole = {
  title: string;
  span: string;
  note?: string;
};

export type ExperienceItem = {
  company: string;
  span: string;
  logo: string;
  slug: string;
  siteHref: string;
  detailHref: string;
  summary: string;
  technologies: string[];
  roles: ExperienceRole[];
  detail?: ExperienceDetail;
};

export const experience: ExperienceItem[] = [
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
        note: "A continuation of the same cross-functional platform ownership, with the title reflecting the scope and impact already in motion.",
      },
      {
        title: "Senior Software Engineer - Marketing",
        span: "May 2023 to Sep 2024",
      },
    ],
    detail: {
      overview: [
        "At AudioEye, I own much of the engineering surface area behind the company's marketing, lead generation, sales, and revenue operations. That work spans public web properties, CMS architecture, sales quoting software, CRM workflows, and internal tooling that helps non-engineering teams move faster.",
        "My role sits at the intersection of engineering, demand generation, design, sales, and operations. The job is not just to ship interfaces, but to turn ambiguous business needs into durable systems that support accessibility, content velocity, and revenue workflows.",
      ],
      scopeHighlights: [
        "Primary engineering owner for marketing and revenue-adjacent web systems.",
        "Public website, CMS, design system, forms, quoting software, CRM workflows, and related internal tools.",
        "Cross-functional partner to demand generation, design, sales, revenue operations, and content stakeholders.",
        "Effectively a one-person engineering team for this surface area, balancing speed, independence, maintainability, and stakeholder alignment.",
      ],
      ownershipHighlights: [
        "Translated ambiguous business and operational needs into practical technical plans.",
        "Owned implementation across frontend, CMS modeling, platform architecture, deployment workflows, and internal integrations.",
        "Kept accessibility and editor experience central while modernizing the underlying platform.",
        "Protected confidential workflows by describing internal systems at a high level while still making the engineering scope clear.",
      ],
      impactHighlights: [
        "Modernized the public web platform and content operations stack.",
        "Improved editor quality of life and gave content teams more control without requiring engineering support for every change.",
        "Created reusable foundations for scanner experiences across public and partner-facing surfaces.",
        "Used AI-assisted internal tooling to speed up operational workflows in systems teams already use.",
      ],
      constraintHighlights: [
        "Maintained momentum across marketing, sales, CMS, CRM, and internal tooling needs with a very small engineering footprint.",
        "Balanced public-facing polish with internal workflow requirements and confidentiality boundaries.",
        "Built around third-party platform limitations when native CMS or integration behavior did not cover the team's real workflows.",
      ],
      projects: [
        {
          title: "CMS Migration and Web Platform Rebuild",
          eyebrow: "Platform modernization",
          description:
            "Migrated the marketing site from a Gatsby and Prismic stack to a Next.js, Storyblok, Turborepo, and Vercel platform. The migration also created room to refresh the brand and design system, improve deployment workflows, and give editors a more flexible CMS model.",
          ownership:
            "Owned the engineering path across the application architecture, CMS modeling, shared UI package extraction, Vercel deployment model, and stakeholder coordination with demand generation and design.",
          impact:
            "The new foundation improved maintainability, gave editors better day-to-day quality of life, and helped content operations move faster without sacrificing engineering control.",
          technologies: [
            "Next.js",
            "Storyblok",
            "Turborepo",
            "Vercel",
            "React",
            "TypeScript",
            "Design Systems",
          ],
          href: "https://www.audioeye.com/bloks/cms-migration-case-study/",
          cta: "Read the public case study",
        },
        {
          title: "Custom MCP Servers",
          eyebrow: "AI-assisted operations",
          description:
            "Built custom MCP servers for internal HubSpot and Storyblok workflows before first-party options were available. Even after first-party servers emerged, the custom HubSpot work remained useful because the team's account manager and contract workflows needed deeper functionality.",
          ownership:
            "Designed and implemented the bridge between AI-assisted workflows and the real systems used by marketing, sales, and operations teams.",
          impact:
            "Helped internal teams use AI against practical business workflows while keeping system-specific behavior accurate and controlled.",
          technologies: [
            "MCP",
            "HubSpot",
            "Storyblok",
            "AI Automation",
            "Internal Tools",
          ],
          confidentialityNote:
            "Specific account, contract, and CRM workflows are intentionally described at a high level.",
        },
        {
          title: "Partner Scanner",
          eyebrow: "Reusable product surface",
          description:
            "Helped create a white-label partner scanner by extracting scanner functionality into a shared package that powers both AudioEye's public website scanner and a separate partner-facing scanner application.",
          ownership:
            "Separated scanner logic from a single branded implementation and shaped it into a reusable package that could support multiple scanner experiences.",
          impact:
            "Reduced duplication and created a more durable scanner foundation for public marketing and partner-facing use cases.",
          technologies: [
            "React",
            "TypeScript",
            "Shared Packages",
            "Accessibility",
            "Lead Generation",
          ],
        },
        {
          title: "AI Translation Layer",
          eyebrow: "Localized content operations",
          description:
            "Built a custom AI-powered translation layer inside Storyblok so the team could publish localized pages in minutes without adding translation headcount. The system handles complex CMS structures rather than only translating simple text fields.",
          ownership:
            "Designed the translation workflow around the actual Storyblok page model, including localized page text, global component swaps, and preservation of editor-friendly CMS patterns.",
          impact:
            "Made localization faster and more practical for content teams while working around Storyblok's native translation limitations.",
          technologies: [
            "Storyblok",
            "AI Automation",
            "Localization",
            "CMS Architecture",
            "TypeScript",
          ],
        },
      ],
      visualNotes: [
        {
          title: "Public Case Study",
          description:
            "The CMS migration has a public AudioEye case study that is safe to link and gives outside context for the platform work.",
          href: "https://www.audioeye.com/bloks/cms-migration-case-study/",
          cta: "Open case study",
        },
        {
          title: "Internal Systems",
          description:
            "Screenshots of sales, CRM, quoting, MCP, and contract-related systems are omitted or described at a high level to avoid exposing confidential workflows.",
        },
      ],
    },
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
