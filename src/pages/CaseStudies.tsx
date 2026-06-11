import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeUp, stagger } from '@/lib/motion'
import SectionGlow from '@/components/SectionGlow'
import MediaSlot from '@/components/MediaSlot'
import { caseStudies } from '@/data/caseStudies'

export default function CaseStudies() {
  return (
    <div className="bg-ink min-h-screen pt-24">
      {/* Header */}
      <section className="relative px-4 sm:px-6 py-16">
        <SectionGlow />
        <div className="max-w-5xl mx-auto">
          <motion.div variants={stagger(0.08)} initial="hidden" animate="show">
            <motion.p variants={fadeUp} className="text-xs font-mono text-cinema tracking-widest uppercase mb-3">
              Deep Dives
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-display font-bold text-4xl sm:text-6xl text-text mb-4">
              Case Studies
            </motion.h1>
            <motion.p variants={fadeUp} className="text-muted text-lg max-w-xl">
              Problem → approach → architecture → outcome. The story behind the shipped product.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-4 sm:px-6 py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((cs, i) => (
            <motion.article
              key={cs.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group rounded-2xl overflow-hidden bg-surface border border-white/[0.07] hover:border-cinema/35 transition-colors"
            >
              <div className="overflow-hidden">
                <MediaSlot
                  id={cs.posterMediaId}
                  className="transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  {cs.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono px-2 py-0.5 rounded-md bg-surface2 text-muted border border-white/[0.06]">
                      {tag}
                    </span>
                  ))}
                  <span className="text-xs font-mono text-faint ml-auto">{cs.year}</span>
                </div>
                <h2 className="font-display font-bold text-2xl text-text mb-1">{cs.title}</h2>
                <p className="text-sm text-cinema font-medium mb-2">{cs.role}</p>
                <p className="text-sm text-muted leading-relaxed mb-4">{cs.tagline}</p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {cs.metrics.slice(0, 2).map((m) => (
                    <div key={m.label} className="p-3 rounded-lg bg-surface2 border border-white/[0.05]">
                      <div className="font-mono font-bold text-xl text-cinema">{m.value}</div>
                      <div className="text-xs text-faint mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>

                <Link
                  to={`/case-studies/${cs.slug}`}
                  className="flex items-center gap-2 text-sm font-semibold text-cinema hover:text-cinemaHover transition-colors"
                >
                  Read case study <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  )
}
