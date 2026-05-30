import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "../data/projects";
import { cn } from "../lib/utils";
import { X, CheckCircle2, Target, Lightbulb } from "lucide-react";

export default function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-12 w-full">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent w-fit">
          Dự án Học tập
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Tổng hợp kết quả từ Bài 1 đến Bài 6, thể hiện quy trình ứng dụng công nghệ và trí tuệ nhân tạo vào các tác vụ học tập, nghiên cứu và quản lý dự án.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <motion.div
              layoutId={`card-${project.id}`}
              key={project.id}
              onClick={() => setSelectedId(project.id)}
              className={cn(
                "glass-panel rounded-2xl p-6 cursor-pointer hover:-translate-y-1 transition-transform duration-300 flex flex-col gap-4 border",
                project.borderColor
              )}
            >
              <motion.div layoutId={`icon-container-${project.id}`} className={cn("p-3 rounded-xl w-fit", project.bgColor, project.color)}>
                <Icon size={24} />
              </motion.div>
              <div className="flex flex-col gap-2">
                <motion.h3 layoutId={`title-${project.id}`} className="font-bold text-lg text-white leading-tight">
                  {project.title}
                </motion.h3>
                <motion.p layoutId={`subtitle-${project.id}`} className="text-sm text-muted-foreground">
                  {project.subtitle}
                </motion.p>
              </div>
            </motion.div>
          );
        })}
      </div>

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
                    className={cn(
                      "w-full max-w-3xl max-h-full overflow-y-auto glass-panel rounded-3xl pointer-events-auto border relative shadow-2xl hide-scrollbar",
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
                      <div className="flex items-center gap-4">
                        <motion.div layoutId={`icon-container-${project.id}`} className={cn("p-4 rounded-2xl shrink-0", project.bgColor, project.color)}>
                          <Icon size={32} />
                        </motion.div>
                        <div className="flex flex-col">
                           <motion.h2 layoutId={`title-${project.id}`} className="text-2xl sm:text-3xl font-bold text-white">
                             {project.title}
                           </motion.h2>
                           <motion.p layoutId={`subtitle-${project.id}`} className={cn("text-lg", project.color)}>
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
                          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                            <CheckCircle2 size={20} className="text-emerald-400"/> Kết quả sản phẩm
                          </h3>
                          <p className="text-emerald-100/70 bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/20 leading-relaxed font-medium">
                            {project.output}
                          </p>
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
