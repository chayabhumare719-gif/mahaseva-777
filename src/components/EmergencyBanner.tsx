import React from 'react';
import { Language } from '../types';
import { tr, UI } from '../utils/i18n';
import { PhoneCall } from 'lucide-react';

interface EmergencyBannerProps {
  lang: Language;
}

export const EmergencyBanner: React.FC<EmergencyBannerProps> = ({ lang }) => {
  return (
    <div className="bg-amber-50 border-b border-amber-200 text-amber-900 text-[11px] py-1 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          <span className="bg-amber-600 text-white font-bold px-1.5 py-0.2 rounded text-[10px] uppercase">
            {tr(UI.disclaimerBadge, lang)}
          </span>
          <span className="text-slate-700">{tr(UI.emergencyText, lang)}</span>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-slate-700">
          <PhoneCall className="w-3 h-3 text-orange-600 shrink-0" />
          <span>{tr(UI.helplineLine, lang)}</span>
        </div>
      </div>
    </div>
  );
};
