export function Ornament({ className = "", label }) {
  return (
    <div className={`flex items-center gap-6 ${className}`} aria-hidden={!label}>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/40 to-gold/25" />
      <span className="flex items-center gap-3 text-gold/70">
        <Cross />
        {label ? <span className="label-xs text-gold/80">{label}</span> : null}
        <Cross />
      </span>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-gold/40 to-gold/25" />
    </div>
  );
}

export function Cross({ className = "" }) {
  return (
    <svg viewBox="0 0 12 12" className={`h-3 w-3 ${className}`} fill="currentColor">
      <rect x="5" y="0" width="2" height="12" />
      <rect x="0" y="5" width="12" height="2" />
    </svg>
  );
}

/** Corner flourishes for framed elements. */
export function FrameCorners() {
  const base = "absolute h-4 w-4 border-gold/50";
  return (
    <>
      <span className={`${base} left-0 top-0 border-l border-t`} />
      <span className={`${base} right-0 top-0 border-r border-t`} />
      <span className={`${base} bottom-0 left-0 border-b border-l`} />
      <span className={`${base} bottom-0 right-0 border-b border-r`} />
    </>
  );
}

export default Ornament;