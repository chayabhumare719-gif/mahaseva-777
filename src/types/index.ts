export type Language = 'mr' | 'hi' | 'bn' | 'te' | 'ta' | 'gu' | 'ur' | 'en';

export type LocalizedString = {
  mr: string;
  en: string;
} & Partial<Record<Language, string>>;

export type LocalizedStringList = {
  mr: string[];
  en: string[];
} & Partial<Record<Language, string[]>>;

export type Gender = 'female' | 'male' | 'other' | 'all';

export type CasteCategory = 
  | 'all'
  | 'open'
  | 'obc'
  | 'sc'
  | 'st'
  | 'vjnt_a'
  | 'nt_b'
  | 'nt_c'
  | 'nt_d'
  | 'sbc'
  | 'ews';

export type StudentLevel = 
  | 'all' 
  | 'below_10th' // १० वी खालील विद्यार्थी (१ ली ते ९ वी / प्री-मॅट्रिक / शालेय)
  | 'above_10th' // १० वी वरील विद्यार्थी (१० वी, ११ वी, १२ वी, पदवी, डिप्लोमा / पोस्ट-मॅट्रिक)
  | 'not_student'; // विद्यार्थी नाही / सामान्य नागरिक

export interface CitizenProfile {
  gender: Gender;
  age: number | null;
  annualIncome?: number | null; // e.g. 100000
  casteCategory?: CasteCategory;
  isStudent?: boolean;
  studentLevel?: StudentLevel;
  sscPercentage?: number | null;
  hscPercentage?: number | null;
}

export type DocumentCategory = 
  | 'identity' 
  | 'residence' 
  | 'land_income' 
  | 'education' 
  | 'banking_misc';

export interface DocumentItem {
  id: string;
  name: LocalizedString;
  category: DocumentCategory;
  description: LocalizedString;
  whereToGet: LocalizedString;
  isCommon?: boolean;
}

export type SchemeCategory = 
  | 'women_child'
  | 'farmer'
  | 'social_welfare'
  | 'education'
  | 'housing'
  | 'citizen_services'
  | 'labour'
  | 'health';

export interface Scheme {
  id: string;
  name: LocalizedString;
  department: LocalizedString;
  category: SchemeCategory;
  benefit: LocalizedString;
  brief: LocalizedString;
  targetGroup: LocalizedString;
  targetGender?: 'all' | 'female' | 'male';
  minAge?: number;
  maxAge?: number;
  requiredDocIds: string[];
  optionalDocIds?: string[];
  officialUrl: string;
  officialPortalName: string;
  fees: LocalizedString;
  helpline?: string;
  steps: LocalizedStringList;
}

export type PortalCategory = 
  | 'all'
  | 'revenue_land'
  | 'agriculture'
  | 'identity_cards'
  | 'scholarship_edu'
  | 'welfare_women'
  | 'health'
  | 'transport'
  | 'housing'
  | 'labour_employment';

export interface PortalDirectoryItem {
  id: string;
  name: LocalizedString;
  category: PortalCategory;
  dept: LocalizedString;
  description: LocalizedString;
  url: string;
  badge?: string;
  popularServices: LocalizedStringList;
}

export interface GovFormItem777 {
  formNumber: number; // 1 to 777
  id: string;
  name: LocalizedString;
  department: LocalizedString;
  categoryKey: string;
  categoryLabel: LocalizedString;
  isMobileFriendly: boolean;
  mobileMethod: LocalizedString;
  officialUrl: string;
  portalName: string;
  fees: LocalizedString;
  benefitOrPurpose: LocalizedString;
  targetGender?: 'all' | 'female' | 'male';
  minAge?: number;
  maxAge?: number;
  requiredDocs: string[];
  domainCertified: boolean;
  securityHash: string;
}

export type Form777Item = GovFormItem777;

