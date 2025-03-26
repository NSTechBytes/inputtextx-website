
import { Github, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-4 bg-github-darker border-t border-github-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <span className="text-xl font-bold text-white">Input<span className="text-github-highlight">TextX</span></span>
            </div>
            <p className="text-github-muted mt-2 text-sm">
              A Rainmeter plugin for custom input overlays
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center mb-4">
              <a 
                href="https://github.com/nstechbytes/InputTextX" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-github-muted hover:text-white transition-colors mr-4"
                aria-label="GitHub Repository"
              >
                <Github size={20} />
              </a>
            </div>
            
            <div className="text-github-muted text-sm">
              <p className="mb-1">
                Released under the MIT License
              </p>
              <p className="flex items-center justify-center md:justify-end">
                Made with <Heart size={14} className="text-github-accent mx-1" /> by 
                <a 
                  href="https://github.com/nstechbytes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ml-1 text-github-highlight hover:underline"
                >
                  nstechbytes
                </a>
              </p>
              <p className="mt-2">&copy; {currentYear} InputTextX. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
