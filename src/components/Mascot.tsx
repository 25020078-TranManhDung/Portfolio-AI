import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquareText, X } from "lucide-react";

export default function Mascot() {
  const [isOpen, setIsOpen] = useState(true);
  const [currentMessage, setCurrentMessage] = useState("Xin chào! Mình là trợ lý ảo. Bạn có muốn đi một vòng tham quan Portfolio này không?");
  const [clickCount, setClickCount] = useState(0);
  const [isTouring, setIsTouring] = useState(false);
  const tourRef = useRef<number | null>(null);

  const TOUR_STAGES = [
    { id: "home", message: "Chào mừng bạn đến với trang Portfolio của Trần Mạnh Dũng. Đang khởi động chuyến tham quan tự động..." },
    { id: "projects", message: "Đây là phần Dự án (Projects), nơi trưng bày những sản phẩm tiêu biểu mà Dũng từng làm. Hãy bấm vào để xem chi tiết nhé." },
    { id: "summary", message: "Còn đây là Tóm tắt (Summary), điểm lại quá trình học tập, kỹ năng và kinh nghiệm." },
    { id: "contact", message: "Phần Liên hệ (Contact). Cứ tự nhiên kết nối nếu bạn thấy thú vị nhé! Sắp kết thúc chuyến tham quan!" }
  ];

  useEffect(() => {
    if (isTouring) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setCurrentMessage(TOUR_STAGES[0].message);
      setIsOpen(true);
      
      const startTimer = setTimeout(() => {
        let currentY = window.scrollY;
        let lastActiveIndex = 0;
        
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

          // Giảm tốc độ lướt: 1.5px/frame (~90px/s ở 60fps) thay vì 4.5px/frame
          currentY += 1.5;
          window.scrollTo(0, currentY);

          // Dùng getBoundingClientRect để lấy vị trí thực trong viewport
          // (offsetTop không đáng tin vì trả về offset tương đối với offsetParent, không phải document)
          let activeIndex = 0;
          for (let i = TOUR_STAGES.length - 1; i >= 0; i--) {
            const el = document.getElementById(TOUR_STAGES[i].id);
            if (el) {
              const rect = el.getBoundingClientRect();
              // Cập nhật ngay khi đầu section chạm vào 25% trên cùng của màn hình
              if (rect.top <= window.innerHeight * 0.25) {
                activeIndex = i;
                break;
              }
            }
          }
          
          // Chỉ cập nhật message khi mascot thực sự bước vào section mới
          if (activeIndex !== lastActiveIndex) {
            lastActiveIndex = activeIndex;
            setCurrentMessage(TOUR_STAGES[activeIndex].message);
          }

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
    if (isOpen && !isTouring) {
      const timer = setTimeout(() => setIsOpen(false), 8000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, currentMessage, isTouring]);

  const handleMascotClick = () => {
    setIsOpen(true);
    setClickCount(prev => prev + 1);
  };

  return (
    <>
      <motion.div 
        className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 flex flex-col items-start gap-3 pointer-events-none"
      >
        <motion.div 
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="flex flex-col items-start gap-3 w-full"
        >
          <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10, transformOrigin: 'bottom left' }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              className={`bg-background/90 backdrop-blur-md border shadow-xl rounded-xl p-2.5 max-w-[160px] sm:max-w-[200px] relative pointer-events-auto mb-2 border-primary/20 shadow-primary/10`}
            >
              <div className={`absolute -bottom-1.5 left-10 w-3 h-3 bg-background/90 border-b border-r transform rotate-45 border-primary/20`} />
              {!isTouring && (
                <button 
                  onClick={() => setIsOpen(false)}
                  className="absolute -top-1.5 -right-1.5 bg-background shadow hover:bg-primary/20 text-muted-foreground hover:text-primary rounded-full p-0.5 transition-colors z-10"
                >
                  <X size={10} />
                </button>
              )}
              <p className={`text-[10px] sm:text-xs font-medium leading-relaxed text-foreground`}>
                {currentMessage}
              </p>
              
              {/* Tour Guide Button */}
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
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleMascotClick}
          className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-[2px] overflow-hidden cursor-pointer pointer-events-auto bg-background/80 backdrop-blur-md flex items-center justify-center group border-primary shadow-[0_0_15px_rgba(244,63,94,0.4)]`}
        >
          <div className={`absolute inset-0 z-0 bg-gradient-to-tr from-primary/30 to-accent/30`} />
          <video 
            src="/mascot.mp4"
            poster="/mascot.jpg"
            autoPlay 
            loop 
            muted 
            playsInline
            disablePictureInPicture
            className={`w-full h-full object-cover object-center relative z-10 transition-transform duration-300 pointer-events-none group-hover:scale-110`}
          >
            <img 
              src="/mascot.jpg" 
              alt="Mascot"
              className="w-full h-full object-cover object-center relative z-10"
            />
          </video>
        </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
