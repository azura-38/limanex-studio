import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { StructuredData, getOrganizationSchema, getBreadcrumbSchema } from "../components/StructuredData";
import { LegalLayout } from "../components/LegalLayout";

export default function VitaCaseTerms() {
  useSEO({
    title: "VitaCase Terms and Conditions — Limanex Studio",
    description: "Terms and Conditions for using VitaCase. Review rules, guidelines, acceptable use, liability limitations, and medication responsibilities.",
  });

  return (
    <>
      <StructuredData data={[
        getOrganizationSchema(),
        getBreadcrumbSchema([
          { name: "Home", url: "https://limanexstudio.com/" },
          { name: "Terms & Conditions", url: "https://limanexstudio.com/terms/vitacase" },
        ]),
      ]} />

      <LegalLayout
        title="Terms & Conditions"
        subtitle="Last Updated — May 26, 2026"
        badge="Terms of Service"
        badgeIcon={FileText}
        app="vitacase"
      >
        <div className="mb-8 pb-6 border-b border-white/[0.08] flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white transition-colors group min-h-[44px]">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="text-gray-300 text-base sm:text-lg leading-[1.8] space-y-10 font-sans">
          <section aria-label="Agreement to terms">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">1. Agreement to Terms</h2>
            <p>These Terms and Conditions constitute a legally binding agreement made between you (&ldquo;User&rdquo;, &ldquo;you&rdquo;) and Limanex Software (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), concerning your access to and use of the VitaCase mobile application (the &ldquo;App&rdquo;).</p>
            <p className="mt-3">By accessing or using the App, you agree that you have read, understood, and agree to be bound by all of these Terms. If you do not agree, you must discontinue use immediately.</p>
          </section>

          <section aria-label="Description of service">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">2. Description of Service</h2>
            <p>VitaCase is a personal document storage and organization application that allows users to upload, store, and manage various types of files, including but not limited to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Health-related documents</li>
              <li>Prescriptions and medical records</li>
              <li>Invoices and financial documents</li>
              <li>Personal notes and records</li>
            </ul>
            <p className="mt-3">The App functions solely as a storage and organization tool.</p>
          </section>

          <section aria-label="No professional advice">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">3. No Professional Advice</h2>
            <p>VitaCase does not provide medical, legal, financial, or any other professional advice. Any information stored within the App:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Is user-provided</li>
              <li>Is not reviewed or verified by us</li>
              <li>Must not be considered as professional advice</li>
            </ul>
            <p className="mt-3">You agree that you will consult qualified professionals when needed.</p>

            <h3 className="text-lg font-semibold text-white mt-6 mb-2">3A. Medication and Appointment Responsibility</h3>
            <p>VitaCase may help users organize medication information, appointment details, and reminders. However, the App does not provide medical advice, medication instructions, dosage recommendations, treatment guidance, or official appointment notices.</p>
            <p className="mt-3">Users are solely responsible for:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Following instructions from doctors, pharmacists, healthcare providers, clinics, hospitals, and other official sources.</li>
              <li>Checking medication dosage, timing, changes, and discontinuation instructions.</li>
              <li>Verifying appointment dates, times, locations, preparation requirements, cancellations, and changes.</li>
              <li>Maintaining independent records and backups of important information.</li>
            </ul>
            <p className="mt-4">VitaCase reminders and notifications are not guaranteed. Notifications may be delayed, blocked, silenced, or fail to appear due to device settings, operating system limitations, battery optimization, app permissions, updates, technical issues, or user actions.</p>
            <p className="mt-2 font-semibold text-white">You agree not to rely solely on VitaCase for medication use, appointment attendance, emergency decisions, or critical health-related actions.</p>
          </section>

          <section aria-label="User content and responsibility">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">4. User Content &amp; Responsibility</h2>
            <p>You retain full ownership of all content you upload. You agree that:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>You are solely responsible for your data.</li>
              <li>Your content does not violate laws or third-party rights.</li>
              <li>Your data is accurate and lawful.</li>
            </ul>
            <p className="mt-3">We do not access, monitor, or analyze user content.</p>
          </section>

          <section aria-label="Data storage disclaimer">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">5. Data Storage Disclaimer</h2>
            <p>While we implement reasonable security measures, we do not guarantee:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Data will never be lost.</li>
              <li>Data will always be accessible.</li>
              <li>Data will remain error-free.</li>
            </ul>
            <p className="mt-3">Users are responsible for keeping independent backups of important information.</p>
          </section>

          <section aria-label="Acceptable use">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">6. Acceptable Use</h2>
            <p>You agree NOT to use the App for:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Illegal activities.</li>
              <li>Storing harmful or unlawful content.</li>
              <li>Violating intellectual property rights.</li>
              <li>Uploading malicious software.</li>
            </ul>
          </section>

          <section aria-label="Third-party services">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">7. Third-Party Services</h2>
            <p>The App may use third-party services, including but not limited to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Advertising services (e.g., AdMob)</li>
              <li>Error monitoring tools (e.g., Sentry)</li>
            </ul>
            <p className="mt-3">These services may collect limited data according to their own privacy policies.</p>
          </section>

          <section aria-label="Service availability">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">8. Service Availability</h2>
            <p>We do not guarantee uninterrupted or error-free service. We reserve the right to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Modify or discontinue features.</li>
              <li>Suspend or terminate the App.</li>
              <li>Update the service at any time.</li>
            </ul>
          </section>

          <section aria-label="Account and security">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">9. Account &amp; Security</h2>
            <p>You are responsible for:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Securing your device.</li>
              <li>Preventing unauthorized access.</li>
              <li>Maintaining your own data security.</li>
            </ul>
            <p className="mt-3">We are not responsible for access caused by user negligence.</p>
          </section>

          <section aria-label="Intellectual property">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">10. Intellectual Property</h2>
            <p>All content, branding, and software within the App are owned by or licensed to us. You may not:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Copy or distribute the App.</li>
              <li>Reverse engineer the system.</li>
              <li>Use our branding without permission.</li>
            </ul>
          </section>

          <section aria-label="Limitation of liability">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">11. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, we shall not be liable for:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Data loss.</li>
              <li>Indirect or consequential damages.</li>
              <li>Decisions made based on stored information.</li>
              <li>Missed medication reminders.</li>
              <li>Missed appointments.</li>
              <li>Delayed, blocked, or failed notifications.</li>
              <li>User-entered incorrect medication, appointment, or document information.</li>
            </ul>
            <p className="mt-4">Our total liability is limited to the lesser of:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>The amount paid by the user, OR</li>
              <li>100 USD</li>
            </ul>
          </section>

          <section aria-label="Disclaimer of warranties">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">12. Disclaimer of Warranties</h2>
            <p>The App is provided &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo;. We make no warranties regarding accuracy, reliability, or availability.</p>
          </section>

          <section aria-label="Dispute resolution">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">13. Dispute Resolution</h2>
            <p>Before initiating any legal action, parties agree to attempt informal resolution for 30 days. If unresolved, arbitration will be used.</p>
            <p className="mt-3">Arbitration Location: Turkey<br />Governing Law: Turkey</p>
          </section>

          <section aria-label="Global use">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">14. Global Use</h2>
            <p>Users accessing the App from outside their country are responsible for compliance with local laws.</p>
          </section>

          <section aria-label="Termination">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">15. Termination</h2>
            <p>We may suspend or terminate access if terms are violated, or if abuse or misuse is detected.</p>
          </section>

          <section aria-label="Modifications to terms">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">16. Modifications</h2>
            <p>We may update these Terms at any time. Continued use of the App means acceptance of updated Terms.</p>
          </section>

          <section aria-label="Privacy policy linkage">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">17. Privacy Policy</h2>
            <p>Use of the App is also governed by our <Link to="/privacy/vitacase" className="text-white hover:text-brand-300 transition-colors font-medium border-b border-transparent hover:border-brand-300 pb-0.5">Privacy Policy</Link>.</p>
          </section>

          <section aria-label="Contact information">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">18. Contact</h2>
            <p>For any questions regarding these Terms: <a href="mailto:limanexsoftware@outlook.com" className="text-white hover:text-brand-300 transition-colors font-medium underline underline-offset-4">limanexsoftware@outlook.com</a></p>
          </section>

          <section aria-label="Final disclaimer">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">19. Final Disclaimer</h2>
            <p>VitaCase is a neutral storage tool. We do not interpret user data, do not provide decisions, and do not assume responsibility for user actions. All responsibility remains with the user.</p>
          </section>
        </div>
      </LegalLayout>
    </>
  );
}
