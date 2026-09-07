import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Apps", path: "/apps" },
  { name: "Games", path: "/games" },
  { name: "AI", path: "/ai" },
  { name: "Legal", path: "/privacy" },
];

export function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const toggleMenu = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMobileOpen(false);
  }, []);

  const isLinkActive = useCallback(
    (path: string) => {
      if (path === "/") return location.pathname === "/";
      if (path === "/privacy") {
        return (
          location.pathname.startsWith("/privacy") ||
          location.pathname.startsWith("/terms") ||
          location.pathname.startsWith("/disclaimer") ||
          location.pathname === "/legal"
        );
      }
      return location.pathname.startsWith(path);
    },
    [location.pathname]
  );

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "glass shadow-xl shadow-black/40 border-b border-white/[0.08] py-3.5"
          : "bg-transparent py-5"
      )}
      aria-label="Main navigation"
    >
      <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
          aria-label="Limanex Studio — Home"
        >
          <img
            src="/logo-full-nav.webp"
            alt="Limanex Studio Logo"
            width="185"
            height="32"
            decoding="async"
            className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1.5">
          {navLinks.map((link) => {
            const isActive = isLinkActive(link.path);
            return (
              <Link
                key={link.name}
                to={link.path}
                aria-current={isActive ? "page" : undefined}
                className={clsx(
                  "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                  isActive
                    ? "text-white bg-white/[0.08] shadow-sm shadow-brand-500/20"
                    : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                )}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Contact CTA in Nav */}
          <Link
            to="/contact"
            className="ml-3 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 hover:brightness-110 text-white text-sm font-semibold transition-all duration-200 hover:scale-[1.03] shadow-md shadow-brand-500/25"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden p-2.5 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={toggleMenu}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-menu"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden glass border-t border-white/[0.08] shadow-2xl animate-fade-in"
          role="menu"
        >
          <div className="px-6 py-5 flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  role="menuitem"
                  onClick={closeMenu}
                  aria-current={isActive ? "page" : undefined}
                  className={clsx(
                    "px-4 py-3.5 rounded-xl text-base font-medium transition-colors min-h-[48px] flex items-center justify-between",
                    isActive
                      ? "text-white bg-white/[0.08]"
                      : "text-gray-300 hover:text-white hover:bg-white/[0.04]"
                  )}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-brand-400" />}
                </Link>
              );
            })}
            <div className="pt-2">
              <Link
                to="/contact"
                onClick={closeMenu}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-white font-semibold text-center shadow-lg shadow-brand-500/25"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
