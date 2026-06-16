import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'
import { cardHover, fadeUp } from '@/lib/motion'
import MediaSlot from './MediaSlot'
import type { Project } from '@/data/projects'

interface Props {
  project: Project
  index?: number
}

const statusColor: Record<string, string> = {
  live:             'bg-green-500/15 text-green-400 border-green-500/30',
  'in-development': 'bg-blue-500/15 text-blue-400 border-blue-500/30',
  delivered:        'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  building:         'bg-yellow-500/15 text-yellow-400 border-yellow-500/30',
  demo:             'bg-purple-500/15 text-purple-400 border-purple-500/30',
}

export default function ProjectCard({ project, index = 0 }: Props) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      custom={index}
      className="group relative flex flex-col rounded-xl overflow-hidden bg-surface border border-white/[0.07] hover:border-cinema/40 transition-colors duration-300"
      style={{ willChange: 'transform' }}
      whileHover={cardHover.hover}
      animate={cardHover.rest}
    >
      {/* Poster */}
      <Link to={`/projects/${project.slug}`} className="relative overflow-hidden block">
        <MediaSlot id={project.mediaId} className="rounded-none transition-transform duration-500 group-hover:scale-[1.04]" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-ink/80 backdrop-blur-sm text-text text-sm font-medium border border-white/20">
            View Details <ArrowRight size={13} />
          </span>
        </div>
      </Link>

      {/* Body */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        {/* Status + Year */}
        <div className="flex items-center justify-between">
          <span className={cn('text-xs font-mono px-2 py-0.5 rounded-full border', statusColor[project.status])}>
            {project.statusLabel}
          </span>
          <span className="text-xs font-mono text-faint">{project.year}</span>
        </div>

        {/* Metric badge */}
        {project.metric && (
          <p className="text-sm font-mono font-semibold text-cinema leading-none">{project.metric}</p>
        )}

        {/* Title + tagline */}
        <div>
          <Link to={`/projects/${project.slug}`}>
            <h3 className="font-display text-lg font-semibold text-text leading-tight hover:text-cinema transition-colors">
              {project.title}
            </h3>
          </Link>
          <p className="text-sm text-muted mt-1 leading-relaxed line-clamp-2">{project.tagline}</p>
        </div>

        {/* Stack pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, 5).map((tech) => (
            <span key={tech} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-surface2 text-muted border border-white/[0.06]">
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 mt-auto pt-3 border-t border-white/[0.06]">
          <Link
            to={`/projects/${project.slug}`}
            className="flex items-center gap-1.5 text-xs font-medium text-cinema hover:text-cinemaHover transition-colors"
          >
            View Details <ArrowRight size={13} />
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} — live site`}
              className="flex items-center gap-1.5 text-xs font-medium text-muted hover:text-text transition-colors ml-auto"
            >
              Live <ExternalLink size={12} />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} — GitHub repository`}
              className="flex items-center gap-1.5 text-xs font-medium text-muted hover:text-text transition-colors"
            >
              Repo <Github size={12} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
