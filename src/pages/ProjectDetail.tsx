import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github, Check } from 'lucide-react'
import { cn } from '@/lib/cn'
import { fadeUp, stagger } from '@/lib/motion'
import MediaSlot from '@/components/MediaSlot'
import { projects } from '@/data/projects'
import { projectDetails } from '@/data/projectDetails'

const statusColor: Record<string, string> = {
  live:             'bg-green-500/15 text-green-400 border-green-500/30',
  'in-development': 'bg-blue-500/15 text-blue-400 border-blue-500/30',
  delivered:        'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  building:         'bg-yellow-500/15 text-yellow-400 border-yellow-500/30',
  demo:             'bg-purple-500/15 text-purple-400 border-purple-500/30',
}

const mobileScreenshotCols: Record<number, string> = {
  4: 'sm:grid-cols-4',
  5: 'sm:grid-cols-5',
  6: 'sm:grid-cols-6',
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)
  const detail  = projectDetails[slug ?? '']

  if (!project) return <Navigate to="/projects" replace />

  return (
    <div className="bg-ink min-h-screen pt-24">
      {/* ── HERO ── */}
      <section className="relative">
        <MediaSlot id={detail?.bannerMediaId ?? project.mediaId} className="w-full opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink from-30% via-ink/80 to-ink/10" />

        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 pb-10 z-10">
          <div className="max-w-5xl mx-auto">
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-text transition-colors mb-5"
            >
              <ArrowLeft size={14} /> Back to Projects
            </Link>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${statusColor[project.status]}`}>
                {project.statusLabel}
              </span>
              <span className="text-xs font-mono text-faint">{project.year}</span>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-5xl text-text leading-tight">
              {project.title}
            </h1>
            <p className="text-muted mt-2 text-lg max-w-2xl">{project.tagline}</p>
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <article className="px-4 sm:px-6 py-14">
        <div className="max-w-5xl mx-auto flex flex-col gap-14">

          {/* Meta strip */}
          <motion.div
            variants={stagger(0.07)}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {[
              { label: 'Client',   value: detail?.client ?? '—' },
              { label: 'Role',     value: detail?.role   ?? '—' },
              { label: 'Duration', value: detail?.duration ?? '—' },
              { label: 'Year',     value: String(project.year) },
            ].map((m) => (
              <motion.div
                key={m.label}
                variants={fadeUp}
                className="p-4 rounded-xl bg-surface border border-white/[0.07]"
              >
                <p className="text-xs text-faint mb-1">{m.label}</p>
                <p className="text-sm font-medium text-text">{m.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Metrics row (if available) */}
          {detail?.metrics && (
            <motion.div
              variants={stagger(0.06)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {detail.metrics.map((m) => (
                <motion.div
                  key={m.label}
                  variants={fadeUp}
                  className="p-4 rounded-xl bg-cinema/8 border border-cinema/20 text-center"
                >
                  <div className="font-mono font-bold text-2xl sm:text-3xl text-cinema">{m.value}</div>
                  <div className="text-xs text-muted mt-1">{m.label}</div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel>Overview</SectionLabel>
            <p className="text-muted leading-relaxed text-base mb-6">{project.description}</p>

            {detail?.highlights && (
              <ul className="flex flex-col gap-3">
                {detail.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-cinema/15 border border-cinema/30 flex items-center justify-center">
                      <Check size={11} className="text-cinema" />
                    </span>
                    <span className="text-sm text-muted leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>

          {/* Tech Stack */}
          {detail?.stackGroups && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionLabel>Tech Stack</SectionLabel>
              <div className="flex flex-col gap-5">
                {detail.stackGroups.map((group) => (
                  <div key={group.label} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                    <span className="shrink-0 text-xs font-mono text-cinema w-24 pt-0.5 uppercase tracking-wide">
                      {group.label}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="text-sm px-3 py-1.5 rounded-lg bg-surface border border-white/[0.08] text-text font-medium hover:border-cinema/30 transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Color Palette */}
          {detail?.colorTheme && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionLabel>Colour Palette</SectionLabel>
              <div className="flex flex-wrap gap-4">
                {detail.colorTheme.map((swatch) => (
                  <div key={swatch.hex} className="flex flex-col items-center gap-2">
                    <div
                      className="w-16 h-16 rounded-xl border border-white/[0.12] shadow-lg"
                      style={{ backgroundColor: swatch.hex }}
                    />
                    <div className="text-center">
                      <p className="text-xs font-medium text-text">{swatch.name}</p>
                      <p className="text-[10px] font-mono text-faint">{swatch.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Screenshots */}
          {detail?.screenshotIds && detail.screenshotIds.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionLabel>Screenshots</SectionLabel>
              <div
                className={cn(
                  'grid gap-4 items-start',
                  project.tags.includes('Mobile')
                    ? cn('grid-cols-2', mobileScreenshotCols[detail.screenshotIds.length] ?? 'sm:grid-cols-4')
                    : 'grid-cols-1 sm:grid-cols-2',
                )}
              >
                {detail.screenshotIds.map((id) => (
                  <motion.div
                    key={id}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.25 }}
                    className="rounded-xl overflow-hidden border border-white/[0.07] hover:border-cinema/30 transition-colors"
                  >
                    <MediaSlot id={id} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap gap-3 pt-2 border-t border-white/[0.06]"
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cinema hover:bg-cinemaHover text-white font-semibold text-sm transition-all shadow-lg shadow-cinema/25 hover:-translate-y-0.5"
              >
                Visit Live Site <ExternalLink size={14} />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-surface hover:bg-surface2 border border-white/[0.08] text-text font-semibold text-sm transition-all hover:-translate-y-0.5"
              >
                <Github size={15} /> View Source
              </a>
            )}
            <Link
              to="/projects"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-transparent border border-white/[0.06] text-muted hover:text-text font-medium text-sm transition-all hover:-translate-y-0.5 ml-auto"
            >
              <ArrowLeft size={14} /> All Projects
            </Link>
          </motion.div>

        </div>
      </article>
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <p className="text-xs font-mono text-cinema tracking-widest uppercase">{children}</p>
      <div className="flex-1 h-px bg-white/[0.06]" />
    </div>
  )
}
