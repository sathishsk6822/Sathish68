import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const AmbientBackgroundOrbs = () => {
    const shouldReduceMotion = useReducedMotion();
    const [windowHeight, setWindowHeight] = useState(2000);

    useEffect(() => {
        // Keep track of document height to spread orbs out
        const updateHeight = () => {
            setWindowHeight(document.documentElement.scrollHeight);
        };
        updateHeight();
        window.addEventListener("resize", updateHeight);
        return () => window.removeEventListener("resize", updateHeight);
    }, []);

    const orbs = [
        { id: 1, color: "bg-primary/5", size: "w-[400px] h-[400px]", top: "10%", left: "5%" },
        { id: 2, color: "bg-accent/5", size: "w-[300px] h-[300px]", top: "30%", left: "80%" },
        { id: 3, color: "bg-primary/5", size: "w-[500px] h-[500px]", top: "50%", left: "-10%" },
        { id: 4, color: "bg-accent/5", size: "w-[350px] h-[350px]", top: "70%", left: "85%" },
        { id: 5, color: "bg-primary/5", size: "w-[450px] h-[450px]", top: "90%", left: "10%" },
    ];

    if (shouldReduceMotion) return null;

    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" style={{ height: windowHeight }}>
            {orbs.map((orb) => (
                <motion.div
                    key={orb.id}
                    className={`absolute rounded-full blur-[100px] ${orb.color} ${orb.size}`}
                    style={{ top: orb.top, left: orb.left }}
                    animate={{
                        y: [0, -50, 0, 50, 0],
                        x: [0, 30, 0, -30, 0],
                        scale: [1, 1.1, 1, 0.9, 1],
                    }}
                    transition={{
                        duration: 15 + Math.random() * 10,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
};

export default AmbientBackgroundOrbs;
