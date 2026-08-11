import { useCallback, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useReveal from "../hooks/useReveal";
import SectionHeading from "./ui/SectionHeading";
import { DESTINATIONS } from "../data/content";

function Card({ item, role }) {
  return (
    <div className={`dcard dcard--${role}`}>
      <img src={item.img} alt={item.name} className="dcard__img" loading="lazy" />
      <div className="dcard__scrim" />
      <div className="dcard__body">
        <div>
          <p className="dcard__name">{item.name}</p>
          <p className="dcard__tag">{item.tag}</p>
        </div>
        <button className="btn btn--ghost">Explore</button>
      </div>
    </div>
  );
}

export default function Destinations() {
  const [ref, visible] = useReveal();
  const [start, setStart] = useState(0);
  const len = DESTINATIONS.length;
  const shift = useCallback((dir) => setStart((s) => (s + dir + len) % len), [len]);

  const left = DESTINATIONS[start];
  const center = DESTINATIONS[(start + 1) % len];
  const right = DESTINATIONS[(start + 2) % len];

  return (
    <section className="destinations" ref={ref} id="destinations">
      <SectionHeading eyebrow="Handpicked spots" title="Destinations" subtitle="Explore Sri Lanka's top destinations" visible={visible} />

      <div className={`destinations__row ${visible ? "reveal-in" : "reveal-pre"}`} style={{ transitionDelay: "0.15s" }}>
        <button className="dest-arrow" aria-label="Previous" onClick={() => shift(-1)}><ChevronLeft size={22} strokeWidth={1.4} /></button>
        <div className="dest-track" key={start}>
          <Card item={left} role="side" />
          <Card item={center} role="center" />
          <Card item={right} role="side" />
        </div>
        <button className="dest-arrow" aria-label="Next" onClick={() => shift(1)}><ChevronRight size={22} strokeWidth={1.4} /></button>
      </div>

      <style>{`
        .destinations { padding: 110px 5% 100px; max-width: 1320px; margin: 0 auto; }
        .destinations__row { display: flex; align-items: center; gap: 22px; }
        .dest-arrow { flex-shrink: 0; width: 52px; height: 52px; border-radius: 50%; border: 1px solid var(--moss-100); background: #fff; display: flex; align-items: center; justify-content: center; color: var(--ink); transition: background 0.25s ease, color 0.25s ease, transform 0.2s ease; }
        .dest-arrow:hover { background: var(--moss-900); color: var(--gold-100); transform: scale(1.05); }
        .dest-track { flex: 1; display: grid; grid-template-columns: 1fr 1.15fr 1fr; gap: 20px; align-items: center; animation: fadeUp 0.55s ease; }
        .dcard { position: relative; border-radius: var(--radius-lg); overflow: hidden; background: var(--moss-100); transition: transform 0.4s ease; }
        .dcard--side { height: 400px; }
        .dcard--center { height: 480px; box-shadow: var(--shadow-lg); }
        .dcard:hover { transform: translateY(-6px); }
        .dcard__img { width: 100%; height: 100%; object-fit: cover; }
        .dcard__scrim { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(20,23,18,0) 45%, rgba(20,23,18,0.84) 100%); }
        .dcard__body { position: absolute; left: 0; right: 0; bottom: 0; display: flex; align-items: flex-end; justify-content: space-between; gap: 10px; padding: 18px; }
        .dcard__name { font-family: var(--font-display); font-size: 17px; color: #fff; margin: 0 0 4px; }
        .dcard__tag { font-size: 12.5px; color: rgba(255,255,255,0.75); margin: 0; max-width: 170px; }
        @media (max-width: 780px) {
          .dest-track { grid-template-columns: 1fr; }
          .dcard--side { display: none; }
          .dcard--center { height: 420px; }
        }
      `}</style>
    </section>
  );
}
