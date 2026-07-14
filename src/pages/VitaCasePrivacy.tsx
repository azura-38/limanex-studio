import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { StructuredData, getOrganizationSchema, getBreadcrumbSchema, getFAQSchema } from "../components/StructuredData";

const vitacaseFAQs = [
  {
    question: "What information does VitaCase collect?",
    answer: "VitaCase may process information you voluntarily provide, including documents, files, health-related records, notes, medications, appointments, and limited technical data like device info, IP addresses, usage data, and crash logs."
  },
  {
    question: "Does VitaCase access or read my documents?",
    answer: "No. VitaCase does not access, read, analyze, or interpret your documents. All content remains under your control."
  },
  {
    question: "How is my Medication, Appointment, and Reminder Data handled?",
    answer: "This data is entered and controlled by the user. VitaCase does not verify, validate, analyze, interpret, or medically review medication, appointment, or health-related information. Notifications and reminders are provided only as a convenience feature and may fail to appear due to device settings or operating system restrictions."
  },
  {
    question: "Does VitaCase sell my personal data?",
    answer: "No. VitaCase does not sell personal data, use data for profiling, or use personal data for targeted advertising."
  },
  {
    question: "Is VitaCase a medical provider?",
    answer: "No. VitaCase is not a healthcare provider and does not provide medical advice, diagnosis, or treatment. Users should always consult qualified healthcare professionals."
  },
];

