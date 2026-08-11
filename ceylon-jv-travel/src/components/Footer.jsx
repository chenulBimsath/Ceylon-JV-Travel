import { Mountain, Facebook, Instagram, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { NAV_LINKS } from "../data/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <p className="footer__logo"><Mountain size={18} strokeWidth={1.4} /> Ceylon JV</p>
          <p className="footer__tag">Sri Lanka Travel &amp; Tours</p>
          <div className="footer__social">
            <a href="#" aria-label="Facebook"><Facebook size={16} strokeWidth={1.6} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={16} strokeWidth={1.6} /></a>
            <a href="#" aria-label="WhatsApp"><MessageCircle size={16} strokeWidth={1.6} /></a>
          </div>
        </div>

        <div className="footer__col">
          <p className="footer__heading">Explore</p>
          {NAV_LINKS.map((l) => <a key={l.id} href={`#${l.id}`}>{l.label}</a>)}
        </div>

        <div className="footer__col">
          <p className="footer__heading">Contact</p>
          <span><Phone size={14} strokeWidth={1.6} /> +94 77 123 4567</span>
          <span><Mail size={14} strokeWidth={1.6} /> hello@ceylonjv.com</span>
          <span><MapPin size={14} strokeWidth={1.6} /> Colombo, Sri Lanka</span>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} Ceylon JV Travel. All rights reserved.</p>
      </div>

      <style>{`
        .footer { background: var(--moss-900); color: rgba(245,234,208,0.75); padding: 70px 5% 0; }
        .footer__top { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1.3fr 1fr 1fr; gap: 40px; padding-bottom: 50px; }
        .footer__logo { display: flex; align-items: center; gap: 8px; font-family: var(--font-display); font-size: 20px; color: #F5EAD0; margin: 0 0 8px; }
        .footer__tag { font-size: 13.5px; margin: 0 0 18px; color: rgba(245,234,208,0.55); }
        .footer__social { display: flex; gap: 10px; }
        .footer__social a { width: 34px; height: 34px; border-radius: 50%; border: 1px solid rgba(245,234,208,0.25); display: flex; align-items: center; justify-content: center; color: #F5EAD0; transition: background 0.25s ease; }
        .footer__social a:hover { background: rgba(245,234,208,0.12); }
        .footer__heading { font-family: var(--font-utility); font-size: 12.5px; text-transform: uppercase; letter-spacing: 1.5px; color: var(--gold-300); margin: 0 0 16px; }
        .footer__col { display: flex; flex-direction: column; gap: 10px; font-size: 14.5px; }
        .footer__col a { color: rgba(245,234,208,0.75); text-decoration: none; }
        .footer__col a:hover { color: #F5EAD0; }
        .footer__col span { display: flex; align-items: center; gap: 8px; }
        .footer__bottom { max-width: 1200px; margin: 0 auto; border-top: 1px solid rgba(245,234,208,0.12); padding: 20px 0; font-size: 12.5px; text-align: center; color: rgba(245,234,208,0.5); }
      `}</style>
    </footer>
  );
}
