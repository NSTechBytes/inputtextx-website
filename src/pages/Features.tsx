
import { useEffect } from 'react';
import Header from '@/components/Header';
import Features from '@/components/Features';

const FeaturesPage = () => {
  useEffect(() => {
    // Update the document title
    document.title = "Features | InputTextX";
    
    // Add meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Explore the powerful features of InputTextX, the Rainmeter custom input overlay plugin. Learn about customization options, dynamic input handling, and more.");
    }

    // Scroll to top when page loads
    window.scrollTo(0, 0);

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
      <main className="flex-grow pt-16">
        <Features />
      </main>
    </div>
  );
};

export default FeaturesPage;