export default function VitaCasePrivacy() {
  useSEO({
    title: "VitaCase Privacy Policy — Limanex Studio",
    description: "VitaCase privacy policy by Limanex Studio. Learn how VitaCase collects, uses, stores, and protects your personal, health-related, medication, and reminder information.",
  });

  return (
    <div className="bg-[#0F172A] min-h-screen text-white font-sans selection:bg-[#4F7CFF] selection:text-white">
      <StructuredData data={[
        getOrganizationSchema(),
        getBreadcrumbSchema([
          { name: "Home", url: "https://limanexstudio.com/" },
          { name: "Privacy", url: "https://limanexstudio.com/privacy" },
          { name: "VitaCase Policy", url: "https://limanexstudio.com/privacy/vitacase" },
        ]),
        getFAQSchema(vitacaseFAQs),
      ]} />

      <main id="main-content" className="flex-grow pt-32 pb-32 px-6 max-w-7xl mx-auto w-full relative">
        <motion.article 
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[800px] mx-auto w-full bg-[#111827]/40 backdrop-blur-3xl border border-white/5 rounded-[40px] p-8 md:p-16 shadow-2xl relative z-10"
        >
          <header className="mb-16 text-center border-b border-white/10 pb-12">
             <Link to="/privacy" className="inline-flex items-center gap-2 text-[#CBD5F5] hover:text-white transition-colors mb-8 group min-h-[44px]">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" aria-hidden="true" /> Back to Privacy Overview
            </Link>
            <div className="flex justify-center mb-6">
                <div className="p-4 rounded-2xl bg-[#4F7CFF]/10 border border-[#4F7CFF]/20" aria-hidden="true">
                  <Shield className="w-8 h-8 text-[#4F7CFF]" />
                </div>
            </div>
            <h1 className="text-[40px] md:text-[56px] font-semibold tracking-[-0.03em] leading-tight text-white mb-4">
              VitaCase Privacy Policy
            </h1>
            <p className="text-[14px] uppercase tracking-[0.15em] text-[#CBD5F5] font-medium">
              Last Updated — May 26, 2026
            </p>
          </header>
          
          <div className="text-[#CBD5F5] text-[16px] leading-[1.8] space-y-10 font-sans">
            <section aria-label="About the application">
              <h2 className="text-[24px] font-semibold text-white tracking-tight mb-4">1. About the Application</h2>
              <p>This Privacy Policy describes how Limanex Software (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, stores, and protects your information when you use the VitaCase mobile application (&ldquo;App&rdquo;, &ldquo;Service&rdquo;).</p>
              <p className="mt-3">VitaCase is a personal document management application designed to allow users to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Store and organize documents (including health records, prescriptions, invoices, and personal files)</li>
                <li>Track medications and appointments</li>
                <li>Manage personal notes and important information</li>
              </ul>
              <p className="mt-4 p-4 bg-white/5 rounded-xl border border-white/10"><strong>⚠️ Important Notice:</strong> VitaCase is not a medical or healthcare provider and does not provide medical advice, diagnosis, or treatment.</p>
            </section>

            <section aria-label="Information we collect">
              <h2 className="text-[24px] font-semibold text-white tracking-tight mb-4">2. Information We Collect</h2>
              <h3 className="text-[18px] font-semibold text-white mt-4 mb-2">A. Information You Provide</h3>
              <p>We may process information that you voluntarily provide, including documents and files uploaded by you, health-related records (if you choose to store them), notes, medications, and appointments.</p>
              <p className="mt-3"><strong>Important:</strong> We do not access, read, analyze, or interpret your documents. All content remains under your control.</p>
              
              <h3 className="text-[18px] font-semibold text-white mt-6 mb-2">B. Automatically Collected Information</h3>
              <p>We may automatically collect limited technical data such as device information (model, OS, device ID), IP address, usage data (interactions within the app), and crash logs and diagnostic data.</p>
              
              <h3 className="text-[18px] font-semibold text-white mt-6 mb-2">C. Information We Do NOT Collect</h3>
              <p>We do not intentionally collect personal data from third parties, biometric data (face ID, fingerprint, etc.), financial/payment information, or social media data.</p>
            </section>

            <section aria-label="Sensitive information">
              <h2 className="text-[24px] font-semibold text-white tracking-tight mb-4">3. Sensitive Information</h2>
              <p>The App may store sensitive data provided by users, including health-related information and personal documents and files.</p>
              
              <h3 className="text-[18px] font-semibold text-white mt-6 mb-2">3A. Medication, Appointment and Reminder Data</h3>
              <p>VitaCase may allow users to save medication names, schedules, appointment details, reminder times, notes, and related personal records.</p>
              <p className="mt-2">This information is entered and controlled by the user. VitaCase does not verify, validate, analyze, interpret, or medically review medication, appointment, or health-related information.</p>
              <p className="mt-2">Users are responsible for ensuring that saved medication schedules, appointment details, reminders, and related records are accurate, current, and properly backed up.</p>
              <p className="mt-2">VitaCase notifications and reminders are provided only as a convenience feature and may be delayed, blocked, silenced, or fail to appear due to device settings, operating system restrictions, battery optimization, permission changes, app updates, or technical issues.</p>
              
              <p className="mt-4"><strong>However:</strong> This data is user-provided only. We do not process, analyze, or interpret this data, and we do not use this data for profiling or decision-making.</p>
            </section>

            <section aria-label="How we use information">
              <h2 className="text-[24px] font-semibold text-white tracking-tight mb-4">4. How We Use Information</h2>
              <p>We process information only to provide and maintain app functionality, enable document storage and organization, improve app performance and stability, detect and fix technical issues, and ensure security and prevent misuse.</p>
            </section>

            <section aria-label="What we do not do">
              <h2 className="text-[24px] font-semibold text-white tracking-tight mb-4">5. What We Do Not Do</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Sell personal data</li>
                <li>Access or review user documents</li>
                <li>Use data for profiling or behavioral analysis</li>
                <li>Use personal data for targeted advertising</li>
              </ul>
              <p className="mt-3">We do not use user data for advertising profiling purposes.</p>
            </section>

            <section aria-label="Data sharing and third parties">
              <h2 className="text-[24px] font-semibold text-white tracking-tight mb-4">6. Data Sharing and Third Parties</h2>
              <p>We may share limited technical data with trusted third-party service providers such as advertising services (e.g., AdMob) and crash reporting and analytics tools (e.g., Sentry).</p>
              <p className="mt-3"><strong>Important:</strong> No personal documents, health data, or sensitive content is shared.</p>
            </section>

            <section aria-label="Cookies and tracking">
              <h2 className="text-[24px] font-semibold text-white tracking-tight mb-4">7. Cookies and Tracking Technologies</h2>
              <p>VitaCase does not use cookies. We may use limited tracking technologies only for app performance monitoring and error tracking and diagnostics.</p>
            </section>

            <section aria-label="International data transfers">
              <h2 className="text-[24px] font-semibold text-white tracking-tight mb-4">8. International Data Transfers</h2>
              <p>Your information may be processed in countries outside your residence. We ensure appropriate safeguards, industry-standard protection measures, and compliance with applicable data protection laws.</p>
            </section>

            <section aria-label="Data retention">
              <h2 className="text-[24px] font-semibold text-white tracking-tight mb-4">9. Data Retention</h2>
              <p>We retain data for as long as the user continues to use the app. Users can delete their files at any time and remove stored information manually. Technical data (e.g., crash logs) may be retained for a limited period for performance and security purposes.</p>
            </section>

            <section aria-label="Data security">
              <h2 className="text-[24px] font-semibold text-white tracking-tight mb-4">10. Data Security</h2>
              <p>We implement appropriate technical and organizational measures, including secure storage mechanisms, access control systems, and industry-standard security practices. However, no system is completely secure.</p>
            </section>

            <section aria-label="Children's privacy">
              <h2 className="text-[24px] font-semibold text-white tracking-tight mb-4">11. Children's Privacy</h2>
              <p>The App is not intended for children under 13. We do not knowingly collect personal data from children.</p>
            </section>

            <section aria-label="Your privacy rights">
              <h2 className="text-[24px] font-semibold text-white tracking-tight mb-4">12. Your Privacy Rights</h2>
              <p>Depending on your location, you may have the right to access your data, request deletion, request correction, and object to certain processing. You may contact us to exercise these rights.</p>
            </section>

            <section aria-label="Contact information">
              <h2 className="text-[24px] font-semibold text-white tracking-tight mb-4">13. Contact Information</h2>
              <p>For any privacy-related inquiries: <a href="mailto:limanexsoftware@outlook.com" className="text-white hover:text-[#4F7CFF] transition-colors font-medium">limanexsoftware@outlook.com</a></p>
            </section>

            <section aria-label="Medical disclaimer">
              <h2 className="text-[24px] font-semibold text-white tracking-tight mb-4">14. Medical Disclaimer</h2>
              <p>VitaCase is not a healthcare provider. The App does not provide medical advice, does not diagnose or treat medical conditions, and should not be used as a substitute for professional healthcare. Users should always consult qualified healthcare professionals.</p>
            </section>

            <section aria-label="Data responsibility">
              <h2 className="text-[24px] font-semibold text-white tracking-tight mb-4">15. Data Responsibility</h2>
              <p>Users are solely responsible for the content they upload and the accuracy of their information. We do not verify, validate, or interpret user data.</p>
              <p className="mt-2">Users are responsible for keeping independent backups of important documents, medication records, appointment details, and health-related information. VitaCase should not be used as the only source or only backup for critical records.</p>
            </section>

            <section aria-label="Policy updates">
              <h2 className="text-[24px] font-semibold text-white tracking-tight mb-4">16. Policy Updates</h2>
              <p>We may update this Privacy Policy from time to time. Users are encouraged to review this page periodically.</p>
            </section>
          </div>
        </motion.article>
      </main>
    </div>
  );
}
