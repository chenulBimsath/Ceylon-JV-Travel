import { ShieldCheck, BadgeDollarSign, Car, Headset } from "lucide-react";
import useReveal, { useCountUp } from "../hooks/useReveal";
import SectionHeading from "./ui/SectionHeading";
import { WHY_US, WHY_US_POINTS } from "../data/content";

const ICONS = [ShieldCheck, BadgeDollarSign, Car, Headset];

function Stat({ item, visible, delay }) {
  const value = useCountUp(item.stat, visible);
  return (
    <div className={`why-stat ${visible ? "reveal-in" : "reveal-pre"}`} style={{ transitionDelay: delay }}>
      <p className="why-stat__num">{value}{item.suffix}</p>
      <p className="why-stat__label">{item.label}</p>
    </div>
  );
}

export default function WhyChooseUs() {
  const [ref, visible] = useReveal();

  return (
    <section className="why-us" ref={ref} id="why-us">
      <SectionHeading eyebrow="About us" title="Why Choose Ceylon JV" subtitle="Ten years of building trips people actually remember" visible={visible} />

      <div className="why-us__stats">
        {WHY_US.map((item, i) => (
          <Stat key={item.id} item={item} visible={visible} delay={`${0.1 + i * 0.1}s`} />
        ))}
      </div>

      <div className="why-us__points">
        {WHY_US_POINTS.map((p, i) => {
          const Icon = ICONS[i];
          return (
            <div key={p.title} className={`why-point ${visible ? "reveal-in" : "reveal-pre"}`} style={{ transitionDelay: `${0.2 + i * 0.1}s` }}>
              <span className="why-point__icon"><Icon size={20} strokeWidth={1.5} /></span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          );
        })}
      </div>

      <style>{`
        .why-us { padding: 100px 5% 110px; max-width: 1200px; margin: 0 auto; }
        .why-us__stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 20px; margin-bottom: 70px; padding: 40px 10px; background: var(--moss-900); border-radius: var(--radius-lg); }
        .why-stat { text-align: center; }
        .why-stat__num { font-family: var(--font-display); font-size: 40px; color: var(--gold-300); margin: 0; }
        .why-stat__label { font-family: var(--font-utility); font-size: 13px; color: rgba(245,234,208,0.75); margin: 6px 0 0; }
        .why-us__points { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 30px; }
        .why-point__icon { display: inline-flex; align-items: center; justify-content: center; width: 46px; height: 46px; border-radius: 50%; background: var(--moss-100); color: var(--moss-700); margin-bottom: 16px; }
        .why-point h3 { font-family: var(--font-display); font-size: 19px; margin: 0 0 8px; color: var(--moss-900); }
        .why-point p { font-size: 15px; color: var(--ink-soft); line-height: 1.6; margin: 0; }
      `}</style>
    </section>
  );
}
