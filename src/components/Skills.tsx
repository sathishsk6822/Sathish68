import { motion } from "framer-motion";
import {
  BarChart3,
  Code2,
  Database,
  Cpu,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import FadeInOnScroll from "./motion/FadeInOnScroll";

const skillCategories = [
  {
    title: "Analytics & Visualization",
    icon: BarChart3,
    color: "blue",
    skills: [
      { name: "Power BI (DAX, Modelling)", level: 95 },
      { name: "Excel (VBA, Power Query)", level: 98 },
      { name: "Tableau", level: 80 },
      { name: "Data Storytelling", level: 90 },
    ],
  },
  {
    title: "Data Engineering",
    icon: Database,
    color: "amber",
    skills: [
      { name: "SQL (PostgreSQL, MySQL)", level: 92 },
      { name: "Data Cleaning (ETL)", level: 95 },
      { name: "MongoDB / NoSQL", level: 75 },
    ],
  },
  {
    title: "Intelligence & Logic",
    icon: Cpu,
    color: "emerald",
    skills: [
      { name: "Python (Pandas, NumPy)", level: 85 },
      { name: "Statistical Analysis", level: 85 },
      { name: "LLMs / Prompt Eng.", level: 80 },
    ],
  },
  {
    title: "Technical Foundation",
    icon: Code2,
    color: "indigo",
    skills: [
      { name: "React / TypeScript", level: 75 },
      { name: "API Integration", level: 80 },
      { name: "Automation Scripts", level: 88 },
    ],
  },
  {
    title: "Domain Strategy",
    icon: Layers,
    color: "rose",
    skills: [
      { name: "Financial Reporting", level: 90 },
      { name: "Problem Solving", level: 98 },
      { name: "ROI Analysis", level: 85 },
    ],
  },
];

const SkillCard = ({ category, index }: { category: typeof skillCategories[0]; index: number }) => {
  const colorMap = {
    blue: "from-blue-500 to-cyan-400 border-blue-500/20 shadow-blue-500/5",
    amber: "from-amber-500 to-orange-400 border-amber-500/20 shadow-amber-500/5",
    emerald: "from-emerald-500 to-teal-400 border-emerald-500/20 shadow-emerald-500/5",
    indigo: "from-indigo-500 to-violet-400 border-indigo-500/20 shadow-indigo-500/5",
    rose: "from-rose-500 to-pink-400 border-rose-500/20 shadow-rose-500/5",
  };

  const glowMap = {
    blue: "group-hover:shadow-blue-500/20",
    amber: "group-hover:shadow-amber-500/20",
    emerald: "group-hover:shadow-emerald-500/20",
    indigo: "group-hover:shadow-indigo-500/20",
    rose: "group-hover:shadow-rose-500/20",
  };

  const accentColor = {
    blue: "text-blue-400",
    amber: "text-amber-400",
    emerald: "text-emerald-400",
    indigo: "text-indigo-400",
    rose: "text-rose-400",
  };

  const barBg = {
    blue: "bg-blue-500",
    amber: "bg-amber-500",
    emerald: "bg-emerald-500",
    indigo: "bg-indigo-500",
    rose: "bg-rose-500",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group relative p-6 rounded-3xl border bg-slate-900/40 backdrop-blur-md transition-all duration-500 ${colorMap[category.color]} ${glowMap[category.color]}`}
    >
      {/* Background Glow */}
      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${colorMap[category.color]} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-8">
          <div className={`p-3 rounded-2xl bg-white/5 border border-white/5 ${accentColor[category.color]} transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
            <category.icon size={24} />
          </div>
          <ArrowUpRight size={18} className="text-white/10 group-hover:text-white/40 transition-colors" />
        </div>

        <h3 className="text-xl font-heading font-black text-white mb-6 uppercase tracking-tight italic">
          {category.title}
        </h3>

        <div className="space-y-5">
          {category.skills.map((skill, sIdx) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                <span className="text-slate-300">{skill.name}</span>
                <span className={accentColor[category.color]}>{skill.level}%</span>
              </div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 + sIdx * 0.1 }}
                  className={`h-full rounded-full ${barBg[category.color]}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-transparent">
      {/* We keep bg-transparent to ensure the global background (Stars/Matrix) shows through */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <FadeInOnScroll>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span>Core Competency Matrix</span>
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.1}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black tracking-tighter text-white uppercase italic">
              Tech <span className="gradient-text not-italic">Stack</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg mt-6 font-light">
              Specialized expertise in the data engineering lifecycle, from ingestion to strategic insights.
            </p>
          </FadeInOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}

          {/* Special Research Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-1 border border-white/5 bg-white/5 backdrop-blur-md rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group"
          >
            <div className="absolute -right-4 -top-4 text-white/5 transform group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700">
              <Cpu size={160} />
            </div>

            <div>
              <h3 className="text-2xl font-heading font-black text-white uppercase italic leading-tight mb-2">
                Active<br />Research
              </h3>
              <p className="text-slate-400 text-sm font-light italic">
                "Developing autonomous data agents and exploring Reranking Logic for RAG systems."
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-widest">
                Vector DB
              </div>
              <div className="px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-[10px] font-black uppercase tracking-widest">
                Graph RAG
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
