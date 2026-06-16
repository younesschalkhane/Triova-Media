import { createContext, useContext, useState, useEffect } from "react";

/**
 * Contexte pour gérer le thème clair / sombre de l'interface admin.
 * La préférence est sauvegardée dans localStorage.
 */
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Initialiser l'état depuis localStorage ou la préférence système
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("admin-theme");
    if (saved !== null) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("admin-theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme doit être utilisé dans un ThemeProvider");
  }
  return context;
}