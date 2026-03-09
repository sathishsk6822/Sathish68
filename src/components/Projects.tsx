import { useState, useMemo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ExternalLink, X, Target, Lightbulb, TrendingUp, Info, Database, Bot, Sparkles, Code2, BrainCircuit } from "lucide-react";
import jewelleryDashboard from "@/assets/jewellery-dashboard.png";
import playstoreDashboard from "@/assets/playstore-dashboard.png";
import olaDashboard from "@/assets/ola-dashboard.png";
import movieDashboard from "@/assets/movie-dashboard.png";
import FadeInOnScroll from "./motion/FadeInOnScroll";

const projects = [
  {
    title: "Jewellery Shop – Pledge Analysis",
    description: "Business intelligence for pledge monitoring and interest tracking.",
    image: jewelleryDashboard,
    tech: ["Power BI", "Excel", "SQL"],
    category: "data",
    caseStudy: {
      problem: "A major jewellery retailer struggled with manual ledger-based tracking of gold/silver pledges. This led to massive delays in calculating accrued interest, frequent human errors, and a total lack of visibility into the inventory's metal weight and market value.",
      process: "Conducted a thorough audit of the manual ledger system, identifying key interest calculation variables (purity, weight, principal). I then designed a relational SQL database to house historical pledge records and built a Power BI data model using complex DAX formulas to automate interest compounding and gold rate normalization.",
      solution: "Created an automated BI solution that tracks every pledge from inception to release. The dashboard features real-time calculators for metal purity, weight distribution, and cumulative interest, pulling live data from market price APIs.",
      impact: "Eliminated interest calculation errors entirely and reduced reporting time from 3 days to 15 seconds. Management now has instant visibility into the $2M+ pledge portfolio, enabling better liquidity planning.",
      liveUrl: "#"
    }
  },
  {
    title: "Google Play Store Insights",
    description: "Deep dive into app performance, ratings, and market trends.",
    image: playstoreDashboard,
    tech: ["Power BI", "Python", "Data Cleaning"],
    category: "data",
    caseStudy: {
      problem: "With over 3 million apps on the Play Store, developers fail to identify why some apps with high ratings still have low retention. The client needed to understand the hidden correlations between app size, price updates, and long-term user density.",
      process: "Scraped and cleaned a dataset of 10k+ apps using Python (Pandas/NumPy). Applied multi-variate regression analysis to identify the strongest predictors of app 'Install Density.' I then visualized these performance clusters using Power BI scatter plots and heatmaps.",
      solution: "An interactive analytics suite that allows developers to benchmark their app against category leaders. It highlights 'Sweet Spots' for app size and identifies at which rating threshold user churn begins to accelerate.",
      impact: "Discovered that frequent updates (bi-weekly) have a 40% higher correlation with retention than initial high ratings. Provided actionable advice for 3 client apps, leading to a 12% increase in their average user session length.",
      liveUrl: "#"
    }
  },
  {
    title: "OLA Rides – Revenue Dashboard",
    description: "Operational analytics for ride-hailing performance and revenue.",
    image: olaDashboard,
    tech: ["Power BI", "DAX", "Data Modelling"],
    category: "data",
    caseStudy: {
      problem: "Regional managers at OLA faced difficulty in identifying peak demand zones during non-standard hours. Fragmented ride records made it hard to track driver density against ride requests, leading to increased 'Cancel' rates in high-revenue areas.",
      process: "Integrated 50k+ daily ride records from SQL servers into a centralized Power BI model. Engineered custom DAX measures for 'Demand-Supply Gap' and 'Revenue Per Available Driver.' Created time-series visualizations to map ride patterns across 24-hour cycles.",
      solution: "Built a high-performance Revenue Dashboard that visualizes hotspots using geospatial mapping. It tracks driver drop-off points, peak-hour revenue surges, and category-specific (Mini, Prime, Rental) performance analytics.",
      impact: "Enabled the identifying of 5 high-demand zones previously ignored. Strategic reallocation based on these insights led to a potential 15% improvement in overall driver utilization and a 10% reduction in customer wait times.",
      liveUrl: "#"
    }
  },
  {
    title: "Movie Sales Visualization",
    description: "Global revenue tracking and profit margin analysis for film industry.",
    image: movieDashboard,
    tech: ["Power BI", "Data Analysis", "Visualization"],
    category: "data",
    caseStudy: {
      problem: "Production houses often over-invest in high-budget marketing without a clear understanding of the 'Long Tail' revenue of specific genres. There was a lack of clear correlation analysis between opening weekend spend and long-term net profit margins.",
      process: "Gathered revenue data for 500+ global releases. Analyzed the relationship between marketing budget, genre popularity, and revenue decay over 12 weeks. I used Power BI's advanced charting to visualize 'Profit Multipliers' rather than just raw revenue.",
      solution: "An Executive Revenue Tracker that breaks down profit margins by territory, genre, and duration. It uses Sankey diagrams to show budget outflow vs. revenue inflow, highlighting which segments are the most cost-effective.",
      impact: "Revealed that 'Niche Horror' and 'Indie Drama' had 25% higher ROI despite having 80% lower budgets than blockbusters. This insight allowed a mid-sized studio to pivot their production strategy, diversifying their portfolio for steadier returns.",
      liveUrl: "#"
    }
  },
  // {
  //   title: "LLM Performance Benchmark",
  //   description: "Comparative analysis system for LLM latency and accuracy.",
  //   image: playstoreDashboard, // Using placeholder
  //   tech: ["Python", "OpenAI API", "Pandas"],
  //   category: "prompt",
  //   caseStudy: {
  //     problem: "Enterprises struggle to choose between models like GPT-4o, Claude 3.5, and Llama 3 for specific tasks, often overpaying for simple reasoning or sacrificing quality for speed without a systematic evaluation framework.",
  //     process: "Built a Python-based benchmarking engine that executes complex prompt sets across multiple LLM endpoints. Implemented automated scoring using LLM-as-a-judge (GPT-4o evaluating Llama) and calculated BLEU/ROUGE metrics for factual consistency.",
  //     solution: "A dynamic dashboard that ranks LLMs based on 'Accuracy-per-Dollar.' It maps latency, token cost, and reasoning quality, allowing developers to choose the right model for every micro-service based on real-world performance data.",
  //     impact: "Reduced operational costs by 30% for a pilot project by identifying that 70% of classification tasks could be handled by smaller models without any loss in accuracy.",
  //     liveUrl: "#"
  //   }
  // },
  // {
  //   title: "Automated Data Cleaning Chain",
  //   description: "Prompt-based extraction of structured data from messy documents.",
  //   image: movieDashboard, // Using placeholder
  //   tech: ["Prompt Engineering", "JSON Mode", "Few-Shot"],
  //   category: "prompt",
  //   caseStudy: {
  //     problem: "A logistics company processed 500+ non-standardized invoice PDFs daily. Traditional OCR failed to accurately categorize vendor names and complex SKU descriptions, requiring 4 hours of manual correction every morning.",
  //     process: "Engineered a multi-stage 'Chain-of-Thought' prompt strategy. The first stage extracted raw text, the second stage sanitized the noise using few-shot examples, and the final stage enforced a strict JSON schema for 100% downstream compatibility.",
  //     solution: "An automated extraction pipeline that uses 'Semantic Validation' prompts to verify SKU codes and currency formats before finalizing the data. It utilizes JSON mode to ensure the output is always developer-ready.",
  //     impact: "Achieved an extraction accuracy of 99.5%, effectively replacing the manual review process. This saved the company 1,200+ man-hours annually and accelerated the billing cycle significantly.",
  //     liveUrl: "#"
  //   }
  // },
  // {
  //   title: "Semantic Context Optimization",
  //   description: "Advanced RAG strategies for improved information retrieval.",
  //   image: jewelleryDashboard, // Using placeholder
  //   tech: ["Pinecone", "LangChain", "Reranking"],
  //   category: "prompt",
  //   caseStudy: {
  //     problem: "Users of an internal technical Wiki complained that the AI assistant often 'hallucinated' or missed key details because the RAG (Retrieval-Augmented Generation) system was fetching irrelevant document chunks.",
  //     process: "Optimized the embedding strategy and implemented 'Context-Aware' prompts that re-rank retrieved chunks based on semantic relevance before feeding them to the LLM. I used LangChain to build a sophisticated reranking filter.",
  //     solution: "A 'Smart Context' wrapper that pre-processes user queries to better match vector embeddings and post-processes retrieved data to ensure the most critical information is placed at the top of the prompt (solving the 'lost-in-the-middle' problem).",
  //     impact: "Reduced hallucination rates by 45% and improved the 'Groundness' score of answers by 60%, resulting in a significantly more reliable assistant for technical staff.",
  //     liveUrl: "#"
  //   }
  // }
];

