import { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import { X } from 'lucide-react';

export default function ZeroGravityMode({ onClose }: { onClose: () => void }) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Add physics engine
    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Body = Matter.Body;

    const engine = Engine.create();
    const world = engine.world;
    engine.world.gravity.y = 0.5;

    // We don't use Matter.Render because we render DOM elements
    // Render.create(...) is for canvas. We'll update inline styles.

    const sceneEl = sceneRef.current;
    if (!sceneEl) return;

    // Track original overflow just in case we need it, but do NOT set to hidden
    // so the user can still scroll the page behind the floating objects
    const origBodyOverflow = document.body.style.overflow;

    // Collect elements
    const targets = Array.from(document.querySelectorAll('.glass-panel, h1, p:not(.glass-panel p), .gravity-target, img'));
    
    // Filter out targets that are descendants of other targets
    const topLevelTargets = targets.filter(t => {
      // we don't want the scene elements themselves
      if (sceneEl.contains(t)) return false;
      // skip small things
      const rect = t.getBoundingClientRect();
      if (rect.width < 10 || rect.height < 10) return false;
      
      let parent = t.parentElement;
      while (parent) {
        if (targets.includes(parent)) return false;
        parent = parent.parentElement;
      }
      return true;
    }) as HTMLElement[];

    const bodiesData: { body: Matter.Body, clone: HTMLElement, origItem: HTMLElement, origStyles: any }[] = [];

    topLevelTargets.forEach((el) => {
      const rect = el.getBoundingClientRect();
      
      // clone the element exactly as it is for our scene
      const clone = el.cloneNode(true) as HTMLElement;
      
      // Match computed styles that affect layout so it looks exactly the same
      const computed = window.getComputedStyle(el);
      clone.style.margin = '0';
      clone.style.position = 'absolute';
      clone.style.top = '0px';
      clone.style.left = '0px';
      clone.style.width = `${rect.width}px`;
      clone.style.height = `${rect.height}px`;
      // Don't copy everything, just let it inherit or keep inline styles + classes.
      // Actually, since classes are copied, it should look identical as long as we fix its absolute pos.
      
      // Hide original
      const origOpacity = el.style.opacity;
      const origVisibility = el.style.visibility;
      const origTransition = el.style.transition;
      
      el.style.transition = 'none';
      el.style.opacity = '0';
      el.style.visibility = 'hidden';

      sceneEl.appendChild(clone);

      const body = Bodies.rectangle(
        rect.left + rect.width / 2,
        rect.top + rect.height / 2,
        rect.width,
        rect.height,
        {
          restitution: 0.6,
          friction: 0.1,
          frictionAir: 0.02,
          render: { visible: false } // we render DOM
        }
      );

      // optional: add small random push
      Body.setVelocity(body, { x: (Math.random() - 0.5) * 5, y: -Math.random() * 5 });
      Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.1);

      World.add(world, body);
      
      bodiesData.push({
        body,
        clone, // The DOM element we update
        origItem: el,
        origStyles: { opacity: origOpacity, visibility: origVisibility, transition: origTransition }
      });
    });

    const addBoundaries = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const t = 100; // thickness
      
      const ground = Bodies.rectangle(w / 2, h + t/2, w + t*2, t, { isStatic: true });
      const leftWall = Bodies.rectangle(0 - t/2, h/2, t, h * 2, { isStatic: true });
      const rightWall = Bodies.rectangle(w + t/2, h/2, t, h * 2, { isStatic: true });
      const ceiling = Bodies.rectangle(w/2, -h - t/2, w + t*2, t, { isStatic: true });// high ceiling so they can be tossed up
      
      // Remove old boundaries
      const staticBodies = Matter.Composite.allBodies(world).filter(b => b.isStatic);
      World.remove(world, staticBodies);
      
      World.add(world, [ground, leftWall, rightWall, ceiling]);
    };

    addBoundaries();

    // Mouse constraint for throwing
    const mouse = Mouse.create(document.body);
    
    // Remove Matter.js mouse listeners that prevent scrolling
    mouse.element.removeEventListener("mousewheel", (mouse as any).mousewheel);
    mouse.element.removeEventListener("DOMMouseScroll", (mouse as any).mousewheel);
    
    // To allow mobile scrolling, we remove these touch listeners.
    // (This disables touch dragging for zero-gravity items, but dragging still works on desktop via mouse events,
    // and scrolling is much more important for the page experience).
    mouse.element.removeEventListener("touchmove", (mouse as any).mousemove);
    mouse.element.removeEventListener("touchstart", (mouse as any).mousedown);
    mouse.element.removeEventListener("touchend", (mouse as any).mouseup);

    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }
      }
    });

    World.add(world, mouseConstraint);

    const runner = Runner.create();
    Runner.run(runner, engine);
    
    // Custom render loop
    let reqId: number;
    const updateRender = () => {
      bodiesData.forEach(data => {
        const { x, y } = data.body.position;
        const angle = data.body.angle;
        // The body origin is its center.
        // We set the clone top/left to 0,0 and translate to center
        data.clone.style.transform = `translate(${x - data.clone.offsetWidth / 2}px, ${y - data.clone.offsetHeight / 2}px) rotate(${angle}rad)`;
      });
      reqId = requestAnimationFrame(updateRender);
    };
    updateRender();

    const handleResize = () => {
      addBoundaries();
    };
    window.addEventListener('resize', handleResize);
    setIsReady(true);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(reqId);
      Runner.stop(runner);
      Engine.clear(engine);
      
      // Restore originals
      bodiesData.forEach(data => {
        data.origItem.style.opacity = data.origStyles.opacity;
        data.origItem.style.visibility = data.origStyles.visibility;
        data.origItem.style.transition = data.origStyles.transition;
      });
      
      if (origBodyOverflow) {
        document.body.style.overflow = origBodyOverflow;
      } else {
        document.body.style.removeProperty('overflow');
      }

      Mouse.clearSourceEvents(mouse);
      
      if (sceneEl) sceneEl.innerHTML = ''; // clear clones
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-[1000] pointer-events-none" 
      ref={sceneRef}
      style={{ overflow: 'hidden' }}
    >
      {/* Interaction layer to capture pointer events while in 0g */}
      <div 
        className="absolute inset-0 pointer-events-auto cursor-grab active:cursor-grabbing backdrop-blur-sm bg-black/20"
        style={{ zIndex: -1 }} 
      />
      
      {isReady && (
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-[1001] bg-primary/80 hover:bg-primary text-white p-3 rounded-full shadow-lg pointer-events-auto flex items-center gap-2"
        >
          <X size={20} />
          <span>Tắt chế độ Zero-Gravity</span>
        </button>
      )}
    </div>
  );
}
