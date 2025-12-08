import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import jewelleryDashboard from "@/assets/jewellery-dashboard.png";
import playstoreDashboard from "@/assets/playstore-dashboard.png";
import olaDashboard from "@/assets/ola-dashboard.png";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group"
    >
      <div className="glass-card rounded-xl overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 h-full flex flex-col">
        {/* Image */}
        <div className="relative overflow-hidden aspect-video">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
          
          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0 }}
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground"
            >
              <ExternalLink className="w-5 h-5" />
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="font-heading font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
            {project.description}
          </p>
          
          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative">
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
              My Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-heading font-bold mt-4"
            >
              Featured <span className="gradient-text">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground mt-4 max-w-2xl mx-auto"
            >
              A collection of data analysis and visualization projects showcasing my expertise in Power BI, SQL, and data storytelling.
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
