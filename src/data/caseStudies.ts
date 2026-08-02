export interface CaseStudyMetric {
  label: string
  value: string
}

export interface CaseStudySection {
  title: string
  body: string
  mediaId?: string
}

export interface CaseStudy {
  slug: string
  title: string
  role: string
  client: string
  year: number
  duration: string
  status: string
  bannerMediaId: string
  posterMediaId: string
  tagline: string
  tags: string[]
  stack: string[]
  metrics: CaseStudyMetric[]
  problem: string
  approach: CaseStudySection[]
  architecture: string
  outcome: string
  screenshotIds: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'aptira',
    title: 'Aptira',
    role: 'Full-Stack Engineer & AI Architect',
    client: 'Personal Product',
    year: 2024,
    duration: '4 months',
    status: '🟡 Controlled beta at aptira.uk · commercial launch Aug 2026',
    bannerMediaId: 'aptira-banner',
    posterMediaId: 'aptira-poster',
    tagline: 'Career readiness infrastructure — CV scoring, gap analysis, and proof tracking in one workflow.',
    tags: ['AI', 'Full-Stack', 'React', 'FastAPI'],
    stack: ['React 18', 'TypeScript', 'FastAPI', 'Supabase', 'Claude API', 'Tailwind CSS', 'Vite'],
    metrics: [
      { label: 'Beta Users', value: '11' },
      { label: 'Scoring Pillars', value: '5' },
      { label: 'Index Range', value: '0–850' },
      { label: 'Architecture', value: 'GDPR' },
    ],
    problem:
      'Job seekers lack a credible, evidence-backed signal to show employers — and employers waste time on candidates who look good on paper but aren\'t market-ready. Generic career tools give vague advice. Aptira was built to fix both sides: give candidates a transparent, auditable readiness score (not an AI black box) plus a concrete plan to close their gaps, and give employers a hiring signal they can trust.',
    approach: [
      {
        title: 'Deterministic Scoring Model',
        body: 'The Aptira Index is built on five weighted pillars: Capability (25%), Evidence (25%), Role Fit (25%), Professional Behaviour (20%), and Growth Trajectory (10%). Critically, the model is deterministic — same inputs always produce the same output. No AI black box, fully auditable. Score out of 850.',
        mediaId: 'aptira-screen2',
      },
      {
        title: 'Live Market Signal Layer',
        body: 'Claude API is used to parse job descriptions and extract current market signals (e.g. TypeScript, Stakeholder Comms, Delivery, Growth) and map them against the candidate\'s evidence. This keeps scoring aligned with what employers are actually hiring for in real time.',
        mediaId: 'aptira-screen1',
      },
      {
        title: 'Readiness Score & Gap Analysis',
        body: 'Each candidate gets a role-specific readiness score (e.g. 724/850, "Above Average") broken into Skills, Evidence, and Profile sub-scores, plus a ranked "Top gaps to close" list with completion percentages (e.g. Portfolio proof 76%, Interview examples 62%). A "Next best actions" checklist and a projected point gain from completing outstanding proof tasks turn the score into a concrete plan, not just a number.',
      },
      {
        title: 'Shareable Verified Snapshot',
        body: 'Candidates receive a public snapshot URL — a single link they can share with employers showing their verified Aptira Index, dimension breakdown, and evidence items. The React frontend renders the dashboard with live score updates as users complete evidence items.',
      },
      {
        title: 'Employer-Facing Dashboard',
        body: 'A dedicated employer portal lets hiring teams request snapshot access and review pre-verified candidate profiles before the first interview — full score breakdown, evidence items, and role-fit rating, no CV interpretation required.',
        mediaId: 'aptira-screen3',
      },
      {
        title: 'Monetisation — Pricing & Plans',
        body: 'Designed and implemented a three-tier pricing model (FREE, PRO at £11.99/month, Enterprise custom) with monthly, 6-month, and annual billing cycles. Stripe handles subscriptions; a full plan comparison table and add-on system are server-rendered for SEO.',
        mediaId: 'aptira-screen4',
      },
    ],
    architecture:
      'React 18 SPA → Supabase Auth → FastAPI scoring service (deterministic algorithm + Claude API for market signal extraction) → Supabase Postgres for persistence, GDPR-compliant by design. Deployed on Vercel (frontend) + Fly.io (API). Scoring logic is fully auditable.',
    outcome:
      'Aptira is live as a controlled beta with 11 onboarded users ahead of a planned August 2026 commercial launch. Core product — deterministic 5-pillar scoring (0–850 index), role-specific gap analysis with actionable next steps, and an employer snapshot dashboard — is built and functioning end-to-end. The "no black box" deterministic model is the key differentiator: candidates and employers can trust the score because it\'s transparent and auditable, not an AI guess.',
    screenshotIds: ['aptira-screen1', 'aptira-screen2', 'aptira-screen3', 'aptira-screen4'],
  },
  {
    slug: 'flood-monitoring',
    title: 'Flood Monitor — Pipeline Dashboard',
    role: 'Front-End Engineer (Contract)',
    client: 'AECOM',
    year: 2023,
    duration: '3 months',
    status: '✅ Delivered · Live demo: mathewkadesh.github.io/flood-monitoring',
    bannerMediaId: 'flood-banner',
    posterMediaId: 'flood-poster',
    tagline: 'Real-time flood risk visualisation for field engineers — 3,694 stations monitored, live pipeline dashboard.',
    tags: ['Full-Stack', 'React', 'Node'],
    stack: ['React 18', 'TypeScript', 'Node.js', 'Leaflet', 'D3.js', 'Environment Agency API'],
    metrics: [
      { label: 'Sensor Feeds Aggregated', value: '200+' },
      { label: 'Map Refresh Rate', value: 'Every 15min' },
      { label: 'Decision Time Reduction', value: '~40%' },
      { label: 'Field Teams Using Tool', value: '12' },
    ],
    problem:
      'During flood events, AECOM field engineers were correlating data from multiple spreadsheets and government portals — a slow, error-prone process when minutes matter. The ask: build a single tool that aggregates live sensor feeds and renders risk overlays on an interactive map engineers could open on a tablet in the field.',
    approach: [
      {
        title: 'Data Aggregation Layer',
        body: 'Built a Node.js service that polls the Environment Agency\'s Flood Monitoring API on a 15-minute schedule, normalises sensor readings, and computes risk scores per catchment area using a weighted threshold model agreed with the AECOM hydrology team.',
        mediaId: 'flood-screen1',
      },
      {
        title: 'Interactive Risk Map',
        body: 'React + Leaflet front-end with custom GeoJSON overlays colour-coded by risk level. Engineers can click any sensor or catchment polygon to get a detail panel with trend sparklines (D3.js), latest readings, and the risk score breakdown.',
      },
      {
        title: 'Responsive Field Interface',
        body: 'Designed mobile-first for tablet use on site. Offline-capable via service workers — the last known state is cached so engineers can consult it even in areas with poor signal.',
      },
    ],
    architecture:
      'Node.js polling service → REST data store → React + Leaflet SPA. The service layer runs as a cron job on a Node server; the frontend is a static build served from a CDN. No proprietary infrastructure — deployable anywhere with Docker.',
    outcome:
      'Delivered on time and adopted immediately by 12 field engineers across two flood events. The team reported roughly 40% reduction in the time taken to make resource-allocation decisions during active events.',
    screenshotIds: ['flood-screen1'],
  },
]
