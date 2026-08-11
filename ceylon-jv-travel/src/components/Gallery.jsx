import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import useReveal from "../hooks/useReveal";
import SectionHeading from "./ui/SectionHeading";
import { GALLERY_IMAGES } from "../data/content";

export default function Gallery() {
  const [ref, visible] = useReveal();
  const [activeIndex, setActiveIndex] = useState(null);

  const openAt = (i) => setActiveIndex(i);
  const close = () => setActiveIndex(null);
  const step = (dir) => setActiveIndex((i) => (i + dir + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);

  return (
    <section className="gallery" ref={ref}>
      <SectionHeading eyebrow="See it for yourself" title="Gallery" subtitle="Beaches, wildlife, mountains, culture, food, and luxury stays" visible={visible} />

      <div className="gallery__grid">
        {GALLERY_IMAGES.map((g, i) => (
          <button
            key={g.id}
            className={`gallery__item ${visible ? "reveal-in" : "reveal-pre"}`}
            style={{ transitionDelay: `${0.06 * i}s` }}
            onClick={() => openAt(i)}
          >
            <img src={g.img} alt={g.category} loading="lazy" />
            <span className="gallery__tag">{g.category}</span>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="gallery-lightbox" onClick={close}>
          <button className="gallery-lightbox__close" onClick={close} aria-label="Close"><X size={20} /></button>
          <button className="gallery-lightbox__nav gallery-lightbox__nav--left" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous"><ChevronLeft size={26} /></button>
          <img src={GALLERY_IMAGES[activeIndex].img} alt="" className="gallery-lightbox__img" onClick={(e) => e.stopPropagation()} />
          <button className="gallery-lightbox__nav gallery-lightbox__nav--right" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next"><ChevronRight size={26} /></button>
        </div>
      )}

      <style>{`
        .gallery { padding: 100px 5% 110px; max-width: 1320px; margin: 0 auto; }
        .gallery__grid { columns: 3 260px; column-gap: 18px; }
        .gallery__item { position: relative; display: block; width: 100%; border: none; padding: 0; margin: 0 0 18px; break-inside: avoid; border-radius: var(--radius-md); overflow: hidden; }
        .gallery__item img { width: 100%; display: block; transition: transform 0.5s ease; }
        .gallery__item:hover img { transform: scale(1.06); }
        .gallery__tag { position: absolute; left: 12px; bottom: 12px; background: rgba(23,26,20,0.7); color: #F5EAD0; font-family: var(--font-utility); font-size: 11px; padding: 5px 12px; border-radius: 999px; opacity: 0; transition: opacity 0.3s ease; }
        .gallery__item:hover .gallery__tag { opacity: 1; }
        .gallery-lightbox { position: fixed; inset: 0; background: rgba(15,17,12,0.92); z-index: 90; display: flex; align-items: center; justify-content: center; animation: fadeUp 0.25s ease; }
        .gallery-lightbox__img { max-width: 82vw; max-height: 82vh; border-radius: var(--radius-sm); box-shadow: var(--shadow-lg); }
        .gallery-lightbox__close { position: absolute; top: 24px; right: 28px; background: rgba(255,255,255,0.1); border: none; color: #fff; width: 40px; height: 40px; border-radius: 50%; }
        .gallery-lightbox__nav { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.1); border: none; color: #fff; width: 46px; height: 46px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        .gallery-lightbox__nav--left { left: 24px; }
        .gallery-lightbox__nav--right { right: 24px; }
        @media (max-width: 700px) { .gallery__grid { columns: 2 160px; } }
      `}</style>
    </section>
  );
}
