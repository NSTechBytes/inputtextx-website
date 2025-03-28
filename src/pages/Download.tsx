
import { useEffect } from 'react';
import Header from '@/components/Header';
import Download from '@/components/Download';

const DownloadPage = () => {
  useEffect(() => {
    // Update the document title
    document.title = "Download | InputTextX";
    
    // Add meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Download InputTextX, the powerful custom input overlay plugin for Rainmeter.");
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
      <main className="flex-grow">
        <Download />
      </main>
    </div>
  );
};

export default DownloadPage;
