import { useState, useEffect } from "react";

const medalIcons = {
  gold: "🥇",
  silver: "🥈",
  bronze: "🥉",
};

export default function SportsPopup({ sport, onClose }) {
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!sport) return null;

  const { gold, silver, bronze } = sport.medals;
  const total = gold + silver + bronze;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&family=Nunito:wght@400;500;600;700;800&display=swap');

        .sports-popup-shell {
          font-family: 'Nunito', 'Segoe UI', sans-serif;
          line-height: 1.4;
        }

        .sports-popup-title,
        .sports-popup-section-title {
          font-family: 'Baloo 2', 'Segoe UI', sans-serif;
          letter-spacing: 0.02em;
        }

        .sports-popup-subtext,
        .sports-popup-meta,
        .sports-popup-entry strong,
        .sports-popup-entry span {
          font-family: 'Nunito', 'Segoe UI', sans-serif;
        }
      `}</style>

      <div
        className="sports-popup-shell fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sport-modal-title"
      >
        <div
          className="relative w-full max-w-[480px] max-h-[90vh] overflow-y-auto rounded-[05px] bg-white p-6 sm:p-7 shadow-2xl transition-all animate-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-500 hover:text-neutral-800 transition-colors text-2xl font-light cursor-pointer focus:outline-none focus:ring-2 focus:ring-neutral-400"
            aria-label="Close details"
          >
            ×
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-4 pr-10">
            <div className="w-[70px] h-[70px] shrink-0 flex items-center justify-center rounded-full bg-neutral-100 shadow-inner">
              {!logoError && sport.logo ? (
                <img
                  src={sport.logo}
                  alt={sport.name}
                  className="w-[55%] h-[55%] object-contain select-none"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span className="text-3xl select-none">{sport.icon}</span>
              )}
            </div>

            <div>
              <h2 id="sport-modal-title" className="sports-popup-title text-2xl font-bold text-neutral-900 tracking-tight">
                {sport.name}
              </h2>
              <p className="sports-popup-subtext text-sm font-medium text-neutral-500 mt-1">
                {total} medals
              </p>
            </div>
          </div>

          {/* Medal Summary */}
          <div className="grid grid-cols-3 gap-2.5 mt-6">
            <div className="flex flex-col items-center justify-center py-3.5 px-2 rounded-[18px] bg-amber-50/70 border border-amber-200/60">
              <span className="text-2xl mb-0.5">🥇</span>
              <span className="sports-popup-meta text-xs font-semibold text-amber-700">Gold</span>
              <strong className="sports-popup-meta text-xl font-bold text-amber-900 mt-0.5">{gold}</strong>
            </div>

            <div className="flex flex-col items-center justify-center py-3.5 px-2 rounded-[18px] bg-slate-50 border border-slate-200/80">
              <span className="text-2xl mb-0.5">🥈</span>
              <span className="sports-popup-meta text-xs font-semibold text-slate-600">Silver</span>
              <strong className="sports-popup-meta text-xl font-bold text-slate-800 mt-0.5">{silver}</strong>
            </div>

            <div className="flex flex-col items-center justify-center py-3.5 px-2 rounded-[18px] bg-orange-50/70 border border-orange-200/60">
              <span className="text-2xl mb-0.5">🥉</span>
              <span className="sports-popup-meta text-xs font-semibold text-orange-700">Bronze</span>
              <strong className="sports-popup-meta text-xl font-bold text-orange-900 mt-0.5">{bronze}</strong>
            </div>
          </div>

          {/* Winners Section */}
          <h3 className="sports-popup-section-title text-base font-semibold text-neutral-900 mt-6 mb-3">
            Medal Winners
          </h3>

          <div className="flex flex-col gap-2">
            {sport.winners.map((winner, index) => (
              <div
                key={index}
                className="sports-popup-entry flex items-center gap-3 p-3 rounded-2xl bg-neutral-50 border border-neutral-100 hover:bg-neutral-100/70 transition-colors"
              >
                <span className="text-2xl shrink-0">
                  {medalIcons[winner.medal]}
                </span>

                <div className="flex flex-col">
                  <strong className="text-sm font-semibold text-neutral-900">
                    {winner.name}
                  </strong>
                  <span className="text-xs text-neutral-500 font-medium">
                    {winner.event}
                  </span>
                  <span className="sports-popup-meta mt-1 text-xs text-neutral-600">
                    {winner.year} · {winner.Host_City}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}