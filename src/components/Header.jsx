import logo from '../assets/logo.webp'
import { navItems } from '../data/siteContent'

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-20 flex min-h-16 flex-col gap-2 border-b border-white/30 bg-white/75 px-5 py-3 backdrop-blur-xl md:flex-row md:items-center md:justify-between md:px-8 md:py-0">
      <a
        className="inline-flex items-center gap-3 text-[15px] font-semibold text-[#10181c] no-underline"
        href="#top"
        aria-label="Gubat Surf School home"
      >
        <img
          className="h-9 w-9 rounded-full object-cover shadow-[0_8px_24px_rgba(3,26,34,0.16)]"
          src={logo}
          alt=""
          aria-hidden="true"
        />
        Gubat Surf School
      </a>
      <nav
        className="flex gap-1 overflow-x-auto pb-1 md:overflow-visible md:pb-0"
        aria-label="Primary navigation"
      >
        {navItems.map((item) => (
          <a
            className="shrink-0 rounded-full px-3 py-2 text-[13px] font-medium text-[#10181c]/70 no-underline transition hover:bg-white/80 hover:text-[#10181c]"
            key={item.href}
            href={item.href}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header
