import Head from 'next/head'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Resume } from '@/components/Resume'
import clearlink from '@/images/logos/clearlink.jpeg'
import { SocialLink } from '@/components/SocialLink'
import { Instagram, Github, LinkedIn, LinkIcon } from '@/components/Icons'

const projects = [
  {
    name: 'PWA Shields',
    description:
      "Personalize your app's README with custom, fun, PWA shields in SVG",
    link: { href: 'https://www.pwa-shields.com', label: 'Demo' },
    logo: clearlink,
  },
  {
    name: 'Calculator',
    description:
      'Simple calculator application built using Bootstrap 4, HTML, ES6 Modules and multiple Bootstrap Themes from Bootswatch.',
    link: { href: 'https://calculator.richardtaylordawson.com', label: 'Demo' },
    logo: clearlink,
  },
  {
    name: 'Gaming Trivia',
    description:
      'Gaming trivia game built using a cool CSS framework called NES.css and an open API for the trivia questions.',
    link: {
      href: 'https://gaming-trivia.richardtaylordawson.com',
      label: 'Demo',
    },
    logo: clearlink,
  },
  {
    name: 'Balanced Tax Solutions',
    description:
      'Website for Balanced Tax Solutions giving customers easy access to information they need, appointment booker and necessary',
    link: { href: 'https://www.balancedtaxsolutions.com', label: 'Demo' },
    logo: clearlink,
  },
  {
    name: 'Giphy Search',
    description:
      "Simple application built with Create React App that searches Giphy's open API.",
    link: {
      href: 'https://giphy-search.richardtaylordawson.com',
      label: 'Demo',
    },
    logo: clearlink,
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Richard Taylor Dawson - Software Engineer</title>
        <meta
          name="description"
          content="I’m Richard, a software engineer and entrepreneur based near Salt
          Lake City. I'm a highly motivated, hard working engineer that has a
          knack for finding simple solutions to complex issues"
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software Engineer.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Richard, a software engineer and entrepreneur based near Salt
            Lake City. I'm a highly motivated, hard working engineer that has a
            knack for finding simple solutions to complex issues
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://www.instagram.com/rtdaws003/"
              aria-label="Follow on Instagram"
              icon={Instagram}
            />
            <SocialLink
              href="https://www.github.com/richardtaylordawson"
              aria-label="Follow on GitHub"
              icon={Github}
            />
            <SocialLink
              href="https://www.linkedin.com/in/richard-dawson-482927123/"
              aria-label="Follow on LinkedIn"
              icon={LinkedIn}
            />
          </div>
        </div>
      </Container>
      {/* <Photos /> */}
      <SimpleLayout title="Projects">
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              {/* <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8 rounded-3xl"
                  unoptimized
                />
              </div> */}
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
      <Container className="mt-24 md:mt-28">
        <Resume />
      </Container>
    </>
  )
}
