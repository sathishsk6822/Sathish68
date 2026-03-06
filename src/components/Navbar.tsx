import { useState, useEffect, useMemo, useRef, type MouseEvent } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, Plane } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTraveling, setIsTraveling] = useState(false);
  const [travelTarget, setTravelTarget] = useState<string>("");
  const shouldReduceMotion = useReducedMotion();
  const activeTimers = useRef<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      activeTimers.current.forEach((timer) => window.clearTimeout(timer));
      activeTimers.current = [];
    };
  }, []);

  const handleSectionNavigation = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const sectionId = href.replace("#", "");
    const section = document.getElementById(sectionId);

    setIsMobileMenuOpen(false);

    if (!section) {
      window.location.hash = href;
      return;
    }

    if (shouldReduceMotion) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    activeTimers.current.forEach((timer) => window.clearTimeout(timer));
    activeTimers.current = [];

    setTravelTarget(sectionId);
    setIsTraveling(true);

    const scrollTimer = window.setTimeout(() => {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 360);

    const hideTravelTimer = window.setTimeout(() => {
      setIsTraveling(false);
    }, 1150);

    activeTimers.current.push(scrollTimer, hideTravelTimer);
  };

  const travelLabel = useMemo(() => {
    if (!travelTarget) return "next section";
    return navLinks.find((link) => link.href === `#${travelTarget}`)?.name ?? "next section";
  }, [travelTarget]);

  return (
    <>
      <motion.nav
        initial={{ y: shouldReduceMotion ? 0 : -100, opacity: shouldReduceMotion ? 1 : 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-3 glass-panel border-b border-border/30"
            : "py-4 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <motion.a
              href="#"
              className="text-xl font-heading font-bold gradient-text"
              whileHover={!shouldReduceMotion ? { scale: 1.05 } : {}}
              transition={{ duration: 0.2 }}
            >
              Sathish<span className="text-foreground">kumar</span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={handleSectionNavigation(link.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: shouldReduceMotion ? 0 : 0.1 + index * 0.05,
                  }}
                  whileHover={!shouldReduceMotion ? { y: -2 } : {}}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}

              {/* Theme Toggle */}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button & Theme Toggle */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <motion.button
                className="text-foreground p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="md:hidden glass-panel border-t border-border/30 overflow-hidden"
            >
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                    },
                  },
                }}
                className="container mx-auto px-6 py-4 space-y-2"
              >
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={handleSectionNavigation(link.href)}
                    className="block py-3 px-4 rounded-lg text-foreground hover:text-primary hover:bg-secondary/50 transition-all"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <AnimatePresence>
        {isTraveling && (
          <motion.div
            className="fixed inset-0 z-[70] pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]" />

            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
              <div className="mx-auto w-[82%] h-px border-t border-dashed border-primary/60" />

              <motion.div
                className="absolute left-[9%] top-1/2 -translate-y-1/2"
                initial={{ x: 0, y: 0, rotate: -6, opacity: 0 }}
                animate={{
                  x: [0, 90, 210, 330, 460, 600],
                  y: [0, -18, 10, -12, 14, -2],
                  rotate: [-6, 6, -4, 8, -2, 0],
                  opacity: [0, 1, 1, 1, 1, 0.8],
                }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              >
                <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center backdrop-blur-sm shadow-lg shadow-primary/30">
                  <Plane className="w-5 h-5 text-primary" />
                </div>
              </motion.div>
            </div>

            <motion.p
              className="absolute top-[40%] left-1/2 -translate-x-1/2 text-sm md:text-base text-foreground font-heading tracking-wide"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              Traveling to {travelLabel}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
