import { Gamepad2, Sparkles, ArrowRight, Layers, Cpu, Smartphone, Play, Apple } from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";
import { StructuredData, getOrganizationSchema, getBreadcrumbSchema } from "../components/StructuredData";

export default function Games() {
  useSEO({
    title: "Games — Coming Soon | Limanex Studio",
    description:
      "Limanex Studio is forging the next generation of immersive gaming experiences. Expect groundbreaking visuals and uncompromising performance.",
  });

  return (
    <main
      id="main-content"
      className="flex-grow pt-36 pb-32 px-6 max-w-[1100px] mx-auto w-full relative min-h-[80vh] flex flex-col items-center justify-center"
    >
      <StructuredData
        data={[
          getOrganizationSchema(),
          getBreadcrumbSchema([
            { name: "Home", url: "https://limanexstudio.com/" },
            { name: "Games", url: "https://limanexstudio.com/games" },
          ]),
        ]}
      />

      {/* Atmospheric Ambient Lighting */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-brand-500/20 blur-[160px] pointer-events-none rounded-full -z-10"
        aria-hidden="true"
      />

      <div className="relative z-10 text-center flex flex-col items-center max-w-3xl mb-16">
        {/* Studio Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 shadow-lg shadow-black/20">
          <Gamepad2 className="w-4 h-4 text-brand-300" aria-hidden="true" />
          <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
            Game Engineering Studio
          </span>
        </div>

        {/* Spatial 3D Emblem */}
        <div className="relative mb-8">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-brand-500/30 via-brand-600/20 to-accent-500/30 flex items-center justify-center border border-white/15 shadow-[0_0_60px_rgba(168,85,247,0.35)] animate-float">
            <Gamepad2 className="w-12 h-12 text-white drop-shadow-md" aria-hidden="true" />
          </div>
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-brand-500 to-accent-400 opacity-20 blur-xl -z-10" />
        </div>

        {/* Preserved Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
          Coming Soon
        </h1>

        {/* Preserved Description */}
        <p className="text-lg sm:text-xl leading-relaxed text-gray-300 font-normal mb-8 max-w-2xl">
          We are currently forging our next generation of immersive experiences. 
          Expect groundbreaking visuals and uncompromising performance.
        </p>

        {/* Platform Targets */}
        <div className="flex items-center gap-4 text-xs font-semibold text-gray-400 mb-10">
          <span className="flex items-center gap-1.5 glass-pill px-3.5 py-1.5 rounded-full">
            <Apple className="w-3.5 h-3.5 text-white" /> iOS
          </span>
          <span className="flex items-center gap-1.5 glass-pill px-3.5 py-1.5 rounded-full">
            <Play className="w-3.5 h-3.5 fill-current text-white" /> Android
          </span>
          <span className="flex items-center gap-1.5 glass-pill px-3.5 py-1.5 rounded-full text-accent-400">
            60 FPS Target
          </span>
        </div>
      </div>

      {/* Engineering Pillars Showcase Cards */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="glass-card p-8 text-left group hover:border-brand-400/40 transition-all">
          <div className="w-12 h-12 rounded-2xl bg-brand-500/20 flex items-center justify-center mb-6 border border-brand-400/20">
            <Layers className="w-6 h-6 text-brand-300" />
          </div>
          <h2 className="text-lg font-bold text-white mb-2">Spatial Mechanics</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Physics-driven puzzles and spatial interaction designed natively for modern touchscreen devices.
          </p>
        </div>

        <div className="glass-card p-8 text-left group hover:border-accent-400/40 transition-all">
          <div className="w-12 h-12 rounded-2xl bg-accent-400/20 flex items-center justify-center mb-6 border border-accent-400/20">
            <Cpu className="w-6 h-6 text-accent-300" />
          </div>
          <h2 className="text-lg font-bold text-white mb-2">Native Engine</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Optimized shaders and minimal battery overhead to deliver silky-smooth gameplay at high refresh rates.
          </p>
        </div>

        <div className="glass-card p-8 text-left group hover:border-secondary/40 transition-all">
          <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center mb-6 border border-secondary/20">
            <Smartphone className="w-6 h-6 text-purple-300" />
          </div>
          <h2 className="text-lg font-bold text-white mb-2">Zero Latency</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Immediate tactile response and responsive haptics engineered for maximum player immersion.
          </p>
        </div>
      </div>

      {/* Return Action */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass hover:border-white/20 text-gray-200 hover:text-white text-base font-semibold transition-all hover:scale-[1.02] min-h-[50px]"
      >
        <span>Return to Studio Home</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </main>
  );
}
