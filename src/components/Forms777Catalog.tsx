import React, { useState, useMemo, useEffect } from 'react';
import { Language, GovFormItem777, Gender, CitizenProfile } from '../types';
import { FORMS_777_DATA, FORMS_777_CATEGORIES } from '../data/forms777Data';
import { DOCUMENTS } from '../data/documentsData';
import { isVerifiedGovernmentUrl } from '../utils/security';
import { evaluateFormEligibility } from '../utils/eligibility';
import { FormLauncherModal } from './FormLauncherModal';
import {
  Search,
  Smartphone,
  ShieldCheck,
  ExternalLink,
  Lock,
  CheckCircle2,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  Filter,
  Sparkles,
  Info,
  HelpCircle,
  Eye,
  Check,
  User,
  Calendar,
  CheckSquare,
  ArrowRight,
  List,
  LayoutGrid,
  Hash,
  ArrowUpRight
} from 'lucide-react';

interface Forms777CatalogProps {
  lang: Language;
  onOpenSecurityModal: () => void;
  gender: Gender;
  age: number | null;
  selectedDocIds: string[];
  onNavigateToChecklist: () => void;
  directLineTrigger?: number;
  citizenProfile?: CitizenProfile;
}

export const Forms777Catalog: React.FC<Forms777CatalogProps> = ({
  lang,
  onOpenSecurityModal,
  gender,
  age,
  selectedDocIds,
  onNavigateToChecklist,
  directLineTrigger = 0,
  citizenProfile,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [onlyMobileReady, setOnlyMobileReady] = useState(true);
  const [browseMode, setBrowseMode] = useState<'free' | 'filter'>('free');
  const [eligibilityFilter, setEligibilityFilter] = useState<'all' | 'eligible' | 'almost' | 'ineligible'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  // Default to line view and all 777 forms so user sees 1 to 777 continuously in one single line
  const [layoutMode, setLayoutMode] = useState<'line' | 'grid'>('line');
  const [itemsPerPage, setItemsPerPage] = useState<number>(777);
  const [selectedLauncherForm, setSelectedLauncherForm] = useState<GovFormItem777 | null>(null);
  const [jumpInput, setJumpInput] = useState<string>('');

  const effectiveProfile: CitizenProfile = useMemo(() => {
    return citizenProfile || { gender, age };
  }, [citizenProfile, gender, age]);

  // Handle directLineTrigger from top buttons
  useEffect(() => {
    if (directLineTrigger > 0) {
      setLayoutMode('line');
      setItemsPerPage(777);
      setBrowseMode('free');
      setSelectedCategory('all');
      setSearchQuery('');
      setCurrentPage(1);
      setTimeout(() => {
        const el = document.getElementById('forms-continuous-list');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [directLineTrigger]);

  // Document map for fast name lookup
  const docMap = useMemo(() => {
    return new Map(DOCUMENTS.map((d) => [d.id, d]));
  }, []);

  // Compute live eligibility counts across all forms
  const eligibilityCounts = useMemo(() => {
    let eligible = 0;
    let almost = 0;
    let ineligible = 0;

    FORMS_777_DATA.forEach((form) => {
      const res = evaluateFormEligibility(form, effectiveProfile, selectedDocIds);
      if (res.isEligible) eligible++;
      else if (res.isAlmostEligible) almost++;
      else ineligible++;
    });

    return { eligible, almost, ineligible };
  }, [effectiveProfile, selectedDocIds]);

  // Filtered forms: In 'free' mode, NO demographic or doc restriction is applied so all 777 forms are shown freely!
  const filteredForms = useMemo(() => {
    return FORMS_777_DATA.filter((form) => {
      // 1. Mobile ready filter
      if (onlyMobileReady && !form.isMobileFriendly) {
        return false;
      }

      // 2. Category filter
      if (selectedCategory !== 'all' && form.categoryKey !== selectedCategory) {
        return false;
      }

      // 3. Eligibility filter - ONLY applied if user is in 'filter' mode
      if (browseMode === 'filter' && eligibilityFilter !== 'all') {
        const res = evaluateFormEligibility(form, effectiveProfile, selectedDocIds);
        if (eligibilityFilter === 'eligible' && !res.isEligible) return false;
        if (eligibilityFilter === 'almost' && !res.isAlmostEligible) return false;
        if (eligibilityFilter === 'ineligible' && !res.isIneligible) return false;
      }

      // 4. Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const numStr = form.formNumber.toString();
        const paddedNum = form.formNumber.toString().padStart(3, '0');
        const nameMr = form.name.mr.toLowerCase();
        const nameEn = form.name.en.toLowerCase();
        const deptMr = form.department.mr.toLowerCase();
        const deptEn = form.department.en.toLowerCase();
        const purposeMr = form.benefitOrPurpose.mr.toLowerCase();
        const purposeEn = form.benefitOrPurpose.en.toLowerCase();
        const portal = form.portalName.toLowerCase();

        return (
          numStr === q ||
          paddedNum === q ||
          q.includes(numStr) ||
          nameMr.includes(q) ||
          nameEn.includes(q) ||
          deptMr.includes(q) ||
          deptEn.includes(q) ||
          purposeMr.includes(q) ||
          purposeEn.includes(q) ||
          portal.includes(q)
        );
      }

      return true;
    });
  }, [searchQuery, selectedCategory, onlyMobileReady, browseMode, eligibilityFilter, gender, age, selectedDocIds]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredForms.length / itemsPerPage) || 1;
  const paginatedForms = useMemo(() => {
    if (itemsPerPage >= 777) {
      return filteredForms;
    }
    const start = (currentPage - 1) * itemsPerPage;
    return filteredForms.slice(start, start + itemsPerPage);
  }, [filteredForms, currentPage, itemsPerPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 200, behavior: 'smooth' });
  };

  const handleJumpToFormNumber = (num: number) => {
    if (itemsPerPage < 777) {
      setItemsPerPage(777);
    }
    setBrowseMode('free');
    setSelectedCategory('all');
    setSearchQuery('');
    setTimeout(() => {
      const el = document.getElementById(`form-row-${num}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('ring-4', 'ring-orange-500', 'bg-orange-100');
        setTimeout(() => {
          el.classList.remove('ring-4', 'ring-orange-500', 'bg-orange-100');
        }, 3000);
      }
    }, 120);
  };

  const handleJumpToRow = handleJumpToFormNumber;

  return (
    <div className="space-y-4">
      {/* Sleek, Compact Catalog Header (कमी जागा घेणारा व सुटसुटीत हेडर) */}
      <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs bg-orange-600 text-white font-extrabold px-2.5 py-0.5 rounded font-mono">
                ७७७ फॉर्म्स
              </span>
              <h2 className="text-base sm:text-xl font-black text-slate-900 tracking-tight">
                {lang === 'mr' ? 'भारतातील ७७७ मोबाईल सरकारी फॉर्म्स (Form #001 ते #777)' : 'All 777 Verified Mobile Forms (Form #001 to #777)'}
              </h2>
            </div>
            <p className="text-xs text-slate-600 mt-1">
              {lang === 'mr'
                ? 'कोणतीही माहिती भरण्याची सक्ती नाही — सर्व ७७७ फॉर्म्स खाली थेट उपलब्ध आहेत. प्रत्येक फॉर्म अधिकृत .gov.in वर क्रोममध्ये उघडतो.'
                : 'No registration or personal data required. Browse all 777 forms directly or filter by eligibility.'}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={onOpenSecurityModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-800 border border-emerald-300 rounded-lg text-xs font-bold hover:bg-emerald-100 transition-colors cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>{lang === 'mr' ? '१००% शासकीय दुवे' : '100% Gov Links'}</span>
            </button>
          </div>
        </div>

        {/* 2 Main Browsing Modes (२ सोपे पर्याय) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
          <button
            type="button"
            onClick={() => {
              setBrowseMode('free');
              setEligibilityFilter('all');
              setCurrentPage(1);
            }}
            className={`p-3 rounded-xl border-2 text-left transition-all cursor-pointer flex items-center justify-between ${
              browseMode === 'free'
                ? 'bg-orange-50 border-orange-500 text-orange-950 shadow-xs'
                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <div className="space-y-0.5">
              <div className="text-xs sm:text-sm font-bold flex items-center gap-1.5">
                <Smartphone className="w-4 h-4 text-orange-600" />
                <span>{lang === 'mr' ? '१. स्वतंत्रपणे सर्व ७७७ फॉर्म्स पहा' : '1. Browse All 777 Forms Freely'}</span>
              </div>
              <p className="text-[11px] text-slate-500">
                {lang === 'mr' ? 'कोणतीही माहिती न भरता थेट #001 ते #777 पहा' : 'No personal info needed, view all 777'}
              </p>
            </div>
            <span className="text-xs font-black bg-orange-600 text-white px-2 py-1 rounded font-mono">
              777 फॉर्म्स
            </span>
          </button>

          <button
            type="button"
            onClick={() => {
              setBrowseMode('filter');
              setCurrentPage(1);
            }}
            className={`p-3 rounded-xl border-2 text-left transition-all cursor-pointer flex items-center justify-between ${
              browseMode === 'filter'
                ? 'bg-emerald-50 border-emerald-500 text-emerald-950 shadow-xs'
                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <div className="space-y-0.5">
              <div className="text-xs sm:text-sm font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{lang === 'mr' ? '२. माझ्या पात्रतेनुसार फॉर्म्स तपासा' : '2. Filter By My Eligibility'}</span>
              </div>
              <p className="text-[11px] text-slate-500">
                {lang === 'mr' ? 'वय, लिंग व निवडलेल्या कागदपत्रांनुसार' : 'Filter by selected documents & age'}
              </p>
            </div>
            <span className="text-xs font-bold bg-emerald-600 text-white px-2 py-1 rounded">
              {eligibilityCounts.eligible} पात्र
            </span>
          </button>
        </div>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 shadow-xs space-y-3">
        {/* Search Bar + Quick Number Jump */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder={
                lang === 'mr'
                  ? 'फॉर्म नंबर किंवा नाव शोधा (उदा. 777, 12, लाडकी बहीण, पीएम किसान, रेशन, सातबारा...)'
                  : 'Search by Form # (e.g. 777, 10) or keyword (e.g. kisan, ration, 7/12, pan...)'
              }
              className="w-full pl-11 pr-24 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white text-slate-900"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setCurrentPage(1);
                }}
                className="absolute right-3 top-2 text-xs text-slate-500 hover:text-slate-800 bg-slate-200 px-2 py-0.5 rounded cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Jump Buttons & Form Number Direct Entry */}
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-0.5 text-xs shrink-0">
            <span className="text-slate-500 font-bold shrink-0">{lang === 'mr' ? 'थेट जा:' : 'Jump:'}</span>
            {[1, 50, 100, 250, 500, 777].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => handleJumpToFormNumber(num)}
                className="px-2 py-1 bg-slate-100 hover:bg-orange-100 hover:text-orange-900 text-slate-700 font-mono font-bold rounded border border-slate-300 cursor-pointer whitespace-nowrap text-xs transition-colors"
              >
                #{num.toString().padStart(3, '0')}
              </button>
            ))}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const n = parseInt(jumpInput, 10);
                if (!isNaN(n) && n >= 1 && n <= 777) {
                  handleJumpToFormNumber(n);
                }
              }}
              className="flex items-center gap-1 shrink-0"
            >
              <input
                type="number"
                min={1}
                max={777}
                value={jumpInput}
                onChange={(e) => setJumpInput(e.target.value)}
                placeholder="1-777"
                className="w-16 px-1.5 py-1 text-xs border border-slate-300 rounded font-mono text-center focus:outline-none focus:ring-1 focus:ring-orange-500 bg-white"
              />
              <button
                type="submit"
                className="px-2 py-1 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded text-xs cursor-pointer shadow-2xs"
              >
                {lang === 'mr' ? 'जा' : 'Go'}
              </button>
            </form>
          </div>
        </div>

        {/* Profile Filter Status (Only shown if browseMode === 'filter') */}
        {browseMode === 'filter' && (
          <div className="bg-slate-900 text-white rounded-xl p-3 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-2.5">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-400 font-bold uppercase tracking-wider text-[11px]">
                {lang === 'mr' ? 'माझी माहिती:' : 'My Profile:'}
              </span>
              <span className="bg-slate-800 text-white px-2 py-0.5 rounded border border-slate-700 font-bold">
                {gender === 'female' ? '👩 महिला' : gender === 'male' ? '👨 पुरुष' : '👥 सर्व'}
              </span>
              <span className="bg-slate-800 text-white px-2 py-0.5 rounded border border-slate-700 font-bold">
                {age ? `${age} वर्षे` : (lang === 'mr' ? 'वय सर्व' : 'Age: Any')}
              </span>
              {effectiveProfile.annualIncome !== undefined && effectiveProfile.annualIncome !== null && (
                <span className="bg-slate-800 text-amber-300 px-2 py-0.5 rounded border border-slate-700 font-bold">
                  ₹{effectiveProfile.annualIncome.toLocaleString('en-IN')}
                </span>
              )}
              {effectiveProfile.casteCategory && effectiveProfile.casteCategory !== 'all' && (
                <span className="bg-slate-800 text-orange-300 px-2 py-0.5 rounded border border-slate-700 font-bold">
                  {effectiveProfile.casteCategory.toUpperCase()}
                </span>
              )}
              {effectiveProfile.studentLevel && effectiveProfile.studentLevel !== 'all' && (
                <span className="bg-slate-800 text-teal-300 px-2 py-0.5 rounded border border-slate-700 font-bold">
                  {effectiveProfile.studentLevel === 'below_10th'
                    ? (lang === 'mr' ? '🎒 १० वी खालील विद्यार्थी' : 'Below 10th Student')
                    : effectiveProfile.studentLevel === 'above_10th'
                    ? (lang === 'mr' ? '🎓 १० वी वरील विद्यार्थी' : 'Above 10th Student')
                    : (lang === 'mr' ? '👔 सामान्य नागरिक' : 'Non-Student')}
                </span>
              )}
              {effectiveProfile.sscPercentage && (
                <span className="bg-slate-800 text-emerald-300 px-2 py-0.5 rounded border border-slate-700 font-bold">
                  १० वी: {effectiveProfile.sscPercentage}%
                </span>
              )}
              {effectiveProfile.hscPercentage && (
                <span className="bg-slate-800 text-emerald-300 px-2 py-0.5 rounded border border-slate-700 font-bold">
                  १२ वी: {effectiveProfile.hscPercentage}%
                </span>
              )}
              <span className="bg-slate-800 text-emerald-300 px-2 py-0.5 rounded border border-slate-700 font-bold">
                {selectedDocIds.length} {lang === 'mr' ? 'कागदपत्रे' : 'docs'}
              </span>

              <button
                type="button"
                onClick={onNavigateToChecklist}
                className="text-xs text-orange-400 hover:text-orange-300 underline font-bold ml-1 cursor-pointer"
              >
                {lang === 'mr' ? '✏️ बदला' : 'Edit'}
              </button>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1 overflow-x-auto">
              <button
                type="button"
                onClick={() => {
                  setEligibilityFilter('all');
                  setCurrentPage(1);
                }}
                className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  eligibilityFilter === 'all'
                    ? 'bg-white text-slate-900'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {lang === 'mr' ? 'सर्व ७७७' : 'All 777'}
              </button>

              <button
                type="button"
                onClick={() => {
                  setEligibilityFilter('eligible');
                  setCurrentPage(1);
                }}
                className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1 ${
                  eligibilityFilter === 'eligible'
                    ? 'bg-emerald-500 text-slate-950 font-bold'
                    : 'bg-emerald-950 text-emerald-300 border border-emerald-500/30'
                }`}
              >
                <CheckCircle2 className="w-3 h-3" />
                <span>{lang === 'mr' ? 'पात्र' : 'Eligible'} ({eligibilityCounts.eligible})</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setEligibilityFilter('almost');
                  setCurrentPage(1);
                }}
                className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1 ${
                  eligibilityFilter === 'almost'
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'bg-amber-950 text-amber-300 border border-amber-500/30'
                }`}
              >
                <AlertTriangle className="w-3 h-3" />
                <span>{lang === 'mr' ? '१-२ बाकी' : 'Near'} ({eligibilityCounts.almost})</span>
              </button>
            </div>
          </div>
        )}

        {/* Category Horizontal Filter with Form Counts */}
        <div className="pt-1 flex items-center gap-1.5 overflow-x-auto pb-1">
          <span className="text-xs font-bold text-slate-500 shrink-0 mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            {lang === 'mr' ? 'विभाग:' : 'Category:'}
          </span>
          {FORMS_777_CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => {
                setSelectedCategory(cat.key);
                setCurrentPage(1);
              }}
              className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.key
                  ? 'bg-slate-900 text-white font-bold shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.label[lang]}
            </button>
          ))}
        </div>

        {/* Results Counter, Layout Switcher & Items Per Page */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 text-xs text-slate-500 pt-2 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <div className="font-bold text-slate-800 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>
                {lang === 'mr'
                  ? `१ ते ७७७ लगातार: एकूण ${filteredForms.length} फॉर्म्स (दाखवले: ${paginatedForms.length})`
                  : `1 to 777 Continuous: ${filteredForms.length} forms (Showing ${paginatedForms.length})`}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* View Mode Toggle: एका लाईनीत vs कार्ड्स */}
            <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200">
              <button
                type="button"
                onClick={() => {
                  setLayoutMode('line');
                  setItemsPerPage(777);
                }}
                className={`px-3 py-1 rounded-md font-bold transition-all flex items-center gap-1.5 cursor-pointer text-xs ${
                  layoutMode === 'line'
                    ? 'bg-orange-600 text-white shadow-xs'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
                title="१ ते ७७७ लगातार एका लाईनीत सलग यादी"
              >
                <List className="w-3.5 h-3.5" />
                <span>{lang === 'mr' ? '⚡ एका लाईनीत सलग (१ ते ७७७)' : '⚡ Line View (1-777)'}</span>
              </button>
              <button
                type="button"
                onClick={() => setLayoutMode('grid')}
                className={`px-3 py-1 rounded-md font-bold transition-all flex items-center gap-1.5 cursor-pointer text-xs ${
                  layoutMode === 'grid'
                    ? 'bg-orange-600 text-white shadow-xs'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
                title="कार्ड व्ह्यू"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>{lang === 'mr' ? '🎴 कार्ड व्ह्यू' : 'Grid'}</span>
              </button>
            </div>

            {/* Per page buttons */}
            <div className="hidden sm:flex items-center gap-1">
              <span className="text-slate-400 font-medium">{lang === 'mr' ? 'दाखवा:' : 'Show:'}</span>
              {[24, 50, 100].map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => {
                    setItemsPerPage(size);
                    setCurrentPage(1);
                  }}
                  className={`px-2 py-0.5 rounded font-bold transition-all cursor-pointer ${
                    itemsPerPage === size
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {size}
                </button>
              ))}
              <button
                type="button"
                onClick={() => {
                  setItemsPerPage(777);
                  setCurrentPage(1);
                }}
                className={`px-2.5 py-0.5 rounded font-bold transition-all cursor-pointer ${
                  itemsPerPage >= 777
                    ? 'bg-orange-600 text-white shadow-xs'
                    : 'bg-orange-100 text-orange-800 hover:bg-orange-200'
                }`}
              >
                {lang === 'mr' ? 'सर्व ७७७' : 'All 777'}
              </button>
            </div>
          </div>
        </div>

        {/* Range Jump Shortcut Strip (१ ते ७७७ मधील कोणत्याही भागात एका क्लिकवर जा) */}
        <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto pb-0.5 text-[11px]">
          <span className="text-slate-500 font-bold shrink-0">{lang === 'mr' ? 'क्रमानुसार जा:' : 'Jump Range:'}</span>
          {[
            { label: '१ - १००', num: 1 },
            { label: '१०१ - २००', num: 101 },
            { label: '२०१ - ३००', num: 201 },
            { label: '३०१ - ४००', num: 301 },
            { label: '४०१ - ५००', num: 401 },
            { label: '५०१ - ६००', num: 501 },
            { label: '६०१ - ७००', num: 601 },
            { label: '७०१ - ७७७', num: 701 },
          ].map((range) => (
            <button
              key={range.num}
              type="button"
              onClick={() => handleJumpToFormNumber(range.num)}
              className="px-2 py-0.5 bg-slate-50 hover:bg-orange-100 hover:text-orange-950 text-slate-600 font-mono font-medium rounded border border-slate-200 whitespace-nowrap cursor-pointer transition-colors"
            >
              #{range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Forms Listing: Single-line row-by-row continuous list OR Grid Cards */}
      {paginatedForms.length === 0 ? (
        <div className="bg-white rounded-xl p-8 border border-slate-200 text-center space-y-3">
          <AlertTriangle className="w-10 h-10 text-amber-500 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">
            {lang === 'mr' ? 'या शोधात कोणताही फॉर्म आढळला नाही' : 'No government form matched your search'}
          </h3>
          <p className="text-xs text-slate-500">
            {lang === 'mr'
              ? 'कृपया फॉर्म नंबर तपासा किंवा वेगळा मराठी/इंग्रजी शब्द शोधा.'
              : 'Please check the form number or try a different keyword.'}
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg cursor-pointer"
          >
            {lang === 'mr' ? 'सर्व ७७७ फॉर्म्स दाखवा' : 'Show All 777 Forms'}
          </button>
        </div>
      ) : layoutMode === 'line' ? (
        /* ⚡ USER REQUEST: एका लाईनीत सलग यादी (Form 1 to 777 continuous sequential list) */
        <div id="forms-continuous-list" className="space-y-2.5">
          {paginatedForms.map((item) => {
            const isGovValid = isVerifiedGovernmentUrl(item.officialUrl);
            const evalResult = evaluateFormEligibility(item, effectiveProfile, selectedDocIds);

            return (
              <div
                id={`form-row-${item.formNumber}`}
                key={item.id}
                className={`bg-white rounded-xl border p-3.5 sm:p-4 transition-all duration-150 hover:border-orange-300 hover:shadow-xs ${
                  evalResult.isEligible
                    ? 'border-emerald-300 ring-1 ring-emerald-200 bg-emerald-50/15'
                    : evalResult.isAlmostEligible
                    ? 'border-amber-200 bg-amber-50/10'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                  {/* Left: Serial Number Badge & Details */}
                  <div className="flex items-start gap-3 min-w-0 flex-1">
                    {/* Distinct Serial Badge 1 to 777 */}
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-orange-600 via-orange-500 to-amber-600 text-white font-mono font-black text-sm flex items-center justify-center shrink-0 shadow-xs border border-orange-400/40">
                      #{item.formNumber}
                    </div>

                    <div className="space-y-1 min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-[11px] font-mono font-extrabold text-orange-800 bg-orange-100 px-2 py-0.5 rounded">
                          फॉर्म #{item.formNumber.toString().padStart(3, '0')}
                        </span>
                        <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3 text-emerald-600" />
                          <span>{lang === 'mr' ? 'अधिकृत .gov.in' : 'Verified .gov.in'}</span>
                        </span>
                        <span className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                          {item.categoryLabel[lang]}
                        </span>
                        {evalResult.isEligible && (
                          <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>{lang === 'mr' ? '१००% थेट पात्र' : 'Eligible'}</span>
                          </span>
                        )}
                        {evalResult.isAlmostEligible && (
                          <span className="text-[11px] font-medium text-amber-800 bg-amber-100 px-2 py-0.5 rounded flex items-center gap-1">
                            <AlertTriangle className="w-3 h-3 text-amber-600" />
                            <span>{lang === 'mr' ? `फक्त ${evalResult.missingDocIds.length} कागदपत्र बाकी` : 'Almost Eligible'}</span>
                          </span>
                        )}
                      </div>

                      <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {item.name[lang]}
                      </h3>

                      <div className="text-xs text-slate-500 font-medium flex flex-wrap items-center gap-x-2.5 gap-y-0.5">
                        <span className="text-slate-600">🏢 {item.department[lang]}</span>
                        <span className="hidden sm:inline text-slate-300">•</span>
                        <span className="text-slate-700">🎯 {item.benefitOrPurpose[lang]}</span>
                      </div>

                      {/* Mobile application instructions */}
                      <div className="text-[11px] text-emerald-900 flex items-center gap-1 pt-0.5">
                        <Smartphone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="font-medium">{item.mobileMethod[lang]}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Actions */}
                  <div className="flex items-center gap-2 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-100 justify-end">
                    <div className="hidden sm:block text-right pr-2">
                      <div className="text-[10px] text-slate-400 font-medium">
                        {lang === 'mr' ? 'शासकीय शुल्क' : 'Gov Fee'}
                      </div>
                      <div className="text-xs font-bold text-slate-800">{item.fees[lang]}</div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedLauncherForm(item)}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg transition-colors cursor-pointer"
                      title={lang === 'mr' ? 'कागदपत्रे व माहिती पहा' : 'View Details'}
                    >
                      <Eye className="w-3.5 h-3.5 text-slate-600" />
                      <span>{lang === 'mr' ? 'तपशील' : 'Details'}</span>
                    </button>

                    <a
                      href={item.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors cursor-pointer shadow-xs whitespace-nowrap"
                      title={lang === 'mr' ? 'क्रोम ब्राऊझरमध्ये अधिकृत फॉर्म उघडा' : 'Open in Chrome'}
                    >
                      <Smartphone className="w-3.5 h-3.5 text-emerald-200" />
                      <span>{lang === 'mr' ? 'क्रोममध्ये उघडा' : 'Open in Chrome'}</span>
                      <ExternalLink className="w-3 h-3 text-white/80" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* 🎴 Alternative Card Grid View */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {paginatedForms.map((item) => {
            const isGovValid = isVerifiedGovernmentUrl(item.officialUrl);
            const evalResult = evaluateFormEligibility(item, effectiveProfile, selectedDocIds);

            return (
              <div
                id={`form-row-${item.formNumber}`}
                key={item.id}
                className={`bg-white rounded-xl border p-4.5 flex flex-col justify-between shadow-xs transition-all hover:shadow-sm ${
                  evalResult.isEligible
                    ? 'border-emerald-300 ring-1 ring-emerald-200'
                    : evalResult.isAlmostEligible
                    ? 'border-amber-200'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div>
                  {/* Top Bar: Form Number & Certified Badge */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-black bg-orange-600 text-white px-2.5 py-0.5 rounded-md font-mono tracking-wide shadow-2xs">
                      #{item.formNumber.toString().padStart(3, '0')}
                    </span>

                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      {lang === 'mr' ? 'अधिकृत .gov.in' : 'Verified .gov.in'}
                    </span>
                  </div>

                  {/* Form Title */}
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {item.name[lang]}
                  </h3>

                  {/* Department */}
                  <div className="text-xs text-slate-500 font-medium mt-1">
                    {item.department[lang]}
                  </div>

                  {/* Live Dynamic Eligibility Status Banner */}
                  {evalResult.isEligible ? (
                    <div className="mt-2.5 p-2 rounded-lg bg-emerald-50 border border-emerald-300 text-xs text-emerald-950 font-bold flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{lang === 'mr' ? '✅ १००% थेट पात्र' : '100% Eligible for You'}</span>
                      </span>
                      <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded font-mono">
                        {lang === 'mr' ? 'मोबाईलवर भरा' : 'Ready'}
                      </span>
                    </div>
                  ) : evalResult.isAlmostEligible ? (
                    <div className="mt-2.5 p-2 rounded-lg bg-amber-50 border border-amber-300 text-xs text-amber-950 flex flex-col gap-1">
                      <span className="flex items-center gap-1.5 font-bold">
                        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                        <span>{lang === 'mr' ? `⚠️ फक्त ${evalResult.missingDocIds.length} कागदपत्र बाकी:` : `Only ${evalResult.missingDocIds.length} doc missing:`}</span>
                      </span>
                      <div className="text-[11px] text-amber-900 font-medium pl-5.5">
                        {evalResult.missingDocIds.map((d) => docMap.get(d)?.name[lang] || d).join(', ')}
                      </div>
                    </div>
                  ) : (
                    <div className="mt-2.5 p-1.5 rounded-lg bg-slate-100 border border-slate-200 text-[11px] text-slate-600 flex items-center gap-1.5">
                      <span className="text-slate-400">❌</span>
                      <span className="truncate">{evalResult.reason?.[lang] || (lang === 'mr' ? 'सध्या अपात्र' : 'Ineligible')}</span>
                    </div>
                  )}

                  {/* Benefit / Purpose */}
                  <div className="mt-3 p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 text-xs text-slate-700">
                    <strong className="text-slate-900">{lang === 'mr' ? 'उद्देश / लाभ:' : 'Benefit/Purpose:'}</strong>{' '}
                    {item.benefitOrPurpose[lang]}
                  </div>

                  {/* Mobile Application Method */}
                  <div className="mt-2.5 p-2 rounded-lg bg-emerald-50/70 border border-emerald-200/70 flex items-start gap-2 text-xs text-emerald-950">
                    <Smartphone className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">{lang === 'mr' ? 'मोबाईलवरून कसा भरावा:' : 'Mobile method:'}</span>{' '}
                      {item.mobileMethod[lang]}
                    </div>
                  </div>

                  {/* Required Documents Checklist on card */}
                  <div className="mt-2.5 pt-2 border-t border-slate-100">
                    <div className="text-[11px] text-slate-500 font-bold mb-1 flex items-center justify-between">
                      <span>{lang === 'mr' ? 'कागदपत्रे:' : 'Docs:'}</span>
                      <span className="font-mono text-[10px]">
                        {evalResult.possessedDocIds.length} / {item.requiredDocs.length}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {item.requiredDocs.map((docId) => {
                        const hasDoc = selectedDocIds.includes(docId);
                        const dObj = docMap.get(docId);
                        const dName = dObj ? dObj.name[lang] : docId;

                        return (
                          <span
                            key={docId}
                            className={`text-[10px] px-1.5 py-0.5 rounded font-medium flex items-center gap-0.5 ${
                              hasDoc
                                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                                : 'bg-slate-100 text-slate-500 border border-slate-200'
                            }`}
                          >
                            <span>{hasDoc ? '✓' : '✗'}</span>
                            <span className="truncate max-w-[120px]">{dName}</span>
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Official Fee & Portal */}
                  <div className="mt-3 flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
                    <div>
                      <span className="font-semibold">{lang === 'mr' ? 'शासकीय शुल्क:' : 'Official fee:'}</span>{' '}
                      <span className="font-bold text-slate-800">{item.fees[lang]}</span>
                    </div>
                    <div className="font-mono text-[11px] text-slate-400">
                      {item.securityHash}
                    </div>
                  </div>
                </div>

                {/* Direct Action & Safety Preview Links */}
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedLauncherForm(item)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors cursor-pointer"
                      title={lang === 'mr' ? 'तपशील, कागदपत्रे व क्रोम सुरक्षा प्रिव्ह्यू पहा' : 'View safety details & Chrome launcher'}
                    >
                      <Eye className="w-3.5 h-3.5 text-slate-600" />
                      <span>{lang === 'mr' ? 'तपशील व प्रिव्ह्यू' : 'Details & Preview'}</span>
                    </button>

                    <a
                      href={item.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors cursor-pointer shadow-xs"
                      title={lang === 'mr' ? 'क्रोम ब्राऊझरच्या नवीन सुरक्षित टॅबमध्ये थेट उघडेल' : 'Opens directly in Chrome new secure tab'}
                    >
                      <Smartphone className="w-3.5 h-3.5 text-emerald-200" />
                      <span>{lang === 'mr' ? 'क्रोममध्ये उघडा' : 'Open in Chrome'}</span>
                      <ExternalLink className="w-3 h-3 text-white/80" />
                    </a>
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-slate-500 px-1">
                    <span className="flex items-center gap-1 text-emerald-700 font-medium">
                      <ShieldCheck className="w-3 h-3" />
                      <span>{lang === 'mr' ? '१००% अधिकृत .gov.in' : '100% Verified .gov.in'}</span>
                    </span>
                    <span>{lang === 'mr' ? 'क्रोम टॅबमध्ये उघडेल ↗' : 'Opens in Chrome tab ↗'}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Pagination Controls & Direct Full View */}
      <div className="space-y-3">
        {itemsPerPage < 777 && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 pt-2">
            <button
              type="button"
              onClick={() => {
                setItemsPerPage(777);
                setCurrentPage(1);
              }}
              className="w-full sm:w-auto px-5 py-2.5 bg-orange-50 hover:bg-orange-100 text-orange-900 border border-orange-300 font-bold rounded-xl text-xs sm:text-sm transition-all cursor-pointer shadow-xs flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span>{lang === 'mr' ? 'सर्व ७७७ फॉर्म्स एकाच पानावर स्क्रोल करून पहा (Show All 777)' : 'Show All 777 Forms on a Single Page'}</span>
            </button>
          </div>
        )}

        {totalPages > 1 && (
          <div className="bg-white rounded-xl p-4 border border-slate-200 flex flex-wrap items-center justify-between gap-3 shadow-xs">
            <div className="text-xs text-slate-600 font-medium">
              {lang === 'mr'
                ? `पान ${currentPage} / ${totalPages} (एकूण ${filteredForms.length} फॉर्म्स)`
                : `Page ${currentPage} of ${totalPages} (${filteredForms.length} Total Forms)`}
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:pointer-events-none flex items-center gap-1 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>{lang === 'mr' ? 'मागील' : 'Prev'}</span>
              </button>

              {/* Quick Page Jump Buttons */}
              <div className="hidden sm:flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((pageNum) => (
                  <button
                    key={pageNum}
                    type="button"
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-8 h-8 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      currentPage === pageNum
                        ? 'bg-orange-600 text-white'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}
                {totalPages > 5 && <span className="text-slate-400 px-1">...</span>}
                {totalPages > 5 && (
                  <button
                    type="button"
                    onClick={() => handlePageChange(totalPages)}
                    className={`w-8 h-8 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      currentPage === totalPages
                        ? 'bg-orange-600 text-white'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {totalPages}
                  </button>
                )}
              </div>

              <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:pointer-events-none flex items-center gap-1 cursor-pointer"
              >
                <span>{lang === 'mr' ? 'पुढील' : 'Next'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Interactive Safe Form Launcher Modal */}
      <FormLauncherModal
        form={selectedLauncherForm}
        isOpen={!!selectedLauncherForm}
        onClose={() => setSelectedLauncherForm(null)}
        lang={lang}
      />
    </div>
  );
};
