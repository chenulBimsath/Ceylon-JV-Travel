import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data/content";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Transition from Hero Nav layout to Floating Capsule Nav layout when scrolling past Hero view
      const heroEl = document.getElementById("home");
      const heroThreshold = heroEl ? heroEl.offsetHeight - 140 : 500;
      setScrolled(window.scrollY > heroThreshold);

      // Section observer for active link highlighting
      const sections = NAV_LINKS.map(link => document.getElementById(link.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec.offsetTop <= scrollPosition) {
          setActive(sec.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // initial check
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id) => {
    setActive(id);
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__container">
        {/* Unified / Sliding Brand + Logo */}
        <button className="navbar__brand" onClick={() => goTo("home")} aria-label="Ceylon JV Travels Home">
          <img 
            src={scrolled ? "/images/ceylonJV logo/Ceylon JV logo black.png" : "/images/ceylonJV logo/Ceylon jv logo white.png"} 
            alt="Ceylon JV Travel Logo" 
            className="navbar__logo-img"
          />
          <span className="navbar__brand-name">Ceylon JV</span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="navbar__nav">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              className={`navbar__link ${active === link.id ? "navbar__link--active" : ""}`}
              onClick={() => goTo(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile Hamburger Menu Toggle */}
        <button className="navbar__burger" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
          {open ? <X size={26} color={scrolled ? "#171A14" : "#FFFFFF"} /> : <Menu size={26} color={scrolled ? "#171A14" : "#FFFFFF"} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`navbar__mobile ${open ? "navbar__mobile--open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <button
            key={link.id}
            className={`navbar__mobile-link ${active === link.id ? "navbar__mobile-link--active" : ""}`}
            onClick={() => goTo(link.id)}
          >
            {link.label}
          </button>
        ))}
      </div>

      <style>{`
        .navbar { 
          position: fixed; top: 0; left: 0; right: 0; z-index: 90; 
          padding: 28px 6%; 
          transition: padding 0.6s cubic-bezier(0.16, 1, 0.3, 1), background 0.6s ease;
          pointer-events: none;
        }
        
        /* TRANSITION TO OTHER SECTIONS (FLOATING CAPSULE BAR) */
        .navbar--scrolled { 
          padding: 16px 5%; 
        }

        .navbar__container {
          pointer-events: auto;
          display: flex; align-items: center; justify-content: space-between;
          max-width: 1320px; margin: 0 auto;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Combined Capsule Layout when entering other sections */
        .navbar--scrolled .navbar__container {
          margin: 0 auto;
          width: fit-content;
          max-width: 95vw;
          justify-content: center;
          gap: 16px;
          background: rgba(250, 247, 239, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(220, 227, 210, 0.9);
          border-radius: 999px;
          padding: 7px 16px;
          box-shadow: 0 18px 50px rgba(23, 26, 20, 0.16);
          animation: floatInCapsule 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes floatInCapsule {
          0% { transform: translateY(-20px) scale(0.95); opacity: 0.8; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }

        /* BRAND / LOGO STYLING */
        .navbar__brand {
          background: none; border: none; padding: 0; cursor: pointer;
          display: flex; align-items: center; gap: 14px;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .navbar__brand:hover { transform: scale(1.04); }

        .navbar__logo-img {
          height: 64px; width: auto; object-fit: contain;
          filter: drop-shadow(0 4px 14px rgba(0,0,0,0.45));
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .navbar--scrolled .navbar__logo-img {
          height: 40px; filter: none;
        }

        .navbar__brand-name {
          font-family: var(--font-display);
          font-size: 26px; font-weight: 700; letter-spacing: 0.6px;
          color: #FFFFFF;
          text-shadow: 0 2px 14px rgba(0,0,0,0.6);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          white-space: nowrap;
        }
        .navbar--scrolled .navbar__brand-name {
          color: var(--moss-900);
          font-size: 19px;
          text-shadow: none;
          padding-right: 14px;
          border-right: 1px solid rgba(32, 43, 24, 0.22);
        }

        /* HERO NAV LINKS CONTAINER */
        .navbar__nav {
          display: flex; align-items: center; gap: 4px;
          background: rgba(20, 23, 18, 0.48);
          backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 999px; padding: 5px 8px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.18);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .navbar--scrolled .navbar__nav {
          background: transparent;
          border: none;
          box-shadow: none;
          padding: 0;
        }

        .navbar__link {
          border: none; background: transparent;
          font-family: var(--font-utility); font-weight: 500; font-size: 14px; letter-spacing: 0.3px;
          padding: 8px 18px; border-radius: 999px;
          color: rgba(255, 255, 255, 0.92);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1); cursor: pointer;
          white-space: nowrap;
        }
        .navbar--scrolled .navbar__link { color: var(--ink-soft); }

        .navbar__link:hover { color: #fff; background: rgba(255,255,255,0.18); }
        .navbar--scrolled .navbar__link:hover { color: var(--moss-900); background: rgba(32,43,24,0.08); }

        .navbar__link--active {
          background: var(--moss-900) !important; color: var(--gold-100) !important;
          box-shadow: 0 4px 14px rgba(32,43,24,0.3);
        }

        /* MOBILE MENU BURGER */
        .navbar__burger { display: none; background: none; border: none; cursor: pointer; padding: 6px; }
        .navbar__mobile { 
          pointer-events: auto;
          max-height: 0; overflow: hidden; transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1); 
          background: rgba(32, 43, 24, 0.96); backdrop-filter: blur(20px); border-radius: var(--radius-md); 
        }
        .navbar--scrolled .navbar__mobile { background: rgba(250, 247, 239, 0.98); }
        .navbar__mobile--open { max-height: 420px; margin-top: 14px; padding: 12px 0; border: 1px solid var(--moss-300); }
        .navbar__mobile-link {
          display: block; width: 100%; text-align: left; background: transparent;
          border: none; border-bottom: 1px solid rgba(255,255,255,0.08); padding: 14px 24px;
          font-family: var(--font-utility); font-size: 16px; color: #fff; cursor: pointer;
        }
        .navbar--scrolled .navbar__mobile-link { color: var(--ink); border-bottom-color: var(--cream-deep); }
        .navbar__mobile-link--active { color: var(--gold-300); font-weight: 600; }
        .navbar--scrolled .navbar__mobile-link--active { color: var(--moss-900); font-weight: 600; }
        
        @media (max-width: 960px) {
          .navbar__nav { display: none; }
          .navbar__burger { display: block; }
          .navbar--scrolled .navbar__container { justify-content: space-between; width: 100%; border-radius: var(--radius-md); }
          .navbar--scrolled .navbar__brand-name { border-right: none; padding-right: 0; }
        }
      `}</style>
    </header>
  );
}



