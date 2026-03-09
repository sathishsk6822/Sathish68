import { motion, useReducedMotion } from "framer-motion";
import { Beaker, Brain, Sparkles, Code, Terminal } from "lucide-react";
import FadeInOnScroll from "./motion/FadeInOnScroll";
import GlassCard from "./motion/GlassCard";

const experiments = [
    {
        title: "AI Prompt Optimization",
        topic: "Prompt Engineering",
        description: "Developing structured prompt templates for LLM-based data cleaning and automated insight generation.",
        icon: Sparkles,
        status: "Active"
    },
    {
        title: "Advanced DAX Patterns",
        topic: "Business Intelligence",
        description: "Experimenting with complex time-intelligence and recursive DAX formulas for retail sales forecasting.",
        icon: Brain,
        status: "Completed"
    },
    {
        title: "Python-Based Web Scrapers",
        topic: "Data Engineering",
        description: "Building automated scrapers using Selenium and BeautifulSoup to track market prices in real-time.",
        icon: Terminal,
        status: "Active"
    }
];

const LearningLab = () => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section id="lab" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <FadeInOnScroll>
                            <span className="text-primary font-medium text-sm uppercase tracking-wider flex items-center gap-2">
                                <Beaker size={16} className="text-primary" /> The Lab
                            </span>
                        </FadeInOnScroll>
                        <FadeInOnScroll delay={0.1}>
                            <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4">
                                Current <span className="gradient-text">Experiments</span>
                            </h2>
                            <p className="text-muted-foreground mt-4">
                                A sandbox for continuous learning, where I explore the intersection of Generative AI, advanced analytics, and automated data workflows.
                            </p>
                        </FadeInOnScroll>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {experiments.map((exp, index) => (
                        <FadeInOnScroll
                            key={exp.title}
                            delay={0.2 + index * 0.1}
                            direction="up"
                        >
                            <GlassCard className="h-full group hover:border-primary/40 transition-all duration-500 overflow-hidden">
                                <div className="absolute top-0 right-0 p-4">
                                    <span className={`text-[10px] px-2 py-1 rounded-full border ${exp.status === 'Active' ? 'border-primary/50 text-primary bg-primary/5' : 'border-muted text-muted-foreground'
                                        }`}>
                                        {exp.status}
                                    </span>
                                </div>

                                <div className="mb-6 relative">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                        <exp.icon size={24} />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <span className="text-xs font-medium text-primary uppercase tracking-tighter">
                                            {exp.topic}
                                        </span>
                                        <h3 className="text-xl font-heading font-semibold mt-1 group-hover:text-primary transition-colors">
                                            {exp.title}
                                        </h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>

                                <div className="mt-8 pt-6 border-t border-border/50 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="flex items-center gap-2 text-xs font-medium text-foreground">
                                        <Code size={14} className="text-primary" />
                                        View Repository
                                    </div>
                                </div>
                            </GlassCard>
                        </FadeInOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LearningLab;
