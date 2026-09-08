import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Lock, Trash2, Smartphone, EyeOff, Radio, ExternalLink, HelpCircle } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { StructuredData, getOrganizationSchema, getBreadcrumbSchema, getFAQSchema } from "../components/StructuredData";
import { LegalLayout } from "../components/LegalLayout";

const meowoirsFAQs = [
  {
    question: "Where is my Meowoirs cat journal data stored?",
    answer: "All cat profiles, journal memories, photo associations, and mood reflections are stored strictly on your physical Android device in an embedded SQLite database managed via AndroidX Room. LIMANEX operates zero remote servers or cloud databases for your journal entries.",
  },
  {
    question: "Do I need an account or login to use Meowoirs?",
    answer: "No. Meowoirs has an account-free architecture. There is no sign-up, registration, username, password, or cloud authentication required. The app is immediately functional upon installation.",
  },
  {
    question: "Does Meowoirs upload my cat photos to the cloud?",
    answer: "No. Meowoirs utilizes Android's native system Photo Picker and only stores local Content URI references on your device. Your photos remain in your device storage and are never uploaded to or hosted on LIMANEX servers.",
  },
  {
    question: "What happens if I delete a cat profile?",
    answer: "In accordance with Meowoirs' database design, deleting a cat profile removes that profile record, but does NOT delete associated memory entries. Your journal entries remain preserved in your memories collection so your personal memories are not unintentionally lost.",
  },
  {
    question: "Can LIMANEX recover my deleted journal entries or memories?",
    answer: "No. Because LIMANEX operates no remote servers, cloud databases, or centralized backups of your journal content, LIMANEX has no technical ability to restore, recover, or reconstruct deleted entries once removed from your device.",
  },
  {
    question: "What third-party services are integrated into Meowoirs?",
    answer: "Meowoirs integrates Google Mobile Ads (AdMob) for non-intrusive advertising, Google User Messaging Platform (UMP) for regional privacy consent, and Firebase Crashlytics for anonymous crash stability logs. None of these SDKs access your cat names, journal notes, or photos.",
  },
  {
    question: "How do I change or revoke my advertising consent in Meowoirs?",
    answer: "You can adjust your consent choices at any time directly in the app by going to Settings -> 'Gizlilik Tercihleri' (Privacy Options) to reopen Google's UMP consent dialogue, or by resetting/deleting your Google Advertising ID in Android Settings -> Google -> Ads.",
  },
];

