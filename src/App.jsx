import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Game from './components/Game'
import AnimatedBackground from './components/AnimatedBackground'
import StaggeredMenu from './components/StaggeredMenu'
import TargetCursor from './components/TargetCursor'

function HomePage() {
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

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      
      {/* Target Cursor */}
      <TargetCursor 
        spinDuration={10}
        hideDefaultCursor={true}
      />
      
      {/* StaggeredMenu */}
      <div className="fixed top-0 left-0 w-full h-full z-50 pointer-events-none">
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={false}
          menuButtonColor="#fff"
          openMenuButtonColor="#fff"
          changeMenuColorOnOpen={true}
          colors={['#B19EEF', '#5227FF']}
          accentColor="#ff6b6b"
          onMenuOpen={() => console.log('Menu opened')}
          onMenuClose={() => console.log('Menu closed')}
        />
      </div>
      
      <div className="relative z-10">
        <main>
          <Hero />
          <Experience />
          <Skills />
          <Gallery />
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
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  )
}

export default App
