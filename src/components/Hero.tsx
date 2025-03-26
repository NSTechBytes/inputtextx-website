
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedLogo from './AnimatedLogo';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-24 pb-16 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-github-dark">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#388bfd,transparent_40%)]"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_left,#238636,transparent_40%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-github-darker opacity-50 [mask-image:radial-gradient(transparent,white)]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-10">
            <AnimatedLogo />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            <span className="inline-block animate-slide-in-left">Input</span>
            <span className="inline-block animate-slide-in-right">TextX</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-github-text opacity-90 animate-fade-in delay-200 text-balance">
            Custom Input Overlay for Rainmeter
          </p>

          <p className="text-github-muted max-w-2xl mx-auto mb-10 animate-slide-in-bottom delay-300 text-balance">
            A powerful, lightweight plugin that seamlessly integrates custom input overlays into your Rainmeter desktop setup. Customize appearances, handle dynamic input, and enhance your desktop experience.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in delay-500">
            <Button 
              size="lg" 
              className="bg-github-accent hover:bg-github-accent/90 text-white font-semibold animate-pulse-subtle"
              asChild
            >
              <Link to="/download">Download Now</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-github-border text-github-text hover:bg-github-border/30 hover:text-white"
              asChild
            >
              <Link to="/features">Explore Features</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          className="text-github-muted hover:text-white transition-colors hover:bg-transparent"
          asChild
        >
          <Link to="/features" aria-label="Scroll to features">
            <ChevronDown size={32} />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
