import { motion } from "motion/react";
import { BookOpen, Trophy, Compass, Heart, CheckSquare } from "lucide-react";

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
        viewport={{ once: false, amount: 0.2 }}
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
        viewport={{ once: false, amount: 0.1 }}
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
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
