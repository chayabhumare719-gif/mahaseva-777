/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Language, Scheme, Gender, CasteCategory, CitizenProfile, StudentLevel, GovFormItem777 } from './types';
import { DOCUMENTS } from './data/documentsData';
import { SCHEMES } from './data/schemesData';
import { FORMS_777_DATA } from './data/forms777Data';
import { evaluateFormEligibility, evaluateSchemeEligibility } from './utils/eligibility';
import { Header } from './components/Header';
import { EmergencyBanner } from './components/EmergencyBanner';
import { Forms777Catalog } from './components/Forms777Catalog';
import { DocumentSelector } from './components/DocumentSelector';
import { EligibleSchemesEngine } from './components/EligibleSchemesEngine';
import { PortalsDirectory } from './components/PortalsDirectory';
import { SchemeDetailModal } from './components/SchemeDetailModal';
import { PrintableChecklistModal } from './components/PrintableChecklistModal';
import { SecurityShieldModal } from './components/SecurityShieldModal';
import { FormLauncherModal } from './components/FormLauncherModal';
import { Footer } from './components/Footer';
import bannerImage from './assets/images/mahaseva_portal_banner_1791369349182.jpg';
import { 
  CheckCircle2, 
  ExternalLink, 
  Sparkles, 
  FileCheck2, 
  ShieldCheck, 
  Search, 
  ArrowRight,
  Printer,
  Building,
  HelpCircle,
  Clock,
  Smartphone,
  Lock,
  User,
  Calendar,
  CheckSquare
} from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('mr');
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'larger'>('normal');
  
  // Set forms777 as primary default tab so citizen immediately sees all 777 forms
  const [activeTab, setActiveTab] = useState<'checklist' | 'forms777' | 'schemes' | 'portals'>('forms777');

  // Citizen Demographics & Smart Parameters
  const [gender, setGender] = useState<Gender>('all');
  const [age, setAge] = useState<number | null>(null);
  const [annualIncome, setAnnualIncome] = useState<number | null>(null);
  const [casteCategory, setCasteCategory] = useState<CasteCategory>('all');
  const [isStudent, setIsStudent] = useState<boolean>(false);
  const [studentLevel, setStudentLevel] = useState<StudentLevel>('all');
  const [sscPercentage, setSscPercentage] = useState<number | null>(null);
  const [hscPercentage, setHscPercentage] = useState<number | null>(null);

  // Default initial documents: empty so all forms can be viewed freely without forced filtering
  const [selectedDocIds, setSelectedDocIds] = useState<string[]>([]);

  const [selectedSchemeDetail, setSelectedSchemeDetail] = useState<Scheme | null>(null);
  const [selectedFormForLauncher, setSelectedFormForLauncher] = useState<GovFormItem777 | null>(null);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState<boolean>(false);
  const [isSecurityModalOpen, setIsSecurityModalOpen] = useState<boolean>(false);
  const [directLineTrigger, setDirectLineTrigger] = useState<number>(0);

  const handleDirectViewAll = () => {
    setActiveTab('forms777');
    setDirectLineTrigger((prev) => prev + 1);
  };

  // Memoized citizen profile combining all demographic and academic/income parameters
  const citizenProfile: CitizenProfile = useMemo(() => ({
    gender,
    age,
    annualIncome,
    casteCategory,
    isStudent,
    studentLevel,
    sscPercentage,
    hscPercentage,
  }), [gender, age, annualIncome, casteCategory, isStudent, studentLevel, sscPercentage, hscPercentage]);

  // Live calculation of 777 forms eligibility based on Gender, Age, Income, Caste, Marks & Documents
  const eligibilityCounts = useMemo(() => {
    let eligible = 0;
    let almost = 0;
    let ineligible = 0;

    FORMS_777_DATA.forEach((form) => {
      const res = evaluateFormEligibility(form, citizenProfile, selectedDocIds);
      if (res.isEligible) eligible++;
      else if (res.isAlmostEligible) almost++;
      else ineligible++;
    });

    return { eligible, almost, ineligible };
  }, [citizenProfile, selectedDocIds]);

  // Compute 100% eligible schemes count
  const eligibleSchemesCount = useMemo(() => {
    return SCHEMES.filter((scheme) => {
      const res = evaluateSchemeEligibility(scheme, citizenProfile, selectedDocIds);
      return res.isEligible;
    }).length;
  }, [citizenProfile, selectedDocIds]);

  // Toggle single document
  const handleToggleDoc = (docId: string) => {
    setSelectedDocIds((prev) =>
      prev.includes(docId) ? prev.filter((id) => id !== docId) : [...prev, docId]
    );
  };

  // Select Common 5
  const handleSelectCommon = () => {
    const commonIds = DOCUMENTS.filter((d) => d.isCommon).map((d) => d.id);
    setSelectedDocIds(commonIds);
  };

  // Select All
  const handleSelectAll = () => {
    setSelectedDocIds(DOCUMENTS.map((d) => d.id));
  };

  // Clear All
  const handleClearAll = () => {
    setSelectedDocIds([]);
  };

  // Select Document Pack
  const handleSelectPack = (docIds: string[]) => {
    setSelectedDocIds((prev) => Array.from(new Set([...prev, ...docIds])));
  };

  // Font size classes
  const fontSizeClass =
    fontSize === 'larger'
      ? 'text-lg [&_h2]:text-2xl [&_h3]:text-xl'
      : fontSize === 'large'
      ? 'text-base [&_h2]:text-xl [&_h3]:text-lg'
      : 'text-sm';

  return (
    <div className={`min-h-screen bg-slate-50 flex flex-col ${fontSizeClass}`}>
      {/* Official Header */}
      <Header
        lang={lang}
        setLang={setLang}
        fontSize={fontSize}
        setFontSize={setFontSize}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenPrintModal={() => setIsPrintModalOpen(true)}
        onOpenSecurityModal={() => setIsSecurityModalOpen(true)}
        onDirectViewAll={handleDirectViewAll}
        selectedDocsCount={selectedDocIds.length}
        eligibleSchemesCount={eligibleSchemesCount}
        eligibleFormsCount={eligibilityCounts.eligible}
      />

      {/* Emergency Helpline Ribbon */}
      <EmergencyBanner lang={lang} />

      {/* Streamlined Compact Top Banner with Direct 777 View */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-3.5 px-4 sm:px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs bg-orange-600 text-white font-extrabold px-2.5 py-0.5 rounded-full font-mono">
                ७७७ फॉर्म्स
              </span>
              <h1 className="text-base sm:text-lg font-black text-white tracking-tight">
                {lang === 'mr'
                  ? 'भारतातील ७७७ मोबाईल-सुलभ अधिकृत फॉर्म्स (Form #001 ते #777)'
                  : '777 Verified Mobile Government Forms in India (Form #001 to #777)'}
              </h1>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">
              {lang === 'mr'
                ? 'फॉर्म १ पासून ७७७ पर्यंत सलग एका खाली एक उपलब्ध आहेत. कोणतीही माहिती न भरता थेट पहा.'
                : 'Forms 1 to 777 listed continuously row-by-row. Browse freely without entering personal info.'}
            </p>
          </div>

          {/* Quick Mode Switches including Direct View */}
          <div className="flex flex-wrap items-center gap-2 shrink-0 w-full md:w-auto">
            {/* USER REQUEST: "वरील एक थेट पहा ऑप्शन दे कोपऱ्यात एक गोल बाजूला छोटेसे ऑप्शन येतात केल्यानंतर 777 फॉर्म दिसतील" */}
            <button
              type="button"
              onClick={handleDirectViewAll}
              className="px-3.5 py-2 text-xs font-black rounded-lg transition-all cursor-pointer flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white shadow-md border border-amber-300/40"
              title="१ ते ७७७ लगातार सर्व फॉर्म्स थेट एका लाईनीत पहा"
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>{lang === 'mr' ? '⚡ थेट पहा (१ ते ७७७ लगातार)' : '⚡ Direct View (1-777)'}</span>
              <span className="w-5 h-5 rounded-full bg-slate-950 text-amber-300 font-mono text-[10px] font-black flex items-center justify-center border border-amber-400">
                777
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('checklist')}
              className={`px-3 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                activeTab === 'checklist'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700'
              }`}
            >
              <CheckSquare className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'mr' ? 'कागदपत्रे व वय निवडा' : 'Check Eligibility'}</span>
              {selectedDocIds.length > 0 && (
                <span className="bg-emerald-500 text-slate-950 text-[10px] px-1.5 py-0.2 rounded-full font-black">
                  {selectedDocIds.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex-1 w-full">
        {activeTab === 'checklist' && (
          <DocumentSelector
            lang={lang}
            selectedDocIds={selectedDocIds}
            onToggleDoc={handleToggleDoc}
            onSelectCommon={handleSelectCommon}
            onSelectAll={handleSelectAll}
            onClearAll={handleClearAll}
            onNavigateToSchemes={() => setActiveTab('schemes')}
            onNavigateToForms={() => setActiveTab('forms777')}
            gender={gender}
            setGender={setGender}
            age={age}
            setAge={setAge}
            annualIncome={annualIncome}
            setAnnualIncome={setAnnualIncome}
            casteCategory={casteCategory}
            setCasteCategory={setCasteCategory}
            isStudent={isStudent}
            setIsStudent={setIsStudent}
            studentLevel={studentLevel}
            setStudentLevel={setStudentLevel}
            sscPercentage={sscPercentage}
            setSscPercentage={setSscPercentage}
            hscPercentage={hscPercentage}
            setHscPercentage={setHscPercentage}
            onSelectPack={handleSelectPack}
            eligibleFormsCount={eligibilityCounts.eligible}
            almostFormsCount={eligibilityCounts.almost}
            ineligibleFormsCount={eligibilityCounts.ineligible}
            eligibleSchemesCount={eligibleSchemesCount}
          />
        )}

        {activeTab === 'forms777' && (
          <Forms777Catalog
            lang={lang}
            onOpenSecurityModal={() => setIsSecurityModalOpen(true)}
            gender={gender}
            age={age}
            selectedDocIds={selectedDocIds}
            onNavigateToChecklist={() => setActiveTab('checklist')}
            directLineTrigger={directLineTrigger}
            citizenProfile={citizenProfile}
          />
        )}

        {activeTab === 'schemes' && (
          <EligibleSchemesEngine
            lang={lang}
            selectedDocIds={selectedDocIds}
            onSelectSchemeDetail={(s) => setSelectedSchemeDetail(s)}
            onNavigateToChecklist={() => setActiveTab('checklist')}
          />
        )}

        {activeTab === 'portals' && <PortalsDirectory lang={lang} />}
      </main>

      {/* Scheme Detail Modal */}
      <SchemeDetailModal
        scheme={selectedSchemeDetail}
        lang={lang}
        selectedDocIds={selectedDocIds}
        onClose={() => setSelectedSchemeDetail(null)}
      />

      {/* Printable Checklist Modal */}
      <PrintableChecklistModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
        lang={lang}
        selectedDocIds={selectedDocIds}
      />

      {/* Security & Anti-Phishing Shield Modal */}
      <SecurityShieldModal
        isOpen={isSecurityModalOpen}
        onClose={() => setIsSecurityModalOpen(false)}
        lang={lang}
      />

      {/* Official Form Launcher Modal */}
      <FormLauncherModal
        form={selectedFormForLauncher}
        isOpen={!!selectedFormForLauncher}
        onClose={() => setSelectedFormForLauncher(null)}
        lang={lang}
      />

      {/* Footer */}
      <Footer lang={lang} />

      {/* Floating Corner Direct 777 Button (कोपऱ्यातील गोल थेट ७७७ ऑप्शन) */}
      {/* USER REQUEST: "कोपऱ्यात एक गोल बाजूला छोटेसे ऑप्शन येतात केल्यानंतर 777 फॉर्म दिसतील" */}
      <aside aria-label="Quick Access" className="fixed bottom-5 right-4 sm:right-6 z-40">
        <button
          type="button"
          onClick={handleDirectViewAll}
          className="group bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 hover:from-orange-500 hover:to-amber-500 text-white pl-4 pr-2 py-2.5 rounded-full shadow-2xl border-2 border-amber-300/80 hover:shadow-orange-500/30 transition-all duration-300 flex items-center gap-2.5 cursor-pointer hover:scale-105 active:scale-95 animate-pulse hover:animate-none"
          title="१ ते ७७७ लगातार सर्व फॉर्म्स थेट एका लाईनीत पहा"
        >
          <div className="flex flex-col text-left">
            <span className="text-xs font-black leading-tight tracking-tight flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-200" />
              <span>{lang === 'mr' ? 'थेट पहा' : 'Direct View'}</span>
            </span>
            <span className="text-[10px] text-amber-100 font-bold leading-none">
              {lang === 'mr' ? '१ ते ७७७ लगातार' : '1 to 777 in line'}
            </span>
          </div>
          {/* कोपऱ्यात गोल बॅज */}
          <span className="w-8 h-8 rounded-full bg-slate-950 text-amber-300 font-mono text-xs font-black flex items-center justify-center border-2 border-amber-400 shadow-md shrink-0 group-hover:rotate-12 transition-transform">
            777
          </span>
        </button>
      </aside>
    </div>
  );
}

