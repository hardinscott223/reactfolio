import { useEffect, useState } from "react";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Tech", href: "#tech" },
  { label: "Projects", href: "#works" },
  { label: "Testimonials", href: "#feedbacks" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "border-b border-gold/20 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-12"
      >
        <a href="#home" className="font-pixelgothic text-2xl leading-none text-vellum">
          H.S.
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="label-xs relative text-vellum/65 transition-colors duration-300 hover:text-gold"
              >
                {l.label}
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-gold transition-all duration-500 hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="label-xs hidden text-gold/85 transition-colors hover:text-gold lg:block"
        >
          Send a letter
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="label-xs text-vellum/80 lg:hidden"
        >
          {open ? "Close" : "Index"}
        </button>
      </nav>

      {open ? (
        <ul className="border-t border-gold/15 bg-background/95 px-6 pb-8 pt-4 backdrop-blur-xl lg:hidden">
          {NAV_LINKS.map((l) => (
            <li key={l.href} className="border-b border-border/40 last:border-0">
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-gothic block py-3 text-2xl text-vellum/85"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}

export default Navbar;