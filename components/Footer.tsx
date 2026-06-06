export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 mt-20">
      <div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-muted-foreground/50 font-mono tracking-wide">
        <span>&copy; {new Date().getFullYear()} Trần Mạnh Dũng &mdash; UET &middot; 25020078</span>
        <span>
          React &amp; <span className="text-accent/60">Tailwind</span>
        </span>
      </div>
    </footer>
  );
}
