import { useEffect, useState } from 'react';
import { 
  FileText, 
  Shield, 
  AlertTriangle, 
  Trash2, 
  Globe2,
  Layers
} from 'lucide-react';
import clsx from 'clsx';

export type LegalSectionId = 'terms' | 'privacy' | 'kvkk' | 'disclaimer' | 'deletion';

interface VitaCaseUnifiedLegalProps {
  initialSection?: LegalSectionId;
  pageMode?: 'privacy' | 'terms' | 'disclaimer';
}

const SECTIONS: { id: LegalSectionId; anchor: string; title: string; shortTitle: string; icon: any }[] = [
  { id: 'terms', anchor: 'section-terms', title: 'Section 1 — Terms of Use', shortTitle: 'Terms of Use', icon: FileText },
  { id: 'privacy', anchor: 'section-privacy', title: 'Section 2 — Privacy & GDPR', shortTitle: 'Privacy & GDPR', icon: Shield },
  { id: 'kvkk', anchor: 'section-kvkk', title: 'Section 3 — Türkiye KVKK Aydınlatma', shortTitle: 'Türkiye KVKK', icon: Globe2 },
  { id: 'disclaimer', anchor: 'section-disclaimer', title: 'Section 4 — Health Disclaimer', shortTitle: 'Health Disclaimer', icon: AlertTriangle },
  { id: 'deletion', anchor: 'section-deletion', title: 'Section 5 — Data Deletion', shortTitle: 'Data Deletion', icon: Trash2 },
];

