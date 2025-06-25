import { ThemeSun } from "lib/icons";

type FooterContentDarkProps = {
  onToggleDarkMode: () => void;
};

export function FooterContentDark(props: FooterContentDarkProps) {
  return (
    <button
      type="button"
      aria-label="Toggle light mode"
      data-testid="footer-toggle-light"
      className="size-8 cursor-pointer rounded-md bg-app-background-light p-1 text-app-text-light"
      onClick={() => props.onToggleDarkMode()}>
      <ThemeSun className="size-6 stroke-2" />
    </button>
  );
}
