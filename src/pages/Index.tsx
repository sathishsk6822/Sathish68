import Hero from "@/components/Hero";
import About from "@/components/About";
import AnalyticsProcess from "@/components/AnalyticsProcess";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import ScrollConnector from "@/components/ScrollConnector";
import AmbientBackgroundOrbs from "@/components/backgrounds/AmbientBackgroundOrbs";

const Index = () => {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <AmbientBackgroundOrbs />
      <ScrollConnector />

      {/* Content */}
      <div className="relative z-10 w-full">
        <Hero />
        <About />
        <AnalyticsProcess />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </div>
    </main>
  );
};

export default Index;
