import { GovFormItem777, Scheme, CitizenProfile } from '../types';

export interface EligibilityEvaluation {
  isEligible: boolean;
  isAlmostEligible: boolean; // 1 or 2 docs missing
  isIneligible: boolean;
  missingDocIds: string[];
  possessedDocIds: string[];
  smartSubstitutedDocIds?: string[];
  reason?: {
    mr: string;
    en: string;
  };
}

/**
 * Resolves effective documents considering smart substitution rules:
 * 1. If citizen has Leaving Certificate (school_leaving_cert or leaving_certificate):
 *    - Automatically satisfies schooling & date-of-birth proof, so bonafide_cert and student_id requirements are fulfilled!
 * 2. If citizen has ssc_marksheet or hsc_marksheet or degree_diploma:
 *    - Automatically satisfies marksheet requirement!
 */
export function resolveEffectiveDocuments(selectedDocIds: string[]): {
  effectiveSet: Set<string>;
  substitutedMap: Map<string, string>; // missingDoc -> substitutedBy
} {
  const effectiveSet = new Set<string>(selectedDocIds);
  const substitutedMap = new Map<string, string>();

  const hasLeavingCert =
    selectedDocIds.includes('school_leaving_cert') ||
    selectedDocIds.includes('leaving_certificate');

  const hasBonafide =
    selectedDocIds.includes('bonafide_cert') ||
    selectedDocIds.includes('student_id');

  const hasSsc = selectedDocIds.includes('ssc_marksheet');
  const hasHsc = selectedDocIds.includes('hsc_marksheet');
  const hasDegree = selectedDocIds.includes('degree_diploma');

  // Rule 1: LC replaces Bonafide Certificate & Student ID
  // (जर त्याने शाळा सोडल्याचा दाखला दिला तर बोनाफाईडची गरज नाही!)
  if (hasLeavingCert) {
    if (!effectiveSet.has('bonafide_cert')) {
      effectiveSet.add('bonafide_cert');
      substitutedMap.set('bonafide_cert', 'school_leaving_cert');
    }
    if (!effectiveSet.has('student_id')) {
      effectiveSet.add('student_id');
      substitutedMap.set('student_id', 'school_leaving_cert');
    }
  }

  // Rule 2: Specific marksheets satisfy generic 'marksheet'
  if (hasSsc || hasHsc || hasDegree) {
    if (!effectiveSet.has('marksheet')) {
      effectiveSet.add('marksheet');
      substitutedMap.set('marksheet', hasSsc ? 'ssc_marksheet' : hasHsc ? 'hsc_marksheet' : 'degree_diploma');
    }
  }

  // Rule 3: Domicile replaces basic residence proof
  if (selectedDocIds.includes('domicile') && !effectiveSet.has('residence_proof')) {
    effectiveSet.add('residence_proof');
  }

  return { effectiveSet, substitutedMap };
}

/**
 * Infers income limit for a form or scheme
 */
function getFormIncomeLimit(name: string, dept: string): number | null {
  const text = (name + ' ' + dept).toLowerCase();
  if (text.includes('निराधार') || text.includes('श्रावण बाळ') || text.includes('संजय गांधी')) {
    return 50000; // ₹50,000 for destitute pensions
  }
  if (text.includes('लाडकी बहीण') || text.includes('लेक लाडकी')) {
    return 250000; // ₹2.5 Lakhs
  }
  if (text.includes('रमाई') || text.includes('शबरी') || text.includes('घरकुल') || text.includes('आवास')) {
    return 150000; // ₹1.5 Lakhs
  }
  if (text.includes('स्कॉलरशिप') || text.includes('शिष्यवृत्ती') || text.includes('mahadbt')) {
    return 250000; // ₹2.5 Lakhs for primary scholarship
  }
  if (text.includes('ews') || text.includes('नॉन-क्रिमिलेअर') || text.includes('non creamy')) {
    return 800000; // ₹8 Lakhs
  }
  return null;
}

/**
 * Infers caste requirement for a form
 */
