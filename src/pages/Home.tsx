import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Smartphone,
  Gamepad2,
  Heart,
  ChevronDown,
  CheckCircle2,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";
import { apps } from "../data/apps";
import { siteSettings } from "../data/siteSettings";
import { useSEO } from "../hooks/useSEO";
import {
  StructuredData,
  getOrganizationSchema,
  getWebSiteSchema,
  getBreadcrumbSchema,
} from "../components/StructuredData";
import { MeowoirsShowcase } from "../components/MeowoirsShowcase";

export default function Home() {
  const featuredApp = apps.find((a) => a.is_featured) || apps[0];
  const [modalOpen, setModalOpen] = useState(false);
  const [modalShotIndex, setModalShotIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const appSlides = [
    {
      id: "vitacase-overview",
      category: "App",
      badge: "Smart Health Tracking",
      status: "Available Now",
      name: "VitaCase",
      tagline: "Smart Health Tracking",
      title: "All Your Health Data in One Place",
      short_description: "Track your medical tests, medications and history with ease.",
      description:
        "VitaCase is your ultimate companion for managing personal health records. Designed with privacy and clarity in mind, it empowers users to take control of their medical journey through intuitive tracking and intelligent reminders.",
      features: [
        "Track all your medical tests in one place",
        "Understand what your results mean",
        "Never miss a dose with smart reminders",
      ],
      screenshot: "/screenshots/vitacase_1_card.webp",
      screenshotAlt: "VitaCase app — Your life your vault all in one place",
      playstore: "https://play.google.com/store/apps/details?id=com.limanex.vitacase",
      link: "/apps/vitacase",
      linkLabel: "Explore VitaCase",
      icon: Heart,
      iconBg: "from-brand-500 to-accent-500",
      shotIndex: 0,
    },
    {
      id: "meowoirs-overview",
      category: "App",
      badge: "Cat Memory Journal",
      status: "New Release",
      name: "Meowoirs",
      tagline: "Every Cat Has A Story",
      title: "A Dedicated Cat Memory Journal & Relationship Diary",
      short_description: "A quiet, personal memory journal designed exclusively for cats and the humans who love them.",
      description:
        "Whether it is a lifelong companion sleeping at the foot of your bed or a friendly neighborhood cat on a stone wall, Meowoirs provides an offline sanctuary to preserve photos, daily notes, and mutual mood reflections.",
      features: [
        "Dedicated Cat Profiles (Home & Street)",
        "Daily Photo & Note Journaling",
        "Dual-Perspective Mood Reflections",
      ],
      screenshot: "/screenshots/meowoirs_1_card.webp",
      screenshotAlt: "Meowoirs app — cat profiles and memory timeline",
      playstore: "https://play.google.com/store/apps/details?id=com.limanex.meowoirs",
      link: "/apps/meowoirs",
      linkLabel: "Explore Meowoirs",
      icon: Heart,
      iconBg: "from-amber-500 to-brand-500",
      shotIndex: 0,
    },
    {
      id: "block-dimension",
      category: "Game",
      badge: "Spatial 3D Engine",
      status: "Coming Soon",
      name: "Block Dimension",
      tagline: "Spatial Physics & Architecture",
      title: "Immersive Spatial Gaming",
      short_description: "Groundbreaking visuals and uncompromising native performance.",
      description:
        "We are currently forging our next generation of immersive experiences. Expect tactile geometry, zero-latency physical interactions, and spatial mechanics.",
      features: [
        "Spatial 3D puzzle & architectural mechanics",
        "Native engine performance & high frame-rates",
        "Engineered for mobile & spatial hardware",
      ],
      screenshot: null,
      screenshotAlt: "Block Dimension Spatial Gaming Preview",
      playstore: null,
      link: "/games",
      linkLabel: "Discover Preview",
      icon: Gamepad2,
      iconBg: "from-brand-500 to-accent-500",
      shotIndex: 0,
    },
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + appSlides.length) % appSlides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % appSlides.length);
  };

  useSEO({
    title: "Limanex Studio — Apps & Games Designed for the Future",
    description:
      "Limanex Studio builds precision-engineered apps and games. Discover VitaCase, our smart health tracking app, and explore our growing collection of digital tools.",
  });

  // Modal keyboard listeners
  useEffect(() => {
    if (!modalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
      if (e.key === "ArrowLeft" && featuredApp) {
        setModalShotIndex((prev) => (prev - 1 + featuredApp.screenshots.length) % featuredApp.screenshots.length);
      }
      if (e.key === "ArrowRight" && featuredApp) {
        setModalShotIndex((prev) => (prev + 1) % featuredApp.screenshots.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen, featuredApp]);

  return (
    <main id="main-content" className="flex-grow pt-24">
      <StructuredData
        data={[
          getOrganizationSchema(),
          getWebSiteSchema(),
          getBreadcrumbSchema([{ name: "Home", url: "https://limanexstudio.com/" }]),
        ]}
      />

      {/* =====================================================================
          1. HERO SECTION
          ===================================================================== */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center flex-col px-6 pt-16 pb-24 text-center overflow-hidden"
        aria-label="Hero"
      >
        {/* Atmospheric Glow Lighting */}
        <div className="absolute inset-0 pointer-events-none -z-10" aria-hidden="true">
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[480px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.22) 0%, rgba(168, 85, 247, 0.06) 45%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-1/4 right-[12%] w-[450px] h-[450px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle at center, rgba(34, 211, 238, 0.16) 0%, rgba(34, 211, 238, 0.04) 45%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          {/* Studio Pill Tag */}
          {siteSettings.ai_section_visible && (
            <div className="inline-flex items-center gap-2.5 px-4 py-2 mb-8 rounded-full glass animate-fade-in shadow-lg shadow-black/20">
              <Sparkles className="w-3.5 h-3.5 text-brand-300 animate-pulse" aria-hidden="true" />
              <span className="text-xs font-semibold text-gray-200 tracking-wider uppercase">
                {siteSettings.ai_banner_text}
              </span>
            </div>
          )}

          {/* Main Display Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-extrabold tracking-tight leading-[1.05] mb-8">
            <span className="gradient-text-subtle">LIMANEX</span>
            <br />
            <span className="gradient-text">STUDIO</span>
          </h1>

          {/* Preserved Subtitle */}
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
            Apps &amp; Games Designed for the Future. Precision-engineered for performance, crafted with an obsession for detail.
          </p>

          {/* Action CTAs with Strong Hierarchy */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            {featuredApp && (
              <Link
                to={`/apps/${featuredApp.slug}`}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 hover:brightness-110 text-white font-semibold text-base transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-brand-500/25 min-h-[52px]"
              >
                <span>Explore {featuredApp.name}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            )}

            <Link
              to="/games"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl glass hover:border-white/20 text-gray-200 hover:text-white font-semibold text-base transition-all duration-300 hover:scale-[1.03] min-h-[52px]"
            >
              <Gamepad2 className="w-4 h-4 text-brand-300" aria-hidden="true" />
              <span>View Games</span>
            </Link>
          </div>

          {/* Studio Metrics System */}
          <div className="grid grid-cols-3 gap-6 sm:gap-12 mt-16 pt-10 border-t border-white/[0.08] w-full max-w-xl">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">Apps &amp; Games</div>
              <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-medium">Studio Focus</div>
            </div>
            <div className="text-center border-x border-white/[0.08] px-2">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">2</div>
              <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-medium">Platforms (iOS &amp; Android)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">100%</div>
              <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-medium">Privacy Focused</div>
            </div>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="mt-16 flex flex-col items-center gap-1.5 text-gray-400" aria-hidden="true">
          <span className="text-[11px] font-semibold text-gray-300 uppercase tracking-[0.2em]">Explore</span>
          <ChevronDown className="w-4 h-4 animate-scroll-down text-gray-300" />
        </div>
      </section>

      {/* =====================================================================
          2. FEATURED APPLICATION SHOWCASE (Meowoirs Video Showcase)
          ===================================================================== */}
      <MeowoirsShowcase />

      {/* =====================================================================
          3. STUDIO APPLICATIONS SLIDER (All Apps Carousel)
          ===================================================================== */}
      <section
        id="apps"
        className="content-auto relative px-6 py-28 border-t border-white/[0.06] overflow-hidden"
        aria-label="Studio applications slider"
      >
        <div className="max-w-[1100px] mx-auto">
          {/* Section Header with Slider Navigation Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-accent-400 mb-4">
                <Smartphone className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Studio Applications</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
                Applications Designed for the Future
              </h2>
              <p className="mt-3 text-lg text-gray-400 max-w-xl">
                Explore our collection of precision-engineered digital products and tools.
              </p>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-3 self-start md:self-end">
              <div className="text-xs font-mono text-gray-400 px-2 py-1 rounded-md glass">
                <span className="text-white font-bold">{String(currentSlide + 1).padStart(2, "0")}</span>
                <span className="text-gray-400"> / {String(appSlides.length).padStart(2, "0")}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous application slide"
                  className="w-11 h-11 rounded-xl glass hover:border-white/20 flex items-center justify-center text-gray-300 hover:text-white transition-all hover:scale-105 active:scale-95 min-w-[44px] min-h-[44px]"
                >
                  <ChevronLeft className="w-5 h-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next application slide"
                  className="w-11 h-11 rounded-xl glass hover:border-white/20 flex items-center justify-center text-gray-300 hover:text-white transition-all hover:scale-105 active:scale-95 min-w-[44px] min-h-[44px]"
                >
                  <ChevronRight className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              <Link
                to="/apps"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-brand-300 hover:text-white transition-colors glass-pill px-3.5 py-2.5 rounded-xl ml-2"
              >
                <span>View All</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Quick Slide Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 hide-scrollbar">
            {appSlides.map((slide, idx) => {
              const isActive = idx === currentSlide;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap min-h-[40px] ${
                    isActive
                      ? "bg-gradient-to-r from-brand-500/20 to-accent-500/20 border border-brand-400/40 text-white shadow-md shadow-brand-500/15"
                      : "glass text-gray-400 hover:text-gray-200"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-accent-400" : "bg-gray-500"}`} />
                  <span>{slide.name}</span>
                  <span className={`text-[10px] uppercase font-mono px-1.5 py-0.5 rounded-md ${
                    slide.category === "Game"
                      ? "bg-purple-500/15 text-purple-300"
                      : "bg-brand-500/10 text-brand-300"
                  }`}>
                    {slide.category}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Current Application Slide Card */}
          {(() => {
            const slide = appSlides[currentSlide];
            const SlideIcon = slide.icon;

            return (
              <div
                key={slide.id}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "ArrowLeft") prevSlide();
                  if (e.key === "ArrowRight") nextSlide();
                }}
                className="glass-card border border-white/[0.08] p-8 sm:p-12 lg:p-16 relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 transition-all duration-500"
                aria-roledescription="slide"
                aria-label={`${slide.name} — Slide ${currentSlide + 1} of ${appSlides.length}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  {/* Left Content Column */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${slide.iconBg} flex items-center justify-center shadow-lg shadow-brand-500/25`}>
                        <SlideIcon className="w-6 h-6 text-white" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-2xl font-bold text-white">{slide.name}</h3>
                          <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${
                            slide.status === "Available Now"
                              ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/20"
                              : "bg-brand-500/10 text-brand-300 border-brand-500/20"
                          }`}>
                            {slide.status}
                          </span>
                        </div>
                        <p className="text-xs uppercase tracking-wider text-accent-400 font-semibold">{slide.tagline}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">{slide.title}</h4>
                      <p className="text-gray-300 text-base leading-relaxed">
                        {slide.description}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-3 pt-2">
                      {slide.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-accent-400 mt-1 flex-shrink-0" aria-hidden="true" />
                          <span className="text-sm text-gray-300 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 flex flex-wrap gap-4 items-center">
                      {slide.playstore && (
                        <a
                          href={slide.playstore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 hover:brightness-110 text-white text-sm font-semibold transition-all hover:scale-[1.02] shadow-md shadow-brand-500/20"
                        >
                          <Play className="w-4 h-4 fill-current" aria-hidden="true" />
                          <span>Google Play</span>
                        </a>
                      )}

                      {slide.screenshot && (
                        <button
                          type="button"
                          onClick={() => {
                            setModalShotIndex(slide.shotIndex);
                            setModalOpen(true);
                          }}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass hover:border-white/20 text-gray-200 hover:text-white text-sm font-semibold transition-all"
                        >
                          <Maximize2 className="w-4 h-4" aria-hidden="true" />
                          <span>Quick Preview</span>
                        </button>
                      )}

                      <Link
                        to={slide.link}
                        aria-label={`Learn more about ${slide.name}`}
                        className="inline-flex items-center gap-1.5 text-xs text-brand-300 hover:text-white transition-colors"
                      >
                        <span>{slide.linkLabel}</span>
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Screenshot or Spatial Visual Object */}
                  <div className="lg:col-span-6 flex justify-center lg:justify-end">
                    {slide.screenshot ? (
                      <div
                        onClick={() => {
                          setModalShotIndex(slide.shotIndex);
                          setModalOpen(true);
                        }}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setModalShotIndex(slide.shotIndex);
                            setModalOpen(true);
                          }
                        }}
                        className="relative group cursor-pointer w-full max-w-[340px] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded-3xl"
                        aria-label={`Click to enlarge ${slide.name} preview`}
                      >
                        {/* Atmospheric frame glow */}
                        <div className="absolute -inset-2 bg-gradient-to-tr from-brand-500/20 to-accent-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        {/* Framed device card with screenshot */}
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-surface-dark transition-all duration-500 group-hover:scale-[1.02] group-hover:border-white/20">
                          <img
                            src={slide.screenshot}
                            alt={slide.screenshotAlt}
                            className="w-full h-auto object-cover display-block"
                            loading="lazy"
                            decoding="async"
                            width={340}
                            height={680}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                            <span className="px-4 py-2 rounded-full glass text-xs font-semibold text-white inline-flex items-center gap-1.5 shadow-lg">
                              <Maximize2 className="w-3.5 h-3.5" />
                              <span>Expand Preview</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Spatial 3D Graphic for Game / Non-screenshot cards */
                      <div className="w-full max-w-[340px] aspect-[9/16] rounded-3xl glass border border-white/10 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden group">
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            background: "radial-gradient(circle at center, rgba(168, 85, 247, 0.18) 0%, transparent 70%)",
                          }}
                        />
                        <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-brand-400 to-accent-400 flex items-center justify-center shadow-xl shadow-brand-500/30 mb-6 group-hover:scale-110 transition-transform">
                          <SlideIcon className="w-10 h-10 text-white" aria-hidden="true" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">{slide.name}</h4>
                        <p className="text-xs text-accent-400 uppercase tracking-wider font-semibold mb-4">{slide.tagline}</p>
                        <p className="text-xs text-gray-400 leading-relaxed mb-6">{slide.short_description}</p>
                        <Link
                          to={slide.link}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass hover:border-white/20 text-xs font-semibold text-white"
                        >
                          <span>{slide.linkLabel}</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Slide Indicator Dots */}
          <div className="flex items-center justify-center gap-1 mt-8" aria-label="Slider pagination">
            {appSlides.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}: ${slide.name}`}
                aria-current={idx === currentSlide ? "true" : undefined}
                className="w-7 h-7 flex items-center justify-center p-1 group min-w-[28px] min-h-[28px]"
              >
                <span
                  className={`h-2 rounded-full transition-all duration-300 block ${
                    idx === currentSlide
                      ? "w-8 bg-gradient-to-r from-brand-400 to-accent-400"
                      : "w-2 bg-white/20 group-hover:bg-white/40"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. GAMES SHOWCASE CARD
          ===================================================================== */}
      <section className="content-auto relative px-6 py-24 border-t border-white/[0.06]" aria-label="Games studio showcase">
        <div className="max-w-[1100px] mx-auto">
          <div className="glass-card p-8 sm:p-14 border border-white/[0.08] relative overflow-hidden group hover:border-brand-400/30 transition-all">
            {/* Ambient background light */}
            <div
              className="absolute right-0 top-0 w-[400px] h-[400px] rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-brand-300 mb-4">
                  <Gamepad2 className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Interactive Experiences</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                  Games — Coming Soon
                </h2>
                <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                  We are currently forging our next generation of immersive experiences. Expect groundbreaking visuals and uncompromising performance.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  <span className="px-3 py-1 rounded-lg bg-white/[0.04] text-xs text-gray-400 border border-white/5">
                    Spatial 3D
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/[0.04] text-xs text-gray-400 border border-white/5">
                    Native Performance
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/[0.04] text-xs text-gray-400 border border-white/5">
                    Cross-Platform
                  </span>
                </div>
              </div>

              <Link
                to="/games"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl glass hover:border-white/20 text-white font-semibold text-sm transition-all hover:scale-[1.03] shrink-0"
              >
                <span>Discover Preview</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. AI ANNOUNCEMENT SECTION (Preserved copy)
          ===================================================================== */}
      <section id="ai" className="content-auto relative w-full py-32 overflow-hidden border-t border-white/[0.06]" aria-label="AI announcement">
        <div className="absolute inset-0 pointer-events-none -z-10" aria-hidden="true">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.15) 0%, rgba(34, 211, 238, 0.1) 40%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
          <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center border border-white/10 shadow-xl mb-8">
            <span className="w-6 h-6 rounded-full bg-gradient-to-r from-brand-400 to-accent-400 animate-pulse" />
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
            AI is coming.
          </h2>

          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl font-normal mb-8">
            We are building the next generation of intelligent apps. Seamless, anticipatory, and fundamentally transformative.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/ai"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/[0.08] hover:bg-white/[0.14] px-5 py-2.5 rounded-xl transition-all"
            >
              <span>Explore AI Vision</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white glass-pill px-5 py-2.5 rounded-xl transition-all"
            >
              <span>Partner With Our Studio</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================================
          QUICK PREVIEW MODAL (Reference-inspired UX delight)
          ===================================================================== */}
      {modalOpen && featuredApp && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          onClick={() => setModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="relative max-h-[90vh] w-full max-w-[680px] overflow-y-auto rounded-3xl border border-white/15 bg-[#121218] p-6 sm:p-10 shadow-2xl animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              aria-label="Close product details"
              className="absolute right-5 top-5 z-20 rounded-full bg-white/10 p-2 text-gray-300 transition hover:bg-white/20 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="mb-6 flex items-center gap-2">
              <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-accent-400">
                {featuredApp.hero_tagline}
              </span>
              <span className="rounded-full bg-gradient-to-r from-brand-500 to-accent-400 px-3 py-1 text-[11px] font-semibold text-white">
                Featured
              </span>
            </div>

            <h2 id="modal-title" className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              {featuredApp.name}
            </h2>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
              {featuredApp.full_description}
            </p>

            {/* Screenshots Strip inside modal */}
            <div className="relative mb-6 rounded-2xl overflow-hidden border border-white/10 bg-black">
              <div className="aspect-[9/16] max-h-[360px] mx-auto flex items-center justify-center p-2">
                <img
                  src={featuredApp.screenshots[modalShotIndex].src}
                  alt={featuredApp.screenshots[modalShotIndex].alt}
                  className="h-full w-auto object-contain rounded-xl"
                />
              </div>

              {featuredApp.screenshots.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setModalShotIndex(
                        (modalShotIndex - 1 + featuredApp.screenshots.length) %
                          featuredApp.screenshots.length
                      )
                    }
                    aria-label="Previous screenshot"
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white hover:bg-black/90 transition"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() =>
                      setModalShotIndex((modalShotIndex + 1) % featuredApp.screenshots.length)
                    }
                    aria-label="Next screenshot"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white hover:bg-black/90 transition"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            {/* Key Features */}
            <div className="mb-6 space-y-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-3">Key Features</h3>
              {featuredApp.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-accent-400 shrink-0 mt-0.5" />
                  <span>{feature.title}</span>
                </div>
              ))}
            </div>

            {/* Modal Bottom Actions */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <a
                href={featuredApp.playstore_link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-white font-semibold text-sm shadow-md"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Get it on Google Play</span>
              </a>

              <Link
                to={`/apps/${featuredApp.slug}`}
                onClick={() => setModalOpen(false)}
                className="text-xs text-gray-400 hover:text-white transition-colors underline underline-offset-4"
              >
                Go to Dedicated Product Page →
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
