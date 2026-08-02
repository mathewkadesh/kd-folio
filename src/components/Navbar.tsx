import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu, Github, Linkedin, Mail } from 'lucide-react'
import { cn } from '@/lib/cn'

const navLinks = [
  { label: 'Projects',  to: '/#projects' },
  { label: 'About',     to: '/about' },
  { label: 'Services',  to: '/services' },
  { label: 'Contact',   to: '/contact' },
  { label: 'CV',        to: '/cv' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-ink/80 backdrop-blur-xl border-b border-white/[0.07] shadow-lg shadow-black/30'
            : 'bg-transparent',
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 shrink-0 group"
            aria-label="Kadesh — home"
          >
            <span className="font-display font-bold text-xl tracking-tight text-text group-hover:text-cinema transition-colors">
              <span className="text-cinema">K</span>ADESH
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    'px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                    isActive
                      ? 'text-text bg-white/[0.06]'
                      : 'text-muted hover:text-text hover:bg-white/[0.04]',
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <span className="flex items-center gap-1.5 text-xs font-medium text-green-400 bg-green-400/10 border border-green-400/20 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for remote work
            </span>
            <Link
              to="/contact"
              className="px-4 py-2 rounded-lg bg-cinema hover:bg-cinemaHover text-white text-sm font-semibold transition-colors shadow-lg shadow-cinema/20"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-muted hover:text-text hover:bg-white/[0.06] transition-colors"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-ink/95 backdrop-blur-xl flex flex-col"
          >
            {/* Header row */}
            <div className="flex items-center justify-between px-4 h-16 border-b border-white/[0.06]">
              <Link to="/" className="font-display font-bold text-xl text-text">
                <span className="text-cinema">K</span>ADESH
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-lg text-muted hover:text-text hover:bg-white/[0.06] transition-colors"
              >
                <X size={22} />
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-1 p-6 flex-1" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      cn(
                        'block py-3.5 px-4 rounded-xl text-lg font-medium transition-colors',
                        isActive
                          ? 'text-text bg-white/[0.08]'
                          : 'text-muted hover:text-text hover:bg-white/[0.05]',
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}

              <div className="mt-6 flex flex-col gap-3">
                <span className="flex items-center gap-1.5 text-sm font-medium text-green-400 bg-green-400/10 border border-green-400/20 px-4 py-3 rounded-xl w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Available for remote work
                </span>
                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-xl bg-cinema hover:bg-cinemaHover text-white text-base font-semibold transition-colors text-center shadow-lg shadow-cinema/20 w-fit"
                >
                  Hire Me
                </Link>
              </div>
            </nav>

            {/* Socials */}
            <div className="p-6 border-t border-white/[0.06] flex items-center gap-4">
              <a href="https://github.com/mathewkadesh" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted hover:text-text transition-colors"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/mathew-kadesh-141b37188/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted hover:text-text transition-colors"><Linkedin size={20} /></a>
              <a href="mailto:kadeshmathew@gmail.com" aria-label="Email" className="text-muted hover:text-text transition-colors"><Mail size={20} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
