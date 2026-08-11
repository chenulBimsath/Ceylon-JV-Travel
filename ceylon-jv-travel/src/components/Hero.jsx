export default function Hero({ loaded }) {
  return (
    <section className="hero" id="home">
      <div
        className={`hero__bg ${loaded ? "hero__bg--zoom" : ""}`}
        style={{ backgroundImage: "url('/images/background%20image.jpg')" }}
      />
      <div className="hero__scrim" />

      <div className="hero__content">
        <p className={`eyebrow hero__eyebrow ${loaded ? "reveal-in" : "reveal-pre"}`} style={{ transitionDelay: "0.15s" }}>
          Sri Lanka Travel &amp; Tours
        </p>
        <h1 className={`hero__title ${loaded ? "reveal-in" : "reveal-pre"}`} style={{ transitionDelay: "0.3s" }}>
          Discover Sri Lanka
          <br />
          Like Never Before
        </h1>
        <p className={`hero__subtitle ${loaded ? "reveal-in" : "reveal-pre"}`} style={{ transitionDelay: "0.45s" }}>
          Breathtaking landscapes, wildlife, culture, and unforgettable adventures —
          journeys designed for explorers, planned down to the last detail.
        </p>
        <div className={`hero__actions ${loaded ? "reveal-in" : "reveal-pre"}`} style={{ transitionDelay: "0.6s" }}>
          <a href="#packages" className="btn btn--outline-light">Explore Packages</a>
          <a href="#explorer" className="btn btn--outline-light">Plan My Trip</a>
        </div>
      </div>

      <div className={`hero__floater ${loaded ? "reveal-in" : "reveal-pre"}`} style={{ transitionDelay: "0.8s" }}>
        <span className="hero__floater-dot" />
        <div>
          <p className="hero__floater-title">Free itinerary planning</p>
          <p className="hero__floater-sub">Tell us your dates — we'll do the rest</p>
        </div>
        <a href="#explorer" className="hero__floater-cta">Start</a>
      </div>

      <div className="hero__scroll-cue"><span /></div>

      <style>{`
        .hero { position: relative; min-height: 94vh; display: flex; align-items: center; margin-top: -84px; overflow: hidden; }
        .hero__bg { position: absolute; inset: 0; background-size: cover; background-position: center; transform: scale(1.14); transition: transform 5s ease-out; }
        .hero__bg--zoom { transform: scale(1); }
        .hero__scrim { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(20,23,18,0.58) 0%, rgba(20,23,18,0.32) 42%, rgba(20,23,18,0.8) 100%); }
        .hero__content { position: relative; z-index: 2; max-width: 660px; padding: 0 6%; margin-top: 40px; }
        .hero__eyebrow { color: var(--gold-300) !important; }
        .hero__title { font-family: var(--font-display); font-style: italic; font-weight: 600; font-size: clamp(38px, 5.6vw, 64px); line-height: 1.1; color: #FBF9F2; margin: 0 0 22px; }
        .hero__subtitle { font-size: 18px; line-height: 1.65; color: rgba(251,249,242,0.86); max-width: 480px; margin: 0 0 34px; }
        .hero__actions { display: flex; gap: 16px; flex-wrap: wrap; }
        .hero__floater {
          position: absolute; right: 6%; bottom: 90px; z-index: 2;
          display: flex; align-items: center; gap: 12px;
          background: rgba(255,255,255,0.12); backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.25); border-radius: var(--radius-md);
          padding: 14px 18px; animation: floatY 4.5s ease-in-out infinite;
        }
        .hero__floater-dot { width: 9px; height: 9px; border-radius: 50%; background: var(--gold-500); box-shadow: 0 0 0 5px rgba(201,162,75,0.25); flex-shrink: 0; }
        .hero__floater-title { font-size: 14px; color: #fff; margin: 0; font-family: var(--font-utility); font-weight: 500; }
        .hero__floater-sub { font-size: 12.5px; color: rgba(255,255,255,0.7); margin: 2px 0 0; }
        .hero__floater-cta { font-family: var(--font-utility); font-size: 13px; color: var(--ink); background: #fff; padding: 8px 14px; border-radius: 999px; text-decoration: none; flex-shrink: 0; }
        .hero__scroll-cue { position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%); width: 22px; height: 36px; border: 1px solid rgba(251,249,242,0.6); border-radius: 12px; z-index: 2; }
        .hero__scroll-cue span { display: block; width: 4px; height: 4px; border-radius: 50%; background: #FBF9F2; margin: 6px auto 0; animation: cueDrop 1.8s ease-in-out infinite; }
        @keyframes cueDrop { 0% { transform: translateY(0); opacity: 1; } 70% { transform: translateY(14px); opacity: 0; } 100% { transform: translateY(0); opacity: 0; } }
        @media (max-width: 640px) {
          .hero { text-align: center; align-items: flex-start; padding-top: 130px; }
          .hero__content { margin: 0 auto; }
          .hero__actions { justify-content: center; }
          .hero__floater { left: 6%; right: 6%; bottom: 20px; }
        }
      `}</style>
    </section>
  );
}
