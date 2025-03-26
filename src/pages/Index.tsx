
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

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
      </main>
    </div>
  );
};

export default Index;
