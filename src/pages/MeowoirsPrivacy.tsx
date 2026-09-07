import { Link } from "react-router-dom";
import { ArrowLeft, Shield, CheckCircle2, Lock } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { StructuredData, getOrganizationSchema, getBreadcrumbSchema, getFAQSchema } from "../components/StructuredData";
import { LegalLayout } from "../components/LegalLayout";

const meowoirsFAQs = [
  {
    question: "Where is my Meowoirs journal data stored?",
    answer: "All cat profiles, journal memories, photo associations, and mood reflections are stored locally on your physical Android device in an embedded SQLite database (Room). LIMANEX does not operate a remote server or cloud database for your journal entries."
  },
  {
    question: "Do I need an account to use Meowoirs?",
    answer: "No. Meowoirs has an account-free architecture. There is no registration, sign-up, login, or social media authentication required."
  },
  {
    question: "Does Meowoirs upload my cat photos to the cloud?",
    answer: "No. Meowoirs utilizes Android's native system Photo Picker and only stores local Content URI references on your device. Your photos are never transmitted to or hosted on LIMANEX servers."
  },
  {
    question: "Does Meowoirs provide veterinary advice?",
    answer: "No. Meowoirs is strictly a personal lifestyle journal and memory diary. It does not provide veterinary medical advice, diagnoses, treatment recommendations, or emergency triage."
  },
  {
    question: "What happens if I delete a cat profile or uninstall the app?",
    answer: "Deleting a cat profile removes that profile record while preserving associated memories according to database design. Uninstalling or clearing application storage will delete locally stored data. Because LIMANEX operates no remote cloud backup, deleted data cannot be recovered by LIMANEX."
  }
];

