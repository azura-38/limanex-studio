import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import clsx from "clsx";

export function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Apps", path: "/apps" },
    { name: "Games", path: "/games" },
    { name: "Privacy", path: "/privacy" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-outline bg-background/80 backdrop-blur-2xl">
      <div className="flex justify-between items-center h-16 max-w-[1100px] mx-auto px-6">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300">
          <svg width="130" height="26" viewBox="0 0 250 50" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
            <defs>
              <linearGradient id="logo-gradient" x1="0" y1="0" x2="250" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#4F7CFF" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
            <path d="M 15 12 V 32 Q 15 38 21 38 H 30" stroke="white" />
            <path d="M 45 12 V 38" stroke="white" />
            <path d="M 58 38 V 16 Q 58 12 62 16 L 73 28 L 84 16 Q 88 12 88 16 V 38" stroke="white" />
            <path d="M 103 38 L 112 16 Q 115 8 118 16 L 127 38" stroke="white" />
            <path d="M 108 28 H 122" stroke="white" />
            <path d="M 143 38 V 16 Q 143 12 147 16 L 163 32 Q 168 38 168 32 V 12" stroke="white" />
            <path d="M 203 12 H 189 Q 183 12 183 18 V 32 Q 183 38 189 38 H 203" stroke="white" />
            <path d="M 183 25 H 196" stroke="white" />
            <path d="M 218 12 L 225 21" stroke="url(#logo-gradient)" />
            <path d="M 229 27 L 238 38 M 238 12 L 218 38" stroke="white" />
          </svg>
          <span className="text-[14px] font-bold text-white tracking-[0.2em] uppercase mt-1">
            Studio
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
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
        <div className="md:hidden">
          <Menu className="text-on-background w-6 h-6" />
        </div>
      </div>
    </nav>
  );
}