function getFormCasteRequirement(name: string, dept: string): 'sc' | 'st' | 'obc' | 'vjnt' | 'ews' | null {
  const text = (name + ' ' + dept).toLowerCase();
  if (text.includes('रमाई') || text.includes('स्वाधार') || text.includes('अनुसूचित जाती') || text.includes('barti')) {
    return 'sc';
  }
  if (text.includes('शबरी') || text.includes('आदिवासी') || text.includes('अनुसूचित जमाती') || text.includes('बिरसा मुंडा') || text.includes('trti')) {
    return 'st';
  }
  if (text.includes('ओबीसी') || text.includes('इतर मागास') || text.includes('महाज्योती')) {
    return 'obc';
  }
  if (text.includes('विमुक्त जाती') || text.includes('भटक्या जमाती') || text.includes('धनगर') || text.includes('वसंतराव नाईक')) {
    return 'vjnt';
  }
  if (text.includes('सारथी') || text.includes('अमृत') || text.includes('ईडब्ल्यूएस') || text.includes('आर्थिक दुर्बल')) {
    return 'ews';
  }
  return null;
}

/**
 * Evaluates whether a citizen is eligible for a 777 Government Form
 */
export function evaluateFormEligibility(
  form: GovFormItem777,
  profile: CitizenProfile,
  selectedDocIds: string[]
): EligibilityEvaluation {
  const { effectiveSet, substitutedMap } = resolveEffectiveDocuments(selectedDocIds);

  const missingDocIds = form.requiredDocs.filter((id) => !effectiveSet.has(id));
  const possessedDocIds = form.requiredDocs.filter((id) => effectiveSet.has(id));
  const smartSubstitutedDocIds = form.requiredDocs.filter((id) => substitutedMap.has(id));

  // 1. Gender check
  const formTargetGender =
    form.targetGender ||
    (form.categoryKey === 'women_child' ? 'female' : 'all');

  if (
    profile.gender !== 'all' &&
    profile.gender !== 'other' &&
    formTargetGender !== 'all' &&
    formTargetGender !== profile.gender
  ) {
    return {
      isEligible: false,
      isAlmostEligible: false,
      isIneligible: true,
      missingDocIds,
      possessedDocIds,
      smartSubstitutedDocIds,
      reason: {
        mr: formTargetGender === 'female' ? 'केवळ महिलांसाठी पात्र (लिंग जुळत नाही)' : 'केवळ पुरुषांसाठी पात्र (लिंग जुळत नाही)',
        en: formTargetGender === 'female' ? 'For Female applicants only' : 'For Male applicants only',
      },
    };
  }

  // 2. Age check
  let minAge = form.minAge;
  let maxAge = form.maxAge;

  if (minAge === undefined) {
    if (form.categoryKey === 'women_child' && form.name.mr.includes('लाडकी बहीण')) {
      minAge = 21;
      maxAge = 65;
    } else if (form.name.mr.includes('ज्येष्ठ नागरिक') || form.name.mr.includes('अमृत')) {
      minAge = 65;
    } else if (form.name.mr.includes('पेन्शन') || form.name.mr.includes('श्रावण बाळ') || form.name.mr.includes('इंदिरा गांधी')) {
      minAge = 65;
    }
  }

  if (profile.age !== null) {
    if (minAge && profile.age < minAge) {
      return {
        isEligible: false,
        isAlmostEligible: false,
        isIneligible: true,
        missingDocIds,
        possessedDocIds,
        smartSubstitutedDocIds,
        reason: {
          mr: `किमान वय ${minAge} वर्षे आवश्यक (तुमचे वय ${profile.age} वर्षे आहे)`,
          en: `Minimum age ${minAge} required (Your age is ${profile.age})`,
        },
      };
    }

    if (maxAge && profile.age > maxAge) {
      return {
        isEligible: false,
        isAlmostEligible: false,
        isIneligible: true,
        missingDocIds,
        possessedDocIds,
        smartSubstitutedDocIds,
        reason: {
          mr: `कमाल वय ${maxAge} वर्षे असणे आवश्यक (वयोमर्यादा संपली)`,
          en: `Maximum age ${maxAge} limit exceeded`,
        },
      };
    }
  }

  // 3. Annual Income Check (उत्पन्नाचा दाखला व मर्यादा तपासणी)
  if (profile.annualIncome !== undefined && profile.annualIncome !== null) {
    const incomeLimit = getFormIncomeLimit(form.name.mr, form.department.mr);
    if (incomeLimit !== null && profile.annualIncome > incomeLimit) {
      return {
        isEligible: false,
        isAlmostEligible: false,
        isIneligible: true,
        missingDocIds,
        possessedDocIds,
        smartSubstitutedDocIds,
        reason: {
          mr: `वार्षिक उत्पन्न मर्यादा (कमाल ₹${incomeLimit.toLocaleString('en-IN')}) पेक्षा जास्त आहे`,
          en: `Annual income exceeds limit of ₹${incomeLimit.toLocaleString('en-IN')}`,
        },
      };
    }
  }

  // 4. Caste Category Check (जात प्रवर्ग तपासणी)
  if (profile.casteCategory && profile.casteCategory !== 'all') {
    const casteReq = getFormCasteRequirement(form.name.mr, form.department.mr);
    if (casteReq) {
      const userCaste = profile.casteCategory;
      const isCasteMatch =
        (casteReq === 'sc' && userCaste === 'sc') ||
        (casteReq === 'st' && userCaste === 'st') ||
        (casteReq === 'obc' && (userCaste === 'obc' || userCaste === 'sbc')) ||
        (casteReq === 'vjnt' && (userCaste === 'vjnt_a' || userCaste === 'nt_b' || userCaste === 'nt_c' || userCaste === 'nt_d')) ||
        (casteReq === 'ews' && (userCaste === 'ews' || userCaste === 'open'));

      if (!isCasteMatch) {
        return {
          isEligible: false,
          isAlmostEligible: false,
          isIneligible: true,
          missingDocIds,
          possessedDocIds,
          smartSubstitutedDocIds,
          reason: {
            mr: `केवळ ${casteReq.toUpperCase()} प्रवर्गासाठी आरक्षित योजना`,
            en: `Reserved for ${casteReq.toUpperCase()} category applicants`,
          },
        };
      }
    }
  }

  // 5. Marks / Percentage & Student Level Check (दहावी खालील vs दहावी वरील विद्यार्थी)
  if (profile.studentLevel === 'below_10th') {
    const formTitle = (form.name.mr + ' ' + form.benefitOrPurpose.mr).toLowerCase();
    const isPostMatricSpecific =
      formTitle.includes('पोस्ट-मॅट्रिक') ||
      formTitle.includes('महाविद्यालय') ||
      formTitle.includes('mht-cet') ||
      formTitle.includes('इंजिनिअरिंग') ||
      formTitle.includes('पदवी') ||
      formTitle.includes('डिप्लोमा') ||
      formTitle.includes('विद्यावेतन') ||
      formTitle.includes('फेलोशिप') ||
      formTitle.includes('स्पर्धा परीक्षा');

    if (isPostMatricSpecific) {
      return {
        isEligible: false,
        isAlmostEligible: false,
        isIneligible: true,
        missingDocIds,
        possessedDocIds,
        smartSubstitutedDocIds,
        reason: {
          mr: 'हा फॉर्म १० वी वरील (उच्च शिक्षण/महाविद्यालयीन) विद्यार्थ्यांसाठी आहे',
          en: 'This form is for post-matric (above 10th) students only',
        },
      };
    }
  } else if (profile.studentLevel === 'above_10th') {
    const formTitle = (form.name.mr + ' ' + form.benefitOrPurpose.mr).toLowerCase();
    const isPreMatricSpecific =
      formTitle.includes('प्री-मॅट्रिक') ||
      formTitle.includes('प्राथमिक शाळा') ||
      formTitle.includes('पहिली ते आठवी');

    if (isPreMatricSpecific) {
      return {
        isEligible: false,
        isAlmostEligible: false,
        isIneligible: true,
        missingDocIds,
        possessedDocIds,
        smartSubstitutedDocIds,
        reason: {
          mr: 'हा फॉर्म १० वी खालील (शालेय/प्री-मॅट्रिक) विद्यार्थ्यांसाठी आहे',
          en: 'This form is for school (below 10th) students only',
        },
      };
    }

    // Check marks if specified
    if (form.categoryKey === 'education' && profile.sscPercentage !== undefined && profile.sscPercentage !== null) {
      if (form.name.mr.includes('शिष्यवृत्ती') || form.name.mr.includes('प्रवेश')) {
        if (profile.sscPercentage < 50) {
          return {
            isEligible: false,
            isAlmostEligible: false,
            isIneligible: true,
            missingDocIds,
            possessedDocIds,
            smartSubstitutedDocIds,
            reason: {
              mr: `किमान ५०% गुण आवश्यक (तुमचे गुण ${profile.sscPercentage}% आहेत)`,
              en: `Minimum 50% marks required (Your score is ${profile.sscPercentage}%)`,
            },
          };
        }
      }
    }
  } else if (form.categoryKey === 'education' && profile.sscPercentage !== undefined && profile.sscPercentage !== null) {
    if (form.name.mr.includes('शिष्यवृत्ती') || form.name.mr.includes('प्रवेश')) {
      if (profile.sscPercentage < 50) {
        return {
          isEligible: false,
          isAlmostEligible: false,
          isIneligible: true,
          missingDocIds,
          possessedDocIds,
          smartSubstitutedDocIds,
          reason: {
            mr: `किमान ५०% गुण आवश्यक (तुमचे गुण ${profile.sscPercentage}% आहेत)`,
            en: `Minimum 50% marks required (Your score is ${profile.sscPercentage}%)`,
          },
        };
      }
    }
  }

  // 6. Document check
  if (missingDocIds.length === 0) {
    return {
      isEligible: true,
      isAlmostEligible: false,
      isIneligible: false,
      missingDocIds: [],
      possessedDocIds,
      smartSubstitutedDocIds,
    };
  }

  if (missingDocIds.length <= 2) {
    return {
      isEligible: false,
      isAlmostEligible: true,
      isIneligible: false,
      missingDocIds,
      possessedDocIds,
      smartSubstitutedDocIds,
      reason: {
        mr: `फक्त ${missingDocIds.length} कागदपत्र कमी आहे`,
        en: `Only ${missingDocIds.length} document(s) missing`,
      },
    };
  }

  return {
    isEligible: false,
    isAlmostEligible: false,
    isIneligible: true,
    missingDocIds,
    possessedDocIds,
    smartSubstitutedDocIds,
    reason: {
      mr: `${missingDocIds.length} कागदपत्रे आवश्यक आहेत`,
      en: `${missingDocIds.length} documents missing`,
    },
  };
}

