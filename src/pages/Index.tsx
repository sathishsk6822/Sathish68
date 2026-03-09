import Hero from "@/components/Hero";
import About from "@/components/About";
import AnalyticsProcess from "@/components/AnalyticsProcess";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen relative">
      <Hero />
      <About />
      <AnalyticsProcess />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
};

export default Index;
