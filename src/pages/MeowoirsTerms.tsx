import { Link } from "react-router-dom";
import { ArrowLeft, FileText, AlertTriangle, ShieldCheck, Scale, AlertCircle } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { StructuredData, getOrganizationSchema, getBreadcrumbSchema, getFAQSchema } from "../components/StructuredData";
import { LegalLayout } from "../components/LegalLayout";

const meowoirsTermsFAQs = [
  {
    question: "Do I need to sign up or create an account to use Meowoirs?",
    answer: "No. Meowoirs operates under an account-free architecture. There are no logins, usernames, passwords, or cloud accounts. The app is ready to use immediately upon installation.",
  },
  {
    question: "Who owns the photos, notes, and cat profiles I create in Meowoirs?",
    answer: "You do. You retain 100% ownership and intellectual property rights in all personal notes, photos, and journal entries you store within the Application.",
  },
  {
    question: "Can LIMANEX recover my journal if I lose my phone or delete the app?",
    answer: "No. Because Meowoirs operates strictly offline on your device and LIMANEX maintains no remote servers or cloud copies of your journal content, LIMANEX cannot restore deleted or lost data. You are solely responsible for keeping independent backups.",
  },
  {
    question: "Does Meowoirs provide veterinary advice or medical services?",
    answer: "No. Meowoirs is strictly a lifestyle companion and memory diary. It does not provide veterinary medical advice, diagnostic tools, emergency triage, or clinical treatments.",
  },
];

