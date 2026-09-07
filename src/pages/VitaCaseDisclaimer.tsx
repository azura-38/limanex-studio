import { Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { StructuredData, getOrganizationSchema, getBreadcrumbSchema } from "../components/StructuredData";
import { LegalLayout } from "../components/LegalLayout";

export default function VitaCaseDisclaimer() {
  useSEO({
    title: "VitaCase Disclaimer — Limanex Studio",
    description: "Disclaimer for VitaCase. Review professional, medication, appointment, notification, emergency, and sensitive data disclaimers.",
  });

  return (
    <>
      <StructuredData data={[
        getOrganizationSchema(),
        getBreadcrumbSchema([
          { name: "Home", url: "https://limanexstudio.com/" },
          { name: "Disclaimer", url: "https://limanexstudio.com/disclaimer/vitacase" },
        ]),
      ]} />

      <LegalLayout
        title="VitaCase Disclaimer"
        subtitle="Last Updated — May 26, 2026"
        badge="Legal Disclaimer"
        badgeIcon={AlertTriangle}
      >
        <div className="mb-8 pb-6 border-b border-white/[0.08] flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white transition-colors group min-h-[44px]">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="text-gray-300 text-base sm:text-lg leading-[1.8] space-y-10 font-sans">
          <p>This Disclaimer applies to the VitaCase mobile application operated by Limanex Software (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;).</p>

          <section aria-label="General disclaimer">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">General Disclaimer</h2>
            <p>The information provided by us on the VitaCase mobile application is for general informational purposes only. All information within the application is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information.</p>
            <p className="mt-3">Under no circumstances shall we have any liability to you for any loss or damage incurred as a result of the use of the application or reliance on any information stored or accessed through the app. Your use of the app and your reliance on any information is solely at your own risk.</p>
          </section>

          <section aria-label="Professional disclaimer">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">Professional Disclaimer</h2>
            <p>VitaCase does not provide medical, healthcare, legal, financial, or any other professional advice.</p>
            <p className="mt-2">All data and documents stored within the app are user-generated and are not reviewed, analyzed, or verified by us.</p>
            <p className="mt-2">The app is not intended for diagnosing, treating, curing, or preventing any condition and must not be used as a substitute for professional services.</p>
            <p className="mt-2">You should consult qualified professionals before making any decisions based on your stored data.</p>
            <p className="mt-2">We disclaim any liability for decisions or actions taken based on information stored within the app.</p>
          </section>

          <section aria-label="User-generated content disclaimer">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">User-Generated Content Disclaimer</h2>
            <p>All content stored in VitaCase is uploaded and controlled by users. We:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Do not access or monitor user content.</li>
              <li>Do not verify accuracy.</li>
              <li>Do not take responsibility for legality.</li>
            </ul>
            <p className="mt-3">Users are solely responsible for their data and how it is used.</p>
          </section>

          <section aria-label="Medication disclaimer">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">Medication Disclaimer</h2>
            <p>VitaCase may help users save medication names, schedules, stock information, and reminder times. However, the App does not provide medical advice, does not determine medication dosage, does not verify medication correctness, and does not guarantee that reminders will appear on time or at all.</p>
            <p className="mt-3">Medication use, dosage, timing, changes, and discontinuation must always be based on instructions from a qualified doctor, pharmacist, or healthcare provider.</p>
            <p className="mt-3">Users are solely responsible for independently tracking their medications and should not rely only on VitaCase notifications or records.</p>
          </section>

          <section aria-label="Appointment disclaimer">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">Appointment Disclaimer</h2>
            <p>VitaCase may help users save and organize appointment information. However, the App is not an official appointment system and does not replace notifications or confirmations from hospitals, clinics, doctors, healthcare providers, insurance companies, or other institutions.</p>
            <p className="mt-3">Users are solely responsible for verifying appointment dates, times, locations, preparation requirements, cancellations, and changes from official sources.</p>
            <p className="mt-3">VitaCase is not responsible for missed appointments, delayed reminders, incorrect user-entered information, or notification failures.</p>
          </section>

          <section aria-label="Notification disclaimer">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">Notification Disclaimer</h2>
            <p>VitaCase reminders and notifications are provided only as a convenience feature.</p>
            <p className="mt-3">Notifications may be delayed, blocked, silenced, or fail to appear due to device settings, notification permissions, operating system restrictions, battery optimization, date and time settings, app updates, app termination, storage issues, or other technical reasons.</p>
            <p className="mt-3">Users should not rely solely on VitaCase notifications for medication, appointments, emergencies, or other important actions.</p>
          </section>

          <section aria-label="Emergency disclaimer">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">Emergency Disclaimer</h2>
            <p>VitaCase is not an emergency service.</p>
            <p className="mt-3">In case of a medical emergency, severe symptom, medication side effect, accident, or life-threatening situation, users must contact local emergency services, a doctor, or a qualified healthcare provider immediately.</p>
            <p className="mt-3">Users should not rely on VitaCase as a source of emergency assistance or urgent medical decision-making.</p>
          </section>

          <section aria-label="Sensitive data disclaimer">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">Sensitive Data Disclaimer</h2>
            <p>VitaCase is not designed for storing highly sensitive personal data.</p>
            <p className="mt-3">Users are strongly discouraged from storing sensitive information such as:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Biometric data</li>
              <li>Genetic data</li>
              <li>Government identification numbers</li>
              <li>Financial credentials</li>
              <li>Highly confidential medical records</li>
            </ul>
            <p className="mt-4">If users choose to store such data:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>They do so at their own risk.</li>
              <li>They assume full responsibility.</li>
              <li>VitaCase shall not be liable for any data loss, breach, or misuse.</li>
            </ul>
            <p className="mt-4">The app is not a regulated secure system (e.g., HIPAA-compliant).</p>
          </section>

          <section aria-label="External services disclaimer">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">External Services Disclaimer</h2>
            <p>The app may use third-party services such as advertising services (e.g., AdMob) and error tracking tools (e.g., Sentry).</p>
            <p className="mt-3">These services may collect limited technical or usage data according to their own privacy policies. We are not responsible for third-party services.</p>
          </section>

          <section aria-label="Technical disclaimer">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">Technical Disclaimer</h2>
            <p>We do not guarantee that:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>The app will always be available.</li>
              <li>The app will be error-free.</li>
              <li>Data will never be lost or corrupted.</li>
            </ul>
            <p className="mt-3">Users are responsible for backing up their important data.</p>
          </section>

          <section aria-label="Use at your own risk warning">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">Use at Your Own Risk</h2>
            <p>All use of VitaCase is at your own risk. You agree that:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>You are fully responsible for your actions.</li>
              <li>You understand the limitations of the app.</li>
              <li>You will not hold Limanex Software liable for any damages.</li>
            </ul>
          </section>

          <section aria-label="Contact information">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">Contact</h2>
            <p>If you have any questions regarding this Disclaimer: <a href="mailto:limanexsoftware@outlook.com" className="text-white hover:text-brand-300 transition-colors font-medium underline underline-offset-4">limanexsoftware@outlook.com</a></p>
          </section>
        </div>
      </LegalLayout>
    </>
  );
}
