export type Language = 'mr' | 'en';

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
  name: {
    mr: string;
    en: string;
  };
  category: DocumentCategory;
  description: {
    mr: string;
    en: string;
  };
  whereToGet: {
    mr: string;
    en: string;
  };
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
  name: {
    mr: string;
    en: string;
  };
  department: {
    mr: string;
    en: string;
  };
  category: SchemeCategory;
  benefit: {
    mr: string;
    en: string;
  };
  brief: {
    mr: string;
    en: string;
  };
  targetGroup: {
    mr: string;
    en: string;
  };
  targetGender?: 'all' | 'female' | 'male';
  minAge?: number;
  maxAge?: number;
  requiredDocIds: string[];
  optionalDocIds?: string[];
  officialUrl: string;
  officialPortalName: string;
  fees: {
    mr: string;
    en: string;
  };
  helpline?: string;
  steps: {
    mr: string[];
    en: string[];
  };
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
  name: {
    mr: string;
    en: string;
  };
  category: PortalCategory;
  dept: {
    mr: string;
    en: string;
  };
  description: {
    mr: string;
    en: string;
  };
  url: string;
  badge?: string;
  popularServices: {
    mr: string[];
    en: string[];
  };
}

export interface GovFormItem777 {
  formNumber: number; // 1 to 777
  id: string;
  name: {
    mr: string;
    en: string;
  };
  department: {
    mr: string;
    en: string;
  };
  categoryKey: string;
  categoryLabel: {
    mr: string;
    en: string;
  };
  isMobileFriendly: boolean;
  mobileMethod: {
    mr: string;
    en: string;
  };
  officialUrl: string;
  portalName: string;
  fees: {
    mr: string;
    en: string;
  };
  benefitOrPurpose: {
    mr: string;
    en: string;
  };
  targetGender?: 'all' | 'female' | 'male';
  minAge?: number;
  maxAge?: number;
  requiredDocs: string[];
  domainCertified: boolean;
  securityHash: string;
}

export type Form777Item = GovFormItem777;

