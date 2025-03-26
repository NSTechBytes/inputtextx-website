
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Documentation from '@/components/Documentation';
import FAQ from '@/components/FAQ';
import Download from '@/components/Download';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Update the document title
    document.title = "InputTextX | Custom Input Overlay for Rainmeter";
    
    // Add meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "InputTextX is a powerful Rainmeter plugin for creating customizable input overlays on your desktop. Enhance your Rainmeter setup with dynamic input handling.");
    }

    // Reveal animation for elements when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Documentation />
        <FAQ />
        <Download />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
