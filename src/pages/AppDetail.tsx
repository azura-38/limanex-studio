import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { Download, Shield, Lock, Info, Check, ArrowLeft } from "lucide-react";
import { apps } from "../data/apps";
import { FeatureIcon } from "../components/FeatureIcon";
import { useSEO } from "../hooks/useSEO";
import { StructuredData, getOrganizationSchema, getSoftwareApplicationSchema, getBreadcrumbSchema } from "../components/StructuredData";

export default function AppDetail() {
  const { slug } = useParams();
  const app = apps.find((a) => a.slug === slug);

  useSEO({
    title: app ? `${app.name} — ${app.hero_tagline} | Limanex Studio` : "App Not Found | Limanex Studio",
    description: app ? app.short_description : "The requested app page could not be found.",
    ogType: "product",
  });

  if (!app) {
    return (
      <main id="main-content" className="min-h-screen bg-[#0F172A] text-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-[#CBD5F5] mb-8">Oops! The app you're looking for doesn't exist.</p>
        <Link to="/" className="text-[#4F7CFF] hover:underline flex items-center gap-2 min-h-[44px]">
          <ArrowLeft className="w-5 h-5" aria-hidden="true" /> Back to Home
        </Link>
      </main>
    );
  }

  return (
    <div className="bg-[#0F172A] min-h-screen text-white font-sans selection:bg-[#4F7CFF] selection:text-white">
      <StructuredData data={[
        getOrganizationSchema(),
        getSoftwareApplicationSchema(app),
        getBreadcrumbSchema([
          { name: "Home", url: "https://limanexstudio.com/" },
          { name: "Apps", url: "https://limanexstudio.com/apps" },
          { name: app.name, url: `https://limanexstudio.com/apps/${app.slug}` },
        ]),
      ]} />

      {/* Background Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#4F7CFF] mix-blend-screen filter blur-[150px] opacity-10 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#22D3EE] mix-blend-screen filter blur-[150px] opacity-10 animate-blob-reverse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-[#8B5CF6] mix-blend-screen filter blur-[180px] opacity-10 animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>

      <main id="main-content" className="relative z-10 pt-32 pb-40 flex flex-col items-center">
        {/* HERO SECTION */}
        <section className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-32 flex flex-col lg:flex-row items-center gap-16 relative" aria-label={`${app.name} overview`}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,_rgba(79,124,255,0.08),_transparent_70%)] pointer-events-none -m-10" aria-hidden="true"></div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 flex flex-col items-start text-left"
          >
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#111827] border border-white/10 shadow-xl mb-6">
              <span className="text-xs font-bold tracking-[0.15em] uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#4F7CFF] via-[#22D3EE] to-[#8B5CF6]">
                {app.hero_tagline}
              </span>
            </div>
            
            <h1 className="text-[48px] md:text-[64px] lg:text-[72px] font-semibold tracking-[-0.03em] leading-[1.05] text-white mb-6">
              {app.hero_title}
            </h1>
            
            <p className="text-[20px] md:text-[24px] leading-relaxed text-[#CBD5F5] font-medium max-w-2xl mb-10">
              {app.short_description}
            </p>

            <div className="flex flex-col items-start gap-4">
              <a href={app.playstore_link} target="_blank" rel="noopener noreferrer" className="group relative px-10 py-5 rounded-2xl text-[16px] font-bold uppercase tracking-[0.1em] transition-all duration-300 w-full sm:w-auto hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(79,124,255,0.6)] active:scale-95 min-h-[56px] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-[#4F7CFF] via-[#22D3EE] to-[#8B5CF6] rounded-2xl opacity-100 group-hover:opacity-100 transition-all blur-[8px] group-hover:blur-[16px]" aria-hidden="true"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#4F7CFF] via-[#22D3EE] to-[#8B5CF6] rounded-2xl border border-white/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]" aria-hidden="true"></div>
                <span className="relative text-white flex items-center justify-center gap-3 drop-shadow-md">
                  <Download className="w-6 h-6" aria-hidden="true" />
                  Get it on Google Play
                </span>
              </a>
              <p className="mt-2 text-[13px] text-[#A1A1A6] font-medium flex items-center gap-2">
                <Check className="w-4 h-4 text-[#22D3EE]" aria-hidden="true" /> Free to use • No sign-up required
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex-1 w-full max-w-[400px] lg:max-w-none relative flex justify-center"
            aria-hidden="true"
          >
             {/* Phone Mockup — decorative only */}
            <div className="relative w-[300px] h-[600px] bg-[#111827] rounded-[48px] border-[8px] border-[#1E293B] shadow-2xl overflow-hidden flex flex-col">
              <div className="absolute top-0 inset-x-0 h-6 bg-[#111827] z-20 flex justify-center rounded-t-[40px]">
                <div className="w-32 h-6 bg-[#1E293B] rounded-b-[16px]"></div>
              </div>
              <div className="flex-1 overflow-hidden p-4 pt-12 flex flex-col gap-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-24 h-4 bg-white/10 rounded-full"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4F7CFF] to-[#8B5CF6] opacity-80 blur-sm"></div>
                </div>
                <div className="h-24 rounded-2xl bg-gradient-to-r from-[#111827] to-[#1E293B] border border-white/5 flex items-end p-2 gap-2">
                  {[40, 60, 45, 80, 50, 65, 55].map((h, i) => (
                    <div key={i} className="flex-1 bg-[#4F7CFF] rounded-t-sm opacity-80" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
                <div className="p-4 rounded-2xl bg-[#0F172A] border border-white/5 space-y-2 mt-2">
                   <div className="w-20 h-3 bg-white/10 rounded-full"></div>
                   <div className="w-32 h-4 bg-white/20 rounded-full"></div>
                </div>
                <div className="p-4 rounded-2xl bg-[#0F172A] border border-white/5 space-y-2">
                   <div className="w-full h-12 bg-white/5 rounded-xl"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* TRUST SECTION */}
        <section className="w-full max-w-5xl mx-auto px-6 py-20 md:py-28 relative" aria-label="Trust and privacy">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4F7CFF]/5 to-transparent pointer-events-none -z-10" aria-hidden="true"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col justify-center items-center gap-5 bg-[#111827]/40 backdrop-blur-md p-8 rounded-[32px] border border-[#1E293B]/50 text-center hover:bg-[#111827]/80 hover:border-[#4F7CFF]/30 transition-all duration-500 shadow-xl relative group">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#4F7CFF]/20 to-[#4F7CFF]/5 flex items-center justify-center shrink-0 border border-[#4F7CFF]/20 shadow-[0_0_20px_rgba(79,124,255,0.2)]" aria-hidden="true">
                <Lock className="w-6 h-6 text-[#4F7CFF]" />
              </div>
              <span className="text-[17px] font-medium text-white tracking-tight">Your data stays private</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 bg-[#111827]/40 backdrop-blur-md p-8 rounded-[32px] border border-[#1E293B]/50 text-center hover:bg-[#111827]/80 hover:border-[#22D3EE]/30 transition-all duration-500 shadow-xl relative group">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#22D3EE]/20 to-[#22D3EE]/5 flex items-center justify-center shrink-0 border border-[#22D3EE]/20 shadow-[0_0_20px_rgba(34,211,238,0.2)]" aria-hidden="true">
                <Info className="w-6 h-6 text-[#22D3EE]" />
              </div>
              <span className="text-[17px] font-medium text-white tracking-tight">No diagnosis, only guidance</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 bg-[#111827]/40 backdrop-blur-md p-8 rounded-[32px] border border-[#1E293B]/50 text-center hover:bg-[#111827]/80 hover:border-[#8B5CF6]/30 transition-all duration-500 shadow-xl relative group">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#8B5CF6]/20 to-[#8B5CF6]/5 flex items-center justify-center shrink-0 border border-[#8B5CF6]/20 shadow-[0_0_20px_rgba(139,92,246,0.2)]" aria-hidden="true">
                <Shield className="w-6 h-6 text-[#8B5CF6]" />
              </div>
              <span className="text-[17px] font-medium text-white tracking-tight">Secure &amp; encrypted storage</span>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="w-full py-32 relative bg-gradient-to-b from-[#0F172A] via-[#111827] to-[#0F172A]" aria-label="App features">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" aria-hidden="true"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-24">
              <h2 className="text-[40px] md:text-[56px] font-semibold tracking-[-0.02em] text-white mb-6">
                Everything you need. <br />Nothing you don't.
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {app.features.map((feature, i) => (
                <article key={i} className="bg-[#111827]/60 backdrop-blur-lg p-10 rounded-[32px] border border-white/5 hover:border-white/10 transition-colors shadow-2xl relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4F7CFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"></div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4F7CFF] to-[#0F172A] flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(79,124,255,0.3)]" aria-hidden="true">
                    <FeatureIcon name={feature.iconName} className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-[22px] font-semibold text-white mb-4 leading-tight tracking-tight">{feature.title}</h3>
                  <p className="text-[#CBD5F5] text-[16px] leading-[1.6]">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* APP SHOWCASE SECTION */}
        <section className="w-full py-32 overflow-hidden bg-gradient-to-b from-[#0F172A] via-[#111827]/80 to-[#0F172A]" aria-label="App screenshots">
          <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
             <h2 className="text-[40px] md:text-[56px] font-semibold tracking-[-0.03em] text-white">Designed for clarity</h2>
          </div>
          <div className="flex gap-12 px-6 md:px-12 overflow-x-auto pb-24 pt-16 snap-x hide-scrollbar justify-start md:justify-center" role="region" aria-label="Screenshot gallery" tabIndex={0}>
            {app.screenshots.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: item.delay / 1000, ease: "easeOut" }}
                className="shrink-0 snap-center relative w-[300px] md:w-[360px] group transition-transform hover:-translate-y-6 duration-700"
              >
                <div 
                  className="absolute inset-0 rounded-[48px] opacity-20 group-hover:opacity-100 transition-opacity duration-700 blur-[40px] -z-10" 
                  style={{ backgroundColor: item.glow, transform: 'scale(0.8)' }}
                  aria-hidden="true"
                ></div>
                <div className="relative rounded-[40px] md:rounded-[48px] overflow-hidden border border-[#1E293B] shadow-[0_30px_60px_rgba(0,0,0,0.6)] group-hover:border-white/20 transition-colors duration-700">
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    width={item.width}
                    height={item.height}
                    decoding="async"
                    loading="lazy"
                    className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105" 
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* DOWNLOAD SECTION */}
        <section className="w-full max-w-4xl mx-auto px-6 py-32 text-center relative" aria-label="Download the app">
          <h2 className="text-[48px] md:text-[72px] font-semibold tracking-[-0.03em] text-white mb-10 leading-[1.05]">
            Take control of your health
          </h2>
          <a href={app.playstore_link} target="_blank" rel="noopener noreferrer" className="group relative px-12 py-6 rounded-[2rem] text-[18px] md:text-[20px] font-bold uppercase tracking-[0.1em] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(34,211,238,0.6)] active:scale-95 mx-auto flex items-center justify-center gap-4 w-full sm:w-auto min-h-[56px]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4F7CFF] via-[#22D3EE] to-[#8B5CF6] rounded-[2rem] opacity-100 transition-all duration-500 blur-[12px] group-hover:blur-[24px]" aria-hidden="true"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#4F7CFF] via-[#22D3EE] to-[#8B5CF6] rounded-[2rem] border border-white/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]" aria-hidden="true"></div>
            <span className="relative text-white flex items-center justify-center gap-4 drop-shadow-lg">
              Get Started Today
            </span>
          </a>
        </section>
      </main>
    </div>
  );
}
