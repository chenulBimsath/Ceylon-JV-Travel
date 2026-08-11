import { useCallback, useState } from "react";
import { ChevronLeft, ChevronRight, X, Calendar, MapPin, Sparkles, ArrowRight } from "lucide-react";
import useReveal from "../hooks/useReveal";
import SectionHeading from "./ui/SectionHeading";
import { DESTINATIONS } from "../data/content";

function Card({ item, role, onClick }) {
  return (
    <div className={`dcard dcard--${role}`} onClick={() => onClick(item)}>
      <img src={item.img} alt={item.name} className="dcard__img" loading="lazy" />
      <div className="dcard__scrim" />
      <div className="dcard__body">
        <div>
          <p className="dcard__name">{item.name}</p>
          <p className="dcard__tag">{item.tag}</p>
        </div>
        <button className="btn btn--ghost" onClick={(e) => { e.stopPropagation(); onClick(item); }}>Explore</button>
      </div>
    </div>
  );
}

export default function Destinations() {
  const [ref, visible] = useReveal();
  const [start, setStart] = useState(0);
  const [activeModalDest, setActiveModalDest] = useState(null);
  const len = DESTINATIONS.length;
  const shift = useCallback((dir) => setStart((s) => (s + dir + len) % len), [len]);

  const left = DESTINATIONS[start];
  const center = DESTINATIONS[(start + 1) % len];
  const right = DESTINATIONS[(start + 2) % len];

  const handlePlanForDest = (dest) => {
    setActiveModalDest(null);
    const bookingSec = document.getElementById("booking");
    if (bookingSec) {
      bookingSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="destinations" ref={ref} id="destinations">
      <SectionHeading eyebrow="Handpicked spots" title="Destinations" subtitle="Explore Sri Lanka's top destinations" visible={visible} />

      <div className={`destinations__row ${visible ? "reveal-in" : "reveal-pre"}`} style={{ transitionDelay: "0.15s" }}>
        <button className="dest-arrow" aria-label="Previous" onClick={() => shift(-1)}><ChevronLeft size={22} strokeWidth={1.4} /></button>
        <div className="dest-track" key={start}>
          <Card item={left} role="side" onClick={setActiveModalDest} />
          <Card item={center} role="center" onClick={setActiveModalDest} />
          <Card item={right} role="side" onClick={setActiveModalDest} />
        </div>
        <button className="dest-arrow" aria-label="Next" onClick={() => shift(1)}><ChevronRight size={22} strokeWidth={1.4} /></button>
      </div>

      {activeModalDest && (
        <div className="modal-overlay" onClick={() => setActiveModalDest(null)}>
          <div className="dest-modal" onClick={(e) => e.stopPropagation()}>
            <button className="dest-modal__close" onClick={() => setActiveModalDest(null)} aria-label="Close">
              <X size={20} />
            </button>
            <div className="dest-modal__img-box">
              <img src={activeModalDest.img} alt={activeModalDest.name} />
              <div className="dest-modal__scrim" />
              <div className="dest-modal__header-text">
                <p className="eyebrow" style={{ color: "#E4CD8E", margin: "0 0 6px" }}>Featured Destination</p>
                <h2>{activeModalDest.name}</h2>
                <p className="tag"><MapPin size={14} /> {activeModalDest.tag}</p>
              </div>
            </div>

            <div className="dest-modal__body">
              <p className="dest-modal__desc">{activeModalDest.description || "A breathtaking location in Sri Lanka offering unique scenery, rich heritage, and unforgettable travel memories."}</p>
              
              <div className="dest-modal__info-grid">
                <div>
                  <span className="label"><Calendar size={14} /> Best Season:</span>
                  <span className="val">{activeModalDest.bestTime || "Year-round"}</span>
                </div>
              </div>

              {activeModalDest.highlights && (
                <div className="dest-modal__highlights">
                  <h4><Sparkles size={16} /> Highlights</h4>
                  <div className="chips">
                    {activeModalDest.highlights.map(h => (
                      <span key={h} className="chip">{h}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="dest-modal__footer">
                <button className="btn btn--primary" style={{ width: "100%", justifyContent: "center" }} onClick={() => handlePlanForDest(activeModalDest)}>
                  Plan a Trip to {activeModalDest.name} <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .destinations { padding: 110px 5% 100px; max-width: 1320px; margin: 0 auto; }
        .destinations__row { display: flex; align-items: center; gap: 22px; }
        .dest-arrow { flex-shrink: 0; width: 52px; height: 52px; border-radius: 50%; border: 1px solid var(--moss-100); background: #fff; display: flex; align-items: center; justify-content: center; color: var(--ink); transition: background 0.25s ease, color 0.25s ease, transform 0.2s ease; cursor: pointer; }
        .dest-arrow:hover { background: var(--moss-900); color: var(--gold-100); transform: scale(1.05); }
        .dest-track { flex: 1; display: grid; grid-template-columns: 1fr 1.15fr 1fr; gap: 20px; align-items: center; animation: fadeUp 0.55s ease; }
        .dcard { position: relative; border-radius: var(--radius-lg); overflow: hidden; background: var(--moss-100); transition: transform 0.4s ease; cursor: pointer; }
        .dcard--side { height: 400px; }
        .dcard--center { height: 480px; box-shadow: var(--shadow-lg); }
        .dcard:hover { transform: translateY(-6px); }
        .dcard__img { width: 100%; height: 100%; object-fit: cover; }
        .dcard__scrim { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(20,23,18,0) 45%, rgba(20,23,18,0.84) 100%); }
        .dcard__body { position: absolute; left: 0; right: 0; bottom: 0; display: flex; align-items: flex-end; justify-content: space-between; gap: 10px; padding: 18px; }
        .dcard__name { font-family: var(--font-display); font-size: 17px; color: #fff; margin: 0 0 4px; }
        .dcard__tag { font-size: 12.5px; color: rgba(255,255,255,0.75); margin: 0; max-width: 170px; }

        /* Modal styling */
        .dest-modal {
          background: #fff; width: 620px; max-width: 92vw; border-radius: var(--radius-lg);
          overflow: hidden; position: relative; box-shadow: var(--shadow-lg); animation: slideUpModal 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .dest-modal__close {
          position: absolute; top: 16px; right: 16px; z-index: 10;
          background: rgba(0,0,0,0.5); border: none; color: #fff;
          width: 36px; height: 36px; border-radius: 50%; display: flex;
          align-items: center; justify-content: center; cursor: pointer;
        }
        .dest-modal__img-box { height: 260px; position: relative; }
        .dest-modal__img-box img { width: 100%; height: 100%; object-fit: cover; }
        .dest-modal__scrim { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%); }
        .dest-modal__header-text { position: absolute; bottom: 20px; left: 24px; right: 24px; color: #fff; }
        .dest-modal__header-text h2 { font-family: var(--font-display); font-size: 26px; margin: 0 0 4px; color: #FBF9F2; }
        .dest-modal__header-text .tag { display: flex; align-items: center; gap: 6px; font-size: 13.5px; color: var(--gold-100); margin: 0; }
        .dest-modal__body { padding: 26px; }
        .dest-modal__desc { font-size: 15.5px; line-height: 1.65; color: var(--ink-soft); margin: 0 0 20px; }
        .dest-modal__info-grid { display: flex; gap: 20px; background: var(--cream); padding: 14px 18px; border-radius: var(--radius-sm); margin-bottom: 20px; }
        .dest-modal__info-grid .label { font-family: var(--font-utility); font-size: 13px; color: var(--ink-soft); display: flex; align-items: center; gap: 6px; }
        .dest-modal__info-grid .val { font-family: var(--font-utility); font-weight: 600; font-size: 13.5px; color: var(--moss-900); margin-left: 6px; }
        .dest-modal__highlights h4 { font-family: var(--font-display); font-size: 17px; color: var(--moss-900); display: flex; align-items: center; gap: 6px; margin: 0 0 10px; }
        .dest-modal__highlights .chips { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px; }
        .dest-modal__highlights .chip { font-family: var(--font-utility); font-size: 12.5px; background: var(--moss-100); color: var(--moss-900); padding: 6px 14px; border-radius: 999px; }
        
        @media (max-width: 780px) {
          .dest-track { grid-template-columns: 1fr; }
          .dcard--side { display: none; }
          .dcard--center { height: 420px; }
        }
      `}</style>
    </section>
  );
}

