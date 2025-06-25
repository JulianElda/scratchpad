import { ThemeMoon } from "lib/icons";

type FooterContentLightProps = {
  onToggleDarkMode: () => void;
};

export function FooterContentLight(props: FooterContentLightProps) {
  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      data-testid="footer-toggle-dark"
      className="size-8 cursor-pointer rounded-md bg-app-background-dark p-1 text-app-text-dark"
      onClick={() => props.onToggleDarkMode()}>
      <ThemeMoon className="size-6 stroke-2" />
    </button>
  );
}
