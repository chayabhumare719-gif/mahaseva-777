import React from 'react';
import { Language, DocumentCategory, Gender, CasteCategory, StudentLevel } from '../types';
import { DOCUMENTS, DOCUMENT_CATEGORIES, DOCUMENT_PACKS } from '../data/documentsData';
import { resolveEffectiveDocuments } from '../utils/eligibility';
import { 
  CheckSquare, 
  Square, 
  Sparkles, 
  Trash2, 
  ShieldCheck, 
  CheckCircle, 
  ArrowRight, 
  Info, 
  MapPin, 
  Lock, 
  User, 
  Calendar, 
  Smartphone, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle,
  Coins,
  GraduationCap,
  BookOpen,
  Award,
  Tractor,
  Heart,
  Users,
  Check
} from 'lucide-react';

interface DocumentSelectorProps {
  lang: Language;
  selectedDocIds: string[];
  onToggleDoc: (id: string) => void;
  onSelectCommon: () => void;
  onSelectAll: () => void;
  onClearAll: () => void;
  onNavigateToSchemes: () => void;
  onNavigateToForms: () => void;
  gender: Gender;
  setGender: (g: Gender) => void;
  age: number | null;
  setAge: (a: number | null) => void;
  annualIncome: number | null;
  setAnnualIncome: (income: number | null) => void;
  casteCategory: CasteCategory;
  setCasteCategory: (c: CasteCategory) => void;
  isStudent: boolean;
  setIsStudent: (s: boolean) => void;
  studentLevel: StudentLevel;
  setStudentLevel: (sl: StudentLevel) => void;
  sscPercentage: number | null;
  setSscPercentage: (p: number | null) => void;
  hscPercentage: number | null;
  setHscPercentage: (p: number | null) => void;
  onSelectPack: (docIds: string[]) => void;
  eligibleFormsCount: number;
  almostFormsCount: number;
  ineligibleFormsCount: number;
  eligibleSchemesCount: number;
}

