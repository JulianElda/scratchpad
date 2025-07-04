import useCookie from "lib/commons/use-cookie";
import { useEffect, useState } from "react";

const COOKIE_KEY = "dark-theme";
const DARKMODE_CLASS = "dark";

export function useDarkMode(initialValue = false): [boolean, () => void] {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(initialValue);
  const [cookieValue, setCookieValue] = useCookie(COOKIE_KEY);

  useEffect(() => {
    const prefersDark = globalThis.matchMedia?.(
      "(prefers-color-scheme: dark)"
    ).matches;

    const shouldUseDark =
      cookieValue === "true" || (!cookieValue && prefersDark);
    setIsDarkMode(shouldUseDark);

    document.documentElement.classList.toggle(DARKMODE_CLASS, shouldUseDark);
  }, [cookieValue]);

  const toggleDarkMode = () => {
    const newValue = !isDarkMode;
    setIsDarkMode(newValue);
    setCookieValue(String(newValue), { expires: 30 });

    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle(DARKMODE_CLASS, newValue);
    }
  };

  return [isDarkMode, toggleDarkMode];
}
