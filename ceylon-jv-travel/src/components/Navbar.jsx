import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data/content";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section observer for active link highlighting
      const sections = NAV_LINKS.map(link => document.getElementById(link.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec.offsetTop <= scrollPosition) {
          setActive(sec.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id) => {
    setActive(id);
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <button className="navbar__logo" onClick={() => goTo("home")} aria-label="Ceylon JV Travels Home">
          <img 
            src={scrolled ? "/images/ceylonJV logo/Ceylon JV logo black.png" : "/images/ceylonJV logo/Ceylon jv logo white.png"} 
            alt="Ceylon JV Travel Logo" 
            className="navbar__logo-img"
          />
        </button>

        <nav className="navbar__links">
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

        <button className="navbar__burger" aria-label="Open menu" onClick={() => setOpen((o) => !o)}>
          {open ? <X size={24} color={scrolled ? "#171A14" : "#FFFFFF"} /> : <Menu size={24} color={scrolled ? "#171A14" : "#FFFFFF"} />}
        </button>
      </div>

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
          padding: 24px 6%; transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .navbar--scrolled { 
          padding: 14px 6%; 
          background: rgba(250, 247, 239, 0.92); 
          backdrop-filter: blur(20px); 
          -webkit-backdrop-filter: blur(20px); 
          box-shadow: 0 10px 30px rgba(23, 26, 20, 0.08); 
          border-bottom: 1px solid rgba(220, 227, 210, 0.6);
        }
        .navbar__inner { display: flex; align-items: center; justify-content: space-between; max-width: 1320px; margin: 0 auto; }
        
        .navbar__logo { 
          background: none; border: none; padding: 0; cursor: pointer; display: flex; align-items: center; 
          transition: transform 0.3s ease;
        }
        .navbar__logo:hover { transform: scale(1.04); }
        .navbar__logo-img { height: 44px; width: auto; object-fit: contain; filter: drop-shadow(0 2px 8px rgba(0,0,0,0.3)); transition: filter 0.3s ease, height 0.3s ease; }
        .navbar--scrolled .navbar__logo-img { height: 38px; filter: none; }

        .navbar__links { 
          display: flex; align-items: center; gap: 4px; 
          background: rgba(20, 23, 18, 0.42); 
          backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.22); 
          border-radius: 999px; padding: 5px 8px; 
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15); 
          transition: all 0.35s ease;
        }
        .navbar--scrolled .navbar__links {
          background: rgba(255, 255, 255, 0.75);
          border-color: rgba(220, 227, 210, 0.8);
          box-shadow: var(--shadow-sm);
        }

        .navbar__link { 
          border: none; background: transparent; 
          font-family: var(--font-utility); font-weight: 500; font-size: 14px; letter-spacing: 0.3px;
          padding: 8px 18px; border-radius: 999px; 
          color: rgba(255, 255, 255, 0.88); 
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); cursor: pointer;
        }
        .navbar--scrolled .navbar__link { color: var(--ink-soft); }

        .navbar__link:hover { color: #fff; background: rgba(255,255,255,0.15); }
        .navbar--scrolled .navbar__link:hover { color: var(--moss-900); background: rgba(32,43,24,0.08); }

        .navbar__link--active { 
          background: var(--moss-900) !important; color: var(--gold-100) !important; 
          box-shadow: 0 4px 14px rgba(32,43,24,0.25);
        }
        .navbar--scrolled .navbar__link--active {
          background: var(--moss-900) !important; color: var(--gold-100) !important;
        }

        .navbar__burger { display: none; background: none; border: none; cursor: pointer; padding: 4px; }
        .navbar__mobile { max-height: 0; overflow: hidden; transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1); background: rgba(32, 43, 24, 0.96); backdrop-filter: blur(20px); border-radius: var(--radius-md); }
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
        
        @media (max-width: 900px) { 
          .navbar__links { display: none; } 
          .navbar__burger { display: block; } 
        }
      `}</style>
    </header>
  );
}

