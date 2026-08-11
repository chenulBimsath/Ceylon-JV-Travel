import { Compass } from "lucide-react";

export default function LoadingScreen({ done }) {
  return (
    <div className={`loading ${done ? "loading--done" : ""}`}>
      <div className="loading__mark">
        <Compass size={30} strokeWidth={1.1} color="#F5EAD0" />
      </div>
      <div className="loading__word">Ceylon&nbsp;JV</div>
      <div className="loading__caption">Preparing your journey to Sri Lanka</div>
      <div className="loading__track"><div className="loading__fill" /></div>

      <style>{`
        .loading {
          position: fixed; inset: 0; z-index: 200;
          background: radial-gradient(circle at 50% 40%, #202B18 0%, #14180F 100%);
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          transition: opacity 0.9s ease, visibility 0.9s ease;
          opacity: 1; visibility: visible;
        }
        .loading--done { opacity: 0; visibility: hidden; }
        .loading__mark {
          width: 66px; height: 66px; border-radius: 50%;
          border: 1px solid rgba(245,234,208,0.35);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 22px;
          animation: loadPulse 1.8s ease-in-out infinite, spin 9s linear infinite;
        }
        .loading__word {
          font-family: var(--font-display); font-style: italic; font-weight: 500;
          font-size: 30px; letter-spacing: 0.5px; color: #F5EAD0; margin-bottom: 8px;
        }
        .loading__caption {
          font-family: var(--font-utility); font-size: 13px; letter-spacing: 2px;
          text-transform: uppercase; color: rgba(245,234,208,0.55); margin-bottom: 26px;
        }
        .loading__track { width: 180px; height: 1px; background: rgba(245,234,208,0.2); position: relative; overflow: hidden; }
        .loading__fill { position: absolute; left: -40%; top: 0; bottom: 0; width: 40%; background: var(--gold-500); animation: loadSweep 2.1s ease-in-out infinite; }
        @keyframes loadPulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.06); opacity: 0.75; } }
        @keyframes loadSweep { 0% { left: -40%; } 100% { left: 100%; } }
      `}</style>
    </div>
  );
}
