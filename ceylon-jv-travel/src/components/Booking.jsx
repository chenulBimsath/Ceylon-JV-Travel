import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import useReveal from "../hooks/useReveal";
import SectionHeading from "./ui/SectionHeading";
import { PACKAGES } from "../data/content";

export default function Booking() {
  const [ref, visible] = useReveal();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="booking" ref={ref} id="booking">
      <div className={`booking__wrap ${visible ? "reveal-in" : "reveal-pre"}`}>
        <div className="booking__side">
          <p className="eyebrow">Let's plan it</p>
          <h2 className="section-title" style={{ color: "#F5EAD0" }}>Book Your Trip</h2>
          <p className="booking__side-text">
            Send us your details and travel dates. A Ceylon JV specialist will confirm
            availability and follow up within 24 hours.
          </p>
          <ul className="booking__side-list">
            <li><CheckCircle2 size={16} strokeWidth={1.8} /> No payment required to inquire</li>
            <li><CheckCircle2 size={16} strokeWidth={1.8} /> Free itinerary adjustments</li>
            <li><CheckCircle2 size={16} strokeWidth={1.8} /> Local support throughout your trip</li>
          </ul>
        </div>

        <div className="booking__form-panel">
          {!sent ? (
            <form onSubmit={handleSubmit} className="booking__form">
              <div className="booking__row">
                <label>Full name<input type="text" required placeholder="Your name" /></label>
                <label>Email<input type="email" required placeholder="you@example.com" /></label>
              </div>
              <div className="booking__row">
                <label>Phone<input type="tel" placeholder="+1 000 000 0000" /></label>
                <label>Number of people<input type="number" min="1" defaultValue={2} /></label>
              </div>
              <div className="booking__row">
                <label>Package<select defaultValue="">
                  <option value="" disabled>Select a package</option>
                  {PACKAGES.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
                </select></label>
                <label>Travel date<input type="date" /></label>
              </div>
              <label>Message<textarea rows={3} placeholder="Anything we should know?" /></label>
              <button type="submit" className="btn btn--primary" style={{ width: "100%", justifyContent: "center" }}>Send Inquiry</button>
            </form>
          ) : (
            <div className="booking__done">
              <CheckCircle2 size={40} strokeWidth={1.4} color="#4B5F3B" />
              <h3>Inquiry sent</h3>
              <p>We've received your request — check your inbox for confirmation shortly.</p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .booking { padding: 0 5% 110px; max-width: 1200px; margin: 0 auto; }
        .booking__wrap { display: grid; grid-template-columns: 0.9fr 1.1fr; border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-lg); }
        .booking__side { background: var(--moss-900); color: #F5EAD0; padding: 50px 44px; display: flex; flex-direction: column; justify-content: center; }
        .booking__side-text { font-size: 15.5px; line-height: 1.65; color: rgba(245,234,208,0.8); margin: 0 0 26px; }
        .booking__side-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px; }
        .booking__side-list li { display: flex; align-items: center; gap: 10px; font-size: 14px; color: rgba(245,234,208,0.9); }
        .booking__form-panel { background: #fff; padding: 50px 44px; }
        .booking__form { display: flex; flex-direction: column; gap: 16px; }
        .booking__row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .booking__form label { display: flex; flex-direction: column; gap: 6px; font-family: var(--font-utility); font-size: 12.5px; color: var(--ink-soft); }
        .booking__form input, .booking__form select, .booking__form textarea {
          font-family: var(--font-body); font-size: 15px; padding: 11px 13px; border-radius: var(--radius-sm);
          border: 1px solid var(--moss-100); background: var(--cream); color: var(--ink); resize: none;
          transition: border-color 0.25s ease;
        }
        .booking__form input:focus, .booking__form select:focus, .booking__form textarea:focus { outline: none; border-color: var(--moss-500); }
        .booking__done { text-align: center; padding: 40px 0; display: flex; flex-direction: column; align-items: center; gap: 12px; }
        .booking__done h3 { font-family: var(--font-display); font-size: 22px; margin: 0; color: var(--moss-900); }
        .booking__done p { color: var(--ink-soft); margin: 0; max-width: 320px; }
        @media (max-width: 820px) {
          .booking__wrap { grid-template-columns: 1fr; }
          .booking__row { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
