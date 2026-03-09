import { motion, useReducedMotion } from "framer-motion";
import { BarChart, Database, Zap, ShieldCheck } from "lucide-react";
import FadeInOnScroll from "./motion/FadeInOnScroll";

const stats = [
  {
    label: "BI Dashboards Built",
    value: "10+",
    icon: BarChart,
    color: "primary"
  },
  {
    label: "SQL Queries Optimized",
    value: "50+",
    icon: Database,
    color: "accent"
  },
  {
    label: "Data Accuracy Rate",
    value: "98%",
    icon: ShieldCheck,
    color: "primary"
  },
  {
    label: "ETL Pipelines Automated",
    value: "5+",
    icon: Zap,
    color: "accent"
  }
];

const StatsBar = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative z-20 -mt-12 mb-12 container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <FadeInOnScroll direction="up" delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 glass-panel rounded-2xl shadow-glow">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center justify-center text-center p-4 rounded-xl hover:bg-white/5 transition-colors group"
                whileHover={!shouldReduceMotion ? { y: -5 } : {}}
              >
                <div className={`p-3 rounded-full bg-${stat.color}/10 text-${stat.color} mb-3 group-hover:scale-110 transition-transform`}>
                  <stat.icon size={24} />
                </div>
                <span className="text-2xl md:text-3xl font-heading font-bold gradient-text mb-1">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </FadeInOnScroll>
      </div>
    </div>
  );
};

export default StatsBar;
