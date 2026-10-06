import { AlertTriangle } from 'lucide-react';
import { LegalLayout } from '../components/LegalLayout';
import { VitaCaseUnifiedLegal } from '../components/VitaCaseUnifiedLegal';
import { useSEO } from '../hooks/useSEO';

export default function VitaCaseDisclaimer() {
  useSEO({
    title: 'VitaCase Health & Medical Disclaimer — LIMANEX STUDIO',
    description: 'Health, medical, medication, and notification reliability disclaimers for the VitaCase personal health organizer.',
    canonical: 'https://limanexstudio.com/disclaimer/vitacase',
  });

  return (
    <LegalLayout
      title="VitaCase Health Disclaimer"
      subtitle="TERMS & PRIVACY — LAST UPDATED: OCTOBER 6, 2026"
      badge="Canonical Legal Master"
      badgeIcon={AlertTriangle}
      app="vitacase"
    >
      <VitaCaseUnifiedLegal initialSection="disclaimer" pageMode="disclaimer" />
    </LegalLayout>
  );
}
