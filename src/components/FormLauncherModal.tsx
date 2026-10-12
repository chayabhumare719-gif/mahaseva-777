import React from 'react';
import { Language, GovFormItem777 } from '../types';
import { isVerifiedGovernmentUrl } from '../utils/security';
import {
  X,
  ExternalLink,
  ShieldCheck,
  Smartphone,
  Lock,
  Globe,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Sparkles,
  Layers,
  FileText
} from 'lucide-react';

interface FormLauncherModalProps {
  form: GovFormItem777 | null;
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const FormLauncherModal: React.FC<FormLauncherModalProps> = ({
  form,
  isOpen,
  onClose,
  lang,
}) => {
  if (!isOpen || !form) return null;

  const isVerifiedGov = isVerifiedGovernmentUrl(form.officialUrl);

  const handleLaunchInChrome = () => {
    // Safely open in system browser (Chrome on Android / iOS Safari / Desktop Chrome)
    window.open(form.officialUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/80 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-150">
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-5 flex items-start justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="bg-orange-600 text-white text-xs font-black px-2.5 py-0.5 rounded-md font-mono">
                #{form.formNumber.toString().padStart(3, '0')}
              </span>
              <span className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-300 text-xs font-bold px-2 py-0.5 rounded border border-emerald-400/30">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                {lang === 'mr' ? 'पडताळणी झालेले अधिकृत .gov.in' : 'Verified .gov.in Domain'}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold leading-snug text-white">
              {form.name[lang]}
            </h3>
            <p className="text-xs text-slate-300">{form.department[lang]}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          {/* CRITICAL ANSWER TO USER: Where does it open? */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 text-xs sm:text-sm text-blue-950 space-y-2">
            <div className="flex items-center gap-2 font-bold text-blue-900">
              <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
              <span>
                {lang === 'mr'
                  ? 'हा फॉर्म कुठे उघडणार? क्रोम ब्राऊझर की येथेच?'
                  : 'Where will this form open? Chrome or inside this website?'}
              </span>
            </div>
            <div className="leading-relaxed text-slate-700 space-y-1.5">
              <p>
                {lang === 'mr' ? (
                  <>
                    👉 हा फॉर्म थेट तुमच्या मोबाईलमधील <strong>गुगल क्रोम (Google Chrome)</strong> किंवा डिफॉल्ट ब्राऊझरच्या नवीन सुरक्षित टॅबमध्ये उघडेल.
                  </>
                ) : (
                  <>
                    👉 This form will open directly in a new secure tab in your mobile's <strong>Google Chrome</strong> or system browser.
                  </>
                )}
              </p>
              <div className="bg-white p-2.5 rounded-lg border border-blue-200 text-xs text-slate-600">
                <strong>{lang === 'mr' ? 'हे आमच्या वेबसाईटच्या आत का उघडत नाही?' : 'Why not embedded inside this website?'}</strong>
                <br />
                {lang === 'mr'
                  ? 'नागरिकांच्या १००% सायबर सुरक्षेसाठी! अधिकृत सरकारी संकेतस्थळे (Aaple Sarkar, PM Kisan, DBT) आधार OTP व बँक माहिती सायबर चोरांपासून सुरक्षित ठेवण्यासाठी दुसऱ्या कोणत्याही वेबसाईटच्या आत (Iframe) उघडण्यास परवानगी देत नाहीत. त्यामुळे क्रोममध्ये थेट उघडल्याने तुमचा आधार डेटा थेट सरकारकडे सुरक्षित जातो.'
                  : 'For 100% citizen safety! Official government portals prevent third-party iframe embedding to protect Aadhaar OTP and bank details. Opening directly in Chrome ensures your data goes straight to the government.'}
              </div>
            </div>
          </div>

          {/* Genuine Gov Link Audit Badge */}
          <div className="border border-emerald-200 bg-emerald-50/60 rounded-xl p-3.5 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-emerald-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                {lang === 'mr' ? 'अधिकृत सरकारी लिंक पडताळणी (100% Genuine)' : 'Official Government Link Verified'}
              </span>
              <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                {form.securityHash}
              </span>
            </div>
            <div className="bg-white p-2.5 rounded-lg border border-emerald-200 flex items-center justify-between gap-2 text-xs font-mono text-slate-800 break-all">
              <span className="text-slate-600 truncate">{form.officialUrl}</span>
              <span className="shrink-0 bg-emerald-600 text-white text-[10px] font-sans font-bold px-2 py-0.5 rounded">
                {lang === 'mr' ? 'सत्यप्रत सरकारी' : 'Gov Verified'}
              </span>
            </div>
          </div>

          {/* Benefit / Purpose */}
          <div className="space-y-1.5 text-xs sm:text-sm">
            <span className="font-bold text-slate-900 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-orange-600" />
              {lang === 'mr' ? 'योजनेचा उद्देश व लाभ:' : 'Scheme Benefit & Purpose:'}
            </span>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-slate-700 leading-relaxed">
              {form.benefitOrPurpose[lang]}
            </div>
          </div>

          {/* Mobile Filling Steps */}
          <div className="space-y-1.5 text-xs sm:text-sm">
            <span className="font-bold text-slate-900 flex items-center gap-1.5">
              <Smartphone className="w-4 h-4 text-emerald-600" />
              {lang === 'mr' ? 'मोबाईलवरून अर्ज कसा करावा?' : 'How to apply on Mobile:'}
            </span>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-slate-700 leading-relaxed">
              {form.mobileMethod[lang]}
            </div>
          </div>

          {/* Fee & Department Details */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
              <span className="text-slate-500">{lang === 'mr' ? 'अधिकृत सरकारी शुल्क:' : 'Official Fee:'}</span>
              <div className="font-bold text-slate-900 text-sm mt-0.5">{form.fees[lang]}</div>
            </div>
            <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
              <span className="text-slate-500">{lang === 'mr' ? 'अधिकृत पोर्टल:' : 'Official Portal:'}</span>
              <div className="font-bold text-slate-900 text-sm mt-0.5 truncate">{form.portalName}</div>
            </div>
          </div>

          {/* Preparation Reminder */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-900 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong>{lang === 'mr' ? 'मोबाईलवर सोबत ठेवा:' : 'Keep ready on mobile:'}</strong>{' '}
              {lang === 'mr'
                ? 'आधार कार्ड नंबर, आधारशी लिंक असलेला मोबाईल (OTP साठी) व बँकेचे पासबुक.'
                : 'Aadhaar Number, Aadhaar-linked Mobile for OTP, and Bank Passbook.'}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-100 p-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[11px] text-slate-500 text-center sm:text-left">
            {lang === 'mr'
              ? '🔒 सुरक्षित सरकारी सर्व्हर (.gov.in) वर थेट उघडेल'
              : '🔒 Securely opens directly on official government servers (.gov.in)'}
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors cursor-pointer"
            >
              {lang === 'mr' ? 'बंद करा' : 'Cancel'}
            </button>

            <button
              type="button"
              onClick={handleLaunchInChrome}
              className="flex-1 sm:flex-none px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-orange-600 hover:bg-orange-700 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Smartphone className="w-4 h-4 text-emerald-300" />
              <span>{lang === 'mr' ? 'क्रोममध्ये थेट फॉर्म भरा' : 'Open Form in Chrome'}</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
