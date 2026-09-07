import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Shield, FileText, AlertTriangle, Mail, ChevronRight, ArrowLeft } from "lucide-react";
import clsx from "clsx";

const legalLinks = [
  { name: "VitaCase Privacy Policy", path: "/privacy/vitacase", icon: FileText },
  { name: "VitaCase Terms & Conditions", path: "/terms/vitacase", icon: FileText },
  { name: "VitaCase Disclaimer", path: "/disclaimer/vitacase", icon: AlertTriangle },
  { name: "Contact Support", path: "/contact", icon: Mail },
];

interface LegalLayoutProps {
  title: string;
  subtitle?: string;
  badge?: string;
  badgeIcon?: typeof Shield;
  children: ReactNode;
}

export function LegalLayout({
  title,
  subtitle,
  badge,
  badgeIcon: BadgeIcon = Shield,
  children,
}: LegalLayoutProps) {
  const location = useLocation();

  return (
    <main id="main-content" className="flex-grow pt-32 pb-32 px-6 max-w-[1200px] mx-auto w-full relative">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Header */}
      <header className="mb-12 text-center max-w-2xl mx-auto">
        {badge && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-4 text-xs font-semibold text-accent-400">
            <BadgeIcon className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{badge}</span>
          </div>
        )}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xs sm:text-sm uppercase tracking-[0.16em] text-gray-400 font-semibold">
            {subtitle}
          </p>
        )}
      </header>

      {/* Mobile Back Link & Horizontal Selector */}
      <div className="lg:hidden mb-6 flex flex-col gap-3">
        <Link
          to="/privacy"
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-white transition-colors py-2 px-3.5 rounded-xl glass self-start min-h-[40px]"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Applications</span>
        </Link>
        <div className="overflow-x-auto pb-2 hide-scrollbar">
          <div className="flex items-center gap-2 w-max px-1">
            {legalLinks.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  aria-current={isActive ? "page" : undefined}
                  className={clsx(
                    "flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all min-h-[44px]",
                    isActive
                      ? "bg-brand-500 text-white shadow-md shadow-brand-500/25"
                      : "glass text-gray-400 hover:text-white"
                  )}
                >
                  <item.icon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Grid: Sticky Sidebar + Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Desktop Sticky Sidebar */}
        <aside className="hidden lg:block lg:col-span-4 sticky top-28" aria-label="Legal document navigation">
          <div className="glass-card p-6 border border-white/[0.08] space-y-6">
            <Link
              to="/privacy"
              className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/5 w-full"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-brand-300" />
              <span>Back to App Selection</span>
            </Link>

            <div className="text-xs font-bold uppercase tracking-widest text-gray-400 px-3 pt-2 border-t border-white/[0.06]">
              VitaCase Legal
            </div>

            <nav className="space-y-1.5" aria-label="Legal pages">
              {legalLinks.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    aria-current={isActive ? "page" : undefined}
                    className={clsx(
                      "flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium transition-all group min-h-[44px]",
                      isActive
                        ? "bg-white/[0.08] text-white border border-white/10 shadow-sm"
                        : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon
                        className={clsx(
                          "w-4 h-4 transition-colors",
                          isActive ? "text-accent-400" : "text-gray-400 group-hover:text-gray-300"
                        )}
                        aria-hidden="true"
                      />
                      <span>{item.name}</span>
                    </div>
                    {isActive ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-gray-400 group-hover:translate-x-0.5 transition-transform" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-white/[0.06] px-3">
              <p className="text-xs text-gray-400 leading-relaxed">
                Need help or have questions regarding data privacy? Contact our team directly.
              </p>
              <a
                href="mailto:limanexsoftware@outlook.com"
                className="mt-3 inline-flex items-center gap-2 text-xs text-brand-300 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                <span>limanexsoftware@outlook.com</span>
              </a>
            </div>
          </div>
        </aside>

        {/* Content Column */}
        <div className="lg:col-span-8 w-full">
          <div className="glass-card p-8 sm:p-12 border border-white/[0.08]">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
