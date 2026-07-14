import { motion } from "motion/react";
import { useSEO } from "../hooks/useSEO";
import { StructuredData, getOrganizationSchema, getBreadcrumbSchema } from "../components/StructuredData";

export default function Games() {
  useSEO({
    title: "Games — Coming Soon | Limanex Studio",
    description: "Limanex Studio is forging the next generation of immersive gaming experiences. Expect groundbreaking visuals and uncompromising performance.",
  });

  return (
    <main id="main-content" className="flex-grow pt-32 pb-stack-xl px-container-margin max-w-[1100px] mx-auto w-full relative min-h-[70vh] flex items-center justify-center">
      <StructuredData data={[getOrganizationSchema(), getBreadcrumbSchema([{ name: "Home", url: "https://limanexstudio.com/" }, { name: "Games", url: "https://limanexstudio.com/games" }])]} />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vh] bg-primary/10 blur-[150px] pointer-events-none rounded-full" aria-hidden="true"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center flex flex-col items-center max-w-2xl"
      >
        <div className="inline-flex items-center justify-center p-4 rounded-full bg-surface-bright/50 border border-outline shadow-2xl mb-8" aria-hidden="true">
          <span className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-container to-secondary animate-pulse-slow"></span>
        </div>
        
        <h1 className="text-[64px] md:text-[80px] font-semibold tracking-[-0.03em] leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-6 drop-shadow-sm">
          Coming Soon
        </h1>
        
        <p className="text-[20px] leading-relaxed text-on-surface-variant font-medium">
          We are currently forging our next generation of immersive experiences. 
          Expect groundbreaking visuals and uncompromising performance.
        </p>
      </motion.div>
    </main>
  );
}
