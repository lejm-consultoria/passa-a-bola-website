import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto text-center">
        <div className="text-6xl font-bold text-brand-primary/30 mb-4">404</div>
        <h1 className="text-3xl font-bold text-brand-primary mb-4">
          Page not found
        </h1>
        <p className="text-base text-neutral-light mb-8">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link to="/">
          <Button className="btn-primary inline-flex items-center gap-2">
            <Home className="w-4 h-4" />
            Go back home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
