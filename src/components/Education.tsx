import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Calendar } from "lucide-react";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Sacred Heart College (Thiruvalluvar University)",
    period: "2023 – 2025",
    grade: "GPA: 7.7/10",
    type: "degree",
  },
  {
    degree: "PG Diploma in Data Science",
    institution: "Sacred Heart College",
    period: "2024 – 2025",
    grade: "",
    type: "degree",
  },
  {
    degree: "B.Sc Computer Science",
    institution: "Sri Vidya Mandir Arts & Science College",
    period: "2020 – 2023",
    grade: "GPA: 8.9/10",
    type: "degree",
  },
];

const certifications = [
  {
    title: "Technologies for Data Science",
    issuer: "Sacred Heart College",
    type: "certification",
  },
  {
    title: "Mobile Application Development",
    issuer: "Sacred Heart College",
    type: "certification",
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 relative">
      <div className="absolute inset-0 data-dots opacity-10" />

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
              Background
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-heading font-bold mt-4"
            >
              Education & <span className="gradient-text">Certifications</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Education */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-semibold text-xl">Education</h3>
              </motion.div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="glass-card rounded-xl p-5 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-heading font-semibold text-foreground">
                          {edu.degree}
                        </h4>
                        <p className="text-primary text-sm mt-1">{edu.institution}</p>
                        {edu.grade && (
                          <p className="text-muted-foreground text-sm mt-2">{edu.grade}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground shrink-0">
                        <Calendar className="w-3 h-3" />
                        {edu.period}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-semibold text-xl">Certifications</h3>
              </motion.div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="glass-card rounded-xl p-5 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 border-l-4 border-accent/50"
                  >
                    <h4 className="font-heading font-semibold text-foreground">
                      {cert.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mt-1">{cert.issuer}</p>
                  </motion.div>
                ))}
              </div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="mt-8 grid grid-cols-2 gap-4"
              >
                <div className="glass-card rounded-xl p-4 text-center">
                  <div className="text-3xl font-heading font-bold gradient-text">3+</div>
                  <div className="text-sm text-muted-foreground mt-1">Degrees</div>
                </div>
                <div className="glass-card rounded-xl p-4 text-center">
                  <div className="text-3xl font-heading font-bold gradient-text">2+</div>
                  <div className="text-sm text-muted-foreground mt-1">Certifications</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
