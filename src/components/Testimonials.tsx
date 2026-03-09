import { motion, useReducedMotion } from "framer-motion";
import { Quote, MessageSquare } from "lucide-react";
import FadeInOnScroll from "./motion/FadeInOnScroll";
import GlassCard from "./motion/GlassCard";

const testimonials = [
  {
    name: "Business Director",
    role: "Global Logistics Firm",
    text: "Sathish's ability to take fragmented tracking data and turn it into a cohesive Power BI dashboard was game-changing for our regional reporting.",
    avatar: "BD"
  },
  {
    name: "Senior Data Scientist",
    role: "FinTech Startup",
    text: "Extremely detail-oriented. The SQL optimizations Sathish implemented reduced our report generation time by nearly 40%.",
    avatar: "DS"
  },
  {
    name: "Academic Lead",
    role: "Technical University",
    text: "A standout professional with a deep understanding of the analytical lifecycle. His contributions to data modeling were exemplary.",
    avatar: "AL"
  }
];

const Testimonials = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-secondary/10">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <FadeInOnScroll>
            <span className="text-primary font-medium text-sm uppercase tracking-wider flex items-center justify-center gap-2">
              <MessageSquare size={16} /> Social Proof
            </span>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4">
              Voices of <span className="gradient-text">Trust</span>
            </h2>
          </FadeInOnScroll>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((test, index) => (
            <FadeInOnScroll 
              key={test.name} 
              delay={0.2 + index * 0.1} 
              direction="up"
            >
              <GlassCard className="h-full flex flex-col justify-between group hover:border-primary/30 transition-all duration-300">
                <div>
                  <div className="mb-6">
                    <Quote className="text-primary/40 w-10 h-10" />
                  </div>
                  <p className="text-muted-foreground italic mb-8 relative z-10">
                    "{test.text}"
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border/50">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                    {test.avatar}
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-sm">{test.name}</h4>
                    <p className="text-xs text-muted-foreground">{test.role}</p>
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

export default Testimonials;
