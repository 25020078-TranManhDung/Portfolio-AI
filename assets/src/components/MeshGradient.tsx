import { motion } from "motion/react";

export default function MeshGradient() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Orb 1 — top-left, primary color */}
      <motion.div
        animate={{
          x: ["-10%", "20%", "-20%", "-10%"],
          y: ["-10%", "10%", "20%", "-10%"],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ willChange: "transform" }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/20 blur-[80px]"
      />
      {/* Orb 2 — bottom-right, accent color */}
      <motion.div
        animate={{
          x: ["10%", "-20%", "10%", "10%"],
          y: ["10%", "-20%", "-10%", "10%"],
          scale: [0.8, 1.1, 1, 0.8],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ willChange: "transform" }}
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-accent/20 blur-[80px]"
      />
    </div>
  );
}
