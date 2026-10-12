import React from 'react';
import { Language } from '../types';
import { ShieldCheck, ExternalLink, Lock, CheckCircle2, Heart, Info, AlertTriangle } from 'lucide-react';
import citizenHelperLogo from '../assets/images/citizen_helper_logo_1791459009342.jpg';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-16 border-t-4 border-orange-500">
      {/* Top Banner inside Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Brand & Helper Info */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-slate-700 bg-slate-800">
                <img
                  src={citizenHelperLogo}
                  alt="Citizen Helper Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-base font-bold text-white tracking-tight">
                  {lang === 'mr' ? 'फॉर्म ७७७ - महासेवा' : 'FORM 777 - MAHASEVA'}
                </span>
                <div className="text-[11px] text-amber-400 font-medium">
                  {lang === 'mr' ? 'स्वतंत्र नागरिक सहाय्यता मंच' : 'Independent Citizen Guide'}
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {lang === 'mr'
                ? 'नागरिकांना शासकीय योजनांची अचूक माहिती, आवश्यक कागदपत्रे पडताळणी व अधिकृत .gov.in संकेतस्थळांवर थेट अर्ज सुलभ करणारे स्वतंत्र व विनामूल्य मार्गदर्शक साधन.'
                : 'A free, independent public digital guide enabling citizens to verify document eligibility and safely locate official .gov.in portals.'}
            </p>
            <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold bg-slate-800 px-2.5 py-1 rounded border border-slate-700">
              <Lock className="w-3.5 h-3.5" />
              <span>{lang === 'mr' ? '१००% खाजगी व सुरक्षित' : '100% Client-Side & Private'}</span>
            </div>
          </div>

          {/* Col 2: Important State Portals */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3 pb-1 border-b border-slate-800">
              {lang === 'mr' ? 'अधिकृत शासकीय पोर्टल्स' : 'Official Govt Portals'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://aaplesarkar.mahaonline.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>आपले सरकार (Aaple Sarkar)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://mahadbt.maharashtra.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>महाडीबीटी (MahaDBT)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://mahabhulekh.maharashtra.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>महाभूमी ७/१२ (MahaBhulekh)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://ladakibahin.maharashtra.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>लाडकी बहीण योजना</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://msrtc.maharashtra.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>एसटी महामंडळ (MSRTC)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Central Initiatives */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3 pb-1 border-b border-slate-800">
              {lang === 'mr' ? 'केंद्रीय शासकीय पोर्टल्स' : 'Central Govt Portals'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://pmkisan.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>पीएम किसान सन्मान निधी</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.digilocker.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>डिजिलॉकर (DigiLocker)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://myaadhaar.uidai.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>माय आधार (UIDAI)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://parivahan.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>सारथी परिवहन (DL/RC)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://eshram.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>ई-श्रम पोर्टल (e-Shram)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Explicit Non-Govt Legal Disclaimer */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3 pb-1 border-b border-slate-800 flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === 'mr' ? 'कायदेशीर अस्वीकरण (Disclaimer)' : 'Legal Disclaimer'}</span>
            </h4>
            <div className="text-xs text-amber-200/90 leading-relaxed bg-amber-950/40 border border-amber-500/30 rounded-lg p-3">
              {lang === 'mr'
                ? 'महत्त्वाची नोंद: हे पोर्टल कोणत्याही सरकारी विभागाची अधिकृत वेबसाईट नाही (Not an official Government Portal). हे केवळ नागरिकांना योग्य योजना आणि कागदपत्रांची माहिती मिळवून देण्यासाठी तयार केलेले स्वतंत्र व विनामूल्य संदर्भ साधन आहे. सर्व सरकारी अर्ज संबंधित अधिकृत .gov.in संकेतस्थळावरच उघडतात.'
                : 'Notice: This portal is NOT an official government website and has no official affiliation. It is a free independent reference helper created to guide citizens toward authentic .gov.in public portals.'}
            </div>
            <div className="text-[11px] text-slate-400 border border-slate-800 rounded p-2.5 bg-slate-950">
              <div className="font-semibold text-slate-300">
                {lang === 'mr' ? 'शून्य डेटा साठवणूक (Zero Storage):' : 'Zero Storage Policy:'}
              </div>
              <div className="mt-0.5">
                {lang === 'mr'
                  ? 'कोणताही नागरिक डेटा, आधार किंवा कागदपत्रे सर्व्हरवर सेव्ह केली जात नाहीत.'
                  : 'Zero private identification data stored in our servers.'}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} फॉर्म ७७७ (MahaSeva Citizen Helper) • By Ganesh Bhumare. {lang === 'mr' ? 'सर्व हक्क राखीव.' : 'All rights reserved.'}
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>{lang === 'mr' ? 'स्वतंत्र नागरिक मदत' : 'Citizen Assistance'}</span>
            <span>•</span>
            <span>{lang === 'mr' ? 'अधिकृत .gov.in मार्गदर्शक' : 'Gov Portal Guide'}</span>
            <span>•</span>
            <span>{lang === 'mr' ? 'सुरक्षित संदर्भ' : 'Safe Reference'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
