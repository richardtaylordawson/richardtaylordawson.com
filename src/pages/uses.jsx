import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Spencer Sharp</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="16” MacBook Pro">
              I'm a Mac guy through and through. It's the only platform I can
              develop with and use day to day
            </Tool>
            <Tool title="Apple Pro Display XDR (Standard Glass)">
              The only display on the market if you want something HiDPI and
              bigger than 27”. When you’re working at planetary scale, every
              pixel you can get counts.
            </Tool>
            <Tool title="MX Master Keys">
              Logitech kills it with their mice so I thought I may as well give
              the keyboard a try. I have not been dissapointed one bit. Very
              similar to the apple magic keyboard but with more tactile feedback
              and a backlight for the same cost.
            </Tool>
            <Tool title="MX Master 3S">
              The king of computer mice. The absolute best purchase you can
              make. The customizable shortcuts, gestures, etc make this my
              absolute favorite.
            </Tool>
            <Tool title="Herman Miller Aeron Chair">
              If I’m going to slouch in the worst ergonomic position imaginable
              all day, I might as well do it in an expensive chair.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="VS Code">
              I don't think I could ever switch to anything else. The extensive
              amount of plugins, free cost and more make this the best front end
              developer tool out there
            </Tool>
            <Tool title="Arc">
              Call me old school, but I like the good ol' trusty terminal app
              that comes default with MacOS. It does the job and is
              customizable, that's all I need
            </Tool>
            <Tool title="Terminal">
              Call me old school, but I like the good ol' trusty terminal app
              that comes default with MacOS. It does the job and is
              customizable, that's all I need
            </Tool>
            <Tool title="Postman">
              Call me old school, but I like the good ol' trusty terminal app
              that comes default with MacOS. It does the job and is
              customizable, that's all I need
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Raycast">
              It’s not the newest kid on the block but it’s still the fastest.
              The Sublime Text of the application launcher world.
            </Tool>
            <Tool title="Flow">
              Free handy app that is a "pomodoro" timer that helps me focus and
              take the needed breaks throughout the day to stay in tip top shape
            </Tool>
            <Tool title="Amphetamine">
              Free handy app that is a "pomodoro" timer that helps me focus and
              take the needed breaks throughout the day to stay in tip top shape
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              We started using Figma as just a design tool but now it’s become
              our virtual whiteboard for the entire company. Never would have
              expected the collaboration features to be the real hook.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
