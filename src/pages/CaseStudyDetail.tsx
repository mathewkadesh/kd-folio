import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { fadeUp, stagger } from '@/lib/motion'
import MediaSlot from '@/components/MediaSlot'
import { caseStudies } from '@/data/caseStudies'

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>()
  const cs = caseStudies.find((c) => c.slug === slug)

  if (!cs) return <Navigate to="/case-studies" replace />

  return (
    <div className="bg-ink min-h-screen pt-24">
      {/* Banner */}
      <section className="relative">
        <MediaSlot id={cs.bannerMediaId} className="w-full opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink from-30% via-ink/80 to-ink/10" />
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 pb-8 z-10">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-text transition-colors mb-4"
            >
              <ArrowLeft size={14} /> Back to Case Studies
            </Link>
            <div className="flex flex-wrap gap-2 mb-3">
              {cs.tags.map((tag) => (
                <span key={tag} className="text-xs font-mono px-2 py-0.5 rounded-md bg-cinema/20 text-cinema border border-cinema/30">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-5xl text-text">{cs.title}</h1>
            <p className="text-muted mt-2">{cs.role} · {cs.client} · {cs.year}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="px-4 sm:px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Meta row */}
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
          >
            {[
              { label: 'Client', value: cs.client },
              { label: 'Duration', value: cs.duration },
              { label: 'Year', value: String(cs.year) },
              { label: 'Status', value: cs.status },
            ].map((item) => (
              <motion.div key={item.label} variants={fadeUp} className="p-4 rounded-xl bg-surface border border-white/[0.07]">
                <p className="text-xs text-faint mb-1">{item.label}</p>
                <p className="text-sm font-medium text-text">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Metrics */}
          <motion.div
            variants={stagger(0.06)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
          >
            {cs.metrics.map((m) => (
              <motion.div key={m.label} variants={fadeUp} className="p-4 rounded-xl bg-cinema/8 border border-cinema/20 text-center">
                <div className="font-mono font-bold text-2xl sm:text-3xl text-cinema">{m.value}</div>
                <div className="text-xs text-muted mt-1">{m.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Problem */}
          <Section title="The Problem">
            <p className="text-muted leading-relaxed">{cs.problem}</p>
          </Section>

          {/* Approach */}
          <Section title="Approach">
            <div className="flex flex-col gap-8">
              {cs.approach.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <h3 className="font-display font-semibold text-text mb-3 flex items-center gap-2">
                    <span className="font-mono text-xs text-cinema">0{i + 1}</span>
                    {step.title}
                  </h3>
                  <p className="text-muted leading-relaxed mb-4">{step.body}</p>
                  {step.mediaId && (
                    <div className="rounded-xl overflow-hidden border border-white/[0.06]">
                      <MediaSlot id={step.mediaId} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </Section>

          {/* Architecture */}
          <Section title="Architecture">
            <div className="p-5 rounded-xl bg-surface2 border border-white/[0.07] font-mono text-sm text-muted leading-relaxed">
              {cs.architecture}
            </div>
          </Section>

          {/* Stack */}
          <Section title="Tech Stack">
            <div className="flex flex-wrap gap-2">
              {cs.stack.map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-lg bg-surface border border-white/[0.07] text-sm font-mono text-muted hover:border-cinema/30 transition-colors">
                  {t}
                </span>
              ))}
            </div>
          </Section>

          {/* Outcome */}
          <Section title="Outcome">
            <div className="p-5 rounded-xl bg-cinema/6 border border-cinema/20">
              <p className="text-muted leading-relaxed">{cs.outcome}</p>
            </div>
          </Section>

          {/* Screenshots */}
          {cs.screenshotIds.length > 0 && (
            <Section title="Screenshots">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cs.screenshotIds.map((id) => (
                  <div key={id} className="rounded-xl overflow-hidden border border-white/[0.06]">
                    <MediaSlot id={id} />
                  </div>
                ))}
              </div>
            </Section>
          )}

          {/* Nav */}
          <div className="mt-16 flex items-center justify-between border-t border-white/[0.06] pt-8">
            <Link to="/case-studies" className="flex items-center gap-2 text-muted hover:text-text transition-colors text-sm">
              <ArrowLeft size={14} /> All Case Studies
            </Link>
            <Link to="/contact" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cinema hover:bg-cinemaHover text-white text-sm font-semibold transition-colors">
              Work Together <ExternalLink size={13} />
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="font-display font-bold text-2xl text-text mb-5 pb-3 border-b border-white/[0.07]">
        {title}
      </h2>
      {children}
    </motion.section>
  )
}
