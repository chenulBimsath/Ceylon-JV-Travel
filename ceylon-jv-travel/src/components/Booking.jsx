import { useState } from "react";
import { CheckCircle2, MessageCircle, Send } from "lucide-react";
import useReveal from "../hooks/useReveal";
import SectionHeading from "./ui/SectionHeading";
import { PACKAGES } from "../data/content";

export default function Booking() {
  const [ref, visible] = useReveal();
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "2",
    packageId: "",
    date: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const handleWhatsApp = () => {
    const pkg = PACKAGES.find(p => p.id === formData.packageId);
    const pkgName = pkg ? pkg.name : "Custom Tour";
    const text = `Hi Ceylon JV Travels! I'd like to inquire about a tour.\n\n*Name:* ${formData.name || "Guest"}\n*Guests:* ${formData.guests}\n*Date:* ${formData.date || "Flexible"}\n*Package:* ${pkgName}\n*Message:* ${formData.message || "Please contact me with details."}`;
    
    const url = `https://wa.me/94770000000?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
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
            <li><CheckCircle2 size={16} strokeWidth={1.8} /> 24/7 Local support throughout your trip</li>
          </ul>

          <div className="booking__direct-wa">
            <p>Prefer instant messaging?</p>
            <button type="button" className="btn btn--whatsapp" onClick={handleWhatsApp}>
              <MessageCircle size={18} /> Chat on WhatsApp
            </button>
          </div>
        </div>

        <div className="booking__form-panel">
          {!sent ? (
            <form onSubmit={handleSubmit} className="booking__form">
              <div className="booking__row">
                <label>Full name<input type="text" name="name" required placeholder="Your name" value={formData.name} onChange={handleChange} /></label>
                <label>Email<input type="email" name="email" required placeholder="you@example.com" value={formData.email} onChange={handleChange} /></label>
              </div>
              <div className="booking__row">
                <label>Phone / WhatsApp<input type="tel" name="phone" placeholder="+94 7X XXX XXXX" value={formData.phone} onChange={handleChange} /></label>
                <label>Number of guests<input type="number" name="guests" min="1" value={formData.guests} onChange={handleChange} /></label>
              </div>
              <div className="booking__row">
                <label>Package<select name="packageId" value={formData.packageId} onChange={handleChange}>
                  <option value="">Select a package (Optional)</option>
                  {PACKAGES.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
                </select></label>
                <label>Travel date<input type="date" name="date" value={formData.date} onChange={handleChange} /></label>
              </div>
              <label>Message<textarea name="message" rows={3} placeholder="Tell us your preferences, dietary requirements, or questions..." value={formData.message} onChange={handleChange} /></label>
              
              <div className="booking__actions">
                <button type="submit" className="btn btn--primary" style={{ flex: 1, justifyContent: "center" }}>
                  <Send size={16} /> Send Email Inquiry
                </button>
                <button type="button" className="btn btn--whatsapp" onClick={handleWhatsApp} style={{ justifyContent: "center" }}>
                  <MessageCircle size={16} /> WhatsApp
                </button>
              </div>
            </form>
          ) : (
            <div className="booking__done">
              <CheckCircle2 size={46} strokeWidth={1.4} color="#4B5F3B" />
              <h3>Inquiry Sent Successfully!</h3>
              <p>We've received your request. A Ceylon JV travel specialist will reach out to you within 24 hours.</p>
              <button className="btn btn--outline-dark" style={{ marginTop: "16px" }} onClick={() => setSent(false)}>Send Another Inquiry</button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .booking { padding: 0 5% 110px; max-width: 1200px; margin: 0 auto; }
        .booking__wrap { display: grid; grid-template-columns: 0.9fr 1.1fr; border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-lg); }
        .booking__side { background: var(--moss-900); color: #F5EAD0; padding: 50px 44px; display: flex; flex-direction: column; justify-content: center; }
        .booking__side-text { font-size: 15.5px; line-height: 1.65; color: rgba(245,234,208,0.8); margin: 0 0 26px; }
        .booking__side-list { list-style: none; padding: 0; margin: 0 0 30px; display: flex; flex-direction: column; gap: 12px; }
        .booking__side-list li { display: flex; align-items: center; gap: 10px; font-size: 14px; color: rgba(245,234,208,0.9); }
        .booking__direct-wa { border-top: 1px solid rgba(245,234,208,0.15); padding-top: 20px; }
        .booking__direct-wa p { font-size: 13px; color: rgba(245,234,208,0.7); margin-bottom: 10px; font-family: var(--font-utility); }
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
        .booking__actions { display: flex; gap: 12px; margin-top: 6px; flex-wrap: wrap; }
        .booking__done { text-align: center; padding: 40px 0; display: flex; flex-direction: column; align-items: center; gap: 12px; }
        .booking__done h3 { font-family: var(--font-display); font-size: 24px; margin: 0; color: var(--moss-900); }
        .booking__done p { color: var(--ink-soft); margin: 0; max-width: 340px; line-height: 1.6; }
        @media (max-width: 820px) {
          .booking__wrap { grid-template-columns: 1fr; }
          .booking__row { grid-template-columns: 1fr; }
          .booking__actions { flex-direction: column; }
        }
      `}</style>
    </section>
  );
}

