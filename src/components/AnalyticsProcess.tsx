import { motion, useReducedMotion } from "framer-motion";
import { Database, Search, LineChart, MessageSquare } from "lucide-react";
import FadeInOnScroll from "./motion/FadeInOnScroll";
import GlassCard from "./motion/GlassCard";

const steps = [
    {
        title: "Data Collection",
        icon: Database,
        description: "Structured extraction from diverse sources including SQL databases, APIs, and Excel workbooks.",
        color: "primary"
    },
    {
        title: "Data Preparation",
        icon: Search,
        description: "Rigorous cleaning and ETL processes to ensure data integrity, consistency, and analytical readiness.",
        color: "accent"
    },
    {
        title: "Analysis & Modeling",
        icon: LineChart,
        description: "Applying statistical models and DAX formulas to uncover hidden trends and predictive insights.",
        color: "primary"
    },
    {
        title: "Visual Storytelling",
        icon: MessageSquare,
        description: "Crafting intuitive Power BI dashboards that translate complex findings into actionable business strategy.",
        color: "accent"
    }
];

const AnalyticsProcess = () => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <FadeInOnScroll>
                        <span className="text-primary font-medium text-sm uppercase tracking-wider">
                            Methodology
                        </span>
                    </FadeInOnScroll>
                    <FadeInOnScroll delay={0.1}>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mt-4">
                            My Analytical <span className="gradient-text">Workflow</span>
                        </h2>
                    </FadeInOnScroll>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {steps.map((step, index) => (
                        <FadeInOnScroll
                            key={step.title}
                            delay={0.2 + index * 0.1}
                            direction="up"
                        >
                            <GlassCard className="h-full group hover:border-primary/30 transition-all duration-300">
                                <div className="mb-6">
                                    <motion.div
                                        className={`w-14 h-14 rounded-2xl bg-${step.color}/10 flex items-center justify-center text-${step.color} shadow-inner`}
                                        whileHover={!shouldReduceMotion ? { scale: 1.1, rotate: 5 } : {}}
                                    >
                                        <step.icon size={28} />
                                    </motion.div>
                                </div>
                                <div className="relative">
                                    <span className="absolute -top-10 -right-2 text-6xl font-heading font-bold opacity-5 text-foreground select-none">
                                        0{index + 1}
                                    </span>
                                    <h3 className="text-xl font-heading font-semibold mb-3">{step.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </GlassCard>
                        </FadeInOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AnalyticsProcess;
