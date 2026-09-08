import { Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle, Stethoscope, ShieldAlert, HeartHandshake, PhoneCall } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { StructuredData, getOrganizationSchema, getBreadcrumbSchema, getFAQSchema } from "../components/StructuredData";
import { LegalLayout } from "../components/LegalLayout";

const meowoirsDisclaimerFAQs = [
  {
    question: "Does Meowoirs provide veterinary advice or medical diagnoses?",
    answer: "No. Meowoirs is strictly a personal memory journal and lifestyle companion for cat guardians. It is not a veterinary clinic, healthcare service, or diagnostic tool, and it does not provide clinical assessments, prescriptions, or treatment advice.",
  },
  {
    question: "Can I use the mood tags in Meowoirs to evaluate my cat's health?",
    answer: "No. Mood tags such as playful, sleepy, grumpy, affectionate, or calm are informal, subjective storytelling prompts. They are not validated clinical indicators or veterinary assessment scales. If your cat shows signs of illness, pain, or distress, consult a licensed veterinarian immediately.",
  },
  {
    question: "Can I contact LIMANEX or Meowoirs during a pet medical emergency?",
    answer: "No. Meowoirs cannot receive, process, or respond to medical emergencies. In an urgent situation, immediately contact your nearest veterinary hospital, emergency clinic, or local animal welfare authority.",
  },
];

