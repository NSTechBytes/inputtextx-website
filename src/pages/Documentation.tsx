
import { useEffect } from 'react';
import Header from '@/components/Header';
import Documentation from '@/components/Documentation';
import Footer from '@/components/Footer';

const DocumentationPage = () => {
  useEffect(() => {
    // Update the document title
    document.title = "Documentation | InputTextX";
    
    // Add meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Detailed documentation and guides for using InputTextX, the Rainmeter custom input overlay plugin.");
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
        <Documentation />
      </main>
      <Footer />
    </div>
  );
};

export default DocumentationPage;
