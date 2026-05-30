export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-border mt-20">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>© 2026 Trần Mạnh Dũng. All rights reserved.</p>
        <div className="flex flex-col items-center sm:items-end text-center sm:text-right">
          <p>Mã sinh viên: 25020078 - K70 - ĐH Công Nghệ - ĐHQGHN</p>
          <p>Contact me: <a href="mailto:25020078@vnu.edu.vn" className="hover:text-primary transition-colors">25020078@vnu.edu.vn</a></p>
        </div>
      </div>
    </footer>
  );
}
