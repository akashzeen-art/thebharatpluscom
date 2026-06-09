import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20 flex items-center justify-center px-4">
        <div className="text-center space-y-6">
          <div className="text-7xl font-bold text-primary">404</div>
          <h1 className="text-4xl font-bold text-foreground">Page Not Found</h1>
          <p className="text-xl text-muted-foreground max-w-md">
            The video or page you're looking for doesn't exist. Let's get you back to watching!
          </p>
          <a 
            href="/" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors"
          >
            <Home className="w-5 h-5" />
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
