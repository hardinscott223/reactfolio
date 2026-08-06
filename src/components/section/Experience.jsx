import { useState } from "react";
import { useReveal } from "../../lib/useReveal";
import { SectionHeading } from "@/components/museum/SectionHeading";
import { Cross } from "@/components/museum/Ornament";

const chapters = [
  {
    numeral: "I",
    years: "2024 — Present",
    company: "SoftGuide Software House",
    role: "Junior Web Developer",
    body: "Led the rebuild of a payments platform serving nine countries. Introduced an event-sourced ledger, cut reconciliation time by four fifths, and taught six engineers to love strict types.",
  },
  {
    numeral: "II",
    years: "2024 — MMXXII",
    company: "Soft Comm Technology",
    role: "Intern Web Developer",
    body: "Designed and shipped a mapping studio used by urban planners. Owned rendering performance from tile pipeline to canvas, holding sixty frames on a decade-old laptop.",
  },
];

export function Experience() {
  const ref = useReveal();
  const [open, setOpen] = useState(0);

  return (
    <section id="experience" className="relative bg-black py-28 md:py-40">
      <div ref={ref} className="mx-auto max-w-[1600px] px-6 md:px-12">
        <SectionHeading
          index="III"
          label="The Chronicle"
          title={
            <>
              Chapters of
              <span className="font-pixelgothic block text-gold/90">service</span>
            </>
          }
          align="right"
        />

        <div className="mt-20 grid gap-10 lg:grid-cols-12">
          <p
            data-reveal="up"
            className="reveal-init label-xs lg:col-span-3 lg:pt-2 text-vellum/45"
          >
            Illuminated<br />annals of<br />employment
          </p>

          <ol className="lg:col-span-9 lg:col-start-4">
            {chapters.map((c, i) => {
              const active = open === i;
              return (
                <li
                  key={c.company}
                  data-reveal="up"
                  className="reveal-init group border-t border-border/70 last:border-b"
                >
                  <button
                    type="button"
                    onMouseEnter={() => setOpen(i)}
                    onFocus={() => setOpen(i)}
                    onClick={() => setOpen(i)}
                    aria-expanded={active}
                    className="grid w-full grid-cols-[auto_1fr] items-start gap-6 py-9 text-left transition-colors duration-500 md:grid-cols-[4rem_1fr_auto] md:gap-10"
                  >
                    <span
                      className={`font-gothic text-4xl leading-none transition-colors duration-500 ${
                        active ? "text-gold" : "text-vellum/30"
                      }`}
                    >
                      {c.numeral}
                    </span>
                    <span className="min-w-0">
                      <span
                        className={`font-gothic block text-3xl leading-tight transition-colors duration-500 md:text-4xl ${
                          active ? "text-vellum" : "text-vellum/60"
                        }`}
                      >
                        {c.company}
                      </span>
                      <span className="label-xs mt-3 block text-gold/70">{c.role}</span>
                      <span
                        className={`grid transition-all duration-700 ease-out ${
                          active
                            ? "mt-5 grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <span className="overflow-hidden">
                          <span className="block max-w-2xl border-l border-gold/30 pl-6 text-vellum/70">
                            {c.body}
                          </span>
                        </span>
                      </span>
                    </span>
                    <span className="label-xs hidden shrink-0 pt-2 text-vellum/40 md:block">
                      {c.years}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mt-16 flex justify-center text-gold/40">
          <Cross />
        </div>
      </div>
    </section>
  );
}

export default Experience