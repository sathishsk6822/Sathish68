import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowColor?: "primary" | "accent";
}

const GlassCard = ({
  children,
  className = "",
  hoverEffect = true,
  glowColor = "primary",
}: GlassCardProps) => {
  const shouldReduceMotion = useReducedMotion();

  const glowClasses = {
    primary: "hover:shadow-primary/20 hover:border-primary/30",
    accent: "hover:shadow-accent/20 hover:border-accent/30",
  };

  if (shouldReduceMotion || !hoverEffect) {
    return (
      <div
        className={cn(
          "glass-panel rounded-xl border border-border/50 p-6",
          className
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.01,
      }}
      transition={{
        duration: 0.3,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={cn(
        "glass-panel rounded-xl border border-border/50 p-6 transition-all duration-300",
        "hover:shadow-xl",
        glowClasses[glowColor],
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;