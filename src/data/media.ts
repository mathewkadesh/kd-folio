export interface MediaEntry {
  id: string
  src?: string
  alt: string
  ratio: '16:9' | '1:1' | 'poster' | '3:2' | 'wide'
  purpose: string
  idealDimensions: string
  objectPosition?: string
}

export const mediaMap: Record<string, MediaEntry> = {
  'hero-bg': {
    id: 'hero-bg',
    alt: 'Hero background — cinematic dark scene',
    ratio: 'wide',
    purpose: 'Full-viewport hero background on the landing page',
    idealDimensions: '1920×1080px',
  },
  'hero-profile': {
    id: 'hero-profile',
    src: '/img/mathew-kadesh-hero-portrait.png',
    alt: 'Mathew Kadesh smiling in a black blazer on a night city street',
    ratio: 'poster',
    purpose: 'Primary profile portrait in the landing page hero',
    idealDimensions: '1024×1536px',
    objectPosition: 'center 35%',
  },
  'aptira-poster': {
    id: 'aptira-poster',
    src: '/images/aptira-poster.png',
    alt: 'Aptira — Your readiness. Verified. Career readiness scoring platform',
    ratio: '16:9',
    purpose: 'Project card poster for Aptira on the Projects page and Landing featured row',
    idealDimensions: '800×450px',
  },
  'aptira-banner': {
    id: 'aptira-banner',
    src: '/images/aptira-banner.png',
    alt: 'Aptira — readiness infrastructure platform banner',
    ratio: 'wide',
    purpose: 'Case study hero banner for Aptira',
    idealDimensions: '1440×540px',
  },
  'aptira-screen1': {
    id: 'aptira-screen1',
    src: '/images/aptira-poster.png',
    alt: 'Aptira — Your readiness. Verified. homepage hero',
    ratio: '16:9',
    purpose: 'In-case-study screenshot — homepage hero with score card',
    idealDimensions: '1200×675px',
  },
  'aptira-screen2': {
    id: 'aptira-screen2',
    src: '/images/aptira-screen2.png',
    alt: 'Aptira Methodology — how the career readiness score is calculated',
    ratio: '16:9',
    purpose: 'In-case-study screenshot — methodology/scoring model page',
    idealDimensions: '1200×675px',
  },
  'aptira-screen3': {
    id: 'aptira-screen3',
    src: '/images/aptira-screen3.png',
    alt: 'Aptira For Employers — hire with confidence using verified candidate snapshots',
    ratio: '16:9',
    purpose: 'In-case-study screenshot — employer-facing dashboard and hiring stats',
    idealDimensions: '1200×675px',
  },
  'aptira-screen4': {
    id: 'aptira-screen4',
    src: '/images/aptira-screen4.png',
    alt: 'Aptira Pricing — Simple pricing. Serious results. FREE, PRO £11.99/mo, Enterprise',
    ratio: '16:9',
    purpose: 'In-case-study screenshot — pricing page with plan comparison',
    idealDimensions: '1200×675px',
  },
  'socialpulse-poster': {
    id: 'socialpulse-poster',
    alt: 'SocialPulse AI — social media management platform',
    ratio: '16:9',
    purpose: 'Project card poster for SocialPulse AI',
    idealDimensions: '800×450px',
  },
  'flood-poster': {
    id: 'flood-poster',
    src: '/images/flood-poster.png',
    alt: 'Flood Monitoring Tool — real-time risk visualisation dashboard',
    ratio: '16:9',
    purpose: 'Project card poster for Flood Monitoring Tool',
    idealDimensions: '800×450px',
  },
  'flood-banner': {
    id: 'flood-banner',
    src: '/images/flood-banner.png',
    alt: 'Flood Monitor — Pipeline Dashboard banner',
    ratio: 'wide',
    purpose: 'Case study hero banner for Flood Monitoring Tool',
    idealDimensions: '1440×540px',
  },
  'flood-screen1': {
    id: 'flood-screen1',
    src: '/images/flood-screen1.png',
    alt: 'Flood Monitor — full dashboard with live monitoring and operational pulse',
    ratio: '16:9',
    purpose: 'In-case-study screenshot — full dashboard view',
    idealDimensions: '1200×675px',
  },
  'atlasgym-poster': {
    id: 'atlasgym-poster',
    alt: 'AtlasGym — gym management SaaS',
    ratio: '16:9',
    purpose: 'Project card poster for AtlasGym',
    idealDimensions: '800×450px',
  },
  'faithconnect-poster': {
    id: 'faithconnect-poster',
    src: '/images/faithconnect-poster.png',
    alt: 'Faith Heroes — Every Story. A Sacred Gift. Handcrafted Bible story gift boxes',
    ratio: '16:9',
    purpose: 'Project card poster for Faith Heroes',
    idealDimensions: '800×450px',
  },
  'faithconnect-banner': {
    id: 'faithconnect-banner',
    src: '/images/faithconnect-banner.png',
    alt: 'Faith Heroes — handcrafted Bible story gift boxes banner',
    ratio: 'wide',
    purpose: 'Wide banner for Faith Heroes project / case study',
    idealDimensions: '1440×540px',
  },
  'faithconnect-screen1': {
    id: 'faithconnect-screen1',
    src: '/images/faithconnect-screen1.png',
    alt: 'Faith Heroes — full page showing shop, community, and story sections',
    ratio: '16:9',
    purpose: 'Full-page screenshot of Faith Heroes',
    idealDimensions: '1200×675px',
  },
  'faithconnect-screen2': {
    id: 'faithconnect-screen2',
    src: '/images/faithconnect-screen2.png',
    alt: 'Faith Heroes — homepage hero section',
    ratio: '16:9',
    purpose: 'Hero section screenshot of Faith Heroes',
    idealDimensions: '1200×675px',
  },
  'bgremover-poster': {
    id: 'bgremover-poster',
    alt: 'Background Remover — in-browser ML image masking',
    ratio: '16:9',
    purpose: 'Project card poster for Background Remover',
    idealDimensions: '800×450px',
  },
  'lumino-poster': {
    id: 'lumino-poster',
    src: '/images/lumino-poster.png',
    alt: 'Lumino — LED window displays for Bristol\'s independents',
    ratio: '16:9',
    purpose: 'Project card poster for Lumino on the Projects page and Landing featured row',
    idealDimensions: '800×450px',
  },
  'lumino-banner': {
    id: 'lumino-banner',
    src: '/images/lumino-banner.png',
    alt: 'Lumino — LED window display marketing site hero banner',
    ratio: 'wide',
    purpose: 'Project detail hero banner for Lumino',
    idealDimensions: '1440×540px',
  },
  'lumino-screen1': {
    id: 'lumino-screen1',
    src: '/images/lumino-screen1.png',
    alt: 'Lumino — pricing plans: Starter £39/mo, Growth £69/mo, Premium £119/mo',
    ratio: '16:9',
    purpose: 'In-project screenshot — pricing section',
    idealDimensions: '1200×675px',
  },
  'about-avatar': {
    id: 'about-avatar',
    src: '/img/mathew-kadesh-profile-portrait.png',
    alt: 'Mathew Kadesh — profile photo',
    ratio: '1:1',
    purpose: 'Profile photo on the About page header card',
    idealDimensions: '400×400px — square, professional headshot',
    objectPosition: 'center 26%',
  },
  'services-hero': {
    id: 'services-hero',
    alt: 'Services page illustration',
    ratio: '16:9',
    purpose: 'Optional hero image on the Services page',
    idealDimensions: '1200×675px',
  },
}

export function getMedia(id: string): MediaEntry {
  return mediaMap[id] ?? {
    id,
    alt: id,
    ratio: '16:9',
    purpose: 'Unknown slot',
    idealDimensions: '800×450px',
  }
}
