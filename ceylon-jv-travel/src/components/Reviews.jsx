import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import useReveal from "../hooks/useReveal";
import SectionHeading from "./ui/SectionHeading";
import { REVIEWS } from "../data/content";

export default function Reviews() {
  const [ref, visible] = useReveal();
  const [index, setIndex] = useState(0);
  const r = REVIEWS[index];
  const move = (dir) => setIndex((i) => (i + dir + REVIEWS.length) % REVIEWS.length);

  return (
    <section className="reviews" ref={ref}>
      <SectionHeading eyebrow="Traveller stories" title="Customer Reviews" subtitle="What guests say after they've come home" visible={visible} />

      <div className={`reviews__card ${visible ? "reveal-in" : "reveal-pre"}`} style={{ transitionDelay: "0.15s" }} key={index}>
        <Quote size={30} strokeWidth={1.4} className="reviews__quote" />
        <div className="reviews__stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={16} fill={i < r.rating ? "#C9A24B" : "none"} color="#C9A24B" strokeWidth={1.4} />
          ))}
        </div>
        <p className="reviews__text">{r.text}</p>
        <div className="reviews__person">
          <img src={r.avatar} alt={r.name} />
          <div>
            <p className="reviews__name">{r.name}</p>
            <p className="reviews__meta">{r.country} · {r.trip}</p>
          </div>
        </div>
      </div>

      <div className="reviews__nav">
        <button className="dest-arrow" onClick={() => move(-1)} aria-label="Previous review"><ChevronLeft size={20} strokeWidth={1.4} /></button>
        <div className="reviews__dots">
          {REVIEWS.map((_, i) => (
            <span key={i} className={`reviews__dot ${i === index ? "reviews__dot--active" : ""}`} onClick={() => setIndex(i)} />
          ))}
        </div>
        <button className="dest-arrow" onClick={() => move(1)} aria-label="Next review"><ChevronRight size={20} strokeWidth={1.4} /></button>
      </div>

      <style>{`
        .reviews { padding: 100px 5% 110px; max-width: 760px; margin: 0 auto; }
        .reviews__card { background: #fff; border-radius: var(--radius-lg); padding: 44px 40px; text-align: center; box-shadow: var(--shadow-md); animation: fadeUp 0.5s ease; }
        .reviews__quote { color: var(--gold-500); margin-bottom: 10px; }
        .reviews__stars { display: flex; justify-content: center; gap: 3px; margin-bottom: 18px; }
        .reviews__text { font-family: var(--font-display); font-style: italic; font-size: 21px; line-height: 1.5; color: var(--ink); margin: 0 0 26px; }
        .reviews__person { display: flex; align-items: center; justify-content: center; gap: 12px; }
        .reviews__person img { width: 46px; height: 46px; border-radius: 50%; object-fit: cover; }
        .reviews__name { font-family: var(--font-utility); font-weight: 500; font-size: 14.5px; margin: 0; color: var(--moss-900); }
        .reviews__meta { font-size: 13px; color: var(--ink-soft); margin: 2px 0 0; }
        .reviews__nav { display: flex; align-items: center; justify-content: center; gap: 22px; margin-top: 30px; }
        .reviews__dots { display: flex; gap: 8px; }
        .reviews__dot { width: 8px; height: 8px; border-radius: 50%; background: var(--moss-100); cursor: pointer; transition: background 0.25s ease, transform 0.25s ease; }
        .reviews__dot--active { background: var(--moss-700); transform: scale(1.3); }
      `}</style>
    </section>
  );
}
