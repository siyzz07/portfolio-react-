import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useWeather } from "../hooks/useWeather";
import WeatherEffects from "./WeatherEffects";

/**
 * Color palettes for each weather condition
 */
const weatherColors = {
  rain: {
    orb1: "rgba(59, 130, 246, 0.2)",   // blue
    orb2: "rgba(100, 116, 139, 0.2)",  // slate
    orb3: "rgba(71, 85, 105, 0.1)",    // dark slate
  },
  snow: {
    orb1: "rgba(186, 230, 253, 0.2)",  // light cyan
    orb2: "rgba(224, 242, 254, 0.2)",  // ice white
    orb3: "rgba(165, 180, 252, 0.1)",  // soft indigo
  },
  thunderstorm: {
    orb1: "rgba(88, 28, 135, 0.25)",   // deep purple
    orb2: "rgba(51, 65, 85, 0.2)",     // dark
    orb3: "rgba(124, 58, 237, 0.1)",   // violet flash
  },
  clouds: {
    orb1: "rgba(148, 163, 184, 0.15)", // gray
    orb2: "rgba(100, 116, 139, 0.15)", // slate
    orb3: "rgba(71, 85, 105, 0.1)",    // muted
  },
  clear: {
    orb1: "rgba(251, 191, 36, 0.15)",  // amber
    orb2: "rgba(245, 158, 11, 0.15)",  // warm gold
    orb3: "rgba(252, 211, 77, 0.08)",  // light gold
  },
  mist: {
    orb1: "rgba(148, 163, 184, 0.12)", // soft gray
    orb2: "rgba(203, 213, 225, 0.12)", // light gray
    orb3: "rgba(100, 116, 139, 0.08)", // dim
  },
};

// Default (fallback) colors — same as original
const defaultColors = {
  orb1: "rgba(99, 102, 241, 0.2)",   // primary/indigo
  orb2: "rgba(6, 182, 212, 0.2)",    // secondary/cyan
  orb3: "rgba(139, 92, 246, 0.1)",   // accent/violet
};

function InteractiveBackground() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  const weather = useWeather();
  const colors = weatherColors[weather.condition] || defaultColors;

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full -z-10 overflow-hidden bg-[#030712]">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Floating Orbs — colors shift with weather */}
      <motion.div
        style={{ top: "10%", left: "20%", y: y1 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          backgroundColor: colors.orb1,
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[500px] h-[500px] rounded-full blur-[120px] mix-blend-screen"
      />

      <motion.div
        style={{ bottom: "10%", right: "10%", y: y2 }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
          backgroundColor: colors.orb2,
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] mix-blend-screen"
      />

      <motion.div
        style={{ top: "40%", left: "50%", x: "-50%", y: "-50%", rotate }}
        animate={{
          rotate: [0, 360],
          backgroundColor: colors.orb3,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[800px] h-[800px] rounded-full blur-[100px] mix-blend-screen"
      />

      {/* Weather Effects Canvas */}
      <WeatherEffects condition={weather.condition} />

      {/* Noise Texture for Grainy premium look */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}></div>
    </div>
  );
}

export default InteractiveBackground;
