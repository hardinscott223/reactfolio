import { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Reveals children marked with [data-reveal] inside the returned ref:
 *  - data-reveal="up"    text fades upward
 *  - data-reveal="mask"  image reveals behind a wiping mask
 *  - data-reveal="slow"  large typography parallax (moves slower than images)
 */
gsap.registerPlugin(ScrollTrigger);
const EASE = "power2.out";

export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      root.querySelectorAll('[data-reveal="up"]').forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 46, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.4,
            ease: EASE,
            delay: Math.min(i * 0.06, 0.4),
            scrollTrigger: { trigger: el, start: "top 88%" },
          },
        );
      });

      root.querySelectorAll('[data-reveal="mask"]').forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: "inset(0% 0% 100% 0%)", scale: 1.12, opacity: 0.2 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            opacity: 1,
            duration: 1.8,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 90%" },
          },
        );
      });

      root.querySelectorAll('[data-reveal="slow"]').forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: 14 },
          {
            yPercent: -14,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          },
        );
      });

      ScrollTrigger.refresh();
    }, root);

    return () => ctx.revert();
  }, []);

  return ref;
}
