import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight, Download, Github, Linkedin, Mail,
  Layers, Brain, Users, Phone,
} from 'lucide-react'
import { fadeUp, stagger } from '@/lib/motion'
import MediaSlot from '@/components/MediaSlot'
import { projects } from '@/data/projects'

// --- Typewriter subtitles ---
const subtitles = ['Full-Stack Engineer', 'AI Developer', 'Senior Software Engineer']

function Typewriter() {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const current = subtitles[index]
    if (!deleting && displayed.length < current.length) {
      timeout.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === current.length) {
      timeout.current = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setIndex((i) => (i + 1) % subtitles.length)
    }
    return () => { if (timeout.current) clearTimeout(timeout.current) }
  }, [displayed, deleting, index])

  return (
    <span className="text-cinema">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  )
}

// --- Profile tiles ---
const profiles = [
  {
    id: 'projects',
    label: 'Projects',
    sublabel: '6 builds shipped',
    icon: Layers,
    to: '/projects',
    color: 'from-cinema/20 to-ember/10',
  },
  {
    id: 'about',
    label: 'About',
    sublabel: 'Skills & experience',
    icon: Users,
    to: '/about',
    color: 'from-blue-500/20 to-purple-500/10',
  },
  {
    id: 'services',
    label: 'Services',
    sublabel: 'What I build',
    icon: Brain,
    to: '/services',
    color: 'from-green-500/20 to-teal-500/10',
  },
  {
    id: 'contact',
    label: 'Contact',
    sublabel: 'Open to remote roles',
    icon: Phone,
    to: '/contact',
    color: 'from-yellow-500/20 to-orange-500/10',
  },
]

// --- Marquee ---
const stackItems = [
  'React', 'TypeScript', 'Node.js', 'FastAPI', 'Python',
  'Supabase', 'Claude API', 'LangChain', 'Tailwind CSS',
  'Framer Motion', 'Docker', 'Git', 'PostgreSQL', 'Vite',
  'Three.js', 'Leaflet', 'TensorFlow.js', 'REST APIs',
]

export default function Home() {
  const featured = projects.filter((p) => p.featured)

  return (
    <div className="bg-ink min-h-screen">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[70vh] bg-glow-cinema opacity-70"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cinema/8 blur-[120px]"
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] items-center gap-10 lg:gap-14">
            <div className="text-center lg:text-left">
              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-bold text-text leading-none tracking-tight"
                style={{ fontSize: 'clamp(3.25rem, 10vw, 7rem)' }}
              >
                Mathew Kadesh
              </motion.h1>

              {/* Typewriter subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-4 text-xl sm:text-2xl font-display font-medium text-muted min-h-[2rem]"
              >
                <Typewriter />
              </motion.p>

              {/* Value prop */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="mt-6 text-base sm:text-lg text-muted max-w-xl mx-auto lg:mx-0 leading-relaxed"
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
                  to="/projects"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cinema hover:bg-cinemaHover text-white font-semibold text-sm transition-all shadow-lg shadow-cinema/25 hover:shadow-cinema/40 hover:-translate-y-0.5"
                >
                  View My Work <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.07] hover:bg-white/[0.12] border border-white/[0.1] text-text font-semibold text-sm transition-all hover:-translate-y-0.5"
                >
                  Hire Me
                </Link>
                <a
                  href="/cv"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-transparent hover:bg-white/[0.05] border border-white/[0.08] text-muted hover:text-text font-medium text-sm transition-all"
                >
                  <Download size={15} /> CV
                </a>
              </motion.div>

              {/* Socials */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="mt-8 flex justify-center lg:justify-start gap-4"
              >
                <a href="https://github.com/mathewkadesh" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2.5 rounded-xl text-muted hover:text-text hover:bg-white/[0.06] transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/mathew-kadesh-141b37188/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2.5 rounded-xl text-muted hover:text-text hover:bg-white/[0.06] transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:kadeshmathew@gmail.com" aria-label="Email" className="p-2.5 rounded-xl text-muted hover:text-text hover:bg-white/[0.06] transition-colors">
                  <Mail size={20} />
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-[360px] sm:max-w-[420px]"
            >
              {/* Soft red glow behind the photo */}
              <div className="absolute -inset-8 bg-cinema/15 blur-[80px] rounded-full opacity-70" aria-hidden="true" />
              {/* Photo — no frame, fades into background at bottom */}
              <div className="relative overflow-hidden">
                <MediaSlot id="hero-profile" className="min-h-[440px] sm:min-h-[520px]" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-faint"
        >
          <span className="text-xs font-mono">scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-faint to-transparent" />
        </motion.div>
      </section>

      {/* ── CHOOSE PROFILE ── */}
      <section className="relative py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.p variants={fadeUp} className="text-xs font-mono text-cinema tracking-widest uppercase mb-3">
              Choose Profile
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display font-bold text-3xl sm:text-4xl text-text">
              Where do you want to go?
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {profiles.map((profile) => {
              const Icon = profile.icon
              return (
                <motion.div key={profile.id} variants={fadeUp}>
                  <Link
                    to={profile.to}
                    className={`flex flex-col items-center gap-4 p-6 rounded-2xl bg-gradient-to-br ${profile.color} border border-white/[0.08] hover:border-cinema/40 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl hover:shadow-cinema/10`}
                  >
                    <div className="w-14 h-14 rounded-xl bg-white/[0.08] flex items-center justify-center group-hover:bg-cinema/20 transition-colors">
                      <Icon size={26} className="text-muted group-hover:text-cinema transition-colors" />
                    </div>
                    <div className="text-center">
                      <p className="font-display font-semibold text-text">{profile.label}</p>
                      <p className="text-xs text-faint mt-0.5">{profile.sublabel}</p>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex items-end justify-between mb-10"
          >
            <div>
              <motion.p variants={fadeUp} className="text-xs font-mono text-cinema tracking-widest uppercase mb-2">
                Featured Work
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-display font-bold text-3xl sm:text-4xl text-text">
                Recent Projects
              </motion.h2>
            </div>
            <motion.div variants={fadeUp}>
              <Link
                to="/projects"
                className="hidden sm:flex items-center gap-2 text-sm text-muted hover:text-cinema transition-colors"
              >
                All projects <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((project, i) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="group rounded-xl overflow-hidden bg-surface border border-white/[0.07] hover:border-cinema/35 transition-colors"
              >
                <div className="overflow-hidden">
                  <MediaSlot
                    id={project.mediaId}
                    className="transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-5">
                  <div className="flex gap-1.5 flex-wrap mb-3">
                    {project.stack.slice(0, 4).map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-surface2 text-faint border border-white/[0.05]">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display font-semibold text-text text-lg mb-1">{project.title}</h3>
                  <p className="text-sm text-muted line-clamp-2">{project.tagline}</p>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="mt-3 flex items-center gap-1.5 text-sm text-cinema hover:text-cinemaHover font-medium transition-colors"
                  >
                    View Details <ArrowRight size={13} />
                  </Link>
                </div>
              </motion.article>
            ))}
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
      <section className="relative py-28 px-4 sm:px-6">
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
            <motion.p variants={fadeUp} className="text-xs font-mono text-cinema tracking-widest uppercase mb-4">
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
                to="/contact"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.07] hover:bg-white/[0.12] border border-white/[0.1] text-text font-semibold text-sm transition-all hover:-translate-y-0.5"
              >
                Hire Me
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
            <motion.p variants={fadeUp} className="text-muted mb-8">
              Open to full-time remote engineering roles, contract work, and AI consulting.
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
