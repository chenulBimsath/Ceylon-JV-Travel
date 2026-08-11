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
        .hero { position: relative; width: 100%; height: 100vh; min-height: 680px; display: flex; align-items: center; margin: 0; padding: 0; overflow: hidden; }
        .hero__bg { position: absolute; inset: 0; background-size: cover; background-position: center; transform: scale(1.14); transition: transform 5s ease-out; }
        .hero__bg--zoom { transform: scale(1); }
        .hero__scrim { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(20,23,18,0.65) 0%, rgba(20,23,18,0.35) 45%, rgba(20,23,18,0.85) 100%); }
        .hero__content { position: relative; z-index: 2; max-width: 680px; padding: 0 6%; margin-top: 40px; }
        .hero__eyebrow { color: var(--gold-300) !important; font-size: 13px; letter-spacing: 3.5px; }
        .hero__title { font-family: var(--font-display); font-style: italic; font-weight: 600; font-size: clamp(42px, 6vw, 68px); line-height: 1.08; color: #FBF9F2; margin: 0 0 22px; text-shadow: 0 4px 20px rgba(0,0,0,0.3); }
        .hero__subtitle { font-size: 18.5px; line-height: 1.65; color: rgba(251,249,242,0.9); max-width: 500px; margin: 0 0 36px; }
        .hero__actions { display: flex; gap: 16px; flex-wrap: wrap; }
        .hero__floater {
          position: absolute; right: 6%; bottom: 80px; z-index: 2;
          display: flex; align-items: center; gap: 14px;
          background: rgba(20,23,18,0.55); backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
          border: 1px solid rgba(255,255,255,0.25); border-radius: var(--radius-md);
          padding: 14px 20px; animation: floatY 4.5s ease-in-out infinite; box-shadow: 0 10px 30px rgba(0,0,0,0.25);
        }
        .hero__floater-dot { width: 10px; height: 10px; border-radius: 50%; background: var(--gold-500); box-shadow: 0 0 0 5px rgba(201,162,75,0.25); flex-shrink: 0; }
        .hero__floater-title { font-size: 14.5px; color: #fff; margin: 0; font-family: var(--font-utility); font-weight: 500; }
        .hero__floater-sub { font-size: 12.5px; color: rgba(255,255,255,0.75); margin: 2px 0 0; }
        .hero__floater-cta { font-family: var(--font-utility); font-size: 13px; color: var(--ink); background: var(--gold-100); padding: 8px 16px; border-radius: 999px; text-decoration: none; flex-shrink: 0; font-weight: 500; }
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

