import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Home          = lazy(() => import('./pages/Home'))
const Projects      = lazy(() => import('./pages/Projects'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const About         = lazy(() => import('./pages/About'))
const Services      = lazy(() => import('./pages/Services'))
const Contact       = lazy(() => import('./pages/Contact'))
const CV            = lazy(() => import('./pages/CV'))

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-ink">
      <motion.div
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        className="font-display font-bold text-2xl text-cinema"
      >
        K
      </motion.div>
    </div>
  )
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-ink">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/"                          element={<Home />} />
              <Route path="/portfolio"                 element={<Home />} />
              <Route path="/projects"                  element={<Projects />} />
              <Route path="/portfolio/projects"        element={<Projects />} />
              <Route path="/projects/:slug"            element={<ProjectDetail />} />
              <Route path="/portfolio/projects/:slug"  element={<ProjectDetail />} />
              <Route path="/about"                     element={<About />} />
              <Route path="/portfolio/about"           element={<About />} />
              <Route path="/services"                  element={<Services />} />
              <Route path="/portfolio/services"        element={<Services />} />
              <Route path="/contact"                   element={<Contact />} />
              <Route path="/portfolio/contact"         element={<Contact />} />
              <Route path="/cv"                        element={<CV />} />
              <Route path="/portfolio/cv"              element={<CV />} />
              {/* Redirect old case-study URLs */}
              <Route path="/case-studies"              element={<Navigate to="/projects" replace />} />
              <Route path="/case-studies/:slug"        element={<Navigate to="/projects" replace />} />
              <Route path="/portfolio/case-studies"    element={<Navigate to="/projects" replace />} />
              <Route path="/portfolio/case-studies/:slug" element={<Navigate to="/projects" replace />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
