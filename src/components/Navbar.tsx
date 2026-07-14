import { useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Apps", path: "/apps" },
  { name: "Games", path: "/games" },
  { name: "Privacy", path: "/privacy" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMobileOpen(false);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-outline bg-background/80 backdrop-blur-2xl" aria-label="Main navigation">
      <div className="flex justify-between items-center h-16 max-w-[1100px] mx-auto px-6">
        <Link to="/" className="flex items-center hover:opacity-80 transition-opacity duration-300" aria-label="Limanex Studio — Home">
          <img 
            src="/logo-full.webp" 
            alt="Limanex Studio Logo" 
            width="82" 
            height="36" 
            decoding="async"
            className="h-9 w-auto object-contain"
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              aria-current={location.pathname === link.path ? "page" : undefined}
              className={clsx(
                "px-4 py-2 rounded-xl text-sm font-medium tracking-tight transition-all duration-300 active:scale-95",
                location.pathname === link.path
                  ? "bg-surface-bright text-primary"
                  : "text-on-surface-variant hover:bg-surface-bright hover:text-on-background"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg hover:bg-surface-bright transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={toggleMenu}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-menu"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileOpen ? (
            <X className="text-on-background w-6 h-6" />
          ) : (
            <Menu className="text-on-background w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden border-t border-outline bg-background/95 backdrop-blur-2xl"
          role="menu"
        >
          <div className="flex flex-col py-4 px-6 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                role="menuitem"
                onClick={closeMenu}
                aria-current={location.pathname === link.path ? "page" : undefined}
                className={clsx(
                  "px-4 py-3 rounded-xl text-base font-medium tracking-tight transition-all duration-300 min-h-[44px] flex items-center",
                  location.pathname === link.path
                    ? "bg-surface-bright text-primary"
                    : "text-on-surface-variant hover:bg-surface-bright hover:text-on-background"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
