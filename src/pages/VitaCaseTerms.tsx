import { FileText } from 'lucide-react';
import { LegalLayout } from '../components/LegalLayout';
import { VitaCaseUnifiedLegal } from '../components/VitaCaseUnifiedLegal';
import { useSEO } from '../hooks/useSEO';

export default function VitaCaseTerms() {
  useSEO({
    title: 'VitaCase Terms of Use — LIMANEX',
    description: 'Official Terms of Use for VitaCase personal health organizer, published by LIMANEX.',
    canonical: 'https://limanexstudio.com/terms/vitacase',
  });

  return (
    <LegalLayout
      title="VitaCase Terms of Use"
      subtitle="TERMS & PRIVACY — PUBLISHED BY LIMANEX — LAST UPDATED: OCTOBER 11, 2026"
      badge="Canonical Legal Master"
      badgeIcon={FileText}
      app="vitacase"
    >
      <VitaCaseUnifiedLegal initialSection="terms" pageMode="terms" />
    </LegalLayout>
  );
}
