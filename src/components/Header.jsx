import { useState } from 'react'
import logo from '../assets/logo.webp'
import { navItems } from '../data/siteContent'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-20 border-b border-white/30 bg-white/90 px-4 py-2.5 backdrop-blur-xl md:flex md:min-h-16 md:items-center md:justify-between md:px-8 md:py-0">
      <div className="flex items-center justify-between gap-4">
        <a
          className="inline-flex items-center gap-2.5 text-[15px] font-semibold text-[#10181c] no-underline"
          href="#top"
          aria-label="Gubat Surf School home"
          onClick={() => setIsOpen(false)}
        >
          <img
            className="h-8 w-8 rounded-full object-cover shadow-[0_8px_24px_rgba(3,26,34,0.16)] md:h-9 md:w-9"
            src={logo}
            alt=""
            aria-hidden="true"
          />
          Gubat Surf School
        </a>
        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-[#e7e1d6] bg-white text-[#10181c] shadow-[0_8px_24px_rgba(3,26,34,0.08)] md:hidden"
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="grid w-4 gap-1" aria-hidden="true">
            <span
              className={`h-0.5 rounded-full bg-current transition ${
                isOpen ? 'translate-y-1.5 rotate-45' : ''
              }`}
            ></span>
            <span
              className={`h-0.5 rounded-full bg-current transition ${
                isOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`h-0.5 rounded-full bg-current transition ${
                isOpen ? '-translate-y-1.5 -rotate-45' : ''
              }`}
            ></span>
          </span>
        </button>
      </div>
      <nav
        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-200 md:flex md:overflow-visible md:opacity-100 ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
        id="mobile-navigation"
        aria-label="Primary navigation"
      >
        <div className="min-h-0">
          <div className="mt-3 grid gap-1 rounded-lg border border-[#e7e1d6] bg-white/90 p-2 shadow-[0_18px_50px_rgba(3,26,34,0.12)] md:mt-0 md:flex md:gap-1 md:border-0 md:bg-transparent md:p-0 md:shadow-none">
            {navItems.map((item) => (
              <a
                className="rounded-md px-3 py-3 text-sm font-medium text-[#10181c]/75 no-underline transition hover:bg-[#f7f5ee] hover:text-[#10181c] md:shrink-0 md:rounded-full md:py-2 md:text-[13px] md:hover:bg-white/80"
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
