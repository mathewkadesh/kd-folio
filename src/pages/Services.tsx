import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Layers, Brain, Plug, Sparkles, Zap, Map } from 'lucide-react'
import { fadeUp, stagger } from '@/lib/motion'
import { cn } from '@/lib/cn'
import SectionGlow from '@/components/SectionGlow'
import { services, serviceCategories, type ServiceCategory } from '@/data/services'

const iconMap: Record<string, React.ElementType> = {
  Layers, Brain, Plug, Sparkles, Zap, Map,
}

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('All')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    return services.filter((s) => {
      const matchCat = activeCategory === 'All' || s.category === activeCategory
      const q = search.toLowerCase()
      const matchSearch =
        !q ||
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.tags.some((t) => t.toLowerCase().includes(q))
      return matchCat && matchSearch
    })
  }, [activeCategory, search])

  return (
    <div className="bg-ink min-h-screen pt-24">
      {/* Header */}
      <section className="relative px-4 sm:px-6 py-16">
        <SectionGlow />
        <div className="max-w-5xl mx-auto">
          <motion.div variants={stagger(0.08)} initial="hidden" animate="show">
            <motion.p variants={fadeUp} className="text-xs font-mono text-cinema tracking-widest uppercase mb-3">
              What I Offer
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-display font-bold text-4xl sm:text-6xl text-text mb-4">
              Services
            </motion.h1>
            <motion.p variants={fadeUp} className="text-muted text-lg max-w-xl">
              Engineering capabilities available for remote work, contracts, and consulting.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-20 bg-ink/80 backdrop-blur-xl border-b border-white/[0.06] py-4 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center gap-3">
          <div className="flex flex-wrap gap-2">
            {serviceCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-3 py-1.5 rounded-lg text-sm font-medium transition-all',
                  activeCategory === cat
                    ? 'bg-cinema text-white shadow-lg shadow-cinema/25'
                    : 'bg-surface text-muted hover:text-text hover:bg-surface2 border border-white/[0.07]',
                )}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative ml-auto">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-faint" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search…"
              className="pl-8 pr-3 py-1.5 rounded-lg bg-surface border border-white/[0.07] text-sm text-text placeholder:text-faint focus:outline-none focus:border-cinema/40 w-40 sm:w-56 transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-4 sm:px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div
                key="grid"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                <AnimatePresence>
                  {filtered.map((service, i) => {
                    const Icon = iconMap[service.icon] ?? Layers
                    return (
                      <motion.article
                        key={service.id}
                        layout
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        className="group flex flex-col p-5 rounded-xl bg-surface border border-white/[0.07] hover:border-cinema/35 transition-colors"
                      >
                        {/* Icon + category */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-11 h-11 rounded-xl bg-cinema/10 flex items-center justify-center group-hover:bg-cinema/20 transition-colors">
                            <Icon size={22} className="text-cinema" />
                          </div>
                          <span className="text-xs font-mono px-2 py-1 rounded-md bg-surface2 text-faint border border-white/[0.05]">
                            {service.category}
                          </span>
                        </div>

                        <h3 className="font-display font-semibold text-text mb-2">{service.title}</h3>
                        <p className="text-sm text-muted leading-relaxed mb-4 flex-1">{service.description}</p>

                        {/* Deliverables */}
                        <ul className="flex flex-col gap-1.5 mb-4">
                          {service.deliverables.map((d) => (
                            <li key={d} className="flex items-center gap-2 text-xs text-muted">
                              <span className="w-1 h-1 rounded-full bg-cinema shrink-0" />
                              {d}
                            </li>
                          ))}
                        </ul>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {service.tags.map((tag) => (
                            <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-surface2 text-faint border border-white/[0.05]">
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Confidence bar */}
                        <div className="mt-auto">
                          <div className="flex justify-between text-xs text-faint mb-1">
                            <span>Delivery Confidence</span>
                            <span>{service.confidence}%</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-surface2 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${service.confidence}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                              className="h-full rounded-full bg-gradient-to-r from-cinema to-ember"
                            />
                          </div>
                        </div>
                      </motion.article>
                    )
                  })}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 text-muted"
              >
                <p className="font-display text-lg">No services match that filter.</p>
                <button
                  onClick={() => { setActiveCategory('All'); setSearch('') }}
                  className="mt-3 text-sm text-cinema hover:text-cinemaHover transition-colors"
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
            Ready to build?
          </h2>
          <p className="text-muted mb-6">
            Available for remote contracts, full-time roles, and AI consulting. Responding within 24–48h.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-cinema hover:bg-cinemaHover text-white font-semibold text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-cinema/20"
            >
              Let's talk
            </Link>
            <Link
              to="/cv"
              className="px-6 py-3 rounded-xl bg-surface hover:bg-surface2 border border-white/[0.08] text-muted hover:text-text font-medium text-sm transition-all"
            >
              Download CV
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
