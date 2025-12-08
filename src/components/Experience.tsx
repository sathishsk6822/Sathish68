import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-secondary/30 relative">
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
              Career
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-heading font-bold mt-4"
            >
              Work <span className="gradient-text">Experience</span>
            </motion.h2>
          </div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.2 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Timeline Line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
                
                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50" />

                {/* Content Card */}
                <div className="glass-card rounded-xl p-6 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
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
                      <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
