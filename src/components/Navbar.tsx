import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { cn } from "../lib/utils";
import { User, Briefcase, NotebookPen } from "lucide-react";

export default function Navbar() {
  const location = useLocation();

  const links = [
    { name: "Giới thiệu", path: "/", icon: User },
    { name: "Dự án", path: "/projects", icon: Briefcase },
    { name: "Tổng kết", path: "/summary", icon: NotebookPen },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
      <div className="glass-panel px-6 py-3 rounded-full flex items-center gap-6 pointer-events-auto shadow-xl shadow-black/20">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          const Icon = link.icon;
          return (
            <Link
              key={link.path}
              to={link.path}
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
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
