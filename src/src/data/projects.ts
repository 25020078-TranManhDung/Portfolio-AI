import { FolderTree, Search, Sparkles, Users, Palette, ShieldCheck } from "lucide-react";

export const projects = [
  {
    id: "bai-1",
    title: "Bài 1: Máy tính và các thiết bị ngoại vi",
    subtitle: "Thao tác cơ bản với tệp tin và thư mục",
    image: "/Bai1.jpg",
    icon: FolderTree,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/20",
    goal: "Rèn luyện kỹ năng thao tác cơ bản trên hệ điều hành Windows: tạo, đổi tên, sao chép, di chuyển, xóa tệp tin và thư mục một cách thành thạo, thiết lập tư duy tổ chức dữ liệu cá nhân khoa học.",
    process: [
      "Mở File Explorer và truy cập vào ổ đĩa/thư mục cụ thể (ví dụ: ổ C:, thư mục Documents).",
      "Tạo thư mục mới và đặt tên theo cú pháp chuẩn (VD: ThucHanh_TranManhDung), sau đó tạo các tệp văn bản (GhiChu.txt) bên trong.",
      "Thực hành đổi tên tệp (Rename) logic và tạo các thư mục con phân cấp (VD: TaiLieu).",
      "Sử dụng các lệnh điều hướng để Sao chép (Copy & Paste) và Di chuyển (Cut & Paste) tệp tin giữa các thư mục.",
      "Thực hành quy trình xóa tệp an toàn (Delete vào Recycle Bin) và Khôi phục (Restore), cũng như xóa vĩnh viễn (Shift + Delete) không qua thùng rác."
    ],
    output: "Hoàn thiện bộ minh chứng bằng ảnh chụp màn hình cho từng bước thao tác. Nắm vững kỹ năng quản lý tệp tin và thư mục cơ bản trên Windows, từ đó thiết lập tư duy tổ chức dữ liệu cá nhân trực quan và hiệu quả.",
    link: "https://drive.google.com/file/d/10XegJeVWKOS-fK_IcljFDX_n3LuimhhO/view?usp=drive_link",
    results: [
      {
        image: "/bai1-anh1.png",
        caption: "Khởi tạo thư mục ThucHanh_TranManhDung",
        aspectRatio: "aspect-[3/2]"
      },
      {
        image: "/bai1-anh2.png",
        caption: "Cấu trúc thư mục",
        aspectRatio: "aspect-[3/2]"
      }
    ]
  },
  {
    id: "bai-2",
    title: "Bài 2: Khai thác dữ liệu và thông tin",
    subtitle: "Tìm kiếm và đánh giá thông tin học thuật",
    image: "/Bai2.jpg",
    icon: Search,
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    borderColor: "border-emerald-400/20",
    goal: "Phát triển kỹ năng tìm kiếm và đánh giá thông tin học thuật từ các nguồn đáng tin cậy. Phân tích sâu sắc chiến lược tìm kiếm xoay quanh chủ đề: Ứng dụng Cloud Computing trong quản lý dữ liệu doanh nghiệp.",
    process: [
      "Áp dụng linh hoạt trên 4 toán tử tìm kiếm nâng cao (như ngoặc kép \"\", toán tử OR, AND, site:, filetype:) để thu hẹp phạm vi thông tin.",
      "Thu thập và sàng lọc 10 tài liệu tham khảo chất lượng, trong đó bao gồm các bài báo khoa học, tạp chí uy tín (World Journal of Advanced Research, Tạp chí Công Thương, sách từ Prentice Hall), whitepaper của AWS.",
      "Trình bày danh mục tài liệu và thông tin theo định dạng chuẩn Harvard thống nhất.",
      "Tiến hành đánh giá chuyên sâu độ tin cậy của từng nguồn dựa trên 4 tiêu chí cốt lõi: Tác giả, Cơ quan xuất bản, Phương pháp nghiên cứu/Trích dẫn gốc và Tính cập nhật."
    ],
    output: "Báo cáo phân tích chuyên sâu gồm 10 tài liệu tham khảo với bảng tổng hợp xếp hạng độ tin cậy từ Khá đến Rất cao. Củng cố phương pháp đánh giá tài liệu, phục vụ đắc lực cho nghiên cứu khoa học.",
    link: "https://drive.google.com/file/d/1TIXDvVU7r7sYa3w_j1qW8qEFoeutUAGy/view?usp=sharing",
    results: [
      {
        image: "/bai2-anh1.png",
        caption: "Bảng tổng hợp nguồn thông tin",
        aspectRatio: "aspect-[3/4]"
      },
      {
        image: "/bai2-anh2.png",
        caption: "Quá trình tìm kiếm tài liệu",
        aspectRatio: "aspect-[3/4]"
      }
    ]
  },
  {
    id: "bai-3",
    title: "Bài 3: Tổng quan về trí tuệ nhân tạo",
    subtitle: "Viết Prompt hiệu quả cho các tác vụ học tập",
    image: "/Bai3.jpg",
    icon: Sparkles,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    borderColor: "border-purple-400/20",
    goal: "Phát triển kỹ năng viết prompt (Prompt Engineering) hiệu quả nhằm tận dụng tối đa khả năng LLM. So sánh và phân tích sâu sắc cơ chế hoạt động của AI qua các tác vụ học tập.",
    process: [
      "Chọn 3 tác vụ học tập đặc thù: Tóm tắt thuật toán (Exception Handling trong Java), Giải thích khái niệm (Big O Notation), Tạo bộ câu hỏi trắc nghiệm (Toán rời rạc).",
      "Thiết kế 3 phiên bản cấu trúc Prompt cho từng tác vụ: Cơ bản (Simple), Cải tiến (Structured), Nâng cao (Expert Techniques).",
      "Áp dụng các kỹ thuật cấu trúc prompt chuyên sâu: Gán vai trò (Role-Prompting), Tư duy chuỗi (Chain-of-Thought) để chống \"ảo giác\" (hallucinations), và Học qua ví dụ (Few-Shot Prompting) để định hình cấu trúc.",
      "Thử nghiệm trực tiếp với ChatGPT, đối chiếu, so sánh và phân tích rất sâu sắc về sự khác biệt về chất lượng đầu ra, hiểu rõ cách AI nội suy kết quả."
    ],
    output: "Báo cáo phân tích sự chênh lệch chất lượng sinh văn bản của AI. Rút ra 4 'nguyên tắc vàng' khi viết prompt: Có vai trò/Ngữ cảnh, Có ví dụ minh họa, Yêu cầu suy luận từng bước, Ràng buộc đầu ra.",
    link: "https://drive.google.com/file/d/1TmOOs9KNx00Rkr1tKkC6mS_YTuJ1V2yA/view?usp=drive_link",
    results: [
      {
        image: "/bai3-anh1.png",
        caption: "Prompt Cơ bản (Simple)",
        aspectRatio: "aspect-[8/5]"
      },
      {
        image: "/bai3-anh2.png",
        caption: "Prompt Cải tiến (Structured)",
        aspectRatio: "aspect-[8/5]"
      },
      {
        image: "/bai3-anh3.png",
        caption: "Prompt Nâng cao (Expert Techniques)",
        aspectRatio: "aspect-[8/5]"
      }
    ]
  },
  {
    id: "bai-4",
    title: "Bài 4: Giao tiếp & hợp tác môi trường số",
    subtitle: "Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
    image: "/Bai4.jpg",
    icon: Users,
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
    borderColor: "border-amber-400/20",
    goal: "Thành thạo các công cụ hợp tác trực tuyến, tích hợp tính năng nâng cao và thể hiện năng lực quản lý điều phối cá nhân, phối hợp ăn ý trong quá trình làm dự án nhóm (Video thuyết trình chủ đề AI).",
    process: [
      "Phân công vai trò cụ thể trong dự án 'Ứng dụng AI và công nghệ số trong khoa học tự nhiên, kỹ thuật và công nghệ' (Quản lý/Thuyết trình biên kịch, Đồ họa/Dựng phim, Ghi hình/Báo cáo).",
      "Tích hợp và sử dụng nâng cao Trello để quản lý dự án (tạo bảng, thẻ nhiệm vụ Kanban, theo dõi deadline, gắn nhãn label chi tiết cho từng phần).",
      "Sử dụng Google Drive để lưu trữ và chia sẻ file tài nguyên trung tâm (kịch bản, slide, video record) đồng bộ hóa, tránh phân mảnh dữ liệu.",
      "Tổ chức và điều phối các cuộc họp nhóm từ xa thông qua Google Meet nhằm thảo luận ý tưởng, đánh giá những thuận lợi (cập nhật nhanh, đồng bộ tốt) và khó khăn (rối thông tin, phụ thuộc Internet)."
    ],
    output: "Hoàn thiện video thuyết trình nhóm. Rút ra giải pháp tối ưu hóa không gian làm việc số: thống nhất quy tắc thiết lập từ đầu, tổ chức thư mục khoa học và kiểm tra chéo thường xuyên.",
    link: "https://drive.google.com/file/d/1WiKeH7RY2_1mUAEzC0ipEheQV8_gv9Fs/view?usp=drive_link",
    results: [
      {
        image: "/bai4-anh1.png",
        caption: "Phân chia công việc"
      },
      {
        image: "/bai4-anh2.png",
        caption: "Trao đổi tiến độ trên mạng"
      }
    ]
  },
  {
    id: "bai-5",
    title: "Bài 5: Sáng tạo nội dung số",
    subtitle: "Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
    image: "/Bai5.jpg",
    icon: Palette,
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
    borderColor: "border-pink-400/20",
    goal: "Thành thạo việc sử dụng kết hợp đa dạng các công cụ AI tạo sinh (Generative AI) để hỗ trợ quá trình sáng tạo nội dung số, thể hiện khả năng tận dụng tối đa sức mạnh của AI trong công việc.",
    process: [
      "Chọn chủ đề hướng dẫn: 'Toán Học Ứng Dụng Trong Khoa Học Dữ Liệu: 5 Khái Niệm Quan Trọng Nhất' (Xác suất, Đại số tuyến tính, Giải tích...).",
      "Sử dụng Gemini (AI văn bản) đóng vai chuyên gia Khoa học Dữ liệu để lập dàn ý, viết định nghĩa (tối đa 2 dòng) và tìm ứng dụng thực tế cho nền tảng thuật toán.",
      "Sử dụng DALL-E 3 (AI hình ảnh) kết hợp với các kỹ thuật prompt tinh chỉnh để tạo ra các biểu tượng isometric/vector góc cạnh, phối màu Cyberpunk.",
      "Sử dụng Canva AI (Magic Design) để điều chỉnh hệ thống màu sắc (Deep Blue, Magenta), phân cấp thông tin (Hierarchy), tạo ra bố cục đồ họa chuyên nghiệp và kiểm chứng lại logic toán học."
    ],
    output: "Infographic chất lượng cao, thẩm mỹ chuyên nghiệp. Bảng báo cáo đánh giá ưu nhược điểm chi tiết của Gemini, DALL-E, Canva AI và các phương pháp hạn chế rủi ro đạo đức, bản quyền.",
    link: "https://drive.google.com/file/d/1dLSWHcKKoQMw4F2AFYbitD4ZDYyr66vv/view?usp=drive_link",
    results: [
      {
        image: "/bai5-anh1.png",
        caption: "Lựa chọn dự án sáng tạo",
        aspectRatio: "aspect-[9/1]"
      },
      {
        image: "/bai5-anh2.png",
        caption: "Lựa chọn bộ công cụ AI",
        aspectRatio: "aspect-[16/3]"
      },
      {
        image: "/bai5-anh3.png",
        caption: "Triển khai với Prompt Engineering",
        aspectRatio: "aspect-square"
      },
      {
        image: "/bai5-anh4.png",
        caption: "Sản phẩm cuối cùng – Infographic '5 Khái Niệm Toán Học cho Data Science'",
        aspectRatio: "aspect-video"
      }
    ]
  },
  {
    id: "bai-6",
    title: "Bài 6: An toàn, liêm chính học thuật",
    subtitle: "Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
    image: "/Bai6.jpg",
    icon: ShieldCheck,
    color: "text-rose-400",
    bgColor: "bg-rose-400/10",
    borderColor: "border-rose-400/20",
    goal: "Nghiên cứu cấu trúc chính sách đạo đức và phát triển kỹ năng ứng dụng AI một cách có trách nhiệm, giữ vững liêm chính học thuật. Đề xuất giải pháp và phát huy tư duy phản biện cao.",
    process: [
      "Nghiên cứu chính sách của trường ĐH Công Nghệ - ĐHQGHN (khuyến khích áp dụng AI làm trợ lý nhưng phải có trách nhiệm và minh bạch).",
      "Thực hành AI vào chủ đề Giải tích 1: Dùng prompt tổng hợp kiến thức, thể hiện tư duy phản biện cao qua việc đối chiếu và tự đánh giá chéo tính chính xác của AI sinh ra với giáo trình gốc.",
      "Phân tích sâu sắc các vấn đề đạo đức (đạo văn, thiên vị, quyền riêng tư) và đề xuất các giải pháp cụ thể để ứng phó với các thách thức đạo đức khi sử dụng AI.",
      "Đúc kết Bộ nguyên tắc cá nhân chi tiết (7 quy tắc) về cách sử dụng AI và thể hiện qua Infographic trực quan sinh động với các trụ cột quan trọng."
    ],
    output: "Infographic minh họa 'Sử dụng AI có trách nhiệm trong học thuật' với 7 quy tắc chi tiết. Báo cáo đánh giá sâu sắc, đề xuất giải pháp duy trì tư duy độc lập.",
    link: "https://drive.google.com/file/d/1JKBlKFPKgHCVe6KEAJ0NnRVHdgbN8mow/view?usp=drive_link",
    results: [
      {
        image: "/bai6-anh1.png",
        caption: "Sản phẩm cuối cùng – Bộ nguyên tắc cá nhân về sử dụng AI có trách nhiệm"
      }
    ]
  }
];
