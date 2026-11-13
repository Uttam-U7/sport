const ranks = ["1st", "2nd", "3rd"];
const avatars = [
  "/players/medalist-1.svg",
  "/players/medalist-2.svg",
  "/players/medalist-3.svg",
];

export default function Navbar({ medalists, onMedalistClick }) {
  return (
    <header className="relative z-10 flex shrink-0 items-center justify-between gap-2 border-b border-black/5 bg-white/80 px-3 py-2 shadow-sm backdrop-blur sm:px-10 sm:py-3 md:gap-4 md:px-8 md:py-5">
      <p className="shrink-0 text-xs font-medium text-neutral-800 sm:text-base md:text-sm">
        Data - 13/10/2026
      </p>
      <section
        aria-label="Top medalists"
        className="flex shrink-0 items-center justify-end gap-1 sm:gap-4 md:gap-5"
      >
        {medalists.map((medalist, index) => (
          <button
            key={medalist.name}
            type="button"
            onClick={() => onMedalistClick(medalist)}
            aria-label={`View details for ${ranks[index]} place medalist ${medalist.name}`}
            className="flex w-9 cursor-pointer flex-col items-center rounded-md text-center transition hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400 sm:w-[88px] md:w-auto md:flex-row md:gap-2 md:text-left"
          >
            <span className="mb-0.5 text-[9px] font-bold leading-none text-neutral-700 sm:mb-1 sm:text-[11px] md:mb-0 md:text-[10px]">
              {ranks[index]}
            </span>
            <img
              src={avatars[index]}
              alt={`${medalist.name}, ${ranks[index]} place`}
              className="h-8 w-8 rounded-full border border-black/10 bg-neutral-50 object-cover shadow-sm sm:h-12 sm:w-12 md:h-9 md:w-9"
            />
            <div className="hidden sm:flex sm:w-full sm:flex-col sm:items-center md:w-auto md:items-start">
              <span className="mt-1 w-full truncate text-xs font-semibold text-neutral-800 md:mt-0 md:text-[10px]"> 
                {medalist.name}
              </span>
              <span className="text-[10px] text-neutral-500 md:text-[12px]">
                🥇 {medalist.gold} · 🥈 {medalist.silver} · 🥉 {medalist.bronze}
              </span>
            </div>
          </button>
        ))}
      </section>
    </header>
  );
}
