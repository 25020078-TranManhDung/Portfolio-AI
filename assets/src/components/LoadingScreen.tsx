import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";
    
    return () => {
      document.body.style.overflow = "unset";
      // Force framer-motion to recalculate scroll height
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 100);
    };
  }, []);

  useEffect(() => {
    const duration = 2500; // 2.5 seconds
    const interval = 30;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress(Math.min((currentStep / steps) * 100, 100));

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 400); // fade out delay
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <div className="relative z-10 flex flex-col items-center max-w-xl w-full px-8">
        {/* Stylized DESTINY text & Logo */}
        <div className="relative mb-8 flex w-fit mx-auto">
          {/* Outline version (background) */}
          <div className="flex items-center gap-4 sm:gap-6 opacity-30">
            <div className="w-16 h-16 sm:w-24 sm:h-24 flex-shrink-0 mix-blend-screen" style={{ filter: 'invert(1)' }}>
              <img src="/logo.jpg" alt="Logo" className="w-full h-full object-contain" onError={(e) => e.currentTarget.src = "/logo.png"} />
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-[0.2em] text-transparent uppercase style-stroke whitespace-nowrap">
              ZGMF-X42S<br/>DESTINY
            </h1>
          </div>
          
          {/* Filled version (foreground) with mask */}
          <motion.div 
            className="absolute top-0 left-0 h-full flex items-center gap-4 sm:gap-6 overflow-hidden"
            style={{ width: `${progress}%` }}
          >
            <div 
              className="w-16 h-16 sm:w-24 sm:h-24 flex-shrink-0 mix-blend-screen"
              style={{ filter: 'invert(1) drop-shadow(0 0 15px rgba(225, 29, 72, 0.8))' }}
            >
              {/* To make the dark/white lineart match the neon primary color, we can use a CSS filter or just leave it. If it's a transparent PNG, drop-shadow adds a glow */}
              <img src="/logo.jpg" alt="Logo" className="w-full h-full object-contain" onError={(e) => e.currentTarget.src = "/logo.png"} />
            </div>
            <h1 
              className="text-3xl sm:text-5xl font-black tracking-[0.2em] text-primary uppercase whitespace-nowrap"
              style={{ textShadow: '0 0 20px rgba(225, 29, 72, 0.8), 0 0 40px rgba(225, 29, 72, 0.4)' }}
            >
              ZGMF-X42S<br/>DESTINY
            </h1>
          </motion.div>
        </div>

        {/* Loading Bar */}
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-accent"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status Text */}
        <div className="flex justify-between w-full mt-4 text-xs font-mono text-muted-foreground uppercase tracking-widest">
          <span>G.U.N.D.A.M. OS Booting</span>
          <span>{Math.round(progress)}%</span>
        </div>
      </div>
      
      <style>{`
        .style-stroke {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </motion.div>
  );
}
