import { useEffect, useState } from "react";
import { Menu, X, Mountain } from "lucide-react";
import { NAV_LINKS } from "../data/content";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
        <button className="navbar__logo" onClick={() => goTo("home")}>
          <span className="navbar__logo-box"><Mountain size={16} strokeWidth={1.3} /></span>
          Ceylon JV
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
          {open ? <X size={22} /> : <Menu size={22} />}
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
        .navbar { position: sticky; top: 0; z-index: 50; padding: 22px 5%; transition: padding 0.35s ease; }
        .navbar--scrolled { padding: 12px 5%; }
        .navbar__inner { display: flex; align-items: center; justify-content: space-between; max-width: 1280px; margin: 0 auto; }
        .navbar__logo { display: flex; align-items: center; gap: 10px; font-family: var(--font-display); font-weight: 600; font-size: 20px; color: var(--ink); background: none; border: none; }
        .navbar__logo-box { width: 30px; height: 30px; border: 1px solid var(--ink); display: flex; align-items: center; justify-content: center; }
        .navbar__links { display: flex; align-items: center; gap: 4px; background: rgba(255,255,255,0.45); backdrop-filter: blur(14px); border: 1px solid rgba(255,255,255,0.6); border-radius: 999px; padding: 6px; box-shadow: var(--shadow-sm); }
        .navbar__link { border: none; background: transparent; font-family: var(--font-body); font-size: 15.5px; padding: 9px 16px; border-radius: 999px; color: var(--ink-soft); transition: background 0.25s ease, color 0.25s ease; }
        .navbar__link:hover { background: rgba(32,43,24,0.06); }
        .navbar__link--active { background: var(--moss-900); color: var(--gold-100); }
        .navbar__burger { display: none; background: none; border: none; color: var(--ink); }
        .navbar__mobile { max-height: 0; overflow: hidden; transition: max-height 0.4s ease; }
        .navbar__mobile--open { max-height: 420px; margin-top: 14px; }
        .navbar__mobile-link { display: block; width: 100%; text-align: left; background: rgba(255,255,255,0.7); border: none; border-bottom: 1px solid rgba(0,0,0,0.06); padding: 14px 16px; font-family: var(--font-body); font-size: 17px; color: var(--ink); }
        .navbar__mobile-link--active { color: var(--moss-700); font-weight: 600; }
        @media (max-width: 900px) { .navbar__links { display: none; } .navbar__burger { display: block; } }
      `}</style>
    </header>
  );
}