/**
 * Evaluates whether a citizen is eligible for a Welfare Scheme
 */
export function evaluateSchemeEligibility(
  scheme: Scheme,
  profile: CitizenProfile,
  selectedDocIds: string[]
): EligibilityEvaluation {
  const { effectiveSet, substitutedMap } = resolveEffectiveDocuments(selectedDocIds);

  const missingDocIds = scheme.requiredDocIds.filter((id) => !effectiveSet.has(id));
  const possessedDocIds = scheme.requiredDocIds.filter((id) => effectiveSet.has(id));
  const smartSubstitutedDocIds = scheme.requiredDocIds.filter((id) => substitutedMap.has(id));

  // 1. Gender check
  const schemeTargetGender =
    scheme.targetGender ||
    (scheme.id === 'ladki_bahin' || scheme.id === 'msrtc_mahila_sanman' ? 'female' : 'all');

  if (
    profile.gender !== 'all' &&
    profile.gender !== 'other' &&
    schemeTargetGender !== 'all' &&
    schemeTargetGender !== profile.gender
  ) {
    return {
      isEligible: false,
      isAlmostEligible: false,
      isIneligible: true,
      missingDocIds,
      possessedDocIds,
      smartSubstitutedDocIds,
      reason: {
        mr: 'केवळ महिला अर्जदारांसाठी पात्र',
        en: 'For Female applicants only',
      },
    };
  }

  // 2. Age check
  let minAge = scheme.minAge;
  let maxAge = scheme.maxAge;

  if (scheme.id === 'ladki_bahin') {
    minAge = 21;
    maxAge = 65;
  } else if (scheme.id === 'msrtc_amrut_jyeshtha') {
    minAge = 65;
  } else if (scheme.id === 'mahadbt_scholarship') {
    minAge = 15;
    maxAge = 35;

    // Student level validation for post-matric scholarship
    if (profile.studentLevel === 'below_10th') {
      return {
        isEligible: false,
        isAlmostEligible: false,
        isIneligible: true,
        missingDocIds,
        possessedDocIds,
        smartSubstitutedDocIds,
        reason: {
          mr: 'महाडीबीटी पोस्ट-मॅट्रिक शिष्यवृत्ती १० वी पुढील (उच्च शिक्षण) विद्यार्थ्यांसाठी आहे. १० वी खालील विद्यार्थ्यांसाठी शालेय प्री-मॅट्रिक योजना लागू होते.',
          en: 'MahaDBT Post-Matric is for students above 10th standard.',
        },
      };
    }
    if (profile.studentLevel === 'not_student') {
      return {
        isEligible: false,
        isAlmostEligible: false,
        isIneligible: true,
        missingDocIds,
        possessedDocIds,
        smartSubstitutedDocIds,
        reason: {
          mr: 'ही शिष्यवृत्ती केवळ चालू विद्यार्थ्यांसाठी आहे (विद्यार्थी पर्याय निवडा)',
          en: 'This scholarship is exclusively for current students',
        },
      };
    }
  }

  if (profile.age !== null) {
    if (minAge && profile.age < minAge) {
      return {
        isEligible: false,
        isAlmostEligible: false,
        isIneligible: true,
        missingDocIds,
        possessedDocIds,
        smartSubstitutedDocIds,
        reason: {
          mr: `किमान वय ${minAge} वर्षे आवश्यक`,
          en: `Minimum age ${minAge} required`,
        },
      };
    }

    if (maxAge && profile.age > maxAge) {
      return {
        isEligible: false,
        isAlmostEligible: false,
        isIneligible: true,
        missingDocIds,
        possessedDocIds,
        smartSubstitutedDocIds,
        reason: {
          mr: `कमाल वय ${maxAge} वर्षे असणे आवश्यक`,
          en: `Maximum age ${maxAge} exceeded`,
        },
      };
    }
  }

  // 3. Annual Income Check
  if (profile.annualIncome !== undefined && profile.annualIncome !== null) {
    let incomeCeiling: number | null = null;
    if (scheme.id === 'ladki_bahin') incomeCeiling = 250000;
    else if (scheme.id === 'sanjay_gandhi_niradhar' || scheme.id === 'shravan_bal') incomeCeiling = 50000;
    else if (scheme.id === 'mahadbt_scholarship') incomeCeiling = 250000;

    if (incomeCeiling !== null && profile.annualIncome > incomeCeiling) {
      return {
        isEligible: false,
        isAlmostEligible: false,
        isIneligible: true,
        missingDocIds,
        possessedDocIds,
        smartSubstitutedDocIds,
        reason: {
          mr: `वार्षिक उत्पन्न मर्यादा (कमाल ₹${incomeCeiling.toLocaleString('en-IN')}) पेक्षा जास्त आहे`,
          en: `Annual income limit ₹${incomeCeiling.toLocaleString('en-IN')} exceeded`,
        },
      };
    }
  }

  // 4. Caste Category Check
  if (profile.casteCategory && profile.casteCategory !== 'all') {
    if (scheme.id === 'ramai_gharkul' && profile.casteCategory !== 'sc') {
      return {
        isEligible: false,
        isAlmostEligible: false,
        isIneligible: true,
        missingDocIds,
        possessedDocIds,
        smartSubstitutedDocIds,
        reason: {
          mr: 'रमाई घरकुल योजना केवळ अनुसूचित जाती (SC) प्रवर्गासाठी आहे',
          en: 'Ramai Gharkul scheme is exclusively for SC category',
        },
      };
    }
    if (scheme.id === 'shabari_gharkul' && profile.casteCategory !== 'st') {
      return {
        isEligible: false,
        isAlmostEligible: false,
        isIneligible: true,
        missingDocIds,
        possessedDocIds,
        smartSubstitutedDocIds,
        reason: {
          mr: 'शबरी घरकुल योजना केवळ अनुसूचित जमाती (ST) प्रवर्गासाठी आहे',
          en: 'Shabari Gharkul scheme is exclusively for ST category',
        },
      };
    }
  }

  // 5. Document check
  if (missingDocIds.length === 0) {
    return {
      isEligible: true,
      isAlmostEligible: false,
      isIneligible: false,
      missingDocIds: [],
      possessedDocIds,
      smartSubstitutedDocIds,
    };
  }

  if (missingDocIds.length <= 2) {
    return {
      isEligible: false,
      isAlmostEligible: true,
      isIneligible: false,
      missingDocIds,
      possessedDocIds,
      smartSubstitutedDocIds,
      reason: {
        mr: `फक्त ${missingDocIds.length} कागदपत्र बाकी`,
        en: `Only ${missingDocIds.length} doc missing`,
      },
    };
  }

  return {
    isEligible: false,
    isAlmostEligible: false,
    isIneligible: true,
    missingDocIds,
    possessedDocIds,
    smartSubstitutedDocIds,
    reason: {
      mr: `${missingDocIds.length} कागदपत्रे अपुरी`,
      en: `${missingDocIds.length} docs missing`,
    },
  };
}
