import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="w-full py-16 border-t border-outline bg-surface mt-auto">
      <div className="max-w-[1100px] mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="flex flex-col gap-4">
          <span className="text-[12px] font-semibold leading-relaxed text-on-surface-variant flex items-center gap-2">
            LIMANEX STUDIO
          </span>
          <p className="text-[12px] leading-relaxed text-on-surface-variant/80">
            © 2026 LIMANEX STUDIO. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[12px] leading-relaxed">
          <Link to="/privacy" className="text-on-surface-variant/80 hover:text-on-surface transition-colors duration-200">
            Privacy Policy
          </Link>
          <a href="#" className="text-on-surface-variant/80 hover:text-on-surface transition-colors duration-200">
            Terms of Service
          </a>
          <a href="#" className="text-on-surface-variant/80 hover:text-on-surface transition-colors duration-200">
            Cookie Settings
          </a>
          <a href="#" className="text-on-surface-variant/80 hover:text-on-surface transition-colors duration-200">
            Legal
          </a>
        </div>
      </div>
    </footer>
  );
}
