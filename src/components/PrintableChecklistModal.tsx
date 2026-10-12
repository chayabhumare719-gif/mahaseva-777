import React from 'react';
import { Language, Scheme } from '../types';
import { DOCUMENTS } from '../data/documentsData';
import { SCHEMES } from '../data/schemesData';
import { X, Printer, ShieldCheck, CheckCircle2, AlertCircle, Info } from 'lucide-react';
import citizenHelperLogo from '../assets/images/citizen_helper_logo_1791459009342.jpg';

interface PrintableChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  selectedDocIds: string[];
}

export const PrintableChecklistModal: React.FC<PrintableChecklistModalProps> = ({
  isOpen,
  onClose,
  lang,
  selectedDocIds,
}) => {
  if (!isOpen) return null;

  const docMap = new Map(DOCUMENTS.map((d) => [d.id, d]));
  const possessedDocs = DOCUMENTS.filter((d) => selectedDocIds.includes(d.id));
  const missingDocs = DOCUMENTS.filter((d) => !selectedDocIds.includes(d.id));

  const eligibleSchemes = SCHEMES.filter((scheme) =>
    scheme.requiredDocIds.every((docId) => selectedDocIds.includes(docId))
  );

  const handlePrint = () => {
    window.print();
  };

  const todayDate = new Date().toLocaleDateString(lang === 'mr' ? 'mr-IN' : 'en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full border border-slate-300 shadow-2xl overflow-hidden">
        {/* Top Controls (Hidden on Print) */}
        <div className="bg-slate-900 text-white p-4 flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <Printer className="w-5 h-5 text-orange-400" />
            <h3 className="text-base font-bold">
              {lang === 'mr' ? 'नागरिक कागदपत्रे व पात्र योजना संदर्भ अहवाल' : 'Citizen Document & Scheme Report'}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-xs flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>{lang === 'mr' ? 'प्रिंट काढा (Print)' : 'Print Now'}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Area */}
        <div className="p-8 space-y-6 printable-area bg-white text-slate-900 max-h-[80vh] overflow-y-auto">
          {/* Header Seal & Title */}
          <div className="border-b-2 border-slate-900 pb-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-xl overflow-hidden border border-slate-300 shrink-0 bg-slate-100">
                <img
                  src={citizenHelperLogo}
                  alt="Citizen Helper Emblem"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h1 className="text-xl font-black text-slate-950 uppercase tracking-tight">
                  {lang === 'mr' ? 'फॉर्म ७७७ - नागरिक सहाय्यता संदर्भ अहवाल' : 'FORM 777 - CITIZEN GUIDANCE REPORT'}
                </h1>
                <p className="text-xs font-semibold text-slate-600">
                  {lang === 'mr'
                    ? 'स्वतंत्र नागरिक माहिती व सरकारी योजना पात्रता सारांश (Non-Government)'
                    : 'Independent Citizen Information & Scheme Eligibility Summary (Non-Government)'}
                </p>
              </div>
            </div>

            <div className="text-right text-xs text-slate-500">
              <div><strong>दिनांक / Date:</strong> {todayDate}</div>
              <div className="text-[11px] text-amber-700 font-bold">नागरिक मार्गदर्शक साधन</div>
            </div>
          </div>

          {/* Section 1: Selected Documents */}
          <div>
            <h2 className="text-sm font-bold text-slate-900 uppercase border-b border-slate-200 pb-1 mb-2.5">
              १. उपलब्ध कागदपत्रे (Possessed Documents) — {possessedDocs.length} एकूण
            </h2>
            {possessedDocs.length === 0 ? (
              <p className="text-xs text-slate-500 italic">कोणतेही कागदपत्र निवडलेले नाही.</p>
            ) : (
              <div className="grid grid-cols-2 gap-2 text-xs">
                {possessedDocs.map((doc) => (
                  <div key={doc.id} className="p-2 border border-slate-200 rounded flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="font-semibold text-slate-800">{doc.name[lang]}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Section 2: 100% Eligible Schemes */}
          <div>
            <h2 className="text-sm font-bold text-emerald-900 uppercase border-b border-emerald-300 pb-1 mb-2.5">
              २. १००% थेट पात्र सरकारी योजना (Eligible Schemes to Apply) — {eligibleSchemes.length} योजना
            </h2>
            {eligibleSchemes.length === 0 ? (
              <p className="text-xs text-amber-800 bg-amber-50 p-2 rounded border border-amber-200">
                {lang === 'mr'
                  ? 'सध्या निवडलेल्या कागदपत्रांवर कोणतीही योजना पूर्णतः पात्र नाही. कृपया आणखी कागदपत्रे निवडा.'
                  : 'No scheme fully eligible with current docs. Select more docs to unlock schemes.'}
              </p>
            ) : (
              <div className="space-y-2 text-xs">
                {eligibleSchemes.map((s, idx) => (
                  <div key={s.id} className="p-2.5 border border-slate-200 rounded-lg bg-slate-50/50">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="font-bold text-slate-950 text-sm">
                          {idx + 1}. {s.name[lang]}
                        </div>
                        <div className="text-slate-600 text-[11px]">{s.department[lang]}</div>
                      </div>
                      <span className="text-[11px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                        {s.officialPortalName}
                      </span>
                    </div>
                    <div className="mt-1 text-emerald-800 font-bold">
                      थेट लाभ: {s.benefit[lang]}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Section 3: Missing Documents Sources */}
          {missingDocs.length > 0 && (
            <div>
              <h2 className="text-sm font-bold text-amber-900 uppercase border-b border-amber-300 pb-1 mb-2.5">
                ३. महत्त्वाची उर्वरित कागदपत्रे व ती मिळण्याचे शासकीय कार्यालय (Where to get remaining docs)
              </h2>
              <div className="space-y-1.5 text-xs">
                {missingDocs.slice(0, 8).map((doc) => (
                  <div key={doc.id} className="flex items-start justify-between border-b border-slate-100 pb-1">
                    <span className="font-semibold text-slate-800">• {doc.name[lang]}</span>
                    <span className="text-slate-600 italic text-right max-w-xs">{doc.whereToGet[lang]}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Verification & Citizen Safety Disclaimer */}
          <div className="pt-4 border-t border-slate-200 text-[11px] text-slate-500 leading-normal flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong>गोपनीयता सूचना:</strong> हा अहवाल केवळ नागरिकांच्या माहितीसाठी आणि सेतू केंद्र / महा-ई-सेवा केंद्रात अर्ज करण्यासाठी संदर्भ साधन म्हणून तयार केला आहे. या पोर्टलवर कोणतीही माहिती किंवा कागदपत्रे साठवली जात नाहीत.
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-end gap-2 no-print">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg cursor-pointer hover:bg-slate-50"
          >
            {lang === 'mr' ? 'रद्द करा' : 'Close'}
          </button>
          <button
            type="button"
            onClick={handlePrint}
            className="px-5 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg flex items-center gap-1.5 cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>{lang === 'mr' ? 'प्रिंट / PDF सेव्ह करा' : 'Print / Save as PDF'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
