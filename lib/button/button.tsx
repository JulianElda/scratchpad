import type { ButtonProperties } from "lib/button/button.types";

import { clsx } from "clsx";

export function Button(properties: ButtonProperties) {
  return (
    <button
      aria-label={properties.text}
      className={clsx(
        `
          cursor-pointer appearance-none rounded-lg p-2 text-lg shadow-sm
          hover:border-primary-500 hover:bg-primary-500
          focus:ring-primary-300
          focus-visible:outline focus-visible:outline-offset-2
          focus-visible:outline-primary-300
          active:bg-primary-700
          dark:hover:bg-primary-500
        `,
        properties.style === "primary" &&
          "border-primary-700 bg-primary-700 text-ink-white",
        properties.style === "secondary" &&
          `
            border border-ink-500 bg-card-background-light text-ink-black
            hover:text-white
            dark:bg-slate dark:text-ink-white
          `
      )}
      data-testid={properties.id}
      id={properties.id}
      onClick={() => properties.onClick()}
      type={properties.type || "button"}>
      {properties.text}
    </button>
  );
}