export default function MeowoirsPrivacy() {
  useSEO({
    title: "Meowoirs Privacy Policy — Limanex Studio",
    description: "Meowoirs privacy policy by Limanex Studio. Learn how Meowoirs operates on an offline-first architecture to protect your cat memories and personal journal entries on your device.",
  });

  return (
    <>
      <StructuredData data={[
        getOrganizationSchema(),
        getBreadcrumbSchema([
          { name: "Home", url: "https://limanexstudio.com/" },
          { name: "Legal Center", url: "https://limanexstudio.com/privacy" },
          { name: "Meowoirs Privacy Policy", url: "https://limanexstudio.com/privacy/meowoirs" },
        ]),
        getFAQSchema(meowoirsFAQs),
      ]} />

      <LegalLayout
        title="Meowoirs Privacy Policy"
        subtitle="Effective Date: September 7, 2026 | Legal Version: 1.0"
        badge="Offline-First & Local Storage"
        badgeIcon={Shield}
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

        {/* Highlight Banner */}
        <div className="p-6 rounded-2xl bg-brand-500/10 border border-brand-500/20 mb-10 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-brand-500/20 flex items-center justify-center flex-shrink-0 text-brand-300">
            <Lock className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white mb-1">Privacy by Design Architecture</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Meowoirs is designed from the ground up as an offline-first application. All cat profiles, journal notes, mood selections, and photos remain strictly on your physical Android device. LIMANEX operates zero remote servers or cloud databases for your journal entries.
            </p>
          </div>
        </div>

        <section className="space-y-10 text-gray-300 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p>
              Welcome to <strong>Meowoirs</strong> (the &quot;Application&quot;). Meowoirs is an offline-first personal digital companion and memory journal designed to help individuals record thoughts, stories, milestones, and daily interactions with their companion and community cats.
            </p>
            <p className="mt-3">
              This Privacy Policy explains how information is handled within Meowoirs. Our core design principle is <strong>privacy by design</strong>: all personal journal entries, cat profiles, and notes remain stored locally on your Android device.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">2. Operator Information</h2>
            <p>The Application is developed, published, and operated by:</p>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-300">
              <li><strong>Developer / Operator:</strong> LIMANEX</li>
              <li><strong>Country:</strong> Türkiye</li>
              <li><strong>Official Contact Email:</strong> limanexsoftware@outlook.com</li>
              <li><strong>Official Website:</strong> https://limanexstudio.com</li>
              <li><strong>Public Privacy Policy URL:</strong> https://limanexstudio.com/privacy</li>
              <li><strong>Public Terms of Service URL:</strong> https://limanexstudio.com/terms</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">3. Scope &amp; Definitions</h2>
            <p>
              This Privacy Policy applies to your installation, access, and use of the Meowoirs mobile software application for Android (<code className="text-accent-400">com.limanex.meowoirs</code>).
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-300">
              <li><strong>User Content:</strong> All cat profiles, names, memories, notes, emotional reflections, and photo references created or selected by the User.</li>
              <li><strong>Device:</strong> The compatible Android smartphone, tablet, or portable hardware running Meowoirs.</li>
              <li><strong>Third-Party SDKs:</strong> Google Mobile Ads (AdMob), Google User Messaging Platform (UMP), and Firebase Crashlytics.</li>
              <li><strong>Advertising ID:</strong> The Google Advertising ID (GAID / AAID) provided by Android Google Play Services.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">4. What Meowoirs Stores Locally</h2>
            <p>
              All content you create in the journal is stored locally on your physical device in an internal SQLite database managed via AndroidX Room, and user preferences are maintained via Android Jetpack DataStore:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="glass-card p-5">
                <h4 className="font-bold text-white mb-2">Cat Profiles</h4>
                <p className="text-xs text-gray-400">Cat name, classification (Home/Street), local photo URI reference, optional profile note, and creation timestamp.</p>
              </div>
              <div className="glass-card p-5">
                <h4 className="font-bold text-white mb-2">Memories</h4>
                <p className="text-xs text-gray-400">Associated cat ID, journal note text, attached local photo URI, cat mood selection, user emotional reflection, and timestamp.</p>
              </div>
              <div className="glass-card p-5">
                <h4 className="font-bold text-white mb-2">Preferences</h4>
                <p className="text-xs text-gray-400">User nickname, avatar choice, favorite cat selection, onboarding completion status, and UI theme preferences.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">5. Photos and Android Photo Picker</h2>
            <p>
              Meowoirs integrates Android&apos;s system Photo Picker (<code className="text-accent-400">ActivityResultContracts.PickVisualMedia</code>).
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1.5 text-gray-300">
              <li><strong>No Broad Media Permission:</strong> Meowoirs does not request broad storage permissions (such as READ_EXTERNAL_STORAGE or READ_MEDIA_IMAGES).</li>
              <li><strong>No Camera Permission:</strong> Meowoirs does not request the CAMERA permission or access your hardware camera sensor.</li>
              <li><strong>No Cloud Upload:</strong> Photos chosen via the Photo Picker are never uploaded to LIMANEX. Meowoirs only stores local Content URI references on your device.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">6. No User Accounts, Logins, or Cloud Sync</h2>
            <p>
              Meowoirs does not require registration, usernames, passwords, or authentication. There is no account system, single sign-on (SSO), or remote cloud database. LIMANEX does NOT operate, own, or host any cloud database or server that stores your journal entries.
            </p>
            <p className="mt-3">
              Because Meowoirs does not operate an automated cloud backup facility, users are solely responsible for maintaining independent backups of any content they consider irreplaceable.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">7. Data Deletion &amp; Retention</h2>
            <p>
              Users can delete individual memories or cat profiles within the app.
            </p>
            <p className="mt-3">
              <strong>Important Database Behavior:</strong> When you delete a cat profile, the profile record is removed from the local database. In accordance with database design, associated memory entries are preserved to prevent accidental loss of journal entries. If you wish to delete both a cat and its memories, the memories can be deleted individually.
            </p>
            <p className="mt-3">
              Clearing application data or uninstalling Meowoirs will erase locally stored SQLite database files. LIMANEX has no technical capacity to restore lost local data.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">8. Third-Party Services &amp; Diagnostics</h2>
            <p>
              To support ongoing development and ensure operational stability, Meowoirs integrates standard certified SDKs provided by Google LLC:
            </p>
            <div className="space-y-4 mt-4">
              <div className="glass-card p-5">
                <h4 className="font-bold text-white mb-1">Google Mobile Ads (AdMob)</h4>
                <p className="text-sm text-gray-400">Displays non-intrusive banner and interstitial advertisements. Full-screen interstitial ads appear only at natural transition points and never disrupt active text entry or media selection. Google may process technical identifiers such as IP address and GAID.</p>
              </div>
              <div className="glass-card p-5">
                <h4 className="font-bold text-white mb-1">Google User Messaging Platform (UMP)</h4>
                <p className="text-sm text-gray-400">Presents certified consent dialogs to users in the EEA and UK. Privacy choices can be modified at any time in the app via Settings &rarr; Privacy Options.</p>
              </div>
              <div className="glass-card p-5">
                <h4 className="font-bold text-white mb-1">Firebase Crashlytics</h4>
                <p className="text-sm text-gray-400">Collects anonymous technical crash logs, stack traces, device model, and OS version to diagnose application faults. Crashlytics does NOT log your cat names, journal entries, notes, or photo URIs.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">9. User Rights &amp; Regulatory Disclosures</h2>
            <p>
              <strong>KVKK (Law No. 6698, Türkiye):</strong> Because LIMANEX does not store your journal data on remote servers, your journal data remains entirely within your own custody on your local device. For privacy inquiries regarding telemetry or technical diagnostics, contact limanexsoftware@outlook.com.
            </p>
            <p className="mt-3">
              <strong>CCPA / CPRA:</strong> Meowoirs does not sell personal information. Technical advertising preferences can be managed directly through Android Settings or the in-app consent menu.
            </p>
            <p className="mt-3">
              <strong>Children&apos;s Privacy:</strong> Meowoirs is designed for a general audience and does not knowingly collect personal data from children.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">10. Contact Information</h2>
            <p>For questions or inquiries regarding this Privacy Policy:</p>
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
