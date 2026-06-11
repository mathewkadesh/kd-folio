export type SkillCategory = 'All' | 'Frontend' | 'Backend' | 'AI' | 'Tooling'

export interface Skill {
  name: string
  level: number
  category: SkillCategory
}

export const skills: Skill[] = [
  { name: 'React',          level: 92, category: 'Frontend' },
  { name: 'TypeScript',     level: 90, category: 'Frontend' },
  { name: 'Tailwind CSS',   level: 90, category: 'Frontend' },
  { name: 'Framer Motion',  level: 85, category: 'Frontend' },
  { name: 'Node.js',        level: 84, category: 'Backend'  },
  { name: 'FastAPI',        level: 82, category: 'Backend'  },
  { name: 'Python',         level: 78, category: 'Backend'  },
  { name: 'Supabase',       level: 88, category: 'Backend'  },
  { name: 'PostgreSQL',     level: 80, category: 'Backend'  },
  { name: 'Claude API / LLMs', level: 88, category: 'AI'   },
  { name: 'LangChain',      level: 76, category: 'AI'       },
  { name: 'RAG Pipelines',  level: 78, category: 'AI'       },
  { name: 'Prompt Engineering', level: 86, category: 'AI'  },
  { name: 'Git / GitHub',   level: 86, category: 'Tooling'  },
  { name: 'Docker',         level: 72, category: 'Tooling'  },
  { name: 'Vite',           level: 88, category: 'Tooling'  },
  { name: 'Figma',          level: 80, category: 'Tooling'  },
  { name: 'CI/CD',          level: 74, category: 'Tooling'  },
]

export const skillCategories: SkillCategory[] = ['All', 'Frontend', 'Backend', 'AI', 'Tooling']

export interface SoftSkill {
  icon: string
  title: string
  description: string
}

export const softSkills: SoftSkill[] = [
  {
    icon: 'Target',
    title: 'Ownership',
    description: 'I ship end-to-end and take responsibility for outcomes, not just deliverables. If it\'s broken in prod, I fix it.',
  },
  {
    icon: 'MessageSquare',
    title: 'Communication',
    description: 'Technical but never jargon-heavy. I translate complexity for stakeholders and stay async-first for remote teams.',
  },
  {
    icon: 'Lightbulb',
    title: 'Problem Solving',
    description: 'I dig into root causes rather than patching symptoms. Comfortable with ambiguous briefs and incomplete requirements.',
  },
  {
    icon: 'Clock',
    title: 'Time Management',
    description: 'I break large work into shippable increments and communicate blockers early. Deadlines are a commitment, not a suggestion.',
  },
  {
    icon: 'TrendingUp',
    title: 'Impact Focus',
    description: 'I ask "what does success look like?" before writing a line of code. Features exist to move metrics, not to check boxes.',
  },
  {
    icon: 'Gem',
    title: 'Polish',
    description: 'I care about the last 10% — the animation curve, the error state, the edge case. Details are what separates good from great.',
  },
]
