import { MaintenancePage } from '@/components/MaintenancePage';
import { Language } from '@/lib/translations';

interface Params {
  lang: string;
}

export default async function LangPage({ params }: { params: Promise<Params> }) {
  const resolvedParams = await params;
  const langKey = (resolvedParams.lang || 'ar').toLowerCase();
  const validLang: Language = (langKey === 'fr' || langKey === 'en') ? langKey : 'ar';

  return <MaintenancePage initialLang={validLang} />;
}
