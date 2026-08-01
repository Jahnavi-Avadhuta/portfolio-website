import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";

import { NAV_LINKS } from "../../constants/navigation";
import { siteConfig } from "../../config/site";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleEscape);

    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav
        className="fixed left-0 top-0 z-50 w-full backdrop-blur-md shadow-sm transition-colors duration-300"
        style={{
          background: "color-mix(in srgb, var(--background) 85%, transparent)",
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
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              className="md:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={28} style={{ color: "var(--text)" }} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
            />

            {/* Mobile Drawer */}
            <motion.div
              ref={drawerRef}
              onClick={(e) => e.stopPropagation()}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 30,
              }}
              className="fixed right-0 top-0 z-50 flex h-screen w-80 max-w-[85vw] flex-col shadow-2xl md:hidden"
              style={{
                background: "var(--background)",
                borderLeft: "1px solid var(--border)",
              }}
            >
              {/* Header */}
              <div
                className="flex items-center justify-between border-b p-5"
                style={{ borderColor: "var(--border)" }}
              >
                <h2
                  className="text-xl font-bold"
                  style={{ color: "var(--text)" }}
                >
                  Menu
                </h2>

                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full p-2 transition hover:bg-white/10"
                  aria-label="Close Menu"
                >
                  <X size={24} style={{ color: "var(--text)" }} />
                </button>
              </div>

              {/* Navigation */}
              <div className="flex flex-1 flex-col py-4">
                {NAV_LINKS.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="px-6 py-4 text-lg font-medium transition-all duration-200 hover:bg-blue-500/10 hover:text-blue-500"
                    style={{ color: "var(--text)" }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Footer */}
              <div
                className="border-t p-6 text-center text-sm"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text-light)",
                }}
              >
                © {new Date().getFullYear()} {siteConfig.name}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;