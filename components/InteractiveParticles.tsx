import { useEffect, useRef } from "react";

export default function InteractiveParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    // Configuration
    const particleCount = 45;                              // ↓ from 80 → 45²/2 ≈ 1,012 → 45²/2 ≈ 1,012 checks eliminated
    const connectionDistance = 100;                        // ↓ from 150 → smaller search radius → fewer lines
    const connectionDistanceSq = connectionDistance * connectionDistance; // avoid sqrt in grid check
    const mouseRadius = 150;
    const mouseRadiusSq = mouseRadius * mouseRadius;       // avoid sqrt for mouse check when not needed

    const mouse = { x: -1000, y: -1000 };

    class Particle {
      x: number;
      y: number;
      size: number;
      density: number;
      vx: number;
      vy: number;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = Math.random() * 2 + 0.5;
        this.density = Math.random() * 15 + 5;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
      }

      update(canvasWidth: number, canvasHeight: number) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvasWidth) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvasHeight) this.vy = -this.vy;

        // Mouse repulsion — skip sqrt unless actually within range
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < mouseRadiusSq) {
          const distance = Math.sqrt(distSq); // sqrt only for ~5% of particles
          const force = (mouseRadius - distance) / mouseRadius;
          this.x -= (dx / distance) * force * this.density;
          this.y -= (dy / distance) * force * this.density;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = "rgba(167, 139, 250, 0.5)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // ─── Spatial grid ─────────────────────────────────────────────────────────
    // Cell size = connectionDistance so any two connectable particles share a
    // cell or are in immediately adjacent cells. We only need to check a 3×3
    // neighbourhood (9 cells) instead of all n particles.
    //
    // Worst-case pair checks:  45 × ~4 neighbours / 2  ≈  90  (vs 45×44/2 = 990)
    // sqrt() calls drop proportionally — most dx²+dy² tests reject before sqrt.
    // ─────────────────────────────────────────────────────────────────────────

    const buildGrid = (): Map<string, number[]> => {
      const grid = new Map<string, number[]>();
      for (let i = 0; i < particles.length; i++) {
        const key = `${Math.floor(particles[i].x / connectionDistance)},${Math.floor(particles[i].y / connectionDistance)}`;
        const cell = grid.get(key);
        if (cell) cell.push(i);
        else grid.set(key, [i]);
      }
      return grid;
    };

    const drawConnections = (grid: Map<string, number[]>) => {
      ctx.lineWidth = 1; // set once outside the inner loop

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const cx = Math.floor(p.x / connectionDistance);
        const cy = Math.floor(p.y / connectionDistance);

        // Check 3×3 neighbourhood
        for (let nx = cx - 1; nx <= cx + 1; nx++) {
          for (let ny = cy - 1; ny <= cy + 1; ny++) {
            const cell = grid.get(`${nx},${ny}`);
            if (!cell) continue;

            for (const j of cell) {
              if (j <= i) continue; // skip self + already-drawn pairs

              const q = particles[j];
              const dx = p.x - q.x;
              const dy = p.y - q.y;
              const distSq = dx * dx + dy * dy;

              if (distSq < connectionDistanceSq) {
                const distance = Math.sqrt(distSq); // only for actual neighbours
                const opacity = (1 - distance / connectionDistance) * 0.4;
                ctx.beginPath();
                ctx.strokeStyle = `rgba(167, 139, 250, ${opacity})`;
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(q.x, q.y);
                ctx.stroke();
              }
            }
          }
        }
      }
    };

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update + draw particles in one pass
      for (const p of particles) {
        p.update(canvas.width, canvas.height);
        p.draw();
      }

      // Connection lines via spatial grid
      drawConnections(buildGrid());

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    handleResize();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -5 }}
    />
  );
}
