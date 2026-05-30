import { motion } from "motion/react";
import { ArrowRight, Code, GraduationCap, Target } from "lucide-react";
export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-16"
    >
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-10 pt-12">
        <div className="flex flex-col gap-6 flex-1">
          <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit text-sm font-medium border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Digital Portfolio
          </motion.div>
          
          <motion.h1 variants={item} className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-3xl leading-tight">
            Xin chào, tôi là
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mt-2">
              Trần Mạnh Dũng.
            </span>
          </motion.h1>
          
          <motion.p variants={item} className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Sinh viên ngành Công nghệ thông tin tại Đại học Công Nghệ - ĐHQGHN. 
            Đam mê lập trình, khám phá công nghệ mới và xây dựng các sản phẩm phần mềm mang lại giá trị thực tiễn.
          </motion.p>
          
          <motion.div variants={item} className="flex gap-4 mt-4">
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
          </motion.div>
        </div>

        <motion.div 
          variants={item}
          className="flex-shrink-0 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-2xl -z-10" />
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white/10 overflow-hidden relative glass-panel p-2">
            <img 
              src="/portrait.jpg" 
              alt="Trần Mạnh Dũng" 
              className="w-full h-full object-cover rounded-full bg-muted/50"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"; // Fallback placeholder
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* Info Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <motion.div variants={item} className="glass-panel p-8 rounded-2xl flex flex-col gap-4 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110" />
          <div className="p-3 bg-primary/20 text-primary rounded-xl w-fit">
            <GraduationCap size={24} />
          </div>
          <h2 className="text-xl font-bold text-white mt-2">Học vấn & Mục tiêu</h2>
          <ul className="text-muted-foreground space-y-2 mt-2 list-disc list-inside">
            <li>Mã sinh viên: <span className="text-white font-medium">25020078</span></li>
            <li>Trường: Đại học Công Nghệ - ĐHQGHN</li>
            <li>Chuyên ngành: Công nghệ thông tin</li>
            <li className="pt-2">Mục tiêu: Trở thành Lập trình viên Fullstack, nắm vững nền tảng khoa học máy tính và ứng dụng AI.</li>
          </ul>
        </motion.div>

        <motion.div variants={item} className="glass-panel p-8 rounded-2xl flex flex-col gap-4 relative overflow-hidden group">
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
