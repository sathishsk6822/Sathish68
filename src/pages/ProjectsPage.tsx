import Projects from "@/components/Projects";
import { motion } from "framer-motion";
import AmbientBackgroundOrbs from "@/components/backgrounds/AmbientBackgroundOrbs";

const ProjectsPage = () => {
    return (
        <main className="min-h-screen relative overflow-hidden">
            <AmbientBackgroundOrbs />
            <div className="pt-24 min-h-[calc(100vh-80px)] relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Projects />
                </motion.div>
            </div>
        </main>
    );
};

export default ProjectsPage;
