// app/impact-reports/page.js
import { Suspense } from 'react';
import { fetchImpactData } from '@/lib/data';
import ImpactReports from './ImpactReports';

async function ImpactReportsData() {
  const data = await fetchImpactData();
  return <ImpactReports data={data} />;
}

export default function ImpactReportsPage() {
  return (
    <main>
      <Suspense fallback={<div>Loading impact reports...</div>}>
        <ImpactReportsData />
      </Suspense>
    </main>
  );
}