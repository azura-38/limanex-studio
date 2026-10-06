import { Link } from 'react-router-dom';
import { 
  Trash2, 
  ShieldCheck, 
  Mail, 
  ArrowLeft, 
  FileText, 
  HardDrive
} from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export default function DeleteAccount() {
  useSEO({
    title: 'Data Deletion Instructions — VitaCase | LIMANEX',
    description: 'Instructions for deleting personal data, local encrypted documents, and diagnostic telemetry from VitaCase by LIMANEX.',
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
          Data Deletion Instructions
        </h1>
        <p className="text-xs sm:text-sm uppercase tracking-[0.16em] text-gray-400 font-semibold">
          VitaCase Personal Health Organizer &bull; Published by LIMANEX
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
                Local Storage: No Remote Cloud Accounts
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                VitaCase operates with an on-device data architecture. The application does not maintain cloud user accounts, central registration, usernames, or remote passwords.
              </p>
              <p className="text-sm text-gray-300 leading-relaxed mt-3">
                All personal health records, documents, lab results, prescriptions, vitals, and medication schedules are stored <strong>locally on your personal device</strong> in an encrypted vault (AES-256-GCM). LIMANEX does not operate remote user document servers or possess copies of your vault records.
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
                <h3 className="font-bold text-white text-base">In-App Complete Data Wipe (&ldquo;Clear All Data&rdquo; / &ldquo;Tüm Verileri Temizle&rdquo;)</h3>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed mb-3">
                You can immediately purge all local data directly from inside VitaCase:
              </p>
              <ol className="list-decimal pl-6 text-sm text-gray-300 space-y-1.5">
                <li>Open VitaCase on your mobile device.</li>
                <li>Tap <strong>Settings</strong> (gear icon) &rarr; navigate to <strong>Data &amp; Security</strong> (&ldquo;Veri ve Güvenlik&rdquo;).</li>
                <li>Tap <strong>&ldquo;Clear All Data&rdquo; (Tüm Verileri Temizle)</strong> and confirm the confirmation prompt.</li>
              </ol>
              <p className="text-xs text-gray-400 mt-3 pt-3 border-t border-white/[0.06]">
                This action immediately deletes the local database, purges all stored files from the encrypted document vault, wipes the encryption key from hardware secure storage (<code>FlutterSecureStorage</code>), and cancels all local notification reminders.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-brand-500/20 text-brand-300 flex items-center justify-center text-xs font-bold">2</span>
                <h3 className="font-bold text-white text-base">Application Uninstallation</h3>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                Uninstalling VitaCase through your operating system settings (Android Application Manager or iOS Settings) permanently removes the application&apos;s isolated local sandbox. 
              </p>
              <p className="text-xs text-gray-400 mt-2">
                <em>Note on Operating System Backups:</em> If you have enabled Android Auto Backup or Google Drive cloud backup on your device, backup snapshots managed by the operating system follow your Google Account settings.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-brand-500/20 text-brand-300 flex items-center justify-center text-xs font-bold">3</span>
                <h3 className="font-bold text-white text-base">Selective Manual Deletion</h3>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                You can delete individual records at any time without resetting the entire app. Open or swipe any document, medication, or appointment entry and tap &ldquo;Delete&rdquo; to permanently remove that specific item from local storage.
              </p>
            </div>
          </div>
        </div>

        {/* Third-Party Telemetry & Formal Deletion Requests */}
        <div className="glass-card p-6 sm:p-8 border border-white/[0.08] rounded-2xl space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
            <Mail className="w-5 h-5 text-accent-400" />
            Diagnostic Telemetry &amp; Privacy Inquiries
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            While your documents and personal records remain stored locally on your physical device, VitaCase uses third-party SDKs (Google Firebase Analytics, Firebase Crashlytics, and Sentry) for crash diagnostics and aggregated stability metrics.
          </p>
          <p className="text-sm text-gray-300 leading-relaxed">
            To submit an inquiry or formal deletion request regarding third-party diagnostic telemetry under GDPR or Türkiye KVKK:
          </p>
          <div className="p-4 rounded-xl bg-brand-500/10 border border-brand-500/20">
            <p className="text-sm text-white font-medium">
              📧 Email: <a href="mailto:limanexsoftware@outlook.com" className="text-brand-300 underline underline-offset-4">limanexsoftware@outlook.com</a>
            </p>
            <p className="text-xs text-gray-300 mt-1">
              <strong>Subject:</strong> Data Deletion Request — VitaCase
            </p>
            <p className="text-xs text-gray-400 mt-2">
              *Because VitaCase does not maintain user accounts or require email registration, LIMANEX does not store personal profiles linking diagnostic telemetry to individual user names. Contact us at the verified email above for assistance.
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
