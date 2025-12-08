import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import jewelleryDashboard from "@/assets/jewellery-dashboard.png";
import playstoreDashboard from "@/assets/playstore-dashboard.png";
import olaDashboard from "@/assets/ola-dashboard.png";
import FadeInOnScroll from "./motion/FadeInOnScroll";

const projects = [
  {
    title: "Jewellery Shop – Pledge Analysis Dashboard",
    description:
      "Power BI dashboard for jewellery pledges and interest. KPIs for pledge amount, jewel value, total gold & silver weight, and max duration. Customer-level breakdown of pledge dates, amounts and release status. Bar chart for interest paid per customer, with slicers for jewel description and customer name.",
    image: jewelleryDashboard,
    tech: ["Power BI", "Excel", "SQL"],
  },
  {
    title: "Google Play Store Analysis Insights",
    description:
      "Analysed installs, ratings and Android versions using Play Store dataset. Visuals: installs by genre, app type (free/paid), and category. Scatter, line and donut charts to show adoption and popularity. Identified top-performing categories and rating patterns.",
    image: playstoreDashboard,
    tech: ["Power BI", "Python", "Data Cleaning"],
  },
  {
    title: "OLA Rides – Revenue & Bookings Dashboard",
    description:
      "Revenue, bookings, ride status and distance analytics. KPIs: total revenue, total distance, successful rides, lost rides, total bookings. Time-series for revenue by day, bar charts for bookings, performance by vehicle type. Included customer and driver ratings for service quality insights.",
    image: olaDashboard,
    tech: ["Power BI", "DAX", "Data Modelling"],
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <FadeInOnScroll delay={index * 0.15} direction="up">
      <motion.div
        className="group h-full"
        whileHover={!shouldReduceMotion ? { y: -8 } : {}}
        transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
      >
        <div className="glass-card rounded-xl overflow-hidden h-full flex flex-col transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-xl group-hover:shadow-primary/10">
          {/* Image */}
          <div className="relative overflow-hidden aspect-video">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              whileHover={!shouldReduceMotion ? { scale: 1.08 } : {}}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-60" />
            
            {/* Overlay on Hover */}
            <motion.div
              className="absolute inset-0 bg-primary/20 backdrop-blur-sm flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-14 h-14 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/30"
                whileHover={!shouldReduceMotion ? { scale: 1.1 } : {}}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-6 h-6" />
              </motion.div>
            </motion.div>

            {/* Glow effect on hover */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
            />
          </div>

          {/* Content */}
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="font-heading font-semibold text-xl mb-3 group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
              {project.description}
            </p>
            
            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 transition-all duration-300 hover:bg-primary/20 hover:border-primary/40"
                  whileHover={!shouldReduceMotion ? { scale: 1.05 } : {}}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </FadeInOnScroll>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeInOnScroll>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              My Work
            </span>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.2}>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A collection of data analysis and visualization projects showcasing my expertise in Power BI, SQL, and data storytelling.
            </p>
          </FadeInOnScroll>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;