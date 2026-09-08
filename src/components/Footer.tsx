import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#0a0a0f]/80 backdrop-blur-lg mt-auto pt-16 pb-12" role="contentinfo">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand Col */}
          <div className="flex flex-col gap-4 max-w-sm">
            <div className="flex items-center gap-3">
              <img
                src="/logo-icon-sm.webp"
                alt="Limanex Mark"
                width="32"
                height="32"
                className="w-8 h-8 rounded-lg object-contain"
              />
              <span className="font-semibold text-lg tracking-tight text-white">
                LIMANEX <span className="gradient-text font-bold">STUDIO</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Precision-engineered apps and games designed for the future. Built with uncompromising craft and attention to detail.
            </p>
            <div className="pt-2">
              <a
                href="mailto:limanexsoftware@outlook.com"
                className="inline-flex items-center gap-2 text-xs text-gray-300 hover:text-white transition-colors glass-pill px-3.5 py-2 rounded-xl"
              >
                <Mail className="w-3.5 h-3.5 text-brand-400" aria-hidden="true" />
                <span>limanexsoftware@outlook.com</span>
              </a>
            </div>
          </div>

          {/* Navigation & Legal Links */}
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                Navigation
              </div>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/apps" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Apps
                  </Link>
                </li>
                <li>
                  <Link to="/games" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Games
                  </Link>
                </li>
                <li>
                  <Link to="/ai" className="text-gray-400 hover:text-white transition-colors duration-200">
                    AI Initiative
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                Legal &amp; Trust
              </div>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Legal Center
                  </Link>
                </li>
                <li>
                  <Link to="/privacy/meowoirs" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Meowoirs Privacy
                  </Link>
                </li>
                <li>
                  <Link to="/terms/meowoirs" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Meowoirs Terms
                  </Link>
                </li>
                <li>
                  <Link to="/privacy/vitacase" className="text-gray-400 hover:text-white transition-colors duration-200">
                    VitaCase Legal
                  </Link>
                </li>
                <li>
                  <a href="mailto:limanexsoftware@outlook.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} LIMANEX STUDIO. All rights reserved.</p>
          <p className="text-gray-400 text-[11px]">
            Designed &amp; Engineered for High Performance
          </p>
        </div>
      </div>
    </footer>
  );
}
