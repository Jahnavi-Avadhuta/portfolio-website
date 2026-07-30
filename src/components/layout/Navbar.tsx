import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

import { NAV_LINKS } from "../../constants/navigation";
import { siteConfig } from "../../config/site";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className="fixed left-0 top-0 z-50 w-full backdrop-blur-md shadow-sm transition-colors duration-300"
      style={{
        background:
          "color-mix(in srgb, var(--background) 85%, transparent)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="container-custom flex h-16 items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl font-bold text-blue-600 transition-colors hover:text-blue-700"
        >
          {siteConfig.name.split(" ")[0]}
          <span style={{ color: "var(--text)" }}>.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-medium transition-colors duration-200 hover:text-blue-600"
              style={{ color: "var(--text)" }}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="rounded-full p-2 transition-all duration-300 hover:scale-110"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              color: "var(--text)",
            }}
          >
            {theme === "dark" ? (
              <Sun
                size={20}
                className="transition-transform duration-300 rotate-0"
              />
            ) : (
              <Moon
                size={20}
                className="transition-transform duration-300 rotate-0"
              />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="rounded-md p-1 transition-colors md:hidden"
            style={{ color: "var(--text)" }}
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
        style={{
          background: "var(--surface)",
          borderTop: open ? "1px solid var(--border)" : "none",
        }}
      >
        {NAV_LINKS.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setOpen(false)}
            className="block px-6 py-4 font-medium transition-all duration-200 hover:text-blue-600"
            style={{
              color: "var(--text)",
            }}
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;