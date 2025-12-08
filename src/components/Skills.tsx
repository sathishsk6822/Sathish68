import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { 
  BarChart3, 
  Code2, 
  TrendingUp,
  Palette,
} from "lucide-react";
import FadeInOnScroll from "./motion/FadeInOnScroll";
import GlassCard from "./motion/GlassCard";

const skillCategories = [
  {
    title: "Data & BI Tools",
    icon: BarChart3,
    skills: [
      { name: "Power BI", level: 90 },
      { name: "Tableau", level: 75 },
      { name: "Excel", level: 95 },
      { name: "SQL / MySQL", level: 85 },
    ],
  },
  {
    title: "Programming",
    icon: Code2,
    skills: [
      { name: "Python", level: 80 },
      { name: "R", level: 70 },
      { name: "Java", level: 65 },
      { name: "HTML/CSS/JS", level: 75 },
    ],
  },
  {
    title: "Analytics Skills",
    icon: TrendingUp,
    skills: [
      { name: "Data Cleaning", level: 90 },
      { name: "Exploratory Analysis", level: 85 },
      { name: "Dashboard Design", level: 88 },
      { name: "Business Insights", level: 82 },
    ],
  },
  {
    title: "Other Skills",
    icon: Palette,
    skills: [
      { name: "Alight Motion", level: 70 },
      { name: "Unity Engine", level: 60 },
      { name: "PHP", level: 65 },
      { name: "Storytelling", level: 80 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary/80 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ 
            duration: shouldReduceMotion ? 0 : 1, 
            delay: shouldReduceMotion ? 0 : delay, 
            ease: [0.25, 0.4, 0.25, 1] 
          }}
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full relative"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={!shouldReduceMotion ? { x: ["-100%", "100%"] } : {}}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

const Skills = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills" className="py-24 relative section-glass">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeInOnScroll>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              My Expertise
            </span>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-4">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
          </FadeInOnScroll>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <FadeInOnScroll
              key={category.title}
              delay={0.2 + categoryIndex * 0.1}
              direction={categoryIndex % 2 === 0 ? "left" : "right"}
            >
              <GlassCard className="h-full group">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/25"
                    whileHover={!shouldReduceMotion ? { scale: 1.1, rotate: 5 } : {}}
                  >
                    <category.icon className="w-6 h-6" />
                  </motion.div>
                  <h3 className="font-heading font-semibold text-lg">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={0.3 + categoryIndex * 0.1 + skillIndex * 0.08}
                    />
                  ))}
                </div>
              </GlassCard>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;