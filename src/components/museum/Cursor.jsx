import { useEffect, useRef, useState } from "react";

const Cursor = () => {
  const ring = useRef(null);
  const dot = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let raf = 0;

    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${x}px,${y}px,0)`;
      }
      const t = e.target?.closest("a,button,[data-magnetic]");
      if (ring.current) {
        ring.current.setAttribute("data-active", t ? "true" : "false");
      }
    };

    const loop = () => {
      rx += (x - rx) * 0.12;
      ry += (y - ry) * 0.12;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${rx}px,${ry}px,0)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block">
      <div
        ref={ring}
        data-active="false"
        className="absolute -ml-5 -mt-5 h-10 w-10 border border-gold/50 transition-[width,height,margin,opacity] duration-300 data-[active=true]:-ml-8 data-[active=true]:-mt-8 data-[active=true]:h-16 data-[active=true]:w-16 data-[active=true]:border-gold"
      />
      <div ref={dot} className="absolute -ml-[2px] -mt-[2px] h-1 w-1 bg-gold" />
    </div>
  );
};

export default Cursor;