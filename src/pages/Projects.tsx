import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ArrowRight, Download } from 'lucide-react'
import { fadeUp, stagger } from '@/lib/motion'
import { cn } from '@/lib/cn'
import SectionGlow from '@/components/SectionGlow'
import ProjectCard from '@/components/ProjectCard'
import { projects, allTags, type ProjectTag } from '@/data/projects'

const years = ['All', '2026'] as const

export default function Projects() {
  const [activeTag, setActiveTag] = useState<ProjectTag>('All')
  const [search, setSearch] = useState('')
  const [year, setYear] = useState<string>('All')

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchTag  = activeTag === 'All' || p.tags.includes(activeTag)
      const matchYear = year === 'All' || String(p.year) === year
      const q = search.toLowerCase()
      const matchSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.stack.some((s) => s.toLowerCase().includes(q))
      return matchTag && matchYear && matchSearch
    })
  }, [activeTag, search, year])

  return (
    <div className="bg-ink min-h-screen pt-24">
      {/* Header */}
      <section className="relative px-4 sm:px-6 py-16">
        <SectionGlow />
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            animate="show"
          >
            <motion.p variants={fadeUp} className="text-xs font-mono text-cinema tracking-widest uppercase mb-3">
              Portfolio
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-display font-bold text-4xl sm:text-6xl text-text mb-4">
              Projects
            </motion.h1>
            <motion.p variants={fadeUp} className="text-muted text-lg max-w-xl">
              Production builds, shipped products, and engineering experiments. Every project is driven by a real problem.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-20 bg-ink/80 backdrop-blur-xl border-b border-white/[0.06] py-4 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-3">
          {/* Tag chips */}
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={cn(
                  'px-3 py-1.5 rounded-lg text-sm font-medium transition-all',
                  activeTag === tag
                    ? 'bg-cinema text-white shadow-lg shadow-cinema/25'
                    : 'bg-surface text-muted hover:text-text hover:bg-surface2 border border-white/[0.07]',
                )}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 ml-auto">
            {/* Search */}
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-faint" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search…"
                className="pl-8 pr-3 py-1.5 rounded-lg bg-surface border border-white/[0.07] text-sm text-text placeholder:text-faint focus:outline-none focus:border-cinema/40 w-36 sm:w-48 transition-colors"
              />
            </div>

            {/* Year */}
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="px-3 py-1.5 rounded-lg bg-surface border border-white/[0.07] text-sm text-muted focus:outline-none focus:border-cinema/40 transition-colors"
            >
              {years.map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-4 sm:px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div
                key="grid"
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                <AnimatePresence>
                  {filtered.map((project, i) => (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                    >
                      <ProjectCard project={project} index={i} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-24 text-muted"
              >
                <p className="text-lg font-display">No projects match that filter.</p>
                <button
                  onClick={() => { setActiveTag('All'); setSearch(''); setYear('All') }}
                  className="mt-4 text-sm text-cinema hover:text-cinemaHover transition-colors"
                >
                  Clear filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 sm:px-6 border-t border-white/[0.05]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-text mb-3">
            Want to work together?
          </h2>
          <p className="text-muted mb-6">Open to full-time remote engineering roles, contract work, and consulting.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cinema hover:bg-cinemaHover text-white font-semibold text-sm transition-all shadow-lg shadow-cinema/20 hover:-translate-y-0.5"
            >
              Get in Touch <ArrowRight size={15} />
            </Link>
            <Link
              to="/cv"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-surface hover:bg-surface2 border border-white/[0.08] text-muted hover:text-text font-medium text-sm transition-all"
            >
              <Download size={14} /> Download CV
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
