import { useState } from "react";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import useReveal from "../hooks/useReveal";
import SectionHeading from "./ui/SectionHeading";

const STEPS = ["Destination", "Duration", "Travellers", "Budget", "Style"];
const DESTINATION_OPTS = ["Beaches", "Hill Country", "Wildlife", "Culture", "Mix of everything"];
const STYLE_OPTS = ["Relaxed", "Adventure", "Luxury", "Backpacking"];

export default function TripPlanner() {
  const [ref, visible] = useReveal();
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ destination: "", days: 7, travellers: 2, budget: 1000, style: "" });

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));
  const submit = () => setSubmitted(true);

  return (
    <section className="planner" ref={ref}>
      <SectionHeading eyebrow="Made for you" title="Custom Trip Planner" subtitle="Answer a few quick questions and we'll draft your itinerary" visible={visible} />

      <div className={`planner__card ${visible ? "reveal-in" : "reveal-pre"}`} style={{ transitionDelay: "0.15s" }}>
        {!submitted ? (
          <>
            <div className="planner__steps">
              {STEPS.map((s, i) => (
                <div key={s} className={`planner__step ${i === step ? "planner__step--active" : ""} ${i < step ? "planner__step--done" : ""}`}>
                  <span className="planner__step-dot">{i < step ? <Check size={12} strokeWidth={2.4} /> : i + 1}</span>
                  {s}
                </div>
              ))}
            </div>

            <div className="planner__content">
              {step === 0 && (
                <div className="planner__options">
                  {DESTINATION_OPTS.map((o) => (
                    <button key={o} className={`planner__opt ${form.destination === o ? "planner__opt--active" : ""}`} onClick={() => setForm({ ...form, destination: o })}>{o}</button>
                  ))}
                </div>
              )}
              {step === 1 && (
                <div className="planner__slider">
                  <p className="planner__value">{form.days} days</p>
                  <input type="range" min="2" max="21" value={form.days} onChange={(e) => setForm({ ...form, days: Number(e.target.value) })} />
                </div>
              )}
              {step === 2 && (
                <div className="planner__slider">
                  <p className="planner__value">{form.travellers} {form.travellers === 1 ? "traveller" : "travellers"}</p>
                  <input type="range" min="1" max="10" value={form.travellers} onChange={(e) => setForm({ ...form, travellers: Number(e.target.value) })} />
                </div>
              )}
              {step === 3 && (
                <div className="planner__slider">
                  <p className="planner__value">${form.budget.toLocaleString()}</p>
                  <input type="range" min="200" max="5000" step="100" value={form.budget} onChange={(e) => setForm({ ...form, budget: Number(e.target.value) })} />
                </div>
              )}
              {step === 4 && (
                <div className="planner__options">
                  {STYLE_OPTS.map((o) => (
                    <button key={o} className={`planner__opt ${form.style === o ? "planner__opt--active" : ""}`} onClick={() => setForm({ ...form, style: o })}>{o}</button>
                  ))}
                </div>
              )}
            </div>

            <div className="planner__nav">
              <button className="btn btn--outline-dark" onClick={back} disabled={step === 0} style={{ opacity: step === 0 ? 0.4 : 1 }}>
                <ArrowLeft size={15} /> Back
              </button>
              {step < STEPS.length - 1 ? (
                <button className="btn btn--primary" onClick={next}>Next <ArrowRight size={15} /></button>
              ) : (
                <button className="btn btn--primary" onClick={submit}>Request my itinerary <ArrowRight size={15} /></button>
              )}
            </div>
          </>
        ) : (
          <div className="planner__done">
            <span className="planner__done-icon"><Check size={22} strokeWidth={2} /></span>
            <h3>Your request is in</h3>
            <p>
              {form.travellers} traveller{form.travellers > 1 ? "s" : ""} · {form.days} days · {form.style || "any"} style ·
              {" "}around ${form.budget.toLocaleString()} — one of our specialists will send a custom itinerary shortly.
            </p>
          </div>
        )}
      </div>

      <style>{`
        .planner { padding: 100px 5% 110px; max-width: 900px; margin: 0 auto; }
        .planner__card { background: #fff; border-radius: var(--radius-lg); padding: 40px 36px; box-shadow: var(--shadow-md); }
        .planner__steps { display: flex; flex-wrap: wrap; gap: 18px; margin-bottom: 34px; }
        .planner__step { display: flex; align-items: center; gap: 8px; font-family: var(--font-utility); font-size: 13px; color: var(--ink-soft); opacity: 0.5; transition: opacity 0.3s ease; }
        .planner__step--active, .planner__step--done { opacity: 1; }
        .planner__step-dot { width: 22px; height: 22px; border-radius: 50%; border: 1px solid var(--moss-300); display: flex; align-items: center; justify-content: center; font-size: 11px; color: var(--moss-700); transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease; }
        .planner__step--active .planner__step-dot, .planner__step--done .planner__step-dot { background: var(--moss-900); border-color: var(--moss-900); color: var(--gold-100); }
        .planner__content { min-height: 130px; display: flex; align-items: center; animation: fadeUp 0.4s ease; }
        .planner__options { display: flex; flex-wrap: wrap; gap: 12px; }
        .planner__opt { padding: 14px 22px; border-radius: var(--radius-pill); border: 1px solid var(--moss-100); background: var(--cream); font-family: var(--font-body); font-size: 15.5px; color: var(--ink); transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease; }
        .planner__opt:hover { border-color: var(--moss-300); }
        .planner__opt--active { background: var(--moss-900); border-color: var(--moss-900); color: var(--gold-100); }
        .planner__slider { width: 100%; }
        .planner__value { font-family: var(--font-display); font-size: 30px; color: var(--moss-900); margin: 0 0 18px; }
        .planner__slider input { width: 100%; accent-color: var(--moss-700); }
        .planner__nav { display: flex; justify-content: space-between; margin-top: 34px; }
        .planner__done { text-align: center; padding: 20px 0; }
        .planner__done-icon { display: inline-flex; align-items: center; justify-content: center; width: 52px; height: 52px; border-radius: 50%; background: var(--moss-100); color: var(--moss-700); margin-bottom: 16px; }
        .planner__done h3 { font-family: var(--font-display); font-size: 24px; margin: 0 0 10px; color: var(--moss-900); }
        .planner__done p { color: var(--ink-soft); max-width: 460px; margin: 0 auto; line-height: 1.6; }
      `}</style>
    </section>
  );
}
