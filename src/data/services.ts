export type ServiceCategory = 'All' | 'Development' | 'AI' | 'Design' | 'Consulting'

export interface Service {
  id: string
  title: string
  category: ServiceCategory
  description: string
  tags: string[]
  deliverables: string[]
  confidence: number
  icon: string
}

export const services: Service[] = [
  {
    id: 'fullstack-web',
    title: 'Full-Stack Web Development',
    category: 'Development',
    description:
      'End-to-end product builds — from database schema through REST/GraphQL API to polished React frontend. I own the whole stack so you get one engineer who understands every layer, not a handoff chain.',
    tags: ['React', 'TypeScript', 'Node.js', 'Supabase', 'Postgres'],
    deliverables: ['Production-ready web app', 'Database schema & migrations', 'REST API', 'Deployment pipeline'],
    confidence: 95,
    icon: 'Layers',
  },
  {
    id: 'ai-integration',
    title: 'AI Integration & LLM Pipelines',
    category: 'AI',
    description:
      'Design and build LLM-powered features into your product — structured prompting, tool use, RAG pipelines, and AI evaluation. I use Claude API as the default but am model-agnostic. No hype, just working production integrations.',
    tags: ['Claude API', 'LangChain', 'RAG', 'FastAPI', 'Python'],
    deliverables: ['Prompt architecture', 'Structured output pipeline', 'Evaluation framework', 'API service'],
    confidence: 92,
    icon: 'Brain',
  },
  {
    id: 'api-design',
    title: 'API Design & Backend Engineering',
    category: 'Development',
    description:
      'Design RESTful or GraphQL APIs that are a pleasure to consume — typed, documented, versioned, and tested. FastAPI for Python services; Node/Express or Hono for JS runtimes.',
    tags: ['FastAPI', 'Node.js', 'REST', 'OpenAPI', 'PostgreSQL'],
    deliverables: ['OpenAPI spec', 'Typed API service', 'Auth layer', 'Integration tests'],
    confidence: 88,
    icon: 'Plug',
  },
  {
    id: 'ui-engineering',
    title: 'UI/UX Engineering',
    category: 'Design',
    description:
      'React-based UIs that are fast, accessible, and feel alive — motion design with Framer Motion, component systems with Tailwind, responsive-first with real device testing. I bridge the design-to-code gap.',
    tags: ['React', 'Tailwind', 'Framer Motion', 'Figma', 'Accessibility'],
    deliverables: ['Component library', 'Responsive layouts', 'Animation system', 'Accessibility audit'],
    confidence: 90,
    icon: 'Sparkles',
  },
  {
    id: 'performance-a11y',
    title: 'Performance & Accessibility',
    category: 'Consulting',
    description:
      'Audit and improve your existing React app — Lighthouse scores, Core Web Vitals, WCAG AA compliance, bundle size, lazy loading, and image optimisation. Delivered as an audit report with a prioritised fix list.',
    tags: ['Lighthouse', 'WCAG', 'Core Web Vitals', 'Bundle Analysis'],
    deliverables: ['Audit report', 'Prioritised fix list', 'Implemented improvements', 'Lighthouse 90+ target'],
    confidence: 85,
    icon: 'Zap',
  },
  {
    id: 'technical-consulting',
    title: 'Technical Consulting',
    category: 'Consulting',
    description:
      'Architecture reviews, stack selection, and technical road-mapping for early-stage products. I can help you avoid the expensive rewrites by making the right calls early — database choice, auth strategy, deployment topology, AI readiness.',
    tags: ['Architecture', 'Stack Selection', 'AI Strategy', 'Roadmapping'],
    deliverables: ['Architecture doc', 'Stack recommendation', 'Risk register', 'Implementation roadmap'],
    confidence: 82,
    icon: 'Map',
  },
]

export const serviceCategories: ServiceCategory[] = ['All', 'Development', 'AI', 'Design', 'Consulting']
