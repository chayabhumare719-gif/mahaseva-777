import React from 'react';
import { Language } from '../types';
import { PhoneCall, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface EmergencyBannerProps {
  lang: Language;
}

export const EmergencyBanner: React.FC<EmergencyBannerProps> = ({ lang }) => {
  return (
    <div className="bg-amber-50 border-b border-amber-200 text-amber-900 text-[11px] py-1 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          <span className="bg-amber-600 text-white font-bold px-1.5 py-0.2 rounded text-[10px] uppercase">
            {lang === 'mr' ? 'अस्वीकरण' : 'Disclaimer'}
          </span>
          <span className="text-slate-700">
            {lang === 'mr'
              ? 'स्वतंत्र नागरिक मार्गदर्शक मंच (Non-Government). सर्व ७७७ फॉर्म्स थेट अधिकृत .gov.in वर उघडतात.'
              : 'Independent citizen guide (Non-Government). All 777 forms open directly on official .gov.in.'}
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-slate-700">
          <PhoneCall className="w-3 h-3 text-orange-600 shrink-0" />
          <span>हेल्पलाइन: आपले सरकार <strong>1800-120-8040</strong> | शेतकरी <strong>1800-180-1551</strong> | आपत्कालीन <strong>112</strong></span>
        </div>
      </div>
    </div>
  );
};
