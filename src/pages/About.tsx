import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MapPin, Mail, Github, Linkedin, ArrowRight,
  Target, MessageSquare, Lightbulb, Clock, TrendingUp, Gem,
} from 'lucide-react'
import { fadeUp, stagger } from '@/lib/motion'
import { cn } from '@/lib/cn'
import SectionGlow from '@/components/SectionGlow'
import MediaSlot from '@/components/MediaSlot'
import SkillBar from '@/components/SkillBar'
import { skills, skillCategories, softSkills, type SkillCategory } from '@/data/skills'
import { experience, education } from '@/data/experience'

const tabs = ['Overview', 'Tech Skills', 'Soft Skills', 'Experience', 'Testimonials'] as const
type Tab = (typeof tabs)[number]

const softIcons: Record<string, React.ElementType> = {
  Target, MessageSquare, Lightbulb, Clock, TrendingUp, Gem,
}

const stats = [
  { value: '10+', label: 'Projects Shipped' },
  { value: '18+', label: 'Technologies' },
  { value: '3+', label: 'Years Building' },
  { value: '400+', label: 'AI Analyses Served' },
]

const testimonials = [
  {
    quote: 'Mathew delivered a working, polished flood monitoring tool on time and with zero post-delivery defects. Exactly what we needed — no fuss, just results.',
    author: 'AECOM Stakeholder',
    role: 'Project Lead, AECOM',
  },
  {
    quote: 'The Aptira scoring engine is genuinely impressive. The prompts are tight, the outputs are structured and consistent, and the UI makes the data immediately useful.',
    author: 'Beta User',
    role: 'Senior Recruiter',
  },
  {
    quote: 'Rare to find someone who can design the data model, build the API, and deliver a great UI. Mathew is that engineer.',
    author: 'Collaborator',
    role: 'Startup Founder',
  },
]

