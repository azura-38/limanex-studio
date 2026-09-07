import { Link, Navigate } from "react-router-dom";
import { apps } from "../data/apps";
import { ArrowRight, Sparkles, Smartphone, Play } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { StructuredData, getOrganizationSchema, getBreadcrumbSchema } from "../components/StructuredData";

export default function Apps() {
  useSEO({
    title: "Our Applications — Limanex Studio",
    description: "Explore Limanex Studio's collection of precision-engineered apps designed to enhance your digital life. Discover VitaCase and more.",
  });

  // If only one app exists, redirect to its detail page
  if (apps.length === 1) {
    return <Navigate to={`/apps/${apps[0].slug}`} replace />;
  }

  return (
    <main id="main-content" className="flex-grow pt-32 pb-32 px-6 max-w-[1100px] mx-auto w-full">
      <StructuredData
        data={[
          getOrganizationSchema(),
          getBreadcrumbSchema([
            { name: "Home", url: "https://limanexstudio.com/" },
            { name: "Apps", url: "https://limanexstudio.com/apps" },
          ]),
        ]}
      />

      <header className="mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 shadow-md">
          <Sparkles className="w-4 h-4 text-brand-300" aria-hidden="true" />
          <span className="text-xs font-semibold text-gray-300 tracking-wider uppercase">Studio Applications</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          Our Applications
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto font-normal">
          Explore our collection of precision-engineered tools designed to enhance your digital life.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {apps.map((app) => (
          <article
            key={app.slug}
            className="glass-card overflow-hidden border border-white/[0.08] p-8 sm:p-10 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold text-accent-400 glass-pill">
                    {app.hero_tagline}
                  </span>
                  {app.badge && (
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      {app.badge}
                    </span>
                  )}
                </div>
                {app.icon_url ? (
                  <img
                    src={app.icon_url}
                    alt={`${app.name} icon`}
                    className="w-10 h-10 rounded-xl object-contain shadow-md"
                    width={40}
                    height={40}
                  />
                ) : (
                  <Smartphone className="w-5 h-5 text-gray-400 group-hover:text-brand-300 transition-colors" />
                )}
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-brand-300 transition-colors">
                {app.name}
              </h2>

              <p className="text-gray-400 text-base leading-relaxed mb-8">
                {app.short_description}
              </p>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-white/[0.06]">
              <Link
                to={`/apps/${app.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white group/link"
              >
                <span>View Showcase</span>
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>

              {app.playstore_link && (
                <a
                  href={app.playstore_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Google Play</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
