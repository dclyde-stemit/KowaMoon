import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "light" | "dark";
type ColorTheme = "default" | "blue" | "purple" | "green" | "rose" | "amber";

interface ThemeContextType {
  theme: Theme;
  colorTheme: ColorTheme;
  toggleTheme: () => void;
  setColorTheme: (theme: ColorTheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme") as Theme;
      return saved || "dark";
    }
    return "dark";
  });

  const [colorTheme, setColorThemeState] = useState<ColorTheme>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("colorTheme") as ColorTheme;
      return saved || "default";
    }
    return "default";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-color-theme", colorTheme);
    localStorage.setItem("colorTheme", colorTheme);
  }, [colorTheme]);

  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  };

  const setColorTheme = (newTheme: ColorTheme) => {
    setColorThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, colorTheme, toggleTheme, setColorTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
