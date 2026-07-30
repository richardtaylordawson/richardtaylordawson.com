import type { ComponentType, SVGProps } from "react";
import { Mail } from "lucide-react";
import { SiEpicgames } from "react-icons/si";
import { TbDeviceNintendo } from "react-icons/tb";
import type { ProjectCardItem } from "@/components/project-card";

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
    title: "Yahtz",
    tag: "Dice game",
    year: "2026",
    text: "A polished web version of a classic dice game, built around quick rounds, clear scoring, and a smooth play flow.",
    href: "https://yahtz.richardtaylordawson.com",
    image: "https://yahtz.richardtaylordawson.com/images/social-share.png",
    cta: "Play Yahtz",
  },
  {
    title: "Dawson Dome",
    tag: "Family hub",
    year: "2026",
    text: "A personal family hub for leaderboards, stats, etc of various Dawson Family games",
    href: "https://dawson-dome.richardtaylordawson.com",
    image: "https://dawson-dome.richardtaylordawson.com/images/social-share.png",
    cta: "Open Dawson Dome",
  },
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
    title: "Apple Music Activity",
    tag: "Music app",
    year: "2019",
    text: "A personal Apple Music activity viewer for exploring recent listening history, artists, albums, and playback stats.",
    href: "https://apple-music-activity.richardtaylordawson.com",
    image:
      "https://apple-music-activity.richardtaylordawson.com/images/social-share.png",
    cta: "View Apple Music activity",
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
  {
    title: "Mahjong",
    tag: "Java exercise",
    text: "A Java object-oriented programming exercise for modeling Mahjong tiles without full game logic.",
    href: "https://github.com/richardtaylordawson/mahjong",
    cta: "View on GitHub",
  },
  {
    title: "Ping Pong Scorekeeper",
    tag: "iOS app",
    text: "An Objective-C iPhone scorekeeper for ping pong games with portrait and landscape layouts.",
    href: "https://github.com/richardtaylordawson/pingpong-scorekeeper",
    cta: "View on GitHub",
  },
  {
    title: "Coin",
    tag: "iOS app",
    text: "An Objective-C iPhone app for tracking and managing bills, backed by Heroku and Parse Server.",
    href: "https://github.com/richardtaylordawson/coin",
    cta: "View on GitHub",
  },
  {
    title: "Chat App",
    tag: "Chat app",
    text: "A chat application built with Pusher Chatkit, Firebase, and a custom front-end interface.",
    href: "https://github.com/richardtaylordawson/chat-app",
    cta: "View on GitHub",
  },
  {
    title: "Simple Todo",
    tag: "Productivity app",
    text: "A focused todo app built with React, Firebase, and Semantic UI for lightweight task management.",
    href: "https://github.com/richardtaylordawson/simple-todo",
    cta: "View on GitHub",
  },
  {
    title: "Chirp",
    tag: "API experiment",
    text: "An app experiment that combines the Twitter API and Google Natural Language API to analyze tweets.",
    href: "https://github.com/richardtaylordawson/chirp",
    cta: "View on GitHub",
  },
  {
    title: "Kaiju Battle Arena",
    tag: "Messaging game",
    text: "A Twilio-powered multiplayer messaging game where players battle their Kaiju in an arena.",
    href: "https://github.com/richardtaylordawson/kaiju-battle-arena",
    cta: "View on GitHub",
  },
  {
    title: "Coding Challenges",
    tag: "Practice archive",
    text: "A collection of coding challenges completed through school, Codewars, HackerRank, and similar practice sources.",
    href: "https://github.com/richardtaylordawson/coding-challenges",
    cta: "View on GitHub",
  },
] satisfies ProjectCardItem[];

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
  images?: {
    src: string;
    alt: string;
    caption: string;
    width: number;
    height: number;
  }[];
  comparisonGroups?: {
    title: string;
    description: string;
    items: {
      label: string;
      src: string;
      alt: string;
      caption: string;
      width: number;
      height: number;
    }[];
  }[];
  workSites?: string[];
  workSitesNote?: string;
  media?: {
    type: "video";
    src: string;
    label: string;
    contentType?: string;
  };
  confidentialityNote?: string;
  href?: string;
  hrefInMedia?: boolean;
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
      "Typescript",
      "Vercel",
      "Storyblok",
      "Hubspot",
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
        "Public website, CMS, design system, forms, quoting software, contract lifecycle workflows, learning content, Hubspot migrations, CRM workflows, and related internal tools.",
        "Cross-functional partner to demand generation, design, sales, revenue operations, content, learning, and contract operations stakeholders.",
        "Effectively a one-person engineering team for this surface area, balancing speed, independence, maintainability, and stakeholder alignment.",
      ],
      ownershipHighlights: [
        "Translated ambiguous business and operational needs into practical technical plans.",
        "Owned implementation across frontend, CMS modeling, platform architecture, deployment workflows, and internal integrations.",
        "Worked closely with revenue operations to connect internal CPQ output to Hubspot and Conga contract creation workflows.",
        "Modeled CMS-powered learning content around the components, quiz patterns, embedded media, and structured data needs of real course production.",
        "Partnered with strategy and design on multiple scanner rebuilds that balanced end-user accessibility results with high-intent demo and trial conversion paths.",
        "Wrote migration scripts that moved acquired BOIA website content between Hubspot instances as part of account consolidation and infrastructure cleanup.",
        "Kept accessibility and editor experience central while modernizing the underlying platform.",
        "Protected confidential workflows by describing internal systems at a high level while still making the engineering scope clear.",
      ],
      impactHighlights: [
        "Modernized the public web platform and content operations stack.",
        "Improved editor quality of life and gave content teams more control without requiring engineering support for every change.",
        "Helped reduce manual contract workflow handoffs by moving quote and contract data from internal systems into Hubspot and Conga.",
        "Helped turn accessibility education into a public, CMS-managed course experience with reusable foundations for ongoing content production.",
        "Improved the marketing scanner experience through multiple iterations focused on clearer results and stronger lead capture.",
        "Reduced platform overhead by helping consolidate BOIA content into AudioEye's Hubspot infrastructure.",
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
            "Typescript",
            "Design Systems",
          ],
          href: "https://www.audioeye.com/",
          hrefInMedia: true,
          cta: "Visit AudioEye",
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
            "Typescript",
          ],
        },
        {
          title: "AudioEye Learning",
          eyebrow: "CMS-powered course platform",
          description:
            "Built the headless CMS foundation for AudioEye Learning, a public course experience for accessibility education, laws, and related training content. The work moved LMS-style course production into the same CMS ecosystem as the broader web platform.",
          ownership:
            "Worked closely with content and design to model the components needed for course pages, in-course quiz questions, embedded video content, and structured schema for LLMs and search engines.",
          impact:
            "Gave content teams a reusable way to publish accessibility courses without a separate LMS implementation, while preserving the flexibility needed for rich course content and discoverability.",
          technologies: [
            "Storyblok",
            "Next.js",
            "React",
            "Typescript",
            "Structured Data",
            "CMS Architecture",
            "Accessibility",
          ],
          images: [
            {
              src: "/images/experience/audioeye/audioeye-learning-courses-index.png",
              alt: "AudioEye courses index page showing course cards, search, and filtering controls.",
              caption:
                "AudioEye Learning courses index, including course cards, search, filtering, and resource center navigation.",
              width: 1643,
              height: 2416,
            },
            {
              src: "/images/experience/audioeye/audioeye-learning-web-accessibility-101-course.png",
              alt: "AudioEye Web Accessibility 101 course overview page with chapter cards and course overview content.",
              caption:
                "Web Accessibility 101 course overview page, including course metadata, chapter cards, overview content, and CTA sections.",
              width: 1643,
              height: 3322,
            },
            {
              src: "/images/experience/audioeye/audioeye-learning-web-accessibility-101-chapter-1.png",
              alt: "AudioEye Web Accessibility 101 chapter one lesson page with video, quiz cards, statistics, and resources.",
              caption:
                "Web Accessibility 101 chapter lesson page, including embedded video, quiz interactions, content sections, FAQ, and resources.",
              width: 1643,
              height: 10977,
            },
          ],
          href: "https://www.audioeye.com/courses/",
          cta: "View courses",
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
            "Typescript",
            "Shared Packages",
            "Accessibility",
            "Lead Generation",
          ],
        },
        {
          title: "Custom MCP Servers",
          eyebrow: "AI-assisted operations",
          description:
            "Built custom MCP servers for internal Hubspot and Storyblok workflows before first-party options were available. Even after first-party servers emerged, the custom Hubspot work remained useful because the team's account manager and contract workflows needed deeper functionality.",
          ownership:
            "Designed and implemented the bridge between AI-assisted workflows and the real systems used by marketing, sales, and operations teams.",
          impact:
            "Helped internal teams use AI against practical business workflows while keeping system-specific behavior accurate and controlled.",
          technologies: [
            "MCP",
            "Hubspot",
            "Storyblok",
            "AI Automation",
            "Internal Tools",
          ],
        },
        {
          title: "Conga Contract Lifecycle",
          eyebrow: "Revenue operations workflow",
          description:
            "Built workflow support around Conga, a contract lifecycle management platform used to generate, route, execute, and manage contracts. The project connected AudioEye's internal CPQ system to the downstream systems revenue teams used to move a quote into a signable contract.",
          ownership:
            "Worked closely with revenue operations to define the process, move quote and contract data into Hubspot, and create the corresponding contract in Conga ready for signing.",
          impact:
            "Reduced manual handoffs between quoting, CRM, and contract systems while giving revenue teams a clearer path from configured quote to executable contract.",
          technologies: [
            "Conga",
            "Hubspot",
            "CPQ",
            "Contract Lifecycle Management",
            "Revenue Operations",
            "Internal Tools",
          ],
        },
        {
          title: "Marketing Scanner Rebuilds",
          eyebrow: "Lead generation product experience",
          description:
            "Helped rebuild AudioEye's marketing scanner into multiple new versions over time. Each iteration was aimed at giving end users better accessibility scan results while creating stronger paths for high-intent visitors to request a demo or start a trial.",
          ownership:
            "Worked closely with strategy and design through planning and implementation, translating conversion goals, result presentation, and scanner UX decisions into production experiences.",
          impact:
            "Improved a key marketing product surface by making scan results more useful to visitors and better connected to revenue-focused demo and trial forms.",
          technologies: [
            "React",
            "Typescript",
            "Lead Generation",
            "Forms",
            "Accessibility",
            "Product Strategy",
          ],
          comparisonGroups: [
            {
              title: "Scan progress states",
              description:
                "V1, V2, and V3 scanner progress screens shown side by side to make the iteration in loading, status, and modal treatment easier to compare.",
              items: [
                {
                  label: "V1 progress",
                  src: "/images/experience/audioeye/scanner/v1-progress.png",
                  alt: "Version one AudioEye scanner progress screen with a purple gradient panel and detecting issues progress bar.",
                  caption:
                    "V1 progress screen with a centered scanner state, gradient panel, and detecting issues progress bar.",
                  width: 2484,
                  height: 1536,
                },
                {
                  label: "V2 progress",
                  src: "/images/experience/audioeye/scanner/v2-progress.png",
                  alt: "Version two AudioEye scanner progress screen with a wide purple modal and WCAG test status list.",
                  caption:
                    "V2 progress screen with a wider modal layout, scan status text, and WCAG test steps.",
                  width: 2722,
                  height: 1496,
                },
                {
                  label: "V3 progress",
                  src: "/images/experience/audioeye/scanner/v3-progress.png",
                  alt: "Version three AudioEye scanner progress screen with a compact purple modal and updated scan status layout.",
                  caption:
                    "V3 progress screen with a more compact modal, cleaner hierarchy, and updated progress treatment.",
                  width: 2380,
                  height: 1488,
                },
              ],
            },
            {
              title: "Lead capture forms",
              description:
                "V2 and V3 lead capture form treatments shown together to compare messaging, visual weight, and conversion framing.",
              items: [
                {
                  label: "V2 form",
                  src: "/images/experience/audioeye/scanner/v2-form.png",
                  alt: "Version two AudioEye scanner lead capture form with split purple results messaging and form fields.",
                  caption:
                    "V2 form screen with a split layout, scan complete messaging, and lead capture fields.",
                  width: 2708,
                  height: 1420,
                },
                {
                  label: "V3 form",
                  src: "/images/experience/audioeye/scanner/v3-form.png",
                  alt: "Version three AudioEye scanner lead capture form with violation summary and form fields.",
                  caption:
                    "V3 form screen with clearer risk messaging, a preview image, and a simplified lead capture panel.",
                  width: 2368,
                  height: 1508,
                },
              ],
            },
            {
              title: "Results pages",
              description:
                "V1, V2, and V3 results experiences grouped together to compare how the scanner evolved from a long report into a more focused risk-and-solution presentation.",
              items: [
                {
                  label: "V1 results",
                  src: "/images/experience/audioeye/scanner/v1-results.png",
                  alt: "Version one AudioEye scanner results page with accessibility overview cards and long-form issue education.",
                  caption:
                    "V1 results page with a long-form accessibility overview, issue categories, and educational content.",
                  width: 2984,
                  height: 10074,
                },
                {
                  label: "V2 results",
                  src: "/images/experience/audioeye/scanner/v2-results.png",
                  alt: "Version two AudioEye scanner results page with issue summary cards, severity counts, and top issues.",
                  caption:
                    "V2 results page with status cards, issue severity, remediation framing, and conversion CTAs.",
                  width: 2984,
                  height: 3366,
                },
                {
                  label: "V3 results",
                  src: "/images/experience/audioeye/scanner/v3-results.png",
                  alt: "Version three AudioEye scanner results page with risk messaging, issue charts, and lawsuit-risk cards.",
                  caption:
                    "V3 results page with a more focused risk narrative, issue charts, solution framing, and persistent CTA.",
                  width: 2518,
                  height: 3198,
                },
              ],
            },
          ],
        },
        {
          title: "BOIA Migration",
          eyebrow: "Hubspot content migration",
          description:
            "Migrated BOIA.org, an acquired accessibility website that was running in a separate Hubspot instance, into AudioEye's own Hubspot infrastructure as part of account consolidation and cost reduction.",
          ownership:
            "Wrote migration scripts with the Hubspot SDK to read content from BOIA's Hubspot account and recreate it under AudioEye's Hubspot account, preserving the site content while moving it into the shared infrastructure.",
          impact:
            "Helped reduce operating costs and simplify platform ownership by bringing acquired website content under a single AudioEye-managed Hubspot account.",
          technologies: [
            "Hubspot",
            "Hubspot SDK",
            "Migration Scripts",
            "Content Migration",
            "CMS",
            "Platform Operations",
          ],
          href: "https://www.boia.org/",
          cta: "View BOIA",
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
    detail: {
      overview: [
        "At Clearlink, I worked in the Performance Marketing department, building the affiliate and brand-specific experiences that sat closer to revenue generation than the broader consumer marketing properties. Consumer Marketing focused on larger generic domains and top-level funnels, while Performance Marketing supported third-party affiliate sites for well-known brands like AT&T, CenturyLink, and Verizon.",
        "The work centered on fast-moving marketing and sales experiences where content flexibility, reusable UI, site performance, and lead generation all mattered. Over time I moved from front-end implementation into project ownership, especially around the next generation content platform for Performance Marketing sites.",
      ],
      scopeHighlights: [
        "Performance Marketing engineering across third-party affiliate and brand-specific marketing sites.",
        "Lead-generation pages, campaign surfaces, reusable UI systems, CMS-backed content workflows, and marketer-facing tooling.",
        "Cross-functional work with marketers and stakeholders who needed to launch and edit content without waiting on developer support.",
      ],
      ownershipHighlights: [
        "Led CMSv3 without close oversight and became the subject matter expert for the platform.",
        "Designed front-end architecture and content workflows around marketer independence and reusable implementation patterns.",
        "Balanced production site needs with a longer-term platform rebuild that replaced the existing CMS workflow.",
      ],
      impactHighlights: [
        "Helped give marketers the ability to build, create, and edit site content without developer involvement for every change.",
        "Created a more modern platform foundation using React, Gatsby, Contentful, Storybook, Lerna, and Gatsby Cloud.",
        "Supported conversion-minded Performance Marketing sites for major telecom and service brands.",
      ],
      constraintHighlights: [
        "Worked across brand-driven affiliate sites where content velocity and lead-generation performance were central.",
        "Built inside a department split between broad consumer funnels and more targeted Performance Marketing properties.",
        "Had to replace existing content workflows while keeping marketing teams moving.",
      ],
      projects: [
        {
          title: "CMSv3",
          eyebrow: "Content platform rebuild",
          description:
            "Led the buildout of a new content management platform for Clearlink's Performance Marketing sites. The platform replaced the existing CMS approach and gave marketers a way to create, build, and edit content without needing a developer for routine site updates.",
          ownership:
            "Took over the project from Clearlink's Marketing Technology team after the original effort had taken too long, completed the remaining requirements, and drove it over the finish line in less than a month.",
          impact:
            "Improved marketer autonomy and created a more flexible foundation for content-driven lead-generation sites.",
          technologies: [
            "Contentful",
            "React",
            "Gatsby",
            "Storybook",
            "Lerna",
            "Gatsby Cloud",
          ],
        },
        {
          title: "Performance Marketing Sites",
          eyebrow: "Lead generation",
          description:
            "Built and maintained marketing experiences for third-party affiliate sites connected to major brands, including telecom and internet providers. Across the Performance Marketing portfolio, I built 246 bespoke pages and 126 reusable components across 34 different websites.",
          ownership:
            "Implemented front-end experiences, reusable UI patterns, and content-backed pages for campaign and affiliate workflows across a large group of brand-specific sites.",
          impact:
            "Supported revenue-focused marketing funnels at scale, where page quality, content speed, and conversion paths were core to the business.",
          technologies: [
            "React",
            "Handlebars",
            "Analytics",
            "Lead Generation",
            "Contentful",
          ],
          workSites: [
            "aetnamedicaredirect.com",
            "att.com/clk",
            "attexperts.com",
            "attsavings.com",
            "business.centurylink.com",
            "business.providers.com",
            "centurylinkquote.com",
            "choosehomsecurity.com",
            "directvplans.com",
            "dish.com/availability",
            "dishlatino.com",
            "frontierbundles.com",
            "frontierbusiness.com",
            "frontierinternetservice.com",
            "frontpointsecurity.com",
            "getcenturylink.com",
            "getwindstream.com",
            "go.frontier.com",
            "go.verizon.com",
            "medicarehealthplans.com",
            "movearoo.com",
            "providers.com",
            "usdirect.com",
            "usdish.com",
            "usmedicareplans.com",
            "verizonbusiness.com",
            "verizonsmallbusiness.com",
            "verizonspecials.com",
            "viasat.com",
            "vivintsource.com",
            "yourlocalsecurity.com",
          ],
          workSitesNote:
            "These are examples of sites and routes touched during that work. Some domains or paths may no longer be active, current, or owned by the same organization.",
        },
        {
          title: "Mega Forms",
          eyebrow: "Dynamic lead forms",
          description:
            "Owned a major lead-generation form project with highly bespoke designs, phone number CTAs, large directional arrows, and a step-by-step package walkthrough for collecting more information from visitors.",
          ownership:
            "Built branching form behavior where the next question and total question count could change based on a visitor's previous answers, then integrated that experience with Eloqua despite the constraints of the form CMS.",
          impact:
            "Turned a complex one-off form system into a core Cuttlefish component that could be reused across Performance Marketing sites.",
          media: {
            type: "video",
            src: "/videos/clearlink/mega-forms-functionality.mp4",
            label: "Mega Forms functionality demo",
            contentType: "video/mp4",
          },
          technologies: [
            "Handlebars",
            "JavaScript",
            "Eloqua",
            "Lead Generation",
            "Forms",
            "Cuttlefish",
          ],
        },
        {
          title: "Frontpoint Security",
          eyebrow: "New brand site",
          description:
            "Built Frontpoint Security as my first new brand site at Clearlink, starting with a fresh codebase instead of inheriting an existing site structure.",
          ownership:
            "Took the initiative to define the baseline design system, color approach, and code organization so the team had a clean foundation for building durable components.",
          impact:
            "The site became the team's gold standard for a clean, maintainable Performance Marketing codebase and laid the groundwork for the more advanced component page work that followed.",
          technologies: [
            "Handlebars",
            "Design Systems",
            "Component Architecture",
            "Lead Generation",
            "Performance Marketing",
          ],
          images: [
            {
              src: "/images/experience/clearlink/frontpoint-door-window-sensors-desktop.png",
              alt: "Desktop Frontpoint Security article page titled Your Guide to Door Alarms and Window Sensors.",
              caption:
                "Frontpoint Security article page for a door and window sensor guide, including product content and quote CTA sections.",
              width: 2880,
              height: 12842,
            },
            {
              src: "/images/experience/clearlink/frontpoint-wireless-outdoor-camera-desktop.png",
              alt: "Desktop Frontpoint Security article page titled Your Guide to Wireless Outdoor Camera Systems.",
              caption:
                "Frontpoint Security article page for a wireless outdoor camera guide, including comparison content and quote CTA sections.",
              width: 1920,
              height: 7001,
            },
            {
              src: "/images/experience/clearlink/frontpoint-wireless-indoor-camera-desktop.png",
              alt: "Desktop Frontpoint Security article page titled A Complete Guide to Wireless Indoor Security Cameras.",
              caption:
                "Frontpoint Security article page for a wireless indoor security camera guide, including feature content and quote CTA sections.",
              width: 2880,
              height: 14166,
            },
          ],
        },
        {
          title: "Component Pages",
          eyebrow: "Reusable content pages",
          description:
            "Reworked Clearlink's component page concept into a better organized reference and build tool for teams working across Performance Marketing sites.",
          ownership:
            "Added clear component groupings, headings, dividers, search, and filters that removed irrelevant components from the page. I also built a lightweight page builder that opened in a modal, let users choose the components they needed, and copied the generated Handlebars page code to the clipboard.",
          impact:
            "Turned a static component showcase into a practical CMS-lite workflow: teams could start from generated Handlebars, then swap in copy from docs or Figma instead of assembling page scaffolding by hand. It became the gold standard component page on the team.",
          technologies: [
            "Handlebars",
            "JavaScript",
            "Reusable UI",
            "Search and Filtering",
            "Clipboard Workflows",
            "Performance Marketing",
          ],
        },
        {
          title: "Cuttlefish",
          eyebrow: "Internal component package",
          description:
            "Contributed to Cuttlefish, an internal Handlebars component package that gave Performance Marketing teams shared layout components and reusable functionality for building higher-level components across specific sites.",
          ownership:
            "Built five core components for the package, including two related to Mega Forms and three related to data tables.",
          impact:
            "Gave teams a more consistent foundation for assembling site-specific experiences without rebuilding the same layout and behavior patterns from scratch.",
          technologies: [
            "Handlebars",
            "Component Systems",
            "Reusable UI",
          ],
          images: [
            {
              src: "/images/experience/clearlink/cuttlefish-data-table-desktop.png",
              alt: "Desktop view of a Cuttlefish data table component comparing DIRECTV for Business channel packages.",
              caption:
                "Desktop data table layout with sticky channel columns and package comparisons.",
              width: 2008,
              height: 615,
            },
            {
              src: "/images/experience/clearlink/cuttlefish-data-table-mobile.png",
              alt: "Mobile view of a Cuttlefish data table component with horizontally scrollable package columns.",
              caption:
                "Mobile data table layout preserving comparison behavior on narrow screens.",
              width: 354,
              height: 645,
            },
          ],
          media: {
            type: "video",
            src: "/videos/clearlink/cuttlefish-data-table-functionality.mp4",
            label: "Cuttlefish data table functionality demo",
            contentType: "video/mp4",
          },
        },
      ],
    },
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
    detail: {
      overview: [
        "Calldrip was built around faster lead response: helping businesses contact interested customers while intent was still fresh. The strongest product fit was car dealerships, where responding quickly could realistically pay for the software with even one additional sale per month.",
        "I started on helpdesk work and moved into full-stack development, which gave me a practical view of customer problems before I was building the product features that solved them. The engineering work spanned database-backed workflows, APIs, customer-facing UI, and integrations with phone and billing systems.",
      ],
      scopeHighlights: [
        "Full-stack product development for lead response, call tracking, reporting, agent management, responsive app UI, and support workflows.",
        "Customer-facing tools, admin workflows, reporting dashboards, internal support tools, database changes, API integrations, and production support in a startup environment.",
        "Direct exposure to customer needs through helpdesk work before moving into a developer role, including building tools for the support team's own account setup process.",
      ],
      ownershipHighlights: [
        "Worked with two other engineers to rebuild inbound and dynamic number tracking, a core Calldrip product area.",
        "Owned multiple reporting projects end to end, from data discovery and SQL queries to UI design, front-end implementation, and email report delivery.",
        "Rebuilt the agent management experience across database naming, back-end image handling, front-end upload and crop flows, and profile image display across the app.",
        "Helped make the web application usable across screen sizes by rewriting UI flows that previously only worked well above a fixed desktop breakpoint.",
        "Built a support portal from scratch while on the helpdesk team, using the same platform technologies and database patterns as the main Calldrip app.",
        "Helped redesign the database structure, migrate existing data, and rebuild the front-end configuration experience.",
        "Integrated number search and purchasing flows with Twilio and Chargify.",
      ],
      impactHighlights: [
        "Improved a core product workflow used to configure tracking numbers and measure call traffic.",
        "Gave accounts and dealer groups clearer visibility into lead volume, response times, call activity, source performance, and organization-level account metrics.",
        "Made agent records easier to manage and gave callable users clearer identity across the product with profile images.",
        "Improved product usability for smaller screens by making the app flow and collapse more predictably across responsive breakpoints.",
        "Helped the support team track new account setup status and avoid missed steps in a recurring operational workflow.",
        "Created a cleaner customer setup experience with a guided modal walkthrough.",
        "Helped modernize the infrastructure behind inbound tracking and dynamic website number tracking.",
      ],
      constraintHighlights: [
        "Built in a startup context where engineers worked close to customer problems and product needs.",
        "Reworked existing product data while preserving historical records through migration scripts.",
        "Connected product UX to third-party phone and billing APIs that needed to behave reliably inside customer workflows.",
      ],
      projects: [
        {
          title: "Inbound and Dynamic Number Tracking",
          eyebrow: "Core product rebuild",
          description:
            "Rebuilt a core Calldrip product area that let customers purchase and configure inbound tracking numbers. Those numbers could measure call traffic and dynamically track customers on a website.",
          ownership:
            "Worked with two other engineers on the rebuild, including database restructuring, migration scripts for existing data, and a new front-end setup flow.",
          impact:
            "Made a critical tracking workflow more durable and easier for customers to configure while preserving existing customer data.",
          technologies: [
            "Twilio",
            "Chargify",
            "PHP",
            "SQL",
            "APIs",
            "Database Migrations",
          ],
          images: [
            {
              src: "/images/experience/calldrip/buy-numbers-desktop.png",
              alt: "Calldrip Add Numbers modal with options for Phone Number, Dynamic Numbers, and Outbound Tracking.",
              caption:
                "Add Numbers walkthrough for choosing the type of tracking number to configure.",
              width: 1917,
              height: 873,
            },
          ],
        },
        {
          title: "Reporting",
          eyebrow: "Analytics and dashboards",
          description:
            "Built multiple reporting tools for account and organization-level performance. The work started with a dashboard for lead stats, response times, call volume, date ranges, and lead source filters, then grew into KPI-specific sub reports and email reports for dealer groups.",
          ownership:
            "Owned the reporting work as a solo project, including figuring out what data could be shown, writing the SQL queries, implementing the back end and front end, and designing the layout and visual presentation.",
          impact:
            "Helped individual accounts and larger organizations understand how their dealers were performing across lead response, call activity, lead sources, and account-level metrics.",
          technologies: [
            "Reporting",
            "SQL",
            "Dashboards",
            "Email Reports",
            "Product UI",
            "Analytics",
          ],
          images: [
            {
              src: "/images/experience/calldrip/dashboard-desktop.png",
              alt: "Calldrip dashboard showing call totals, attempted rate, connection rate, response time, call duration, and several charts.",
              caption:
                "Dashboard view for account-level call activity and response performance.",
              width: 1917,
              height: 872,
            },
            {
              src: "/images/experience/calldrip/report-desktop.png",
              alt: "Calldrip Lead Time report with a leads-by-hour bar chart, total leads, busiest time of day, and a detailed agent table.",
              caption:
                "Lead Time report with KPI cards, charts, and agent-level breakdowns.",
              width: 1918,
              height: 873,
            },
            {
              src: "/images/experience/calldrip/report-filters.png",
              alt: "Calldrip report filters modal over the Lead Time report with source search and selectable lead sources.",
              caption:
                "Filter modal for narrowing reports by call type, sources, date range, and related criteria.",
              width: 1917,
              height: 875,
            },
          ],
        },
        {
          title: "Agents Rebuild",
          eyebrow: "User management",
          description:
            "Rebuilt and redesigned Calldrip's agent experience. Agents were the system users who could be called, so the work touched a core product concept rather than only a profile settings screen.",
          ownership:
            "Cleaned up the database with better naming conventions, rebuilt the UI, and implemented the full image workflow for uploading, cropping, storing, and redisplaying profile pictures across the app.",
          impact:
            "Created a cleaner agent management experience and gave callable users a more recognizable identity wherever their profile image appeared in the product.",
          technologies: [
            "Product UI",
            "Image Uploads",
            "Image Cropping",
            "PHP",
            "SQL",
            "Databases",
          ],
          images: [
            {
              src: "/images/experience/calldrip/agents-desktop.png",
              alt: "Calldrip Agents list showing agent names, availability, phone numbers, email addresses, and edit or delete actions.",
              caption:
                "Rebuilt agents table with searchable records and clear profile actions.",
              width: 1918,
              height: 872,
            },
            {
              src: "/images/experience/calldrip/agent-profile-desktop.png",
              alt: "Calldrip agent profile form for Dustin with profile image, name, phone number, email, text message, timezone, and tabs.",
              caption:
                "Agent profile editor with profile image display and account settings.",
              width: 1917,
              height: 860,
            },
            {
              src: "/images/experience/calldrip/add-agent.png",
              alt: "Calldrip Add Agent modal with an agent setup card and support link over the agents table.",
              caption:
                "Add Agent modal entry point for creating callable users in the system.",
              width: 1915,
              height: 874,
            },
          ],
        },
        {
          title: "Responsive Web App Rebuild",
          eyebrow: "Mobile-friendly product UI",
          description:
            "Helped make the Calldrip web app more mobile friendly after joining a product that only worked well at a certain desktop screen size and above.",
          ownership:
            "Rewrote parts of the UI so layouts flowed better and collapsed cleanly across screen sizes, preserving access to product workflows no matter the viewport.",
          impact:
            "Made the application more usable beyond a narrow desktop layout and improved the experience for users working from smaller screens.",
          technologies: [
            "Responsive UI",
            "Product UI",
            "Bootstrap",
          ],
        },
        {
          title: "Support Portal",
          eyebrow: "Internal support tooling",
          description:
            "Built an internal support portal while working as a helpdesk technician. The portal helped the support team track the status of new account setups, a common recurring workflow that had several steps to complete correctly.",
          ownership:
            "Designed and built the tool from scratch using the same technologies, database patterns, and platform conventions as the main Calldrip application.",
          impact:
            "Gave the support team a clearer way to track setup progress and reduce the chance of missing steps during new account onboarding.",
          technologies: [
            "Internal Tools",
            "PHP",
            "SQL",
            "Databases",
            "CRUD apps",
          ],
        },
        {
          title: "Customer Setup Walkthrough",
          eyebrow: "Product UI",
          description:
            "Built a cleaner modal walkthrough for configuring inbound tracking numbers, tying together number search, purchase, and setup steps in one customer-facing flow.",
          ownership:
            "Implemented the front-end experience and connected it to Twilio's number search API and Chargify's purchasing workflow.",
          impact:
            "Reduced setup friction for a revenue-critical feature and made the configuration path easier to understand.",
          technologies: [
            "Product UI",
            "Twilio",
            "Chargify",
            "APIs",
            "CRUD apps",
          ],
        },
      ],
    },
  },
];

export function getExperienceBySlug(slug: string) {
  return experience.find((item) => item.slug === slug);
}

export const stack = [
  "Next.js 16",
  "React 19",
  "Typescript",
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
    items: ["Next.js 16", "React 19", "Typescript", "Tailwind CSS"],
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
