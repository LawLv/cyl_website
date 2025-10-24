import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Game from './components/Game'
import AnimatedBackground from './components/AnimatedBackground'

function HomePage() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
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
