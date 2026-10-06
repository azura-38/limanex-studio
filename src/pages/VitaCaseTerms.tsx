import { FileText } from 'lucide-react';
import { LegalLayout } from '../components/LegalLayout';
import { VitaCaseUnifiedLegal } from '../components/VitaCaseUnifiedLegal';
import { useSEO } from '../hooks/useSEO';

export default function VitaCaseTerms() {
  useSEO({
    title: 'VitaCase Terms of Use — LIMANEX STUDIO',
    description: 'Official Terms of Use for VitaCase personal health organizer by LIMANEX STUDIO. Agreement governing on-device vault usage.',
    canonical: 'https://limanexstudio.com/terms/vitacase',
  });

  return (
    <LegalLayout
      title="VitaCase Terms of Use"
      subtitle="TERMS & PRIVACY — LAST UPDATED: OCTOBER 6, 2026"
      badge="Canonical Legal Master"
      badgeIcon={FileText}
      app="vitacase"
    >
      <VitaCaseUnifiedLegal initialSection="terms" pageMode="terms" />
    </LegalLayout>
  );
}
