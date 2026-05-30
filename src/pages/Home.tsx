import { motion } from "motion/react";
import { ArrowRight, ArrowDown, Code, GraduationCap, Target } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [typedName, setTypedName] = useState("");
  const fullName = "Trần Mạnh Dũng.";

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentIndex = 0;
    
    // Reset before typing
    setTypedName("");
    
    // Start typing after a short delay
    const startTimeout = setTimeout(() => {
      const typeChar = () => {
        if (currentIndex < fullName.length) {
          setTypedName(fullName.slice(0, currentIndex + 1));
          currentIndex++;
          timeout = setTimeout(typeChar, 100);
        }
      };
      
      typeChar();
    }, 500);
    
    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timeout);
    };
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="flex flex-col gap-16"
    >
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-10 pt-12">
        <motion.div 
          variants={item}
          className="flex flex-col gap-6 flex-1"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit text-sm font-medium border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Digital Portfolio
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-3xl leading-tight">
            Xin chào, tôi là
            <span className="flex items-center mt-2 min-h-[1.2em]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {typedName}
              </span>
              <span className={`ml-1 inline-block w-[4px] h-[0.9em] bg-primary rounded-full ${typedName.length === fullName.length ? 'animate-none opacity-0 transition-opacity duration-1000' : 'animate-pulse'}`}></span>
            </span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Sinh viên ngành Công nghệ thông tin tại Đại học Công Nghệ - ĐHQGHN. 
            Đam mê lập trình, khám phá công nghệ mới và xây dựng các sản phẩm phần mềm mang lại giá trị thực tiễn.
          </p>
          
          <div className="flex gap-4 mt-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 cursor-pointer"
            >
              Khám phá Dự án <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          variants={item}
          className="flex-shrink-0 relative group"
        >
          {/* Animated glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-3xl opacity-20 -z-10 group-hover:opacity-40 transition-opacity duration-700 animate-pulse" />
          
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-[4px] overflow-hidden flex items-center justify-center" style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}>
            {/* Spinning gradient border */}
            <div className="absolute w-[200%] h-[200%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_50%,hsl(var(--primary))_100%)] opacity-80" />
            <div className="absolute w-[200%] h-[200%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_270deg_at_50%_50%,transparent_0%,transparent_50%,hsl(var(--accent))_100%)] opacity-80" />
            
            {/* Inner mask */}
            <div className="absolute inset-[4px] bg-background rounded-full z-10" />
            
            <div className="relative z-20 w-full h-full rounded-full bg-background/50 p-2 overflow-hidden border border-white/5" style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}>
              <img 
                src="/portrait.jpg" 
                alt="Trần Mạnh Dũng" 
                className="w-full h-full object-cover rounded-full bg-muted/50 transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"; // Fallback placeholder
                }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Scroll Indicator */}
      <motion.div 
        variants={item}
        className="flex justify-center -mt-4 mb-4 md:-mt-8 md:mb-8"
      >
        <button 
          onClick={() => {
            window.scrollBy({ top: 500, behavior: 'smooth' });
          }}
          className="flex flex-col items-center gap-2 text-muted-foreground/60 hover:text-primary transition-colors cursor-pointer group"
          aria-label="Cuộn xuống"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-medium opacity-0 group-hover:opacity-100 transition-opacity">Cuộn xuống</span>
          <ArrowDown size={24} className="animate-bounce" />
        </button>
      </motion.div>

      {/* Info Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 overflow-hidden">
        <motion.div 
          variants={item}
          className="glass-panel p-8 rounded-2xl flex flex-col gap-4 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110" />
          <div className="p-3 bg-primary/20 text-primary rounded-xl w-fit">
            <GraduationCap size={24} />
          </div>
          <h2 className="text-xl font-bold text-white mt-2">Học vấn & Sở thích</h2>
          <ul className="text-muted-foreground space-y-2 mt-2 list-disc list-inside">
            <li>Mã sinh viên: <span className="text-white font-medium">25020078</span></li>
            <li>Trường: Đại học Công Nghệ - ĐHQGHN</li>
            <li>Chuyên ngành: Công nghệ thông tin</li>
            <li>Sở thích: Lập trình, thiết kế UI/UX, tìm hiểu AI và âm nhạc.</li>
            <li className="pt-2">Mục tiêu: Trở thành Lập trình viên Fullstack đa nhiệm, nắm vững hệ thống lõi và ứng dụng công nghệ AI.</li>
          </ul>
        </motion.div>

        <motion.div 
          variants={item}
          className="glass-panel p-8 rounded-2xl flex flex-col gap-4 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110" />
          <div className="p-3 bg-accent/20 text-accent rounded-xl w-fit">
            <Target size={24} />
          </div>
          <h2 className="text-xl font-bold text-white mt-2">Mục tiêu Portfolio</h2>
          <p className="text-muted-foreground leading-relaxed">
            Portfolio này được xây dựng nhằm mục đích:
          </p>
          <ul className="text-muted-foreground space-y-2 list-disc list-inside">
            <li>Tổng hợp và thể hiện kiến thức, kỹ năng đã học từ môn "Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo".</li>
            <li>Lưu trữ sản phẩm cá nhân để dễ dàng truy cập, chia sẻ.</li>
            <li>Giới thiệu năng lực bản thân một cách chuyên nghiệp.</li>
          </ul>
        </motion.div>
      </section>
    </motion.div>
  );
}
