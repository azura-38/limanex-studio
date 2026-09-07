import { Link } from "react-router-dom";
import { Sparkles, Cpu, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import { siteSettings } from "../data/siteSettings";
import { useSEO } from "../hooks/useSEO";
import {
  StructuredData,
  getBreadcrumbSchema,
} from "../components/StructuredData";

export default function AI() {
  useSEO({
    title: "Limanex AI — Digital Intelligence Forged for the Future",
    description:
      "Limanex Studio is building the next generation of intelligent apps. Seamless, anticipatory, and fundamentally transformative.",
  });

  const aiPillars = [
    {
      icon: Zap,
      title: "Seamless & Native",
      description:
        "Engineered directly for modern silicon. Zero latency, on-device computation crafted for instantaneous responsiveness.",
      badge: "Real-Time",
    },
    {
      icon: Cpu,
      title: "Anticipatory Workflows",
      description:
        "Intelligent models designed to foresee user intent, automating complex routines into frictionless interactions.",
      badge: "Context-Aware",
    },
    {
      icon: ShieldCheck,
      title: "Private by Architecture",
      description:
        "Uncompromising data isolation. On-device processing ensures your personal metrics and interactions remain strictly yours.",
      badge: "100% Isolated",
    },
  ];

  return (
    <main id="main-content" className="flex-grow pt-28 pb-24">
      <StructuredData
        data={[
          getBreadcrumbSchema([
            { name: "Home", url: "https://limanexstudio.com/" },
            { name: "AI Initiative", url: "https://limanexstudio.com/ai" },
          ]),
        ]}
      />

      {/* Atmospheric Cosmic Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.2) 0%, rgba(34, 211, 238, 0.08) 45%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-[1100px] mx-auto px-6">
        {/* Top Breadcrumb / Status Tag */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 mb-8 rounded-full glass animate-fade-in shadow-lg shadow-black/20">
            <Sparkles className="w-4 h-4 text-brand-300 animate-pulse" aria-hidden="true" />
            <span className="text-xs font-semibold text-gray-200 tracking-wider uppercase">
              {siteSettings.ai_banner_text}
            </span>
          </div>

          {/* Central AI Core Orb Graphic */}
          <div className="relative mb-10 group">
            <div className="w-24 h-24 rounded-3xl glass flex items-center justify-center border border-white/15 shadow-2xl relative">
              <span className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-400 via-primary to-accent-400 animate-pulse flex items-center justify-center shadow-lg shadow-brand-500/40">
                <Cpu className="w-5 h-5 text-white" aria-hidden="true" />
              </span>
            </div>
            {/* Concentric subtle rings */}
            <div className="absolute -inset-4 rounded-[36px] border border-white/5 pointer-events-none" />
            <div className="absolute -inset-8 rounded-[44px] border border-white/[0.02] pointer-events-none" />
          </div>

          {/* Preserved Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
            AI is <span className="gradient-text">coming.</span>
          </h1>

          {/* Preserved Subheading */}
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-normal mb-10 max-w-2xl">
            We are building the next generation of intelligent apps. Seamless, anticipatory, and fundamentally transformative.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 hover:brightness-110 text-white font-semibold text-base transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-brand-500/25 min-h-[52px]"
            >
              <span>Partner With Our Studio</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>

            <Link
              to="/apps"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl glass hover:border-white/20 text-gray-200 hover:text-white font-semibold text-base transition-all duration-300 hover:scale-[1.03] min-h-[52px]"
            >
              <span>Explore Current Apps</span>
            </Link>
          </div>
        </div>

        {/* AI Architectural Pillars */}
        <section aria-label="Limanex AI Architectural Pillars" className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Architectural Principles
            </h2>
            <p className="text-sm text-gray-400 mt-2">
              How Limanex Studio conceptualizes intelligent product systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aiPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="glass-card p-8 border border-white/[0.08] relative group hover:border-brand-400/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-brand-300 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-white/[0.04] text-[11px] font-semibold text-accent-400 border border-white/5">
                        {pillar.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Studio Status Card */}
        <section aria-label="Development roadmap status" className="max-w-3xl mx-auto">
          <div className="glass-card p-8 sm:p-10 border border-white/[0.08] text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/15 border border-brand-500/30 text-xs font-semibold text-brand-300 mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
              <span>Phase 1 — Engineering in Progress</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Precision Intelligence in Development
            </h3>
            <p className="text-sm text-gray-400 max-w-lg mx-auto leading-relaxed">
              We are rigorous with what we ship. Every model and feature must meet our standards for privacy, speed, and tactile delight.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
