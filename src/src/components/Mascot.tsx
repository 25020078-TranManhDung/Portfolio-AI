import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquareText, X } from "lucide-react";

const DIALOGUES = {
  home: [
    "G.U.N.D.A.M OS Activated. Destiny Gundam sẵn sàng nhận lệnh.",
    "Giao diện chính đã được tải. Xin chờ chỉ thị.",
    "Khởi động hệ thống phản lực... Mọi thông số đều bình thường."
  ],
  projects: [
    "Đang truy xuất phân hệ dữ liệu... Mở khóa kho lưu trữ công nghệ cốt lõi.",
    "Phát hiện năng lượng lớn từ các dự án. Đang hiển thị chi tiết.",
    "Vũ khí chiến đấu đã sẵn sàng triển khai."
  ],
  summary: [
    "Quét thông số thành công. Tình trạng hệ thống và hiệu suất hoạt động đạt mức tối đa.",
    "Đã tổng hợp toàn bộ dữ liệu thực chiến. Chờ đánh giá.",
    "Lõi năng lượng ổn định sau hàng loạt chiến dịch."
  ],
  contact: [
    "Đang mở kênh truyền thông. Sẵn sàng tiếp nhận tọa độ và tín hiệu liên lạc mới.",
    "Phát hiện tín hiệu liên lạc đến. Chờ xác nhận kết nối.",
    "Kênh radar mở rộng. Đang tìm kiếm đồng minh."
  ],
  idle: [
    "Hệ thống tản nhiệt hoạt động ổn định.",
    "Lõi năng lượng hạt nhân đang ở mức tối đa.",
    "Đang quét các mối đe dọa tiềm ẩn xung quanh...",
    "Radar quang học không phát hiện bất thường.",
    "Bảo trì hệ thống vũ khí hoàn tất."
  ]
};

