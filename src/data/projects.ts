export type ProjectStatus = 'live' | 'in-development' | 'delivered' | 'building' | 'demo'

export interface Project {
  id: string
  slug: string
  title: string
  tagline: string
  description: string
  stack: string[]
  tags: string[]
  status: ProjectStatus
  statusLabel: string
  year: number
  liveUrl?: string
  repoUrl?: string
  caseStudySlug?: string
  mediaId: string
  featured: boolean
  metric?: string
}

export const projects: Project[] = [
  {
    id: 'aptira',
    slug: 'aptira',
    title: 'Aptira',
    tagline: 'Career readiness infrastructure — CV scoring, gap analysis, and proof tracking in one workflow.',
    description:
      'Aptira scores a candidate\'s CV against their target role, surfaces exactly what\'s missing, and generates a personalised plan to close the gap. Built end-to-end: a deterministic scoring engine (Capability, Evidence, Role Fit, Professional Behaviour, Growth Trajectory) with a transparent methodology — no AI black box, same inputs always produce the same output, scored 0–850. React frontend, FastAPI scoring service, Supabase data layer, GDPR-compliant architecture. Currently in a controlled beta ahead of a planned August 2026 commercial launch.',
    stack: ['React', 'TypeScript', 'FastAPI', 'Supabase', 'Claude API', 'Tailwind'],
    tags: ['React', 'AI', 'Full-Stack'],
    status: 'building',
    statusLabel: '🟡 Controlled Beta',
    year: 2026,
    liveUrl: 'https://aptira.uk',
    caseStudySlug: 'aptira',
    mediaId: 'aptira-poster',
    featured: true,
    metric: 'Controlled beta · 11 early users',
  },
  {
    id: 'pitchghost',
    slug: 'pitchghost',
    title: 'PitchGhost',
    tagline: 'Founder intelligence before you pitch — VC dossiers, thesis mapping, pitch confidence scoring',
    description:
      'PitchGhost generates structured intelligence dossiers on VC firms and partners: investment thesis, what they reward, what kills a deal, and a personalised follow-up email. Tracks 72 firms across 14 sectors and 4 regions, with a Pitch Confidence Index scoring Thesis Alignment, Stage Fit, Sector Match, Partner Focus, and Check Size.',
    stack: ['React', 'TypeScript', 'Vite', 'Claude API', 'Tailwind'],
    tags: ['React', 'AI'],
    status: 'live',
    statusLabel: '🟢 Live',
    year: 2026,
    liveUrl: 'https://mathewkadesh.github.io/PitchGhost/',
    repoUrl: 'https://github.com/mathewkadesh/PitchGhost',
    mediaId: 'pitchghost-poster',
    featured: true,
    metric: '72 VC firms indexed',
  },
  {
    id: 'flood',
    slug: 'flood-monitoring',
    title: 'Flood Monitor',
    tagline: 'Real-time flood risk pipeline dashboard — 3,694 stations, live Environment Agency data',
    description:
      'Built during a contract engagement at AECOM, this tool ingests live Environment Agency sensor data across England & Wales and renders a real-time pipeline dashboard. Enables field engineers and stakeholders to monitor developing flood events, track station health, and prioritise response in real time.',
    stack: ['React', 'Node.js', 'TypeScript', 'Leaflet', 'D3.js', 'REST APIs'],
    tags: ['React', 'Full-Stack', 'Node'],
    status: 'delivered',
    statusLabel: '✅ Delivered',
    year: 2026,
    liveUrl: 'https://mathewkadesh.github.io/flood-monitoring/',
    caseStudySlug: 'flood-monitoring',
    mediaId: 'flood-poster',
    featured: true,
    metric: '3,694 live stations',
  },
  {
    id: 'faithconnect',
    slug: 'faithconnect',
    title: 'Faith Heroes',
    tagline: '"Every Story. A Sacred Gift." — handcrafted Bible story gift boxes for children & families',
    description:
      'Full e-commerce and community platform for Faith Heroes — a brand bringing Scripture to life through handcrafted Bible story gift boxes. Features a full shop with customisable box builder, community story-sharing, testimonials, newsletter, and a "From Story to Doorstep" fulfilment flow. Built with React, Node.js, and Stripe for payments.',
    stack: ['React', 'Node.js', 'Supabase', 'Stripe', 'TypeScript', 'Tailwind'],
    tags: ['React', 'Full-Stack', 'Node'],
    status: 'live',
    statusLabel: '🟢 Live',
    year: 2026,
    liveUrl: 'https://mathewkadesh.github.io/faith-heroes/',
    mediaId: 'faithconnect-poster',
    featured: false,
  },
  {
    id: 'pappu-dosa',
    slug: 'pappu-dosa',
    title: 'Pappu Dosa',
    tagline: 'Bristol-made South Indian restaurant site — crispy dosas, two locations, online ordering',
    description:
      'Marketing and ordering site for Pappu, a Bristol-based South Indian restaurant serving freshly made dosas, thalis and chutneys across Easton and Patchway. Built as an editorial, food-forward experience: a scroll-driven "tawa" storytelling section, a browsable menu with pricing and dietary tags, dual-location finder with directions and ordering links, and a franchise/catering path for future growth.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    tags: ['React'],
    status: 'live',
    statusLabel: '🟢 Live',
    year: 2026,
    liveUrl: 'https://mathewkadesh.github.io/pappu-dosa/',
    mediaId: 'pappu-dosa-poster',
    featured: false,
  },
  {
    id: 'aos-signals',
    slug: 'aos-signals',
    title: 'AO Signals',
    tagline: 'Trading education platform — strategy, educational signals, live analysis and coaching',
    description:
      'Revamped marketing and membership site for AO Signals, a founder-led forex trading education brand. Brings the trading course, educational signals, regular live market analysis, and a private member community into one connected learning experience. Built around a clear "learn before you act" philosophy: a three-step journey (learn the strategy, see expert execution, develop with the community), tiered membership plans (monthly / six-month / annual, plus an optional AOS Robot technology add-on), and dedicated market insights and community sections — with risk disclosures built into the copy throughout.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    tags: ['React', 'Full-Stack'],
    status: 'live',
    statusLabel: '🟢 Live',
    year: 2026,
    liveUrl: 'https://mathewkadesh.github.io/aosignals-revamp',
    mediaId: 'aos-signals-poster',
    featured: false,
  },
  {
    id: 'lumino',
    slug: 'lumino',
    title: 'Lumino',
    tagline: 'LED window displays for Bristol\'s independents — zero-cost installation, one flat monthly fee',
    description:
      'Marketing and booking site for Lumino, a Bristol-based service that fits cafés, restaurants and independent shops with digital LED window displays. Built around a "no big bill, no surprises" pricing model — free installation, free design refreshes, and a simple tiered monthly plan with an interactive savings calculator to show shop owners exactly what they save versus printed menus.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Recharts'],
    tags: ['React'],
    status: 'live',
    statusLabel: '🟢 Live',
    year: 2026,
    liveUrl: 'https://mathewkadesh.github.io/lumino/',
    mediaId: 'lumino-poster',
    featured: false,
  },
  {
    id: 'note-translator',
    slug: 'note-translator',
    title: 'Note Translator',
    tagline: 'Flutter phrasebook app — save custom phrases and translate them across 50+ languages',
    description:
      'Early-career Flutter app for travellers and language learners. Users save everyday phrases, organise them into a personal phrasebook, and translate the whole list on demand. Includes a language subscription screen for managing which of 50+ languages are active for translation.',
    stack: ['Flutter', 'Dart', 'Translation API'],
    tags: ['Mobile'],
    status: 'demo',
    statusLabel: '📱 Prototype',
    year: 2022,
    mediaId: 'note-translator-poster',
    featured: false,
  },
  {
    id: 'employee-registration',
    slug: 'employee-registration',
    title: 'Employee Registration',
    tagline: 'Flutter CRUD app for managing employee records — add, edit, search, and remove staff',
    description:
      'A staff management app built to practise full CRUD flows in Flutter. Lists employees with search, supports adding new staff with photo, contact details and employment type (Permanent/Temporary), and includes confirm-before-delete dialogs to prevent accidental data loss.',
    stack: ['Flutter', 'Dart', 'SQLite'],
    tags: ['Mobile'],
    status: 'demo',
    statusLabel: '📱 Prototype',
    year: 2022,
    mediaId: 'employee-registration-poster',
    featured: false,
  },
  {
    id: 'doctor-appointment',
    slug: 'doctor-appointment',
    title: 'Doctor Appointment',
    tagline: 'Flutter healthcare booking app — find clinics on a map, pick a date & time, track status',
    description:
      'A patient-facing booking app for healthcare appointments. Combines a Google Maps view for locating nearby clinics with a date/time picker for scheduling, and an appointments list that tracks booking status (e.g. Pending) at a glance.',
    stack: ['Flutter', 'Dart', 'Google Maps API'],
    tags: ['Mobile'],
    status: 'demo',
    statusLabel: '📱 Prototype',
    year: 2022,
    mediaId: 'doctor-appointment-poster',
    featured: false,
  },
  {
    id: 'firestore-maps-toolkit',
    slug: 'firestore-maps-toolkit',
    title: 'Firestore & Maps Toolkit',
    tagline: 'Flutter + Firebase experiments — Cloud Firestore CRUD forms and Google Maps integration',
    description:
      'A pair of early Flutter + Firebase experiments: a form that writes and reads records straight to Cloud Firestore (with a live "all data" view), and a Google Maps integration plotting nearby points of interest. Foundational work that fed into later location- and data-driven apps.',
    stack: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore', 'Google Maps API'],
    tags: ['Mobile'],
    status: 'demo',
    statusLabel: '📱 Prototype',
    year: 2022,
    mediaId: 'firestore-maps-toolkit-poster',
    featured: false,
  },
]

export const allTags = ['All', 'React', 'AI', 'Full-Stack', 'Node', 'Figma', 'Mobile'] as const
export type ProjectTag = (typeof allTags)[number]