export default function MeowoirsPrivacy() {
  useSEO({
    title: "Meowoirs Privacy Policy — Limanex Studio",
    description:
      "Official Privacy Policy for Meowoirs by Limanex Studio. Learn how Meowoirs uses a local-first offline architecture to keep your cat journal, photos, and memories private on your device.",
  });

  return (
    <>
      <StructuredData
        data={[
          getOrganizationSchema(),
          getBreadcrumbSchema([
            { name: "Home", url: "https://limanexstudio.com/" },
            { name: "Legal Center", url: "https://limanexstudio.com/privacy" },
            { name: "Meowoirs Privacy Policy", url: "https://limanexstudio.com/privacy/meowoirs" },
          ]),
          getFAQSchema(meowoirsFAQs),
        ]}
      />

      <LegalLayout
        title="Meowoirs Privacy Policy"
        subtitle="Effective Date: September 7, 2026 | Legal Version: 1.0"
        badge="Local-First & Offline Storage"
        badgeIcon={Shield}
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

        {/* Primary Privacy Architecture Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-amber-500/10 border border-amber-500/25 mb-10 flex items-start gap-4 sm:gap-5">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0 text-amber-300">
            <Lock className="w-6 h-6" aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white mb-2">
              Privacy by Design: 100% Local-First Architecture
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Meowoirs is engineered with privacy as an architectural guarantee. Your cat profiles, journal notes, mood reflections, and photo references exist solely on your physical Android device. <strong>LIMANEX does not operate, host, or synchronize your journal data to any remote server or cloud database.</strong>
            </p>
          </div>
        </div>

        <div className="space-y-12 text-gray-300 text-sm sm:text-base leading-relaxed">
          {/* Section 1 */}
          <section aria-labelledby="intro-scope">
            <h2 id="intro-scope" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
              1. Introduction &amp; Scope
            </h2>
            <p>
              Welcome to <strong>Meowoirs</strong> (&quot;Application&quot;), a mobile software application for Android devices (<code className="text-amber-300 font-mono text-xs sm:text-sm">com.limanex.meowoirs</code>). Meowoirs is designed as a personal, local-first cat memory journal and reflective companion for pet guardians and caretakers.
            </p>
            <p className="mt-3">
              This Privacy Policy explains how information is handled when you download, install, and use Meowoirs. We believe your personal journal entries should remain confidential and in your custody. By installing, accessing, or using Meowoirs, you acknowledge the data handling practices described herein.
            </p>
          </section>

          {/* Section 2 */}
          <section aria-labelledby="operator-info">
            <h2 id="operator-info" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
              2. Operator Information
            </h2>
            <p>The Application is developed, maintained, and operated by:</p>
            <div className="glass-card p-5 mt-4 space-y-2 text-sm border border-white/[0.06]">
              <p><strong>Developer / Operator:</strong> LIMANEX</p>
              <p><strong>Jurisdiction:</strong> Republic of Türkiye</p>
              <p>
                <strong>Official Privacy &amp; Support Contact:</strong>{" "}
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
                <strong>Public Privacy Policy URL:</strong>{" "}
                <Link to="/privacy/meowoirs" className="text-brand-300 hover:text-white underline">
                  https://limanexstudio.com/privacy/meowoirs
                </Link>
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section aria-labelledby="definitions">
            <h2 id="definitions" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
              3. Definitions
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>
                <strong>&quot;Application&quot;</strong> or <strong>&quot;Meowoirs&quot;</strong> means the Meowoirs Android mobile software application.
              </li>
              <li>
                <strong>&quot;User&quot;</strong>, <strong>&quot;you&quot;</strong>, or <strong>&quot;your&quot;</strong> means any individual accessing or using the Application.
              </li>
              <li>
                <strong>&quot;Device&quot;</strong> means the physical Android device on which Meowoirs is installed.
              </li>
              <li>
                <strong>&quot;User Content&quot;</strong> means all cat profiles, names, notes, memories, emotional reflections, and photo references inputted or selected by the User.
              </li>
              <li>
                <strong>&quot;Local Storage&quot;</strong> means the embedded SQLite database (managed via AndroidX Room) and local preferences (managed via Android Jetpack DataStore) residing inside the private application sandbox on your Device.
              </li>
              <li>
                <strong>&quot;Third-Party Services&quot;</strong> means external software development kits integrated for advertising, consent verification, and application stability, specifically Google Mobile Ads (AdMob), Google User Messaging Platform (UMP), and Firebase Crashlytics.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section aria-labelledby="local-storage">
            <h2 id="local-storage" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4 flex items-center gap-2.5">
              <Smartphone className="w-5 h-5 text-amber-300" aria-hidden="true" />
              <span>4. What Meowoirs Stores Locally on Your Device</span>
            </h2>
            <p>
              Meowoirs operates on a strictly offline, local-first model. All user-created journal entries, cat profiles, and preferences are stored exclusively on your physical Device in local SQLite/Room database files and local DataStore preference files:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
              <div className="glass-card p-5 border border-white/[0.06]">
                <h3 className="font-bold text-white text-base mb-2">1. Cat Profiles</h3>
                <ul className="text-xs text-gray-300 space-y-1.5 list-disc pl-4">
                  <li>Cat name</li>
                  <li>Classification (Home Cat or Street Cat)</li>
                  <li>Local photo URI reference</li>
                  <li>Optional profile note</li>
                  <li>Creation timestamp</li>
                </ul>
              </div>
              <div className="glass-card p-5 border border-white/[0.06]">
                <h3 className="font-bold text-white text-base mb-2">2. Memories &amp; Notes</h3>
                <ul className="text-xs text-gray-300 space-y-1.5 list-disc pl-4">
                  <li>Associated cat identifier and name</li>
                  <li>Journal note text</li>
                  <li>Memory photo reference (Content URI)</li>
                  <li>Cat mood reflection selection</li>
                  <li>User emotional reflection selection</li>
                  <li>Creation timestamp</li>
                </ul>
              </div>
              <div className="glass-card p-5 border border-white/[0.06]">
                <h3 className="font-bold text-white text-base mb-2">3. App Preferences</h3>
                <ul className="text-xs text-gray-300 space-y-1.5 list-disc pl-4">
                  <li>User nickname</li>
                  <li>User avatar choice</li>
                  <li>Favorite cat identifier</li>
                  <li>Onboarding status</li>
                  <li>Theme preference</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section aria-labelledby="not-collected">
            <h2 id="not-collected" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4 flex items-center gap-2.5">
              <EyeOff className="w-5 h-5 text-amber-300" aria-hidden="true" />
              <span>5. Information We Do NOT Collect</span>
            </h2>
            <p>
              To eliminate any ambiguity, Meowoirs and LIMANEX <strong>DO NOT</strong> collect, store, access, or transmit:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs sm:text-sm">
                ❌ <strong>User Accounts or Passwords:</strong> No registration, login, or social accounts.
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs sm:text-sm">
                ❌ <strong>Payment or Banking Data:</strong> No in-app purchases or credit card collection.
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs sm:text-sm">
                ❌ <strong>Contacts or Address Book:</strong> No contact access whatsoever.
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs sm:text-sm">
                ❌ <strong>Audio or Microphone Input:</strong> No microphone access or recording.
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs sm:text-sm">
                ❌ <strong>GPS or Hardware Location:</strong> No precise or coarse GPS location tracking.
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs sm:text-sm">
                ❌ <strong>Camera Sensor Access:</strong> No hardware camera permission (Photo Picker used instead).
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs sm:text-sm sm:col-span-2">
                ❌ <strong>Clinical Veterinary Records:</strong> No certified medical or veterinary clinical databases.
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Your journal entries, notes, photos, and reflections exist solely on the Device where they were entered.
            </p>
          </section>

          {/* Section 6 */}
          <section aria-labelledby="photo-privacy">
            <h2 id="photo-privacy" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
              6. Photo Privacy &amp; Android Photo Picker
            </h2>
            <p>
              Meowoirs integrates Android&apos;s native system Photo Picker (<code className="text-amber-300 font-mono text-xs sm:text-sm">ActivityResultContracts.PickVisualMedia</code>) whenever you attach an image to a cat profile or memory entry:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-300">
              <li>
                <strong>No Broad Media Permissions:</strong> The Application does NOT request broad storage or media permissions (such as <code className="text-gray-400 font-mono text-xs">READ_EXTERNAL_STORAGE</code>, <code className="text-gray-400 font-mono text-xs">WRITE_EXTERNAL_STORAGE</code>, <code className="text-gray-400 font-mono text-xs">READ_MEDIA_IMAGES</code>, or <code className="text-gray-400 font-mono text-xs">READ_MEDIA_VIDEO</code>).
              </li>
              <li>
                <strong>No Camera Hardware Permission:</strong> The Application does NOT request <code className="text-gray-400 font-mono text-xs">CAMERA</code> hardware sensor permission.
              </li>
              <li>
                <strong>No Library Scanning:</strong> The Application cannot scan, index, or browse through your personal photo library.
              </li>
              <li>
                <strong>Isolated Local Content URIs:</strong> Only individual photos you explicitly choose in the system picker are accessible to Meowoirs, referenced through system-managed content URIs stored locally on your device.
              </li>
              <li>
                <strong>No Cloud Upload:</strong> Images selected are never uploaded to, transmitted to, or hosted on LIMANEX servers.
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section aria-labelledby="deletion-retention">
            <h2 id="deletion-retention" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4 flex items-center gap-2.5">
              <Trash2 className="w-5 h-5 text-amber-300" aria-hidden="true" />
              <span>7. Data Deletion &amp; Retention Architecture</span>
            </h2>
            <div className="space-y-4">
              <p>
                <strong>In-App Deletion:</strong> When you delete a memory or cat profile using the in-app delete buttons, the corresponding record is immediately removed from the local SQLite/Room database on your Device.
              </p>
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-sm">
                <strong className="text-white">Permanent Loss Disclosure:</strong> DELETED CONTENT CANNOT BE RESTORED. Because LIMANEX does not operate a remote server or maintain cloud backups of your journal content, LIMANEX has no technical ability to restore, recover, or reconstruct deleted memories or profiles.
              </div>
              <p>
                <strong>Cat Profile Deletion Behavior:</strong> In accordance with Meowoirs&apos; current database design:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-gray-300">
                <li>Deleting a cat profile removes that cat&apos;s record from your cat collection.</li>
                <li>
                  Deleting a cat profile <strong>does NOT delete associated memory entries</strong>; journal memories remain preserved in your memories collection so your personal journal history is not accidentally wiped out.
                </li>
                <li>If the deleted cat was set as your Favorite Cat, that preference is automatically cleared.</li>
              </ul>
              <p>
                <strong>Local Data Removal &amp; Operating System Backup Behavior:</strong> Meowoirs does not operate its own cloud backup or synchronization service. Clearing application data via Android Settings (<em>Settings &rarr; Apps &rarr; Meowoirs &rarr; Storage &rarr; Clear Data</em>) or uninstalling the application will delete locally stored SQLite database files. Android or device-level backup and restoration behavior, where available, is controlled by your operating system and is not guaranteed by LIMANEX.
              </p>
              <p>
                <strong>User Backup Responsibility:</strong> You are solely responsible for maintaining independent backups of any photos, notes, or memories you consider irreplaceable.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section aria-labelledby="third-party-services">
            <h2 id="third-party-services" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4 flex items-center gap-2.5">
              <Radio className="w-5 h-5 text-amber-300" aria-hidden="true" />
              <span>8. Third-Party Services (AdMob, UMP, Crashlytics)</span>
            </h2>
            <p>
              Meowoirs incorporates selected certified third-party SDKs provided by Google LLC. We maintain a <strong>strict separation</strong> between your local journal entries and third-party technical processing:
            </p>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] my-4 text-xs sm:text-sm text-gray-300">
              <strong className="text-white">Strict Isolation Guarantee:</strong> Your local journal data (cat names, diary notes, reflections, mood choices, pet milestones, and photo references) is strictly isolated from third-party SDKs. It is NOT uploaded to LIMANEX, NOT indexed by Google, and NOT logged into Crashlytics.
            </div>

            <div className="space-y-6 mt-6">
              {/* AdMob */}
              <div className="glass-card p-6 border border-white/[0.06]">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    A. Google Mobile Ads (AdMob)
                  </h3>
                  <span className="text-xs px-2.5 py-1 rounded-full glass-pill text-accent-400 font-mono">
                    Advertising
                  </span>
                </div>
                <p className="text-sm text-gray-300 mb-3">
                  Displays banner and occasional interstitial advertisements to support ongoing development of the free application. AdMob may process technical telemetry including Google Advertising ID (GAID / AAID), coarse IP address (for geographic routing and fraud prevention), and ad interaction metrics. AdMob does NOT receive your journal notes, cat names, or photos.
                </p>
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06] text-xs font-mono text-gray-400 space-y-1">
                  <p>AdMob Application ID: ca-app-pub-587701117866406~4355156867</p>
                  <p>Banner Ad Unit: ca-app-pub-587701117866406/2930394553</p>
                  <p>Interstitial Ad Unit: ca-app-pub-587701117866406/2195897382</p>
                </div>
                <p className="text-xs text-gray-400 mt-3">
                  <em>Ad format policy:</em> Interstitials are timed to natural breaks and are never shown while actively typing, journaling, or saving. Meowoirs has no rewarded video ads, no paid subscriptions, and no in-app purchases.
                </p>
              </div>

              {/* UMP */}
              <div className="glass-card p-6 border border-white/[0.06]">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    B. Google User Messaging Platform (UMP) SDK
                  </h3>
                  <span className="text-xs px-2.5 py-1 rounded-full glass-pill text-brand-300 font-mono">
                    Consent Management
                  </span>
                </div>
                <p className="text-sm text-gray-300 mb-3">
                  Manages user consent in compliance with regional regulations (such as EEA and UK GDPR, IAB Europe TCF v2.2). It allows users to consent to personalized ads, choose non-personalized ads, or configure individual vendor options.
                </p>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-gray-300">
                  <strong className="text-white">How to Change or Revoke Consent:</strong>
                  <ul className="list-disc pl-4 mt-1.5 space-y-1">
                    <li>In-App: Go to <strong>Settings &rarr; &quot;Gizlilik Tercihleri&quot; (Privacy Options)</strong> anytime to reopen the Google UMP consent dialogue.</li>
                    <li>Operating System: Go to Android <em>Settings &rarr; Google &rarr; Ads &rarr; Reset or Delete Advertising ID</em>.</li>
                  </ul>
                </div>
              </div>

              {/* Crashlytics */}
              <div className="glass-card p-6 border border-white/[0.06]">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    C. Firebase Crashlytics
                  </h3>
                  <span className="text-xs px-2.5 py-1 rounded-full glass-pill text-blue-300 font-mono">
                    Stability &amp; Crash Diagnostics
                  </span>
                </div>
                <p className="text-sm text-gray-300">
                  Processes non-personal technical diagnostics (unhandled exception stack traces, device model, Android OS version, app build number, memory state) to help LIMANEX resolve crashes and defects. <strong>Meowoirs does NOT log or transmit journal text, cat names, mood reflections, photo URIs, or personal notes to Crashlytics.</strong>
                </p>
              </div>
            </div>

            {/* Third-Party Summary Table */}
            <div className="overflow-x-auto mt-6">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-gray-400">
                    <th className="py-3 px-4">Third-Party Service</th>
                    <th className="py-3 px-4">Provider</th>
                    <th className="py-3 px-4">Primary Purpose</th>
                    <th className="py-3 px-4">Journal Content Access</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06]">
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Google Mobile Ads (AdMob)</td>
                    <td className="py-3 px-4 text-gray-400">Google LLC</td>
                    <td className="py-3 px-4 text-gray-400">Banner &amp; Interstitial ad delivery</td>
                    <td className="py-3 px-4 text-accent-400 font-semibold">NO ACCESS</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Google UMP SDK</td>
                    <td className="py-3 px-4 text-gray-400">Google LLC</td>
                    <td className="py-3 px-4 text-gray-400">TCF v2.2 privacy consent management</td>
                    <td className="py-3 px-4 text-accent-400 font-semibold">NO ACCESS</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Firebase Crashlytics</td>
                    <td className="py-3 px-4 text-gray-400">Google LLC</td>
                    <td className="py-3 px-4 text-gray-400">Anonymous crash stack traces</td>
                    <td className="py-3 px-4 text-accent-400 font-semibold">NO ACCESS</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs text-gray-400">
              For more details on Google&apos;s privacy practices, see:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-300 hover:text-white underline inline-flex items-center gap-1"
              >
                <span>Google Privacy Policy</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </p>
          </section>

          {/* Section 9 */}
          <section aria-labelledby="data-retention">
            <h2 id="data-retention" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
              9. Data Retention
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>
                <strong>Local Journal Content:</strong> Retained on your physical Device for as long as Meowoirs remains installed with storage intact, until you choose to delete specific items or clear application storage.
              </li>
              <li>
                <strong>Third-Party Diagnostics &amp; Advertising Telemetry:</strong> Handled by Google and Firebase in accordance with Google&apos;s independent data retention policies. LIMANEX does not define Google&apos;s internal retention intervals.
              </li>
            </ul>
          </section>

          {/* Section 10 */}
          <section aria-labelledby="cookies-statement">
            <h2 id="cookies-statement" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
              10. Cookie Policy Statement
            </h2>
            <p>
              <strong>Mobile Application:</strong> The Meowoirs mobile application does not use web cookies. It operates natively on Android using local SQLite and DataStore storage, and Google SDK identifiers (GAID, UMP consent strings) as disclosed above.
            </p>
            <p className="mt-3">
              <strong>LIMANEX Website:</strong> The public LIMANEX Studio website (https://limanexstudio.com) is a static informational presentation. It does not set marketing cookies, tracking pixels, or third-party web analytics cookies.
            </p>
          </section>

          {/* Section 11 */}
          <section aria-labelledby="privacy-rights">
            <h2 id="privacy-rights" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
              11. Applicable Privacy Rights (KVKK, GDPR, CCPA)
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>Turkish Law No. 6698 (KVKK):</strong> Because LIMANEX does not host or store your journal records on remote servers, your journal data remains entirely within your own custody on your local device. You can access, edit, and delete entries directly in the app. For inquiries regarding technical telemetry, contact limanexsoftware@outlook.com.
              </p>
              <p>
                <strong>European Union GDPR &amp; UK Data Protection:</strong> You have the right to access, rectify, and erase your data on your device. Where advertising consent is requested, consent can be managed or revoked at any time via Settings &rarr; &quot;Gizlilik Tercihleri&quot;. Because LIMANEX operates no remote user database, LIMANEX cannot remotely search, export, or delete your local records.
              </p>
              <p>
                <strong>California CCPA / CPRA &amp; US State Laws:</strong> Meowoirs does not sell personal information in exchange for monetary consideration. Advertising identifiers can be managed via Android Settings (Settings &rarr; Google &rarr; Ads) or the in-app consent menu.
              </p>
            </div>
          </section>

          {/* Section 12 */}
          <section aria-labelledby="children-privacy">
            <h2 id="children-privacy" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
              12. Children&apos;s Privacy
            </h2>
            <p>
              Meowoirs is a general-audience personal journaling application and is not specifically directed at children under the age of 13 (or applicable local age threshold). Meowoirs does not knowingly collect personal identifying information from children. If a parent or guardian has questions regarding privacy practices, please contact limanexsoftware@outlook.com.
            </p>
          </section>

          {/* Section 13 */}
          <section aria-labelledby="security">
            <h2 id="security" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
              13. Security Practices &amp; Limitations
            </h2>
            <p>
              LIMANEX implements reasonable technical measures appropriate to an offline-first architecture. The Android operating system protects application storage through application sandboxing on standard, non-rooted devices.
            </p>
            <p className="mt-3">
              However, no software application or physical device environment can be guaranteed completely immune from hardware failure, operating system vulnerabilities, or physical tampering. We do not make exaggerated claims of military-grade, unbreakable, or absolute security. You are encouraged to maintain standard device lock-screen security and keep external backups of irreplaceable photos.
            </p>
          </section>

          {/* Section 14 */}
          <section aria-labelledby="changes">
            <h2 id="changes" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
              14. Changes to This Privacy Policy
            </h2>
            <p>
              LIMANEX reserves the right to update this Privacy Policy from time to time. When changes occur, the &quot;Last Updated&quot; date will be revised. Material updates will be reflected in the Application and on the public legal website (https://limanexstudio.com/privacy/meowoirs).
            </p>
          </section>

          {/* Section 15 */}
          <section aria-labelledby="contact" className="pt-4 border-t border-white/[0.08]">
            <h2 id="contact" className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
              15. Contact Information
            </h2>
            <p>For questions or privacy inquiries regarding Meowoirs:</p>
            <div className="glass-card p-5 mt-4 space-y-2 text-sm border border-white/[0.06]">
              <p><strong>Developer / Operator:</strong> LIMANEX</p>
              <p><strong>Country:</strong> Republic of Türkiye</p>
              <p>
                <strong>Official Contact Email:</strong>{" "}
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
                <strong>Public Privacy Policy:</strong>{" "}
                <Link to="/privacy/meowoirs" className="text-brand-300 hover:text-white underline">
                  https://limanexstudio.com/privacy/meowoirs
                </Link>
              </p>
            </div>
          </section>
        </div>
      </LegalLayout>
    </>
  );
}