export const DocumentSelector: React.FC<DocumentSelectorProps> = ({
  lang,
  selectedDocIds,
  onToggleDoc,
  onSelectCommon,
  onSelectAll,
  onClearAll,
  onNavigateToSchemes,
  onNavigateToForms,
  gender,
  setGender,
  age,
  setAge,
  annualIncome,
  setAnnualIncome,
  casteCategory,
  setCasteCategory,
  isStudent,
  setIsStudent,
  studentLevel,
  setStudentLevel,
  sscPercentage,
  setSscPercentage,
  hscPercentage,
  setHscPercentage,
  onSelectPack,
  eligibleFormsCount,
  almostFormsCount,
  ineligibleFormsCount,
  eligibleSchemesCount,
}) => {
  const totalDocs = DOCUMENTS.length;
  const selectedCount = selectedDocIds.length;
  const percentage = Math.round((selectedCount / totalDocs) * 100);

  // Check if school leaving certificate is selected (LC replaces bonafide)
  const hasLeavingCert =
    selectedDocIds.includes('school_leaving_cert') ||
    selectedDocIds.includes('leaving_certificate');

  // Check if user has chosen marksheet
  const hasMarksheetDoc =
    selectedDocIds.includes('marksheet') ||
    selectedDocIds.includes('ssc_marksheet') ||
    selectedDocIds.includes('hsc_marksheet');

  // Quick preset income chips
  const quickIncomes = [
    { label: '₹५०,०००', value: 50000, desc: 'निराधार / BPL' },
    { label: '₹१,००,०००', value: 100000, desc: 'EWS / संजय गांधी' },
    { label: '₹१,५०,०००', value: 150000, desc: 'अल्पभूधारक' },
    { label: '₹२,५०,०००', value: 250000, desc: 'लाडकी बहीण / DBT' },
    { label: '₹८,००,०००', value: 800000, desc: 'NCL / EWS मर्यादा' },
  ];

  // Quick preset ages
  const quickAges = [18, 21, 25, 35, 50, 60, 65, 75];

  // Caste category list with friendly Marathi labels
  const casteOptions: { key: CasteCategory; label: { mr: string; en: string }; badge: string }[] = [
    { key: 'open', label: { mr: 'OPEN (खुला प्रवर्ग)', en: 'OPEN / General' }, badge: 'सर्वसामान्य' },
    { key: 'obc', label: { mr: 'OBC (इतर मागास वर्ग)', en: 'OBC' }, badge: 'नॉन-क्रिमिलेअर' },
    { key: 'sc', label: { mr: 'SC (अनुसूचित जाती)', en: 'SC' }, badge: 'रमाई / स्वाधार' },
    { key: 'st', label: { mr: 'ST (अनुसूचित जमाती)', en: 'ST' }, badge: 'शबरी / आदिवासी' },
    { key: 'vjnt_a', label: { mr: 'VJ/NT-A (विमुक्त जाती)', en: 'VJ / NT-A' }, badge: 'वसंतराव नाईक' },
    { key: 'nt_b', label: { mr: 'NT-B (भटक्या जमाती - ब)', en: 'NT-B' }, badge: 'आरक्षण' },
    { key: 'nt_c', label: { mr: 'NT-C (धनगर समाज व इतर)', en: 'NT-C' }, badge: 'पुण्यश्लोक अहिल्यादेवी' },
    { key: 'nt_d', label: { mr: 'NT-D (वणजारी समाज व इतर)', en: 'NT-D' }, badge: 'आरक्षण' },
    { key: 'sbc', label: { mr: 'SBC (विशेष मागास प्रवर्ग)', en: 'SBC' }, badge: 'महाज्योती' },
    { key: 'ews', label: { mr: 'EWS (आर्थिक दुर्बल घटक)', en: 'EWS (10%)' }, badge: 'सारथी / अमृत' },
  ];

  return (
    <div className="space-y-6">
      {/* SECTION 1: SMART PROFILE INPUTS (पायरी १: लिंग, वय, उत्पन्न, जात व शैक्षणिक माहिती) */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-5 sm:p-6 border-2 border-orange-500/40 shadow-md space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-orange-500/20 text-orange-300 text-xs font-bold px-2.5 py-0.5 rounded-full border border-orange-400/30 mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'mr' ? 'पायरी १ : स्मार्ट नागरिक माहिती' : 'Step 1 : Smart Citizen Profile'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {lang === 'mr' ? 'वय, उत्पन्न, जात प्रवर्ग व शैक्षणिक माहिती निवडा' : 'Select Demographics, Income & Caste'}
            </h2>
            <p className="text-xs text-slate-300 mt-0.5">
              {lang === 'mr'
                ? 'कोणतेही कागदपत्र अपलोड करण्याची गरज नाही — या माहितीवरून तुम्हाला १००% अचूक व पात्र फॉर्म्स सुचवले जातील.'
                : 'No files uploaded. This profile directly filters eligible government schemes.'}
            </p>
          </div>

          <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-400/30 px-3 py-1.5 rounded-xl text-emerald-300 text-xs font-semibold shrink-0">
            <Lock className="w-4 h-4 text-emerald-400" />
            <span>{lang === 'mr' ? '१००% खाजगी व गोपनीय' : '100% Client-Side Private'}</span>
          </div>
        </div>

        {/* Row 1: Gender & Age Inputs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Gender Selector */}
          <div className="space-y-2.5">
            <label className="text-xs font-bold text-slate-200 uppercase tracking-wide flex items-center gap-1.5">
              <User className="w-4 h-4 text-orange-400" />
              <span>{lang === 'mr' ? '१. तुमचे लिंग (Gender) निवडा:' : '1. Select Gender:'}</span>
            </label>

            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setGender('female')}
                className={`py-2.5 px-2 rounded-xl border-2 font-bold text-xs sm:text-sm flex flex-col items-center justify-center gap-0.5 transition-all cursor-pointer ${
                  gender === 'female'
                    ? 'bg-orange-600 border-orange-400 text-white shadow-md scale-[1.02]'
                    : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span className="text-lg">👩</span>
                <span>{lang === 'mr' ? 'महिला' : 'Female'}</span>
                <span className="text-[10px] opacity-80">{lang === 'mr' ? '(लाडकी बहीण)' : 'Welfare'}</span>
              </button>

              <button
                type="button"
                onClick={() => setGender('male')}
                className={`py-2.5 px-2 rounded-xl border-2 font-bold text-xs sm:text-sm flex flex-col items-center justify-center gap-0.5 transition-all cursor-pointer ${
                  gender === 'male'
                    ? 'bg-orange-600 border-orange-400 text-white shadow-md scale-[1.02]'
                    : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span className="text-lg">👨</span>
                <span>{lang === 'mr' ? 'पुरुष' : 'Male'}</span>
                <span className="text-[10px] opacity-80">{lang === 'mr' ? '(सर्व योजना)' : 'General'}</span>
              </button>

              <button
                type="button"
                onClick={() => setGender('all')}
                className={`py-2.5 px-2 rounded-xl border-2 font-bold text-xs sm:text-sm flex flex-col items-center justify-center gap-0.5 transition-all cursor-pointer ${
                  gender === 'all' || gender === 'other'
                    ? 'bg-orange-600 border-orange-400 text-white shadow-md scale-[1.02]'
                    : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span className="text-lg">👥</span>
                <span>{lang === 'mr' ? 'सर्व' : 'All'}</span>
                <span className="text-[10px] opacity-80">{lang === 'mr' ? '(सर्वांसाठी)' : 'Universal'}</span>
              </button>
            </div>
          </div>

          {/* Age Input & Quick Buttons */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-200 uppercase tracking-wide flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'mr' ? '२. तुमचे चालू वय (Age) टाका:' : '2. Enter Current Age:'}</span>
              </label>
              {age !== null && (
                <span className="text-xs font-bold text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  {age} {lang === 'mr' ? 'वर्षे' : 'years'}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <input
                  type="number"
                  min="1"
                  max="110"
                  value={age ?? ''}
                  onChange={(e) => {
                    const val = parseInt(e.target.value, 10);
                    setAge(isNaN(val) ? null : val);
                  }}
                  placeholder={lang === 'mr' ? 'वय टाका (उदा. २५)' : 'Enter age (e.g. 25)'}
                  className="w-full bg-slate-900 border-2 border-slate-700 rounded-xl px-4 py-2 text-white font-bold text-sm focus:border-orange-500 focus:outline-none"
                />
                <span className="absolute right-3 top-2 text-xs text-slate-400">
                  {lang === 'mr' ? 'वर्षे' : 'yrs'}
                </span>
              </div>

              {age !== null && (
                <button
                  type="button"
                  onClick={() => setAge(null)}
                  className="px-2.5 py-2 bg-slate-800 text-slate-400 hover:text-white rounded-xl text-xs font-semibold cursor-pointer border border-slate-700"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Age Chips */}
            <div className="flex items-center gap-1 flex-wrap pt-0.5">
              <span className="text-[10px] text-slate-400 mr-1">{lang === 'mr' ? 'झटपट:' : 'Quick:'}</span>
              {quickAges.map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() => setAge(a)}
                  className={`text-[11px] px-2 py-0.5 rounded-md font-bold transition-colors cursor-pointer border ${
                    age === a
                      ? 'bg-emerald-500 text-slate-950 border-emerald-400'
                      : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: Annual Income Input (User Request: उत्पन्नाचा दाखला व उत्पन्न टाकण्याचे ऑप्शन) */}
        <div className="bg-slate-950/60 rounded-xl p-4 border border-slate-700/80 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <label className="text-xs font-bold text-amber-300 uppercase tracking-wide flex items-center gap-1.5">
              <Coins className="w-4 h-4 text-amber-400" />
              <span>{lang === 'mr' ? '३. वार्षिक कौटुंबिक उत्पन्न (Annual Income):' : '3. Annual Family Income:'}</span>
            </label>
            {annualIncome !== null && (
              <span className="text-xs font-mono font-bold text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-600/40">
                ₹{annualIncome.toLocaleString('en-IN')} {lang === 'mr' ? 'प्रति वर्ष' : '/year'}
              </span>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <div className="relative flex-1">
              <span className="absolute left-3 top-2 text-sm font-bold text-slate-400">₹</span>
              <input
                type="number"
                min="0"
                step="10000"
                value={annualIncome ?? ''}
                onChange={(e) => {
                  const val = parseInt(e.target.value, 10);
                  const income = isNaN(val) ? null : val;
                  setAnnualIncome(income);
                  // Auto-select income certificate if income is provided
                  if (income !== null && !selectedDocIds.includes('income_certificate')) {
                    onToggleDoc('income_certificate');
                  }
                }}
                placeholder={lang === 'mr' ? 'वार्षिक उत्पन्न टाका (उदा. 100000)' : 'Enter annual income (e.g. 100000)'}
                className="w-full bg-slate-900 border-2 border-slate-700 rounded-xl pl-7 pr-4 py-2 text-white font-bold text-sm focus:border-amber-400 focus:outline-none"
              />
            </div>

            {annualIncome !== null && (
              <button
                type="button"
                onClick={() => setAnnualIncome(null)}
                className="px-3 py-2 bg-slate-800 text-slate-400 hover:text-white rounded-xl text-xs font-semibold cursor-pointer border border-slate-700 shrink-0"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Income Chips */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[11px] text-slate-400 mr-1">{lang === 'mr' ? 'उत्पन्न स्लॅब:' : 'Income Slabs:'}</span>
            {quickIncomes.map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => {
                  setAnnualIncome(item.value);
                  if (!selectedDocIds.includes('income_certificate')) {
                    onToggleDoc('income_certificate');
                  }
                }}
                className={`text-[11px] px-2.5 py-1 rounded-lg font-bold transition-colors cursor-pointer border flex items-center gap-1 ${
                  annualIncome === item.value
                    ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-xs'
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-[9px] opacity-75 hidden sm:inline">({item.desc})</span>
              </button>
            ))}
          </div>

          {/* Real-time Income Eligibility Hint */}
          {annualIncome !== null && (
            <div className="text-[11px] bg-slate-900 text-amber-200 p-2 rounded-lg border border-slate-800 flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>
                {annualIncome <= 100000
                  ? (lang === 'mr' ? '✅ अति-गरीब, EWS, संजय गांधी निराधार व पिवळे रेशनकार्ड योजनांसाठी थेट पात्र.' : 'Eligible for Destitute & BPL schemes')
                  : annualIncome <= 250000
                  ? (lang === 'mr' ? '✅ लाडकी बहीण योजना (₹१,५००/महिना) व १००% महाडीबीटी स्कॉलरशिपसाठी पात्र.' : 'Eligible for Ladki Bahin & 100% scholarships')
                  : annualIncome <= 800000
                  ? (lang === 'mr' ? '✅ नॉन-क्रिमिलेअर (OBC/NT) व १०% EWS आरक्षण सवलतीसाठी पात्र.' : 'Eligible for Non-Creamy Layer & EWS')
                  : (lang === 'mr' ? '⚪ खुल्या प्रवर्गाच्या सामान्य योजना लागू होतील.' : 'General category schemes apply')}
              </span>
            </div>
          )}
        </div>

        {/* Row 3: Caste Category (User Request: कास्ट सर्टिफिकेट - OBC, NT-C, SC, ST, OPEN वगैरे सर्व पर्याय) */}
        <div className="bg-slate-950/60 rounded-xl p-4 border border-slate-700/80 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <label className="text-xs font-bold text-orange-300 uppercase tracking-wide flex items-center gap-1.5">
              <Award className="w-4 h-4 text-orange-400" />
              <span>{lang === 'mr' ? '४. तुमचा जात प्रवर्ग (Caste Category):' : '4. Select Caste Category:'}</span>
            </label>
            <span className="text-[11px] text-slate-400">
              {lang === 'mr' ? 'आरक्षित योजना व शिष्यवृत्तीसाठी' : 'For reservation & scholarships'}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
            {casteOptions.map((opt) => (
              <button
                key={opt.key}
                type="button"
                onClick={() => {
                  setCasteCategory(opt.key);
                  // If reserved caste chosen, auto-tick caste certificate
                  if (opt.key !== 'open' && opt.key !== 'all' && !selectedDocIds.includes('caste_certificate')) {
                    onToggleDoc('caste_certificate');
                  }
                }}
                className={`p-2 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  casteCategory === opt.key
                    ? 'bg-orange-600 border-orange-400 text-white shadow-md'
                    : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <div className="text-xs font-black">{opt.label[lang]}</div>
                <div className="text-[10px] opacity-75 mt-0.5">{opt.badge}</div>
              </button>
            ))}
          </div>

          {/* Non-Creamy Layer prompt for OBC/NT/SBC */}
          {(casteCategory === 'obc' || casteCategory === 'nt_c' || casteCategory === 'nt_d' || casteCategory === 'vjnt_a' || casteCategory === 'nt_b' || casteCategory === 'sbc') && (
            <div className="bg-amber-950/60 border border-amber-500/40 rounded-lg p-2.5 text-xs text-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <Info className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  {lang === 'mr'
                    ? '💡 ओबीसी / एनटी / एसबीसी प्रवर्गासाठी नॉन-क्रिमिलेअर (Non-Creamy Layer) दाखला आवश्यक असतो.'
                    : 'Non-Creamy Layer Certificate is mandatory for OBC/NT/SBC category.'}
                </span>
              </div>
              {!selectedDocIds.includes('non_creamy_layer') && (
                <button
                  type="button"
                  onClick={() => onToggleDoc('non_creamy_layer')}
                  className="px-3 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black rounded-lg cursor-pointer whitespace-nowrap shrink-0"
                >
                  {lang === 'mr' ? '+ नॉन-क्रिमिलेअर जोडा' : '+ Add Non-Creamy Layer'}
                </button>
              )}
            </div>
          )}
        </div>

        {/* Row 4: Student Status & Education Level (User Request: दहावी खालील विद्यार्थी व दहावी वरील विद्यार्थी हे देखील एक ऑप्शन दे) */}
        <div className="bg-slate-950/60 rounded-xl p-4 border border-slate-700/80 space-y-3.5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
            <div>
              <label className="text-xs font-bold text-emerald-300 uppercase tracking-wide flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-emerald-400" />
                <span>
                  {lang === 'mr'
                    ? '५. विद्यार्थी / शिक्षण प्रवर्ग निवडा (Student & Education Level):'
                    : '5. Select Student / Education Level:'}
                </span>
              </label>
              <p className="text-[11px] text-slate-400 mt-0.5">
                {lang === 'mr'
                  ? 'दहावी खालील (१ ली ते ९ वी) किंवा दहावी वरील (१० वी, १२ वी, कॉलेज) विद्यार्थी निवडून अचूक फॉर्म्स मिळवा'
                  : 'Select Below 10th (School) or Above 10th (College/Higher Edu) for tailored schemes'}
              </p>
            </div>

            {studentLevel !== 'all' && (
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/40 text-emerald-300 shrink-0 self-start sm:self-auto">
                {studentLevel === 'below_10th'
                  ? (lang === 'mr' ? '🎒 १० वी खालील विद्यार्थी' : 'Below 10th Student')
                  : studentLevel === 'above_10th'
                  ? (lang === 'mr' ? '🎓 १० वी वरील विद्यार्थी' : 'Above 10th Student')
                  : (lang === 'mr' ? '👔 सामान्य नागरिक' : 'Non-Student')}
              </span>
            )}
          </div>

          {/* 4 Responsive Education Category Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {/* Option 1: दहावी खालील विद्यार्थी (Below 10th) */}
            <button
              type="button"
              onClick={() => {
                setStudentLevel('below_10th');
                setIsStudent(true);
                // Clear 10th/12th percentages since they haven't appeared for 10th
                setSscPercentage(null);
                setHscPercentage(null);
                // Suggest bonafide if not having leaving cert
                if (!hasLeavingCert && !selectedDocIds.includes('bonafide_cert')) {
                  onToggleDoc('bonafide_cert');
                }
              }}
              className={`p-3 rounded-xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                studentLevel === 'below_10th'
                  ? 'bg-gradient-to-br from-emerald-600 to-teal-700 border-emerald-400 text-white shadow-md scale-[1.01]'
                  : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="text-lg">🎒</span>
                  <span className={`text-[10px] font-black px-1.5 py-0.5 rounded ${
                    studentLevel === 'below_10th' ? 'bg-white/20 text-white' : 'bg-slate-700 text-emerald-300'
                  }`}>
                    {lang === 'mr' ? '१ ली ते ९ वी' : '1st-9th'}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-black leading-tight">
                  {lang === 'mr' ? 'दहावी खालील विद्यार्थी' : 'Below 10th Student'}
                </div>
                <div className="text-[11px] opacity-80 mt-1 leading-snug">
                  {lang === 'mr' ? 'प्राथमिक व माध्यमिक (प्री-मॅट्रिक / शालेय)' : 'Pre-Matric School Student'}
                </div>
              </div>
              <div className="mt-2 pt-1 border-t border-white/10 text-[10px] font-medium opacity-90">
                {lang === 'mr' ? '✓ गुणपत्रिकेची गरज नाही' : 'No marksheets needed'}
              </div>
            </button>

            {/* Option 2: दहावी वरील विद्यार्थी (Above 10th) */}
            <button
              type="button"
              onClick={() => {
                setStudentLevel('above_10th');
                setIsStudent(true);
                // Auto-tick 10th marksheet if not ticked
                if (!selectedDocIds.includes('ssc_marksheet') && !selectedDocIds.includes('marksheet')) {
                  onToggleDoc('ssc_marksheet');
                }
              }}
              className={`p-3 rounded-xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                studentLevel === 'above_10th'
                  ? 'bg-gradient-to-br from-emerald-600 to-teal-700 border-emerald-400 text-white shadow-md scale-[1.01]'
                  : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="text-lg">🎓</span>
                  <span className={`text-[10px] font-black px-1.5 py-0.5 rounded ${
                    studentLevel === 'above_10th' ? 'bg-white/20 text-white' : 'bg-slate-700 text-emerald-300'
                  }`}>
                    {lang === 'mr' ? '१० वी+' : '10th+'}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-black leading-tight">
                  {lang === 'mr' ? 'दहावी वरील विद्यार्थी' : 'Above 10th Student'}
                </div>
                <div className="text-[11px] opacity-80 mt-1 leading-snug">
                  {lang === 'mr' ? '१० वी, ११ वी, १२ वी, पदवी, डिप्लोमा / कॉलेज' : 'Post-Matric, Higher Edu & College'}
                </div>
              </div>
              <div className="mt-2 pt-1 border-t border-white/10 text-[10px] font-medium opacity-90">
                {lang === 'mr' ? '✓ महाडीबीटी व EBC पात्र' : 'MahaDBT & EBC ready'}
              </div>
            </button>

            {/* Option 3: विद्यार्थी नाही (Not a Student) */}
            <button
              type="button"
              onClick={() => {
                setStudentLevel('not_student');
                setIsStudent(false);
                setSscPercentage(null);
                setHscPercentage(null);
              }}
              className={`p-3 rounded-xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                studentLevel === 'not_student'
                  ? 'bg-slate-700 border-slate-500 text-white shadow-md scale-[1.01]'
                  : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="text-lg">👔</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-700 text-slate-300">
                    {lang === 'mr' ? 'नागरिक' : 'Citizen'}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-black leading-tight">
                  {lang === 'mr' ? 'विद्यार्थी नाही' : 'Not a Student'}
                </div>
                <div className="text-[11px] opacity-80 mt-1 leading-snug">
                  {lang === 'mr' ? 'शिक्षण पूर्ण / नोकरी / शेतकरी / व्यावसायिक' : 'Working / Farmer / General Citizen'}
                </div>
              </div>
              <div className="mt-2 pt-1 border-t border-white/10 text-[10px] font-medium opacity-90">
                {lang === 'mr' ? 'सर्वसामान्य कल्याणकारी योजना' : 'General welfare schemes'}
              </div>
            </button>

            {/* Option 4: सर्व (All / Reset filter) */}
            <button
              type="button"
              onClick={() => {
                setStudentLevel('all');
                setIsStudent(false);
              }}
              className={`p-3 rounded-xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                studentLevel === 'all'
                  ? 'bg-orange-600 border-orange-400 text-white shadow-md scale-[1.01]'
                  : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="text-lg">👥</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-700 text-orange-300">
                    {lang === 'mr' ? 'सर्व' : 'All'}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-black leading-tight">
                  {lang === 'mr' ? 'सर्व प्रवर्ग दाखवा' : 'All Categories'}
                </div>
                <div className="text-[11px] opacity-80 mt-1 leading-snug">
                  {lang === 'mr' ? 'शालेय, महाविद्यालयीन व सर्वसामान्य' : 'Browse all schemes without education filter'}
                </div>
              </div>
              <div className="mt-2 pt-1 border-t border-white/10 text-[10px] font-medium opacity-90">
                {lang === 'mr' ? '७७७ फॉर्म्स उपलब्ध' : '777 forms available'}
              </div>
            </button>
          </div>

          {/* BELOW 10TH STUDENT GUIDANCE BANNER */}
          {studentLevel === 'below_10th' && (
            <div className="bg-emerald-950/70 border border-emerald-500/50 rounded-xl p-3.5 text-xs text-emerald-200 space-y-2.5">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="font-black text-white text-xs sm:text-sm">
                    {lang === 'mr'
                      ? '🎒 दहावी खालील विद्यार्थ्यांसाठी स्मार्ट माहिती (इ. १ ली ते ९ वी):'
                      : '🎒 Below 10th Student Info (Classes 1 to 9):'}
                  </div>
                  <p className="text-[11px] text-emerald-200/90 leading-relaxed">
                    {lang === 'mr'
                      ? 'दहावी खालील विद्यार्थ्यांसाठी १० वी व १२ वी च्या गुणपत्रिकेची कोणतीही गरज नाही. शाळा सोडल्याचा दाखला (LC/TC) किंवा मुख्याध्यापकांचे चालू वर्षाचे बोनाफाईड प्रमाणपत्र, आधार कार्ड व बँक पासबुक पुरेसे असते. या आधारे शालेय पोषण आहार, मोफत गणवेश व पाठ्यपुस्तके, सावित्रीबाई फुले शिष्यवृत्ती व RTE २५% मोफत प्रवेशाचे फॉर्म्स थेट लागू होतील.'
                      : 'Students below 10th standard do not require board marksheets. School leaving certificate (LC) or current Bonafide, Aadhaar, and bank account are sufficient for school schemes.'}
                  </p>
                </div>
              </div>

              {/* Quick Bonafide Addition if not possessing LC */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-emerald-500/30 text-[11px]">
                <div className="flex items-center gap-1.5 text-emerald-300">
                  <Info className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>
                    {hasLeavingCert
                      ? (lang === 'mr' ? '✓ शाळा सोडल्याचा दाखला (LC) निवडल्यामुळे बोनाफाईडची गरज नाही.' : '✓ LC covers schooling proof.')
                      : selectedDocIds.includes('bonafide_cert')
                      ? (lang === 'mr' ? '✓ चालू शाळेचे बोनाफाईड प्रमाणपत्र निवडलेले आहे.' : '✓ Bonafide is selected.')
                      : (lang === 'mr' ? 'मुख्याध्यापकांचे चालू शाळेचे बोनाफाईड प्रमाणपत्र जोडा:' : 'Add School Bonafide Certificate:')}
                  </span>
                </div>

                {!hasLeavingCert && !selectedDocIds.includes('bonafide_cert') && (
                  <button
                    type="button"
                    onClick={() => onToggleDoc('bonafide_cert')}
                    className="px-3 py-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-lg cursor-pointer transition-colors shadow-2xs"
                  >
                    {lang === 'mr' ? '+ बोनाफाईड प्रमाणपत्र जोडा' : '+ Add Bonafide'}
                  </button>
                )}
              </div>
            </div>
          )}

          {/* ABOVE 10TH STUDENT MARKS & SCHOLARSHIP INPUTS */}
          {(studentLevel === 'above_10th' || (isStudent && studentLevel !== 'below_10th') || hasMarksheetDoc) && (
            <div className="bg-slate-900/90 border border-slate-700/80 rounded-xl p-3.5 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-800 pb-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-300">
                  <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    {lang === 'mr'
                      ? '१० वी व १२ वी चे गुण (टक्केवारी %) टाका — अचूक शिष्यवृत्ती व प्रवेश फॉर्म्ससाठी:'
                      : 'Enter 10th & 12th Percentage (%) for Accurate Scholarship Forms:'}
                  </span>
                </div>
                <span className="text-[10px] text-slate-400">
                  {lang === 'mr' ? '(किमान ५०%+ असल्यास शिष्यवृत्ती पात्र)' : '(50%+ for merit scholarships)'}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 10th SSC Marks */}
                <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-200 flex items-center gap-1">
                      <span>📄</span>
                      <span>{lang === 'mr' ? '१० वी एसएससी टक्केवारी (%):' : '10th SSC Percentage (%):'}</span>
                    </span>
                    {sscPercentage !== null && (
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded font-mono border border-emerald-500/30">
                        {sscPercentage}% {sscPercentage >= 50 ? '✓ पात्र' : ''}
                      </span>
                    )}
                  </div>
                  <input
                    type="number"
                    min="35"
                    max="100"
                    value={sscPercentage ?? ''}
                    onChange={(e) => {
                      const val = parseFloat(e.target.value);
                      const perc = isNaN(val) ? null : val;
                      setSscPercentage(perc);
                      if (perc !== null && !selectedDocIds.includes('ssc_marksheet') && !selectedDocIds.includes('marksheet')) {
                        onToggleDoc('ssc_marksheet');
                      }
                    }}
                    placeholder={lang === 'mr' ? '१० वी चे टक्के टाका (उदा. ६५)' : 'Enter 10th % (e.g. 65)'}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-white text-xs font-bold focus:border-emerald-400 focus:outline-none"
                  />
                  <div className="flex items-center gap-1 flex-wrap">
                    <span className="text-[10px] text-slate-400 mr-0.5">{lang === 'mr' ? 'झटपट:' : 'Quick:'}</span>
                    {[50, 60, 75, 85].map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => {
                          setSscPercentage(p);
                          if (!selectedDocIds.includes('ssc_marksheet') && !selectedDocIds.includes('marksheet')) {
                            onToggleDoc('ssc_marksheet');
                          }
                        }}
                        className={`text-[10px] px-2 py-0.5 rounded border font-mono transition-colors cursor-pointer ${
                          sscPercentage === p
                            ? 'bg-emerald-500 text-slate-950 font-bold border-emerald-400 shadow-2xs'
                            : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700 hover:text-white'
                        }`}
                      >
                        {p}%+
                      </button>
                    ))}
                    {sscPercentage !== null && (
                      <button
                        type="button"
                        onClick={() => setSscPercentage(null)}
                        className="text-[10px] px-1.5 py-0.5 text-slate-400 hover:text-white ml-auto cursor-pointer"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                </div>

                {/* 12th HSC Marks */}
                <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-200 flex items-center gap-1">
                      <span>🎓</span>
                      <span>{lang === 'mr' ? '१२ वी एचएससी टक्केवारी (%):' : '12th HSC Percentage (%):'}</span>
                    </span>
                    {hscPercentage !== null && (
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded font-mono border border-emerald-500/30">
                        {hscPercentage}% {hscPercentage >= 50 ? '✓ पात्र' : ''}
                      </span>
                    )}
                  </div>
                  <input
                    type="number"
                    min="35"
                    max="100"
                    value={hscPercentage ?? ''}
                    onChange={(e) => {
                      const val = parseFloat(e.target.value);
                      const perc = isNaN(val) ? null : val;
                      setHscPercentage(perc);
                      if (perc !== null && !selectedDocIds.includes('hsc_marksheet') && !selectedDocIds.includes('marksheet')) {
                        onToggleDoc('hsc_marksheet');
                      }
                    }}
                    placeholder={lang === 'mr' ? '१२ वी चे टक्के टाका (उदा. ७०)' : 'Enter 12th % (e.g. 70)'}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-white text-xs font-bold focus:border-emerald-400 focus:outline-none"
                  />
                  <div className="flex items-center gap-1 flex-wrap">
                    <span className="text-[10px] text-slate-400 mr-0.5">{lang === 'mr' ? 'झटपट:' : 'Quick:'}</span>
                    {[50, 60, 75, 85].map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => {
                          setHscPercentage(p);
                          if (!selectedDocIds.includes('hsc_marksheet') && !selectedDocIds.includes('marksheet')) {
                            onToggleDoc('hsc_marksheet');
                          }
                        }}
                        className={`text-[10px] px-2 py-0.5 rounded border font-mono transition-colors cursor-pointer ${
                          hscPercentage === p
                            ? 'bg-emerald-500 text-slate-950 font-bold border-emerald-400 shadow-2xs'
                            : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700 hover:text-white'
                        }`}
                      >
                        {p}%+
                      </button>
                    ))}
                    {hscPercentage !== null && (
                      <button
                        type="button"
                        onClick={() => setHscPercentage(null)}
                        className="text-[10px] px-1.5 py-0.5 text-slate-400 hover:text-white ml-auto cursor-pointer"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* SECTION 2: DOCUMENT PACKS & CHECKLIST (पायरी २: कागदपत्रे गोळा करणे व टिक करणे) */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-xs font-bold px-2.5 py-0.5 rounded-full border border-emerald-200 mb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>{lang === 'mr' ? 'पायरी २ : कागदपत्रांवर टिक करा' : 'Step 2 : Tick Documents'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              {lang === 'mr' ? 'तुमच्याकडील कागदपत्रांवर टिक (☑️) करा' : 'Tick Documents You Have'}
            </h2>
            <div className="mt-1 flex items-center gap-2 text-xs text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 max-w-2xl">
              <Info className="w-4 h-4 shrink-0 text-emerald-600" />
              <span>
                <strong>{lang === 'mr' ? 'कागदपत्र मागण्याची गरज नाही:' : 'Zero File Upload:'}</strong>{' '}
                {lang === 'mr'
                  ? 'कोणताही कागद अपलोड करण्याची गरज नाही. तुमच्याकडे उपलब्ध असलेल्या कागदपत्रांवर फक्त टिक करा.'
                  : 'No upload required. Just tick the documents you possess.'}
              </span>
            </div>
          </div>

          {/* Counter Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex items-center gap-4 shrink-0">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                {lang === 'mr' ? 'निवडलेली कागदपत्रे' : 'Selected Docs'}
              </div>
              <div className="text-2xl font-extrabold text-slate-900 tabular-nums">
                {selectedCount} <span className="text-xs font-normal text-slate-500">/ {totalDocs}</span>
              </div>
            </div>
            <div className="h-10 w-px bg-slate-200" />
            <div className="text-right">
              <div className="text-xs font-semibold text-slate-500">
                {lang === 'mr' ? 'पात्रता प्रमाण' : 'Coverage'}
              </div>
              <div className="text-xl font-bold text-orange-600 tabular-nums">
                {percentage}%
              </div>
            </div>
          </div>
        </div>

        {/* User Request: स्मार्ट लॉजिक - शाळा सोडल्याचा दाखला (LC) असल्यास बोनाफाईडची गरज नाही */}
        {hasLeavingCert && (
          <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-3.5 text-xs text-emerald-950 flex items-start gap-2.5 shadow-2xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-extrabold">
                {lang === 'mr' ? '✨ स्मार्ट लॉजिक सक्रिय:' : '✨ Smart Logic Active:'}
              </span>{' '}
              {lang === 'mr'
                ? 'तुमच्याकडे "शाळा सोडल्याचा दाखला (LC / TC)" निवडलेला असल्याने बोनाफाईड प्रमाणपत्राची वेगळी गरज नाही! सिस्टीमने जन्मतारीख व शाळा पुरावा म्हणून बोनाफाईड आपोआप ग्राह्य धरले आहे.'
                : 'Since you have a School Leaving Certificate (LC), Bonafide Certificate is not required! The system automatically satisfies schooling proof.'}
            </div>
          </div>
        )}

        {/* User Request: कागदपत्रे गोळा करण्यास मदत - 1-Click Document Packs */}
        <div className="space-y-2 pt-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-orange-600" />
              <span>{lang === 'mr' ? 'कागदपत्रे गोळा करण्यास झटपट मदत (1-Click Packs):' : 'Quick Document Packs:'}</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {DOCUMENT_PACKS.map((pack) => (
              <button
                key={pack.id}
                type="button"
                onClick={() => onSelectPack(pack.docIds)}
                className="p-2.5 bg-gradient-to-br from-slate-50 to-orange-50/40 hover:from-orange-50 hover:to-amber-50 border border-slate-200 hover:border-orange-300 rounded-xl text-left transition-all cursor-pointer shadow-2xs flex flex-col justify-between group"
              >
                <div>
                  <div className="text-xs font-black text-slate-900 group-hover:text-orange-950">
                    {pack.title[lang]}
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1 line-clamp-2 leading-tight">
                    {pack.description[lang]}
                  </p>
                </div>
                <div className="mt-2 pt-1 border-t border-slate-200/60 flex items-center justify-between text-[10px] font-bold text-orange-600">
                  <span>{pack.docIds.length} {lang === 'mr' ? 'कागदपत्रे' : 'docs'}</span>
                  <span>+ जोडा ↗</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Toolbar: Common 5 / Select All / Clear All */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 bg-slate-50 p-3 rounded-lg border border-slate-200">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={onSelectCommon}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-800 bg-white hover:bg-orange-50 hover:text-orange-900 hover:border-orange-300 border border-slate-300 rounded-md shadow-2xs transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-orange-600" />
              <span>{lang === 'mr' ? '⭐ सामान्य ५ कागदपत्रे निवडा' : 'Select Common 5'}</span>
            </button>

            <button
              type="button"
              onClick={onSelectAll}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-md shadow-2xs transition-all cursor-pointer"
            >
              <CheckSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>{lang === 'mr' ? 'सर्व निवडा' : 'Select All'}</span>
            </button>

            <button
              type="button"
              onClick={onClearAll}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-red-700 bg-white hover:bg-red-50 border border-red-200 rounded-md shadow-2xs transition-all cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5 text-red-500" />
              <span>{lang === 'mr' ? 'सर्व काढा' : 'Clear All'}</span>
            </button>
          </div>

          <div className="text-xs text-slate-500 font-medium">
            {lang === 'mr'
              ? `${selectedCount} कागदपत्रे निवडली आहेत`
              : `${selectedCount} documents selected`}
          </div>
        </div>

        {/* Categorized Document Checklist Grid */}
        <div className="space-y-6 pt-2">
          {DOCUMENT_CATEGORIES.map((cat) => {
            const catDocs = DOCUMENTS.filter((d) => d.category === cat.id);
            const catSelectedCount = catDocs.filter((d) => selectedDocIds.includes(d.id)).length;

            return (
              <div key={cat.id} className="border border-slate-200 rounded-xl overflow-hidden">
                {/* Category Header */}
                <div className="bg-slate-100/80 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-800 text-xs sm:text-sm">
                      {cat.title[lang]}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200">
                    {catSelectedCount} / {catDocs.length} {lang === 'mr' ? 'निवडली' : 'ticked'}
                  </span>
                </div>

                {/* Document Items Grid */}
                <div className="p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 bg-white">
                  {catDocs.map((doc) => {
                    const isChecked = selectedDocIds.includes(doc.id);
                    // Check if doc is bonafide and satisfied by LC
                    const isBonafideSatisfiedByLc =
                      (doc.id === 'bonafide_cert' || doc.id === 'student_id') && hasLeavingCert;

                    return (
                      <div
                        key={doc.id}
                        onClick={() => onToggleDoc(doc.id)}
                        className={`p-3 rounded-lg border transition-all cursor-pointer select-none flex items-start gap-3 ${
                          isChecked
                            ? 'bg-emerald-50/70 border-emerald-400 shadow-2xs'
                            : isBonafideSatisfiedByLc
                            ? 'bg-amber-50/40 border-amber-300'
                            : 'bg-white hover:bg-slate-50 border-slate-200'
                        }`}
                      >
                        <div className="mt-0.5 shrink-0">
                          {isChecked ? (
                            <CheckSquare className="w-5 h-5 text-emerald-600" />
                          ) : (
                            <Square className="w-5 h-5 text-slate-400" />
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className={`text-xs font-bold leading-tight ${isChecked ? 'text-emerald-950 font-black' : 'text-slate-800'}`}>
                              {doc.name[lang]}
                            </span>
                            {doc.isCommon && (
                              <span className="bg-orange-100 text-orange-800 text-[10px] font-bold px-1.5 py-0.2 rounded">
                                {lang === 'mr' ? 'सामान्य' : 'Common'}
                              </span>
                            )}
                            {isBonafideSatisfiedByLc && !isChecked && (
                              <span className="bg-emerald-100 text-emerald-800 text-[9px] font-bold px-1.5 py-0.2 rounded border border-emerald-300">
                                {lang === 'mr' ? '✓ LC मुळे ग्राह्य' : '✓ Covered by LC'}
                              </span>
                            )}
                          </div>

                          <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                            {doc.description[lang]}
                          </p>

                          <div className="mt-2 text-[10px] text-slate-600 flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                            <span className="truncate">{doc.whereToGet[lang]}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION 3: AUTOMATIC ELIGIBILITY RESULTS (पायरी ३: स्वयंचलित थेट पात्रता निकाल) */}
      <div className="bg-gradient-to-r from-emerald-900 via-slate-900 to-slate-900 text-white rounded-2xl p-5 sm:p-6 border-2 border-emerald-400/50 shadow-lg space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-400/40">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'mr' ? 'पायरी ३ : स्वयंचलित थेट पात्रता निकाल' : 'Step 3 : Live Automatic Eligibility Result'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {lang === 'mr' ? 'तुमच्या माहिती व कागदपत्रांनुसार पात्रता निकाल:' : 'Eligibility Result Based on Your Data:'}
            </h3>
            <p className="text-xs text-slate-300 flex flex-wrap items-center gap-2">
              <span>लिंग: {gender === 'female' ? 'महिला' : gender === 'male' ? 'पुरुष' : 'सर्व'}</span>
              <span>• वय: {age ? `${age} वर्षे` : 'सर्व'}</span>
              {annualIncome !== null && (
                <span>• उत्पन्न: ₹{annualIncome.toLocaleString('en-IN')}</span>
              )}
              {casteCategory !== 'all' && (
                <span>• प्रवर्ग: {casteCategory.toUpperCase()}</span>
              )}
              {isStudent && (
                <span>• विद्यार्थी (१० वी: {sscPercentage ? `${sscPercentage}%` : 'होय'})</span>
              )}
              <span>• कागदपत्रे: {selectedCount}</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onNavigateToForms}
              className="px-5 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <Smartphone className="w-4 h-4" />
              <span>
                {lang === 'mr' ? `✅ १००% पात्र फॉर्म्स पहा (${eligibleFormsCount})` : `View Eligible Forms (${eligibleFormsCount})`}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onNavigateToSchemes}
              className="px-5 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>
                {lang === 'mr' ? `पात्र योजना पहा (${eligibleSchemesCount})` : `Eligible Schemes (${eligibleSchemesCount})`}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Live Status Indicators */}
        <div className="pt-2 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="bg-emerald-950/60 p-3 rounded-xl border border-emerald-500/30">
            <div className="text-emerald-400 font-bold">
              {lang === 'mr' ? '१००% पात्र फॉर्म्स:' : '100% Eligible Forms:'}
            </div>
            <div className="text-lg font-black text-white tabular-nums">
              {eligibleFormsCount} {lang === 'mr' ? 'फॉर्म्स' : 'forms'}
            </div>
          </div>

          <div className="bg-amber-950/60 p-3 rounded-xl border border-amber-500/30">
            <div className="text-amber-400 font-bold">
              {lang === 'mr' ? 'फक्त १-२ कागदपत्र बाकी:' : '1-2 Docs Missing:'}
            </div>
            <div className="text-lg font-black text-white tabular-nums">
              {almostFormsCount} {lang === 'mr' ? 'फॉर्म्स' : 'forms'}
            </div>
          </div>

          <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
            <div className="text-slate-300 font-bold">
              {lang === 'mr' ? 'कल्याणकारी योजना:' : 'Welfare Schemes:'}
            </div>
            <div className="text-lg font-black text-white tabular-nums">
              {eligibleSchemesCount} {lang === 'mr' ? 'योजना' : 'schemes'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
