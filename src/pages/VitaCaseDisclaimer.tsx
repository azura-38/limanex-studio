import { AlertTriangle } from 'lucide-react';
import { LegalLayout } from '../components/LegalLayout';
import { VitaCaseUnifiedLegal } from '../components/VitaCaseUnifiedLegal';
import { useSEO } from '../hooks/useSEO';

export default function VitaCaseDisclaimer() {
  useSEO({
    title: 'VitaCase Health Disclaimer — LIMANEX',
    description: 'Health, medical, medication, and notification reliability disclaimers for VitaCase, published by LIMANEX.',
    canonical: 'https://limanexstudio.com/disclaimer/vitacase',
  });

  return (
    <LegalLayout
      title="VitaCase Health Disclaimer"
      subtitle="TERMS & PRIVACY — PUBLISHED BY LIMANEX — LAST UPDATED: OCTOBER 11, 2026"
      badge="Canonical Legal Master"
      badgeIcon={AlertTriangle}
      app="vitacase"
    >
      <VitaCaseUnifiedLegal initialSection="disclaimer" pageMode="disclaimer" />
    </LegalLayout>
  );
}
