import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "../data/projects";
import { cn } from "../lib/utils";
import { X, CheckCircle2, Target, Lightbulb, ExternalLink } from "lucide-react";

export default function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const smoothTransition = { type: "spring", stiffness: 100, damping: 20, mass: 1 };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 200, damping: 24 } }
  };

  return (
    <div className="flex flex-col gap-12 w-full overflow-hidden">
      <motion.div 
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-50px" }}
        className="flex flex-col gap-4"
      >
        <h1 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent w-fit">
          Dự án Học tập
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Tổng hợp kết quả từ Bài 1 đến Bài 6, thể hiện quy trình ứng dụng công nghệ và trí tuệ nhân tạo vào các tác vụ học tập, nghiên cứu và quản lý dự án.
        </p>
      </motion.div>

      <motion.div 
        variants={container} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative"
      >
        {projects.map((project, idx) => {
          const Icon = project.icon;
          return (
            <motion.div
              variants={item}
              layoutId={`card-${project.id}`}
              transition={smoothTransition}
              key={project.id}
              onClick={() => setSelectedId(project.id)}
              className={cn(
                "glass-panel rounded-2xl p-0 cursor-pointer transition-all duration-500 flex flex-col gap-0 border overflow-hidden hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/30 hover:border-primary/50 group",
                project.borderColor
              )}
            >
              <motion.div layoutId={`image-container-${project.id}`} transition={smoothTransition} className="w-full h-48 border-b border-white/5 relative overflow-hidden bg-background">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src === project.image) return; // Prevent infinite loop
                    target.src = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent transition-opacity duration-500 group-hover:opacity-50"></div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <span className="bg-background/80 border border-white/10 text-white px-5 py-2.5 rounded-full font-medium shadow-xl transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-2">
                    Xem chi tiết
                  </span>
                </div>
              </motion.div>
              <div className="p-6 flex flex-col gap-4">
                <motion.div layoutId={`icon-container-${project.id}`} transition={smoothTransition} className={cn("p-3 rounded-xl w-fit -mt-10 relative z-10 glass-panel shadow-lg", project.color)}>
                  <Icon size={24} />
                </motion.div>
                <div className="flex flex-col gap-2">
                  <motion.h3 layoutId={`title-${project.id}`} transition={smoothTransition} className="font-bold text-lg text-white leading-tight">
                    {project.title}
                  </motion.h3>
                  <motion.p layoutId={`subtitle-${project.id}`} transition={smoothTransition} className="text-sm text-muted-foreground">
                    {project.subtitle}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <AnimatePresence>
        {selectedId && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 pointer-events-auto"
            />
            {projects.filter(p => p.id === selectedId).map(project => {
              const Icon = project.icon;
              return (
                <div key="modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 py-20 pointer-events-none">
                  <motion.div
                    layoutId={`card-${project.id}`}
                    transition={smoothTransition}
                    className={cn(
                      "w-full max-w-5xl max-h-full overflow-y-auto glass-panel rounded-3xl pointer-events-auto border relative shadow-2xl hide-scrollbar",
                      project.borderColor,
                      "bg-background/95"
                    )}
                  >
                    <button 
                      onClick={() => setSelectedId(null)}
                      className="absolute top-6 right-6 p-2 rounded-full bg-border hover:bg-white/10 transition-colors z-10"
                    >
                      <X size={20} className="text-muted-foreground hover:text-white" />
                    </button>

                    <div className="p-6 sm:p-10 flex flex-col gap-8">
                      <motion.div layoutId={`image-container-${project.id}`} transition={smoothTransition} className="w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden border border-white/10 shrink-0 bg-muted/20">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            if (target.src === project.image) return;
                            target.src = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop";
                          }}
                        />
                      </motion.div>
                      <div className="flex items-center gap-4">
                        <motion.div layoutId={`icon-container-${project.id}`} transition={smoothTransition} className={cn("p-4 rounded-2xl shrink-0 glass-panel", project.color)}>
                          <Icon size={32} />
                        </motion.div>
                        <div className="flex flex-col">
                           <motion.h2 layoutId={`title-${project.id}`} transition={smoothTransition} className="text-2xl sm:text-3xl font-bold text-white">
                             {project.title}
                           </motion.h2>
                           <motion.p layoutId={`subtitle-${project.id}`} transition={smoothTransition} className={cn("text-lg", project.color)}>
                             {project.subtitle}
                           </motion.p>
                        </div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col gap-6"
                      >
                        <div className="flex flex-col gap-3">
                          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                            <Target size={20} className="text-primary"/> Mục tiêu
                          </h3>
                          <p className="text-muted-foreground bg-white/5 p-4 rounded-xl border border-white/5 leading-relaxed">
                            {project.goal}
                          </p>
                        </div>

                        <div className="flex flex-col gap-3">
                          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                            <Lightbulb size={20} className="text-amber-400"/> Quá trình thực hiện
                          </h3>
                          <ul className="grid gap-3">
                            {project.process.map((step, idx) => (
                              <li key={idx} className="flex gap-3 text-muted-foreground bg-white/5 p-4 rounded-xl border border-white/5 items-start">
                                <span className="bg-white/10 text-white w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-sm font-medium mt-0.5">
                                  {idx + 1}
                                </span>
                                <span className="leading-relaxed">{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-col gap-3">
                          {project.results && project.results.length > 0 && (
                            <div className={`mb-4 w-full ${project.results.length === 1 ? 'max-w-3xl mx-auto' : project.results.length === 2 ? 'grid grid-cols-1 md:grid-cols-2 gap-4' : project.results.length === 5 ? 'grid grid-cols-1 md:grid-cols-2 gap-4 [&>*:last-child]:md:col-span-2' : project.results.length === 6 ? 'grid grid-cols-1 md:grid-cols-6 gap-4' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'}`}>
                              {project.results.map((result, rIdx) => (
                                <div key={rIdx} className={`flex flex-col justify-between h-full gap-2 relative group rounded-xl overflow-hidden border border-white/10 bg-background/50 p-2${(result as any).colSpan ? ` md:col-span-${(result as any).colSpan}` : (result as any).fullWidth ? ' md:col-span-3' : ''}`}>
                                  <div className={`w-full rounded-lg overflow-hidden bg-black/20 ${result.aspectRatio ? result.aspectRatio : result.caption?.includes("Sản phẩm cuối cùng") ? "aspect-[3/4]" : "aspect-video"}`}>
                                    <img 
                                      src={result.image} 
                                      alt={result.caption} 
                                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                                      onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = "none";
                                        const parent = target.parentElement;
                                        if (parent && !parent.querySelector(".img-fallback")) {
                                          const fallback = document.createElement("div");
                                          fallback.className = "img-fallback w-full h-full flex items-center justify-center text-muted-foreground text-sm p-4 text-center";
                                          fallback.textContent = "Ảnh chưa được đặt vào thư mục public/";
                                          parent.appendChild(fallback);
                                        }
                                      }}
                                    />
                                  </div>
                                  <p className="text-sm text-center text-muted-foreground mt-1">
                                    {result.caption}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                            <CheckCircle2 size={20} className="text-emerald-400"/> Kết quả sản phẩm
                          </h3>
                          <div className="flex flex-col gap-4 bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/20">
                            <p className="text-emerald-100/70 leading-relaxed font-medium">
                              {project.output}
                            </p>
                            {project.link && (
                              <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 px-4 rounded-lg self-start transition-colors"
                              >
                                Xem bài làm chi tiết
                                <ExternalLink size={16} />
                              </a>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </>
        )}
      </AnimatePresence>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
