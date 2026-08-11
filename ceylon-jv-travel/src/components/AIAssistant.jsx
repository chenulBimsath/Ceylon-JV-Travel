import { useState } from "react";
import { MessageCircle, X, Send, Sparkles, Compass } from "lucide-react";

const SUGGESTIONS = ["I have 7 days and $800", "Best beaches for a honeymoon", "Family trip with kids"];

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "ai", text: "Ayubowan! 🙏 I'm your Ceylon JV AI Travel Assistant. Tell me your travel dates, budget, or preferred activities and I'll suggest a custom Sri Lankan itinerary!" },
  ]);
  const [input, setInput] = useState("");

  const generateReply = (userQuery) => {
    const q = userQuery.toLowerCase();
    if (q.includes("honeymoon") || q.includes("romantic")) {
      return "For a romantic honeymoon escape, I recommend: Bentota Ocean Villa → Mirissa Beach Sunset → Executive Train to Ella Highlands → Couples Spa in Nuwara Eliya. Would you like me to reserve this for you?";
    } else if (q.includes("family") || q.includes("kid")) {
      return "For a family trip, here's a top route: Colombo → Pinnawala Elephants → Sigiriya Village Safari → Minneriya Wild Elephant Gathering → Bentota Beach Water Sports!";
    } else if (q.includes("beach") || q.includes("surf")) {
      return "For sun and surf, check out Southern & Eastern coastlines: Mirissa (Whale watching & Coconut Tree Hill) → Hiriketiya Cove → Arugam Bay (World class surf point) → Trincomalee!";
    } else if (q.includes("budget") || q.includes("7 days") || q.includes("5 days") || q.includes("price")) {
      return "Based on your duration and budget, I recommend our '7 Days Wild Ceylon Adventure' ($799) or '5 Days Sri Lanka Paradise Tour' ($549). Both include private AC transport, guide, and hand-picked stays!";
    } else {
      return "That sounds like a great plan! The ideal route would combine Cultural Triangle (Sigiriya & Kandy) → Tea Country (Ella & Nuwara Eliya) → Southern Coast (Mirissa & Galle). Would you like to check our ready-made tour packages or send a custom inquiry?";
    }
  };

  const send = (text) => {
    const value = text ?? input;
    if (!value.trim()) return;
    setMessages((m) => [...m, { from: "user", text: value }]);
    setInput("");
    setTimeout(() => {
      const reply = generateReply(value);
      setMessages((m) => [...m, { from: "ai", text: reply }]);
    }, 600);
  };

  return (
    <>
      <button 
        className={`ai-fab ${open ? "ai-fab--hidden" : ""}`} 
        onClick={() => setOpen(true)} 
        aria-label="Open travel assistant"
      >
        <Sparkles size={22} strokeWidth={1.8} />
        <span className="ai-fab__badge" />
      </button>

      <div className={`ai-panel ${open ? "ai-panel--open" : ""}`}>
        <div className="ai-panel__head">
          <div>
            <p className="ai-panel__title"><Sparkles size={16} strokeWidth={1.8} /> Ceylon JV Travel AI</p>
            <p className="ai-panel__sub">24/7 Smart Itinerary Planner</p>
          </div>
          <button onClick={() => setOpen(false)} aria-label="Close"><X size={18} /></button>
        </div>

        <div className="ai-panel__body">
          {messages.map((m, i) => (
            <div key={i} className={`ai-msg ai-msg--${m.from}`}>
              {m.text}
            </div>
          ))}
        </div>

        {messages.length < 4 && (
          <div className="ai-panel__suggestions">
            {SUGGESTIONS.map((s) => (
              <button key={s} onClick={() => send(s)}>{s}</button>
            ))}
          </div>
        )}

        <form className="ai-panel__input" onSubmit={(e) => { e.preventDefault(); send(); }}>
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about your Sri Lanka trip..." />
          <button type="submit" aria-label="Send"><Send size={16} strokeWidth={1.8} /></button>
        </form>
      </div>

      <style>{`
        .ai-fab { 
          position: fixed; right: 26px; bottom: 26px; z-index: 60; width: 58px; height: 58px; 
          border-radius: 50%; background: var(--moss-900); color: var(--gold-300); border: 2px solid var(--gold-500); 
          display: flex; align-items: center; justify-content: center; box-shadow: var(--shadow-lg); 
          transition: transform 0.3s ease, opacity 0.3s ease; animation: floatY 4s ease-in-out infinite, pulseGlow 3s infinite; 
          cursor: pointer;
        }
        .ai-fab:hover { transform: scale(1.1); }
        .ai-fab__badge { position: absolute; top: 2px; right: 2px; width: 12px; height: 12px; border-radius: 50%; background: #25D366; border: 2px solid #fff; }
        .ai-fab--hidden { opacity: 0; pointer-events: none; transform: scale(0.6); }
        .ai-panel { position: fixed; right: 26px; bottom: 26px; z-index: 60; width: 360px; max-width: 90vw; background: #fff; border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); display: flex; flex-direction: column; overflow: hidden; transform: translateY(16px) scale(0.96); opacity: 0; pointer-events: none; transition: transform 0.3s var(--ease-out), opacity 0.3s ease; }
        .ai-panel--open { transform: translateY(0) scale(1); opacity: 1; pointer-events: auto; }
        .ai-panel__head { background: var(--moss-900); color: #fff; padding: 16px 18px; display: flex; align-items: flex-start; justify-content: space-between; border-bottom: 1px solid rgba(201,162,75,0.25); }
        .ai-panel__title { display: flex; align-items: center; gap: 6px; margin: 0; font-family: var(--font-utility); font-size: 15px; font-weight: 500; color: var(--gold-100); }
        .ai-panel__sub { margin: 4px 0 0; font-size: 11.5px; color: rgba(255,255,255,0.7); }
        .ai-panel__head button { background: none; border: none; color: rgba(255,255,255,0.75); cursor: pointer; }
        .ai-panel__body { padding: 16px 18px; display: flex; flex-direction: column; gap: 10px; max-height: 280px; overflow-y: auto; }
        .ai-msg { font-size: 13.5px; line-height: 1.55; padding: 10px 14px; border-radius: 14px; max-width: 88%; }
        .ai-msg--ai { background: var(--cream); color: var(--ink); align-self: flex-start; border-bottom-left-radius: 4px; border: 1px solid var(--moss-100); }
        .ai-msg--user { background: var(--moss-900); color: #F5EAD0; align-self: flex-end; border-bottom-right-radius: 4px; }
        .ai-panel__suggestions { display: flex; flex-wrap: wrap; gap: 6px; padding: 0 18px 12px; }
        .ai-panel__suggestions button { font-size: 11.5px; font-family: var(--font-utility); padding: 6px 11px; border-radius: 999px; border: 1px solid var(--moss-300); background: var(--cream); color: var(--moss-900); cursor: pointer; transition: background 0.2s; }
        .ai-panel__suggestions button:hover { background: var(--moss-100); }
        .ai-panel__input { display: flex; gap: 8px; padding: 12px 14px; border-top: 1px solid var(--cream-deep); background: #fff; }
        .ai-panel__input input { flex: 1; border: 1px solid var(--moss-100); border-radius: 999px; padding: 9px 14px; font-family: var(--font-body); font-size: 14px; }
        .ai-panel__input input:focus { outline: none; border-color: var(--moss-500); }
        .ai-panel__input button { width: 36px; height: 36px; border-radius: 50%; background: var(--moss-900); color: var(--gold-300); border: none; display: flex; align-items: center; justify-content: center; flex-shrink: 0; cursor: pointer; }
      `}</style>
    </>
  );
}

