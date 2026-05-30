import Image from "next/image";
import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Code2,
  Download,
  Gauge,
  Mail,
  Network,
  Sparkles,
  Workflow,
} from "lucide-react";

import { AiAmbient } from "@/components/ai-ambient";

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
    title: "AI workbench concept",
    tag: "Interface systems",
    text: "A portfolio direction centered on agentic workflows, compact dashboards, and explainable automation.",
    image: "/images/desk.jpg",
  },
  {
    title: "Accessible growth surfaces",
    tag: "AudioEye",
    text: "Marketing engineering work that blends performance, accessibility, and clear conversion paths.",
    image: "/images/office.jpg",
  },
  {
    title: "Independent product builds",
    tag: "Labs",
    text: "Small, pragmatic apps and client sites with a bias toward clean delivery and maintainable foundations.",
    image: "/images/headshot.png",
  },
];

const experience = [
  {
    company: "AudioEye",
    role: "Senior Software Engineer, Marketing",
    span: "2023 to present",
    logo: "/images/logos/audio.png",
  },
  {
    company: "Clearlink",
    role: "Senior Front End Developer",
    span: "2019 to 2023",
    logo: "/images/logos/clearlink.jpeg",
  },
  {
    company: "Calldrip",
    role: "Full Stack Developer",
    span: "2016 to 2019",
    logo: "/images/logos/calldrip.png",
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
          <a href="#top" className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-[8px] border border-emerald-300/30 bg-emerald-300/10 font-mono text-sm font-semibold text-emerald-100">
              RTD
            </span>
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
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://www.github.com/richardtaylordawson"
              className="icon-link"
              aria-label="GitHub"
            >
              <Code2 />
            </a>
            <a
              href="https://www.linkedin.com/in/taylor-dawson-482927123/"
              className="icon-link"
              aria-label="LinkedIn"
            >
              <Network />
            </a>
          </div>
        </nav>
      </header>

      <section
        id="top"
        className="relative mx-auto grid min-h-[92svh] max-w-7xl items-center gap-12 px-4 pb-20 pt-28 sm:px-6 lg:grid-cols-[1.03fr_0.97fr] lg:px-8"
      >
        <div className="relative z-10 max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-[8px] border border-amber-300/25 bg-amber-300/10 px-3 py-2 text-sm text-amber-100">
            <Sparkles className="size-4" />
            AI-forward software engineer near Salt Lake City
          </div>
          <h1 className="text-balance text-5xl font-semibold leading-[0.98] tracking-normal text-white sm:text-6xl lg:text-7xl">
            Richard Taylor Dawson builds software for the agent era.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.68] sm:text-xl">
            I design and ship modern web products where AI, accessibility, and
            product craft meet. The work is fast, pragmatic, and built for real
            people on real teams.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="command-link primary-command">
              <Mail className="size-4" />
              Start a conversation
            </a>
            <a
              href="/documents/richardtaylordawson.pdf"
              className="command-link"
            >
              <Download className="size-4" />
              Resume
            </a>
          </div>
        </div>

        <div className="relative z-10 lg:justify-self-end">
          <div className="portrait-stage">
            <div className="portrait-orbit" aria-hidden="true" />
            <Image
              src="/images/headshot.png"
              alt="Portrait of Richard Taylor Dawson"
              width={712}
              height={724}
              priority
              className="relative z-10 aspect-[712/724] w-full max-w-[420px] rounded-[8px] object-cover shadow-2xl shadow-black/40"
            />
            <div className="agent-console" aria-label="AI systems status">
              <div className="flex items-center gap-2 text-emerald-100">
                <Bot className="size-4" />
                <span className="font-mono text-xs uppercase tracking-[0.18em]">
                  Agent loop
                </span>
              </div>
              <div className="mt-4 space-y-3">
                {["intent", "interface", "ship"].map((item, index) => (
                  <div className="console-row" key={item}>
                    <span>{item}</span>
                    <span style={{ animationDelay: `${index * 0.35}s` }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="systems"
        className="relative border-y border-white/10 bg-white/[0.025] py-16"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <div>
            <p className="section-kicker">Operating mode</p>
            <h2 className="mt-3 max-w-lg text-3xl font-semibold text-white sm:text-4xl">
              Useful AI needs taste, restraint, and strong interfaces.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {capabilities.map((capability) => (
              <article className="surface-card" key={capability.label}>
                <capability.icon className="size-5 text-emerald-200" />
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
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-kicker">Selected direction</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
              Building calm, capable software with a little electricity in it.
            </h2>
          </div>
          <a href="#contact" className="command-link w-fit">
            <ArrowUpRight className="size-4" />
            Let&apos;s build
          </a>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article className="project-card group" key={project.title}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[8px]">
                <Image
                  src={project.image}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-[8px] border border-white/[0.15] bg-black/[0.45] px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur">
                  {project.tag}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/[0.62]">
                {project.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="section-kicker">Career signal</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Senior frontend roots, full-stack instincts, AI curiosity.
            </h2>
            <div className="mt-8 flex flex-wrap gap-2">
              {stack.map((item) => (
                <span className="skill-chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <ol className="space-y-3">
            {experience.map((role) => (
              <li className="experience-row" key={`${role.company}-${role.role}`}>
                <Image
                  src={role.logo}
                  alt=""
                  width={40}
                  height={40}
                  className="size-10 rounded-[8px] bg-white object-contain p-1"
                />
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-white">{role.company}</p>
                  <p className="mt-1 text-sm text-white/[0.56]">{role.role}</p>
                </div>
                <time className="font-mono text-xs text-white/[0.42]">
                  {role.span}
                </time>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="contact-band">
          <div>
            <p className="section-kicker">Open channel</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white sm:text-5xl">
              Have an AI product, interface, or web system that needs sharper
              engineering?
            </h2>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:hello@richardtaylordawson.com"
              className="command-link primary-command"
            >
              <Mail className="size-4" />
              Email me
            </a>
            <a
              href="https://www.github.com/richardtaylordawson"
              className="command-link"
            >
              <Code2 className="size-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/taylor-dawson-482927123/"
              className="command-link"
            >
              <Network className="size-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
