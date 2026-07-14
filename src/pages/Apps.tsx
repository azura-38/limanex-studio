import { motion } from "motion/react";
import { Link, Navigate } from "react-router-dom";
import { apps } from "../data/apps";
import { ArrowRight, Sparkles } from "lucide-react";
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
    <div className="bg-[#0F172A] min-h-screen text-white font-sans selection:bg-[#4F7CFF] selection:text-white">
      <StructuredData data={[getOrganizationSchema(), getBreadcrumbSchema([{ name: "Home", url: "https://limanexstudio.com/" }, { name: "Apps", url: "https://limanexstudio.com/apps" }])]} />

      {/* Background Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#4F7CFF] mix-blend-screen filter blur-[150px] opacity-10 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#22D3EE] mix-blend-screen filter blur-[150px] opacity-10 animate-blob-reverse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-[#8B5CF6] mix-blend-screen filter blur-[180px] opacity-10 animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>

      <main id="main-content" className="relative z-10 pt-48 pb-40 px-6 max-w-7xl mx-auto w-full">
        <header className="mb-20 text-center">
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center justify-center p-3 rounded-2xl bg-[#111827]/80 border border-[#22D3EE]/30 mb-6 shadow-[0_0_20px_rgba(34,211,238,0.1)]"
            aria-hidden="true"
          >
            <Sparkles className="w-6 h-6 text-[#22D3EE]" />
          </motion.div>
          <h1 className="text-[56px] md:text-[72px] font-semibold tracking-[-0.03em] leading-tight text-white mb-6">
            Our Applications
          </h1>
          <p className="text-[20px] text-[#CBD5F5] max-w-2xl mx-auto font-medium">
            Explore our collection of precision-engineered tools designed to enhance your digital life.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {apps.map((app, i) => (
            <motion.article
              key={app.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group relative bg-[#111827]/40 backdrop-blur-xl border border-white/5 p-10 rounded-[40px] hover:border-[#4F7CFF]/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#4F7CFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"></div>
              
              <div className="relative z-10">
                <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#22D3EE] mb-4">
                  {app.hero_tagline}
                </div>
                <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-[#4F7CFF] transition-colors">{app.name}</h2>
                <p className="text-[#CBD5F5] text-lg mb-8 leading-relaxed">
                  {app.short_description}
                </p>
                <Link to={`/apps/${app.slug}`} className="inline-flex items-center gap-2 text-white font-bold group/link min-h-[44px]">
                  View Showcase <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </div>

              {/* Decorative app shape */}
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-gradient-to-br from-[#4F7CFF]/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" aria-hidden="true"></div>
            </motion.article>
          ))}
        </div>
      </main>
    </div>
  );
}
