import { motion } from "motion/react";
import { BookOpen, Trophy, Compass, Heart, CheckSquare, ShieldCheck } from "lucide-react";

const PersonalCommitment = () => {
  const commitments = [
    {
      icon: "🧠",
      title: "Tư duy phản biện độc lập",
      desc: "Luôn chủ động phân tích và kiểm chứng — không chấp nhận kết quả AI một cách thụ động.",
    },
    {
      icon: "🔍",
      title: "Trích dẫn AI minh bạch",
      desc: "Mọi hỗ trợ từ AI đều được ghi nhận rõ ràng, minh bạch về phần đóng góp cá nhân.",
    },
    {
      icon: "⚖️",
      title: "Liêm chính học thuật",
      desc: "Sản phẩm kết hợp công nghệ và tư duy cá nhân — tuân thủ nguyên tắc kiểm chứng thông tin xuyên suốt.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden border border-primary/20 mt-4"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -z-10 pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col items-center text-center gap-3 mb-10">
        <div className="p-3 bg-primary/20 text-primary rounded-2xl w-fit mb-1">
          <ShieldCheck size={28} />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          Cam kết cá nhân
        </h2>
        <p className="text-muted-foreground text-base max-w-2xl leading-relaxed">
          Mọi sản phẩm trong Portfolio này đều được thực hiện dựa trên sự kết hợp giữa{" "}
          <span className="text-foreground font-medium">sức mạnh công nghệ</span> và{" "}
          <span className="text-foreground font-medium">tư duy phản biện cá nhân</span>.
          Mọi hỗ trợ từ AI đều được trích dẫn minh bạch, đảm bảo tính liêm chính và
          nguyên tắc kiểm chứng thông tin nghiêm ngặt.
        </p>
      </div>

      {/* Commitment Cards */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.15 } },
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-5"
      >
        {commitments.map((c, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 280, damping: 24 } },
            }}
            className="flex flex-col gap-3 p-6 rounded-2xl bg-background/40 border border-white/5 hover:border-primary/30 transition-colors duration-300"
          >
            <span className="text-3xl">{c.icon}</span>
            <h3 className="text-white font-semibold text-base">{c.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom pledge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-8 flex items-center justify-center gap-3 py-4 px-6 rounded-full border border-primary/20 bg-primary/5 w-fit mx-auto"
      >
        <ShieldCheck size={18} className="text-primary shrink-0" />
        <p className="text-sm text-muted-foreground text-center">
          Tôi xác nhận tất cả nội dung trên đều phản ánh đúng năng lực và quá trình học tập thực tế của bản thân.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default function Summary() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="flex flex-col gap-12 w-full overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-4 text-center items-center"
      >
        <div className="p-3 bg-primary/20 text-primary rounded-2xl w-fit mb-2">
          <Trophy size={32} />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          Tổng kết & Đánh giá bản thân
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Hành trình xây dựng Digital Portfolio và những giá trị đọng lại sau môn học Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo.
        </p>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 overflow-hidden"
      >
        {/* Experience Section */}
        <motion.section 
          variants={item}
          className="flex flex-col gap-6 md:col-span-2 glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
          <div className="flex items-center gap-3">
            <Heart className="text-rose-400" size={28} />
            <h2 className="text-2xl font-bold text-white">Sự trưởng thành & Trải nghiệm</h2>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Việc thực hiện dự án Portfolio này không chỉ là một nhiệm vụ môn học mà còn là một bước ngoặt lớn trong tư duy tiếp cận công nghệ của tôi. Được tự tay tổng hợp, thiết kế và tối ưu trải nghiệm UI/UX cho từng bài tập đã giúp tôi nhận ra quá trình chuyển mình từ một người "tiêu thụ" công nghệ thụ động thành một nhà sáng tạo chủ động. Sự trưởng thành sâu sắc nhất nằm ở việc tôi không chỉ biết dùng các công cụ AI, mà còn hiểu rõ giới hạn, cách thức điều hướng chúng và đặc biệt là cách giữ gìn liêm chính học thuật trong một thế giới ngập tràn thông tin tự động.
          </p>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          variants={item}
          className="flex flex-col gap-6 glass-panel p-8 rounded-3xl"
        >
          <div className="flex items-center gap-3">
            <BookOpen className="text-emerald-400" size={28} />
            <h2 className="text-2xl font-bold text-white">Cách áp dụng kỹ năng trong tương lai</h2>
          </div>
          <ul className="flex flex-col gap-4">
            {[
              "Quản lý dữ liệu: Hệ thống hóa lưu trữ khoa học trên cả môi trường local và cloud cho công việc sau này.",
              "Prompt Engineering (Role, Few-shot): Áp dụng như một trợ lý lập trình đắc lực, tăng tốc giải quyết vấn đề.",
              "Tư duy làm việc nhóm: Tiêu chuẩn hóa quy tắc điều phối trên Trello/Drive cho mọi đồ án thực tế.",
              "Kết hợp AI: Mở rộng khả năng sáng tạo tài liệu kỹ thuật, thiết kế UI/UX mà vẫn tiết kiệm thời gian.",
              "Liêm chính số: Duy trì tư duy phản biện liên tục trước mọi thông tin Internet sinh ra, làm chủ công nghệ thay vì phụ thuộc nó."
            ].map((skill, i) => (
              <li key={i} className="flex gap-3 text-muted-foreground items-start">
                <CheckSquare size={20} className="text-emerald-400 shrink-0 mt-1" />
                <span className="leading-relaxed">{skill}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Challenge Section */}
        <motion.section 
          variants={item}
          className="flex flex-col gap-6 glass-panel p-8 rounded-3xl"
        >
          <div className="flex items-center gap-3">
            <Compass className="text-amber-400" size={28} />
            <h2 className="text-2xl font-bold text-white">Điểm tâm đắc & Thách thức</h2>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" /> Điều tâm đắc nhất
              </h3>
              <p className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-accent/20 ml-1">
                Sự kết nối logic. Từ quản lý file thô sơ, tới ứng dụng công cụ và cuối cùng là sản phẩm portfolio hoàn chỉnh, cho tôi cái nhìn tổng quan nhất về sức mạnh của tư duy số.
              </p>
            </div>
            
            <div className="flex flex-col gap-2">
              <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-400" /> Thách thức & Vượt qua
              </h3>
              <p className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-rose-400/20 ml-1">
                Việc chọn lọc và tổng hợp một lượng kiến thức lớn thành các phần ngắn gọn, trực quan trên web. Tôi đã khắc phục bằng cách sử dụng các bảng cấu trúc phân rã mục tiêu (goal/process) chi tiết.
              </p>
            </div>
            
            <div className="flex flex-col gap-2">
              <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full border border-primary/50" /> Dự định tương lai
              </h3>
              <p className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/20 ml-1">
                Tiếp tục rèn luyện kỹ năng Prompt Engineering chuyên sâu và nghiên cứu các mô hình AI mới để tối ưu hóa hiệu suất làm việc. Xây dựng thêm những dự án web app tích hợp AI phức tạp hơn.
              </p>
            </div>
          </div>
        </motion.section>
      </motion.div>

      {/* Self Assessment Section */}
      <PersonalCommitment />
    </div>
  );
}
