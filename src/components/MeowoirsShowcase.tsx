import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Pause, Sparkles, CheckCircle2, ShieldCheck, Heart } from "lucide-react";

export function MeowoirsShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoSrc, setVideoSrc] = useState<string | undefined>(undefined);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // IntersectionObserver to defer video source and auto-play only when in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVideoSrc((prev) => prev || "/videos/meowoirs-main-video.mp4");
            if (!prefersReducedMotion) {
              video
                .play()
                .then(() => {
                  setIsPlaying(true);
                  setHasStarted(true);
                })
                .catch(() => {
                  // Autoplay with sound or user gesture policy fallback
                  setIsPlaying(false);
                });
            }
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.2, rootMargin: "100px" }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!videoSrc) {
      setVideoSrc("/videos/meowoirs-main-video.mp4");
    }

    if (video.paused) {
      video.play().then(() => {
        setIsPlaying(true);
        setHasStarted(true);
      });
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      id="meowoirs-showcase"
      className="relative px-6 py-28 border-t border-white/[0.06] overflow-hidden scroll-mt-24 sm:scroll-mt-28"
      aria-label="Featured Application — Meowoirs"
    >
      {/* Ambient background lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10" aria-hidden="true">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(245, 158, 11, 0.12) 0%, rgba(168, 85, 247, 0.12) 45%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-[1100px] mx-auto flex flex-col items-center text-center">
        {/* Top Product Pill & Category Tag */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-pill mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" aria-hidden="true" />
          <span className="text-xs font-semibold text-amber-300 uppercase tracking-widest">
            MEOWOIRS
          </span>
          <span className="text-gray-400">•</span>
          <span className="text-xs font-medium text-gray-300">
            Cat Relationship Diary &amp; Offline Memory Journal
          </span>
        </div>

        {/* Official Tagline & Title */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          Every cat has a story.
        </h2>

        <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-12 font-normal">
          A quiet, personal memory journal designed exclusively for cats and the humans who love them. Preserve everyday moments, photo milestones, and dual mood reflections—100% offline and private.
        </p>

        {/* Video Showcase Container */}
        <div className="relative w-full max-w-4xl mx-auto group mb-12">
          {/* Subtle Ambient Glow */}
          <div
            className="absolute -inset-2 bg-gradient-to-tr from-amber-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"
            aria-hidden="true"
          />

          {/* Framed Device Container */}
          <div className="relative rounded-3xl overflow-hidden glass-card border border-white/10 shadow-2xl bg-[#0d0c14]">
            <video
              ref={videoRef}
              src={videoSrc}
              poster="/videos/meowoirs-poster.webp"
              preload="none"
              muted
              loop
              playsInline
              onClick={togglePlay}
              className="w-full aspect-video object-cover cursor-pointer block"
              aria-label="Meowoirs application video demonstration"
            />

            {/* Accessible Play/Pause Overlay Button */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20">
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause Video" : hasStarted ? "Resume Video" : "Play Video"}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl glass hover:border-white/30 text-white text-xs font-semibold backdrop-blur-md transition-all hover:scale-105 shadow-lg"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                    <span>Pause Video</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                    <span>{hasStarted ? "Resume Video" : "Play Video"}</span>
                  </>
                )}
              </button>
            </div>

            {/* Top Brand Watermark Pill */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 pointer-events-none">
              <div className="glass-pill px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/10 text-xs font-medium text-gray-200">
                <img
                  src="/meowoirs-icon.webp"
                  alt=""
                  aria-hidden="true"
                  className="w-4 h-4 rounded-md object-contain"
                  width={16}
                  height={16}
                />
                <span className="font-semibold tracking-wide">Meowoirs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl w-full mb-10 text-left">
          <div className="glass p-4 rounded-2xl border border-white/[0.06] flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0 text-amber-300">
              <Heart className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Home &amp; Street Profiles</div>
              <div className="text-[11px] text-gray-400">Indoor pets &amp; community cats</div>
            </div>
          </div>

          <div className="glass p-4 rounded-2xl border border-white/[0.06] flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0 text-purple-300">
              <Sparkles className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Dual Mood Reflections</div>
              <div className="text-[11px] text-gray-400">Capture feelings on both sides</div>
            </div>
          </div>

          <div className="glass p-4 rounded-2xl border border-white/[0.06] flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0 text-emerald-300">
              <ShieldCheck className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">100% Offline &amp; Private</div>
              <div className="text-[11px] text-gray-400">On-device SQLite storage</div>
            </div>
          </div>
        </div>

        {/* Showcase CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            to="/apps/meowoirs"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-brand-500 to-purple-600 hover:brightness-110 text-white font-semibold text-base transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-amber-500/20 min-h-[52px]"
          >
            <span>Explore Meowoirs</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>

          <a
            href="https://play.google.com/store/apps/details?id=com.limanex.meowoirs"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl glass hover:border-white/20 text-gray-200 hover:text-white font-semibold text-base transition-all duration-300 hover:scale-[1.02] min-h-[52px]"
          >
            <Play className="w-4 h-4 fill-current text-amber-400" aria-hidden="true" />
            <span>Google Play</span>
          </a>
        </div>
      </div>
    </section>
  );
}
