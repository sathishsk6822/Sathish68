import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";
import FadeInOnScroll from "./motion/FadeInOnScroll";
import GlassCard from "./motion/GlassCard";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Sacred Heart College (Thiruvalluvar University)",
    period: "2023 – 2025",
    grade: "GPA: 7.7/10",
  },
  {
    degree: "PG Diploma in Data Science",
    institution: "Sacred Heart College",
    period: "2024 – 2025",
    grade: "",
  },
  {
    degree: "B.Sc Computer Science",
    institution: "Sri Vidya Mandir Arts & Science College",
    period: "2020 – 2023",
    grade: "GPA: 8.9/10",
  },
];

const certifications = [
  {
    title: "Technologies for Data Science",
    issuer: "Sacred Heart College",
  },
  {
    title: "Mobile Application Development",
    issuer: "Sacred Heart College",
  },
];

const Education = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeInOnScroll>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Background
            </span>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-4">
              Education & <span className="gradient-text">Certifications</span>
            </h2>
          </FadeInOnScroll>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Education */}
          <div>
            <FadeInOnScroll direction="left" delay={0.2}>
              <div className="flex items-center gap-3 mb-8">
                <motion.div
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary"
                  whileHover={!shouldReduceMotion ? { scale: 1.1, rotate: 5 } : {}}
                >
                  <GraduationCap className="w-5 h-5" />
                </motion.div>
                <h3 className="font-heading font-semibold text-xl">Education</h3>
              </div>
            </FadeInOnScroll>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <FadeInOnScroll key={index} delay={0.3 + index * 0.1} direction="left">
                  <GlassCard>
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
                  </GlassCard>
                </FadeInOnScroll>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <FadeInOnScroll direction="right" delay={0.2}>
              <div className="flex items-center gap-3 mb-8">
                <motion.div
                  className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent"
                  whileHover={!shouldReduceMotion ? { scale: 1.1, rotate: -5 } : {}}
                >
                  <Award className="w-5 h-5" />
                </motion.div>
                <h3 className="font-heading font-semibold text-xl">Certifications</h3>
              </div>
            </FadeInOnScroll>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <FadeInOnScroll key={index} delay={0.4 + index * 0.1} direction="right">
                  <GlassCard glowColor="accent" className="border-l-4 border-l-accent/50">
                    <h4 className="font-heading font-semibold text-foreground">
                      {cert.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mt-1">{cert.issuer}</p>
                  </GlassCard>
                </FadeInOnScroll>
              ))}
            </div>

            {/* Quick Stats */}
            <FadeInOnScroll delay={0.6} direction="up">
              <div className="mt-8 grid grid-cols-2 gap-4">
                <GlassCard className="text-center py-4">
                  <motion.div
                    className="text-3xl font-heading font-bold gradient-text"
                    whileHover={!shouldReduceMotion ? { scale: 1.1 } : {}}
                  >
                    3+
                  </motion.div>
                  <div className="text-sm text-muted-foreground mt-1">Degrees</div>
                </GlassCard>
                <GlassCard className="text-center py-4">
                  <motion.div
                    className="text-3xl font-heading font-bold gradient-text"
                    whileHover={!shouldReduceMotion ? { scale: 1.1 } : {}}
                  >
                    2+
                  </motion.div>
                  <div className="text-sm text-muted-foreground mt-1">Certifications</div>
                </GlassCard>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;