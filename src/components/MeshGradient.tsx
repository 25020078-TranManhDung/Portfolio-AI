import { motion } from "motion/react";

export default function MeshGradient() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
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
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/20 blur-[120px]"
      />
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
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-accent/20 blur-[120px]"
      />
      <motion.div
        animate={{
          x: ["-20%", "15%", "-10%", "-20%"],
          y: ["30%", "10%", "40%", "30%"],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[20%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-rose-500/10 blur-[120px]"
      />
      <motion.div
        animate={{
          x: ["25%", "-15%", "10%", "25%"],
          y: ["-20%", "30%", "10%", "-20%"],
          scale: [0.9, 1.2, 0.9, 0.9],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[40%] right-[20%] w-[35vw] h-[35vw] rounded-full bg-emerald-500/10 blur-[100px]"
      />
    </div>
  );
}
