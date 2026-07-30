import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;

    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle(
        "dark",
        saved === "dark"
      );
      return;
    }

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    setTheme(prefersDark ? "dark" : "light");

    document.documentElement.classList.toggle(
      "dark",
      prefersDark
    );
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";

    setTheme(next);

    document.documentElement.classList.toggle(
      "dark",
      next === "dark"
    );

    localStorage.setItem("theme", next);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error("useTheme must be used inside ThemeProvider");

  return context;
};