export default function Mascot() {
  const [isOpen, setIsOpen] = useState(true);
  const [currentMessage, setCurrentMessage] = useState(DIALOGUES.home[0]);
  const [activeSection, setActiveSection] = useState("home");
  const [clickCount, setClickCount] = useState(0);
  const [isSeedMode, setIsSeedMode] = useState(false);
  const [lastInteractionTime, setLastInteractionTime] = useState(Date.now());
  const [isTouring, setIsTouring] = useState(false);
  const tourRef = useRef<number | null>(null);
  
  const [typedKeys, setTypedKeys] = useState("");
  const [isEasterEgg, setIsEasterEgg] = useState(false);
  const [flyPos, setFlyPos] = useState({ x: 0, y: 0 });

  const TOUR_STAGES = [
    { id: "home", message: "Chào mừng đến với căn cứ. Đang khởi động quy trình lướt tự động..." },
    { id: "projects", message: "Đây là xưởng chế tạo (Projects), nơi các ý tưởng lập trình được hiện thực hóa." },
    { id: "summary", message: "Trạm lưu trữ thông tin thực chiến (Summary). Ghi nhận kỹ năng và chặng đường phát triển." },
    { id: "contact", message: "Hệ thống liên lạc (Contact). Nơi bạn thiết lập kết nối. Sắp hoàn tất hướng dẫn!" }
  ];

  useEffect(() => {
    if (isTouring) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setCurrentMessage(TOUR_STAGES[0].message);
      setIsOpen(true);
      
      const startTimer = setTimeout(() => {
        let currentY = window.scrollY;
        
        const scrollStep = () => {
          const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
          
          if (currentY >= maxScroll - 5) {
            window.scrollTo(0, maxScroll);
            setCurrentMessage("Hoàn tất trình tham quan căn cứ! Bạn có thể tự do khám phá thêm.");
            const endTimer = setTimeout(() => {
              setIsTouring(false);
            }, 5000);
            return;
          }

          currentY += 1.5;
          window.scrollTo(0, currentY);

          const middleView = currentY + window.innerHeight / 2;
          let activeIndex = 0;
          for (let i = TOUR_STAGES.length - 1; i >= 0; i--) {
            const el = document.getElementById(TOUR_STAGES[i].id);
            if (el && middleView >= el.offsetTop) {
              activeIndex = i;
              break;
            }
          }
          
          setCurrentMessage(TOUR_STAGES[activeIndex].message);
          tourRef.current = requestAnimationFrame(scrollStep);
        };
        
        tourRef.current = requestAnimationFrame(scrollStep);
      }, 1000);
      
      return () => {
        clearTimeout(startTimer);
        if (tourRef.current) cancelAnimationFrame(tourRef.current);
      }
    }
  }, [isTouring]);

  useEffect(() => {
    if (clickCount > 0) {
      const timer = setTimeout(() => setClickCount(0), 1500);
      return () => clearTimeout(timer);
    }
  }, [clickCount]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setTypedKeys(prev => {
        const newKeys = (prev + e.key).toLowerCase().slice(-4);
        if (newKeys === "seed") {
          setIsEasterEgg(curr => {
            const nextState = !curr;
            if (nextState) {
              const colors = ["#10b981", "#8b5cf6", "#ec4899", "#06b6d4", "#f43f5e", "#eab308", "#14b8a6", "#f97316"];
              document.documentElement.style.setProperty('--primary', colors[Math.floor(Math.random() * colors.length)]);
              document.documentElement.style.setProperty('--accent', colors[Math.floor(Math.random() * colors.length)]);
              setCurrentMessage("EASTER EGG TÌM THẤY! Kích hoạt điểm mù không gian & đổi màu ngẫu nhiên!");
            } else {
              setCurrentMessage("Đã tắt chế độ Easter Egg.");
            }
            setIsOpen(true);
            return nextState;
          });
        }
        return newKeys;
      });
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isEasterEgg) {
      const updatePos = () => {
        setFlyPos({
          x: Math.random() * (window.innerWidth - 120),
          y: -(Math.random() * (window.innerHeight - 120))
        });
      };
      updatePos(); // Di chuyển ngay lập tức khi vào mode
      const interval = setInterval(updatePos, 2000);
      return () => clearInterval(interval);
    } else {
      setFlyPos({ x: 0, y: 0 });
    }
  }, [isEasterEgg]);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setIsOpen(false), 8000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, currentMessage]);

  useEffect(() => {
    const handleInteraction = () => setLastInteractionTime(Date.now());
    window.addEventListener('scroll', handleInteraction);
    window.addEventListener('click', handleInteraction);
    window.addEventListener('mousemove', handleInteraction);
    window.addEventListener('keydown', handleInteraction);

    return () => {
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('mousemove', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    }
  }, []);

  useEffect(() => {
    if (isSeedMode) {
      document.body.classList.add("seed-mode-active");
      const seedTimer = setTimeout(() => {
        setIsSeedMode(false);
        setClickCount(0);
        setCurrentMessage("Đã trở về trạng thái bình thường.");
        setIsOpen(true);
      }, 5000);
      return () => {
        document.body.classList.remove("seed-mode-active");
        clearTimeout(seedTimer);
      };
    } else {
      document.body.classList.remove("seed-mode-active");
    }
  }, [isSeedMode]);

  const triggerSeedMode = () => {
    setIsSeedMode(true);
    setIsOpen(true);
    setCurrentMessage("🔥 CẢNH BÁO: KÍCH HOẠT SEED MODE! MỤC TIÊU ĐÃ BỊ KHÓA! 🔥");
  };

  const handleMascotClick = () => {
    setIsOpen(true);
    
    if (isSeedMode) {
      return;
    }
    
    setClickCount(prev => prev + 1);
    if (clickCount + 1 >= 5) {
      triggerSeedMode();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "summary", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            if (activeSection !== section) {
              setActiveSection(section);
              updateMessage(section);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  // Idle dialogue timer
  useEffect(() => {
    const timer = setInterval(() => {
      if (isTouring) return; // Don't interrupt tour
      const allIdle = [...DIALOGUES.idle, ...DIALOGUES[activeSection as keyof typeof DIALOGUES] || []];
      const randomMsg = allIdle[Math.floor(Math.random() * allIdle.length)];
      setCurrentMessage(randomMsg);
      setIsOpen(true);
    }, 15000); // Popup every 15 seconds

    return () => clearInterval(timer);
  }, [activeSection, isTouring]);

  const updateMessage = (section: string) => {
    const list = DIALOGUES[section as keyof typeof DIALOGUES] || DIALOGUES.home;
    const randomMsg = list[Math.floor(Math.random() * list.length)];
    setCurrentMessage(randomMsg);
    setIsOpen(true);
  };

  return (
    <>
      {isSeedMode && <div className="seed-mode-overlay" />}
      <motion.div 
        animate={isEasterEgg ? { x: flyPos.x, y: flyPos.y } : { y: [0, -8, 0] }}
        transition={isEasterEgg ? { duration: 2, ease: "easeInOut" } : { 
          repeat: Infinity, 
          duration: 4, 
          ease: "easeInOut"
        }}
        className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 flex flex-col items-start gap-3 pointer-events-none"
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10, transformOrigin: 'bottom left' }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              className={`bg-background/90 backdrop-blur-md border shadow-xl rounded-xl p-2.5 max-w-[160px] sm:max-w-[200px] relative pointer-events-auto mb-2 ${
                isSeedMode ? 'border-red-500 shadow-red-500/20' : 'border-primary/20 shadow-primary/10'
              }`}
            >
              <div className={`absolute -bottom-1.5 left-10 w-3 h-3 bg-background/90 border-b border-r transform rotate-45 ${
                isSeedMode ? 'border-red-500' : 'border-primary/20'
              }`} />
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute -top-1.5 -right-1.5 bg-background shadow hover:bg-primary/20 text-muted-foreground hover:text-primary rounded-full p-0.5 transition-colors z-10"
              >
                <X size={10} />
              </button>
              <p className={`text-[10px] sm:text-xs font-medium leading-relaxed ${isSeedMode ? 'text-red-500 font-bold' : 'text-foreground'}`}>
                {currentMessage}
              </p>
              
              {/* Tour Guide Button */}
              {!isSeedMode && (
                <button
                  onClick={() => {
                    if (isTouring) {
                      setIsTouring(false);
                      setCurrentMessage("Đã hủy quá trình lướt tự động. Trở lại trạng thái mặc định.");
                    } else {
                      setIsTouring(true);
                    }
                  }}
                  className={`w-full mt-2.5 py-1 px-2 text-[10px] sm:text-[11px] font-semibold rounded transition-colors flex items-center justify-center gap-1.5 ${
                    isTouring 
                      ? 'bg-rose-500/10 text-rose-500 hover:bg-rose-500/20 border border-rose-500/20' 
                      : 'bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20'
                  }`}
                >
                  {isTouring ? "⏹ Dừng hướng dẫn" : "▶ Bắt đầu hướng dẫn"}
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleMascotClick}
          title={!isSeedMode ? "Thử ấn liên tục 5 lần xem sao?" : ""}
          className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-[2px] overflow-hidden cursor-pointer pointer-events-auto bg-background/80 backdrop-blur-md flex items-center justify-center group ${
            isSeedMode ? 'border-red-500 shadow-[0_0_25px_rgba(239,68,68,0.8)]' : 'border-primary shadow-[0_0_15px_rgba(244,63,94,0.4)]'
          }`}
        >
          <div className={`absolute inset-0 z-0 ${isSeedMode ? 'bg-red-500/30' : 'bg-gradient-to-tr from-primary/30 to-accent/30'}`} />
          <video 
            src="/mascot.mp4"
            poster="/mascot.jpg"
            autoPlay 
            loop 
            muted 
            playsInline
            disablePictureInPicture
            className={`w-full h-full object-cover object-center relative z-10 transition-transform duration-300 pointer-events-none ${isSeedMode ? 'scale-125' : 'group-hover:scale-110'}`}
          >
            <img 
              src="/mascot.jpg" 
              alt="Mascot"
              className="w-full h-full object-cover object-center relative z-10"
            />
          </video>
        </motion.div>
      </motion.div>
    </>
  );
}
