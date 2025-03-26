
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-github-dark p-4">
      <div className="glass p-8 rounded-lg border border-github-border max-w-md w-full text-center bg-github-darker/50">
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-github-highlight/10 text-github-highlight">
          <AlertCircle size={32} />
        </div>
        
        <h1 className="text-4xl font-bold mb-2 text-white">404</h1>
        <p className="text-xl text-github-muted mb-6">Oops! Page not found</p>
        
        <p className="text-github-text mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <Button 
          className="bg-github-accent hover:bg-github-accent/90" 
          onClick={() => window.location.href = '/'}
        >
          <Home className="mr-2 h-4 w-4" />
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
