import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import jewelleryDashboard from "@/assets/jewellery-dashboard.png";
import playstoreDashboard from "@/assets/playstore-dashboard.png";
import olaDashboard from "@/assets/ola-dashboard.png";
import movieDashboard from "@/assets/movie-dashboard.png";
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
  {
    title: "Movie Sales Visualization",
    description:
      "Comprehensive revenue overview for movie sales. Features KPIs for total revenue, profit margins and opening weekend performance. Visualizes profit margin against box office revenue via scatter plots. Analyzes revenue by genre in donut charts and tracks revenue and margin trends by movie title.",
    image: movieDashboard,
    tech: ["Power BI", "Data Analysis", "Visualization"],
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
    <FadeInOnScroll delay={index * 0.15} direction="up" className="h-[320px]">
      <div className="group h-full w-full perspective-1000">
        <motion.div
          className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-x-180"
          initial={false}
        >
          {/* Front Face */}
          <div className="absolute inset-0 backface-hidden glass-card rounded-xl overflow-hidden shadow-card">
            <div className="relative w-full h-full bg-muted/20">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain p-4 pb-16"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent flex flex-col justify-end p-5">
                <h3 className="font-heading font-semibold text-lg text-card-foreground">
                  {project.title}
                </h3>
              </div>
            </div>
          </div>

          {/* Back Face */}
          <div className="absolute inset-0 backface-hidden rotate-x-180 glass-card rounded-xl overflow-hidden flex flex-col p-6 shadow-card hover:border-primary/50 hover:shadow-primary/20 transition-all duration-300">
            <div className="flex-1 flex flex-col h-full overflow-y-auto custom-scrollbar">
              <h3 className="font-heading font-semibold text-xl mb-3 text-primary shrink-0">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 shrink-0 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Optional Link Button */}
              <div className="mt-auto shrink-0 flex items-center gap-2 text-primary text-sm font-medium hover:underline cursor-pointer">
                <span>View Details</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
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