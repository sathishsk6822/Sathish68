import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useMemo } from "react";

const DataPoint = ({ index, progress }: { index: number, progress: any }) => {
    const randomX = useMemo(() => Math.random() * 20 - 10, []);
    const yPos = useTransform(progress, [0, 1], [`${index * 15}%`, `${index * 15 + 10}%`]);
    const opacity = useTransform(progress, [index * 0.1 - 0.05, index * 0.1, index * 0.1 + 0.05], [0.1, 0.8, 0.1]);

    return (
        <motion.div
            className="absolute w-1.5 h-1.5 rounded-full bg-primary"
            style={{
                left: `calc(50% + ${randomX}px)`,
                top: yPos,
                opacity,
                boxShadow: "0 0 8px hsl(var(--primary))"
            }}
        />
    );
};

const ScrollConnector = () => {
    const { scrollYProgress } = useScroll();

    // Smooth the scroll progress
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 25,
        restDelta: 0.001
    });

    const barIndices = Array.from({ length: 12 });
    const dataPoints = Array.from({ length: 6 });

    // Generate a jagged "chart" path
    const chartPath = "M 20 0 L 10 50 L 30 100 L 15 150 L 35 200 L 10 250 L 30 300 L 5 350 L 25 400 L 15 450 L 35 500 L 10 550 L 30 600 L 20 650 L 35 700 L 15 750 L 20 800";

    return (
        <div className="fixed inset-0 z-0 pointer-events-none hidden xl:block overflow-hidden">
            {/* Left Side: The Dynamic Growth Chart */}
            <div className="absolute left-6 md:left-12 lg:left-16 top-0 bottom-0 w-12 flex flex-col items-center py-20">
                <svg viewBox="0 0 40 800" className="w-full h-full opacity-30 fill-none stroke-primary" preserveAspectRatio="xMidYMin slice">
                    <motion.path
                        d={chartPath}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ pathLength: smoothProgress }}
                    />
                    {/* Shadow/Glow path */}
                    <motion.path
                        d={chartPath}
                        strokeWidth="4"
                        strokeOpacity="0.1"
                        className="blur-[3px]"
                    />

                    {/* Floating Axis/Marker */}
                    <motion.circle
                        r="3"
                        fill="hsl(var(--primary))"
                        className="shadow-[0_0_10px_hsl(var(--primary))]"
                        style={{
                            offsetPath: `path('${chartPath}')`,
                            offsetDistance: useTransform(smoothProgress, [0, 1], ["0%", "100%"])
                        }}
                    />
                </svg>

                {/* Vertical Axis Guide */}
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-primary/10" />
            </div>

            {/* Right Side: The Kinetic Data Bars & Points */}
            <div className="absolute right-6 md:right-12 lg:right-16 top-0 bottom-0 w-16 flex flex-col items-center justify-around py-32">
                {barIndices.map((_, i) => {
                    // Unique width animation for each bar
                    const widthScale = useTransform(
                        smoothProgress,
                        [i * 0.08, i * 0.08 + 0.1],
                        ["20%", "100%"]
                    );
                    const opacity = useTransform(
                        smoothProgress,
                        [i * 0.08 - 0.05, i * 0.08, i * 0.08 + 0.05],
                        [0.2, 0.6, 0.2]
                    );

                    return (
                        <motion.div
                            key={`bar-${i}`}
                            className="h-[2px] bg-primary rounded-full relative"
                            style={{ width: widthScale, opacity }}
                        >
                            <div className="absolute inset-0 bg-primary blur-[2px] opacity-50" />
                        </motion.div>
                    );
                })}

                {/* Floating Parallax Data Points */}
                {dataPoints.map((_, i) => (
                    <DataPoint key={`dp-${i}`} index={i} progress={smoothProgress} />
                ))}
            </div>

            {/* Global Fades */}
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background via-background/60 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none" />
        </div>
    );
};

export default ScrollConnector;
