export interface ColorSwatch {
  name: string
  hex: string
}

export interface StackGroup {
  label: string
  items: string[]
}

export interface ProjectDetailData {
  slug: string
  bannerMediaId: string
  screenshotIds: string[]
  colorTheme: ColorSwatch[]
  stackGroups: StackGroup[]
  highlights: string[]
  role: string
  client: string
  duration: string
  metrics?: { label: string; value: string }[]
}

export const projectDetails: Record<string, ProjectDetailData> = {
  aptira: {
    slug: 'aptira',
    bannerMediaId: 'aptira-banner',
    screenshotIds: ['aptira-screen1', 'aptira-screen2', 'aptira-screen3', 'aptira-screen4'],
    colorTheme: [
      { name: 'Midnight', hex: '#0f172a' },
      { name: 'Cyan',     hex: '#06b6d4' },
      { name: 'Emerald',  hex: '#10b981' },
      { name: 'Surface',  hex: '#1e293b' },
      { name: 'Text',     hex: '#f8fafc' },
    ],
    stackGroups: [
      { label: 'Frontend',        items: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'] },
      { label: 'Backend',         items: ['FastAPI', 'Python'] },
      { label: 'AI / ML',         items: ['Claude API', 'LangChain', 'Prompt Engineering'] },
      { label: 'Database',        items: ['Supabase', 'PostgreSQL'] },
      { label: 'Infrastructure',  items: ['Vercel', 'Fly.io', 'Docker', 'Stripe'] },
    ],
    highlights: [
      'Deterministic 5-pillar scoring model — same inputs always produce the same output, fully auditable',
      'Claude API integration for real-time market signal extraction from live job descriptions',
      'Shareable verified candidate snapshot URL for employer review',
      'Dedicated employer portal — pre-verified profiles, no CV interpretation required',
      'Three-tier Stripe subscription model (FREE / PRO £11.99/mo / Enterprise)',
    ],
    role: 'Full-Stack Engineer & AI Architect',
    client: 'Personal Product',
    duration: '4 months',
    metrics: [
      { label: 'Candidates Verified', value: '2,400+' },
      { label: 'Platform Rating',     value: '4.8 ★' },
      { label: 'Shortlist Reduction', value: '40%' },
      { label: 'Candidate Fit',       value: '94%' },
    ],
  },

  'socialpulse-ai': {
    slug: 'socialpulse-ai',
    bannerMediaId: 'socialpulse-poster',
    screenshotIds: ['socialpulse-poster'],
    colorTheme: [
      { name: 'Deep Indigo', hex: '#1e1b4b' },
      { name: 'Indigo',      hex: '#6366f1' },
      { name: 'Violet',      hex: '#8b5cf6' },
      { name: 'Surface',     hex: '#312e81' },
      { name: 'Text',        hex: '#f5f3ff' },
    ],
    stackGroups: [
      { label: 'Frontend',      items: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Leaflet'] },
      { label: 'Backend',       items: ['Node.js', 'Supabase'] },
      { label: 'AI',            items: ['Claude API'] },
      { label: 'Integrations',  items: ['Meta Graph API'] },
      { label: 'Database',      items: ['Supabase', 'PostgreSQL'] },
    ],
    highlights: [
      'Multi-tenant SaaS with isolated workspace per business',
      'Meta Graph API for post scheduling and detailed analytics',
      'Claude-powered content generation and caption suggestions',
      'Competitor radar built on local search data, visualised with Leaflet',
      'Real-time dashboard showing engagement across all connected channels',
    ],
    role: 'Full-Stack Engineer',
    client: 'Personal Product',
    duration: 'Ongoing',
  },

  'flood-monitoring': {
    slug: 'flood-monitoring',
    bannerMediaId: 'flood-banner',
    screenshotIds: ['flood-screen1'],
    colorTheme: [
      { name: 'Deep Navy',  hex: '#0c1a2e' },
      { name: 'Sky Blue',   hex: '#0284c7' },
      { name: 'Alert Blue', hex: '#1d4ed8' },
      { name: 'Surface',    hex: '#0f2744' },
      { name: 'Ice Text',   hex: '#e0f2fe' },
    ],
    stackGroups: [
      { label: 'Frontend',    items: ['React 18', 'TypeScript', 'Leaflet', 'D3.js'] },
      { label: 'Backend',     items: ['Node.js'] },
      { label: 'APIs',        items: ['Environment Agency Flood Monitoring API'] },
      { label: 'Deployment',  items: ['GitHub Pages', 'Service Workers (offline cache)'] },
    ],
    highlights: [
      '200+ Environment Agency sensor feeds aggregated and normalised every 15 minutes',
      'Interactive Leaflet map with GeoJSON risk overlays colour-coded by severity level',
      'D3.js sparklines showing historical sensor trends per catchment area',
      'Mobile-first, tablet-optimised layout for field use on-site',
      'Offline-capable via service workers — last known state available without signal',
    ],
    role: 'Front-End Engineer (Contract)',
    client: 'AECOM',
    duration: '3 months',
    metrics: [
      { label: 'Sensor Feeds',        value: '200+' },
      { label: 'Map Refresh',         value: 'Every 15min' },
      { label: 'Decision Time Cut',   value: '~40%' },
      { label: 'Field Teams',         value: '12' },
    ],
  },

  atlasgym: {
    slug: 'atlasgym',
    bannerMediaId: 'atlasgym-poster',
    screenshotIds: ['atlasgym-poster'],
    colorTheme: [
      { name: 'Charcoal',   hex: '#1c1917' },
      { name: 'Orange',     hex: '#f97316' },
      { name: 'Amber',      hex: '#eab308' },
      { name: 'Surface',    hex: '#292524' },
      { name: 'Cream',      hex: '#fef3c7' },
    ],
    stackGroups: [
      { label: 'Frontend',   items: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
      { label: 'Backend',    items: ['Supabase', 'PostgreSQL'] },
      { label: 'Auth',       items: ['Supabase Auth', 'Row Level Security'] },
    ],
    highlights: [
      'Class booking system with real-time availability and waitlist management',
      'Membership lifecycle — sign-up, renewal, freeze, cancellation flows',
      'Staff scheduling module with role-based access control',
      'Analytics dashboard with revenue trends, attendance, and retention metrics',
      'Multi-tenant isolation via Supabase Row Level Security',
    ],
    role: 'Full-Stack Engineer',
    client: 'Personal Product',
    duration: 'Ongoing',
  },

  faithconnect: {
    slug: 'faithconnect',
    bannerMediaId: 'faithconnect-banner',
    screenshotIds: ['faithconnect-screen1', 'faithconnect-screen2'],
    colorTheme: [
      { name: 'Night Ink',  hex: '#1e1b4b' },
      { name: 'Gold',       hex: '#d97706' },
      { name: 'Violet',     hex: '#7c3aed' },
      { name: 'Warm Dark',  hex: '#2e2752' },
      { name: 'Cream',      hex: '#fffbeb' },
    ],
    stackGroups: [
      { label: 'Frontend',   items: ['React', 'TypeScript', 'Tailwind CSS'] },
      { label: 'Backend',    items: ['Node.js', 'Supabase'] },
      { label: 'Payments',   items: ['Stripe'] },
      { label: 'Deployment', items: ['GitHub Pages'] },
    ],
    highlights: [
      'Full e-commerce shop with customisable Bible story gift box builder',
      'Community story-sharing section for family testimonials',
      'Stripe-powered checkout with subscription and one-time purchase flows',
      'Newsletter integration and automated email flows for new orders',
      'Testimonials and social proof sections with animated transitions',
    ],
    role: 'Full-Stack Engineer',
    client: 'Faith Heroes',
    duration: '10 days',
  },

  lumino: {
    slug: 'lumino',
    bannerMediaId: 'lumino-banner',
    screenshotIds: ['lumino-poster', 'lumino-screen1'],
    colorTheme: [
      { name: 'Cream',   hex: '#faf6ee' },
      { name: 'Ember',   hex: '#f97316' },
      { name: 'Apricot', hex: '#fdba94' },
      { name: 'Ink',     hex: '#1c1917' },
      { name: 'Stone',   hex: '#78716c' },
    ],
    stackGroups: [
      { label: 'Frontend',  items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'] },
      { label: 'Data Viz',  items: ['Recharts'] },
      { label: 'Deployment', items: ['GitHub Pages'] },
    ],
    highlights: [
      'Editorial, magazine-style landing page with serif/sans pairing and warm cream palette',
      'Interactive savings calculator (Recharts) comparing LED display costs vs. printed menus',
      'Tiered pricing section — Starter / Growth / Premium — with a highlighted "most popular" plan',
      'Animated promo ticker for seasonal offers and limited install slots',
      'Local SEO baked in — LocalBusiness JSON-LD schema for Bristol-area search visibility',
    ],
    role: 'Full-Stack Engineer',
    client: 'Lumino (Bristol)',
    duration: '2 weeks',
  },

  'background-remover': {
    slug: 'background-remover',
    bannerMediaId: 'bgremover-poster',
    screenshotIds: ['bgremover-poster'],
    colorTheme: [
      { name: 'Deep Dark', hex: '#0f172a' },
      { name: 'Cyan',      hex: '#06b6d4' },
      { name: 'Teal',      hex: '#0891b2' },
      { name: 'Surface',   hex: '#164e63' },
      { name: 'Ice',       hex: '#ecfeff' },
    ],
    stackGroups: [
      { label: 'Frontend', items: ['React', 'TypeScript'] },
      { label: 'AI / ML',  items: ['TensorFlow.js', 'WebGL', 'BodyPix Segmentation'] },
    ],
    highlights: [
      'Runs entirely in-browser — zero images ever leave the device',
      'TensorFlow.js + WebGL-accelerated segmentation for fast processing',
      'Drag-and-drop image upload with instant preview',
      'One-click transparent PNG export',
      'Privacy-first architecture — no backend, no storage, no tracking',
    ],
    role: 'Full-Stack Engineer',
    client: 'Open Source Demo',
    duration: '2 weeks',
  },
}
