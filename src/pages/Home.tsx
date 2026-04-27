import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { apps } from "../data/apps";
import { siteSettings } from "../data/siteSettings";

export function Home() {
  const featuredApp = apps.find(a => a.is_featured) || apps[0];

  return (
    <main className="flex-grow pt-[48px]">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden flex-col px-container-margin py-[160px]">
        {/* Animated Background Glows */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-primary mix-blend-screen filter blur-[120px] opacity-30 animate-blob"></div>
          <div className="absolute top-[30%] right-[15%] w-[35vw] h-[35vw] rounded-full bg-secondary mix-blend-screen filter blur-[120px] opacity-20 animate-blob-reverse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-[0%] left-[40%] w-[45vw] h-[45vw] rounded-full bg-primary-container mix-blend-screen filter blur-[150px] opacity-20 animate-blob" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto gap-8"
        >
          {siteSettings.ai_section_visible && (
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary to-secondary blur-xl opacity-30 animate-pulse-slow"></div>
              <span className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-bright/50 backdrop-blur-xl border border-outline text-[12px] font-bold text-white tracking-[0.2em] uppercase shadow-2xl">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-[0_0_10px_rgba(236,72,153,0.8)]"></span>
                {siteSettings.ai_banner_text}
              </span>
            </div>
          )}

          <h1 className="text-[72px] md:text-[100px] font-semibold tracking-[-0.03em] leading-[1.05] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 pb-4">
            LIMANEX <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-container to-secondary bg-[length:200%_200%] animate-gradient">STUDIO</span>
          </h1>

          <p className="text-[18px] leading-relaxed text-on-surface-variant max-w-3xl mx-auto font-medium">
            Apps & Games Designed for the Future. Precision-engineered for performance, crafted with an obsession for detail.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-6 items-center">
            {featuredApp && (
              <Link to={`/apps/${featuredApp.slug}`} className="group relative px-8 py-4 rounded-2xl text-[17px] font-bold active:scale-95 transition-all duration-300 w-full sm:w-auto hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(139,92,246,0.4)]">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary to-secondary rounded-2xl opacity-90 group-hover:opacity-100 transition-opacity blur-[2px] group-hover:blur-[8px]"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary to-secondary rounded-2xl"></div>
                <span className="relative text-white flex items-center justify-center gap-2">
                  Explore {featuredApp.name} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            )}
            <Link to="/games" className="group relative px-8 py-4 rounded-2xl text-[17px] font-bold active:scale-95 transition-all duration-300 w-full sm:w-auto text-center hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(236,72,153,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-r from-surface-bright via-surface-bright to-surface-bright rounded-2xl opacity-100 group-hover:opacity-0 transition-opacity border border-outline"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-primary-container/80 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-[4px]"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary-container rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative text-white flex items-center justify-center gap-2">
                View Games
              </span>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* AI is coming Section */}
      <section className="relative w-full py-[160px] overflow-hidden bg-background">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full bg-gradient-to-r from-primary-container via-primary to-secondary blur-[200px] opacity-20"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl mx-auto px-container-margin text-center flex flex-col items-center gap-6"
        >
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-surface-bright/50 border border-outline shadow-2xl mb-4">
            <span className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-container to-secondary animate-pulse-slow"></span>
          </div>
          
          <h2 className="text-[48px] md:text-[64px] font-semibold tracking-[-0.03em] leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-2">
            AI is coming.
          </h2>
          
          <p className="text-[18px] leading-relaxed text-on-surface-variant max-w-2xl font-medium mt-4">
            We are building the next generation of intelligent apps. Seamless, anticipatory, and fundamentally transformative.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
