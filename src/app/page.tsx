import Image from "next/image";
import Link from "next/link";
import {
  BrainCircuit,
  Download,
  ExternalLink,
  Gauge,
  Sparkles,
  Wrench,
  Workflow,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiApplemusic, SiEpicgames } from "react-icons/si";

import { AiAmbient } from "@/components/ai-ambient";
import { BrandMark } from "@/components/brand-mark";

const capabilities = [
  {
    icon: BrainCircuit,
    label: "Accessible UI craft",
    text: "Polished, accessible interfaces built with the details that make products feel clear, durable, and easy to use.",
  },
  {
    icon: Workflow,
    label: "Turning ambiguity into product",
    text: "User stories, stakeholder notes, and loose requirements translated into work that is sharper than the original ask.",
  },
  {
    icon: Gauge,
    label: "Internal tools and web systems",
    text: "Marketing flows, forms, CMS integrations, quoting software, infrastructure, and review workflows that help teams move.",
  },
];

const aboutCopy = [
  "I’m a software engineer focused on building accessible, polished user interfaces. I take pride in being thoughtful and meticulous, with a sharp eye for the small details that make software feel considered.",
  "A lot of my strength is in piecing together the real user story from requirements, stakeholder context, and rough edges, then turning that into something clearer and more useful than what was first imagined.",
  "Currently, I work at AudioEye, where I maintain and build internal websites and apps across marketing flows, forms, headless CMS integrations, sales quoting software, and the infrastructure around those systems. I also help manage pull requests, own new project work, and keep the apps moving in the right direction.",
  "I’ve worked across in-office, hybrid, and fully remote teams, from a larger company like Clearlink to a small startup like Calldrip. That experience has ranged from end-to-end product work with CRUD applications and databases to the marketing and sales software that helps generate leads and enables teams to sell the product.",
  "Outside of work, you can usually find me with my wife and kids, playing golf, or watching good sports.",
];

const projects = [
  {
    title: "Calculator",
    tag: "JavaScript application",
    text: "A focused calculator built with Bootstrap, HTML, and ES6 modules, with a set of switchable Bootswatch themes.",
    href: "https://calculator.richardtaylordawson.com",
    image:
      "https://calculator.richardtaylordawson.com/images/social-share.png",
    cta: "Open calculator",
  },
  {
    title: "Gaming Trivia",
    tag: "Interactive game",
    text: "A retro gaming trivia experience built with NES.css and an open trivia API for a fresh set of questions each round.",
    href: "https://gaming-trivia.richardtaylordawson.com",
    image:
      "https://gaming-trivia.richardtaylordawson.com/images/social-share.png",
    cta: "Play gaming trivia",
  },
];

