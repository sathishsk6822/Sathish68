import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  BarChart3, 
  Database, 
  FileSpreadsheet, 
  Code2, 
  Palette, 
  Gamepad2,
  TrendingUp,
  PieChart,
  Layers
} from "lucide-react";

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

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: delay, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-secondary/30 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div ref={ref}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium text-sm uppercase tracking-wider"
            >
              My Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-heading font-bold mt-4"
            >
              Skills & <span className="gradient-text">Technologies</span>
            </motion.h2>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + categoryIndex * 0.1 }}
                className="glass-card rounded-xl p-6 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={0.5 + categoryIndex * 0.1 + skillIndex * 0.1}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
