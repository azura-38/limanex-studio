import { Link } from 'react-router-dom';
import { 
  Trash2, 
  ShieldCheck, 
  Smartphone, 
  Mail, 
  ArrowLeft, 
  FileText, 
  AlertCircle,
  HardDrive
} from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export default function DeleteAccount() {
  useSEO({
    title: 'Account & Data Deletion — VitaCase | LIMANEX STUDIO',
    description: 'Instructions for deleting personal data, encrypted documents, and diagnostic telemetry from VitaCase.',
    canonical: 'https://limanexstudio.com/delete-account',
  });

  return (
    <main id="main-content" className="flex-grow pt-36 sm:pt-40 md:pt-44 pb-32 px-6 max-w-[900px] mx-auto w-full relative">
      {/* Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header */}
      <header className="mb-10 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-4 text-xs font-semibold text-red-300">
          <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Data Custody &amp; Privacy</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
          Account &amp; Data Deletion
        </h1>
        <p className="text-xs sm:text-sm uppercase tracking-[0.16em] text-gray-400 font-semibold">
          VitaCase Personal Health Organizer
        </p>
      </header>

      {/* Navigation breadcrumb */}
      <div className="mb-8 flex items-center justify-between">
        <Link
          to="/privacy/vitacase"
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-white transition-colors py-2 px-3.5 rounded-xl glass"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to VitaCase Terms &amp; Privacy</span>
        </Link>
        <Link
          to="/privacy"
          className="inline-flex items-center gap-1.5 text-xs text-brand-300 hover:text-white transition-colors py-2 px-3 rounded-xl glass"
        >
          <span>Legal Center</span>
        </Link>
      </div>

      <div className="space-y-8">
        {/* Core Architecture Notice */}
        <div className="glass-card p-6 sm:p-8 border border-white/[0.08] rounded-2xl bg-white/[0.02]">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent-500/20 border border-accent-500/30 flex items-center justify-center text-accent-300 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-2">
                Local-First Architecture: No Remote Cloud Accounts
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                VitaCase is built with a <strong>local-first, offline-by-design architecture</strong>. The application does not require or maintain cloud user accounts, central registration, usernames, or remote passwords.
              </p>
              <p className="text-sm text-gray-300 leading-relaxed mt-3">
                All personal records, medical documents, lab results, prescriptions, vitals, and medication schedules are stored <strong>strictly on your personal device</strong> inside an isolated sandbox, encrypted locally using authenticated <strong>AES-256-GCM</strong>. Limanex Software does not host, possess, or have access to copies of your vault documents.
              </p>
            </div>
          </div>
        </div>

        {/* Deletion Instructions */}
        <div className="glass-card p-6 sm:p-8 border border-white/[0.08] rounded-2xl space-y-6">
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <HardDrive className="w-6 h-6 text-brand-400" />
            How to Delete Your Data
          </h2>

          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-brand-500/20 text-brand-300 flex items-center justify-center text-xs font-bold">1</span>
                <h3 className="font-bold text-white text-base">In-App Complete Data Wipe (&ldquo;Wipe All Data&rdquo; / &ldquo;Verileri Temizle&rdquo;)</h3>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed mb-3">
                You can immediately purge all data directly from inside the VitaCase app:
              </p>
              <ol className="list-decimal pl-6 text-sm text-gray-300 space-y-1.5">
                <li>Open VitaCase on your mobile device.</li>
                <li>Tap <strong>Settings</strong> (gear icon) &rarr; select <strong>Security &amp; Data</strong>.</li>
                <li>Tap <strong>&ldquo;Wipe All Data&rdquo; (Verileri Temizle)</strong> and confirm the prompt.</li>
              </ol>
              <p className="text-xs text-gray-400 mt-3 pt-3 border-t border-white/[0.06]">
                This action immediately deletes the local Sembast database, purges all stored files from the encrypted document vault, wipes the AES-256 master key from the device keystore (<code>FlutterSecureStorage</code>), and cancels all local notification reminders.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-brand-500/20 text-brand-300 flex items-center justify-center text-xs font-bold">2</span>
                <h3 className="font-bold text-white text-base">Application Uninstallation</h3>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                Uninstalling VitaCase through your operating system settings (Android Application Manager or iOS Settings) permanently removes the application&apos;s isolated private data storage sandbox. All encrypted databases, cached files, and local configuration are immediately and irrecoverably erased by your device OS.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-brand-500/20 text-brand-300 flex items-center justify-center text-xs font-bold">3</span>
                <h3 className="font-bold text-white text-base">Selective Manual Deletion</h3>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                You can also delete individual records at any time without resetting the entire app. Simply open or swipe any document, medication, or appointment entry and tap &ldquo;Delete&rdquo; to permanently remove that specific item from local storage.
              </p>
            </div>
          </div>
        </div>

        {/* Third-Party Telemetry & Formal Deletion Requests */}
        <div className="glass-card p-6 sm:p-8 border border-white/[0.08] rounded-2xl space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
            <Mail className="w-5 h-5 text-accent-400" />
            Diagnostic Telemetry &amp; Formal GDPR / KVKK Requests
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            While your documents and personal records never leave your physical device, VitaCase uses vetted third-party SDKs (Google Firebase Analytics, Firebase Crashlytics, and Sentry) strictly for crash diagnostics and aggregated performance metrics.
          </p>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-gray-400 space-y-1.5">
            <p>&bull; <strong>Firebase Analytics:</strong> Retained for 2 to 14 months per Google standard cycles.</p>
            <p>&bull; <strong>Firebase Crashlytics:</strong> Crash traces retained for 90 days.</p>
            <p>&bull; <strong>Sentry:</strong> Diagnostic error traces retained for 30 to 90 days.</p>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            To submit a formal deletion request regarding third-party diagnostic telemetry under GDPR (Art. 17) or Türkiye KVKK (m. 11), contact us directly:
          </p>
          <div className="p-4 rounded-xl bg-brand-500/10 border border-brand-500/20">
            <p className="text-sm text-white font-medium">
              📧 Email: <a href="mailto:limanexsoftware@outlook.com" className="text-brand-300 underline underline-offset-4">limanexsoftware@outlook.com</a>
            </p>
            <p className="text-xs text-gray-300 mt-1">
              <strong>Subject:</strong> Data Deletion Request — VitaCase
            </p>
            <p className="text-xs text-gray-400 mt-2">
              *Because VitaCase does not collect names, email addresses, or cloud accounts, please provide your pseudonymous installation UUID (<code>app_user_uid</code> found in App Settings &rarr; About) so we can locate any related diagnostic logs in developer consoles.
            </p>
          </div>
        </div>

        {/* Link to Full Canonical Policy */}
        <div className="text-center pt-4">
          <Link
            to="/privacy/vitacase#section-deletion"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-300 hover:text-white transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span>Read Section 5 (Data Retention &amp; Deletion Policy) in VitaCase Terms &amp; Privacy &rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
