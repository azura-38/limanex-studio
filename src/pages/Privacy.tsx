import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Shield, FileText, ChevronRight } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { StructuredData, getOrganizationSchema, getBreadcrumbSchema } from "../components/StructuredData";

export default function Privacy() {
  useSEO({
    title: "Privacy Center — Limanex Studio",
    description: "Limanex Studio's Privacy Center. Transparent data management for all products. View detailed privacy policies for VitaCase and other applications.",
  });

  return (
    <div className="bg-[#0F172A] min-h-screen text-white font-sans selection:bg-[#4F7CFF] selection:text-white">
      <StructuredData data={[getOrganizationSchema(), getBreadcrumbSchema([{ name: "Home", url: "https://limanexstudio.com/" }, { name: "Privacy", url: "https://limanexstudio.com/privacy" }])]} />

      <main id="main-content" className="flex-grow pt-32 pb-32 px-6 max-w-7xl mx-auto w-full relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[800px] mx-auto w-full bg-[#111827]/40 backdrop-blur-3xl border border-white/5 rounded-[40px] p-8 md:p-16 shadow-2xl relative z-10"
        >
          <header className="mb-16 text-center border-b border-white/10 pb-12">
            <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-[#4F7CFF]/10 border border-[#4F7CFF]/20 mb-6" aria-hidden="true">
              <Shield className="w-8 h-8 text-[#4F7CFF]" />
            </div>
            <h1 className="text-[48px] md:text-[56px] font-semibold tracking-[-0.03em] leading-tight text-white mb-4">
              Privacy Center
            </h1>
            <p className="text-[14px] uppercase tracking-[0.15em] text-[#CBD5F5] font-medium">
              Transparent data management for all products
            </p>
          </header>
          
          <div className="space-y-12 text-[17px] leading-[1.8] text-[#CBD5F5]">
            <section aria-label="Application privacy policies">
              <h2 className="text-[28px] font-semibold text-white tracking-tight mb-5">Application Policies</h2>
              <p>Select an application to view its detailed privacy policy. Each policy is designed to be clear, transparent, and protective of your data.</p>
              
              <div className="grid grid-cols-1 gap-4 mt-8">
                <Link 
                  to="/privacy/vitacase" 
                  className="group flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-[#4F7CFF]/10 hover:border-[#4F7CFF]/30 transition-all duration-300 min-h-[72px]"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4F7CFF] to-[#8B5CF6] flex items-center justify-center shadow-lg" aria-hidden="true">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#4F7CFF] transition-colors">VitaCase Policy</h3>
                      <p className="text-sm text-[#CBD5F5]">Health records &amp; Medication tracking</p>
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 text-[#CBD5F5] group-hover:text-white group-hover:translate-x-1 transition-all" aria-hidden="true" />
                </Link>
              </div>
            </section>

            <section aria-label="Our privacy philosophy">
              <h2 className="text-[28px] font-semibold text-white tracking-tight mb-5">Our Philosophy</h2>
              <div className="space-y-4">
                <p>At <strong>Limanex Studio</strong>, we believe your data belongs to you. We implement industry-leading encryption and never sell your personal information to third parties.</p>
              </div>
            </section>

            <section className="pt-12 border-t border-white/10" aria-label="Contact for questions">
              <p className="text-[17px]">
                Questions? Reach out to us via our <Link to="/contact" className="text-white hover:text-[#4F7CFF] transition-colors font-medium border-b border-transparent hover:border-[#4F7CFF] pb-0.5">Contact</Link> page.
              </p>
            </section>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
