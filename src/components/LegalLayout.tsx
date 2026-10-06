import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Shield, FileText, AlertTriangle, Mail, ChevronRight, ArrowLeft, ArrowRightLeft, Trash2 } from "lucide-react";
import clsx from "clsx";

interface LegalLinkItem {
  name: string;
  path: string;
  matchPaths?: string[];
  icon: typeof FileText;
}

interface LegalLayoutProps {
  title: string;
  subtitle?: string;
  badge?: string;
  badgeIcon?: typeof Shield;
  app?: "vitacase" | "meowoirs";
  children: ReactNode;
}

export function LegalLayout({
  title,
  subtitle,
  badge,
  badgeIcon: BadgeIcon = Shield,
  app,
  children,
}: LegalLayoutProps) {
  const location = useLocation();
  const pathname = location.pathname.toLowerCase();

  // Robust detection of active app
  const isMeowoirs = app === "meowoirs" || pathname.includes("meowoirs");
  const isAppsRoute = pathname.startsWith("/apps/");

  const meowoirsLegalLinks: LegalLinkItem[] = [
    {
      name: "Meowoirs Privacy Policy",
      path: isAppsRoute ? "/apps/meowoirs/privacy" : "/privacy/meowoirs",
      matchPaths: ["/privacy/meowoirs", "/apps/meowoirs/privacy"],
      icon: FileText,
    },
    {
      name: "Meowoirs Terms of Service",
      path: isAppsRoute ? "/apps/meowoirs/terms" : "/terms/meowoirs",
      matchPaths: ["/terms/meowoirs", "/apps/meowoirs/terms"],
      icon: FileText,
    },
    {
      name: "Meowoirs Veterinary Disclaimer",
      path: isAppsRoute ? "/apps/meowoirs/disclaimer" : "/disclaimer/meowoirs",
      matchPaths: ["/disclaimer/meowoirs", "/apps/meowoirs/disclaimer"],
      icon: AlertTriangle,
    },
    { name: "Contact Support", path: "/contact", matchPaths: ["/contact"], icon: Mail },
  ];

  const vitacaseLegalLinks: LegalLinkItem[] = [
    {
      name: "VitaCase Privacy Policy",
      path: isAppsRoute ? "/apps/vitacase/privacy" : "/privacy/vitacase",
      matchPaths: ["/privacy/vitacase", "/apps/vitacase/privacy"],
      icon: Shield,
    },
    {
      name: "VitaCase Terms of Use",
      path: isAppsRoute ? "/apps/vitacase/terms" : "/terms/vitacase",
      matchPaths: ["/terms/vitacase", "/apps/vitacase/terms"],
      icon: FileText,
    },
    {
      name: "Data Retention & Deletion",
      path: "/delete-account",
      matchPaths: ["/delete-account", "/apps/vitacase/delete-account"],
      icon: Trash2,
    },
    { name: "Contact Support", path: "/contact", matchPaths: ["/contact"], icon: Mail },
  ];

  const legalLinks = isMeowoirs ? meowoirsLegalLinks : vitacaseLegalLinks;
  const alternateAppName = isMeowoirs ? "VitaCase" : "Meowoirs";
  const alternateAppPath = isMeowoirs
    ? (isAppsRoute ? "/apps/vitacase/privacy" : "/privacy/vitacase")
    : (isAppsRoute ? "/apps/meowoirs/privacy" : "/privacy/meowoirs");

  const checkIsActive = (item: LegalLinkItem) => {
    if (item.matchPaths && item.matchPaths.includes(pathname)) return true;
    return pathname === item.path;
  };

  return (
    <main id="main-content" className="flex-grow pt-36 sm:pt-40 md:pt-44 pb-32 px-6 max-w-[1200px] mx-auto w-full relative">
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
        <div className="flex items-center justify-between gap-3">
          <Link
            to="/privacy"
            className="inline-flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-white transition-colors py-2 px-3.5 rounded-xl glass self-start min-h-[40px]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Legal Center</span>
          </Link>
          <Link
            to={alternateAppPath}
            className="inline-flex items-center gap-1.5 text-xs text-brand-300 hover:text-white transition-colors py-2 px-3 rounded-xl glass"
          >
            <ArrowRightLeft className="w-3 h-3" />
            <span>Switch to {alternateAppName}</span>
          </Link>
        </div>
        <div className="overflow-x-auto pb-2 hide-scrollbar">
          <div className="flex items-center gap-2 w-max px-1">
            {legalLinks.map((item) => {
              const isActive = checkIsActive(item);
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
              <span>Back to Legal Center</span>
            </Link>

            <div className="text-xs font-bold uppercase tracking-widest text-gray-400 px-3 pt-2 border-t border-white/[0.06] flex items-center justify-between">
              <span>{isMeowoirs ? "MEOWOIRS LEGAL" : "VITACASE LEGAL"}</span>
              <span className="text-[10px] text-accent-400 font-mono">v1.0</span>
            </div>

            <nav className="space-y-1.5" aria-label={isMeowoirs ? "Meowoirs Legal Pages" : "VitaCase Legal Pages"}>
              {legalLinks.map((item) => {
                const isActive = checkIsActive(item);
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

            {/* Quick switcher to alternate app */}
            <div className="pt-3 border-t border-white/[0.06] px-3">
              <Link
                to={alternateAppPath}
                className="flex items-center justify-between text-xs text-gray-400 hover:text-white transition-colors group p-2 rounded-lg hover:bg-white/[0.03]"
              >
                <div className="flex items-center gap-2">
                  <ArrowRightLeft className="w-3.5 h-3.5 text-brand-400 group-hover:rotate-180 transition-transform duration-300" />
                  <span>View {alternateAppName} Legal</span>
                </div>
                <ChevronRight className="w-3 h-3 text-gray-500" />
              </Link>
            </div>

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
