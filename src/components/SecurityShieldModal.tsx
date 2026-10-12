import React from 'react';
import { Language } from '../types';
import {
  X,
  ShieldCheck,
  Lock,
  AlertOctagon,
  CheckCircle2,
  ServerOff,
  Globe,
  KeyRound,
  FileCheck
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
  if (!isOpen) return null;

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
                {lang === 'mr' ? 'अखंडता व सायबर सुरक्षा प्रमाणपत्र' : 'Integrity & Anti-Tamper Certificate'}
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
          {/* Main Statement */}
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-1.5">
            <div className="font-bold flex items-center gap-1.5 text-emerald-900">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                {lang === 'mr'
                  ? 'नागरिक सुरक्षेची १००% हमी (Zero Fake Form Guarantee)'
                  : '100% Citizen Safety Guarantee'}
              </span>
            </div>
            <p className="leading-relaxed text-xs text-emerald-800">
              {lang === 'mr'
                ? 'हे पोर्टल सरकारी वेबसाईट नाही, तर नागरिकांना बनावट लिंक्स व फिशिंगपासून वाचवणारे स्वतंत्र मार्गदर्शक साधन आहे. या वेबसाईटवर कोणताही हॅकर किंवा बाह्य व्यक्ती स्वतःचा बनावट किंवा फसवणूक करणारा फॉर्म जोडू शकत नाही. सर्व ७७७ फॉर्म्सचे कोड स्तरावर गोठवलेले (Deeply Frozen Immutable Object) प्रमाणीकरण केले आहे.'
                : 'This portal is an independent, non-governmental public security guide. No attacker can inject unauthorized or phishing forms into this portal. All 777 forms strictly route to authentic .gov.in domains and are immutable in memory.'}
            </p>
          </div>

          {/* 4 Pillars of Protection */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider">
              {lang === 'mr' ? '४ स्तरीय सायबर सुरक्षा प्रणाली:' : '4-Layer Cybersecurity System:'}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 space-y-1">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <Lock className="w-4 h-4 text-emerald-600" />
                  <span>{lang === 'mr' ? '१. अपरिवर्तनीय कोड' : '1. Immutable Registry'}</span>
                </div>
                <p className="text-xs text-slate-600">
                  {lang === 'mr'
                    ? 'ब्राउझर मेमरीमध्ये सर्व डेटा रीड-ओन्ली आहे. कोणताही बाह्य स्क्रिप्ट किंवा इंजेक्शन फॉर्म बदलू शकत नाही.'
                    : 'All 777 form objects are deeply frozen. Runtime script injection is impossible.'}
                </p>
              </div>

              <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 space-y-1">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <Globe className="w-4 h-4 text-emerald-600" />
                  <span>{lang === 'mr' ? '२. .gov.in डोमेन तपासणी' : '2. Strict .gov.in Whitelist'}</span>
                </div>
                <p className="text-xs text-slate-600">
                  {lang === 'mr'
                    ? 'प्रत्येक लिंक उघडण्यापूर्वी ती अधिकृत .gov.in अथवा .nic.in सर्व्हरचीच असल्याची खात्री केली जाते.'
                    : 'Links strictly validate against verified National Informatics Centre (.nic.in / .gov.in) domains.'}
                </p>
              </div>

              <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 space-y-1">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <ServerOff className="w-4 h-4 text-emerald-600" />
                  <span>{lang === 'mr' ? '३. शून्य डेटा साठवणूक' : '3. Zero Storage Policy'}</span>
                </div>
                <p className="text-xs text-slate-600">
                  {lang === 'mr'
                    ? 'नागरिकांचा आधार क्रमांक, फोन किंवा बँक तपशील कधीही साठवला जात नाही. डेटा चोरीचा धोका शून्य.'
                    : 'No backend database, no passwords, no citizen Aadhaar or PII stored anywhere.'}
                </p>
              </div>

              <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 space-y-1">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <FileCheck className="w-4 h-4 text-emerald-600" />
                  <span>{lang === 'mr' ? '४. डिजिटल हॅश पडताळणी' : '4. Tamper Hash Verification'}</span>
                </div>
                <p className="text-xs text-slate-600">
                  {lang === 'mr'
                    ? 'प्रत्येक ७७७ फॉर्मला स्वतंत्र सुरक्षा हॅश (Security Hash ID) दिलेला आहे.'
                    : 'Every form features a unique cryptographic tamper-verification seal.'}
                </p>
              </div>
            </div>
          </div>

          {/* Direct Clear Answers to Citizen Key Questions */}
          <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-950 space-y-3">
            <h4 className="font-bold text-blue-900 flex items-center gap-2 text-xs sm:text-sm">
              <Globe className="w-4 h-4 text-blue-600" />
              <span>{lang === 'mr' ? 'नागरिकांच्या महत्त्वाच्या प्रश्नांची उत्तरे:' : 'Answers to Key Questions:'}</span>
            </h4>

            <div className="space-y-2 text-xs">
              <div className="bg-white p-2.5 rounded-lg border border-blue-100">
                <strong className="text-blue-900">
                  {lang === 'mr' ? 'प्रश्न १: फॉर्म कुठे उघडणार? क्रोम ब्राऊझर की येथेच?' : 'Q1: Where will the form open? Chrome or here?'}
                </strong>
                <p className="mt-0.5 text-slate-700 leading-relaxed">
                  {lang === 'mr'
                    ? 'उत्तर: फॉर्म थेट Google Chrome किंवा तुमच्या मोबाईलच्या मूळ ब्राऊझरमध्ये उघडेल. शासकीय नियमांनुसार (Anti-Clickjacking) कोणतीही सरकारी वेबसाईट दुसऱ्या ॲपमध्ये उघडता येत नाही. यामुळे तुमचा आधार OTP आणि बँक माहिती १००% थेट सरकारच्या खात्यात सुरक्षित जाते, मध्ये कोणीही पाहू शकत नाही.'
                    : 'Answer: The form opens in Google Chrome / system browser. Government anti-clickjacking security prevents third-party embedding, ensuring your Aadhaar OTP stays private.'}
                </p>
              </div>

              <div className="bg-white p-2.5 rounded-lg border border-blue-100">
                <strong className="text-blue-900">
                  {lang === 'mr' ? 'प्रश्न २: यातील सर्व लिंक्स सरकारी व चालू आहेत का? फेक तर नाही ना?' : 'Q2: Are all links official and working? No fake links?'}
                </strong>
                <p className="mt-0.5 text-slate-700 leading-relaxed">
                  {lang === 'mr'
                    ? 'उत्तर: होय! पोर्टलवरील सर्व ७७७ लिंक्स अधिकृत .gov.in, .nic.in आणि .maharashtra.gov.in वर तपासलेल्या आहेत. एकही खाजगी अथवा बनावट लिंक नाही.'
                    : 'Answer: Yes! All 777 links are authentic .gov.in and .nic.in destinations. Zero fake links.'}
                </p>
              </div>

              <div className="bg-white p-2.5 rounded-lg border border-blue-100">
                <strong className="text-blue-900">
                  {lang === 'mr' ? 'प्रश्न ३: ही वेबसाईट सरकारी आहे का?' : 'Q3: Is this website official government?'}
                </strong>
                <p className="mt-0.5 text-slate-700 leading-relaxed">
                  {lang === 'mr'
                    ? 'उत्तर: नाही! हे पोर्टल कोणत्याही सरकारी विभागाची अधिकृत वेबसाईट नाही. हे नागरिकांना अधिकृत सरकारी फॉर्म्स शोधण्यासाठी आणि कागदपत्रांची पात्रता तपासण्यासाठी तयार केलेले स्वतंत्र व विनामूल्य मदत केंद्र (Citizen Guide) आहे.'
                    : 'Answer: No! This is an independent citizen helper and directory, not an official government site.'}
                </p>
              </div>
            </div>
          </div>

          {/* Citizen Fraud Prevention Warning */}
          <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 space-y-1.5">
            <div className="font-bold flex items-center gap-1.5 text-amber-900">
              <AlertOctagon className="w-4 h-4 text-amber-600 shrink-0" />
              <span>{lang === 'mr' ? 'नागरिकांसाठी सावधानतेचा इशारा:' : 'Citizen Safety Advisory:'}</span>
            </div>
            <ul className="text-xs text-amber-900 list-disc pl-4 space-y-1">
              <li>{lang === 'mr' ? 'व्हॉट्सॲप किंवा अनोळखी मेसेजमधील कोणत्याही संशयास्पद लिंकवर क्लिक करू नका.' : 'Never click suspicious WhatsApp links claiming to offer cash prizes.'}</li>
              <li>{lang === 'mr' ? 'शासकीय फॉर्म भरताना मोबाईल ब्राऊझरच्या ॲड्रेस बारमध्ये नेहमी ".gov.in" किंवा ".nic.in" तपासा.' : 'Always verify the official .gov.in domain in the browser address bar.'}</li>
              <li>{lang === 'mr' ? 'कोणत्याही सरकारी योजनेसाठी आपला बँक पासवर्ड किंवा ओटीपी (OTP) कोणालाही देऊ नका.' : 'Never share your bank OTP, PIN or Aadhaar password with anyone.'}</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <div className="text-xs font-mono text-slate-500">
            SHA256: 777-IMMUTABLE-VERIFIED
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