export function VitaCaseUnifiedLegal({ initialSection = 'terms' }: VitaCaseUnifiedLegalProps) {
  const [activeSection, setActiveSection] = useState<LegalSectionId>(initialSection);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    const matched = SECTIONS.find(s => s.anchor === hash || s.id === hash);
    if (matched) {
      setActiveSection(matched.id);
      const el = document.getElementById(matched.anchor);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
      }
    } else if (initialSection && initialSection !== 'terms') {
      const target = SECTIONS.find(s => s.id === initialSection);
      if (target) {
        setActiveSection(target.id);
        const el = document.getElementById(target.anchor);
        if (el) {
          setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
        }
      }
    }
  }, [initialSection]);

  const scrollTo = (sec: typeof SECTIONS[0]) => {
    setActiveSection(sec.id);
    const el = document.getElementById(sec.anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', `#${sec.anchor}`);
    }
  };

  return (
    <div className="space-y-12">
      {/* Document Meta Banner */}
      <div className="glass-card p-6 sm:p-8 border border-white/[0.08] bg-white/[0.02] rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-brand-300">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">VitaCase Terms &amp; Privacy</h2>
              <p className="text-xs text-gray-400">Published by LIMANEX &bull; Canonical Master</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-accent-500/15 border border-accent-500/30 text-accent-300">
              Version 1.1.7-2026-10
            </span>
            <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/[0.05] border border-white/10 text-gray-300">
              Updated: Oct 6, 2026
            </span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-gray-300 mt-4 leading-relaxed">
          VitaCase is designed for on-device personal health record organization. This document consolidates our Terms of Use, Privacy Policy, General Data Protection Regulation (GDPR) disclosures, Türkiye KVKK Aydınlatma Bilgilendirmesi, Health Disclaimers, and Data Deletion procedures into a single unified legal experience.
        </p>

        {/* Section Quick Jump Pill Navigation */}
        <div className="mt-6 pt-5 border-t border-white/[0.06]">
          <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
            Table of Contents / Jump to Section:
          </div>
          <div className="flex flex-wrap gap-2">
            {SECTIONS.map((sec) => {
              const isActive = activeSection === sec.id;
              const Icon = sec.icon;
              return (
                <button
                  key={sec.id}
                  onClick={() => scrollTo(sec)}
                  className={clsx(
                    'inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer',
                    isActive
                      ? 'bg-brand-500 text-white shadow-md shadow-brand-500/25 border border-brand-400/40'
                      : 'bg-white/[0.04] text-gray-300 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
                  )}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{sec.shortTitle}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* SECTION 1 — TERMS OF USE */}
      <section 
        id="section-terms" 
        className="scroll-mt-32 space-y-6 pt-4 border-t border-white/[0.08] first:border-0 first:pt-0"
        aria-label="Section 1 Terms of Use"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-brand-500/20 text-brand-300 flex items-center justify-center font-bold text-sm">
            1
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            SECTION 1 — TERMS OF USE
          </h2>
        </div>

        <div className="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
          <div>
            <h3 className="text-lg font-bold text-white mb-2">1.1 Agreement to Terms</h3>
            <p>
              These Terms of Use (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you (&ldquo;User&rdquo;, &ldquo;you&rdquo;) and <strong>LIMANEX</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), governing your access to and use of the VitaCase mobile application (the &ldquo;App&rdquo;, &ldquo;Service&rdquo;).
            </p>
            <p className="mt-2">
              By downloading, installing, accessing, or using VitaCase, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree with all of these Terms, you must discontinue use and uninstall the App.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-2">1.2 Description of Service</h3>
            <p>
              VitaCase is a private personal organization and document management tool that operates locally on your mobile device. Key capabilities include:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1.5">
              <li><strong>Encrypted Document Vault:</strong> On-device organization of personal files, medical documents, prescriptions, lab reports, and receipts using local authenticated AES-256-GCM encryption.</li>
              <li><strong>Medication &amp; Stock Tracking:</strong> Personal medication records, dosage schedules, stock quantities, and local reminder notifications.</li>
              <li><strong>Appointment Scheduling:</strong> Local calendar tracking for doctor visits, examinations, and medical follow-ups.</li>
              <li><strong>Health &amp; Physical Metrics:</strong> Local tracking of height, weight, BMI, and vital health logs.</li>
              <li><strong>Emergency &amp; Critical Info:</strong> Quick access to blood type, emergency contact numbers, and important health notes.</li>
            </ul>
            <p className="mt-2">
              VitaCase functions strictly as a <strong>personal organization and local storage utility</strong>.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-200/90">
            <h3 className="text-base font-bold text-yellow-300 mb-1 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              1.3 No Medical or Healthcare Professional Advice
            </h3>
            <p className="text-sm leading-relaxed">
              VitaCase is <strong>NOT</strong> a healthcare provider, medical device, clinical diagnostic system, or treatment advisor. The App does not provide medical advice, diagnosis, treatment plans, clinical decision support, or prescription management. Your use does not establish a doctor-patient relationship. Always seek the advice of a qualified physician, medical specialist, pharmacist, or licensed healthcare provider.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-2">1.4 User Responsibilities for Medications, Appointments &amp; Reminders</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Medications:</strong> You are solely responsible for ensuring that all medication names, dosages, intervals, refill counts, and notes match instructions provided by your prescribing doctor or pharmacist. VitaCase does not clinical-check medication combinations, dosages, or schedules.</li>
              <li><strong>Appointments:</strong> You are solely responsible for independently verifying appointment dates, times, clinic locations, and preparation requirements directly with your healthcare providers. VitaCase is not connected to clinic booking servers.</li>
              <li><strong>Notification Reliability:</strong> Local reminders and notifications may fail to appear or be silenced due to device battery optimizations, Do Not Disturb / Focus modes, permission changes, or low-memory states. <strong>You agree not to rely solely on VitaCase for time-sensitive, life-critical medications or appointments.</strong></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-2">1.5 Emergency Situations</h3>
            <p className="font-semibold text-white">
              VITACASE IS NOT AN EMERGENCY DISPATCH OR MONITORING SYSTEM.
            </p>
            <p className="mt-1">
              If you are experiencing a medical emergency, severe allergic reaction, acute chest pain, trauma, or life-threatening condition, immediately call emergency services (such as <strong>112</strong> in Türkiye/EU, <strong>911</strong> in the US/Canada, <strong>999</strong> in the UK) and proceed to the nearest hospital emergency department.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-2">1.6 User Content &amp; Local Custody</h3>
            <p>
              You retain full, exclusive ownership of all documents, photos, files, and notes that you record in VitaCase. All user documents remain encrypted on your physical device. We do not access, monitor, screen, or verify user content stored on your device.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-2">1.7 Backups &amp; Data Loss Disclaimer</h3>
            <p>
              Because VitaCase operates locally on your device without central cloud synchronization, LIMANEX does not possess a copy of your files, documents, or cryptographic keys. If your device is damaged, lost, stolen, or wiped, your data cannot be recovered by LIMANEX. <strong>You are solely responsible for creating and maintaining independent, secure backups</strong> of all critical health records in a separate, secure location.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-2">1.8 Device Security &amp; PIN Protection</h3>
            <p>
              VitaCase offers an optional 6-digit PIN and device biometric lock to restrict unauthorized physical access on your device. Because VitaCase uses local cryptographic key derivation with no cloud bypass or server backdoor, <strong>LIMANEX cannot reset, bypass, or recover a forgotten PIN</strong>.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-2">1.9 Third-Party Services &amp; Advertising</h3>
            <p>
              The App integrates third-party SDKs including Google AdMob (for advertisements), Google Firebase (Crashlytics for crash diagnostics, Analytics for aggregated usage metrics), and Sentry (for error reporting). These services operate under their own terms and privacy policies.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-2">1.10 Acceptable Use Restrictions</h3>
            <p>
              You agree not to use VitaCase to violate applicable laws, store harmful materials, reverse-engineer the software, or distribute tampered copies.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-2">1.11 Disclaimer of Warranties</h3>
            <p className="text-xs uppercase tracking-wide text-gray-400 bg-white/[0.02] p-4 rounded-xl border border-white/[0.06]">
              THE APP IS PROVIDED ON AN &ldquo;AS-IS&rdquo; AND &ldquo;AS-AVAILABLE&rdquo; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, LIMANEX DISCLAIMS ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, ACCURACY, AND NON-INFRINGEMENT.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-2">1.12 Limitation of Liability</h3>
            <p className="text-xs uppercase tracking-wide text-gray-400 bg-white/[0.02] p-4 rounded-xl border border-white/[0.06]">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL LIMANEX BE LIABLE FOR ANY INDIRECT, CONSEQUENTIAL, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF DATA, DEVICE DAMAGE, MISSED APPOINTMENTS, MEDICATION ERRORS, OR PERSONAL INJURY.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-2">1.13 Governing Law &amp; Jurisdiction</h3>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the Republic of Turkey. Any dispute arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the competent courts of Istanbul, Turkey.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-2">1.14 Contact Information</h3>
            <p>
              For questions regarding these Terms: <a href="mailto:limanexsoftware@outlook.com" className="text-white underline underline-offset-4 hover:text-brand-300">limanexsoftware@outlook.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — PRIVACY POLICY & GLOBAL DATA PROTECTION */}
      <section 
        id="section-privacy" 
        className="scroll-mt-32 space-y-6 pt-10 border-t border-white/[0.08]"
        aria-label="Section 2 Privacy Policy and Global Data Protection"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-accent-500/20 text-accent-300 flex items-center justify-center font-bold text-sm">
            2
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            SECTION 2 — PRIVACY POLICY &amp; GLOBAL DATA PROTECTION (GDPR)
          </h2>
        </div>

        <div className="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
          <div>
            <h3 className="text-lg font-bold text-white mb-2">2.1 Information Architecture &amp; Data Storage</h3>
            <p>
              VitaCase operates on a privacy-respecting local architecture:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1.5">
              <li><strong>Local Document Vault:</strong> Your personal documents, medical notes, appointments, medications, health measurements, and profile entries are stored locally on your mobile device. LIMANEX does not maintain remote user accounts, usernames, or cloud document servers for user files.</li>
              <li><strong>On-Device Authenticated Encryption:</strong> Files stored in the VitaCase vault are encrypted locally using authenticated <strong>AES-256-GCM</strong> encryption, with cryptographic keys stored in operating system hardware-backed secure storage (<code>FlutterSecureStorage</code> / Android Keystore / iOS Keychain).</li>
              <li><strong>Off-Device Telemetry Distinction:</strong> While your health records and vault files remain on your device, limited technical diagnostics and ad requests may be transmitted off-device via secure TLS connections by third-party SDKs as described below.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-2">2.2 On-Device Sensitive Health Data</h3>
            <p>
              VitaCase enables you to store health records, medications, and appointment details. This information is entered voluntarily by you and stays on your device in encrypted local storage. We do <strong>not</strong> transmit, inspect, analyze, monetize, profile, or share your medical files or personal records. You are the sole custodian of your health information.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-2">2.3 Biometric Authentication</h3>
            <p>
              VitaCase allows you to secure the App using device biometrics (fingerprint or facial recognition). Biometric authentication is executed entirely by your device operating system via local platform security APIs (<code>local_auth</code>). <strong>VitaCase never receives, stores, reads, or transmits biometric templates.</strong>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-2">2.4 Automatically Collected Technical Data &amp; SDK Telemetry</h3>
            <p>
              While your documents and personal records remain stored locally on your device, the App integrates third-party software development kits (SDKs) strictly for error monitoring, performance diagnostics, aggregated product analytics, and advertising:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <h4 className="font-bold text-white text-sm mb-1">1. Google Firebase Analytics</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Collects pseudonymous interaction metrics (such as screen views and feature counters). <strong>No health data, medication names, dosages, or document files are ever logged.</strong>
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <h4 className="font-bold text-white text-sm mb-1">2. Google Firebase Crashlytics</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Collects diagnostic stack traces, device model, and OS version at the time of a software crash to identify and resolve stability issues.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <h4 className="font-bold text-white text-sm mb-1">3. Sentry (Functional Software, Inc.)</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Collects real-time application exceptions and error stack traces to monitor software health and catch technical exceptions.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <h4 className="font-bold text-white text-sm mb-1">4. Google AdMob &amp; Google UMP</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Delivers in-app advertisements. In regions requiring consent (such as EEA/UK), advertising consent preferences are collected via the Google User Messaging Platform (UMP). Advertising consent does not conflate with diagnostic telemetry.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-2">2.5 Cross-Border &amp; International Data Transfers</h3>
            <p>
              Third-party providers (Google LLC and Functional Software, Inc.) maintain infrastructure in the United States and globally. Data collected by their SDKs is transferred using recognized international transfer mechanisms, including the EU-U.S. Data Privacy Framework and Standard Contractual Clauses (SCCs).
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-2">2.6 Legal Bases for Processing (Under GDPR)</h3>
            <ul className="list-disc pl-6 space-y-1.5">
              <li><strong>Contractual Necessity (Art. 6(1)(b) GDPR):</strong> Operating core application features requested by the user.</li>
              <li><strong>Legitimate Interests (Art. 6(1)(f) GDPR):</strong> Maintaining app stability, debugging crashes (Crashlytics, Sentry), and analyzing aggregated product metrics.</li>
              <li><strong>Consent (Art. 6(1)(a) GDPR):</strong> Delivering personalized advertising via Google AdMob (managed through Google UMP preferences).</li>
              <li><strong>Explicit Consent for Health Data (Art. 9(2)(a) GDPR):</strong> Provided by the user through voluntary on-device entry and encryption of health-related information into the local vault.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-2">2.7 Third-Party Retention Periods</h3>
            <p>
              Third-party providers retain diagnostic logs and event telemetry in accordance with their standard developer retention schedules and privacy policies (e.g. Google Firebase standard retention cycles and Sentry data retention policies). Local records on your device are retained until deleted by you.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-2">2.8 Data Subject Rights (GDPR &amp; International)</h3>
            <p>
              Depending on your jurisdiction, you have the right to access, rectify, or erase your data, restrict or object to processing, withdraw advertising consent, and lodge a complaint with your local data protection supervisory authority.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-2">2.9 Children&apos;s Privacy</h3>
            <p>
              VitaCase is not directed at children under the age of 13 (or under 16 in the European Economic Area). We do not knowingly collect personal information from children.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <h3 className="text-base font-bold text-white mb-2">2.10 Data Controller Identity &amp; Contact Details</h3>
            <ul className="space-y-1.5 text-sm">
              <li><strong>Developer &amp; Brand:</strong> LIMANEX</li>
              <li><strong>Contact Email:</strong> <a href="mailto:limanexsoftware@outlook.com" className="text-brand-300 underline underline-offset-4">limanexsoftware@outlook.com</a></li>
              <li><strong>Legal Notice:</strong> Official communication regarding privacy inquiries or data rights should be directed to the verified contact email above.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 3 — TÜRKİYE KVKK AYDINLATMA METNİ */}
      <section 
        id="section-kvkk" 
        className="scroll-mt-32 space-y-6 pt-10 border-t border-white/[0.08]"
        aria-label="Section 3 Turkiye KVKK Aydinlatma Bilgilendirmesi"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-red-500/20 text-red-300 flex items-center justify-center font-bold text-sm">
            3
          </div>
          <div>
            <span className="text-xs font-semibold text-red-400 uppercase tracking-widest">Türkiye Cumhuriyeti Mevzuatı</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              SECTION 3 — TÜRKİYE — 6698 SAYILI KVKK AYDINLATMA BİLGİLENDİRMESİ
            </h2>
          </div>
        </div>

        <div className="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
          <p className="italic text-gray-400 text-sm">
            Bu bölüm, 6698 sayılı Kişisel Verilerin Korunması Kanunu (&ldquo;KVKK&rdquo;) m. 10 ve Aydınlatma Yükümlülüğünün Yerine Getirilmesinde Uyulacak Usul ve Esaslar Hakkında Tebliğ uyarınca Türkiye Cumhuriyeti sınırları içerisindeki kullanıcılara yönelik aydınlatma bildirimini içermektedir.
          </p>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <h3 className="text-lg font-bold text-white mb-2">3.1 Veri Sorumlusunun Kimliği ve Bilgileri</h3>
            <ul className="space-y-1.5 text-sm">
              <li><strong>Veri Sorumlusu:</strong> LIMANEX (Geliştirici &amp; Veri Sorumlusu)</li>
              <li><strong>İletişim ve Başvuru E-posta:</strong> <a href="mailto:limanexsoftware@outlook.com" className="text-brand-300 underline underline-offset-4">limanexsoftware@outlook.com</a></li>
              <li><strong>Uygulama:</strong> VitaCase (Android / iOS)</li>
              <li><strong>Bildirim:</strong> Faaliyetler LIMANEX geliştirici markası altında yürütülmektedir. Veri sorumlusuna yapılacak her türlü başvuru ve tebligat doğrudan yukarıdaki resmi iletişim e-postası üzerinden kabul edilmektedir.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-2">3.2 Yerel Depolama Mimarisi ve Kullanıcı Verilerinin Durumu</h3>
            <p>
              VitaCase uygulaması, <strong>cihaz üzerinde yerel depolama</strong> ve <strong>uçtan uca yerel şifreleme (AES-256-GCM)</strong> prensibiyle çalışmaktadır:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1.5">
              <li><strong>Sağlık ve Belge Verileri:</strong> Uygulamaya kaydettiğiniz belgeler, tahlil sonuçları, reçeteler, ilaç listeleri, randevu notları ve sağlık ölçümleri <strong>LIMANEX sunucularına iletilmez ve tarafımızca merkezi sunucularda depolanmaz</strong>. Verilerin zilyetliği ve denetimi kullanıcının kendi cihazındadır.</li>
              <li><strong>Biyometrik Veriler:</strong> Cihaz parmak izi veya yüz tanıma verileri doğrudan cihaz işletim sistemi (<code>local_auth</code>) tarafından yerel olarak işlenir; VitaCase biyometrik verilerinizi asla toplamaz veya harici sunuculara göndermez.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-2">3.3 İşlenen Kişisel Veri Kategorileri ve Toplanma Yöntemi</h3>
            <p>
              Uygulamanın teknik olarak çalışabilmesi, kararlılığının sağlanması ve yasal uyumluluk amacıyla yalnızca sınırlı teknik veriler otomatik yollarla toplanmaktadır:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1.5">
              <li><strong>Cihaz ve Bağlantı Bilgileri:</strong> Cihaz modeli, işletim sistemi sürümü, donanım özellikleri, sistem dili ve IP adresi (Google Firebase ve AdMob SDK&apos;ları aracılığıyla).</li>
              <li><strong>Kullanım ve Tanılama Verileri:</strong> Uygulama içi ekran etkileşimleri, hata kayıtları (crash reports), bellek ve performans istatistikleri (Google Firebase Analytics, Firebase Crashlytics ve Sentry aracılığıyla).</li>
              <li><strong>Reklam Tanımlayıcıları:</strong> Kişiselleştirilmiş veya kişiselleştirilmemiş reklam gösterimi amacıyla cihaz reklam kimliği (Google AdMob aracılığıyla, kullanıcı iznine tabi olarak).</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-2">3.4 Kişisel Veri İşlemenin Hukuki Sebepleri ve Amaçları</h3>
            <p>
              Teknik ve tanılama verileri:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Uygulamanın teknik işlevselliğinin, güvenliğinin ve kararlılığının sürdürülmesi (KVKK m. 5/2-f: Meşru menfaat),</li>
              <li>Yazılımsal hataların, çökmelerin tespiti ve giderilmesi (KVKK m. 5/2-f),</li>
              <li>Reklam ve gelir modeli yönetimi (kullanıcının rızası veya meşru menfaat kapsamında Google UMP üzerinden yönetilen tercihler),</li>
              <li>İlgili mevzuattan kaynaklanan hukuki yükümlülüklerin yerine getirilmesi (KVKK m. 5/2-ç) amaçlarıyla işlenmektedir.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-2">3.5 Kişisel Verilerin Aktarıldığı Taraflar</h3>
            <p>
              Kullanıcının girdiği kişisel sağlık kayıtları ve belgeleri üçüncü taraflara aktarılmaz. Yalnızca teknik ve tanılama verileri sınırlı olarak altyapı sağlayıcılarına aktarılabilmektedir:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Google LLC:</strong> Firebase Analytics, Firebase Crashlytics ve Google AdMob hizmetleri kapsamında.</li>
              <li><strong>Functional Software, Inc. (Sentry):</strong> Hata raporlama ve kararlılık takibi hizmetleri kapsamında.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-2">3.6 Veri Saklama Süresi ve Silme Hakkı</h3>
            <p>
              VitaCase üzerinde saklanan yerel veriler kullanıcı tarafından istendiği zaman silinebilir. Kullanıcı, Uygulama Ayarları içerisindeki <strong>&ldquo;Veri ve Güvenlik&rdquo; &rarr; &ldquo;Tüm Verileri Temizle&rdquo; (Clear All Data)</strong> fonksiyonunu kullanarak veya uygulamayı cihazından kaldırarak şifreli yerel verilerini silebilir. (Cihaz işletim sistemi düzeyinde Google Cloud yedeklemesi aktif ise, yedekleme dosyaları Google hesap ayarları üzerinden yönetilir).
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-2">3.7 İlgili Kişinin Hakları (KVKK Madde 11)</h3>
            <p>
              KVKK&apos;nın 11. maddesi uyarınca kullanıcılarımız, Veri Sorumlusuna başvurarak kendileriyle ilgili:
            </p>
            <ol className="list-decimal pl-6 mt-2 space-y-1 text-sm">
              <li>Kişisel veri işlenip işlenmediğini öğrenme,</li>
              <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,</li>
              <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
              <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,</li>
              <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,</li>
              <li>KVKK&apos;nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme,</li>
              <li>Düzeltme, silme ve yok edilme işlemlerinin verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
              <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme,</li>
              <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme haklarına sahiptir.</li>
            </ol>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-2">3.8 Başvuru Yöntemi</h3>
            <p>
              KVKK kapsamındaki haklarınıza ilişkin taleplerinizi e-posta ile <strong>limanexsoftware@outlook.com</strong> adresine (Konu: &ldquo;KVKK İlgili Kişi Başvurusu — VitaCase&rdquo;) iletebilirsiniz. Başvurularınız en geç 30 (otuz) gün içinde ücretsiz olarak sonuçlandırılacaktır.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — HEALTH & MEDICAL DISCLAIMER */}
      <section 
        id="section-disclaimer" 
        className="scroll-mt-32 space-y-6 pt-10 border-t border-white/[0.08]"
        aria-label="Section 4 Health and Medical Disclaimer"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-yellow-500/20 text-yellow-300 flex items-center justify-center font-bold text-sm">
            4
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            SECTION 4 — HEALTH &amp; MEDICAL DISCLAIMER
          </h2>
        </div>

        <div className="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
          <div>
            <h3 className="text-lg font-bold text-white mb-2">4.1 General Disclaimer</h3>
            <p>
              The information and organizational features provided by VitaCase are for general personal informational and organizational purposes only. All tools and content within the application are provided in good faith on an &ldquo;as-is&rdquo; and &ldquo;as-available&rdquo; basis.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-200/90">
            <h3 className="text-base font-bold text-yellow-300 mb-1 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              4.2 Medical &amp; Healthcare Disclaimer
            </h3>
            <p className="text-sm leading-relaxed">
              <strong>VITACASE DOES NOT PROVIDE MEDICAL ADVICE, DIAGNOSIS, OR TREATMENT.</strong> VitaCase is not certified as a medical device, diagnostic software, or clinical monitoring tool. The App is not a substitute for professional medical advice, clinical diagnosis, or specialized opinions. Always consult a qualified physician or pharmacist regarding medical questions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-2">4.3 Medication &amp; Prescription Disclaimer</h3>
            <p>
              VitaCase allows you to record medication names, dosage instructions, stock quantities, and schedule reminder times. VitaCase does not verify, validate, review, or assess the clinical safety, dosage accuracy, or potential drug interactions of medications entered by users. You are solely responsible for verifying all medication details against official prescriptions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-2">4.4 Appointment Calendar Disclaimer</h3>
            <p>
              VitaCase is not connected to any hospital, clinic, or healthcare appointment booking system. Users are solely responsible for independently confirming appointment dates, times, locations, and prep requirements with the clinic directly.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-2">4.5 Notification Reliability Disclaimer</h3>
            <p>
              On-device notifications are an informational convenience tool and are <strong>NOT guaranteed</strong> to fire under all operating conditions. Delivery depends heavily on device hardware, battery optimization settings, power saver modes, Focus/Do Not Disturb settings, and OS permission states. <strong>You must never rely solely on VitaCase notifications for critical medications.</strong>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-2">4.6 Emergency Situations Disclaimer</h3>
            <p className="font-bold text-white">
              VITACASE IS NOT EQUIPPED TO HANDLE EMERGENCIES. Immediately call local emergency services (112, 911, 999) or contact a hospital emergency department directly in any life-threatening situation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-2">4.7 Assumption of Risk</h3>
            <p>
              By using VitaCase, you explicitly acknowledge and agree that you understand the limitations of the App and that LIMANEX shall not be liable for any claims, complications, or damages arising from your reliance on VitaCase.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — DATA RETENTION & DELETION POLICY */}
      <section 
        id="section-deletion" 
        className="scroll-mt-32 space-y-6 pt-10 border-t border-white/[0.08]"
        aria-label="Section 5 Data Retention and Deletion Policy"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-red-500/20 text-red-300 flex items-center justify-center font-bold text-sm">
            5
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            SECTION 5 — DATA RETENTION &amp; DELETION POLICY
          </h2>
        </div>

        <div className="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
          <div>
            <h3 className="text-lg font-bold text-white mb-2">5.1 Local Storage Architecture</h3>
            <p>
              VitaCase operates under an on-device personal data storage model:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1.5">
              <li><strong>No Remote Cloud Accounts:</strong> Your documents, health records, prescriptions, medications, and vital logs are stored locally on your device in an encrypted vault (AES-256-GCM).</li>
              <li><strong>Zero Cloud Copies of Records:</strong> LIMANEX does not operate central servers or cloud backups of your personal files and local databases.</li>
              <li><strong>Sole User Custody:</strong> You maintain exclusive logical and physical control over all personal and medical information entered into the App.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-2">5.2 User Deletion Methods</h3>
            <p>VitaCase gives you complete autonomy to delete your information at any time:</p>
            <div className="space-y-3 mt-3">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <h4 className="font-bold text-white text-sm mb-1">1. Selective Manual Deletion</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Swipe or open any document, medication, or appointment in the App and tap &ldquo;Delete&rdquo; to permanently remove it from your local encrypted vault.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <h4 className="font-bold text-white text-sm mb-1">2. In-App Complete Data Wipe (&ldquo;Clear All Data&rdquo; / &ldquo;Tüm Verileri Temizle&rdquo;)</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Located in <strong>Settings &rarr; Data &amp; Security &rarr; Clear All Data</strong> (&ldquo;Veri ve Güvenlik &rarr; Tüm Verileri Temizle&rdquo;): Purges the local database, deletes all stored files from the encrypted document vault, wipes the AES-256 master key from device secure storage, and cancels all scheduled local reminders.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <h4 className="font-bold text-white text-sm mb-1">3. Application Uninstallation</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Uninstalling VitaCase via operating system settings removes the application&apos;s isolated private storage sandbox on your device. <em>Note on Operating System Backups:</em> If you have enabled Android Auto Backup or Google Drive cloud backup on your device, snapshots managed by your operating system follow your Google Account settings.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-2">5.3 Limitations: Third-Party Telemetry &amp; Technical Logs</h3>
            <p>
              While in-app wiping and uninstallation purge all local user files, they do not automatically delete diagnostic telemetry that may have been transmitted to third-party infrastructure:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1.5 text-xs text-gray-400">
              <li><strong>Firebase Analytics &amp; Crashlytics:</strong> Retained by Google in accordance with standard developer retention schedules and platform policies.</li>
              <li><strong>Sentry:</strong> Retained by Sentry in accordance with its developer diagnostic retention policies.</li>
              <li><strong>Google AdMob:</strong> Governed by Google Mobile Ads SDK and user device advertising ID settings.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <h3 className="text-base font-bold text-white mb-2">5.4 Formal Data Deletion Requests (GDPR / KVKK)</h3>
            <p className="text-sm">
              To submit a formal deletion inquiry regarding technical telemetry:
            </p>
            <p className="text-sm mt-1">
              📧 <strong>Email:</strong> <a href="mailto:limanexsoftware@outlook.com" className="text-brand-300 underline underline-offset-4">limanexsoftware@outlook.com</a><br />
              <strong>Subject:</strong> Data Deletion Request — VitaCase
            </p>
            <p className="text-xs text-gray-400 mt-2">
              *Because VitaCase does not maintain user accounts or require email registration, LIMANEX does not store personal profiles linking diagnostic telemetry to individual user names. If you have questions regarding telemetry handled by third-party services, contact us directly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
