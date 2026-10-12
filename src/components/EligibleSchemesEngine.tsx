import React, { useState, useMemo } from 'react';
import { Language, Scheme, SchemeCategory } from '../types';
import { SCHEMES, SCHEME_CATEGORIES } from '../data/schemesData';
import { DOCUMENTS } from '../data/documentsData';
import {
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  BookOpen,
  Search,
  Filter,
  Sparkles,
  MapPin,
  HelpCircle,
  FileText,
  BadgeIndianRupee
} from 'lucide-react';

interface EligibleSchemesEngineProps {
  lang: Language;
  selectedDocIds: string[];
  onSelectSchemeDetail: (scheme: Scheme) => void;
  onNavigateToChecklist: () => void;
}

export const EligibleSchemesEngine: React.FC<EligibleSchemesEngineProps> = ({
  lang,
  selectedDocIds,
  onSelectSchemeDetail,
  onNavigateToChecklist,
}) => {
  const [eligibilityFilter, setEligibilityFilter] = useState<'100_percent' | 'missing_1_2' | 'all'>('100_percent');
  const [selectedCategory, setSelectedCategory] = useState<SchemeCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Map of docs for fast lookup
  const docMap = useMemo(() => {
    const map = new Map<string, (typeof DOCUMENTS)[0]>();
    DOCUMENTS.forEach((d) => map.set(d.id, d));
    return map;
  }, []);

  // Compute eligibility for each scheme
  const schemesWithEligibility = useMemo(() => {
    return SCHEMES.map((scheme) => {
      const required = scheme.requiredDocIds;
      const possessed = required.filter((id) => selectedDocIds.includes(id));
      const missing = required.filter((id) => !selectedDocIds.includes(id));
      const is100Percent = missing.length === 0;
      const isAlmost = missing.length > 0 && missing.length <= 2;

      return {
        ...scheme,
        possessedDocIds: possessed,
        missingDocIds: missing,
        is100Percent,
        isAlmost,
        matchPercentage: Math.round((possessed.length / required.length) * 100),
      };
    });
  }, [selectedDocIds]);

  // Counts
  const count100 = useMemo(() => schemesWithEligibility.filter((s) => s.is100Percent).length, [schemesWithEligibility]);
  const countAlmost = useMemo(() => schemesWithEligibility.filter((s) => s.isAlmost).length, [schemesWithEligibility]);
  const countAll = schemesWithEligibility.length;

  // Filtered schemes
  const filteredSchemes = useMemo(() => {
    return schemesWithEligibility.filter((scheme) => {
      // 1. Eligibility filter
      if (eligibilityFilter === '100_percent' && !scheme.is100Percent) return false;
      if (eligibilityFilter === 'missing_1_2' && !scheme.isAlmost) return false;

      // 2. Category filter
      if (selectedCategory !== 'all' && scheme.category !== selectedCategory) return false;

      // 3. Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const nameMr = scheme.name.mr.toLowerCase();
        const nameEn = scheme.name.en.toLowerCase();
        const deptMr = scheme.department.mr.toLowerCase();
        const deptEn = scheme.department.en.toLowerCase();
        const benefitMr = scheme.benefit.mr.toLowerCase();
        const benefitEn = scheme.benefit.en.toLowerCase();
        return (
          nameMr.includes(q) ||
          nameEn.includes(q) ||
          deptMr.includes(q) ||
          deptEn.includes(q) ||
          benefitMr.includes(q) ||
          benefitEn.includes(q)
        );
      }

      return true;
    });
  }, [schemesWithEligibility, eligibilityFilter, selectedCategory, searchQuery]);

  return (
    <div className="space-y-6">
      {/* Top Banner / Headline */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm">
                २
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                {lang === 'mr' ? 'थेट पात्र शासकीय योजना व फॉर्म्स' : 'Direct Eligible Government Schemes'}
              </h2>
            </div>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              {lang === 'mr'
                ? 'तुमच्या निवडलेल्या कागदपत्रांच्या आधारे खालील योजनांसाठी थेट अर्ज करता येईल. आवश्यक कागदपत्रे कमी असल्यास ते कुठून मिळवायचे याचे मार्गदर्शन दिले आहे.'
                : 'Directly apply for the schemes below with your chosen documents. If any doc is missing, clear guidance is provided.'}
            </p>
          </div>

          <button
            type="button"
            onClick={onNavigateToChecklist}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 text-slate-800 border border-slate-300 hover:bg-slate-200 transition-colors shrink-0 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-slate-600" />
            <span>{lang === 'mr' ? 'कागदपत्रे बदला (Edit Docs)' : 'Change Docs'}</span>
          </button>
        </div>

        {/* Filter Navigation */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
          {/* Eligibility Segmented Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg">
            <button
              type="button"
              onClick={() => setEligibilityFilter('100_percent')}
              className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all cursor-pointer ${
                eligibilityFilter === '100_percent'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              {lang === 'mr' ? '१००% थेट पात्र फॉर्म्स' : '100% Eligible'} ({count100})
            </button>

            <button
              type="button"
              onClick={() => setEligibilityFilter('missing_1_2')}
              className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all cursor-pointer ${
                eligibilityFilter === 'missing_1_2'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              {lang === 'mr' ? '१-२ कागदपत्रे बाकी' : 'Missing 1-2 Docs'} ({countAlmost})
            </button>

            <button
              type="button"
              onClick={() => setEligibilityFilter('all')}
              className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all cursor-pointer ${
                eligibilityFilter === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              {lang === 'mr' ? 'सर्व योजना' : 'All Schemes'} ({countAll})
            </button>
          </div>

          {/* Search Box */}
          <div className="relative min-w-[220px] max-w-sm flex-1 sm:flex-initial">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'mr' ? 'योजना शोधा (उदा. लाडकी बहीण, पीएम किसान...)' : 'Search scheme name or benefit...'}
              className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white text-slate-900"
            />
          </div>
        </div>

        {/* Categories Strip */}
        <div className="mt-3 flex items-center gap-1.5 overflow-x-auto pb-1">
          <span className="text-xs font-bold text-slate-500 shrink-0 mr-1">
            {lang === 'mr' ? 'वर्गवारी:' : 'Category:'}
          </span>
          {SCHEME_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-2.5 py-1 text-[11px] font-medium rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-orange-600 text-white font-bold'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.title[lang]}
            </button>
          ))}
        </div>
      </div>

      {/* Schemes Grid */}
      {filteredSchemes.length === 0 ? (
        <div className="bg-white rounded-xl p-8 border border-slate-200 text-center space-y-3">
          <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mx-auto">
            <AlertCircle className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-800">
            {lang === 'mr' ? 'या निकषात कोणतीही योजना आढळली नाही' : 'No schemes match this filter'}
          </h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            {lang === 'mr'
              ? 'कृपया वरील कागदपत्रांच्या यादीत आणखी कागदपत्रे निवडा किंवा फिल्टर "१-२ कागदपत्रे बाकी" किंवा "सर्व योजना" वर बदला.'
              : 'Please select more documents or switch to "Missing 1-2 Docs" or "All Schemes" tab.'}
          </p>
          <button
            type="button"
            onClick={onNavigateToChecklist}
            className="px-4 py-2 bg-orange-600 text-white text-xs font-semibold rounded-lg hover:bg-orange-700 cursor-pointer"
          >
            {lang === 'mr' ? 'कागदपत्रे निवडा' : 'Select More Documents'}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {filteredSchemes.map((scheme) => {
            return (
              <div
                key={scheme.id}
                className={`bg-white rounded-xl border transition-all p-5 flex flex-col justify-between shadow-xs ${
                  scheme.is100Percent
                    ? 'border-emerald-300 ring-1 ring-emerald-200'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div>
                  {/* Card Header & Badges */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        {scheme.is100Percent ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            {lang === 'mr' ? '१००% थेट पात्र (Ready to Apply)' : '100% Eligible'}
                          </span>
                        ) : scheme.isAlmost ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded border border-amber-300">
                            <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                            {lang === 'mr' ? `फक्त ${scheme.missingDocIds.length} कागदपत्र बाकी` : `${scheme.missingDocIds.length} doc missing`}
                          </span>
                        ) : (
                          <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                            {lang === 'mr' ? 'माहितीसाठी' : 'Informational'}
                          </span>
                        )}
                        <span className="text-[11px] text-slate-500 font-medium">
                          {scheme.officialPortalName}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {scheme.name[lang]}
                      </h3>
                      <div className="text-xs text-slate-500 font-medium mt-0.5">
                        {scheme.department[lang]}
                      </div>
                    </div>
                  </div>

                  {/* Benefit Callout */}
                  <div className="mt-3.5 p-3 rounded-lg bg-orange-50/80 border border-orange-200/80 flex items-start gap-2.5">
                    <BadgeIndianRupee className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[11px] font-bold text-orange-800 uppercase tracking-wide">
                        {lang === 'mr' ? 'शासकीय थेट लाभ:' : 'Government Benefit:'}
                      </div>
                      <div className="text-sm font-extrabold text-orange-950">
                        {scheme.benefit[lang]}
                      </div>
                    </div>
                  </div>

                  {/* Brief Description */}
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    {scheme.brief[lang]}
                  </p>

                  {/* Required Documents Status */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <div className="text-xs font-bold text-slate-700 mb-2 flex items-center justify-between">
                      <span>{lang === 'mr' ? 'आवश्यक कागदपत्रे पडताळणी:' : 'Required Documents Verification:'}</span>
                      <span className="text-[11px] text-slate-500 font-semibold">
                        {scheme.possessedDocIds.length} / {scheme.requiredDocIds.length}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {scheme.requiredDocIds.map((docId) => {
                        const isPossessed = selectedDocIds.includes(docId);
                        const docObj = docMap.get(docId);
                        const docName = docObj ? docObj.name[lang] : docId;

                        return (
                          <span
                            key={docId}
                            className={`inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded font-medium ${
                              isPossessed
                                ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                                : 'bg-red-50 text-red-800 border border-red-200'
                            }`}
                          >
                            {isPossessed ? (
                              <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                            ) : (
                              <AlertCircle className="w-3 h-3 text-red-600 shrink-0" />
                            )}
                            <span className="truncate max-w-[200px]">{docName}</span>
                          </span>
                        );
                      })}
                    </div>

                    {/* Missing Document Guidance Notice */}
                    {scheme.missingDocIds.length > 0 && (
                      <div className="mt-3 p-2.5 rounded bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
                        <div className="font-bold flex items-center gap-1 text-amber-950">
                          <MapPin className="w-3.5 h-3.5 text-amber-700" />
                          <span>{lang === 'mr' ? 'बाकी कागदपत्रे कुठून मिळवाल?' : 'Where to obtain missing docs:'}</span>
                        </div>
                        {scheme.missingDocIds.map((mId) => {
                          const mDoc = docMap.get(mId);
                          if (!mDoc) return null;
                          return (
                            <div key={mId} className="text-[11px] text-amber-800 pl-4">
                              • <strong>{mDoc.name[lang]}:</strong> {mDoc.whereToGet[lang]}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectSchemeDetail(scheme)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-slate-600" />
                    <span>{lang === 'mr' ? 'कसा अर्ज करावा? (मार्गदर्शन)' : 'How to Apply?'}</span>
                  </button>

                  <a
                    href={scheme.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={lang === 'mr' ? 'क्रोम ब्राऊझरच्या नवीन टॅबमध्ये थेट अधिकृत सरकारी वेबसाईट उघडेल' : 'Opens directly in Chrome new browser tab'}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold rounded-lg shadow-xs transition-all cursor-pointer ${
                      scheme.is100Percent
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <span>{lang === 'mr' ? 'क्रोममध्ये थेट फॉर्म भरा' : 'Open in Chrome'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
