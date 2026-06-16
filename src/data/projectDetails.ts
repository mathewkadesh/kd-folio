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

  pitchghost: {
    slug: 'pitchghost',
    bannerMediaId: 'pitchghost-poster',
    screenshotIds: ['pitchghost-poster'],
    colorTheme: [
      { name: 'Charcoal',  hex: '#0b0a08' },
      { name: 'Amber',     hex: '#c9a227' },
      { name: 'Gold',      hex: '#e8c84a' },
      { name: 'Surface',   hex: '#1a1714' },
      { name: 'Cream',     hex: '#f5e6a3' },
    ],
    stackGroups: [
      { label: 'Frontend',  items: ['React', 'Vite', 'TypeScript', 'Tailwind CSS'] },
      { label: 'AI',        items: ['Claude API'] },
      { label: 'Fonts',     items: ['Spectral', 'Inter', 'JetBrains Mono'] },
      { label: 'Deploy',    items: ['GitHub Pages'] },
    ],
    highlights: [
      'Generates structured VC firm dossiers: thesis, dealbreakers, and what they reward',
      'Pitch Confidence Index scoring Thesis Alignment, Stage Fit, Sector Match, Partner Focus, Check Size',
      'Tracks 72 firms across 14 sectors and 4 regions with a live leaderboard',
      'AI-generated follow-up email personalised to the firm and partner',
      'Light/dark theme with system preference detection and localStorage persistence',
    ],
    role: 'Full-Stack Engineer',
    client: 'Personal Product',
    duration: '2 weeks',
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

  'note-translator': {
    slug: 'note-translator',
    bannerMediaId: 'note-translator-banner',
    screenshotIds: ['note-translator-screen1', 'note-translator-screen2', 'note-translator-screen3', 'note-translator-screen4'],
    colorTheme: [
      { name: 'Deep Teal', hex: '#091e22' },
      { name: 'Teal',      hex: '#2dd4bf' },
      { name: 'Cyan',      hex: '#22d3ee' },
      { name: 'Surface',   hex: '#0d2b30' },
      { name: 'Ice',       hex: '#ecfeff' },
    ],
    stackGroups: [
      { label: 'Mobile', items: ['Flutter', 'Dart'] },
      { label: 'APIs',   items: ['Translation API'] },
    ],
    highlights: [
      'Custom phrasebook — save everyday phrases for quick reuse while travelling or learning a language',
      'Bulk "Translate All" action runs every saved phrase through the translation API in one tap',
      'Language Subscription screen lets users choose which of 50+ languages stay active',
      'Add / Display / Edit Phrases flows built around a simple, single-purpose navigation menu',
      'Early Flutter project — first hands-on experience with stateful widgets and navigation',
    ],
    role: 'Mobile Developer (Personal Project)',
    client: 'Personal Project',
    duration: '2 weeks',
  },

  'employee-registration': {
    slug: 'employee-registration',
    bannerMediaId: 'employee-registration-banner',
    screenshotIds: ['employee-registration-screen1', 'employee-registration-screen2', 'employee-registration-screen3', 'employee-registration-screen4'],
    colorTheme: [
      { name: 'Midnight', hex: '#0a111e' },
      { name: 'Blue',     hex: '#3b82f6' },
      { name: 'Sky',      hex: '#60a5fa' },
      { name: 'Surface',  hex: '#0f1830' },
      { name: 'Frost',    hex: '#eff6ff' },
    ],
    stackGroups: [
      { label: 'Mobile',  items: ['Flutter', 'Dart'] },
      { label: 'Storage', items: ['SQLite'] },
    ],
    highlights: [
      'Full CRUD flow — add, edit, search and remove employee records',
      'New Employee form captures ID, name, contact details and employment type',
      'Permanent / Temporary radio toggle for tracking employment status',
      'Confirm-before-delete dialog to prevent accidental data loss',
      'Searchable employee list with quick edit/delete actions per row',
    ],
    role: 'Mobile Developer (Personal Project)',
    client: 'Personal Project',
    duration: '2 weeks',
  },

  'doctor-appointment': {
    slug: 'doctor-appointment',
    bannerMediaId: 'doctor-appointment-banner',
    screenshotIds: ['doctor-appointment-screen1', 'doctor-appointment-screen5', 'doctor-appointment-screen6', 'doctor-appointment-screen2', 'doctor-appointment-screen3', 'doctor-appointment-screen4'],
    colorTheme: [
      { name: 'Deep Green', hex: '#081b18' },
      { name: 'Emerald',    hex: '#34d399' },
      { name: 'Sky',        hex: '#38bdf8' },
      { name: 'Surface',    hex: '#0a2622' },
      { name: 'Mint',       hex: '#ecfdf5' },
    ],
    stackGroups: [
      { label: 'Mobile', items: ['Flutter', 'Dart'] },
      { label: 'APIs',   items: ['Google Maps API'] },
    ],
    highlights: [
      'Illustrated Welcome screen with Login/Signup entry points',
      'Google Maps integration for locating nearby clinics',
      'Date and time picker for scheduling appointments',
      'Appointments list tracks booking status (e.g. Pending) at a glance',
      'End-to-end booking flow from clinic discovery to confirmed appointment',
    ],
    role: 'Mobile Developer (Personal Project)',
    client: 'Personal Project',
    duration: '3 weeks',
  },

  'firestore-maps-toolkit': {
    slug: 'firestore-maps-toolkit',
    bannerMediaId: 'firestore-maps-toolkit-banner',
    screenshotIds: ['firestore-maps-toolkit-screen1', 'firestore-maps-toolkit-screen2', 'firestore-maps-toolkit-screen3', 'firestore-maps-toolkit-screen4'],
    colorTheme: [
      { name: 'Dark Brown', hex: '#1c130c' },
      { name: 'Amber',      hex: '#f59e0b' },
      { name: 'Orange',     hex: '#fb923c' },
      { name: 'Surface',    hex: '#261907' },
      { name: 'Cream',      hex: '#fffbeb' },
    ],
    stackGroups: [
      { label: 'Mobile',  items: ['Flutter', 'Dart'] },
      { label: 'Backend', items: ['Firebase', 'Cloud Firestore'] },
      { label: 'APIs',    items: ['Google Maps API'] },
    ],
    highlights: [
      'Form writes directly to Cloud Firestore and reads back saved records in real time',
      '"All Data" view lists every document synced from Firestore',
      'Google Maps integration plotting nearby points of interest (hospitals in Colombo)',
      'Early experiments combining Firebase backend services with Flutter UI',
      'Foundational groundwork that informed later location- and data-driven apps',
    ],
    role: 'Mobile Developer (Personal Project)',
    client: 'Personal Project',
    duration: '1 week',
  },
}