const businessSites = [
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

const experience = [
  {
    company: "AudioEye",
    span: "May 2023 to present",
    logo: "/images/logos/audio.png",
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
    span: "Jul 2016 to Jan 2019",
    logo: "/images/logos/calldrip.png",
    roles: [
      {
        title: "Full Stack Developer",
        span: "Jul 2016 to Jan 2019",
      },
    ],
  },
];

const stack = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind CSS",
  "AI product UX",
  "Accessibility",
  "Performance",
  "Design systems",
];

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-background text-foreground">
      <AiAmbient />
      <div className="site-grid" aria-hidden="true" />
      <div className="signal-rail" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-background/70 backdrop-blur-xl">
        <nav
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
          aria-label="Primary navigation"
        >
          <a
            href="#top"
            className="flex items-center gap-3"
            aria-label="Richard Taylor Dawson, home"
          >
            <BrandMark />
            <span className="hidden text-sm font-medium text-white/80 sm:inline">
              Richard Taylor Dawson
            </span>
          </a>
          <div className="hidden items-center gap-6 text-sm text-white/60 md:flex">
            <a className="transition hover:text-white" href="#about">
              About
            </a>
            <a className="transition hover:text-white" href="#work">
              Work
            </a>
            <a className="transition hover:text-white" href="#systems">
              Systems
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/uses" className="icon-link" aria-label="Uses">
              <Wrench />
            </Link>
            <a
              href="https://www.github.com/richardtaylordawson"
              className="icon-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/taylor-dawson-482927123/"
              className="icon-link"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://music.apple.com/profile/richardtaylordawson"
              className="icon-link"
              aria-label="Apple Music"
              target="_blank"
              rel="noreferrer"
            >
              <SiApplemusic />
            </a>
            <a
              href="https://rocketleague.tracker.network/rocket-league/profile/epic/LilWizzie/overview"
              className="icon-link"
              aria-label="Rocket League"
              target="_blank"
              rel="noreferrer"
            >
              <SiEpicgames />
            </a>
          </div>
        </nav>
      </header>

      <section
        id="top"
        className="relative mx-auto flex min-h-[92svh] max-w-7xl items-center px-4 pb-20 pt-28 sm:px-6 lg:px-8"
      >
        <div className="relative z-10 w-full">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 rounded-[8px] border border-signal-amber/30 bg-signal-amber/10 px-3 py-2 text-sm text-signal-amber">
              <Sparkles className="size-4" />
              AI-forward software engineer
            </div>
            <Image
              src="/images/headshot.png"
              alt="Portrait of Richard Taylor Dawson"
              width={712}
              height={724}
              priority
              className="aspect-square size-10 shrink-0 rounded-full border border-white/20 object-cover object-top p-1 shadow-xl shadow-black/30 sm:size-14 lg:size-16"
            />
          </div>
          <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[0.98] tracking-normal text-white sm:text-6xl lg:text-7xl">
            Taylor Dawson builds software.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.68] sm:text-xl">
            I design and ship modern web products where AI, accessibility, and
            product craft meet. The work is fast, pragmatic, and built for real
            people on real teams.
          </p>
          <div className="mt-8 flex">
            <a
              href="/documents/richardtaylordawson.pdf"
              className="command-link"
            >
              <Download className="size-4" />
              Resume
            </a>
          </div>
        </div>

      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-[8px] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/10 sm:p-8 lg:grid-cols-[0.75fr_1.25fr] lg:p-10">
          <div>
            <h2 className="section-kicker">About me</h2>
            <p className="mt-5 max-w-sm text-xl font-semibold leading-8 text-white">
              I build accessible web products with a practical, detail-oriented
              approach.
            </p>
          </div>
          <div className="space-y-5 text-base leading-7 text-white/[0.68]">
            {aboutCopy.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section
        id="systems"
        className="relative border-y border-white/10 bg-white/[0.025] py-16"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <h2 className="section-kicker">What I do</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {capabilities.map((capability) => (
              <article className="surface-card" key={capability.label}>
                <capability.icon className="size-5 text-signal-teal" />
                <h3 className="mt-5 text-base font-semibold text-white">
                  {capability.label}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  {capability.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div>
          <h2 className="section-kicker">Selected projects</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/[0.58]">
            A growing collection of things I&apos;ve designed and built outside
            my day-to-day product work.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <a
              className="project-card group"
              href={project.href}
              target="_blank"
              rel="noreferrer"
              key={project.title}
            >
              <div className="project-preview">
                <Image
                  src={project.image}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="project-preview-backdrop"
                  aria-hidden="true"
                />
                <div className="project-preview-image">
                  <Image
                    src={project.image}
                    alt={`${project.title} social share artwork`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-3 pb-4 pt-5 sm:p-5 sm:pb-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="project-tag">{project.tag}</span>
                  <ExternalLink className="size-4 text-white/40 transition group-hover:text-signal-lime" />
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-white/[0.62]">
                  {project.text}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-signal-teal">
                  {project.cta}
                  <ExternalLink className="size-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 border-t border-white/10 pt-12">
          <div>
            <h2 className="section-kicker">Business sites</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/[0.58]">
              Live sites I&apos;ve worked on for businesses, separated from the
              personal projects and experiments.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {businessSites.map((site) => (
              <a
                className="project-card group"
                href={site.href}
                target="_blank"
                rel="noreferrer"
                key={site.title}
              >
                <div className="project-preview">
                  <Image
                    src={site.image}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="project-preview-backdrop"
                    aria-hidden="true"
                  />
                  <div className="project-preview-image">
                    <Image
                      src={site.image}
                      alt={`${site.title} social share artwork`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="p-3 pb-4 pt-5 sm:p-5 sm:pb-5">
                  <div className="flex items-center justify-between gap-4">
                    <span className="project-tag">{site.tag}</span>
                    <ExternalLink className="size-4 text-white/40 transition group-hover:text-signal-lime" />
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-white">
                    {site.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/[0.62]">
                    {site.text}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-signal-teal">
                    {site.cta}
                    <ExternalLink className="size-3.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <h2 className="section-kicker">Experience</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {stack.map((item) => (
                <span className="skill-chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <ol className="space-y-3">
            {experience.map((job) => (
              <li className="experience-row" key={job.company}>
                <div className="flex items-start gap-4">
                  <Image
                    src={job.logo}
                    alt=""
                    width={40}
                    height={40}
                    className="size-10 shrink-0 rounded-[8px] bg-white object-contain p-1"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                      <p className="font-medium text-white">{job.company}</p>
                      <time className="shrink-0 font-mono text-xs text-white/[0.42]">
                        {job.span}
                      </time>
                    </div>
                    <ol className="role-history">
                      {job.roles.map((role) => (
                        <li key={`${job.company}-${role.title}`}>
                          <p className="text-sm font-medium text-white/[0.72]">
                            {role.title}
                          </p>
                          <time className="mt-0.5 block font-mono text-[0.6875rem] text-white/[0.4]">
                            {role.span}
                          </time>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
