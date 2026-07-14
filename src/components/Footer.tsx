import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="w-full py-16 border-t border-outline bg-surface mt-auto" role="contentinfo">
      <div className="max-w-[1100px] mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="flex flex-col gap-4">
          <span className="text-[12px] font-semibold leading-relaxed text-on-surface-variant flex items-center gap-2">
            LIMANEX STUDIO
          </span>
          <p className="text-[12px] leading-relaxed text-on-surface-variant/80">
            © {new Date().getFullYear()} LIMANEX STUDIO. All rights reserved.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[12px] leading-relaxed" aria-label="Footer navigation">
          <Link to="/privacy" className="text-on-surface-variant/80 hover:text-on-surface transition-colors duration-200">
            Privacy Policy
          </Link>
          <Link to="/terms/vitacase" className="text-on-surface-variant/80 hover:text-on-surface transition-colors duration-200">
            Terms &amp; Conditions
          </Link>
          <Link to="/disclaimer/vitacase" className="text-on-surface-variant/80 hover:text-on-surface transition-colors duration-200">
            Disclaimer
          </Link>
          <Link to="/contact" className="text-on-surface-variant/80 hover:text-on-surface transition-colors duration-200">
            Contact Us
          </Link>
          <a href="mailto:limanexsoftware@outlook.com" className="text-on-surface-variant/80 hover:text-on-surface transition-colors duration-200">
            Support
          </a>
        </nav>
      </div>
    </footer>
  );
}
