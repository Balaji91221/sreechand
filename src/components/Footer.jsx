// Footer.js
import Link from 'next/link'
import { Container } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-accent-500 dark:hover:text-accent-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  const siteNavLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'Contact', href: '/contact' },
    // { name: 'Blog', href: '/blog' }, // Add more links as needed
  ]

  return (
    <footer className="mt-16">
      <Container.Outer>
        <div className="pt-10 pb-16 border-t border-primaryText-100 dark:border-primaryText-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-primaryText-800 dark:text-primaryText-200">
                {siteNavLinks.map((link) => (
                  <NavLink key={link.href} href={link.href}>
                    {link.name}
                  </NavLink>
                ))}
              </div>
              <p className="text-sm text-primaryText-400 dark:text-primaryText-500">
                &copy; {new Date().getFullYear()} Sree Chand Nadella. All rights
                reserved.
              </p>
            </div>
            {/* Email Address Section */}
            <div className="mt-4 text-center w-full">
              <a 
                href="mailto:sreechand.nadella@gmail.com" 
                className="text-2xl sm:text-1xl md:text-2xl lg:text-6xl text-primaryText-800 dark:text-primaryText-200 hover:text-accent-500 transition dark:hover:text-accent-400"
              >
                sreechand.nadella@gmail.com
              </a>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
