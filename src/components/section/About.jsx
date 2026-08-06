import portrait from "@/assets/paints/portrait.jpg";
import { useReveal } from "../../lib/useReveal";
import { SectionHeading } from "@/components/museum/SectionHeading";
import { FrameCorners, Cross } from "@/components/museum/Ornament";

const facts = [
  ["Discipline", "Mid Level Web Developer"],
  ["Residence", "On Job / remote"],
  ["Years at the desk", "II (Two)"],
  ["Preferred hour", "After midnight"],
];

export function About() {
  const ref = useReveal();

  return (
    <section id="about" className="relative bg-black py-28 md:py-40">
      <div ref={ref} className="mx-auto max-w-[1600px] px-6 md:px-12">
        <SectionHeading
          index="II"
          label="The Sitter"
          title={
            <>
              A portrait of
              <span className="font-pixelgothic block pl-[8vw] text-gold/90">
                the maker
              </span>
            </>
          }
        />

        <div className="mt-20 grid gap-16 lg:grid-cols-12 lg:gap-24">
          <figure className="relative lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <div className="frame-thin relative bg-card/40 p-3">
              <div className="relative overflow-hidden">
                <img
                  data-reveal="mask"
                  src={portrait}
                  alt="Painted portrait of the developer, lit by a single candle"
                  width={912}
                  height={1200}
                  loading="lazy"
                  className="vintage reveal-init h-full w-full object-cover"
                />
                <span className="pixel-veil pointer-events-none absolute inset-0 opacity-50" />
              </div>
              <FrameCorners />
            </div>
            <figcaption
              data-reveal="up"
              className="reveal-init mt-5 flex items-center gap-3 text-vellum/45"
            >
              <Cross className="h-2 w-2 text-gold/70" />
              <span className="label-xs">Self-portrait with terminal, oil on linen</span>
            </figcaption>
          </figure>

          <div className="lg:col-span-6 lg:col-start-7">
            <p
              data-reveal="up"
              className="reveal-init font-gothic text-3xl leading-snug text-vellum md:text-4xl"
            >
              I build software the way a monastery builds a manuscript: slowly,
              by hand, with room for gold in the margins.
            </p>
            <div className="rule-gold mt-10 space-y-6 pt-10 text-vellum/70">
              <p data-reveal="up" className="reveal-init">
                For a decade I have worked in the space between design and system
                architecture — shipping interfaces that behave like objects, and
                backends quiet enough to be forgotten. My work favours restraint:
                fewer screens, longer attention, no ornament without meaning.
              </p>
              <p data-reveal="up" className="reveal-init">
                I write TypeScript daily, argue about databases weekly, and keep a
                notebook of typography I will never ship. Clients come for the
                engineering and stay for the craft.
              </p>
            </div>

            <dl
              data-reveal="up"
              className="reveal-init mt-14 grid grid-cols-1 gap-px border border-border/60 bg-border/40 sm:grid-cols-2"
            >
              {facts.map(([k, v]) => (
                <div key={k} className="bg-background px-6 py-6">
                  <dt className="label-xs text-gold/70">{k}</dt>
                  <dd className="font-gothic mt-3 text-xl text-vellum/90">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
