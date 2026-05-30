import { useState, useEffect } from "react";
import type { MouseEvent } from "react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";
import { User, Briefcase, NotebookPen } from "lucide-react";

export default function Navbar() {
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "summary"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveHash(`#${section}`);
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

  return (
    <nav className="fixed top-0 right-0 z-50 flex justify-end pt-6 pr-4 sm:pr-8 pointer-events-none">
      <div className="glass-panel px-6 py-3 rounded-full flex items-center gap-6 pointer-events-auto shadow-xl shadow-black/20">
        {links.map((link) => {
          const isActive = activeHash === link.path;
          const Icon = link.icon;
          return (
            <a
              key={link.path}
              href={link.path}
              onClick={(e) => handleScrollTo(e, link.path)}
              className={cn(
                "relative flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors hover:text-white",
                isActive ? "text-white" : "text-muted-foreground"
              )}
            >
              <Icon size={16} />
              <span className="hidden sm:inline">{link.name}</span>
              {isActive && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
