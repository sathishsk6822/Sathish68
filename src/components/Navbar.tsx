import { useState, useEffect, useMemo, useRef, type MouseEvent } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#/projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [travelTarget, setTravelTarget] = useState<string>("");
  const shouldReduceMotion = useReducedMotion();
  const activeTimers = useRef<number[]>([]);
  // Store the scrambled version of the target text
  const [scrambledText, setScrambledText] = useState("");

  const travelLabel = useMemo(() => {
    if (!travelTarget) return "data";
    return navLinks.find((link) => link.href.includes(travelTarget))?.name ?? "data";
  }, [travelTarget]);

  // Handle the text decryption effect
  useEffect(() => {
    if (isProcessing && travelLabel) {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
      let iteration = 0;
      const maxIterations = 15;
      const textToScramble = travelLabel.toUpperCase();

      const interval = setInterval(() => {
        setScrambledText(
          textToScramble
            .split("")
            .map((char, index) => {
              if (index < iteration) {
                return textToScramble[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iteration >= textToScramble.length) {
          clearInterval(interval);
        }

        iteration += 1 / 2; // Speed of decryption
      }, 30);

      return () => clearInterval(interval);
    }
    setScrambledText("");
  }, [isProcessing, travelLabel]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // If we have a pending travel target and just arrived at the home page
    if (location.pathname === "/" && travelTarget && !isProcessing) {
      const section = document.getElementById(travelTarget);
      if (section) {
        // Skip animation if we're already at or very close to the section
        const rect = section.getBoundingClientRect();
        if (Math.abs(rect.top) < 300) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
          setTravelTarget("");
          return;
        }

        setIsProcessing(true);
        const scrollTimer = window.setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);

        const hideTimer = window.setTimeout(() => {
          setIsProcessing(false);
          setTravelTarget("");
        }, 800);

        activeTimers.current.push(scrollTimer, hideTimer);
      }
    }
  }, [location.pathname, travelTarget, isProcessing]);

  const handleSectionNavigation = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    setIsMobileMenuOpen(false);

    if (href === "#/projects") {
      if (location.pathname === "/projects") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      activeTimers.current.forEach((timer) => window.clearTimeout(timer));
      activeTimers.current = [];

      setTravelTarget("projects");
      setIsProcessing(true);

      const navTimer = window.setTimeout(() => {
        navigate("/projects");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 300);

      const hideTimer = window.setTimeout(() => {
        setIsProcessing(false);
        setTravelTarget("");
      }, 800);

      activeTimers.current.push(navTimer, hideTimer);
      return;
    }

    const sectionId = href.replace("#", "");

    if (location.pathname !== "/") {
      setTravelTarget(sectionId);
      navigate("/");
      return;
    }

    const section = document.getElementById(sectionId);

    if (!section) {
      if (sectionId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    // Skip animation if we're already at or very close to the section
    const rect = section.getBoundingClientRect();
    if (Math.abs(rect.top) < 300) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    if (shouldReduceMotion) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    activeTimers.current.forEach((timer) => window.clearTimeout(timer));
    activeTimers.current = [];

    setTravelTarget(sectionId);
    setIsProcessing(true);

    const scrollTimer = window.setTimeout(() => {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);

    const hideTimer = window.setTimeout(() => {
      setIsProcessing(false);
      setTravelTarget("");
    }, 800);

    activeTimers.current.push(scrollTimer, hideTimer);
  };

  return (
    <>
      <motion.nav
        initial={{ y: shouldReduceMotion ? 0 : -100, opacity: shouldReduceMotion ? 1 : 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "py-3 glass-panel border-b border-border/30"
          : "py-4 bg-transparent"
          }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <motion.a
              href="#home"
              onClick={handleSectionNavigation("#home")}
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
        {isProcessing && (
          <motion.div
            className="fixed inset-0 z-[70] pointer-events-none flex items-center justify-center bg-background/95 backdrop-blur-3xl overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Digital CRT Scanlines Overlay */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-overlay
              bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.5)_50%),linear-gradient(rgba(0,0,0,0.2)_50%,rgba(0,0,0,0)_50%)]
              bg-[length:100%_4px,100%_4px]"
            />

            {/* Glowing Center Core */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[80vw] h-[40vh] bg-primary/20 blur-[120px] rounded-full mix-blend-screen" />
            </div>

            {/* Cyberpunk Text Decryption */}
            <motion.div
              className="relative z-10 flex flex-col items-center justify-center"
              initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              exit={{ scale: 1.1, opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-4xl md:text-7xl lg:text-9xl font-mono font-black tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-tr from-primary via-primary/80 to-accent uppercase drop-shadow-[0_0_15px_hsl(var(--primary)/0.5)]">
                {scrambledText || travelLabel.toUpperCase()}
              </h3>

              <motion.div
                className="mt-6 flex items-center gap-4 text-primary font-mono text-sm md:text-base tracking-[0.5em] uppercase font-bold"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                <span>Decrypting</span>
                <div className="flex gap-1 h-1">
                  <div className="w-4 h-full bg-primary" />
                  <div className="w-1 h-full bg-primary" />
                  <div className="w-8 h-full bg-primary/50" />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
