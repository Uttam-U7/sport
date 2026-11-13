import { useEffect } from "react";

const medalIcons = {
  gold: "🥇",
  silver: "🥈",
  bronze: "🥉",
};

export default function MedalistPopup({ medalist, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!medalist) return null;

  const total = medalist.gold + medalist.silver + medalist.bronze;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="medalist-modal-title"
    >
      <div
        className="relative max-h-[90vh] w-full max-w-[480px] overflow-y-auto rounded-lg bg-white p-6 shadow-2xl sm:p-7"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-neutral-100 text-2xl font-light text-neutral-500 transition-colors hover:bg-neutral-200 hover:text-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400"
          aria-label="Close details"
        >
          ×
        </button>

        <div className="pr-10">
          <h2
            id="medalist-modal-title"
            className="text-2xl font-bold tracking-tight text-neutral-900"
          >
            {medalist.name}
          </h2>
          <p className="mt-1 text-sm font-medium text-neutral-500">
            {total} Olympic {total === 1 ? "medal" : "medals"}
          </p>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-2.5">
          {[
            ["Gold", medalist.gold, "amber"],
            ["Silver", medalist.silver, "slate"],
            ["Bronze", medalist.bronze, "orange"],
          ].map(([label, count, color]) => (
            <div
              key={label}
              className={`flex flex-col items-center rounded-xl border py-3.5 px-2 ${
                color === "amber"
                  ? "border-amber-200/60 bg-amber-50/70"
                  : color === "slate"
                    ? "border-slate-200/80 bg-slate-50"
                    : "border-orange-200/60 bg-orange-50/70"
              }`}
            >
              <span className="mb-0.5 text-2xl">
                {medalIcons[label.toLowerCase()]}
              </span>
              <span className="text-xs font-semibold text-neutral-600">
                {label}
              </span>
              <strong className="mt-0.5 text-xl font-bold text-neutral-900">
                {count}
              </strong>
            </div>
          ))}
        </div>

        <h3 className="mb-3 mt-6 text-base font-semibold text-neutral-900">
          Medal details
        </h3>
        <div className="flex flex-col gap-2">
          {medalist.achievements.map((achievement, index) => (
            <div
              key={`${achievement.sport}-${achievement.year}-${achievement.event}-${index}`}
              className="flex items-start gap-3 rounded-xl border border-neutral-100 bg-neutral-50 p-3"
            >
              <span className="shrink-0 text-2xl">
                {medalIcons[achievement.medal]}
              </span>
              <div className="flex min-w-0 flex-col">
                <strong className="text-sm font-semibold text-neutral-900">
                  {achievement.sport} · {achievement.event}
                </strong>
                <span className="mt-1 text-xs font-medium text-neutral-500">
                  {achievement.year} · {achievement.Host_City}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
