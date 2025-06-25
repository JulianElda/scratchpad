import { clsx } from "clsx";
import type { ButtonProps } from "lib/button/button.types";

export function Button(props: ButtonProps) {
  return (
    <button
      type={props.type || "button"}
      id={props.id}
      data-testid={props.id}
      aria-label={props.text}
      onClick={() => props.onClick()}
      className={clsx(
        "cursor-pointer appearance-none rounded-lg p-2 text-lg shadow-sm hover:border-primary-500 hover:bg-primary-500 focus:ring-primary-300 focus-visible:outline focus-visible:outline-primary-300 focus-visible:outline-offset-2 active:bg-primary-700 dark:hover:bg-primary-500",
        props.style === "primary" &&
          "border-primary-700 bg-primary-700 text-ink-white",
        props.style === "secondary" &&
          "border border-ink-500 bg-card-background-light text-ink-black hover:text-white dark:bg-slate dark:text-ink-white"
      )}>
      {props.text}
    </button>
  );
}
