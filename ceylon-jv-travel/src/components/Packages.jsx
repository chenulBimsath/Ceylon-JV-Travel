import { useState } from "react";
import { Clock, MapPin, Check } from "lucide-react";
import useReveal from "../hooks/useReveal";
import SectionHeading from "./ui/SectionHeading";
import { PACKAGES, PACKAGE_FILTERS } from "../data/content";

export default function Packages() {
  const [ref, visible] = useReveal();
  const [filter, setFilter] = useState("All");

  const shown = filter === "All" ? PACKAGES : PACKAGES.filter((p) => p.category === filter);

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
            <div className="pkg-card__media">
              <img src={pkg.img} alt={pkg.name} loading="lazy" />
              <span className="pkg-card__badge">{pkg.category}</span>
            </div>
            <div className="pkg-card__body">
              <h3 className="pkg-card__name">{pkg.name}</h3>
              <p className="pkg-card__meta"><Clock size={14} strokeWidth={1.6} /> {pkg.duration}</p>
              <p className="pkg-card__meta"><MapPin size={14} strokeWidth={1.6} /> {pkg.locations}</p>

              <ul className="pkg-card__included">
                {pkg.included.map((inc) => (
                  <li key={inc}><Check size={13} strokeWidth={2} /> {inc}</li>
                ))}
              </ul>

              <div className="pkg-card__footer">
                <span className="pkg-card__price">{pkg.price}<span> / person</span></span>
                <div className="pkg-card__btns">
                  <button className="btn btn--outline-dark">View Details</button>
                  <button className="btn btn--primary">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

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
        .pkg-card__name { font-family: var(--font-display); font-size: 20px; margin: 0 0 12px; color: var(--moss-900); line-height: 1.3; }
        .pkg-card__meta { display: flex; align-items: center; gap: 8px; font-size: 14px; color: var(--ink-soft); margin: 0 0 6px; }
        .pkg-card__included { list-style: none; padding: 0; margin: 14px 0 20px; display: flex; flex-wrap: wrap; gap: 8px 16px; }
        .pkg-card__included li { display: flex; align-items: center; gap: 6px; font-size: 13.5px; color: var(--moss-700); font-family: var(--font-utility); }
        .pkg-card__footer { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px; padding-top: 16px; border-top: 1px solid var(--cream-deep); }
        .pkg-card__price { font-family: var(--font-display); font-size: 22px; color: var(--moss-900); }
        .pkg-card__price span { font-family: var(--font-utility); font-size: 12px; color: var(--ink-soft); }
        .pkg-card__btns { display: flex; gap: 10px; }
        .pkg-card__btns .btn { padding: 10px 18px; font-size: 13.5px; }
      `}</style>
    </section>
  );
}
