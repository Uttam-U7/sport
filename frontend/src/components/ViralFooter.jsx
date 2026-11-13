import { useState } from "react";

export default function ViralFooter() {
  const [choice, setChoice] = useState(null);

  return (
    <footer
      id="viral-footer"
      className="flex h-16 shrink-0 items-center border-t border-black/10 bg-white px-5 sm:px-10"
    >
      {choice ? (
        <div
          className="mx-auto flex w-full max-w-4xl items-center gap-2"
          aria-live="polite"
        >
          <img
            src="/viral-moment.svg"
            alt="A sports champion celebrating with a gold medal"
            className="h-12 w-16 shrink-0 rounded-lg object-cover"
          />
          <p className="text-sm font-semibold text-neutral-800">
            {choice === "yes"
              ? "Here’s your viral sports moment!"
              : "You missed it! Here’s the image."}
          </p>
        </div>
      ) : (
        <div className="mx-auto flex w-full max-w-4xl items-center justify-between gap-2">
          <p className="text-sm font-medium text-neutral-800 sm:text-lg">
            Do you want to see something viral?
          </p>
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setChoice("yes")}
              className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 sm:px-7 sm:py-2.5 sm:text-base"
            >
              Yes
            </button>
            <button
              type="button"
              onClick={() => setChoice("no")}
              className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-neutral-800 transition hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 sm:px-7 sm:py-2.5 sm:text-base"
            >
              No
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
