export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-white/10 mt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <h3 className="text-2xl font-black tracking-tight text-foreground uppercase">
              Trần Mạnh Dũng
            </h3>
            <p className="text-muted-foreground text-sm tracking-wide">
              Portfolio Cá Nhân &bull; Phát Triển Lập Trình & Tư Duy AI
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-1 text-sm text-muted-foreground text-center md:text-right bg-white/5 p-4 rounded-2xl border border-white/5">
            <p className="font-medium text-primary">Trường Đại học Công Nghệ - ĐHQGHN</p>
            <p>Mã sinh viên: <span className="font-medium text-foreground">25020078</span> &bull; Khoá: <span className="font-medium text-foreground">K70</span></p>
          </div>
        </div>
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-white/40 tracking-wider">
          <p>&copy; {new Date().getFullYear()} TRẦN MẠNH DŨNG. CỐNG HIẾN TẬN TÂM.</p>
          <div className="flex items-center gap-1 uppercase">
             Phát triển với <span className="text-primary">React</span> & <span className="text-accent">Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
