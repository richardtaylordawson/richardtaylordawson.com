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
    label: "AI-native interfaces",
    text: "Conversation-first flows, eval-minded UX, and product surfaces that keep humans in control.",
  },
  {
    icon: Workflow,
    label: "Product systems",
    text: "Reusable frontend architecture, content models, and design systems that ship without becoming heavy.",
  },
  {
    icon: Gauge,
    label: "Fast web craft",
    text: "Next.js, accessibility, performance, and polish tuned for teams that care about the last 10 percent.",
  },
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
            Richard Taylor Dawson builds software for the agent era.
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
