import React, { useState, useMemo } from 'react';
import { Language, PortalCategory } from '../types';
import { OFFICIAL_PORTALS, PORTAL_CATEGORIES } from '../data/portalsData';
import {
  Search,
  ExternalLink,
  Globe,
  Building2,
  CheckCircle,
  Tag,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface PortalsDirectoryProps {
  lang: Language;
}

export const PortalsDirectory: React.FC<PortalsDirectoryProps> = ({ lang }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<PortalCategory>('all');

  const filteredPortals = useMemo(() => {
    return OFFICIAL_PORTALS.filter((portal) => {
      // 1. Category filter
      if (selectedCategory !== 'all' && portal.category !== selectedCategory) {
        return false;
      }

      // 2. Search query (Marathi & English bilingual instant filter)
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const nameMr = portal.name.mr.toLowerCase();
        const nameEn = portal.name.en.toLowerCase();
        const deptMr = portal.dept.mr.toLowerCase();
        const deptEn = portal.dept.en.toLowerCase();
        const descMr = portal.description.mr.toLowerCase();
        const descEn = portal.description.en.toLowerCase();
        const url = portal.url.toLowerCase();

        const matchServices =
          portal.popularServices.mr.some((s) => s.toLowerCase().includes(q)) ||
          portal.popularServices.en.some((s) => s.toLowerCase().includes(q));

        return (
          nameMr.includes(q) ||
          nameEn.includes(q) ||
          deptMr.includes(q) ||
          deptEn.includes(q) ||
          descMr.includes(q) ||
          descEn.includes(q) ||
          url.includes(q) ||
          matchServices
        );
      }

      return true;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="space-y-6">
      {/* Top Search & Filter Bar */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-sm">
                ३
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                {lang === 'mr' ? 'अधिकृत शासकीय वेबसाईट्स व पोर्टल्स संचिका' : 'Official Government Portals Directory'}
              </h2>
            </div>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              {lang === 'mr'
                ? 'महाराष्ट्र व केंद्र शासनाचे ५०+ अधिकृत व सुरक्षित वेब पोर्टल्स. मराठी अथवा इंग्रजी शब्दाने तात्काळ शोधा.'
                : 'Direct access to 50+ authentic and secure government websites. Instant bilingual search.'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
              {lang === 'mr' ? 'एकूण पोर्टल्स:' : 'Total Portals:'}
            </span>
            <span className="text-sm font-extrabold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200 tabular-nums">
              {filteredPortals.length} / {OFFICIAL_PORTALS.length}
            </span>
          </div>
        </div>

        {/* Big Search Input */}
        <div className="mt-4 relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              lang === 'mr'
                ? 'पोर्टलचे नाव, सेवा किंवा शब्द शोधा (उदा. सातबारा, रेशन, महाडीबीटी, शिष्यवृत्ती, आधार, बस सवलत, ड्रायव्हिंग...)'
                : 'Search portal name, service or keyword (e.g. 7/12, ration, mahaDBT, scholarship, aadhaar, bus...)'
            }
            className="w-full pl-11 pr-4 py-2.5 text-sm sm:text-base bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white text-slate-900 shadow-2xs"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-700 bg-slate-200 rounded px-1.5 py-0.5"
            >
              Clear
            </button>
          )}
        </div>

        {/* Categories Strip */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto pb-1">
          <span className="text-xs font-bold text-slate-500 shrink-0 mr-1">
            {lang === 'mr' ? 'विभाग:' : 'Category:'}
          </span>
          {PORTAL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white font-bold shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.title[lang]}
            </button>
          ))}
        </div>
      </div>

      {/* Portals Cards Grid */}
      {filteredPortals.length === 0 ? (
        <div className="bg-white rounded-xl p-8 border border-slate-200 text-center space-y-3">
          <Globe className="w-10 h-10 text-slate-400 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">
            {lang === 'mr' ? 'कोणतेही शासकीय पोर्टल आढळले नाही' : 'No government portal matched your search'}
          </h3>
          <p className="text-xs text-slate-500">
            {lang === 'mr'
              ? 'कृपया शोध शब्द तपासा किंवा वेगळ्या वर्गात शोधा.'
              : 'Please check your search term or reset the category filter.'}
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg"
          >
            {lang === 'mr' ? 'सर्व पोर्टल्स दाखवा' : 'Show All Portals'}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPortals.map((portal) => (
            <div
              key={portal.id}
              className="bg-white rounded-xl border border-slate-200 p-4.5 flex flex-col justify-between hover:border-slate-300 hover:shadow-xs transition-all"
            >
              <div>
                {/* Header Tag & Domain */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    {portal.badge || (lang === 'mr' ? 'अधिकृत पोर्टल' : 'Official Portal')}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 truncate max-w-[130px]">
                    {new URL(portal.url).hostname}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {portal.name[lang]}
                </h3>

                {/* Department */}
                <div className="text-xs text-slate-500 font-medium mt-0.5 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{portal.dept[lang]}</span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 mt-2.5 line-clamp-2 leading-relaxed">
                  {portal.description[lang]}
                </p>

                {/* Popular Services Tags */}
                <div className="mt-3.5 pt-2.5 border-t border-slate-100">
                  <div className="text-[11px] font-semibold text-slate-500 mb-1.5 flex items-center gap-1">
                    <Tag className="w-3 h-3 text-slate-400" />
                    <span>{lang === 'mr' ? 'प्रमुख सेवा:' : 'Key Services:'}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {portal.popularServices[lang].slice(0, 3).map((serv, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded font-medium"
                      >
                        {serv}
                      </span>
                    ))}
                    {portal.popularServices[lang].length > 3 && (
                      <span className="text-[10px] text-slate-400 self-center">
                        +{portal.popularServices[lang].length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-4 pt-3 border-t border-slate-100 space-y-1">
                <a
                  href={portal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between px-3.5 py-2 text-xs font-bold text-slate-900 bg-slate-50 hover:bg-orange-50 hover:text-orange-900 hover:border-orange-300 border border-slate-200 rounded-lg transition-colors cursor-pointer"
                  title={lang === 'mr' ? 'क्रोम ब्राऊझरच्या नवीन सुरक्षित टॅबमध्ये उघडेल' : 'Opens in Chrome browser tab'}
                >
                  <span>{lang === 'mr' ? 'क्रोममध्ये अधिकृत पोर्टल उघडा' : 'Open in Chrome'}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
                <div className="text-[10px] text-slate-500 text-center">
                  {lang === 'mr' ? '↗ नवीन सुरक्षित टॅबमध्ये थेट उघडेल' : '↗ Opens directly in new secure tab'}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
