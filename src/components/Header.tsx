import React from 'react';
import { Language } from '../types';
import { LANGUAGE_OPTIONS, tr, UI } from '../utils/i18n';
import { ShieldCheck, Printer, Info, User, Globe } from 'lucide-react';
import citizenHelperLogo from '../assets/images/citizen_helper_logo_1791459009342.jpg';

interface HeaderProps {
  lang: Language;
  setLang: (l: Language) => void;
  fontSize: 'normal' | 'large' | 'larger';
  setFontSize: (s: 'normal' | 'large' | 'larger') => void;
  activeTab: 'forms777' | 'checklist' | 'schemes' | 'portals';
  setActiveTab: (t: 'forms777' | 'checklist' | 'schemes' | 'portals') => void;
  onOpenPrintModal: () => void;
  onOpenSecurityModal: () => void;
  onDirectViewAll?: () => void;
  selectedDocsCount: number;
  eligibleSchemesCount: number;
  eligibleFormsCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  setLang,
  fontSize,
  setFontSize,
  activeTab,
  setActiveTab,
  onOpenPrintModal,
  onOpenSecurityModal,
  onDirectViewAll,
  selectedDocsCount,
  eligibleSchemesCount,
  eligibleFormsCount = 0,
}) => {
  return (
    <header className="bg-white border-b border-slate-200 shadow-xs">
      {/* Tricolor Ribbon */}
      <div className="h-1 w-full flex">
        <div className="h-full w-1/3 bg-[#EA580C]" title="Saffron" />
        <div className="h-full w-1/3 bg-white border-y border-slate-200" title="White" />
        <div className="h-full w-1/3 bg-[#16A34A]" title="Green" />
      </div>

      {/* Top Citizen Utility Bar - Compact */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 text-amber-400 font-bold bg-amber-950/60 px-2 py-0.5 rounded border border-amber-600/40 text-[11px]">
              <Info className="w-3 h-3 text-amber-400 shrink-0" />
              <span>{tr(UI.independentGuide, lang)}</span>
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            {/* USER REQUEST: "वरी माझे लहान असे नाव टाक / गणेश भुमरे इंग्लिश मध्ये" */}
            <span className="inline-flex items-center gap-1 text-amber-200 bg-slate-800/90 px-2 py-0.5 rounded border border-slate-700 text-[11px] font-medium tracking-wide">
              <User className="w-3 h-3 text-orange-400" />
              <span>Ganesh Bhumare</span>
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <button
              type="button"
              onClick={onOpenSecurityModal}
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer text-[11px]"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{tr(UI.verifiedGovLinks, lang)}</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            {/* Accessibility Font Size Toggle */}
            <div className="flex items-center gap-1 bg-slate-800 rounded px-1.5 py-0.5 border border-slate-700">
              <span className="text-slate-400 text-[10px]">A:</span>
              <button
                type="button"
                onClick={() => setFontSize('normal')}
                className={`px-1 py-0.2 rounded text-[10px] font-semibold transition-colors ${
                  fontSize === 'normal' ? 'bg-orange-500 text-white' : 'text-slate-300 hover:text-white'
                }`}
                title="Normal Font"
              >
                A
              </button>
              <button
                type="button"
                onClick={() => setFontSize('large')}
                className={`px-1 py-0.2 rounded text-[11px] font-semibold transition-colors ${
                  fontSize === 'large' ? 'bg-orange-500 text-white' : 'text-slate-300 hover:text-white'
                }`}
                title="Large Font"
              >
                A+
              </button>
              <button
                type="button"
                onClick={() => setFontSize('larger')}
                className={`px-1 py-0.2 rounded text-xs font-bold transition-colors ${
                  fontSize === 'larger' ? 'bg-orange-500 text-white' : 'text-slate-300 hover:text-white'
                }`}
                title="Larger Font"
              >
                A++
              </button>
            </div>

            {/* 8-Language Switcher Dropdown */}
            <div className="flex items-center gap-1.5 bg-slate-800 rounded px-2 py-0.5 border border-slate-700 text-xs">
              <Globe className="w-3.5 h-3.5 text-orange-400 shrink-0" />
              <select
                aria-label="Select Language"
                value={lang}
                onChange={(e) => setLang(e.target.value as Language)}
                className="bg-slate-800 text-white text-[11px] font-semibold focus:outline-none cursor-pointer pr-1"
              >
                {LANGUAGE_OPTIONS.map((opt) => (
                  <option key={opt.code} value={opt.code}>
                    {opt.nativeName} ({opt.englishName})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Quick 8-Language Bar (Hindi, Bengali, Marathi, Telugu, Tamil, Gujarati, Urdu, English) */}
      <div className="bg-slate-800/95 border-b border-slate-700 px-4 sm:px-6 py-1">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 overflow-x-auto">
          <span className="text-[10px] text-slate-400 font-semibold whitespace-nowrap mr-1">
            🌐 Language:
          </span>
          {LANGUAGE_OPTIONS.map((opt) => (
            <button
              key={opt.code}
              type="button"
              onClick={() => setLang(opt.code)}
              className={`px-2 py-0.5 rounded text-[11px] font-semibold whitespace-nowrap transition-all cursor-pointer ${
                lang === opt.code
                  ? 'bg-orange-600 text-white shadow-xs'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              {opt.nativeName}
            </button>
          ))}
        </div>
      </div>

      {/* Main Brand Header Zone - Streamlined */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5">
        <div className="flex items-center justify-between gap-3">
          {/* Brand & Citizen Helper Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden border border-orange-500/40 shadow-xs shrink-0 bg-slate-100 flex items-center justify-center">
              <img
                src={citizenHelperLogo}
                alt="Citizen Helper Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900">
                  {tr(UI.brandTitle, lang)}
                </span>
                <span className="bg-orange-100 text-orange-800 text-[10px] font-bold px-1.5 py-0.2 rounded border border-orange-300">
                  {tr(UI.brandBadge, lang)}
                </span>
                {/* USER REQUEST: "वरी माझे लहान असे नाव टाक / गणेश भुमरे इंग्लिश मध्ये" */}
                <span className="text-[10px] sm:text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200 flex items-center gap-1">
                  <User className="w-3 h-3 text-orange-500" />
                  <span>Ganesh Bhumare</span>
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-600 font-medium leading-tight">
                {tr(UI.brandSubtitle, lang)}
              </p>
            </div>
          </div>

          {/* Action Hub - Compact */}
          <div className="flex items-center gap-2">
            {/* USER REQUEST: "वरील एक थेट पहा ऑप्शन दे कोपऱ्यात एक गोल बाजूला छोटेसे ऑप्शन येतात केल्यानंतर 777 फॉर्म दिसतील" */}
            <button
              type="button"
              onClick={() => {
                if (onDirectViewAll) {
                  onDirectViewAll();
                } else {
                  setActiveTab('forms777');
                }
              }}
              className="group relative inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-black text-xs rounded-lg shadow-sm border border-amber-300/60 transition-all cursor-pointer"
              title={tr(UI.directViewFull, lang)}
            >
              <span>{tr(UI.directViewShort, lang)}</span>
              {/* कोपऱ्यात एक गोल बाजूला छोटेसे ऑप्शन / बॅज */}
              <span className="w-5 h-5 rounded-full bg-slate-950 text-amber-300 font-mono text-[10px] font-black flex items-center justify-center border border-amber-400 shrink-0">
                777
              </span>
            </button>

            <button
              type="button"
              onClick={onOpenSecurityModal}
              className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-lg transition-colors cursor-pointer"
              title="Security Shield Audit"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>{tr(UI.securityBtn, lang)}</span>
            </button>

            <button
              type="button"
              onClick={onOpenPrintModal}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg transition-colors cursor-pointer"
              title="Print checklist"
            >
              <Printer className="w-3.5 h-3.5 text-slate-700" />
              <span className="hidden sm:inline">{tr(UI.printBtn, lang)}</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1.5 mt-3 pt-2.5 border-t border-slate-100 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab('checklist')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'checklist'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <span>{tr(UI.tabChecklist, lang)}</span>
            {selectedDocsCount > 0 && (
              <span className="bg-orange-500 text-white text-[10px] px-1.5 py-0.2 rounded-full font-bold">
                {selectedDocsCount}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('forms777')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'forms777'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <span>{tr(UI.tabForms777, lang)}</span>
            <span className="bg-emerald-600 text-white text-[10px] px-1.5 py-0.2 rounded-full font-bold">
              {eligibleFormsCount > 0 ? `${tr(UI.eligibleShort, lang)}: ${eligibleFormsCount}` : '777'}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('schemes')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'schemes'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            {tr(UI.tabSchemes, lang)}
            <span className="ml-1.5 bg-emerald-600 text-white text-[10px] px-1.5 py-0.2 rounded-full font-bold">
              {eligibleSchemesCount}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('portals')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'portals'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            {tr(UI.tabPortals, lang)}
          </button>
        </nav>
      </div>
    </header>
  );
};
