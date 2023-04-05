import { Container } from '@/components/Container'

export const Footer = () => (
  <footer className="mt-32">
    <Container.Outer>
      <div className="border-t border-zinc-100 pt-10 pb-10 dark:border-zinc-700/40">
        <Container.Inner>
          <p className="text-sm text-zinc-400 dark:text-zinc-500">
            &copy; {new Date().getFullYear()} Richard Taylor Dawson. All rights
            reserved.
          </p>
        </Container.Inner>
      </div>
    </Container.Outer>
  </footer>
)
