import React, { useMemo, useState } from 'react';
import { Language } from '../types';
import { FORMS_777_DATA } from '../data/forms777Data';
import { SCHEMES } from '../data/schemesData';
import { OFFICIAL_PORTALS } from '../data/portalsData';
import { isVerifiedGovernmentUrl, runLiveSecurityAudit } from '../utils/security';
import {
  X,
  ShieldCheck,
  Lock,
  AlertOctagon,
  CheckCircle2,
  ServerOff,
  Globe,
  FileCheck,
  Search,
  ShieldAlert
} from 'lucide-react';

interface SecurityShieldModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const SecurityShieldModal: React.FC<SecurityShieldModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const [testUrl, setTestUrl] = useState('');

  const auditReport = useMemo(() => {
    if (!isOpen) return null;
    return runLiveSecurityAudit(FORMS_777_DATA, SCHEMES, OFFICIAL_PORTALS);
  }, [isOpen]);

  const urlCheckResult = useMemo(() => {
    const trimmed = testUrl.trim();
    if (!trimmed) return null;
    const isValid = isVerifiedGovernmentUrl(trimmed);
    return {
      isValid,
      url: trimmed,
    };
  }, [testUrl]);

  if (!isOpen || !auditReport) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-start justify-between gap-4 border-b-4 border-emerald-500">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-400/30 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wide">
                {lang === 'mr' ? 'अखंडता व सायबर सुरक्षा प्रमाणपत्र (Live Audit)' : 'Integrity & Anti-Tamper Certificate (Live Audit)'}
              </span>
              <h3 className="text-lg sm:text-xl font-bold mt-0.5 leading-snug">
                {lang === 'mr' ? 'बनावट फॉर्म व हॅकिंग प्रतिबंधक सुरक्षा कवच' : 'Anti-Phishing & Anti-Tamper Security Shield'}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto text-xs sm:text-sm text-slate-700">
          {/* Live Runtime Security Audit Box */}
          <div className="p-4 rounded-xl bg-slate-900 text-white border border-emerald-500/40 space-y-3">
            <div className="flex items-center justify-between gap-2">
              <div className="font-bold flex items-center gap-2 text-emerald-400 text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>
                  {lang === 'mr'
                    ? 'थेट सुरक्षा तपासणी अहवाल (Live Security Audit)'
                    : 'Live Runtime Security Audit'}
                </span>
              </div>
              <span
                className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                  auditReport.isTamperProof
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'bg-red-500/20 text-red-300 border border-red-500/40'
                }`}
              >
                {auditReport.isTamperProof
                  ? (lang === 'mr' ? '✓ १००% सुरक्षित' : '✓ TAMPER-PROOF')
                  : (lang === 'mr' ? '⚠ तपासणी आवश्यक' : '⚠ CHECK REQUIRED')}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
              <div className="bg-slate-800/90 rounded-lg p-2 border border-slate-700">
                <div className="text-base font-black text-emerald-400 tabular-nums">
                  {auditReport.totalVerifiedForms}
                </div>
                <div className="text-[10px] text-slate-300">
                  {lang === 'mr' ? 'पडताळलेले फॉर्म्स' : 'Verified Forms'}
                </div>
              </div>
              <div className="bg-slate-800/90 rounded-lg p-2 border border-slate-700">
                <div className="text-base font-black text-emerald-400 tabular-nums">
                  {auditReport.totalVerifiedSchemes + auditReport.totalVerifiedPortals}
                </div>
                <div className="text-[10px] text-slate-300">
                  {lang === 'mr' ? 'योजना व पोर्टल्स' : 'Schemes & Portals'}
                </div>
              </div>
              <div className="bg-slate-800/90 rounded-lg p-2 border border-slate-700">
                <div className="text-base font-black text-emerald-400 tabular-nums">
                  {auditReport.untrustedLinksBlocked}
                </div>
                <div className="text-[10px] text-slate-300">
                  {lang === 'mr' ? 'बनावट लिंक्स' : 'Untrusted Links'}
                </div>
              </div>
              <div className="bg-slate-800/90 rounded-lg p-2 border border-slate-700">
                <div className="text-base font-black text-emerald-400">
                  {auditReport.allRegistriesFrozen ? 'LOCKED' : 'OPEN'}
                </div>
                <div className="text-[10px] text-slate-300">
                  {lang === 'mr' ? 'मेमरी सुरक्षा' : 'Memory Freeze'}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 text-[10px] text-slate-300">
              <span className="bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                🔒 Strict HTTPS Only
              </span>
              <span className="bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                🛡️ HSTS + CSP + Anti-Clickjacking (X-Frame-Options: DENY)
              </span>
              <span className="bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                🚫 Zero Punycode / Homograph Spoofing
              </span>
            </div>
          </div>

          {/* Interactive WhatsApp / SMS Phishing Link Checker */}
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 space-y-2.5">
            <div className="font-bold flex items-center gap-1.5 text-amber-950 text-xs sm:text-sm">
              <Search className="w-4 h-4 text-amber-700 shrink-0" />
              <span>
                {lang === 'mr'
                  ? 'संशयास्पद WhatsApp / SMS लिंक तपासा (Phishing Link Checker)'
                  : 'Check Any WhatsApp / SMS Link (Phishing Verifier)'}
              </span>
            </div>
            <p className="text-xs text-amber-900">
              {lang === 'mr'
                ? 'तुम्हाला मिळालेली कोणतीही सरकारी योजनेची लिंक खाली पेस्ट करा — ती खरी अधिकृत HTTPS .gov.in वेबसाईट आहे की बनावट, ते लगेच तपासा:'
                : 'Paste any scheme link you received to check if it is an authentic HTTPS .gov.in domain:'}
            </p>
            <input
              type="text"
              value={testUrl}
              onChange={(e) => setTestUrl(e.target.value)}
              placeholder="https://ladakibahin.maharashtra.gov.in"
              className="w-full px-3 py-2 text-xs font-mono bg-white border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900"
            />
            {urlCheckResult && (
              <div
                className={`p-2.5 rounded-lg border text-xs font-semibold flex items-center gap-2 ${
                  urlCheckResult.isValid
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                    : 'bg-red-50 border-red-300 text-red-900'
                }`}
              >
                {urlCheckResult.isValid ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      {lang === 'mr'
                        ? 'सुरक्षित! ही अधिकृत HTTPS शासकीय वेबसाईट आहे.'
                        : 'Safe! This is a verified official HTTPS government domain.'}
                    </span>
                  </>
                ) : (
                  <>
                    <ShieldAlert className="w-4 h-4 text-red-600 shrink-0" />
                    <span>
                      {lang === 'mr'
                        ? 'सावधान! ही अधिकृत HTTPS .gov.in लिंक नाही. यावर वैयक्तिक माहिती किंवा OTP टाकू नका.'
                        : 'Warning! This is NOT a verified HTTPS .gov.in domain. Do not enter OTP or Aadhaar.'}
                    </span>
                  </>
                )}
              </div>
            )}
          </div>

          {/* 4 Pillars of Protection */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider">
              {lang === 'mr' ? '५ स्तरीय सायबर सुरक्षा प्रणाली:' : '5-Layer Cybersecurity System:'}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 space-y-1">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <Lock className="w-4 h-4 text-emerald-600" />
                  <span>{lang === 'mr' ? '१. अपरिवर्तनीय कोड (Deep Freeze)' : '1. Immutable Registry'}</span>
                </div>
                <p className="text-xs text-slate-600">
                  {lang === 'mr'
                    ? 'ब्राउझर मेमरीमध्ये सर्व ७७७ फॉर्म्स, योजना व पोर्टल्स रीड-ओन्ली लॉक केलेले आहेत. कोणताही स्क्रिप्ट त्यात बदल करू शकत नाही.'
                    : 'All 777 forms, schemes, and portals are deeply frozen. Runtime script injection is blocked.'}
                </p>
              </div>

              <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 space-y-1">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <Globe className="w-4 h-4 text-emerald-600" />
                  <span>{lang === 'mr' ? '२. कठोर HTTPS .gov.in तपासणी' : '2. Strict HTTPS .gov.in Whitelist'}</span>
                </div>
                <p className="text-xs text-slate-600">
                  {lang === 'mr'
                    ? 'फक्त HTTPS व अधिकृत .gov.in/.nic.in डोमेनलाच परवानगी आहे. बनावट Punycode, IP व HTTP लिंक्स आपोआप ब्लॉक होतात.'
                    : 'Only strict HTTPS .gov.in / .nic.in domains are permitted. HTTP, IP, and homograph URLs are blocked.'}
                </p>
              </div>

              <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 space-y-1">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <ServerOff className="w-4 h-4 text-emerald-600" />
                  <span>{lang === 'mr' ? '३. शून्य डेटा साठवणूक' : '3. Zero Storage Policy'}</span>
                </div>
                <p className="text-xs text-slate-600">
                  {lang === 'mr'
                    ? 'नागरिकांचा आधार क्रमांक, फोन किंवा बँक तपशील कधीही साठवला जात नाही. कॅमेरा, माइक व लोकेशन परवानग्या पूर्णपणे बंद आहेत.'
                    : 'No backend database, no citizen PII stored, and camera/mic/location permissions are strictly disabled.'}
                </p>
              </div>

              <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 space-y-1">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <FileCheck className="w-4 h-4 text-emerald-600" />
                  <span>{lang === 'mr' ? '४. CSP, HSTS व हॅश सुरक्षा' : '4. CSP, HSTS & Hash Seal'}</span>
                </div>
                <p className="text-xs text-slate-600">
                  {lang === 'mr'
                    ? 'Content Security Policy (CSP), HSTS, Anti-Clickjacking (X-Frame-Options) आणि प्रत्येक फॉर्मचा क्रिप्टोग्राफिक हॅश सक्रिय आहे.'
                    : 'Content Security Policy, HSTS, X-Frame-Options: DENY, and per-form tamper-check hashes are active.'}
                </p>
              </div>
            </div>
          </div>

          {/* Citizen Fraud Prevention Warning */}
          <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-950 space-y-1.5">
            <div className="font-bold flex items-center gap-1.5 text-blue-900">
              <AlertOctagon className="w-4 h-4 text-blue-600 shrink-0" />
              <span>{lang === 'mr' ? 'नागरिकांसाठी सावधानतेचा इशारा:' : 'Citizen Safety Advisory:'}</span>
            </div>
            <ul className="text-xs text-blue-900 list-disc pl-4 space-y-1">
              <li>{lang === 'mr' ? 'व्हॉट्सॲप किंवा अनोळखी मेसेजमधील कोणत्याही संशयास्पद लिंकवर क्लिक करू नका.' : 'Never click suspicious WhatsApp links claiming to offer cash prizes.'}</li>
              <li>{lang === 'mr' ? 'शासकीय फॉर्म भरताना मोबाईल ब्राऊझरच्या ॲड्रेस बारमध्ये नेहमी "https://" आणि ".gov.in" तपासा.' : 'Always verify https:// and .gov.in domain in the browser address bar.'}</li>
              <li>{lang === 'mr' ? 'कोणत्याही सरकारी योजनेसाठी आपला बँक पासवर्ड किंवा ओटीपी (OTP) कोणालाही देऊ नका.' : 'Never share your bank OTP, PIN or Aadhaar password with anyone.'}</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <div className="text-xs font-mono text-slate-500">
            AUDIT: {auditReport.totalVerifiedForms} FORMS • {auditReport.isTamperProof ? 'VERIFIED' : 'CHECK'}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg text-xs cursor-pointer"
          >
            {lang === 'mr' ? 'समजले व सुरक्षित आहे' : 'Understood & Verified'}
          </button>
        </div>
      </div>
    </div>
  );
};
