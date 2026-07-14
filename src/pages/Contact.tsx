import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useSEO } from "../hooks/useSEO";
import { StructuredData, getOrganizationSchema, getBreadcrumbSchema } from "../components/StructuredData";

export default function Contact() {
  useSEO({
    title: "Contact Us — Limanex Studio",
    description: "Get in touch with Limanex Studio. Questions about our apps, partnership opportunities, or just want to say hello — we're ready to listen.",
  });

  return (
    <main id="main-content" className="flex-grow flex flex-col justify-center max-w-[1100px] mx-auto w-full px-container-margin py-stack-xl md:py-24 pt-[140px]">
      <StructuredData data={[getOrganizationSchema(), getBreadcrumbSchema([{ name: "Home", url: "https://limanexstudio.com/" }, { name: "Contact", url: "https://limanexstudio.com/contact" }])]} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-xl lg:gap-32 items-center">
        {/* Left Column: Email & Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-stack-md"
        >
          <div className="space-y-stack-sm">
            <h1 className="text-[64px] md:text-[80px] font-semibold tracking-[-0.03em] leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-4">Get in touch.</h1>
            <p className="text-[18px] leading-relaxed text-on-surface-variant max-w-md">
              Whether you have a question about our games, partnership opportunities, or just want to say hello, we're ready to listen.
            </p>
          </div>
          
          <div className="pt-stack-md">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-outline mb-2">Direct Email</p>
            <a 
              className="text-[28px] font-bold tracking-tight text-primary hover:text-secondary-container transition-colors duration-300 block break-all" 
              href="mailto:limanexsoftware@outlook.com"
            >
              limanexsoftware@outlook.com
            </a>
          </div>
        </motion.div>

        {/* Right Column: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-1 blur-xl bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-20 animate-pulse-slow" aria-hidden="true"></div>
          <div className="bg-surface/60 backdrop-blur-3xl border border-outline p-8 md:p-12 rounded-xl relative z-10">
            <form className="space-y-stack-md" onSubmit={(e) => e.preventDefault()} noValidate>
            <div className="space-y-2">
              <label className="text-[12px] font-semibold uppercase tracking-widest text-on-surface-variant block" htmlFor="contact-name">Name</label>
              <input 
                className="w-full bg-surface border-b border-outline focus:border-primary-container focus:ring-0 px-0 py-3 text-on-background text-[17px] outline-none transition-colors placeholder:text-on-surface-variant/50 rounded-none" 
                id="contact-name" 
                name="name" 
                placeholder="Your full name" 
                required 
                type="text"
                autoComplete="name"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-[12px] font-semibold uppercase tracking-widest text-on-surface-variant block" htmlFor="contact-email">Email Address</label>
              <input 
                className="w-full bg-surface border-b border-outline focus:border-primary-container focus:ring-0 px-0 py-3 text-on-background text-[17px] outline-none transition-colors placeholder:text-on-surface-variant/50 rounded-none" 
                id="contact-email" 
                name="email" 
                placeholder="you@example.com" 
                required 
                type="email"
                autoComplete="email"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-[12px] font-semibold uppercase tracking-widest text-on-surface-variant block" htmlFor="contact-message">Message</label>
              <textarea 
                className="w-full bg-surface border-b border-outline focus:border-primary-container focus:ring-0 px-0 py-3 text-on-background text-[17px] outline-none transition-colors placeholder:text-on-surface-variant/50 resize-none rounded-none" 
                id="contact-message" 
                name="message" 
                placeholder="How can we help you?" 
                required 
                rows={4}
              ></textarea>
            </div>
            
            <div className="pt-4">
              <button 
                className="group relative w-full md:w-auto px-8 py-4 rounded-2xl text-[17px] font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(139,92,246,0.5)] active:scale-95 min-h-[48px]" 
                type="submit"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary to-secondary rounded-2xl opacity-90 group-hover:opacity-100 transition-opacity blur-[2px] group-hover:blur-[8px]" aria-hidden="true"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary to-secondary rounded-2xl border border-white/10" aria-hidden="true"></div>
                <span className="relative text-white flex items-center justify-center gap-2">
                  Send Message
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                </span>
              </button>
            </div>
          </form>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
