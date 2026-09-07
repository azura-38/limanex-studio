import { Link } from "react-router-dom";
import { ArrowLeft, FileText, AlertTriangle, CheckCircle2 } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { StructuredData, getOrganizationSchema, getBreadcrumbSchema } from "../components/StructuredData";
import { LegalLayout } from "../components/LegalLayout";

export default function MeowoirsTerms() {
  useSEO({
    title: "Meowoirs Terms of Service — Limanex Studio",
    description: "Meowoirs terms of service by Limanex Studio. Read the complete terms, conditions, and disclaimers governing the use of the Meowoirs application.",
  });

  return (
    <>
      <StructuredData data={[
        getOrganizationSchema(),
        getBreadcrumbSchema([
          { name: "Home", url: "https://limanexstudio.com/" },
          { name: "Legal Center", url: "https://limanexstudio.com/privacy" },
          { name: "Meowoirs Terms of Service", url: "https://limanexstudio.com/terms/meowoirs" },
        ]),
      ]} />

      <LegalLayout
        title="Meowoirs Terms of Service"
        subtitle="Effective Date: September 7, 2026 | Legal Version: 1.0"
        badge="Legal Agreement & Terms"
        badgeIcon={FileText}
      >
        <div className="mb-8 pb-6 border-b border-white/[0.08] flex items-center justify-between">
          <Link to="/privacy" className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white transition-colors group min-h-[44px]">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
            <span>Back to Legal Center</span>
          </Link>
          <span className="text-xs font-mono text-accent-400 glass-pill px-3 py-1 rounded-full">
            Package: com.limanex.meowoirs
          </span>
        </div>

        {/* Disclaimer Warning Callout */}
        <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 mb-10 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0 text-amber-300">
            <AlertTriangle className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white mb-1">Not Veterinary or Medical Advice</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Meowoirs is strictly a personal companion memory journal and lifestyle application. It is NOT a medical or veterinary diagnostic tool. It does not provide medical diagnoses, treatment advice, or emergency animal services. Always consult a licensed veterinarian for animal health questions.
            </p>
          </div>
        </div>

        <section className="space-y-10 text-gray-300 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, accessing, or using the Meowoirs mobile software application (&quot;Application&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, you must not access, download, or use the Application, and must promptly uninstall it.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">2. Eligibility &amp; Service Description</h2>
            <p>
              You represent that you have legal capacity to enter into these Terms under applicable law, or have obtained consent from a parent or legal guardian if a minor.
            </p>
            <p className="mt-3">
              Meowoirs is an offline-first companion memory journal for cat guardians, providing cat profiles, journal memories, photo associations via Android Photo Picker, mood reflections, and milestone tracking. It is supported by digital advertising.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">3. Account-Free Architecture &amp; Local Storage</h2>
            <p>
              Meowoirs operates without user accounts, logins, or central user databases. Access is immediate upon installation.
            </p>
            <p className="mt-3">
              All cat profiles, memories, notes, and mood selections are stored locally on your Android device. LIMANEX does not maintain a remote server or cloud database for your journal entries. Meowoirs does not operate its own cloud backup or synchronization service. Clearing application data or uninstalling the application will remove locally stored Meowoirs data.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">4. User Content &amp; Backup Responsibility</h2>
            <p>
              You retain all ownership and intellectual property rights in the text, notes, and photos you associate with Meowoirs.
            </p>
            <p className="mt-3">
              Because Meowoirs stores journal entries locally without a cloud backup, LIMANEX cannot restore or recover lost data resulting from deletion, clearing app storage, uninstalling, device damage, operating system corruption, or device loss. You are solely responsible for maintaining independent external backups of irreplaceable photos, notes, and memories.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">5. Intellectual Property &amp; Limited License</h2>
            <p>
              The Application, including its design, UI layout, themes, icons, source code, and brand names (&quot;Meowoirs&quot;, &quot;LIMANEX&quot;), is the exclusive intellectual property of LIMANEX and its licensors.
            </p>
            <p className="mt-3">
              LIMANEX grants you a personal, revocable, non-exclusive, non-transferable, limited license to install and use Meowoirs on your compatible Android device for personal, non-commercial purposes in accordance with these Terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">6. Advertising &amp; Third-Party Services</h2>
            <p>
              Meowoirs displays non-intrusive banner and interstitial advertisements served by Google Mobile Ads (AdMob). Third-party SDKs operate under their respective terms and privacy policies. LIMANEX does not endorse or assume liability for third-party products, services, or websites advertised within the Application.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">7. Disclaimer of Warranties</h2>
            <p className="uppercase text-xs tracking-wider text-gray-400 bg-white/[0.03] p-4 rounded-xl border border-white/[0.06]">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE APPLICATION IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, LIMANEX&apos;S TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO MEOWOIRS OR THESE TERMS SHALL NOT EXCEED USD 100. THIS LIMITATION DOES NOT APPLY WHERE PROHIBITED BY MANDATORY CONSUMER PROTECTION LAW.
            </p>
            <p className="mt-3">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, LIMANEX SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR LOSS OF DATA, REPUTATION, OR GOODWILL.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">9. Governing Law &amp; Jurisdiction</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of the Republic of Türkiye, without regard to its conflict of law principles. Competent courts and enforcement offices in Türkiye shall have jurisdiction over disputes arising under these Terms, subject to mandatory statutory jurisdiction rules and non-waivable consumer rights.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">10. Contact Information</h2>
            <p>For questions or notices regarding these Terms:</p>
            <p className="mt-2 text-gray-300">
              <strong>Developer / Operator:</strong> LIMANEX<br />
              <strong>Country:</strong> Türkiye<br />
              <strong>Official Contact Email:</strong>{" "}
              <a href="mailto:limanexsoftware@outlook.com" className="text-brand-300 hover:text-white underline">
                limanexsoftware@outlook.com
              </a><br />
              <strong>Website:</strong>{" "}
              <a href="https://limanexstudio.com" className="text-brand-300 hover:text-white underline">
                https://limanexstudio.com
              </a>
            </p>
          </div>
        </section>
      </LegalLayout>
    </>
  );
}
