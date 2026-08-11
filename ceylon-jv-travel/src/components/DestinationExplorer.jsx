import { useState } from "react";
import { Calendar, Sparkles, Package as PackageIcon, X } from "lucide-react";
import useReveal from "../hooks/useReveal";
import SectionHeading from "./ui/SectionHeading";
import { EXPLORER_DESTINATIONS } from "../data/content";

export default function DestinationExplorer() {
  const [ref, visible] = useReveal();
  const [openId, setOpenId] = useState(null);
  const active = EXPLORER_DESTINATIONS.find((d) => d.id === openId);

  return (
    <section className="explorer" ref={ref} id="explorer">
      <SectionHeading eyebrow="Where to next" title="Destination Explorer" subtitle="Click a place to see photos, activities, and the best time to visit" visible={visible} />

      <div className="explorer__grid">
        {EXPLORER_DESTINATIONS.map((d, i) => (
          <button
            key={d.id}
            className={`explorer-card ${visible ? "reveal-in" : "reveal-pre"}`}
            style={{ transitionDelay: `${0.1 + i * 0.07}s`, backgroundImage: `url(${d.img})` }}
            onClick={() => setOpenId(d.id)}
          >
            <span className="explorer-card__scrim" />
            <span className="explorer-card__name">{d.name}</span>
          </button>
        ))}
      </div>

      {active && (
        <div className="explorer-modal" onClick={() => setOpenId(null)}>
          <div className="explorer-modal__panel" onClick={(e) => e.stopPropagation()}>
            <button className="explorer-modal__close" onClick={() => setOpenId(null)} aria-label="Close"><X size={18} /></button>
            <img src={active.img} alt={active.name} className="explorer-modal__img" />
            <div className="explorer-modal__body">
              <h3>{active.name}</h3>
              <p className="explorer-modal__row"><Calendar size={15} strokeWidth={1.6} /> Best time to visit: {active.bestTime}</p>
              <p className="explorer-modal__row"><PackageIcon size={15} strokeWidth={1.6} /> {active.packages} packages available</p>
              <p className="explorer-modal__label"><Sparkles size={15} strokeWidth={1.6} /> Activities</p>
              <ul>
                {active.activities.map((a) => <li key={a}>{a}</li>)}
              </ul>
              <a href="#packages" className="btn btn--primary" onClick={() => setOpenId(null)}>View related packages</a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .explorer { padding: 100px 5% 110px; max-width: 1320px; margin: 0 auto; }
        .explorer__grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 22px; }
        .explorer-card { position: relative; height: 260px; border-radius: var(--radius-md); overflow: hidden; border: none; background-size: cover; background-position: center; padding: 0; transition: transform 0.4s ease; }
        .explorer-card:hover { transform: translateY(-6px) scale(1.01); }
        .explorer-card__scrim { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(20,23,18,0.05), rgba(20,23,18,0.78)); }
        .explorer-card__name { position: absolute; left: 18px; bottom: 16px; font-family: var(--font-display); font-size: 21px; color: #fff; }
        .explorer-modal { position: fixed; inset: 0; background: rgba(20,23,18,0.72); backdrop-filter: blur(4px); z-index: 80; display: flex; align-items: center; justify-content: center; padding: 24px; animation: fadeUp 0.3s ease; }
        .explorer-modal__panel { background: #fff; max-width: 520px; width: 100%; border-radius: var(--radius-lg); overflow: hidden; max-height: 88vh; overflow-y: auto; position: relative; box-shadow: var(--shadow-lg); animation: slideUpModal 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .explorer-modal__close { position: absolute; top: 14px; right: 14px; background: rgba(255,255,255,0.9); border: none; border-radius: 50%; width: 34px; height: 34px; display: flex; align-items: center; justify-content: center; z-index: 2; }
        .explorer-modal__img { width: 100%; height: 220px; object-fit: cover; }
        .explorer-modal__body { padding: 24px 26px 28px; }
        .explorer-modal__body h3 { font-family: var(--font-display); font-size: 26px; margin: 0 0 14px; color: var(--moss-900); }
        .explorer-modal__row { display: flex; align-items: center; gap: 8px; font-size: 14.5px; color: var(--ink-soft); margin: 0 0 8px; }
        .explorer-modal__label { display: flex; align-items: center; gap: 8px; font-family: var(--font-utility); font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: var(--gold-600); margin: 18px 0 8px; }
        .explorer-modal__body ul { margin: 0 0 22px; padding-left: 20px; color: var(--ink-soft); }
        .explorer-modal__body li { margin-bottom: 4px; }
      `}</style>
    </section>
  );
}
