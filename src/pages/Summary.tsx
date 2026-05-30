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
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-12 w-full"
    >
      <div className="flex flex-col gap-4 text-center items-center">
        <div className="p-3 bg-primary/20 text-primary rounded-2xl w-fit mb-2">
          <Trophy size={32} />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          Tổng kết Dự án
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Hành trình xây dựng Digital Portfolio và những giá trị đọng lại sau môn học Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {/* Experience Section */}
        <motion.section variants={item} className="flex flex-col gap-6 md:col-span-2 glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
          <div className="flex items-center gap-3">
            <Heart className="text-rose-400" size={28} />
            <h2 className="text-2xl font-bold text-white">Trải nghiệm & Cảm nhận</h2>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Việc thực hiện dự án Portfolio này không chỉ là một nhiệm vụ môn học mà còn là một cơ hội tuyệt vời để tôi 
            nhìn lại toàn bộ hành trình rèn luyện của mình. Được tự tay tổng hợp, sắp xếp và thiết kế lại những bài tập 
            rời rạc thành một sản phẩm web hoàn chỉnh giúp tôi cảm nhận rõ rệt sự trưởng thành trong tư duy công nghệ. 
            Tôi cảm thấy tự hào khi kiến thức hàn lâm được chuyển hóa thành một công cụ thực tế, chuyên nghiệp và 
            mang đậm dấu ấn cá nhân.
          </p>
        </motion.section>

        {/* Skills Section */}
        <motion.section variants={item} className="flex flex-col gap-6 glass-panel p-8 rounded-3xl">
          <div className="flex items-center gap-3">
            <BookOpen className="text-emerald-400" size={28} />
            <h2 className="text-2xl font-bold text-white">Kiến thức & Kỹ năng</h2>
          </div>
          <ul className="flex flex-col gap-4">
            {[
              "Làm chủ cách quản lý tệp, thư mục và tra cứu thông tin học thuật chuẩn xác.",
              "Kỹ năng Prompt Engineering (Role, Few-shot, Chain-of-Thought) để điều khiển AI đạt hiệu quả tối đa.",
              "Tư duy làm việc, phối hợp nhóm từ xa qua hệ sinh thái Cloud (Trello, Drive, Meet).",
              "Sáng tạo nội dung số đa phương tiện kết hợp giữa khả năng của AI và tư duy thẩm mỹ của con người.",
              "Nhận thức sâu sắc, có trách nhiệm về liêm chính học thuật trong thời đại số."
            ].map((skill, i) => (
              <li key={i} className="flex gap-3 text-muted-foreground items-start">
                <CheckSquare size={20} className="text-emerald-400 shrink-0 mt-1" />
                <span className="leading-relaxed">{skill}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Challenge Section */}
        <motion.section variants={item} className="flex flex-col gap-6 glass-panel p-8 rounded-3xl">
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
                Sự kết nối logic giữa các bài tập. Từ việc quản lý file thô sơ ban đầu, cho đến khi tự động hóa công việc bằng AI và xây dựng giao diện UI/UX hoàn chỉnh, mọi thứ tạo thành một luồng (flow) công việc cực kỳ gắn kết.
              </p>
            </div>
            
            <div className="flex flex-col gap-2">
              <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-400" /> Thách thức quá trình
              </h3>
              <p className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-rose-400/20 ml-1">
                Việc chọn lọc, biên tập một lượng lớn thông tin học thuật dài dòng thành các câu chữ súc tích, hợp với định dạng giao diện thẻ (Card) của web mất rất nhiều thời gian. Đồng thời, việc ứng dụng các thư viện chuyển động (motion) để trải nghiệm thị giác mượt mà cũng đòi hỏi sự tỉ mỉ lớn.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
}
