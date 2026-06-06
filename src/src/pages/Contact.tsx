import { motion } from "motion/react";
import { Mail, MapPin, Github, Facebook, Youtube } from "lucide-react";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Mail":
      return <Mail size={18} className="text-primary mt-1" />;
    case "Github":
      return <Github size={18} className="text-primary mt-1" />;
    case "Facebook":
      return <Facebook size={18} className="text-primary mt-1" />;
    case "Youtube":
      return <Youtube size={18} className="text-primary mt-1" />;
    case "MapPin":
      return <MapPin size={18} className="text-primary mt-1" />;
    default:
      return null;
  }
};

export default function Contact() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const contacts = [
    { icon: "Mail", text: "25020078@vnu.edu.vn", href: "mailto:25020078@vnu.edu.vn" },
    { icon: "Github", text: "github.com/25020078-TranManhDung", href: "https://github.com/25020078-TranManhDung" },
    { icon: "Facebook", text: "facebook.com/tran.manh.dung.706251", href: "https://www.facebook.com/tran.manh.dung.706251" },
    { icon: "Youtube", text: "youtube.com/@shinnasuka7061", href: "https://www.youtube.com/@shinnasuka7061" },
    { icon: "MapPin", text: "Hà Nội, Việt Nam" }
  ];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, margin: "-50px" }}
      className="flex flex-col gap-12 max-w-5xl mx-auto w-full pb-20"
    >
      <div className="flex flex-col gap-4 text-center items-center">
        <motion.h1 
          variants={item}
          className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
        >
          Liên Hệ Trực Tiếp
        </motion.h1>
        <motion.p variants={item} className="text-muted-foreground text-lg max-w-2xl">
          Gửi tin nhắn ngay để thảo luận về dự án, học tập hoặc cơ hội hợp tác.
        </motion.p>
      </div>

      <motion.div variants={item} className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/5 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Thông Tin Liên Hệ</h2>
              <p className="text-muted-foreground">
                Nếu bạn muốn trao đổi về ý tưởng lập trình, AI hoặc các cơ hội làm việc, hãy liên hệ ngay với tôi qua các kênh dưới đây.
              </p>
            </div>

            <div className="flex flex-col gap-6 mt-4">
              {contacts.map((contact, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  {getIcon(contact.icon)}
                  {contact.href ? (
                    <a 
                      href={contact.href}
                      target={contact.href.startsWith("http") ? "_blank" : undefined}
                      rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-foreground hover:text-primary transition-colors hover:underline text-lg"
                    >
                      {contact.text}
                    </a>
                  ) : (
                    <span className="text-foreground text-lg">{contact.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex flex-col gap-6 mt-8 lg:mt-0">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">Họ Tên</label>
              <input 
                type="text" 
                id="name" 
                placeholder="Nhập họ tên" 
                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Nhập email" 
                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-sm font-medium text-foreground">Chủ Đề</label>
              <input 
                type="text" 
                id="subject" 
                placeholder="Chủ đề liên hệ" 
                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">Nội Dung</label>
              <textarea 
                id="message" 
                rows={5}
                placeholder="Viết nội dung..." 
                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50 resize-none"
              />
            </div>

            <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-xl transition-all shadow-lg hover:shadow-primary/25 active:scale-[0.98] w-fit mt-2">
              Gửi Tin Nhắn
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
