import { Shield } from 'lucide-react';
import { LegalLayout } from '../components/LegalLayout';
import { VitaCaseUnifiedLegal } from '../components/VitaCaseUnifiedLegal';
import { useSEO } from '../hooks/useSEO';

export default function VitaCasePrivacy() {
  useSEO({
    title: 'VitaCase Privacy Policy — LIMANEX',
    description: 'Official VitaCase Privacy Policy, GDPR & Türkiye KVKK disclosures. Published by LIMANEX.',
    canonical: 'https://limanexstudio.com/privacy/vitacase',
  });

  return (
    <LegalLayout
      title="VitaCase Privacy Policy"
      subtitle="TERMS & PRIVACY — PUBLISHED BY LIMANEX — LAST UPDATED: OCTOBER 11, 2026"
      badge="Canonical Legal Master"
      badgeIcon={Shield}
      app="vitacase"
    >
      <VitaCaseUnifiedLegal initialSection="privacy" pageMode="privacy" />
    </LegalLayout>
  );
}
