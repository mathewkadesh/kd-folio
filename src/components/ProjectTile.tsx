import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'
import MediaSlot from './MediaSlot'
import type { Project } from '@/data/projects'

interface Props {
  project: Project
}

const statusColor: Record<string, string> = {
  live:             'bg-green-500/15 text-green-400 border-green-500/30',
  'in-development': 'bg-blue-500/15 text-blue-400 border-blue-500/30',
  delivered:        'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  building:         'bg-yellow-500/15 text-yellow-400 border-yellow-500/30',
  demo:             'bg-purple-500/15 text-purple-400 border-purple-500/30',
}

export default function ProjectTile({ project }: Props) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group rounded-xl overflow-hidden bg-surface border border-white/[0.07] hover:border-cinema/40 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative overflow-hidden">
        <MediaSlot
          id={project.mediaId}
          className="rounded-none transition-transform duration-500 group-hover:scale-[1.05]"
        />
        {/* Solid scrim + detail, revealed on hover so it never fights the poster's own text */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-ink/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center justify-between mb-1.5">
            <span className={cn('text-[10px] font-mono px-1.5 py-0.5 rounded-full border', statusColor[project.status])}>
              {project.statusLabel}
            </span>
            <span className="text-[10px] font-mono text-white/50">{project.year}</span>
          </div>
          <p className="text-xs text-white/75 leading-relaxed line-clamp-3">{project.tagline}</p>
        </div>
      </div>
      <div className="p-3">
        <h4 className="font-display font-semibold text-text text-sm leading-tight truncate">{project.title}</h4>
      </div>
    </Link>
  )
}
