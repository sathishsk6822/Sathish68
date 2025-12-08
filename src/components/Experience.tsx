import { motion, useReducedMotion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import FadeInOnScroll from "./motion/FadeInOnScroll";
import GlassCard from "./motion/GlassCard";

const experiences = [
  {
    title: "Power BI Intern",
    company: "Queenbug Technologies",
    location: "India",
    period: "2024 – 2025",
    description: [
      "Developed interactive dashboards for a jewellery shop admin system",
      "Built modules for Pledge, Release, Accountant and Customers",
      "Created real-time analytics to support decision-making",
    ],
  },
];

const Experience = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="py-24 relative section-glass">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeInOnScroll>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Career
            </span>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
          </FadeInOnScroll>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <FadeInOnScroll key={index} delay={0.2} direction="left">
              <div className="relative pl-8 pb-12 last:pb-0">
                {/* Timeline Line */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-px"
                  style={{
                    background: "linear-gradient(to bottom, hsl(var(--primary)), hsl(var(--accent)), transparent)",
                  }}
                  initial={{ scaleY: 0, originY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: shouldReduceMotion ? 0 : 1, delay: 0.3 }}
                />
                
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  whileHover={!shouldReduceMotion ? { scale: 1.3 } : {}}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                {/* Content Card */}
                <GlassCard>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-heading font-semibold text-xl">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-3 text-muted-foreground text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <motion.span
                          className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"
                          whileHover={!shouldReduceMotion ? { scale: 1.5 } : {}}
                        />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;