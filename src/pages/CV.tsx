import { motion } from 'framer-motion'
import { Download, Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react'
import { fadeUp, stagger } from '@/lib/motion'
import { experience, education } from '@/data/experience'

const skillCategories = [
  {
    label: 'Languages',
    skills: ['C', 'C++', 'Python', 'Go', 'Java', 'Node.js', 'Bash', 'TypeScript', 'Swift', 'Kotlin', 'Perl'],
  },
  {
    label: 'Systems & Networking',
    skills: ['Linux (Debian/Ubuntu)', 'SystemD', 'Packet Filtering', 'VPNs', 'Firewalls', 'Proxying', 'IP Networking'],
  },
  {
    label: 'DevOps & Tools',
    skills: ['Git', 'Jenkins', 'Docker', 'Azure DevOps', 'Terraform', 'CI/CD Pipelines', 'Jira', 'Kubernetes', 'WASM'],
  },
  {
    label: 'Cloud & Infrastructure',
    skills: ['AWS', 'Azure', 'Firebase', 'GCP (Cloud Run, App Engine)', 'Lambda', 'EC2', 'S3', 'IAM'],
  },
  {
    label: 'Security & Auth',
    skills: ['OAuth 2.0', 'OpenID Connect', 'Active Directory', 'RADIUS', 'SSO integration'],
  },
  {
    label: 'Protocols & APIs',
    skills: ['RESTful APIs', 'WebSockets', 'JSON', 'GraphQL'],
  },
  {
    label: 'Monitoring & Observability',
    skills: ['Log aggregation', 'Alerting', 'Linux diagnostics', 'Memory management', 'Performance optimisation'],
  },
]

const portfolioProjects = [
  {
    name: 'Aptira',
    url: 'aptira.uk',
    status: 'Controlled Beta',
    desc: 'Career readiness infrastructure — deterministic scoring across 5 pillars (Capability, Evidence, Role Fit, Professional Behaviour, Growth), scored 0–850, with role-specific gap analysis and next-best-actions. React + FastAPI + Supabase + Claude API. GDPR-compliant architecture; controlled beta ahead of an August 2026 commercial launch.',
  },
  {
    name: 'PitchGhost',
    url: 'mathewkadesh.github.io/PitchGhost',
    status: 'Live',
    desc: 'Founder intelligence tool that generates structured VC firm dossiers — investment thesis, dealbreakers, pitch confidence scoring (Thesis Alignment, Stage Fit, Sector Match), and a personalised follow-up email. 72 firms tracked across 14 sectors. React + Vite + TypeScript + Claude API.',
  },
  {
    name: 'Flood Monitor — Pipeline Dashboard',
    url: 'mathewkadesh.github.io/flood-monitoring',
    status: 'Delivered',
    desc: 'Real-time flood risk visualisation for AECOM field engineers. 200+ Environment Agency sensor feeds aggregated every 15 min, Leaflet map with GeoJSON risk overlays, D3.js sparklines. 12 field engineers, ~40% decision-time reduction.',
  },
  {
    name: 'Faith Heroes',
    url: 'mathewkadesh.github.io/faith-heroes',
    status: 'Live',
    desc: 'Full e-commerce and community platform for a handcrafted Bible story gift box brand. Custom box builder, community story-sharing, Stripe payments, newsletter. React + Node.js + Supabase.',
  },
]

export default function CV() {
  return (
    <div className="bg-ink min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Screen: Actions bar */}
        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          animate="show"
          className="flex items-center justify-between mb-8 print:hidden"
        >
          <motion.h1 variants={fadeUp} className="font-display font-bold text-2xl text-text">
            CV
          </motion.h1>
          <motion.button
            variants={fadeUp}
            onClick={() => window.print()}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cinema hover:bg-cinemaHover text-white font-semibold text-sm transition-all shadow-lg shadow-cinema/20 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Download size={15} /> Download / Print PDF
          </motion.button>
        </motion.div>

        {/* CV Document */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white text-gray-900 rounded-2xl overflow-hidden shadow-2xl print:rounded-none print:shadow-none"
          id="cv-document"
        >
          <div className="p-8 sm:p-12 cv-content">
            {/* Header */}
            <header className="border-b-2 border-gray-900 pb-6 mb-6">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">Mathew Kadesh</h1>
              <p className="text-lg font-semibold text-gray-600 mt-1">Software Engineer</p>
              <div className="flex flex-wrap gap-x-5 gap-y-2 mt-3 text-sm text-gray-600">
                <span className="flex items-center gap-1"><MapPin size={13} /> Bristol, United Kingdom</span>
                <a href="tel:+447365163365" className="flex items-center gap-1 hover:text-gray-900"><Phone size={13} /> +44 7365 163365</a>
                <a href="mailto:kadeshmathew@gmail.com" className="flex items-center gap-1 hover:text-gray-900"><Mail size={13} /> kadeshmathew@gmail.com</a>
                <a href="https://github.com/mathewkadesh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-gray-900"><Github size={13} /> github.com/mathewkadesh</a>
                <a href="https://www.linkedin.com/in/mathew-kadesh-141b37188/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-gray-900"><Linkedin size={13} /> linkedin.com/in/mathew-kadesh-141b37188</a>
              </div>
            </header>

            {/* Personal Profile */}
            <CvSection title="Personal Profile">
              <p className="text-sm leading-relaxed text-gray-700">
                Polyglot software engineer with 6+ years of professional expertise and a strong foundation in C++, C#, Java,
                Python, and JavaScript (React/Node), delivering production software across web and backend with a DevOps mindset.
                Comfortable owning delivery end-to-end, collaborating cross-functionally, documenting clearly, and adapting to
                new platforms quickly. Focused on pragmatic design, reliability, and continuous improvement.
              </p>
            </CvSection>

            {/* Areas of Expertise */}
            <CvSection title="Areas of Expertise">
              <div className="flex flex-col gap-2">
                {skillCategories.map((cat) => (
                  <div key={cat.label} className="flex flex-wrap gap-x-1 text-sm leading-relaxed">
                    <span className="font-semibold text-gray-900 shrink-0">{cat.label}:</span>
                    <span className="text-gray-700">{cat.skills.join(', ')}</span>
                  </div>
                ))}
              </div>
            </CvSection>

            {/* Experience */}
            <CvSection title="Career Experience">
              <div className="flex flex-col gap-6">
                {experience.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex flex-wrap justify-between items-start gap-1 mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">{exp.role}</h3>
                        <p className="text-sm font-medium text-gray-600">{exp.company}{exp.type.includes('Compliance') ? ` — ${exp.location} (Compliance-as-a-Service)` : `, ${exp.location}`}</p>
                      </div>
                      <div className="text-right text-sm text-gray-500">
                        <p>{exp.period}</p>
                      </div>
                    </div>
                    <ul className="list-disc list-outside ml-4 flex flex-col gap-1.5">
                      {exp.bullets.map((b, i) => (
                        <li key={i} className="text-sm text-gray-700 leading-relaxed">{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CvSection>

            {/* Projects */}
            <CvSection title="Projects">
              <div className="flex flex-col gap-3.5">
                {portfolioProjects.map((p) => (
                  <div key={p.name}>
                    <p className="text-sm leading-relaxed">
                      <span className="font-semibold text-gray-900">{p.name}</span>
                      {p.url && (
                        <a
                          href={`https://${p.url}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 text-xs ml-1.5 hover:text-gray-600"
                        >
                          ({p.url})
                        </a>
                      )}
                      <span className="text-xs font-medium text-gray-400 ml-1.5">[{p.status}]</span>
                      <span className="text-gray-700"> — {p.desc}</span>
                    </p>
                  </div>
                ))}
              </div>
            </CvSection>

            {/* Education */}
            <CvSection title="Education">
              <div className="flex flex-col gap-4">
                {education.map((edu) => (
                  <div key={edu.degree}>
                    <div className="flex flex-wrap justify-between items-start gap-1">
                      <div>
                        <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                        <p className="text-sm text-gray-700">{edu.institution}</p>
                      </div>
                      <div className="text-right text-sm text-gray-500">
                        <p>{edu.period}</p>
                        <p className="font-medium text-gray-700">{edu.classification}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CvSection>

            {/* Additional Skills */}
            <CvSection title="Additional Skills">
              <ul className="list-disc list-outside ml-4 flex flex-col gap-1.5">
                <li className="text-sm text-gray-700"><span className="font-semibold">Version Control:</span> Proficient in Git, GitHub, and Bitbucket.</li>
                <li className="text-sm text-gray-700"><span className="font-semibold">Testing:</span> Test-Driven Development (TDD) using JUnit and Selenium.</li>
                <li className="text-sm text-gray-700"><span className="font-semibold">Soft Skills:</span> Strong leadership, problem-solving, and collaboration abilities. Ownership mindset, cross-functional delivery.</li>
              </ul>
            </CvSection>

            {/* References */}
            <CvSection title="References">
              <p className="text-sm text-gray-600">References will be furnished upon request.</p>
            </CvSection>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function CvSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="mb-6 print:opacity-100 print:translate-y-0"
    >
      <h2 className="text-xs font-bold uppercase tracking-widest text-gray-900 border-b border-gray-200 pb-1 mb-3">
        {title}
      </h2>
      {children}
    </motion.section>
  )
}
