export default function SectionHeading({ eyebrow, title, subtitle, align = "center", visible }) {
  return (
    <div
      className={`section-heading section-heading--${align} ${visible ? "reveal-in" : "reveal-pre"}`}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      <style>{`
        .section-heading--center { text-align: center; margin: 0 auto 56px; }
        .section-heading--center .section-subtitle { margin-left: auto; margin-right: auto; }
        .section-heading--left { text-align: left; margin: 0 0 48px; }
      `}</style>
    </div>
  );
}
