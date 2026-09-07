import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Download,
  Shield,
  Lock,
  Info,
  Check,
  ArrowLeft,
  ArrowRight,
  Play,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Smartphone,
} from "lucide-react";
import { apps } from "../data/apps";
import { FeatureIcon } from "../components/FeatureIcon";
import { useSEO } from "../hooks/useSEO";
import {
  StructuredData,
  getOrganizationSchema,
  getSoftwareApplicationSchema,
  getBreadcrumbSchema,
} from "../components/StructuredData";

export default function AppDetail() {
  const { slug } = useParams();
  const app = apps.find((a) => a.slug === slug);
  const [activeShot, setActiveShot] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useSEO({
    title: app ? `${app.name} — ${app.hero_tagline} | Limanex Studio` : "App Not Found | Limanex Studio",
    description: app ? app.short_description : "The requested app page could not be found.",
    ogType: "product",
  });

  const screenshots = app?.screenshots || [];

  // Keyboard navigation for gallery & lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && screenshots.length > 1) {
        setActiveShot((prev) => (prev - 1 + screenshots.length) % screenshots.length);
      }
      if (e.key === "ArrowRight" && screenshots.length > 1) {
        setActiveShot((prev) => (prev + 1) % screenshots.length);
      }
      if (e.key === "Escape" && lightboxOpen) {
        setLightboxOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [screenshots.length, lightboxOpen]);

  if (!app) {
    return (
      <main id="main-content" className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-6xl font-extrabold mb-4 gradient-text">404</h1>
        <p className="text-xl text-gray-400 mb-8">Oops! The app you're looking for doesn't exist.</p>
        <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-white font-medium hover:border-white/20 transition-all">
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Back to Home</span>
        </Link>
      </main>
    );
  }

  return (
    <div className="w-full">
      <StructuredData
        data={[
          getOrganizationSchema(),
          getSoftwareApplicationSchema(app),
          getBreadcrumbSchema([
            { name: "Home", url: "https://limanexstudio.com/" },
            { name: "Apps", url: "https://limanexstudio.com/apps" },
            { name: app.name, url: `https://limanexstudio.com/apps/${app.slug}` },
          ]),
        ]}
      />

      <main id="main-content" className="flex flex-col items-center">
        {/* =====================================================================
            1. APP HERO SECTION
            ===================================================================== */}
        <section
          className="w-full max-w-[1100px] mx-auto px-6 pt-32 pb-20 lg:pt-40 lg:pb-28 flex flex-col lg:flex-row items-center gap-14 relative"
          aria-label={`${app.name} overview`}
        >
          {/* Ambient Lighting */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-brand-500/15 rounded-full blur-[150px] pointer-events-none -z-10" />

          {/* Left Text Column */}
          <div className="flex-1 flex flex-col items-start text-left">
            {app.icon_url && (
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-[#1e1b2e] border border-amber-500/30 p-2.5 mb-6 shadow-xl shadow-amber-500/15 overflow-hidden">
                <img
                  src={app.icon_url}
                  alt={`${app.name} official app icon`}
                  className="w-full h-full object-contain"
                  width={64}
                  height={64}
                />
              </div>
            )}

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
              <span className="text-xs font-semibold text-accent-400 uppercase tracking-wider">
                {app.hero_tagline}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white mb-6">
              {app.hero_title}
            </h1>

            <p className="text-lg sm:text-xl leading-relaxed text-gray-300 font-normal max-w-xl mb-10">
              {app.short_description}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
              <a
                href={app.playstore_link}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 hover:brightness-110 text-white font-semibold text-base transition-all duration-200 hover:scale-[1.03] shadow-lg shadow-brand-500/25 min-h-[52px]"
              >
                <Play className="w-5 h-5 fill-current" aria-hidden="true" />
                <span>Get it on Google Play</span>
              </a>

              <a
                href="#gallery"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl glass hover:border-white/20 text-gray-300 hover:text-white font-semibold text-base transition-all min-h-[52px]"
              >
                <span>View Gallery</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <p className="mt-4 text-xs text-gray-400 font-medium flex items-center gap-2">
              <Check className="w-4 h-4 text-accent-400" aria-hidden="true" />
              <span>Free to use • No sign-up required</span>
            </p>
          </div>

          {/* Right Mockup Hero Object */}
          <div className="flex-1 w-full flex justify-center lg:justify-end" aria-hidden="true">
            <div className="relative w-[280px] sm:w-[320px] rounded-[44px] p-3.5 glass-card border border-white/[0.12] shadow-2xl group">
              <div className="relative rounded-[36px] overflow-hidden bg-[#111218] border border-white/10 aspect-[9/19.5]">
                {screenshots.length > 0 && (
                  <img
                    src={app.slug === "vitacase" ? "/screenshots/vitacase_1_card.webp" : screenshots[0].src}
                    alt={screenshots[0].alt}
                    width={320}
                    height={692}
                    decoding="async"
                    loading="eager"
                    fetchPriority="high"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            2. TRUST & PRIVACY SECTION
            ===================================================================== */}
        <section className="w-full max-w-[1100px] mx-auto px-6 py-16 border-t border-white/[0.06]" aria-label="Trust and privacy">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-8 text-center flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-500/20 to-accent-400/20 flex items-center justify-center border border-brand-400/20">
                <Lock className="w-5 h-5 text-brand-300" aria-hidden="true" />
              </div>
              <span className="text-base font-semibold text-white tracking-tight">Your data stays private</span>
            </div>

            <div className="glass-card p-8 text-center flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-400/20 to-brand-500/20 flex items-center justify-center border border-accent-400/20">
                <Info className="w-5 h-5 text-accent-300" aria-hidden="true" />
              </div>
              <span className="text-base font-semibold text-white tracking-tight">No diagnosis, only guidance</span>
            </div>

            <div className="glass-card p-8 text-center flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary/20 to-brand-500/20 flex items-center justify-center border border-secondary/20">
                <Shield className="w-5 h-5 text-purple-300" aria-hidden="true" />
              </div>
              <span className="text-base font-semibold text-white tracking-tight">Secure &amp; encrypted storage</span>
            </div>
          </div>
        </section>

        {/* =====================================================================
            3. FEATURES SECTION
            ===================================================================== */}
        <section className="w-full py-28 border-t border-white/[0.06] relative" aria-label="App features">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
                Everything you need. <br />Nothing you don't.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {app.features.map((feature, i) => (
                <article
                  key={i}
                  className="glass-card p-8 flex flex-col justify-between group hover:border-brand-400/40"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-500/30 to-accent-400/20 flex items-center justify-center mb-6 border border-white/10 shadow-md">
                      <FeatureIcon name={feature.iconName} className="w-6 h-6 text-brand-300" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            4. MASTER SCREENSHOT GALLERY & LIGHTBOX (Section 16 Synthesis)
            ===================================================================== */}
        <section id="gallery" className="w-full py-28 border-t border-white/[0.06] overflow-hidden" aria-label="App screenshots">
          <div className="max-w-[1100px] mx-auto px-6 mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              Designed for clarity
            </h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto">
              Intuitive controls, high-contrast typography, and intelligent health timelines.
            </p>
          </div>

          <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
            {/* Main Stage Screenshot */}
            {screenshots.length > 0 && (
              <div className="relative w-full max-w-[380px] sm:max-w-[420px] mb-8 group">
                <div
                  onClick={() => setLightboxOpen(true)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setLightboxOpen(true);
                  }}
                  aria-label="Expand screenshot in lightbox"
                  className="glass-card p-3 rounded-[40px] border border-white/[0.12] shadow-2xl cursor-zoom-in relative overflow-hidden"
                >
                  <div className="rounded-[32px] overflow-hidden bg-black aspect-[9/19.5]">
                    <img
                      src={screenshots[activeShot].src}
                      alt={screenshots[activeShot].alt}
                      width={screenshots[activeShot].width}
                      height={screenshots[activeShot].height}
                      decoding="async"
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="absolute bottom-6 right-6 z-20 glass-pill px-3 py-1.5 rounded-full text-xs text-white flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Expand</span>
                  </div>
                </div>

                {/* Stage Navigation Arrows */}
                {screenshots.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveShot((activeShot - 1 + screenshots.length) % screenshots.length);
                      }}
                      aria-label="Previous screenshot"
                      className="absolute -left-5 sm:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:bg-brand-500 transition-all shadow-lg"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveShot((activeShot + 1) % screenshots.length);
                      }}
                      aria-label="Next screenshot"
                      className="absolute -right-5 sm:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:bg-brand-500 transition-all shadow-lg"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>
            )}

            {/* Thumbnail Strip */}
            <div className="flex items-center justify-center gap-4 flex-wrap" role="tablist" aria-label="Screenshots selector">
              {screenshots.map((item, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === activeShot}
                  aria-label={`View screenshot ${i + 1}`}
                  onClick={() => setActiveShot(i)}
                  className={`w-16 h-24 sm:w-20 sm:h-28 rounded-2xl overflow-hidden border-2 transition-all p-1 glass ${
                    i === activeShot
                      ? "border-brand-400 scale-105 shadow-lg shadow-brand-500/25"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    width={80}
                    height={112}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            VIDEO SHOWCASE SECTION (For apps with video assets)
            ===================================================================== */}
        {app.video_url && (
          <section className="w-full max-w-[1100px] mx-auto px-6 py-20 border-t border-white/[0.06]" aria-label={`${app.name} video showcase`}>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-4 text-xs font-semibold text-accent-400">
                <Play className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                <span>Experience {app.name}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
                {app.slug === "meowoirs" ? "Every cat has a story to tell" : "See it in action"}
              </h2>
              <p className="text-gray-400 text-base max-w-xl mx-auto">
                {app.slug === "meowoirs"
                  ? "Watch how Meowoirs creates a quiet sanctuary for your feline memories, moods, and stories."
                  : "Discover the intuitive flow and precision interface."}
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden glass-card border border-white/10 shadow-2xl group">
              <video
                src={app.video_url}
                poster={app.video_poster}
                preload="metadata"
                muted
                loop
                playsInline
                controls
                className="w-full aspect-video object-cover"
                aria-label={`${app.name} video demonstration`}
              />
            </div>
          </section>
        )}

        {/* =====================================================================
            5. REQUIREMENTS & SPECIFICATIONS
            ===================================================================== */}
        <section className="w-full max-w-[1100px] mx-auto px-6 py-20 border-t border-white/[0.06]" aria-label="System requirements">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-white mb-4">Device Requirements</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center gap-2.5">
                  <Smartphone className="w-4 h-4 text-accent-400" />
                  <span>Android 8.0 (Oreo) or later</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent-400" />
                  <span>Optimized for smartphones and tablets</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Lock className="w-4 h-4 text-accent-400" />
                  <span>{app.slug === "meowoirs" ? "100% Offline-First SQLite on-device storage" : "On-device hardware-backed encryption"}</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Legal &amp; Privacy Information</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {app.slug === "meowoirs"
                    ? "Review complete policies governing Meowoirs offline-first local storage, photo privacy, and terms of service."
                    : "Review complete policies governing VitaCase data storage, medication reminders, and terms of service."}
                </p>
              </div>
              <div className="flex flex-wrap gap-4 text-xs">
                {app.slug === "meowoirs" ? (
                  <>
                    <Link to="/privacy/meowoirs" className="text-brand-300 hover:text-white underline underline-offset-4 transition">
                      Meowoirs Privacy Policy
                    </Link>
                    <span className="text-gray-600">•</span>
                    <Link to="/terms/meowoirs" className="text-brand-300 hover:text-white underline underline-offset-4 transition">
                      Terms of Service
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/privacy/vitacase" className="text-brand-300 hover:text-white underline underline-offset-4 transition">
                      VitaCase Privacy Policy
                    </Link>
                    <span className="text-gray-600">•</span>
                    <Link to="/terms/vitacase" className="text-brand-300 hover:text-white underline underline-offset-4 transition">
                      Terms of Service
                    </Link>
                    <span className="text-gray-600">•</span>
                    <Link to="/disclaimer/vitacase" className="text-brand-300 hover:text-white underline underline-offset-4 transition">
                      Medical Disclaimer
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            6. DOWNLOAD CTA SECTION
            ===================================================================== */}
        <section className="w-full max-w-[1100px] mx-auto px-6 py-28 text-center border-t border-white/[0.06] relative" aria-label="Download the app">
          <div className="glass-card p-10 sm:p-16 border border-white/[0.1] relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-brand-500/20 rounded-full blur-[140px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
                {app.slug === "meowoirs" ? "Preserve every paw print & memory" : "Take control of your health"}
              </h2>

              <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
                {app.slug === "meowoirs"
                  ? "Start journaling your cat's story today with dedicated profiles, photo milestones, and dual mood reflections."
                  : "Get started today with precision tracking, personalized reminders, and complete peace of mind."}
              </p>

              <a
                href={app.playstore_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-4.5 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 hover:brightness-110 text-white font-semibold text-lg transition-all duration-300 hover:scale-[1.03] shadow-xl shadow-brand-500/30 min-h-[52px]"
              >
                <Download className="w-5 h-5" aria-hidden="true" />
                <span>Get Started Today</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================================
          FULLSCREEN LIGHTBOX MODAL
          ===================================================================== */}
      {lightboxOpen && screenshots.length > 0 && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/90 p-4 backdrop-blur-lg animate-fade-in"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Screenshot lightbox"
        >
          <button
            onClick={() => setLightboxOpen(false)}
            aria-label="Close lightbox"
            className="absolute top-6 right-6 z-20 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative max-h-[92vh] max-w-lg w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={screenshots[activeShot].src}
              alt={screenshots[activeShot].alt}
              className="max-h-[85vh] w-auto object-contain rounded-2xl shadow-2xl"
            />

            {screenshots.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() =>
                    setActiveShot((activeShot - 1 + screenshots.length) % screenshots.length)
                  }
                  aria-label="Previous screenshot"
                  className="absolute -left-12 sm:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:bg-brand-500 transition"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveShot((activeShot + 1) % screenshots.length)}
                  aria-label="Next screenshot"
                  className="absolute -right-12 sm:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:bg-brand-500 transition"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-400">
              {activeShot + 1} / {screenshots.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
