import React, { useEffect ,useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroPainting from '../../assets/paints/hero-painting.jpg';
import { Ornament } from '../museum/Ornament';

gsap.registerPlugin(ScrollTrigger);

const EASE = "power2.out";

const Hero = () => {
  const root = useRef(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (!reduced) {
        gsap.from("[data-hero-line]", {
          yPercent: 118,
          opacity: 0,
          duration: 1.9,
          ease: "power4.out",
          stagger: 0.16,
        });
        gsap.from("[data-hero-fade]", {
          y: 30,
          opacity: 0,
          duration: 1.4,
          ease: EASE,
          delay: 0.7,
          stagger: 0.12,
        });
        gsap.to("[data-hero-title]", {
          yPercent: -18,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: 1 },
        });
        gsap.to("[data-hero-art]", {
          yPercent: 12,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true },
        });
      }

      const onMove = (e) => {
        if (reduced) return;
        const nx = e.clientX / window.innerWidth - 0.5;
        const ny = e.clientY / window.innerHeight - 0.5;
        gsap.to("[data-hero-art]", { x: nx * -34, y: ny * -22, duration: 1.4, ease: EASE });
        gsap.to("[data-hero-title]", { x: nx * 16, duration: 1.6, ease: EASE });
      };
      window.addEventListener("mousemove", onMove);
      return () => window.removeEventListener("mousemove", onMove);
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={root}
      className="vignette isolate relative flex min-h-screen flex-col justify-end overflow-hidden pb-16 pt-28"
    >
      <div
        data-hero-art
        className="absolute inset-0 z-0 scale-110 opacity-[0.6]"
        aria-hidden="true"
      >
        <img
          src={heroPainting}
          alt=""
          width={1600}
          height={1008}
          className="h-full w-full object-cover object-center [filter:sepia(0.25)_saturate(0.85)_brightness(1.45)_contrast(0.95)]"
        />
      </div>
      <div className="pixel-veil pointer-events-none absolute inset-0 z-[1] opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-2/5 bg-gradient-to-t from-background via-background/80 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 md:px-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-9">
            <p
              data-hero-fade
              className="label-xs mb-8 text-gold/80"
            >
              Fol. I &nbsp;·&nbsp; Creative Full Stack Developer
            </p>

            <h1 data-hero-title className="text-vellum">
              <span className="block overflow-hidden">
                <span
                  data-hero-line
                  className="font-pixelgothic block text-[19vw] leading-[0.78] tracking-tight sm:text-[16vw] lg:text-[12.5vw]"
                >
                  Hardin
                </span>
              </span>
              <span className="block overflow-hidden pl-[6vw]">
                <span
                  data-hero-line
                  className="font-pixelgothic block text-[19vw] leading-[0.78] tracking-tight text-vellum/85 sm:text-[16vw] lg:text-[12.5vw]"
                >
                  Scott
                </span>
              </span>
            </h1>
          </div>

          <div className="lg:col-span-3 lg:pb-6">
            <p
              data-hero-fade
              className="max-w-sm text-[1.05rem] leading-relaxed text-vellum/70"
            >
              An engineer of quiet systems and loud interfaces. Two years spent
              illuminating the margins of the web — half monk, half machinist.
            </p>
            {/* <div data-hero-fade className="mt-9 flex flex-wrap gap-4"> */}
              {/* <MagneticButton href="#works" variant="seal">
                View Projects
              </MagneticButton>
              <MagneticButton href="#contact">Contact Me</MagneticButton> */}
            {/* </div> */}
          </div>
        </div>

        <Ornament className="mt-16" label="Scroll to enter the gallery" />
      </div>
    </section>
  );
}

export default Hero;