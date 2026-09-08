import { Link } from "react-router-dom";
import { Shield, Heart, FileText, AlertTriangle, ArrowRight, ChevronRight, Lock } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { StructuredData, getOrganizationSchema, getBreadcrumbSchema } from "../components/StructuredData";

export default function Privacy() {
  useSEO({
    title: "Legal & Compliance Center — Limanex Studio",
    description:
      "Limanex Studio Legal & Compliance Center. Choose an application to view its specific Privacy Policy, Terms of Service, and Medical Disclaimers.",
  });

  return (
    <main id="main-content" className="flex-grow pt-36 sm:pt-40 md:pt-44 pb-32 px-6 max-w-[1100px] mx-auto w-full relative">
      <StructuredData
        data={[
          getOrganizationSchema(),
          getBreadcrumbSchema([
            { name: "Home", url: "https://limanexstudio.com/" },
            { name: "Legal Center", url: "https://limanexstudio.com/privacy" },
          ]),
        ]}
      />

      {/* Atmospheric Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none -z-10" aria-hidden="true">
        <div
          className="w-full h-full rounded-full"
          style={{
            background: "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.16) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Header */}
      <header className="mb-16 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-4 text-xs font-semibold text-accent-400">
          <Shield className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Trust &amp; Transparency</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
          Legal Center
        </h1>
        <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-gray-400 font-semibold mb-6">
          Select an application to view its compliance &amp; policies
        </p>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
          Select an application below to view its specific privacy policy, terms of service, and medical disclaimers. Every product is engineered with privacy as a foundational principle.
        </p>
      </header>

      {/* Application Selection Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* App 1: VitaCase */}
        <div className="glass-card p-8 sm:p-10 border border-white/[0.08] hover:border-brand-400/30 transition-all flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#0f172a] border border-blue-500/30 p-2 flex items-center justify-center shadow-lg shadow-blue-500/15 group-hover:scale-105 transition-transform overflow-hidden">
                <img
                  src="/vitacase-icon.webp"
                  alt="VitaCase icon"
                  className="w-full h-full object-contain"
                  width={48}
                  height={48}
                />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold text-accent-400 glass-pill">
                Smart Health Tracking
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-brand-300 transition-colors">
              VitaCase
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              Health records, medication tracking, and lab test history management. View the specific legal documents governing VitaCase:
            </p>

            {/* Document Quick Links List */}
            <div className="space-y-2.5 mb-8">
              <Link
                to="/privacy/vitacase"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] transition-all group/doc"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-brand-300" aria-hidden="true" />
                  <span className="text-sm font-medium text-gray-200 group-hover/doc:text-white">
                    VitaCase Privacy Policy
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover/doc:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                to="/terms/vitacase"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] transition-all group/doc"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-accent-400" aria-hidden="true" />
                  <span className="text-sm font-medium text-gray-200 group-hover/doc:text-white">
                    VitaCase Terms &amp; Conditions
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover/doc:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                to="/disclaimer/vitacase"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] transition-all group/doc"
              >
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-4 h-4 text-yellow-400" aria-hidden="true" />
                  <span className="text-sm font-medium text-gray-200 group-hover/doc:text-white">
                    VitaCase Medical Disclaimer
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover/doc:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          <Link
            to="/privacy/vitacase"
            className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 hover:brightness-110 text-white font-semibold text-sm transition-all shadow-md shadow-brand-500/20"
          >
            <span>Open VitaCase Documents</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        {/* App 2: Meowoirs */}
        <div className="glass-card p-8 sm:p-10 border border-white/[0.08] hover:border-amber-400/30 transition-all flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#1e1b2e] border border-amber-500/30 p-2 flex items-center justify-center shadow-lg shadow-amber-500/15 group-hover:scale-105 transition-transform overflow-hidden">
                <img
                  src="/meowoirs-icon.webp"
                  alt="Meowoirs icon"
                  className="w-full h-full object-contain"
                  width={48}
                  height={48}
                />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold text-amber-300 glass-pill">
                Cat Memory Journal
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
              Meowoirs
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              Offline-first cat journal, mood reflections, and relationship diary. View the specific legal documents governing Meowoirs:
            </p>

            {/* Document Quick Links List */}
            <div className="space-y-2.5 mb-8">
              <Link
                to="/privacy/meowoirs"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] transition-all group/doc"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-amber-300" aria-hidden="true" />
                  <span className="text-sm font-medium text-gray-200 group-hover/doc:text-white">
                    Meowoirs Privacy Policy
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover/doc:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                to="/terms/meowoirs"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] transition-all group/doc"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-accent-400" aria-hidden="true" />
                  <span className="text-sm font-medium text-gray-200 group-hover/doc:text-white">
                    Meowoirs Terms of Service
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover/doc:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                to="/disclaimer/meowoirs"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] transition-all group/doc"
              >
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-4 h-4 text-yellow-400" aria-hidden="true" />
                  <span className="text-sm font-medium text-gray-200 group-hover/doc:text-white">
                    Meowoirs Veterinary Disclaimer
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover/doc:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          <Link
            to="/privacy/meowoirs"
            className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-brand-500 hover:brightness-110 text-white font-semibold text-sm transition-all shadow-md shadow-amber-500/20"
          >
            <span>Open Meowoirs Documents</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* Section: Studio Transparency & Philosophy */}
      <div className="glass-card p-8 sm:p-10 border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-start gap-5">
          <div className="w-14 h-14 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-accent-400 flex-shrink-0">
            <Lock className="w-7 h-7" aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Our Privacy Philosophy
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              At <strong className="text-white">Limanex Studio</strong>, we believe your data belongs strictly to you. Both VitaCase and Meowoirs operate on local-first architectures with zero cloud storage of your personal records. All telemetry is strictly anonymized, and health records remain completely encrypted on-device.
            </p>
          </div>
        </div>

        <div className="flex-shrink-0 w-full md:w-auto">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 w-full md:w-auto py-3.5 px-6 rounded-xl glass hover:border-white/20 text-gray-200 hover:text-white font-semibold text-sm transition-all whitespace-nowrap"
          >
            <span>Contact Legal Team</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </main>
  );
}
