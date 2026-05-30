import { Outlet } from "react-router-dom";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MeshGradient from "../components/MeshGradient";
import InteractiveParticles from "../components/InteractiveParticles";

export default function RootLayout() {
  const { scrollYProgress } = useScroll();
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent origin-left z-50 rounded-r-full"
        style={{ scaleX }}
      />
      <MeshGradient />
      <InteractiveParticles />
      
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 sm:px-6 md:px-12 pb-16 relative z-10 w-full max-w-5xl">
        <Outlet />
      </main>

      <Footer />

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary/80 hover:bg-primary text-primary-foreground shadow-lg shadow-primary/25 backdrop-blur-sm border border-white/10 transition-colors"
            aria-label="Cuộn lên đầu trang"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
