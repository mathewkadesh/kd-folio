import { motion } from 'framer-motion'
import type { ElementType } from 'react'
import {
  SiReact, SiTypescript, SiTailwindcss, SiFramer,
  SiNodedotjs, SiFastapi, SiPython, SiSupabase, SiPostgresql,
  SiGit, SiDocker, SiVite, SiFigma, SiGithubactions,
} from 'react-icons/si'
import { Brain, Sparkles, Network, Workflow } from 'lucide-react'
import type { Skill } from '@/data/skills'

interface IconEntry {
  Icon: ElementType
  color: string
}

const skillIcons: Record<string, IconEntry> = {
  'React':                { Icon: SiReact,          color: '#61DAFB' },
  'TypeScript':           { Icon: SiTypescript,     color: '#3178C6' },
  'Tailwind CSS':         { Icon: SiTailwindcss,    color: '#06B6D4' },
  'Framer Motion':        { Icon: SiFramer,         color: '#9B6DFF' },
  'Node.js':              { Icon: SiNodedotjs,      color: '#5FA04E' },
  'FastAPI':              { Icon: SiFastapi,        color: '#009688' },
  'Python':               { Icon: SiPython,         color: '#3776AB' },
  'Supabase':             { Icon: SiSupabase,       color: '#3FCF8E' },
  'PostgreSQL':           { Icon: SiPostgresql,     color: '#4169E1' },
  'Claude API / LLMs':    { Icon: Brain,            color: '#E5623A' },
  'LangChain':            { Icon: Network,          color: '#1C8A6E' },
  'RAG Pipelines':        { Icon: Brain,            color: '#A78BFA' },
  'Prompt Engineering':   { Icon: Sparkles,         color: '#FBBF24' },
  'Git / GitHub':         { Icon: SiGit,            color: '#F05032' },
  'Docker':               { Icon: SiDocker,         color: '#2496ED' },
  'Vite':                 { Icon: SiVite,           color: '#646CFF' },
  'Figma':                { Icon: SiFigma,          color: '#F24E1E' },
  'CI/CD':                { Icon: SiGithubactions,  color: '#2088FF' },
}

interface Props {
  skill: Skill
  index?: number
}

export default function SkillBar({ skill, index = 0 }: Props) {
  const entry = skillIcons[skill.name]

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-1.5"
    >
      <div className="flex justify-between items-center gap-2">
        <div className="flex items-center gap-2 min-w-0">
          {entry && (
            <span
              className="shrink-0 w-[18px] h-[18px] flex items-center justify-center"
              style={{ color: entry.color }}
            >
              <entry.Icon size={16} />
            </span>
          )}
          <span className="text-sm font-medium text-text truncate">{skill.name}</span>
        </div>
        <span className="text-xs font-mono text-faint shrink-0">{skill.level}%</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-surface2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.04 + 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-cinema to-ember"
        />
      </div>
    </motion.div>
  )
}
