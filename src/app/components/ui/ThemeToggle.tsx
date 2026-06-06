"use client";

import { useSyncExternalStore } from "react";
import { HiSun } from "react-icons/hi";
import { PiMoonFill } from "react-icons/pi";

type Theme = "light" | "dark";

const getTheme = (): Theme =>
  document.documentElement.classList.contains("dark") ? "dark" : "light";

const getServerTheme = (): Theme => "light";

const subscribe = (onStoreChange: () => void) => {
  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
};

const applyTheme = (theme: Theme) => {
  document.documentElement.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
};

const ThemeToggle = () => {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);

  const toggleTheme = () => {
    applyTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="flex p-2.5 shrink-0 items-center justify-center rounded-full bg-black dark:bg-gray text-white dark:text-black transition-colors duration-300 hover:bg-black/10 dark:hover:bg-gray/30 hover:text-foreground dark:hover:text-gray cursor-pointer"
    >
      {theme === "dark" ? (
        <HiSun size={20} aria-hidden />
      ) : (
        <PiMoonFill size={20} aria-hidden />
      )}
    </button>
  );
};

export default ThemeToggle;
