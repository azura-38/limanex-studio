import { Link } from "react-router-dom";
import { ArrowLeft, Home, Smartphone, Gamepad2, Compass } from "lucide-react";
import { useSEO } from "../hooks/useSEO";

export default function NotFound() {
  useSEO({
    title: "404 — Page Not Found | Limanex Studio",
    description: "The page you are looking for does not exist or has been moved. Explore our applications and games at Limanex Studio.",
    noindex: true,
  });

  return (
    <main
      id="main-content"
      className="flex-grow flex items-center justify-center min-h-[75vh] pt-36 sm:pt-40 pb-24 px-6 relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-500/10 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-xl w-full text-center">
        {/* Error Code Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill mb-6 text-xs font-semibold text-accent-400">
          <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "12s" }} aria-hidden="true" />
          <span>Error 404 • Destination Unknown</span>
        </div>

        {/* Large Aesthetic 404 Heading */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight text-white mb-4">
          4<span className="gradient-text">0</span>4
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
          Page Not Found
        </h2>

        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-10 max-w-md mx-auto">
          The coordinates you followed don&apos;t match any active page or document in our studio network. It may have been moved or removed.
        </p>

        {/* Navigation Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 hover:brightness-110 text-white font-semibold text-sm transition-all shadow-lg shadow-brand-500/25 min-h-[44px]"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            <span>Back to Home</span>
          </Link>

          <Link
            to="/apps"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl glass hover:border-white/25 text-gray-200 hover:text-white font-semibold text-sm transition-all min-h-[44px]"
          >
            <Smartphone className="w-4 h-4 text-brand-300" aria-hidden="true" />
            <span>Explore Apps</span>
          </Link>

          <Link
            to="/games"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl glass hover:border-white/25 text-gray-200 hover:text-white font-semibold text-sm transition-all min-h-[44px]"
          >
            <Gamepad2 className="w-4 h-4 text-accent-400" aria-hidden="true" />
            <span>Explore Games</span>
          </Link>
        </div>

        {/* Quick link back */}
        <div className="mt-8 pt-8 border-t border-white/[0.06]">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Return to Limanex Studio Homepage</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