export default function MeowoirsTerms() {
  useSEO({
    title: "Meowoirs Terms of Service | LIMANEX",
    description:
      "Terms of Service for Meowoirs, the personal memory journal for cat stories by LIMANEX.",
    canonical: "https://limanexstudio.com/terms/meowoirs",
  });

  return (
    <>
      <StructuredData
        data={[
          getOrganizationSchema(),
          getBreadcrumbSchema([
            { name: "Home", url: "https://limanexstudio.com/" },
            { name: "Legal Center", url: "https://limanexstudio.com/privacy" },
            { name: "Meowoirs Terms of Service", url: "https://limanexstudio.com/terms/meowoirs" },
          ]),
          getFAQSchema(meowoirsTermsFAQs),
        ]}
      />

      <LegalLayout
        title="Meowoirs Terms of Service"
        subtitle="Effective Date: September 7, 2026 | Legal Version: 1.0"
        badge="Legal Terms & Conditions"
        badgeIcon={FileText}
        app="meowoirs"
      >
        <div className="mb-8 pb-6 border-b border-white/[0.08] flex items-center justify-between">
          <Link
            to="/privacy"
            className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white transition-colors group min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
            <span>Back to Legal Center</span>
          </Link>
          <span className="text-xs font-mono text-amber-300 glass-pill px-3 py-1 rounded-full">
            Package: com.limanex.meowoirs
          </span>
        </div>

        {/* Warning Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-amber-500/10 border border-amber-500/25 mb-10 flex items-start gap-4 sm:gap-5">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0 text-amber-300">
            <AlertTriangle className="w-6 h-6" aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white mb-2">
              Essential Notice: Not Veterinary or Medical Advice
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Meowoirs is strictly a personal companion memory journal and lifestyle storytelling application. <strong>It is NOT a veterinary clinic, medical service, or emergency triage platform.</strong> Nothing in this application constitutes medical diagnoses or treatment recommendations. Always consult a licensed veterinarian for animal health concerns.
            </p>
          </div>
        </div>

        <div className="space-y-12 text-gray-300 text-sm sm:text-base leading-relaxed">
          {/* Section 1 */}
          <section aria-labelledby="acceptance">
            <h2 id="acceptance" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;User&quot;, &quot;you&quot;, or &quot;your&quot;) and <strong>LIMANEX</strong> (&quot;Operator&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) regarding your access to and use of the Meowoirs mobile application on Android devices (the &quot;Application&quot;, package: <code className="text-amber-300 font-mono text-xs">com.limanex.meowoirs</code>).
            </p>
            <p className="mt-3">
              By downloading, installing, accessing, or using Meowoirs, you agree to be bound by these Terms where legally permitted. If you do not agree to all of these Terms, you are prohibited from using the Application and must uninstall it immediately.
            </p>
          </section>

          {/* Section 2 */}
          <section aria-labelledby="eligibility">
            <h2 id="eligibility" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
              2. Eligibility
            </h2>
            <p>
              Meowoirs is intended for general-audience users. By using the Application, you represent and warrant that you have legal capacity to enter into these Terms under applicable law, or that your parent or legal guardian has reviewed and agreed to these Terms if you are under the legal age of majority in your jurisdiction.
            </p>
          </section>

          {/* Section 3 */}
          <section aria-labelledby="service-description">
            <h2 id="service-description" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
              3. Service Description
            </h2>
            <p>
              Meowoirs is a personal, offline-first cat memory journaling application. It provides features to:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1.5 text-gray-300">
              <li>Create and maintain local Cat Profiles for home companions and community street cats.</li>
              <li>Record journal memories with personal notes, dates, and local photo attachments selected via the system Photo Picker.</li>
              <li>Select personal reflections and mood observations for both cat and human.</li>
              <li>Review personal narrative statistics and feline milestones.</li>
              <li>Manage local preferences including theme, user nickname, and favorite cat selections.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section aria-labelledby="account-free">
            <h2 id="account-free" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4 flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-amber-300" aria-hidden="true" />
              <span>4. Account-Free Architecture</span>
            </h2>
            <p>
              Meowoirs does not require registration, accounts, usernames, passwords, or cloud logins. Your use of the Application begins immediately upon installation on your Device.
            </p>
          </section>

          {/* Section 5 */}
          <section aria-labelledby="local-storage-sync">
            <h2 id="local-storage-sync" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
              5. Local Storage &amp; Absence of Cloud Hosting
            </h2>
            <p>
              All User Content entered into Meowoirs is stored locally on your physical Android device in an embedded SQLite database (Room) and local preferences (DataStore).
            </p>
            <p className="mt-3">
              <strong>Zero Remote Storage:</strong> LIMANEX does NOT operate, own, or host any remote cloud server or database that receives, stores, or synchronizes your private journal content.
            </p>
            <p className="mt-3">
              Meowoirs does not operate its own cloud backup or synchronization service. Clearing application data or uninstalling the application will remove locally stored Meowoirs data. Android or device-level backup and restoration behavior, where available, is controlled by your operating system and is not guaranteed by LIMANEX.
            </p>
          </section>

          {/* Section 6 */}
          <section aria-labelledby="user-content-backup">
            <h2 id="user-content-backup" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
              6. User Content &amp; Backup Responsibility
            </h2>
            <p>
              You retain full ownership, title, and intellectual property rights in all text, memories, notes, and photos you associate with Meowoirs. Because Meowoirs does not transmit or store your journal records on remote servers, your User Content remains strictly in your personal possession on your Device.
            </p>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] mt-4 text-sm">
              <strong className="text-white">Independent Backup Responsibility:</strong> You are solely responsible for maintaining independent external backups of any photos, notes, or memories you consider irreplaceable. LIMANEX cannot restore, recover, or reconstruct content lost due to in-app deletion, app uninstallation, clearing storage, hardware defects, or device loss.
            </div>
          </section>

          {/* Section 7 */}
          <section aria-labelledby="license">
            <h2 id="license" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
              7. Limited License to the Application
            </h2>
            <p>
              Subject to your compliance with these Terms, LIMANEX grants you a personal, revocable, non-exclusive, non-transferable, non-sublicensable, limited license to download, install, and use Meowoirs on compatible Android devices strictly for personal, non-commercial journaling and reflective companionship.
            </p>
          </section>

          {/* Section 8 */}
          <section aria-labelledby="prohibited-conduct">
            <h2 id="prohibited-conduct" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4 flex items-center gap-2.5">
              <AlertCircle className="w-5 h-5 text-amber-300" aria-hidden="true" />
              <span>8. Acceptable Use &amp; Prohibited Conduct</span>
            </h2>
            <p>You agree not to, and will not permit or assist any third party to:</p>
            <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-300">
              <li>Decompile, reverse engineer, disassemble, or attempt to derive source code from the Application, except to the extent permitted by mandatory applicable law.</li>
              <li>Modify, adapt, translate, or create derivative works of the Application.</li>
              <li>Circumvent, disable, or tamper with application security features or advertising components.</li>
              <li>Use the Application for any unlawful, fraudulent, or harassing purpose under applicable laws.</li>
              <li>Exploit, automate, or generate fraudulent clicks, impressions, or queries on advertisements displayed within the Application.</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section aria-labelledby="ip-rights">
            <h2 id="ip-rights" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
              9. Intellectual Property Rights
            </h2>
            <p>
              The Application, its software code, UI design, vector icons, custom illustrations, logos, visual tokens, and the &quot;Meowoirs&quot; and &quot;LIMANEX&quot; trademarks are the exclusive intellectual property of LIMANEX and its licensors, protected by copyright, trademark, and other applicable intellectual property laws.
            </p>
          </section>

          {/* Section 10 */}
          <section aria-labelledby="advertising-terms">
            <h2 id="advertising-terms" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
              10. Advertising &amp; Third-Party Services
            </h2>
            <p>
              The Application displays banner and occasional interstitial advertisements served by Google Mobile Ads (AdMob) and utilizes the Google User Messaging Platform (UMP) SDK for regional consent. Advertisements may link to external websites or third-party offerings. LIMANEX does not endorse, control, or assume liability for third-party products, websites, content, or practices.
            </p>
          </section>

          {/* Section 11 */}
          <section aria-labelledby="vet-disclaimer">
            <h2 id="vet-disclaimer" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
              11. Absolute Disclaimer: No Medical or Veterinary Advice
            </h2>
            <div className="p-5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-sm space-y-2 text-gray-300">
              <p className="font-bold text-white">IMPORTANT NOTICE REGARDING FELINE HEALTH:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Meowoirs is strictly a personal memory journal and reflective companion.</li>
                <li><strong>THE APPLICATION IS NOT A VETERINARY, MEDICAL, DIAGNOSTIC, CLINICAL, OR EMERGENCY SERVICE.</strong></li>
                <li>Nothing in the Application—including mood selections, prompts, summaries, or notes—constitutes veterinary advice or medical diagnosis.</li>
                <li>Always consult a licensed veterinarian regarding the health, nutrition, behavioral abnormalities, or medical emergencies of any animal. Never disregard professional veterinary advice or delay seeking care because of anything recorded in or omitted by Meowoirs.</li>
              </ul>
              <p className="pt-2">
                For complete health disclaimers, review the{" "}
                <Link to="/disclaimer/meowoirs" className="text-amber-300 underline font-semibold">
                  Meowoirs Legal &amp; Veterinary Health Disclaimer
                </Link>.
              </p>
            </div>
          </section>

          {/* Section 12 */}
          <section aria-labelledby="updates">
            <h2 id="updates" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
              12. Availability, Updates &amp; Changes
            </h2>
            <p>
              LIMANEX reserves the right to modify, update, or discontinue the Application or any portion thereof at any time. Updates distributed through Google Play may introduce bug fixes, feature enhancements, or performance improvements. LIMANEX does not guarantee uninterrupted operation or compatibility with all future Android OS versions.
            </p>
          </section>

          {/* Section 13 */}
          <section aria-labelledby="warranties">
            <h2 id="warranties" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
              13. Disclaimer of Warranties
            </h2>
            <p className="uppercase text-xs tracking-wider text-gray-400 bg-white/[0.03] p-4 rounded-xl border border-white/[0.06]">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE APPLICATION IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS, WITHOUT WARRANTIES OF ANY KIND, EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE. LIMANEX EXPRESSLY DISCLAIMS ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, ACCURACY, AND NON-INFRINGEMENT.
            </p>
            <p className="mt-3 text-xs text-gray-400">
              Nothing in these Terms limits any statutory consumer rights or warranties that cannot lawfully be excluded under mandatory applicable consumer protection law.
            </p>
          </section>

          {/* Section 14 */}
          <section aria-labelledby="liability">
            <h2 id="liability" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
              14. Limitation of Liability
            </h2>
            <div className="space-y-3">
              <p className="uppercase text-xs tracking-wider text-gray-400 bg-white/[0.03] p-4 rounded-xl border border-white/[0.06]">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW: (1) IN NO EVENT SHALL LIMANEX, ITS AFFILIATES, DIRECTORS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF DATA, PROFITS, GOODWILL, OR DEVICE MALFUNCTION; AND (2) LIMANEX&apos;S TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO MEOWOIRS OR THESE TERMS SHALL NOT EXCEED USD 100 (ONE HUNDRED UNITED STATES DOLLARS).
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                This limitation does not apply where applicable law prohibits limitation or exclusion of such liability. Nothing in these Terms limits or excludes liability for intentional misconduct, gross negligence, fraud, or any liability that cannot lawfully be limited under mandatory Turkish consumer protection law or other non-waivable statutory provisions.
              </p>
            </div>
          </section>

          {/* Section 15 */}
          <section aria-labelledby="indemnification">
            <h2 id="indemnification" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
              15. Indemnification
            </h2>
            <p>
              To the extent permitted by applicable law, you agree to indemnify, defend, and hold harmless LIMANEX from and against any third-party claims, liabilities, damages, and expenses (including reasonable legal fees) arising out of your intentional violation of these Terms or your violation of third-party rights.
            </p>
          </section>

          {/* Section 16 */}
          <section aria-labelledby="governing-law">
            <h2 id="governing-law" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4 flex items-center gap-2.5">
              <Scale className="w-5 h-5 text-amber-300" aria-hidden="true" />
              <span>16. Governing Law &amp; Jurisdiction</span>
            </h2>
            <p>
              These Terms and any disputes arising out of or relating to them shall be governed by and construed in accordance with the laws of the <strong>Republic of Türkiye</strong>, without regard to conflict of law principles.
            </p>
            <p className="mt-3">
              Subject to mandatory consumer protection laws that provide non-waivable statutory dispute resolution forums in your country or district of residence, any dispute shall be submitted to the competent Courts and Enforcement Offices of Türkiye.
            </p>
          </section>

          {/* Section 17 */}
          <section aria-labelledby="severability">
            <h2 id="severability" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
              17. Severability &amp; Entire Agreement
            </h2>
            <p>
              If any provision of these Terms is held invalid or unenforceable by a court of competent jurisdiction, that provision will be enforced to the maximum extent permissible and the remaining provisions will remain in full force and effect. These Terms, together with the Meowoirs Privacy Policy and Disclaimer, constitute the entire agreement between you and LIMANEX regarding Meowoirs.
            </p>
          </section>

          {/* Section 18 */}
          <section aria-labelledby="changes">
            <h2 id="changes" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
              18. Changes to Terms
            </h2>
            <p>
              LIMANEX reserves the right to amend these Terms at any time. Updated Terms will be published on the public legal portal (https://limanexstudio.com/terms/meowoirs) and reflected within the Application.
            </p>
          </section>

          {/* Section 19 */}
          <section aria-labelledby="contact" className="pt-4 border-t border-white/[0.08]">
            <h2 id="contact" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
              19. Contact Information
            </h2>
            <p>For inquiries regarding these Terms:</p>
            <div className="glass-card p-5 mt-4 space-y-2 text-sm border border-white/[0.06]">
              <p><strong>Developer / Operator:</strong> LIMANEX</p>
              <p><strong>Jurisdiction:</strong> Republic of Türkiye</p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:limanexsoftware@outlook.com" className="text-brand-300 hover:text-white underline">
                  limanexsoftware@outlook.com
                </a>
              </p>
              <p>
                <strong>Official Website:</strong>{" "}
                <a href="https://limanexstudio.com" className="text-brand-300 hover:text-white underline">
                  https://limanexstudio.com
                </a>
              </p>
              <p>
                <strong>Public Terms of Service:</strong>{" "}
                <Link to="/terms/meowoirs" className="text-brand-300 hover:text-white underline">
                  https://limanexstudio.com/terms/meowoirs
                </Link>
              </p>
            </div>
          </section>
        </div>
      </LegalLayout>
    </>
  );
}