export default function MeowoirsDisclaimer() {
  useSEO({
    title: "Meowoirs Legal & Veterinary Health Disclaimer — Limanex Studio",
    description:
      "Official legal and veterinary disclaimer for Meowoirs by Limanex Studio. Understand why Meowoirs is strictly a personal memory journal and not a substitute for professional veterinary care.",
  });

  return (
    <>
      <StructuredData
        data={[
          getOrganizationSchema(),
          getBreadcrumbSchema([
            { name: "Home", url: "https://limanexstudio.com/" },
            { name: "Legal Center", url: "https://limanexstudio.com/privacy" },
            { name: "Meowoirs Disclaimer", url: "https://limanexstudio.com/disclaimer/meowoirs" },
          ]),
          getFAQSchema(meowoirsDisclaimerFAQs),
        ]}
      />

      <LegalLayout
        title="Legal & Veterinary Health Disclaimer"
        subtitle="Effective Date: September 7, 2026 | Legal Version: 1.0"
        badge="Pet Health & Veterinary Disclaimer"
        badgeIcon={AlertTriangle}
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

        {/* Critical Emergency Alert Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-amber-500/10 border border-amber-500/25 mb-10 flex items-start gap-4 sm:gap-5">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0 text-amber-300">
            <ShieldAlert className="w-6 h-6" aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white mb-2">
              Crucial Notice: Not a Veterinary or Medical Service
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              <strong>Meowoirs is not a veterinary clinic, healthcare provider, or emergency triage service.</strong> Nothing in this application constitutes veterinary medical advice, clinical diagnosis, or medical treatment. Never disregard professional veterinary consultation or delay seeking emergency animal medical attention because of content recorded in or omitted by Meowoirs.
            </p>
          </div>
        </div>

        <div className="text-gray-300 text-sm sm:text-base leading-relaxed space-y-10">
          {/* Section 1 */}
          <section aria-labelledby="nature-app">
            <h2 id="nature-app" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4 flex items-center gap-3">
              <HeartHandshake className="w-5 h-5 text-amber-300" aria-hidden="true" />
              <span>1. Nature of the Application</span>
            </h2>
            <p>
              <strong>Meowoirs</strong> is designed and provided by <strong>LIMANEX</strong> exclusively as a personal digital companion, lifestyle journal, and memory-keeping application for cat guardians and community cat caretakers.
            </p>
            <p className="mt-3">
              All functionality within Meowoirs—including creating cat profiles (for indoor and outdoor neighborhood cats), recording personal reflections, attaching photos via the Android Photo Picker, selecting subjective mood tags, and logging journal entries—is intended strictly for recreational, emotional, and personal memorialization purposes.
            </p>
          </section>

          {/* Section 2 */}
          <section aria-labelledby="not-vet-service">
            <h2 id="not-vet-service" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4 flex items-center gap-3">
              <Stethoscope className="w-5 h-5 text-amber-300" aria-hidden="true" />
              <span>2. Not a Veterinary or Medical Service</span>
            </h2>
            <p className="font-semibold text-white">
              MEOWOIRS IS NOT A VETERINARY CLINIC, A MEDICAL PROVIDER, OR A HEALTHCARE SERVICE.
            </p>
            <p className="mt-3">MEOWOIRS DOES NOT PROVIDE:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              <div className="glass-card p-4 border border-white/[0.06]">
                <p className="font-semibold text-white text-xs sm:text-sm">1. Medical Diagnosis</p>
                <p className="text-xs text-gray-400 mt-1">No clinical assessments, symptom diagnosis, or disease determinations.</p>
              </div>
              <div className="glass-card p-4 border border-white/[0.06]">
                <p className="font-semibold text-white text-xs sm:text-sm">2. Treatments &amp; Prescriptions</p>
                <p className="text-xs text-gray-400 mt-1">No medication regimens, dosages, or therapeutic clinical advice.</p>
              </div>
              <div className="glass-card p-4 border border-white/[0.06]">
                <p className="font-semibold text-white text-xs sm:text-sm">3. Emergency Triage</p>
                <p className="text-xs text-gray-400 mt-1">No urgent animal rescue dispatch, 24/7 hotline, or crisis response.</p>
              </div>
              <div className="glass-card p-4 border border-white/[0.06]">
                <p className="font-semibold text-white text-xs sm:text-sm">4. Behavioral &amp; Dietary Advice</p>
                <p className="text-xs text-gray-400 mt-1">No certified behavioral therapy, nutritional prescriptions, or toxicology checks.</p>
              </div>
            </div>
            <p className="mt-4">
              MEOWOIRS IS NOT A SUBSTITUTE FOR A LICENSED VETERINARIAN OR QUALIFIED ANIMAL HEALTHCARE PROFESSIONAL. Always seek the advice of a qualified veterinarian with any questions you may have regarding a medical condition, dietary needs, or physical symptoms of your pet.
            </p>
          </section>

          {/* Section 3 */}
          <section aria-labelledby="subjective-mood">
            <h2 id="subjective-mood" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
              3. Subjective Mood &amp; Behavior Tracking Disclaimer
            </h2>
            <p>
              The mood selection tags, icons, notes, and emotional categories available in Meowoirs (such as playful, sleepy, grumpy, affectionate, curious, calm, or energetic) are informal, subjective descriptive prompts intended solely for user storytelling and personal reflection.
            </p>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] mt-4 space-y-2 text-sm">
              <p className="font-semibold text-amber-300">THEY ARE EXPLICITLY NOT:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-300">
                <li>Clinical diagnostic indicators or medical symptom trackers.</li>
                <li>Validated scientific or psychometric symptom measurement tools.</li>
                <li>Veterinary behavioral assessment scales.</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 mt-4 text-xs sm:text-sm text-gray-200">
              <strong className="text-white">Emergency Warning:</strong> Never rely on mood logs, journal tags, or notes stored in Meowoirs to evaluate whether an animal is ill, injured, in distress, or experiencing an emergency. If your cat displays lethargy, sudden loss of appetite, persistent vomiting, diarrhea, changes in urination, breathing difficulties, pain symptoms, limping, or any behavioral abnormality, you must immediately seek direct examination from a licensed veterinarian.
            </div>
          </section>

          {/* Section 4 */}
          <section aria-labelledby="warranty-risk">
            <h2 id="warranty-risk" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
              4. No Warranty &amp; User Assumption of Risk
            </h2>
            <p className="uppercase text-xs tracking-wider text-gray-400 bg-white/[0.03] p-4 rounded-xl border border-white/[0.06]">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, MEOWOIRS AND ALL CONTENT, PROMPTS, AND FEATURES ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTY OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE.
            </p>
            <p className="mt-3">
              LIMANEX expressly disclaims all implied warranties of merchantability, fitness for a particular purpose, non-infringement, and any warranties arising out of course of dealing or usage of trade.
            </p>
            <p className="mt-3">
              You acknowledge and agree that your pet&apos;s physical safety, health, veterinary medical oversight, and daily care remain exclusively your personal responsibility as a pet guardian. LIMANEX shall have no liability whatsoever for any injury, illness, harm, veterinary medical expenses, or death of any animal in connection with the use of or reliance on this application.
            </p>
          </section>

          {/* Section 5 */}
          <section aria-labelledby="emergency-reminder">
            <h2 id="emergency-reminder" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4 flex items-center gap-3">
              <PhoneCall className="w-5 h-5 text-amber-300" aria-hidden="true" />
              <span>5. Emergency Contact Reminder</span>
            </h2>
            <p>
              Meowoirs does not have the technical capacity, infrastructure, or personnel to receive, process, triage, or respond to emergency medical communications.
            </p>
            <p className="mt-3">
              In the event of a suspected animal medical crisis, immediately contact:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5 text-gray-300">
              <li>Your primary local veterinary clinic.</li>
              <li>A 24-hour regional veterinary emergency hospital.</li>
              <li>A certified national pet poison control or animal rescue organization.</li>
              <li>Local municipal or animal welfare authorities.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section aria-labelledby="doc-notice">
            <h2 id="doc-notice" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
              6. Notice Regarding This Documentation
            </h2>
            <p>
              This legal documentation is intended to accurately describe the current functionality of the Meowoirs application and does not constitute individualized legal advice or a guarantee of legal compliance in every global jurisdiction. LIMANEX recommends independent legal consultation where required by specific municipal laws.
            </p>
          </section>

          {/* Section 7 */}
          <section aria-labelledby="contact" className="pt-4 border-t border-white/[0.08]">
            <h2 id="contact" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
              7. Contact Information
            </h2>
            <p>For questions or inquiries regarding this Legal &amp; Veterinary Disclaimer:</p>
            <div className="glass-card p-5 mt-4 space-y-2 text-sm">
              <p><strong>Developer / Operator:</strong> LIMANEX</p>
              <p><strong>Country:</strong> Republic of Türkiye</p>
              <p>
                <strong>Official Email:</strong>{" "}
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
                <strong>Public Terms URL:</strong>{" "}
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
