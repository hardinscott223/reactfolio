
export function SectionHeading({
  index,
  label,
  title,
  align = "left",
  className = "",
}) {
  return (
    <header
      className={`flex flex-col gap-4 ${align === "right" ? "items-end text-right" : ""} ${className}`}
    >
      <div data-reveal="up" className="reveal-init flex items-center gap-4 text-gold/75">
        <span className="label-xs">{index}</span>
        <span className="h-px w-12 bg-gold/40" />
        <span className="label-xs text-vellum/60">{label}</span>
      </div>
      <h2
        data-reveal="up"
        className="reveal-init text-5xl leading-[0.92] text-vellum sm:text-6xl md:text-7xl"
      >
        {title}
      </h2>
    </header>
  );
}