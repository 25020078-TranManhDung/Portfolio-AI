import { useState, useEffect } from "react";
import type { MouseEvent } from "react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";
import { User, Briefcase, NotebookPen, Moon, Sun, Mail } from "lucide-react";

export default function Navbar() {
  const [activeHash, setActiveHash] = useState("#home");
  const [isDark, setIsDark] = useState(() => {
    // Check initial dark mode preference
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return true; // Default to dark
  });

  useEffect(() => {
    // Apply theme
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "summary", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveHash(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Giới thiệu", path: "#home", icon: User },
    { name: "Dự án", path: "#projects", icon: Briefcase },
    { name: "Tổng kết", path: "#summary", icon: NotebookPen },
    { name: "Liên hệ", path: "#contact", icon: Mail },
  ];

  const handleScrollTo = (e: MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    const id = path.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveHash(path);
    }
  };

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 right-0 z-50 flex justify-end pt-6 pr-4 sm:pr-8 pointer-events-none">
      <div className="glass-panel px-6 py-3 rounded-full flex items-center gap-4 sm:gap-6 pointer-events-auto shadow-xl shadow-black/20 transition-all">
        {links.map((link) => {
          const isActive = activeHash === link.path;
          const Icon = link.icon;
          return (
            <a
              key={link.path}
              href={link.path}
              onClick={(e) => handleScrollTo(e, link.path)}
              className={cn(
                "relative flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
                isActive ? "text-foreground" : "text-muted-foreground"
              )}
            >
              <Icon size={16} />
              <span className="hidden sm:inline">{link.name}</span>
              {isActive && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute inset-0 bg-foreground/10 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </a>
          );
        })}
        
        <div className="w-px h-5 bg-border mx-1" />
        
        <button
          onClick={toggleTheme}
          className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-foreground/10"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  );
}
