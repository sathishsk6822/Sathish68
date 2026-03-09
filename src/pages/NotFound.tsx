import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Home, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto text-center"
        >
          <div className="mb-8 flex justify-center">
            <motion.div
              animate={!shouldReduceMotion ? { rotate: [0, -5, 5, -5, 0] } : {}}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-24 h-24 rounded-2xl glass-panel flex items-center justify-center text-primary shadow-lg shadow-primary/20"
            >
              <AlertTriangle size={48} />
            </motion.div>
          </div>

          <h1 className="text-7xl font-heading font-bold gradient-text mb-4">404</h1>
          <h2 className="text-2xl font-heading font-semibold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            Oops! It seems you've wandered into uncharted data territory. The page you're looking for doesn't exist.
          </p>

          <motion.div
            whileHover={!shouldReduceMotion ? { scale: 1.05 } : {}}
            whileTap={!shouldReduceMotion ? { scale: 0.95 } : {}}
          >
            <Button variant="gradient" size="lg" asChild className="gap-2">
              <Link to="/">
                <Home size={18} />
                Return to Home
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
