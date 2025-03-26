
import { useState, useEffect } from 'react';
import { Menu, X, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Helper function to determine if a link is active
  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2 bg-github-darker/95 backdrop-blur-md shadow-md mx-3 md:mx-6 mt-2 rounded-full' : 'py-4 bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-white text-2xl font-bold flex items-center">
            <span className="text-github-highlight mr-1 animate-text-glow">Input</span>
            <span className="text-white">TextX</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link 
              to="/" 
              className={`nav-item ${isActive('/') ? 'text-github-highlight' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/features" 
              className={`nav-item ${isActive('/features') ? 'text-github-highlight' : ''}`}
            >
              Features
            </Link>
            <Link 
              to="/documentation" 
              className={`nav-item ${isActive('/documentation') ? 'text-github-highlight' : ''}`}
            >
              Documentation
            </Link>
            <Link 
              to="/download" 
              className={`nav-item ${isActive('/download') ? 'text-github-highlight' : ''}`}
            >
              Download
            </Link>
            <Button variant="outline" size="sm" className="ml-4 border-github-highlight text-github-highlight hover:bg-github-highlight hover:text-white" onClick={() => window.open('https://github.com/nstechbytes/InputTextX', '_blank')}>
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-github-text hover:text-white"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'}`}>
        <div className="bg-github-darker/95 backdrop-blur-md px-4 py-2">
          <nav className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className={`nav-item ${isActive('/') ? 'text-github-highlight' : ''}`}
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link 
              to="/features" 
              className={`nav-item ${isActive('/features') ? 'text-github-highlight' : ''}`}
              onClick={toggleMobileMenu}
            >
              Features
            </Link>
            <Link 
              to="/documentation" 
              className={`nav-item ${isActive('/documentation') ? 'text-github-highlight' : ''}`}
              onClick={toggleMobileMenu}
            >
              Documentation
            </Link>
            <Link 
              to="/download" 
              className={`nav-item ${isActive('/download') ? 'text-github-highlight' : ''}`}
              onClick={toggleMobileMenu}
            >
              Download
            </Link>
            <Button 
              variant="outline" 
              size="sm" 
              className="mt-2 border-github-highlight text-github-highlight hover:bg-github-highlight hover:text-white"
              onClick={() => {
                window.open('https://github.com/nstechbytes/InputTextX', '_blank');
                toggleMobileMenu();
              }}
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
