import { useState } from "react";
import { Clock, MapPin, Check, X, Calendar, ArrowRight, ShieldCheck } from "lucide-react";
import useReveal from "../hooks/useReveal";
import SectionHeading from "./ui/SectionHeading";
import { PACKAGES, PACKAGE_FILTERS } from "../data/content";

export default function Packages() {
  const [ref, visible] = useReveal();
  const [filter, setFilter] = useState("All");
  const [activeModalPkg, setActiveModalPkg] = useState(null);

  const shown = filter === "All" ? PACKAGES : PACKAGES.filter((p) => p.category === filter);

  const handleBookClick = (pkg) => {
    setActiveModalPkg(null);
    const bookingSec = document.getElementById("booking");
    if (bookingSec) {
      bookingSec.scrollIntoView({ behavior: "smooth" });
      const selectEl = bookingSec.querySelector("select");
      if (selectEl) {
        selectEl.value = pkg.id;
      }
    }
  };

  return (
    <section className="packages" ref={ref} id="packages">
      <SectionHeading eyebrow="Ready-made journeys" title="Tour Packages" subtitle="Complete itineraries, priced and ready to book" visible={visible} />

      <div className={`packages__filters ${visible ? "reveal-in" : "reveal-pre"}`} style={{ transitionDelay: "0.1s" }}>
        {PACKAGE_FILTERS.map((f) => (
          <button key={f} className={`pill-tag ${filter === f ? "pill-tag--active" : ""}`} onClick={() => setFilter(f)}>
            {f}
          </button>
        ))}
      </div>

      <div className="packages__grid">
        {shown.map((pkg, i) => (
          <div
            key={pkg.id}
            className={`pkg-card ${visible ? "reveal-in" : "reveal-pre"}`}
            style={{ transitionDelay: `${0.15 + i * 0.08}s` }}
          >
            <div className="pkg-card__media" onClick={() => setActiveModalPkg(pkg)} style={{ cursor: "pointer" }}>
              <img src={pkg.img} alt={pkg.name} loading="lazy" />
              <span className="pkg-card__badge">{pkg.category}</span>
            </div>
            <div className="pkg-card__body">
              <h3 className="pkg-card__name" onClick={() => setActiveModalPkg(pkg)} style={{ cursor: "pointer" }}>{pkg.name}</h3>
              <p className="pkg-card__meta"><Clock size={14} strokeWidth={1.6} /> {pkg.duration}</p>
              <p className="pkg-card__meta"><MapPin size={14} strokeWidth={1.6} /> {pkg.locations}</p>

              <ul className="pkg-card__included">
                {pkg.included.slice(0, 3).map((inc) => (
                  <li key={inc}><Check size={13} strokeWidth={2} /> {inc}</li>
                ))}
              </ul>

              <div className="pkg-card__footer">
                <span className="pkg-card__price">{pkg.price}<span> / person</span></span>
                <div className="pkg-card__btns">
                  <button className="btn btn--outline-dark" onClick={() => setActiveModalPkg(pkg)}>Details</button>
                  <button className="btn btn--primary" onClick={() => handleBookClick(pkg)}>Book</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeModalPkg && (
        <div className="modal-overlay" onClick={() => setActiveModalPkg(null)}>
          <div className="pkg-modal" onClick={(e) => e.stopPropagation()}>
            <button className="pkg-modal__close" onClick={() => setActiveModalPkg(null)} aria-label="Close modal">
              <X size={20} />
            </button>
            
            <div className="pkg-modal__hero" style={{ backgroundImage: `url(${activeModalPkg.img})` }}>
              <div className="pkg-modal__scrim" />
              <div className="pkg-modal__hero-text">
                <span className="pill-tag pill-tag--active">{activeModalPkg.category}</span>
                <h2>{activeModalPkg.name}</h2>
                <p><Clock size={15} /> {activeModalPkg.duration} &bull; <MapPin size={15} /> {activeModalPkg.locations}</p>
              </div>
            </div>

            <div className="pkg-modal__body">
              <div className="pkg-modal__main">
                <h3><Calendar size={18} /> Day-by-Day Itinerary</h3>
                <div className="pkg-modal__timeline">
                  {activeModalPkg.itinerary ? activeModalPkg.itinerary.map((item) => (
                    <div key={item.day} className="pkg-modal__day">
                      <div className="pkg-modal__day-num">Day {item.day}</div>
                      <div className="pkg-modal__day-content">
                        <h4>{item.title}</h4>
                        <p>{item.detail}</p>
                      </div>
                    </div>
                  )) : (
                    <p>Detailed day-by-day schedule available on inquiry.</p>
                  )}
                </div>
              </div>

              <div className="pkg-modal__sidebar">
                <div className="pkg-modal__box">
                  <div className="pkg-modal__price-tag">
                    <span className="price">{activeModalPkg.price}</span>
                    <span className="sub">per person</span>
                  </div>

                  <h4>Includes:</h4>
                  <ul className="pkg-modal__check-list">
                    {activeModalPkg.included.map((inc) => (
                      <li key={inc}><Check size={14} color="#33452A" /> {inc}</li>
                    ))}
                  </ul>

                  {activeModalPkg.excluded && (
                    <>
                      <h4 style={{ marginTop: "16px" }}>Excludes:</h4>
                      <ul className="pkg-modal__cross-list">
                        {activeModalPkg.excluded.map((exc) => (
                          <li key={exc}>&bull; {exc}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  <button className="btn btn--primary" style={{ width: "100%", justifyContent: "center", marginTop: "24px" }} onClick={() => handleBookClick(activeModalPkg)}>
                    Book This Tour <ArrowRight size={16} />
                  </button>
                  <p className="pkg-modal__note"><ShieldCheck size={14} /> 100% Free Inquiry &bull; Flexible Cancellation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .packages { padding: 100px 5% 110px; max-width: 1320px; margin: 0 auto; }
        .packages__filters { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin-bottom: 48px; }
        .packages__grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 28px; }
        .pkg-card { background: #fff; border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-sm); transition: box-shadow 0.35s ease, transform 0.35s ease; }
        .pkg-card:hover { box-shadow: var(--shadow-md); transform: translateY(-6px); }
        .pkg-card__media { position: relative; height: 210px; overflow: hidden; }
        .pkg-card__media img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
        .pkg-card:hover .pkg-card__media img { transform: scale(1.08); }
        .pkg-card__badge { position: absolute; top: 14px; left: 14px; background: rgba(23,26,20,0.75); color: var(--gold-200,#F5EAD0); font-family: var(--font-utility); font-size: 11.5px; letter-spacing: 0.5px; padding: 6px 12px; border-radius: 999px; }
        .pkg-card__body { padding: 22px 22px 24px; }
        .pkg-card__name { font-family: var(--font-display); font-size: 20px; margin: 0 0 12px; color: var(--moss-900); line-height: 1.3; transition: color 0.2s ease; }
        .pkg-card__name:hover { color: var(--gold-600); }
        .pkg-card__meta { display: flex; align-items: center; gap: 8px; font-size: 14px; color: var(--ink-soft); margin: 0 0 6px; }
        .pkg-card__included { list-style: none; padding: 0; margin: 14px 0 20px; display: flex; flex-wrap: wrap; gap: 8px 16px; }
        .pkg-card__included li { display: flex; align-items: center; gap: 6px; font-size: 13.5px; color: var(--moss-700); font-family: var(--font-utility); }
        .pkg-card__footer { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px; padding-top: 16px; border-top: 1px solid var(--cream-deep); }
        .pkg-card__price { font-family: var(--font-display); font-size: 22px; color: var(--moss-900); }
        .pkg-card__price span { font-family: var(--font-utility); font-size: 12px; color: var(--ink-soft); }
        .pkg-card__btns { display: flex; gap: 8px; }
        .pkg-card__btns .btn { padding: 8px 14px; font-size: 13px; }

        /* Package Details Modal */
        .pkg-modal {
          background: #fff; width: 880px; max-width: 95vw; max-height: 90vh;
          border-radius: var(--radius-lg); overflow-y: auto; position: relative;
          box-shadow: var(--shadow-lg); animation: fadeUp 0.3s ease;
        }
        .pkg-modal__close {
          position: absolute; top: 16px; right: 16px; z-index: 10;
          background: rgba(0,0,0,0.5); border: none; color: #fff;
          width: 36px; height: 36px; border-radius: 50%; display: flex;
          align-items: center; justify-content: center; cursor: pointer;
        }
        .pkg-modal__hero {
          height: 240px; background-size: cover; background-position: center;
          position: relative; padding: 30px; display: flex; align-items: flex-end;
        }
        .pkg-modal__scrim { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.85) 100%); }
        .pkg-modal__hero-text { position: relative; z-index: 2; color: #fff; }
        .pkg-modal__hero-text h2 { font-family: var(--font-display); font-size: 28px; margin: 10px 0 6px; color: #FBF9F2; }
        .pkg-modal__hero-text p { display: flex; align-items: center; gap: 8px; font-size: 14px; opacity: 0.9; color: var(--gold-100); }
        .pkg-modal__body { display: grid; grid-template-columns: 1fr 300px; gap: 30px; padding: 30px; }
        .pkg-modal__main h3 { font-family: var(--font-display); font-size: 20px; color: var(--moss-900); display: flex; align-items: center; gap: 8px; margin-top: 0; }
        .pkg-modal__timeline { display: flex; flex-direction: column; gap: 20px; margin-top: 20px; border-left: 2px solid var(--moss-100); padding-left: 20px; }
        .pkg-modal__day { position: relative; }
        .pkg-modal__day::before { content: ""; position: absolute; left: -26px; top: 4px; width: 10px; height: 10px; border-radius: 50%; background: var(--moss-900); }
        .pkg-modal__day-num { font-family: var(--font-utility); font-size: 12px; font-weight: 600; text-transform: uppercase; color: var(--gold-600); }
        .pkg-modal__day-content h4 { font-family: var(--font-display); font-size: 17px; margin: 4px 0 6px; color: var(--moss-900); }
        .pkg-modal__day-content p { font-size: 14.5px; line-height: 1.6; color: var(--ink-soft); margin: 0; }
        .pkg-modal__box { background: var(--cream); border-radius: var(--radius-md); padding: 22px; border: 1px solid var(--moss-100); }
        .pkg-modal__price-tag { margin-bottom: 20px; text-align: center; padding-bottom: 16px; border-bottom: 1px solid var(--moss-100); }
        .pkg-modal__price-tag .price { font-family: var(--font-display); font-size: 34px; font-weight: 700; color: var(--moss-900); display: block; }
        .pkg-modal__price-tag .sub { font-size: 13px; color: var(--ink-soft); }
        .pkg-modal__sidebar h4 { font-family: var(--font-utility); font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; color: var(--moss-900); margin: 0 0 10px; }
        .pkg-modal__check-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; font-size: 13.5px; }
        .pkg-modal__check-list li { display: flex; align-items: center; gap: 8px; color: var(--moss-700); }
        .pkg-modal__cross-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 6px; font-size: 13px; color: var(--ink-soft); }
        .pkg-modal__note { font-size: 11.5px; color: var(--ink-soft); display: flex; align-items: center; justify-content: center; gap: 6px; margin: 12px 0 0; text-align: center; }
        
        @media (max-width: 768px) {
          .pkg-modal__body { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

