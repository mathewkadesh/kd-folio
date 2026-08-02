import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'

const quickLinks = [
  { label: 'Projects',     to: '/#projects' },
  { label: 'About',        to: '/about' },
  { label: 'Services',     to: '/services' },
  { label: 'Contact',      to: '/contact' },
  { label: 'ATS CV',       to: '/cv' },
]

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/[0.06] mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link to="/" className="font-display font-bold text-2xl text-text">
              <span className="text-cinema">K</span>ADESH
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Full-Stack Engineer & AI Developer based in Bristol, UK.
              Building production AI-powered products end-to-end.
              Open to remote roles worldwide.
            </p>
            <p className="text-faint text-xs italic mt-1">
              "Built with purpose. Powered by curiosity."
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://github.com/mathewkadesh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg text-muted hover:text-text hover:bg-white/[0.06] transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/mathew-kadesh-141b37188/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg text-muted hover:text-text hover:bg-white/[0.06] transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:kadeshmathew@gmail.com"
                aria-label="Email"
                className="p-2 rounded-lg text-muted hover:text-text hover:bg-white/[0.06] transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-mono text-faint tracking-widest uppercase">Navigation</h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted hover:text-text transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-mono text-faint tracking-widest uppercase">Get in Touch</h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:kadeshmathew@gmail.com"
                className="flex items-center gap-2 text-sm text-muted hover:text-text transition-colors group"
              >
                kadeshmathew@gmail.com
                <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <span className="text-sm text-faint">Bristol, UK 🇬🇧</span>
              <span className="flex items-center gap-1.5 text-xs font-medium text-green-400 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Open to remote work worldwide
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-faint">
            © {new Date().getFullYear()} Mathew Kadesh. All rights reserved.
          </p>
          <p className="text-xs text-faint">
            Built with React + Framer Motion · Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  )
}
