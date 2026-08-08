"use client";

import { useTheme, type Theme } from "@/app/hooks/useTheme";
import { HiSun } from "react-icons/hi";
import { PiMoonFill } from "react-icons/pi";

const applyTheme = (theme: Theme) => {
  document.documentElement.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
};

const ThemeToggle = () => {
  const theme = useTheme();

  const toggleTheme = () => {
    applyTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
      className="flex size-10 shrink-0 items-center justify-center rounded-full bg-black dark:bg-gray text-white dark:text-black transition-colors duration-300 hover:bg-black/10 dark:hover:bg-gray/30 hover:text-foreground dark:hover:text-gray cursor-pointer"
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
