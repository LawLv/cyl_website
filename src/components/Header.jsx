import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white">YILAI CHEN</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-800 hover:text-cyan-600 transition-colors duration-200 font-medium text-lg"
              style={{ color: '#1f2937' }}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-gray-800 hover:text-cyan-600 transition-colors duration-200 font-medium text-lg"
              style={{ color: '#1f2937' }}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-800 hover:text-cyan-600 transition-colors duration-200 font-medium text-lg"
              style={{ color: '#1f2937' }}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-gray-800 hover:text-cyan-600 transition-colors duration-200 font-medium text-lg"
              style={{ color: '#1f2937' }}
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-800 hover:text-cyan-600 transition-colors duration-200 font-medium text-lg"
              style={{ color: '#1f2937' }}
            >
              Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-cyan-400 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 border-t border-gray-700">
              <button
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-gray-800 hover:text-cyan-600 transition-colors duration-200 font-medium text-lg"
                style={{ color: '#1f2937' }}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="block px-3 py-2 text-gray-800 hover:text-cyan-600 transition-colors duration-200 font-medium text-lg"
                style={{ color: '#1f2937' }}
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="block px-3 py-2 text-gray-800 hover:text-cyan-600 transition-colors duration-200 font-medium text-lg"
                style={{ color: '#1f2937' }}
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="block px-3 py-2 text-gray-800 hover:text-cyan-600 transition-colors duration-200 font-medium text-lg"
                style={{ color: '#1f2937' }}
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-gray-800 hover:text-cyan-600 transition-colors duration-200 font-medium text-lg"
                style={{ color: '#1f2937' }}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

