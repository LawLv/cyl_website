import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useCallback, useState } from 'react'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import MagicBento from './components/MagicBento'
import Game from './components/Game'
// Removed AnimatedBackground per new palette
import StaggeredMenu from './components/StaggeredMenu'
import TargetCursor from './components/TargetCursor'

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '#' },
    { label: 'About', ariaLabel: 'Learn about me', link: '#about' },
    { label: 'Experience', ariaLabel: 'View my experience', link: '#experience' },
    { label: 'Skills', ariaLabel: 'See my skills', link: '#skills' },
    { label: 'Gallery', ariaLabel: 'View my gallery', link: '#gallery' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' }
  ];

  const socialItems = [
    { label: 'GitHub', link: 'https://github.com/LawLv' },
    { label: 'LinkedIn', link: 'https://linkedin.com/in/yilai-chen' },
    { label: 'Email', link: 'mailto:yilai.chen@example.com' }
  ];

  const handleMenuClick = useCallback((e) => {
    const anchor = e.target.closest('a[href^="#"]')
    if (!anchor) return
    const hash = anchor.getAttribute('href')
    if (!hash || hash === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setIsMenuOpen(false)
      e.preventDefault()
      return
    }
    const id = hash.slice(1)
    const el = document.getElementById(id)
    if (el) {
      e.preventDefault()
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMenuOpen(false)
    }
  }, [])

  return (
    <div className="relative min-h-screen">
      {/* New subtle background handled via global CSS gradient */}
      
      {/* Target Cursor */}
      <TargetCursor 
        spinDuration={10}
        hideDefaultCursor={true}
      />
      
      {/* StaggeredMenu */}
      <div
        className={`fixed top-0 left-0 w-full h-full z-50 ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        onClick={handleMenuClick}
      >
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={false}
          menuButtonColor={getComputedStyle(document.documentElement).getPropertyValue('--color-light') || '#DCD7C9'}
          openMenuButtonColor={getComputedStyle(document.documentElement).getPropertyValue('--color-primary') || '#A27B5C'}
          changeMenuColorOnOpen={true}
          colors={[getComputedStyle(document.documentElement).getPropertyValue('--color-surface') || '#3F4F44', getComputedStyle(document.documentElement).getPropertyValue('--color-dark') || '#2C3930']}
          accentColor={getComputedStyle(document.documentElement).getPropertyValue('--color-primary') || '#A27B5C'}
          onMenuOpen={() => setIsMenuOpen(true)}
          onMenuClose={() => setIsMenuOpen(false)}
        />
      </div>
      
      <div className="relative z-10">
        <main>
          {/* 保留动态深色背景区：Hero */}
          <Hero />

          {/* Magic Bento 章节导航 */}
          <section className="py-16">
            <MagicBento
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={100}
              particleCount={12}
              glowColor="162, 123, 92"
            />
          </section>

          {/* Bio text after MagicBento */}
          <section className="py-10 px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">A Technophile.</h2>
              <p className="text-lg text-gray-200 leading-relaxed">
                Focused on distributed systems, data science, and AI/ML engineering. Pursuing an MSc in Software Engineering of Distributed Systems at KTH Royal Institute of Technology, applying machine learning to real-world problems. Experienced in Python and Java, with projects spanning reinforcement learning for portfolio management, an AWS-based group task platform, and ongoing work on distributed SQL databases and evolutionary optimization.
              </p>
            </div>
          </section>

          {/* 仅保留最终 ContactMe 章节 */}
          <Contact />
        </main>
        
        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-300 text-lg">
              © 2024 Yilai Chen. Built with React + Tailwind CSS.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

function App() {
  const ScrollToTop = () => {
    const location = useLocation()
    useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }, [location.pathname])
    return null
  }
  return (
    <Router>
      <ScrollToTop />
      {/* Global floating name badge */}
      <div className="fixed top-4 left-4 z-[10000]">
        <Link to="/" className="font-bold tracking-wide" style={{ color: 'var(--color-light)' }}>
          YILAI CHEN
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<Game />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  )
}

export default App
