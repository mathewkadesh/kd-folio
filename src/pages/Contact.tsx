import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react'
import { fadeUp, stagger } from '@/lib/motion'
import { cn } from '@/lib/cn'
import SectionGlow from '@/components/SectionGlow'

const tabs = ['General', 'Project', 'Support'] as const
type Tab = (typeof tabs)[number]

interface FormState {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const [activeTab, setActiveTab] = useState<Tab>('General')
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  function validate() {
    const e: Partial<FormState> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Valid email required'
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      e.message = 'Message must be at least 10 characters'
    }
    return e
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSending(true)
    // Simulate send + mailto fallback
    setTimeout(() => {
      setSending(false)
      setSent(true)
      // Open mailto as fallback
      const subject = encodeURIComponent(`[${activeTab}] Message from ${form.name}`)
      const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} <${form.email}>`)
      window.location.href = `mailto:kadeshmathew@gmail.com?subject=${subject}&body=${body}`
    }, 1200)
  }

  function field(id: keyof FormState) {
    return {
      value: form[id],
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [id]: e.target.value }))
        setErrors((prev) => ({ ...prev, [id]: undefined }))
      },
    }
  }

  return (
    <div className="bg-ink min-h-screen pt-24">
      {/* Header */}
      <section className="relative px-4 sm:px-6 py-16">
        <SectionGlow />
        <div className="max-w-5xl mx-auto">
          <motion.div variants={stagger(0.08)} initial="hidden" animate="show">
            <motion.p variants={fadeUp} className="text-xs font-mono text-cinema tracking-widest uppercase mb-3">
              Get in Touch
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-display font-bold text-4xl sm:text-6xl text-text mb-4">
              Contact
            </motion.h1>
            <motion.p variants={fadeUp} className="text-muted text-lg max-w-md">
              Responding within 24–48h · Open to remote roles worldwide.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 sm:px-6 pb-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <h2 className="font-display font-semibold text-xl text-text">Contact Info</h2>

            <a
              href="mailto:kadeshmathew@gmail.com"
              className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-white/[0.07] hover:border-cinema/30 transition-colors group"
            >
              <div className="w-9 h-9 rounded-lg bg-cinema/10 flex items-center justify-center shrink-0 group-hover:bg-cinema/20 transition-colors">
                <Mail size={17} className="text-cinema" />
              </div>
              <div>
                <p className="text-xs text-faint mb-0.5">Email — Preferred</p>
                <p className="text-sm text-text">kadeshmathew@gmail.com</p>
              </div>
            </a>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-white/[0.07]">
              <div className="w-9 h-9 rounded-lg bg-white/[0.06] flex items-center justify-center shrink-0">
                <MapPin size={17} className="text-muted" />
              </div>
              <div>
                <p className="text-xs text-faint mb-0.5">Location</p>
                <p className="text-sm text-text">Bristol, UK 🇬🇧</p>
                <p className="text-xs text-green-400 mt-1 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Open to remote work worldwide
                </p>
              </div>
            </div>

            <div className="flex gap-2 mt-2">
              <a
                href="https://github.com/mathewkadesh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-surface border border-white/[0.07] text-sm text-muted hover:text-text hover:border-white/[0.15] transition-colors"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mathew-kadesh-141b37188/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-surface border border-white/[0.07] text-sm text-muted hover:text-text hover:border-white/[0.15] transition-colors"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>

            <a
              href="mailto:kadeshmathew@gmail.com"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-cinema hover:bg-cinemaHover text-white font-semibold text-sm transition-colors mt-2 shadow-lg shadow-cinema/20"
            >
              <Mail size={15} /> Email me directly
            </a>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3"
          >
            {/* Tab pills */}
            <div className="flex gap-2 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-all',
                    activeTab === tab
                      ? 'bg-cinema text-white'
                      : 'bg-surface text-muted hover:text-text border border-white/[0.07]',
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center gap-4 py-16 rounded-2xl bg-surface border border-white/[0.07] text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
                  >
                    <CheckCircle size={48} className="text-green-400" />
                  </motion.div>
                  <h3 className="font-display font-bold text-xl text-text">Message sent!</h3>
                  <p className="text-muted text-sm max-w-xs">
                    Your email client should have opened. I'll reply within 24–48h.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }) }}
                    className="mt-2 text-sm text-cinema hover:text-cinemaHover transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="flex flex-col gap-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field
                      label="Name"
                      id="name"
                      type="text"
                      placeholder="Your name"
                      error={errors.name}
                      {...field('name')}
                    />
                    <Field
                      label="Email"
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      error={errors.email}
                      {...field('email')}
                    />
                  </div>
                  <TextareaField
                    label="Message"
                    id="message"
                    placeholder={
                      activeTab === 'General'
                        ? 'Hi Mathew, I\'d love to chat about…'
                        : activeTab === 'Project'
                        ? 'Tell me about the project — stack, scope, timeline…'
                        : 'Describe the issue or question…'
                    }
                    error={errors.message}
                    {...field('message')}
                  />
                  <button
                    type="submit"
                    disabled={sending}
                    className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-cinema hover:bg-cinemaHover disabled:opacity-60 text-white font-semibold text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-cinema/20"
                  >
                    {sending ? (
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Send size={15} />
                    )}
                    {sending ? 'Sending…' : 'Send Message'}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function Field({
  label, id, type, placeholder, error, value, onChange,
}: {
  label: string; id: string; type: string; placeholder: string;
  error?: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-text">{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={cn(
          'px-3.5 py-2.5 rounded-xl bg-surface border text-sm text-text placeholder:text-faint focus:outline-none transition-colors',
          error ? 'border-cinema/60' : 'border-white/[0.07] focus:border-cinema/40',
        )}
      />
      {error && <span className="text-xs text-cinema">{error}</span>}
    </div>
  )
}

function TextareaField({
  label, id, placeholder, error, value, onChange,
}: {
  label: string; id: string; placeholder: string;
  error?: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-text">{label}</label>
      <textarea
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={6}
        className={cn(
          'px-3.5 py-2.5 rounded-xl bg-surface border text-sm text-text placeholder:text-faint focus:outline-none transition-colors resize-none',
          error ? 'border-cinema/60' : 'border-white/[0.07] focus:border-cinema/40',
        )}
      />
      {error && <span className="text-xs text-cinema">{error}</span>}
    </div>
  )
}