export default function About() {
  const [activeTab, setActiveTab] = useState<Tab>('Overview')
  const [skillFilter, setSkillFilter] = useState<SkillCategory>('All')

  const filteredSkills = skills.filter((s) => skillFilter === 'All' || s.category === skillFilter)

  return (
    <div className="bg-ink min-h-screen pt-24">
      {/* Header */}
      <section className="relative px-4 sm:px-6 py-16">
        <SectionGlow />
        <div className="max-w-5xl mx-auto">
          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-6 items-start sm:items-center p-6 rounded-2xl bg-surface border border-white/[0.08]"
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 ring-2 ring-cinema/40 shadow-xl shadow-cinema/10 bg-surface2">
              <MediaSlot id="about-avatar" className="w-full h-full" iconSize={28} />
            </div>
            <div className="flex-1">
              <h1 className="font-display font-bold text-2xl sm:text-3xl text-text">Mathew Kadesh</h1>
              <p className="text-muted mt-1">Full-Stack Engineer · AI Developer</p>
              <div className="flex flex-wrap items-center gap-3 mt-3">
                <span className="flex items-center gap-1.5 text-sm text-faint">
                  <MapPin size={13} /> Bristol, UK · Open to remote work
                </span>
                <span className="flex items-center gap-1.5 text-xs font-medium text-green-400 bg-green-400/10 border border-green-400/20 px-2 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Open for work
                </span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <Link to="/projects" className="px-4 py-2 rounded-lg bg-cinema hover:bg-cinemaHover text-white text-sm font-semibold transition-colors">
                Projects
              </Link>
              <Link to="/cv" className="px-4 py-2 rounded-lg bg-surface2 hover:bg-white/[0.1] border border-white/[0.08] text-muted hover:text-text text-sm font-medium transition-colors">
                CV
              </Link>
              <a href="mailto:kadeshmathew@gmail.com" className="p-2 rounded-lg text-muted hover:text-text hover:bg-white/[0.06] transition-colors" aria-label="Email">
                <Mail size={16} />
              </a>
              <a href="https://github.com/mathewkadesh" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-muted hover:text-text hover:bg-white/[0.06] transition-colors" aria-label="GitHub">
                <Github size={16} />
              </a>
              <a href="https://www.linkedin.com/in/mathew-kadesh-141b37188/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-muted hover:text-text hover:bg-white/[0.06] transition-colors" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <div className="sticky top-16 z-20 bg-ink/80 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto no-scrollbar py-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  'relative px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors shrink-0',
                  activeTab === tab ? 'text-text bg-white/[0.08]' : 'text-muted hover:text-text',
                )}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute inset-0 rounded-lg bg-white/[0.08] -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab content */}
      <div className="px-4 sm:px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {/* ── OVERVIEW ── */}
            {activeTab === 'Overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Stats row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.07 }}
                      className="p-4 rounded-xl bg-surface border border-white/[0.07] text-center"
                    >
                      <div className="font-display font-bold text-3xl text-cinema">{stat.value}</div>
                      <div className="text-xs text-muted mt-1">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Bio */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: '🏗️',
                      title: 'Engineering',
                      desc: 'I build full-stack products end-to-end — React frontends, FastAPI/Node backends, Supabase data layers — and I own every layer until it ships.',
                    },
                    {
                      icon: '🧠',
                      title: 'Product Sense',
                      desc: 'I design for outcomes, not features. Every technical decision is grounded in what moves the metric that matters — whether that\'s time-to-score or conversion rate.',
                    },
                    {
                      icon: '✨',
                      title: 'Polish',
                      desc: 'Motion, accessibility, micro-interactions — the details that make users trust a product. I care about the last 10% as much as the first 90%.',
                    },
                  ].map((card) => (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="p-5 rounded-xl bg-surface border border-white/[0.07]"
                    >
                      <div className="text-2xl mb-3">{card.icon}</div>
                      <h3 className="font-display font-semibold text-text mb-2">{card.title}</h3>
                      <p className="text-sm text-muted leading-relaxed">{card.desc}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Bio text */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-8 p-6 rounded-xl bg-surface border border-white/[0.07]"
                >
                  <h3 className="font-display font-semibold text-text mb-3">Background</h3>
                  <p className="text-muted leading-relaxed">
                    MSc Advanced Computer Science (Cardiff Metropolitan University) and a First Class BEng in Software Engineering
                    (ICBT Sri Lanka / Cardiff Met). I've been building on the web for 3+ years — from contract work at AECOM
                    delivering real-time engineering tools, to shipping my own AI SaaS products. I'm based in Bristol, UK,
                    and fully open to remote roles worldwide.
                  </p>
                </motion.div>
              </motion.div>
            )}

            {/* ── TECH SKILLS ── */}
            {activeTab === 'Tech Skills' && (
              <motion.div
                key="tech"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-wrap gap-2 mb-8">
                  {skillCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSkillFilter(cat)}
                      className={cn(
                        'px-3 py-1.5 rounded-lg text-sm font-medium transition-all',
                        skillFilter === cat
                          ? 'bg-cinema text-white'
                          : 'bg-surface text-muted hover:text-text border border-white/[0.07]',
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={skillFilter}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                  >
                    {filteredSkills.map((skill, i) => (
                      <SkillBar key={skill.name} skill={skill} index={i} />
                    ))}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            )}

            {/* ── SOFT SKILLS ── */}
            {activeTab === 'Soft Skills' && (
              <motion.div
                key="soft"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {softSkills.map((skill, i) => {
                  const Icon = softIcons[skill.icon]
                  return (
                    <motion.div
                      key={skill.title}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.07 }}
                      className="p-5 rounded-xl bg-surface border border-white/[0.07] hover:border-cinema/30 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-cinema/10 flex items-center justify-center mb-4">
                        {Icon && <Icon size={20} className="text-cinema" />}
                      </div>
                      <h3 className="font-display font-semibold text-text mb-2">{skill.title}</h3>
                      <p className="text-sm text-muted leading-relaxed">{skill.description}</p>
                    </motion.div>
                  )
                })}
              </motion.div>
            )}

            {/* ── EXPERIENCE ── */}
            {activeTab === 'Experience' && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Work timeline */}
                <div className="relative">
                  <div className="absolute left-[18px] top-0 bottom-0 w-px bg-white/[0.08]" />
                  <div className="flex flex-col gap-8">
                    {experience.map((exp, i) => (
                      <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="relative pl-12"
                      >
                        <div className="absolute left-[9px] top-[6px] w-[18px] h-[18px] rounded-full border-2 border-cinema bg-ink" />
                        <div className="p-5 rounded-xl bg-surface border border-white/[0.07]">
                          <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                            <div>
                              <h3 className="font-display font-semibold text-text">{exp.role}</h3>
                              <p className="text-cinema text-sm font-medium">{exp.company}</p>
                            </div>
                            <div className="text-right">
                              <span className="text-xs font-mono text-faint">{exp.period}</span>
                              <p className="text-xs text-faint mt-0.5">{exp.location}</p>
                            </div>
                          </div>
                          <ul className="flex flex-col gap-2 mb-4">
                            {exp.bullets.map((b, j) => (
                              <li key={j} className="text-sm text-muted leading-relaxed flex gap-2">
                                <span className="text-cinema mt-1.5 shrink-0">–</span>
                                {b}
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.stack.map((t) => (
                              <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-surface2 text-faint border border-white/[0.05]">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div className="mt-12">
                  <h3 className="font-display font-semibold text-text text-xl mb-6">Education</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {education.map((edu, i) => (
                      <motion.div
                        key={edu.degree}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-5 rounded-xl bg-surface border border-white/[0.07]"
                      >
                        <span className="text-xs font-mono text-cinema tracking-wide">{edu.classification}</span>
                        <h4 className="font-display font-semibold text-text mt-1">{edu.degree}</h4>
                        <p className="text-sm text-muted mt-0.5">{edu.institution}</p>
                        <p className="text-xs text-faint mt-1">{edu.period}</p>
                        <p className="text-sm text-muted mt-3 leading-relaxed">{edu.notes}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── TESTIMONIALS ── */}
            {activeTab === 'Testimonials' && (
              <motion.div
                key="testimonials"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {testimonials.map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 rounded-xl bg-surface border border-white/[0.07] flex flex-col gap-4"
                  >
                    <div className="text-cinema text-2xl font-display leading-none">"</div>
                    <p className="text-sm text-muted leading-relaxed flex-1 italic">{t.quote}</p>
                    <div>
                      <p className="text-sm font-medium text-text">{t.author}</p>
                      <p className="text-xs text-faint">{t.role}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="py-20 px-4 sm:px-6 border-t border-white/[0.05]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-text mb-3">
            Ready to build something cinematic?
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <Link to="/projects" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cinema hover:bg-cinemaHover text-white font-semibold text-sm transition-all hover:-translate-y-0.5">
              View Projects <ArrowRight size={15} />
            </Link>
            <Link to="/contact" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-surface hover:bg-surface2 border border-white/[0.08] text-muted hover:text-text font-medium text-sm transition-all">
              Hire Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
