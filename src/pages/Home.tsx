import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight, Download, Github, Linkedin, Mail, ChevronDown,
  Target, MessageSquare, Lightbulb, TrendingUp,
} from 'lucide-react'
import { fadeUp, stagger } from '@/lib/motion'
import ProjectRow from '@/components/ProjectRow'
import { projects } from '@/data/projects'
import { softSkills } from '@/data/skills'

// --- Why work with me ---
const valueIcons: Record<string, React.ElementType> = {
  Target, MessageSquare, Lightbulb, TrendingUp,
}
const valueProps = softSkills.filter((s) =>
  ['Ownership', 'Communication', 'Problem Solving', 'Impact Focus'].includes(s.title),
)

// --- Marquee ---
const stackItems = [
  'React', 'TypeScript', 'Node.js', 'FastAPI', 'Python',
  'Supabase', 'Claude API', 'LangChain', 'Tailwind CSS',
  'Framer Motion', 'Docker', 'Git', 'PostgreSQL', 'Vite',
  'Three.js', 'Leaflet', 'TensorFlow.js', 'REST APIs',
]

export default function Home() {
  const featuredRow  = projects.filter((p) => p.featured)
  const fullStackRow = projects.filter((p) => p.tags.includes('Full-Stack') || p.tags.includes('AI'))
  const webRow        = projects.filter((p) =>
    p.tags.includes('React') && !p.tags.includes('Full-Stack') && !p.tags.includes('AI'),
  )
  const mobileRow     = projects.filter((p) => p.tags.includes('Mobile'))

  const heroBackground = `${import.meta.env.BASE_URL.replace(/\/$/, '')}/images/landing-hero-background.png`
  const heroPortrait = `${import.meta.env.BASE_URL.replace(/\/$/, '')}/img/mathew-kadesh-hero-transparent.png`

  const location = useLocation()
  useEffect(() => {
    if (location.hash === '#projects') {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location.hash])

  return (
    <div className="bg-ink min-h-screen">
      {/* ── HERO ── */}
      <section className="relative flex items-start overflow-hidden">
        <img
          src={heroBackground}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink to-transparent"
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-28">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,480px)]">
            <div className="max-w-3xl text-center lg:text-left">
              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-bold text-white leading-none tracking-tight drop-shadow-[0_6px_28px_rgba(0,0,0,0.75)]"
                style={{ fontSize: 'clamp(3.25rem, 10vw, 7rem)' }}
              >
                Mathew Kadesh
              </motion.h1>

              {/* Role pill — static */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-4 text-xl sm:text-2xl font-display font-medium text-white"
              >
                <span className="inline-flex rounded-full border border-white/20 bg-white/[0.08] px-4 py-2 text-white/90 text-base sm:text-lg shadow-[0_12px_50px_rgba(0,0,0,0.35)] backdrop-blur-sm">
                  Full-Stack Engineer · AI Developer
                </span>
              </motion.p>

              {/* Value prop */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="mt-6 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-white/88 leading-relaxed drop-shadow-[0_3px_18px_rgba(0,0,0,0.72)]"
              >
                Bristol-based engineer building production AI-powered products end-to-end.
                From blank schema to shipped product — I own the whole stack.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.5 }}
                className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3"
              >
                <Link
                  to="/#projects"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cinema hover:bg-cinemaHover text-white font-semibold text-sm transition-all shadow-lg shadow-cinema/25 hover:shadow-cinema/40 hover:-translate-y-0.5"
                >
                  View My Work <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.14] hover:bg-white/[0.2] border border-white/[0.18] text-white font-semibold text-sm transition-all shadow-lg shadow-black/20 backdrop-blur-sm hover:-translate-y-0.5"
                >
                  Hire Me
                </Link>
                <Link
                  to="/cv"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-black/20 hover:bg-white/[0.1] border border-white/[0.14] text-white/82 hover:text-white font-medium text-sm transition-all backdrop-blur-sm"
                >
                  <Download size={15} /> CV
                </Link>
              </motion.div>

              {/* Socials */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="mt-8 flex justify-center lg:justify-start gap-4"
              >
                <a href="https://github.com/mathewkadesh" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2.5 rounded-xl text-white/72 hover:text-white hover:bg-white/[0.1] transition-colors backdrop-blur-sm">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/mathew-kadesh-141b37188/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2.5 rounded-xl text-white/72 hover:text-white hover:bg-white/[0.1] transition-colors backdrop-blur-sm">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:kadeshmathew@gmail.com" aria-label="Email" className="p-2.5 rounded-xl text-white/72 hover:text-white hover:bg-white/[0.1] transition-colors backdrop-blur-sm">
                  <Mail size={20} />
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 28 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto hidden w-full max-w-[440px] lg:block"
            >
              <img
                src={heroPortrait}
                alt="Mathew Kadesh smiling in a black blazer"
                className="mx-auto h-[min(78vh,760px)] w-auto max-w-full object-contain object-bottom drop-shadow-[0_24px_38px_rgba(0,0,0,0.6)]"
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-faint"
        >
          <ChevronDown size={20} className="animate-bounce" />
        </motion.div>
      </section>

      {/* ── WHY WORK WITH ME ── */}
      <section className="relative py-24 px-4 sm:px-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-glow-section opacity-40"
        />
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.p variants={fadeUp} className="text-xs font-mono text-muted/70 tracking-widest uppercase mb-3">
              Why Work With Me
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display font-bold text-3xl sm:text-4xl text-text">
              Built for teams that ship
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {valueProps.map((item) => {
              const Icon = valueIcons[item.icon]
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="p-6 rounded-2xl bg-surface border border-white/[0.07] hover:border-cinema/30 transition-colors duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-cinema/10 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-cinema" />
                  </div>
                  <h3 className="font-display font-semibold text-text mb-2">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ── PROJECTS (Netflix-style rows) ── */}
      <section id="projects" className="py-24 px-4 sm:px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-10"
          >
            <motion.p variants={fadeUp} className="text-xs font-mono text-muted/70 tracking-widest uppercase mb-2">
              Portfolio
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display font-bold text-3xl sm:text-4xl text-text">
              Projects
            </motion.h2>
          </motion.div>

          <div className="flex flex-col gap-12">
            <ProjectRow title="Featured Work" projects={featuredRow} />
            <ProjectRow title="Full-Stack & AI Products" projects={fullStackRow} />
            <ProjectRow title="Web & Marketing Sites" projects={webRow} />
            <ProjectRow title="Mobile Apps" projects={mobileRow} />
          </div>
        </div>
      </section>

      {/* ── TECH MARQUEE ── */}
      <section className="py-12 overflow-hidden border-y border-white/[0.05]" aria-label="Technology stack">
        <div className="flex items-center gap-6 animate-marquee w-max">
          {[...stackItems, ...stackItems].map((item, i) => (
            <span
              key={i}
              className="text-sm font-mono text-faint whitespace-nowrap px-4 py-2 rounded-lg bg-surface border border-white/[0.06]"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ── INTRO BLURB ── */}
      <section className="relative py-24 px-4 sm:px-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-glow-section opacity-40"
        />
        <div className="max-w-3xl mx-auto text-center relative">
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeUp} className="text-xs font-mono text-muted/70 tracking-widest uppercase mb-4">
              About
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display font-bold text-3xl sm:text-4xl text-text mb-6 leading-tight">
              Hi, I'm Mathew —<br />I build things that ship.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted text-base sm:text-lg leading-relaxed mb-8">
              Bristol-based full-stack engineer and AI developer with an MSc in Advanced Computer Science.
              I build production AI-powered products end-to-end — from database schema through API layer
              to polished React frontend. Currently open to remote engineering roles worldwide.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3">
              <Link
                to="/cv"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cinema hover:bg-cinemaHover text-white font-semibold text-sm transition-all shadow-lg shadow-cinema/20 hover:-translate-y-0.5"
              >
                <Download size={15} /> Download CV
              </Link>
              <Link
                to="/about"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.07] hover:bg-white/[0.12] border border-white/[0.1] text-text font-semibold text-sm transition-all hover:-translate-y-0.5"
              >
                About Me
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section className="relative py-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] rounded-full bg-cinema/10 blur-[100px]"
          />
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            <motion.h2 variants={fadeUp} className="font-display font-bold text-4xl sm:text-5xl text-text leading-tight mb-6">
              Let's build something <span className="text-cinema">cinematic.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted mb-2">
              Open to full-time remote engineering roles, contract work, and AI consulting.
            </motion.p>
            <motion.p variants={fadeUp} className="text-sm text-faint mb-8">
              GMT · Bristol, UK · Available full-time remote · Responding within 24 h
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-cinema hover:bg-cinemaHover text-white font-bold text-base transition-all shadow-xl shadow-cinema/30 hover:shadow-cinema/50 hover:-translate-y-1"
              >
                Get in Touch <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
