import React from 'react';
import { Language, Scheme } from '../types';
import { DOCUMENTS } from '../data/documentsData';
import {
  X,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Clock,
  PhoneCall,
  BadgeIndianRupee,
  Layers,
  MapPin,
  Building
} from 'lucide-react';

interface SchemeDetailModalProps {
  scheme: Scheme | null;
  lang: Language;
  selectedDocIds: string[];
  onClose: () => void;
}

export const SchemeDetailModal: React.FC<SchemeDetailModalProps> = ({
  scheme,
  lang,
  selectedDocIds,
  onClose,
}) => {
  if (!scheme) return null;

  const docMap = new Map(DOCUMENTS.map((d) => [d.id, d]));

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full border border-slate-200 shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-start justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold text-orange-400 uppercase tracking-wide">
              {scheme.officialPortalName}
            </span>
            <h3 className="text-lg sm:text-xl font-bold mt-0.5 leading-snug">
              {scheme.name[lang]}
            </h3>
            <div className="text-xs text-slate-300 mt-1 flex items-center gap-1.5">
              <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>{scheme.department[lang]}</span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 space-y-5 max-h-[75vh] overflow-y-auto">
          {/* Benefit Box */}
          <div className="p-3.5 rounded-xl bg-orange-50 border border-orange-200 flex items-start gap-3">
            <BadgeIndianRupee className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-orange-800 uppercase tracking-wide">
                {lang === 'mr' ? 'शासकीय थेट लाभ (Benefits)' : 'Government Benefit'}
              </div>
              <div className="text-base font-extrabold text-orange-950 mt-0.5">
                {scheme.benefit[lang]}
              </div>
            </div>
          </div>

          {/* Target Group & Fees */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <div className="text-[11px] font-bold text-slate-500 uppercase">
                {lang === 'mr' ? 'पात्र लाभार्थी गट' : 'Target Group'}
              </div>
              <div className="text-xs font-semibold text-slate-800 mt-1 leading-relaxed">
                {scheme.targetGroup[lang]}
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <div className="text-[11px] font-bold text-slate-500 uppercase">
                {lang === 'mr' ? 'शासकीय शुल्क / फी' : 'Official Fees'}
              </div>
              <div className="text-xs font-semibold text-slate-800 mt-1">
                {scheme.fees[lang]}
              </div>
              {scheme.helpline && (
                <div className="mt-2 pt-2 border-t border-slate-200 flex items-center gap-1.5 text-xs text-orange-700 font-semibold">
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>हेल्पलाइन: {scheme.helpline}</span>
                </div>
              )}
            </div>
          </div>

          {/* Required Documents Checklist */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-2.5 flex items-center gap-2">
              <Layers className="w-4 h-4 text-orange-600" />
              <span>{lang === 'mr' ? 'आवश्यक कागदपत्रे व स्थिती' : 'Required Documents & Status'}</span>
            </h4>
            <div className="space-y-2">
              {scheme.requiredDocIds.map((docId) => {
                const isPossessed = selectedDocIds.includes(docId);
                const docObj = docMap.get(docId);
                return (
                  <div
                    key={docId}
                    className={`p-2.5 rounded-lg border text-xs flex items-start justify-between gap-3 ${
                      isPossessed
                        ? 'border-emerald-200 bg-emerald-50/40 text-emerald-950'
                        : 'border-amber-200 bg-amber-50/40 text-amber-950'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {isPossessed ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <div className="font-bold">{docObj ? docObj.name[lang] : docId}</div>
                        {!isPossessed && docObj && (
                          <div className="text-[11px] text-amber-800 mt-0.5">
                            <strong>{lang === 'mr' ? 'कुठून मिळवाल:' : 'Source:'}</strong> {docObj.whereToGet[lang]}
                          </div>
                        )}
                      </div>
                    </div>

                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded shrink-0 uppercase ${
                        isPossessed
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {isPossessed
                        ? lang === 'mr'
                          ? 'उपलब्ध'
                          : 'Available'
                        : lang === 'mr'
                        ? 'कागदपत्र बाकी'
                        : 'Missing'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step-by-Step Procedure */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-2.5 flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-600" />
              <span>{lang === 'mr' ? 'कसा अर्ज करावा? (पायरी-पायरीने)' : 'Step-by-Step Application Guide'}</span>
            </h4>
            <ol className="space-y-2 text-xs text-slate-700">
              {scheme.steps[lang].map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-[11px] flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed mt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-300 rounded-lg cursor-pointer text-center"
          >
            {lang === 'mr' ? 'बंद करा' : 'Close'}
          </button>

          <div className="flex flex-col sm:items-end gap-1 w-full sm:w-auto">
            <a
              href={scheme.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
              title={lang === 'mr' ? 'क्रोम ब्राऊझरच्या नवीन सुरक्षित टॅबमध्ये थेट उघडेल' : 'Opens in Chrome browser tab'}
            >
              <span>{lang === 'mr' ? 'क्रोममध्ये अधिकृत पोर्टलवर थेट अर्ज करा' : 'Apply on Official Portal in Chrome'}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <span className="text-[10px] text-slate-500 text-center sm:text-right">
              {lang === 'mr' ? '↗ अधिकृत .gov.in सर्व्हरवर थेट उघडेल' : '↗ Opens securely on official .gov.in'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
