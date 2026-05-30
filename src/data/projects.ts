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
    goal: "Trình bày cấu trúc thư mục tối ưu và quy tắc đặt tên tệp đã thiết lập, minh họa kỹ năng quản lý dữ liệu trên máy tính.",
    process: [
      "Sử dụng File Explorer thiết lập cấu trúc thư mục logic.",
      "Tạo, đổi tên và tổ chức các tệp tin theo quy tắc rõ ràng.",
      "Thực hiện các thao tác quản lý: sao chép, di chuyển (cut & paste).",
      "Thực hành xóa tệp vào Recycle Bin và khôi phục an toàn."
    ],
    output: "Nắm vững các thao tác quản lý tệp và thư mục cơ bản trên hệ điều hành Windows, thiết lập tư duy tổ chức dữ liệu cá nhân."
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
    goal: "Trình bày kết quả tìm kiếm học thuật bằng các toán tử nâng cao và bảng đánh giá nguồn tin đã thực hiện.",
    process: [
      "Áp dụng các toán tử tìm kiếm nâng cao (site:, filetype:, ngoặc kép...) để lọc thông tin.",
      "Tìm kiếm 10 tài liệu tham khảo với chủ đề 'Ứng dụng của Cloud Computing trong quản lý dữ liệu doanh nghiệp'.",
      "Sử dụng định dạng chuẩn Harvard để trích dẫn.",
      "Đánh giá độ tin cậy dựa trên 4 tiêu chí cốt lõi: Tác giả, Cơ quan xuất bản, Phương pháp nghiên cứu, và Tính cập nhật."
    ],
    output: "Bảng tổng hợp và đánh giá chất lượng 10 nguồn thông tin uy tín. Củng cố phương pháp nghiên cứu và đánh giá độ tin cậy của tài liệu khoa học."
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
    goal: "Trình bày sự so sánh giữa Prompt ban đầu và Prompt cải tiến cùng kết quả đầu ra từ AI, từ đó đúc kết nguyên tắc Prompt Engineering.",
    process: [
      "Lựa chọn 3 tác vụ: Tóm tắt tài liệu, Giải thích khái niệm phức tạp (Big O), Tạo bộ câu hỏi Toán rời rạc.",
      "Thử nghiệm với Prompt cơ bản và phân tích sự thiếu sót của đầu ra.",
      "Áp dụng các kỹ thuật nâng cao: Role-Prompting, Chain-of-Thought, và Few-Shot Prompting để cải tiến.",
      "So sánh, đối chiếu và rút ra kết luận về sự tác động của cấu trúc prompt đến chất lượng phản hồi."
    ],
    output: "Minh chứng sức mạnh của kỹ thuật Prompt Engineering. Tổng hợp được 4 'nguyên tắc vàng': Role & Context, Few-shot, Chain-of-Thought, và Output Constraint."
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
    goal: "Trình bày minh chứng về việc sử dụng công cụ quản lý dự án nhóm và cách thức phối hợp trực tuyến hiệu quả.",
    process: [
      "Xây dựng dự án nhóm 'Ứng dụng AI và CNS trong KHTN, Kỹ thuật và Công nghệ'.",
      "Phân công vai trò cụ thể cho từng thành viên: Quản lý/Thuyết trình, Đồ họa/Dựng phim, Ghi hình/Báo cáo.",
      "Tích hợp và sử dụng các công cụ nền tảng mây: Trello (theo dõi tiến độ Kanban), Google Drive (lưu trữ và đồng bộ hóa), Google Meet (họp trực tuyến).",
      "Đánh giá những thuận lợi, bất tiện và đề xuất giải pháp cải thiện quy trình làm việc."
    ],
    output: "Báo cáo tiến độ và nghiệm thu dự án. Nâng cao kỹ năng tổ chức, quản lý thời gian và giải quyết xung đột khi làm việc nhóm từ xa."
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
    goal: "Trưng bày sản phẩm nội dung số hoàn thiện (Infographic) được hỗ trợ bởi AI, thể hiện tư duy thiết kế và tối ưu công cụ.",
    process: [
      "Chọn chủ đề: 'Toán Học Ứng Dụng Trong Khoa Học Dữ Liệu: 5 Khái Niệm Quan Trọng'.",
      "Dùng Gemini (Text AI) để xây dựng kịch bản, dàn ý (outline), và tối ưu hóa nội dung văn bản cho định dạng inforgraphic.",
      "Dùng DALL-E (Image AI) tạo minh họa vector/isometric với các prompt cụ thể về phong cách Cyberpunk.",
      "Dùng Canva (Design công cụ) tích hợp, căn chỉnh layout, hierarchy và hoàn thành tác phẩm."
    ],
    output: "Infographic hoàn thiện với chất lượng thẩm mỹ cao. Báo cáo phân tích ưu nhược điểm của các công cụ AI tạo sinh và ranh giới đạo đức về bản quyền, tính minh bạch."
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
    goal: "Trình bày bộ nguyên tắc cá nhân về sử dụng AI có trách nhiệm dựa trên các nghiên cứu và thực hành đã thực hiện.",
    process: [
      "Nghiên cứu chính sách của trường Đại học Công Nghệ - ĐHQGHN về việc ứng dụng AI trong học tập.",
      "Thực hành với ứng dụng AI: Tóm tắt Giải tích 1, Lập bảng so sánh, Giải toán ứng dụng.",
      "Xây dựng phương pháp đánh giá (tính chính xác, đầy đủ) và trích dẫn AI minh bạch (Công khai, trong văn bản, danh mục TLTK).",
      "Đánh giá rủi ro đạo đức liên quan đến gian lận, thiên vị thuật toán và bảo mật dữ liệu."
    ],
    output: "Xây dựng Infographic hướng dẫn sử dụng AI minh bạch và Bộ nguyên tắc cá nhân gồm 4 trụ cột: Kiểm chứng, Minh bạch, Chủ động, Phản biện."
  }
];