const ProjectCard = ({
  project,
  index,
  onOpen
}: {
  project: (typeof projects)[0];
  index: number;
  onOpen: () => void;
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <div
        className="group relative h-[380px] w-full rounded-2xl overflow-hidden border border-border/50 bg-card/30 backdrop-blur-sm shadow-xl hover:border-primary/50 transition-all duration-500 cursor-pointer"
        onClick={onOpen}
      >
        {/* Project Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10" />
        </div>

        {/* Category Icon */}
        <div className="absolute top-4 right-4 z-20">
          <div className="p-2 rounded-xl bg-background/50 backdrop-blur-md border border-border/50 text-primary">
            {project.category === 'data' ? <Database size={18} /> : <Bot size={18} />}
          </div>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[10px] font-semibold rounded-md bg-primary/20 text-primary border border-primary/30 backdrop-blur-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h3 className="font-heading font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>

            <p className="text-muted-foreground text-[13px] font-medium leading-relaxed mb-4 line-clamp-2">
              {project.description}
            </p>

            <div className="flex items-center gap-2 text-primary text-[13px] font-bold">
              <span className="uppercase tracking-wider">Explore Analysis</span>
              <Info className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Glossy highlight effect on hover (Redistributed to reduce glare) */}
        <div className="absolute inset-x-0 top-0 h-1/2 z-30 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none bg-gradient-to-b from-white/10 to-transparent" />
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }: { project: (typeof projects)[0], onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-background/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="w-full max-w-4xl max-h-[90vh] bg-card border border-border shadow-2xl rounded-3xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-48 md:h-64 flex-shrink-0 overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-background/50 backdrop-blur-md border border-border/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-all z-10"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 md:p-10 -mt-12 relative z-10">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map(t => (
              <span key={t} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20">
                {t}
              </span>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">{project.title}</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-10 text-balance">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[11px]">
                <Target size={18} />
                <span>The Problem</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed italic border-l-2 border-primary/20 pl-4">{project.caseStudy.problem}</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-accent font-bold uppercase tracking-widest text-[11px]">
                <Sparkles size={18} />
                <span>The Process</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.caseStudy.process}</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[11px]">
                <Lightbulb size={18} />
                <span>The Solution</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.caseStudy.solution}</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[11px]">
                <TrendingUp size={18} />
                <span>The Impact</span>
              </div>
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                <p className="text-sm font-semibold text-foreground leading-relaxed">{project.caseStudy.impact}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-6 border-t border-border/50">
            <Button variant="hero" asChild>
              <a href={project.caseStudy.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={18} className="mr-2" />
                Live Version
              </a>
            </Button>
            <Button variant="heroOutline" onClick={onClose}>
              Close Preview
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

interface ButtonProps {
  children?: React.ReactNode;
  variant?: string;
  asChild?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, variant, asChild, className, onClick }: ButtonProps) => {
  const base = "inline-flex items-center justify-center px-6 py-3 rounded-full font-heading font-bold transition-all duration-300 ";
  const styles = variant === 'hero'
    ? "bg-primary text-primary-foreground hover:glow-effect"
    : "border border-border/50 bg-secondary/30 hover:bg-secondary/50";

  const Component = asChild ? motion.div : 'button';

  return (
    <Component className={base + styles + " " + className} onClick={onClick}>
      {children}
    </Component>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'data' | 'prompt'>('all');

  const filteredProjects = useMemo(() => {
    if (activeTab === 'all') return projects;
    return projects.filter(p => p.category === activeTab);
  }, [activeTab]);

  const tabs = [
    { id: 'all', label: 'All Projects', icon: Sparkles },
    { id: 'data', label: 'Data Analytics', icon: Database },
    { id: 'prompt', label: 'Prompt Engineering', icon: BrainCircuit },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeInOnScroll>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Selected Showcase
            </span>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4">
              Specialized <span className="gradient-text">Projects</span>
            </h2>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.2}>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto italic">
              "Turning raw complexity into structured strategic value."
            </p>
          </FadeInOnScroll>
        </div>

        {/* Categories Tab */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'all' | 'data' | 'prompt')}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl border transition-all duration-300 ${activeTab === tab.id
                ? 'bg-primary/20 border-primary text-primary shadow-glow scale-105'
                : 'bg-secondary/10 border-border/50 text-muted-foreground hover:border-primary/50'
                }`}
            >
              <tab.icon size={18} />
              <span className="font-heading font-semibold text-sm">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                onOpen={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

