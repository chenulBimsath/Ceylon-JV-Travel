import { useState } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

const SUGGESTIONS = ["I have 7 days and $1000", "Best beaches for a honeymoon", "Family trip with kids"];

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "ai", text: "Hi, I'm the Ceylon JV travel assistant. Tell me your days and budget and I'll suggest a route." },
  ]);
  const [input, setInput] = useState("");

  const send = (text) => {
    const value = text ?? input;
    if (!value.trim()) return;
    setMessages((m) => [...m, { from: "user", text: value }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          from: "ai",
          text: "Based on that, I'd suggest Kandy \u2192 Nuwara Eliya \u2192 Ella \u2192 Mirissa \u2014 a mix of culture, tea country, and beach. Want me to pass this to a specialist for a full itinerary?",
        },
      ]);
    }, 700);
  };

  return (
    <>
      <button className={`ai-fab ${open ? "ai-fab--hidden" : ""}`} onClick={() => setOpen(true)} aria-label="Open travel assistant">
        <Sparkles size={20} strokeWidth={1.6} />
      </button>

      <div className={`ai-panel ${open ? "ai-panel--open" : ""}`}>
        <div className="ai-panel__head">
          <div>
            <p className="ai-panel__title"><Sparkles size={15} strokeWidth={1.8} /> Travel Assistant</p>
            <p className="ai-panel__sub">Usually replies instantly</p>
          </div>
          <button onClick={() => setOpen(false)} aria-label="Close"><X size={18} /></button>
        </div>

        <div className="ai-panel__body">
          {messages.map((m, i) => (
            <div key={i} className={`ai-msg ai-msg--${m.from}`}>{m.text}</div>
          ))}
        </div>

        {messages.length < 3 && (
          <div className="ai-panel__suggestions">
            {SUGGESTIONS.map((s) => (
              <button key={s} onClick={() => send(s)}>{s}</button>
            ))}
          </div>
        )}

        <form className="ai-panel__input" onSubmit={(e) => { e.preventDefault(); send(); }}>
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about your trip..." />
          <button type="submit" aria-label="Send"><Send size={16} strokeWidth={1.8} /></button>
        </form>
      </div>

      <style>{`
        .ai-fab { position: fixed; right: 26px; bottom: 26px; z-index: 60; width: 56px; height: 56px; border-radius: 50%; background: var(--moss-900); color: var(--gold-200,#F5EAD0); border: none; display: flex; align-items: center; justify-content: center; box-shadow: var(--shadow-md); transition: transform 0.3s ease, opacity 0.3s ease; animation: floatY 4s ease-in-out infinite; }
        .ai-fab:hover { transform: scale(1.08); }
        .ai-fab--hidden { opacity: 0; pointer-events: none; transform: scale(0.6); }
        .ai-panel { position: fixed; right: 26px; bottom: 26px; z-index: 60; width: 340px; max-width: 90vw; background: #fff; border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); display: flex; flex-direction: column; overflow: hidden; transform: translateY(16px) scale(0.96); opacity: 0; pointer-events: none; transition: transform 0.3s var(--ease-out), opacity 0.3s ease; }
        .ai-panel--open { transform: translateY(0) scale(1); opacity: 1; pointer-events: auto; }
        .ai-panel__head { background: var(--moss-900); color: #fff; padding: 16px 18px; display: flex; align-items: flex-start; justify-content: space-between; }
        .ai-panel__title { display: flex; align-items: center; gap: 6px; margin: 0; font-family: var(--font-utility); font-size: 14.5px; font-weight: 500; }
        .ai-panel__sub { margin: 4px 0 0; font-size: 11.5px; color: rgba(255,255,255,0.6); }
        .ai-panel__head button { background: none; border: none; color: rgba(255,255,255,0.75); }
        .ai-panel__body { padding: 16px 18px; display: flex; flex-direction: column; gap: 10px; max-height: 260px; overflow-y: auto; }
        .ai-msg { font-size: 14px; line-height: 1.5; padding: 10px 13px; border-radius: 14px; max-width: 85%; }
        .ai-msg--ai { background: var(--cream-deep); color: var(--ink); align-self: flex-start; border-bottom-left-radius: 4px; }
        .ai-msg--user { background: var(--moss-900); color: #F5EAD0; align-self: flex-end; border-bottom-right-radius: 4px; }
        .ai-panel__suggestions { display: flex; flex-wrap: wrap; gap: 8px; padding: 0 18px 12px; }
        .ai-panel__suggestions button { font-size: 12px; font-family: var(--font-utility); padding: 7px 12px; border-radius: 999px; border: 1px solid var(--moss-100); background: var(--cream); color: var(--moss-700); }
        .ai-panel__input { display: flex; gap: 8px; padding: 14px 16px; border-top: 1px solid var(--cream-deep); }
        .ai-panel__input input { flex: 1; border: 1px solid var(--moss-100); border-radius: 999px; padding: 10px 14px; font-family: var(--font-body); font-size: 14px; }
        .ai-panel__input input:focus { outline: none; border-color: var(--moss-500); }
        .ai-panel__input button { width: 38px; height: 38px; border-radius: 50%; background: var(--moss-900); color: #fff; border: none; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
      `}</style>
    </>
  );
}
