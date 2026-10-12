import { Scheme, SchemeCategory } from '../types';

export const SCHEME_CATEGORIES: { id: SchemeCategory | 'all'; title: { mr: string; en: string } }[] = [
  { id: 'all', title: { mr: 'सर्व योजना (All Schemes)', en: 'All Schemes' } },
  { id: 'women_child', title: { mr: 'महिला व बालविकास (Women & Child)', en: 'Women & Child' } },
  { id: 'farmer', title: { mr: 'शेतकरी व कृषी कल्याण (Farmers)', en: 'Farmers & Agri' } },
  { id: 'education', title: { mr: 'विद्यार्थी व शिष्यवृत्ती (Education)', en: 'Education & Students' } },
  { id: 'citizen_services', title: { mr: 'महसूल व नागरिक सेवा (Revenue & Services)', en: 'Revenue & Services' } },
  { id: 'housing', title: { mr: 'घरकुल व वीज योजना (Housing & Energy)', en: 'Housing & Energy' } },
  { id: 'labour', title: { mr: 'कामगार व रोजगार (Labour & Jobs)', en: 'Labour & Employment' } },
  { id: 'social_welfare', title: { mr: 'सामाजिक न्याय व पेन्शन (Social Welfare)', en: 'Social Welfare & Pension' } },
  { id: 'health', title: { mr: 'आरोग्य व उपचार (Health & Care)', en: 'Health & Care' } }
];

export const SCHEMES: Scheme[] = [
  {
    id: 'ladki_bahin',
    name: {
      mr: 'मुख्यमंत्री माझी लाडकी बहीण योजना',
      en: 'Mukhyamantri Majhi Ladki Bahin Yojana'
    },
    department: {
      mr: 'महिला व बालविकास विभाग, महाराष्ट्र शासन',
      en: 'Women & Child Development Dept, Govt of Maharashtra'
    },
    category: 'women_child',
    benefit: {
      mr: 'दरमहा ₹1,500 थेट बँक खात्यात (वार्षिक ₹18,000 DBT)',
      en: '₹1,500/month direct DBT into bank account (₹18,000 annually)'
    },
    brief: {
      mr: 'महाराष्ट्रातील २१ ते ६५ वयोगटातील पात्र महिलांच्या आर्थिक सक्षमीकरणासाठी थेट आर्थिक मदत देणारी महत्त्वपूर्ण योजना.',
      en: 'State empowerment scheme providing direct cash assistance to eligible women aged 21-65 in Maharashtra.'
    },
    targetGroup: {
      mr: '२१ ते ६५ वयोगटातील विवाहित, विधवा, घटस्फोटित, परित्यक्ता व निराधार महिला (कुटुंबाचे उत्पन्न ₹2.5 लाखांपेक्षा कमी)',
      en: 'Women aged 21-65 years with annual family income below ₹2.5 Lakh'
    },
    requiredDocIds: ['aadhaar', 'bank_passbook', 'ration_card', 'income_certificate', 'passport_photo'],
    optionalDocIds: ['domicile', 'voter_id'],
    officialUrl: 'https://ladakibahin.maharashtra.gov.in',
    officialPortalName: 'ladakibahin.maharashtra.gov.in / Nari Shakti Doot',
    fees: { mr: 'पूर्णपणे मोफत (Zero Fee)', en: 'Completely Free (Zero Fee)' },
    helpline: '181 / 1800-120-8040',
    steps: {
      mr: [
        'अधिकृत पोर्टल ladakibahin.maharashtra.gov.in उघडा किंवा "नारीशक्ती दूत" ॲप डाऊनलोड करा.',
        'मोबाईल नंबर व आधार प्रमाणीकरण करून OTP द्वारे नवीन नागरिक नोंदणी करा.',
        'अर्जदार महिलेची माहिती, आधार क्रमांक, पत्ता व बँक खाते (Aadhaar Seeded) भरा.',
        'कागदपत्रे (आधार कार्ड, बँक पासबुक, रेशन कार्ड, उत्पन्नाचा दाखला) स्कॅन करून अपलोड करा.',
        'अर्ज तपासून सबमिट करा व पावती सुरक्षित डाऊनलोड करून ठेवा.'
      ],
      en: [
        'Open official portal ladakibahin.maharashtra.gov.in or install official mobile app.',
        'Register using Mobile Number and Aadhaar OTP verification.',
        'Enter applicant details, Aadhaar number, address, and Aadhaar-seeded bank account.',
        'Upload required scanned documents (Aadhaar, passbook, ration card, income certificate).',
        'Review and submit the application; download the acknowledgement receipt.'
      ]
    }
  },
  {
    id: 'pm_kisan',
    name: {
      mr: 'पीएम किसान सन्मान निधी योजना',
      en: 'PM Kisan Samman Nidhi Yojana'
    },
    department: {
      mr: 'कृषी व शेतकरी कल्याण मंत्रालय, भारत सरकार',
      en: 'Ministry of Agriculture & Farmers Welfare, GoI'
    },
    category: 'farmer',
    benefit: {
      mr: 'दरवर्षी ₹6,000 (३ समान हप्त्यांमध्ये प्रत्येकी ₹2,000 DBT)',
      en: '₹6,000 annually (₹2,000 in 3 equal four-monthly instalments DBT)'
    },
    brief: {
      mr: 'देशातील सर्व अल्प व अत्यल्प भूधारक शेतकरी कुटुंबांना कृषी निविष्ठा व कौटुंबिक गरजांसाठी थेट उत्पन्न साहाय्य.',
      en: 'Direct income support for all landholding farmers families to meet agriculture input expenses.'
    },
    targetGroup: {
      mr: 'स्वतःच्या नावावर शेतजमीन असलेले सर्व खातेदार शेतकरी (ई-केवायसी पूर्ण असणे बंधनकारक)',
      en: 'All landholding farmer families with land in their name and completed eKYC'
    },
    requiredDocIds: ['aadhaar', 'satbara_712', 'bank_passbook'],
    optionalDocIds: ['extract_8a', 'pan'],
    officialUrl: 'https://pmkisan.gov.in',
    officialPortalName: 'pmkisan.gov.in',
    fees: { mr: 'ऑनलाईन मोफत / CSC वर ₹15 ई-केवायसी', en: 'Free Online / Nominal at CSC' },
    helpline: '155261 / 1800-115-526',
    steps: {
      mr: [
        'अधिकृत वेबसाईट pmkisan.gov.in वर जा आणि "New Farmer Registration" निवडा.',
        'आधार क्रमांक आणि मोबाईल नंबर टाकून राज्य महाराष्ट्र निवडा व OTP सत्यापित करा.',
        'जमिनीचा तपशील (७/१२, गट क्रमांक, खाते क्रमांक, जमिनीचे क्षेत्रफळ) अचूक भरा.',
        'बँक खाते क्रमांक आणि आधार लिंक तपशील जोडा.',
        'अर्ज सबमिट करा आणि बायोमेट्रिक/ओटीपी द्वारे ई-केवायसी (eKYC) पूर्ण करा.'
      ],
      en: [
        'Visit pmkisan.gov.in and click on "New Farmer Registration".',
        'Enter Aadhaar number and mobile number, select Maharashtra state and verify OTP.',
        'Input land details (7/12 extract, survey/gat number, holding area in hectares).',
        'Provide Aadhaar-seeded bank account details.',
        'Submit application and perform mandatory e-KYC.'
      ]
    }
  },
  {
    id: 'namo_shetkari',
    name: {
      mr: 'नमो शेतकरी महासन्मान निधी योजना',
      en: 'Namo Shetkari Mahasanman Nidhi Yojana'
    },
    department: {
      mr: 'कृषी विभाग, महाराष्ट्र शासन',
      en: 'Department of Agriculture, Govt of Maharashtra'
    },
    category: 'farmer',
    benefit: {
      mr: 'राज्य शासनाकडून अतिरिक्त ₹6,000 वार्षिक (एकूण ₹12,000 लाभ)',
      en: 'Additional ₹6,000/year from Maharashtra Govt (Combined ₹12,000/year)'
    },
    brief: {
      mr: 'पीएम किसान योजनेच्या पात्र शेतकऱ्यांना महाराष्ट्र शासनाकडून प्रतिवर्ष आणखी ₹6,000 अतिरिक्त अर्थसाहाय्य.',
      en: 'State top-up scheme providing additional ₹6,000 annually to PM-Kisan beneficiaries in Maharashtra.'
    },
    targetGroup: {
      mr: 'पीएम किसान योजनेसाठी पात्र असलेले महाराष्ट्रातील सर्व शेतकरी बांधव',
      en: 'All verified PM-Kisan beneficiaries in Maharashtra'
    },
    requiredDocIds: ['aadhaar', 'satbara_712', 'bank_passbook'],
    optionalDocIds: ['extract_8a'],
    officialUrl: 'https://krishi.maharashtra.gov.in',
    officialPortalName: 'krishi.maharashtra.gov.in / Mahadbt',
    fees: { mr: 'पूर्णपणे मोफत (Zero Fee)', en: 'Free of Cost' },
    helpline: '1800-120-8040 / 1800-180-1551',
    steps: {
      mr: [
        'पीएम किसान पोर्टलवर तुमचे नाव, आधार व बँक खाते ई-केवायसी सक्रिय असल्याची खात्री करा.',
        'राज्य कृषी विभाग थेट पीएम किसान डेटाबेसमधून पात्र शेतकऱ्यांना नमो शेतकरी हप्ता जमा करतो.',
        'mahadbt.maharashtra.gov.in किंवा krishi.maharashtra.gov.in वर आधार नंबर टाकून स्थिती तपासा.',
        'हप्ता न आल्यास तालुका कृषी अधिकारी किंवा सेतू केंद्राशी संपर्क साधा.'
      ],
      en: [
        'Ensure active Aadhaar KYC and Aadhaar-seeded bank account on PM-Kisan.',
        'State agriculture department automatically links verified PM-Kisan farmers.',
        'Check benefit status on mahadbt or krishi.maharashtra.gov.in using Aadhaar.',
        'Contact Taluka Agriculture Officer if disbursement is pending.'
      ]
    }
  },
  {
    id: 'msrtc_mahila_sanman',
    name: {
      mr: 'एसटी बस ५०% महिला सवलत पास (महिला सन्मान योजना)',
      en: 'MSRTC 50% Concession for Women (Mahila Sanman)'
    },
    department: {
      mr: 'महाराष्ट्र राज्य मार्ग परिवहन महामंडळ (MSRTC)',
      en: 'Maharashtra State Road Transport Corporation'
    },
    category: 'women_child',
    benefit: {
      mr: 'सर्व साध्या व निमआराम एसटी बसेसमध्ये तिकीट दरात थेट ५०% सवलत',
      en: 'Flat 50% fare concession on all ordinary and semi-luxury state transport buses'
    },
    brief: {
      mr: 'महाराष्ट्रातील सर्व महिला व मुलींना एसटी महामंडळाच्या बसेसमध्ये प्रवासासाठी थेट ५० टक्के तिकीट दर सवलत.',
      en: 'State transport scheme offering half-ticket fare across Maharashtra for all women.'
    },
    targetGroup: {
      mr: 'महाराष्ट्रातील सर्व वयोगटातील महिला व विद्यार्थिनी',
      en: 'All women and female students resident in Maharashtra'
    },
    requiredDocIds: ['aadhaar'],
    optionalDocIds: ['voter_id', 'domicile'],
    officialUrl: 'https://msrtc.maharashtra.gov.in',
    officialPortalName: 'msrtc.maharashtra.gov.in',
    fees: { mr: 'मोफत (फक्त ५०% तिकीट भाडे)', en: 'Zero Application Fee (50% Ticket)' },
    helpline: '1800-22-1250',
    steps: {
      mr: [
        'कोणत्याही स्वतंत्र ऑनलाईन अर्जाची गरज नाही.',
        'एसटी बसमध्ये चढताना वाहकाला (कंडक्टर) तुमचे मूळ आधार कार्ड दाखवा.',
        'कंडक्टर थेट ई-तिकीट मशिनमधून ५०% सवलतीचे महिला सन्मान तिकीट देईल.',
        'नियमित मासिक प्रवासासाठी एमएसआरटीसी डेपोतून महिला सवलत पास काढू शकता.'
      ],
      en: [
        'No separate complex online registration required.',
        'Carry physical or DigiLocker Aadhaar card during bus travel.',
        'Show Aadhaar card to the bus conductor while purchasing the ticket.',
        'The machine immediately issues half-rate Mahila Sanman ticket.'
      ]
    }
  },
  {
    id: 'msrtc_amrut_jyeshtha',
    name: {
      mr: 'अमृत ज्येष्ठ नागरिक योजना (एसटी १००% मोफत प्रवास)',
      en: 'Amrut Jyeshtha Nagrik Yojana (MSRTC Free Travel)'
    },
    department: {
      mr: 'महाराष्ट्र राज्य मार्ग परिवहन महामंडळ (MSRTC)',
      en: 'Maharashtra State Road Transport Corporation'
    },
    category: 'social_welfare',
    benefit: {
      mr: '७५ वर्षांवरील ज्येष्ठांना १००% मोफत प्रवास; ६५ ते ७५ वयोगटासाठी ५०% सवलत',
      en: '100% Free Travel for citizens 75+ years; 50% concession for 65-74 years'
    },
    brief: {
      mr: 'ज्येष्ठ नागरिकांच्या सुलभ प्रवासासाठी मोफत व सवलतीचा एसटी प्रवास देणारी ऐतिहासिक योजना.',
      en: 'Senior citizens travel assistance providing completely free travel for citizens over 75.'
    },
    targetGroup: {
      mr: '६५ वर्षे किंवा त्याहून अधिक वयाचे महाराष्ट्रातील ज्येष्ठ नागरिक',
      en: 'Senior Citizens aged 65 years and above in Maharashtra'
    },
    requiredDocIds: ['aadhaar'],
    optionalDocIds: ['voter_id', 'pan'],
    officialUrl: 'https://msrtc.maharashtra.gov.in',
    officialPortalName: 'msrtc.maharashtra.gov.in',
    fees: { mr: 'मोफत', en: 'Completely Free' },
    helpline: '1800-22-1250',
    steps: {
      mr: [
        'प्रवासादरम्यान ७५ वर्षांपेक्षा जास्त वय दर्शवणारे आधार कार्ड वाहकाला दाखवा.',
        'वाहकाकडून "शून्य रुपयांचे" (Zero Value) अधिकृत मोफत तिकीट दिले जाईल.',
        'कायमस्वरूपी स्मार्ट कार्ड हवे असल्यास जवळच्या एसटी आगारात आधार व फोटो जमा करा.'
      ],
      en: [
        'Present your valid Aadhaar card showing age 75+ to the bus conductor.',
        'Receive the zero-rupee travel ticket directly on board.',
        'For regular smart travel card, submit Aadhaar copy at the nearest MSRTC depot.'
      ]
    }
  },
  {
    id: 'mahadbt_scholarship',
    name: {
      mr: 'महाडीबीटी पोस्ट-मॅट्रिक शिष्यवृत्ती',
      en: 'MahaDBT Post-Matric Scholarship'
    },
    department: {
      mr: 'सामाजिक न्याय व इतर मागास बहुजन कल्याण विभाग, महाराष्ट्र शासन',
      en: 'Social Justice & Special Assistance Dept, Maharashtra'
    },
    category: 'education',
    benefit: {
      mr: '१००% ट्युशन फी + परीक्षा फी प्रतिपूर्ती व दरमहा निर्वाह भत्ता',
      en: '100% Tuition & Exam Fee Waiver plus monthly maintenance allowance'
    },
    brief: {
      mr: '१० वी नंतरच्या उच्च, व्यावसायिक व तांत्रिक शिक्षणासाठी मागासवर्गीय व आर्थिक दुर्बल घटकांतील विद्यार्थ्यांना शिष्यवृत्ती.',
      en: 'Comprehensive financial scholarship covering college tuition and fees for post-matric students.'
    },
    targetGroup: {
      mr: 'SC, ST, OBC, VJNT, SBC, EBC व SEBC प्रवर्गातील १० वी नंतर कॉलेजमध्ये शिकणारे विद्यार्थी',
      en: 'Post-matric college students belonging to reserved categories & EBC/EWS'
    },
    requiredDocIds: ['aadhaar', 'caste_certificate', 'income_certificate', 'domicile', 'marksheet', 'bank_passbook', 'student_id'],
    optionalDocIds: ['school_leaving_cert', 'ration_card'],
    officialUrl: 'https://mahadbt.maharashtra.gov.in',
    officialPortalName: 'mahadbt.maharashtra.gov.in',
    fees: { mr: 'ऑनलाईन मोफत (महा-ई-सेवा केंद्र सेवा शुल्क लागू)', en: 'Free Online' },
    helpline: '022-49150800',
    steps: {
      mr: [
        'mahadbt.maharashtra.gov.in पोर्टलवर "New Applicant Registration" करा.',
        'आधार प्रमाणीकरण पूर्ण करा आणि लॉगिन आयडी व पासवर्ड तयार करा.',
        'प्रोफाईल टॅबमध्ये वैयक्तिक माहिती, पत्ता, जात आणि चालू अभ्यासक्रम निवडा.',
        'सर्व आवश्यक कागदपत्रे (जात दाखला, उत्पन्नाचा दाखला, गुणपत्रिका, फी पावती) अपलोड करा.',
        'योजना निवडून "Apply" बटनावर क्लिक करा आणि कॉलेजकडून पडताळणी करून घ्या.'
      ],
      en: [
        'Register as a new applicant on mahadbt.maharashtra.gov.in.',
        'Complete Aadhaar biometric/OTP verification and set credentials.',
        'Fill your applicant profile (Personal, Address, Caste, College & Course details).',
        'Upload scanned documents (Caste Cert, Income, Marksheet, Domicile).',
        'Select eligible scholarship scheme, apply, and get verified through your college desk.'
      ]
    }
  },
  {
    id: 'aaple_sarkar_income_cert',
    name: {
      mr: 'तहसीलदार उत्पन्नाचा दाखला (१ वर्ष / ३ वर्षे)',
      en: 'Tehsildar Income Certificate (1 / 3 Years)'
    },
    department: {
      mr: 'महसूल विभाग, महाराष्ट्र शासन',
      en: 'Revenue Department, Govt of Maharashtra'
    },
    category: 'citizen_services',
    benefit: {
      mr: 'शासकीय योजना, शिष्यवृत्ती व सवलतींसाठी कायदेशीर उत्पन्नाचे प्रमाणपत्र',
      en: 'Official legal income document required for scholarships, schemes, and quotas'
    },
    brief: {
      mr: 'कुटुंबाचे वार्षिक उत्पन्न सिद्ध करणारा तहसीलदार कार्यालयाचा अधिकृत डिजिटल स्वाक्षरी असलेला दाखला.',
      en: 'Legally certified income document issued by Tehsildar via Aaple Sarkar portal within 3-7 days.'
    },
    targetGroup: {
      mr: 'महाराष्ट्रातील सर्व नागरिक ज्यांना शासकीय योजना, प्रवेश किंवा सवलतीसाठी उत्पन्नाचा पुरावा हवा आहे',
      en: 'All citizens of Maharashtra needing official income verification'
    },
    requiredDocIds: ['aadhaar', 'ration_card', 'electricity_bill', 'passport_photo'],
    optionalDocIds: ['pan', 'satbara_712'],
    officialUrl: 'https://aaplesarkar.mahaonline.gov.in',
    officialPortalName: 'aaplesarkar.mahaonline.gov.in',
    fees: { mr: '₹33.60 (कायदेशीर शासकीय सेवा शुल्क)', en: '₹33.60 (Official fee)' },
    helpline: '1800-120-8040',
    steps: {
      mr: [
        'आपले सरकार पोर्टलवर नागरिक लॉगिन करा.',
        'डाव्या मेनूमधून "महसूल विभाग" (Revenue Dept) निवडा.',
        '"उत्पन्नाचा दाखला" (Income Certificate) सेवेवर क्लिक करा.',
        'अर्जदाराचा तपशील, व्यवसाय, चालू उत्पन्न व कुटुंबातील सदस्यांची माहिती भरा.',
        'कागदपत्रे (ओळख, रहिवासी, स्वयंघोषणापत्र) अपलोड करून ₹33.60 ऑनलाईन शुल्क भरा.',
        '३ ते ५ दिवसांत डिजिटल स्वाक्षरी असलेला दाखला पोर्टलवरून डाऊनलोड करा.'
      ],
      en: [
        'Log in to citizen account on aaplesarkar.mahaonline.gov.in.',
        'Select "Revenue Department" from the services list.',
        'Choose "Income Certificate" service.',
        'Fill applicant details, family occupation, and income self-declaration.',
        'Upload required docs (Aadhaar, Ration card, photo) and pay ₹33.60 fee.',
        'Download digitally signed certificate within 3-5 days from the portal.'
      ]
    }
  },
  {
    id: 'pmfby_pik_vima',
    name: {
      mr: 'प्रधानमंत्री पीक विमा योजना (१ रुपयात पीक विमा)',
      en: 'PMFBY Crop Insurance (₹1 Token Premium Scheme)'
    },
    department: {
      mr: 'कृषी विभाग, महाराष्ट्र शासन',
      en: 'Department of Agriculture, Govt of Maharashtra'
    },
    category: 'farmer',
    benefit: {
      mr: 'शेतकऱ्यांना केवळ ₹1 भरून नैसर्गिक आपत्तीत संपूर्ण पीक नुकसान भरपाई',
      en: 'Full crop failure damage compensation at a token farmer cost of just ₹1'
    },
    brief: {
      mr: 'अतिवृष्टी, दुष्काळ, कीड व नैसर्गिक आपत्तीमुळे पिकांचे नुकसान झाल्यास शेतकऱ्यांना थेट बँक खात्यात आर्थिक भरपाई.',
      en: 'State crop insurance covering Kharif and Rabi crops against unseasonal rain, drought, and pests.'
    },
    targetGroup: {
      mr: 'महाराष्ट्रातील खरीप व रब्बी हंगामात शेती करणारे सर्व खातेदार व भाडेपट्टा शेतकरी',
      en: 'All farmers cultivating notified crops in Maharashtra'
    },
    requiredDocIds: ['satbara_712', 'aadhaar', 'bank_passbook'],
    optionalDocIds: ['extract_8a'],
    officialUrl: 'https://pmfby.gov.in',
    officialPortalName: 'pmfby.gov.in / MahaDBT Farmer',
    fees: { mr: 'केवळ ₹1 प्रति अर्ज (शेतकरी हिस्सा)', en: 'Just ₹1 per application' },
    helpline: '1800-180-1551 / 14447',
    steps: {
      mr: [
        'पीएमएफबीवाय (pmfby.gov.in) किंवा सीएससी (CSC) केंद्रावर जा.',
        'जमिनीचा ७/१२ आणि ई-पीक पाहणी (e-Pik Pahani) नोंद तपासा.',
        'बँक खात्याचा तपशील, आधार कार्ड आणि पेरणी केलेल्या पिकाचे नाव निवडा.',
        'फक्त ₹1 चे नाममात्र शुल्क ऑनलाईन जमा करा.',
        'विमा पॉलिसी पावती (Insurance Receipt) डाऊनलोड करून जपून ठेवा.'
      ],
      en: [
        'Visit pmfby.gov.in portal or nearest Common Service Center (CSC).',
        'Verify your land survey 7/12 record and crop entry.',
        'Enter Aadhaar, bank account, and cultivated crop details.',
        'Pay token ₹1 premium through digital gateway.',
        'Download and safely keep the insurance policy acknowledgement.'
      ]
    }
  },
  {
    id: 'pmay_gharkul',
    name: {
      mr: 'प्रधानमंत्री आवास योजना - घरकुल (PMAY ग्रामीण / शहरी)',
      en: 'Pradhan Mantri Awas Yojana (PMAY Gramin / Urban)'
    },
    department: {
      mr: 'ग्रामविकास व गृहनिर्माण विभाग, महाराष्ट्र शासन',
      en: 'Rural Development & Housing Dept, Maharashtra'
    },
    category: 'housing',
    benefit: {
      mr: 'पक्के घर बांधण्यासाठी ₹1.5 लाख ते ₹2.5 लाख थेट बँक खात्यात अनुदान',
      en: 'Direct subsidy of ₹1.5 to ₹2.5 Lakh into bank account for pucca house'
    },
    brief: {
      mr: 'बेघर आणि कच्च्या घरात राहणाऱ्या कुटुंबांना हक्काचे पक्के घरकुल उभारण्यासाठी थेट आर्थिक अनुदान.',
      en: 'Flagship housing scheme providing financial grant to construct durable pucca houses.'
    },
    targetGroup: {
      mr: 'कच्च्या घरात राहणारे बेघर नागरिक, महिला कुटुंबप्रमुख, SC/ST, दिव्यांग व अल्प उत्पन्न गट',
      en: 'Homeless families or households living in kutcha dwellings with low annual income'
    },
    requiredDocIds: ['aadhaar', 'ration_card', 'bank_passbook', 'income_certificate', 'passport_photo'],
    optionalDocIds: ['satbara_712', 'extract_8a', 'caste_certificate'],
    officialUrl: 'https://pmaymis.gov.in',
    officialPortalName: 'pmaymis.gov.in / pmayg.nic.in',
    fees: { mr: 'पूर्णपणे मोफत', en: 'Completely Free' },
    helpline: '1800-11-6446',
    steps: {
      mr: [
        'ग्रामीण भागासाठी ग्रामपंचायतीत ग्रामसेवक/सरपंच यांच्याशी संपर्क साधा किंवा आवास प्लस ॲपवर नोंदणी करा.',
        'शहरी भागासाठी pmaymis.gov.in वर Citizen Assessment मध्ये अर्ज करा.',
        'आधार, रेशन कार्ड, उत्पन्नाचा दाखला आणि जागेचा मालकी पुरावा जोडा.',
        'स्थानिक अधिकाऱ्यांकडून घराची पाहणी व जिओ-टॅगिंग (Geo-tagging) केले जाईल.',
        'मंजुरीनंतर बांधकामाच्या टप्प्यांनुसार थेट खात्यात हप्ते जमा होतात.'
      ],
      en: [
        'For rural: Contact Gram Sevak or register on Awaas Plus mobile app.',
        'For urban: Apply via "Citizen Assessment" on pmaymis.gov.in.',
        'Submit Aadhaar, ration card, income certificate, and site ownership proof.',
        'Officers carry out on-site inspection and geo-tagging.',
        'Approved grant is disbursed in stages directly to the linked bank account.'
      ]
    }
  },
  {
    id: 'bocw_kamgar',
    name: {
      mr: 'महाराष्ट्र इमारत व इतर बांधकाम कामगार कल्याणकारी नोंदणी (BOCW)',
      en: 'Maharashtra Building & Construction Workers Board (BOCW)'
    },
    department: {
      mr: 'कामगार विभाग, महाराष्ट्र शासन',
      en: 'Labour Department, Govt of Maharashtra'
    },
    category: 'labour',
    benefit: {
      mr: 'मोफत भांडी संच, सुरक्षा किट, मुलांच्या शिक्षणासाठी ₹1 लाख शिष्यवृत्ती व आरोग्य साहाय्य',
      en: 'Essential household kit, safety equipment, up to ₹1 Lakh educational aid & medical assistance'
    },
    brief: {
      mr: 'बांधकाम मजुरांसाठी सामाजिक सुरक्षा, मोफत साहित्य किट, अपघात विमा व शैक्षणिक शिष्यवृत्ती देणारी कल्याणकारी योजना.',
      en: 'Comprehensive welfare board providing kits, educational support, medical and death coverage to construction workers.'
    },
    targetGroup: {
      mr: '१८ ते ६० वयोगटातील नागरिक ज्यांनी मागील १२ महिन्यांत किमान ९० दिवस बांधकाम किंवा गवंडी काम केले आहे',
      en: 'Construction workers aged 18-60 with at least 90 days of work in the past year'
    },
    requiredDocIds: ['aadhaar', 'bank_passbook', 'passport_photo'],
    optionalDocIds: ['ration_card', 'eshram_card'],
    officialUrl: 'https://mahabocw.in',
    officialPortalName: 'mahabocw.in',
    fees: { mr: '₹25 नोंदणी शुल्क व ₹12 वार्षिक वर्गणी', en: '₹25 Registration + ₹12/yr' },
    helpline: '1800-889-2816',
    steps: {
      mr: [
        'अधिकृत पोर्टल mahabocw.in वर जाऊन "कामगार नोंदणी" (Worker Registration) निवडा.',
        'आधार कार्ड आणि मोबाईल क्रमांकावरून ओटीपी सत्यापनाने नोंदणी करा.',
        'कंत्राटदार, ग्रामसेवक किंवा नगरपालिकेकडून घेतलेले "९० दिवस काम केल्याचे प्रमाणपत्र" जोडा.',
        'बँक खात्याचा तपशील व पासपोर्ट फोटो अपलोड करा.',
        'नोंदणी पूर्ण झाल्यानंतर स्मार्ट कामगार ओळखपत्र (Smart Card) मिळते.'
      ],
      en: [
        'Go to mahabocw.in and select "Worker Registration".',
        'Verify via Aadhaar OTP and enter personal profile.',
        'Upload 90-day work certificate signed by contractor/Gram Sevak.',
        'Upload bank passbook and applicant photo.',
        'Receive official BOCW Smart Identity Card after approval.'
      ]
    }
  },
  {
    id: 'lek_ladki_yojana',
    name: {
      mr: 'लेक लाडकी योजना (मुलींसाठी ₹1,01,000 लाभ)',
      en: 'Lek Ladki Yojana (₹1,01,000 Support for Girl Child)'
    },
    department: {
      mr: 'महिला व बालविकास विभाग, महाराष्ट्र शासन',
      en: 'Women & Child Development Dept, Maharashtra'
    },
    category: 'women_child',
    benefit: {
      mr: 'मुलीच्या जन्मापासून ते १८ वर्षे वयापर्यंत ५ टप्प्यांत एकूण ₹1,01,000 थेट आर्थिक मदत',
      en: 'Cumulative ₹1,01,000 financial support disbursed across 5 milestones up to age 18'
    },
    brief: {
      mr: 'मुलींच्या शिक्षणाला आणि सक्षमीकरणाला प्रोत्साहन देण्यासाठी पिवळे व केशरी रेशन कार्डधारक कुटुंबातील मुलींसाठी योजना.',
      en: 'State girl child incentive providing grants at birth (₹5,000), 1st std (₹6,000), 6th std (₹7,000), 11th std (₹8,000) & at 18 yrs (₹75,000).'
    },
    targetGroup: {
      mr: '१ एप्रिल २०२३ नंतर जन्मलेल्या मुली (पिवळे/केशरी रेशन कार्डधारक कुटुंबे)',
      en: 'Girl children born after 1 April 2023 in Yellow/Saffron ration card families'
    },
    requiredDocIds: ['aadhaar', 'ration_card', 'bank_passbook', 'income_certificate', 'domicile'],
    optionalDocIds: ['passport_photo'],
    officialUrl: 'https://womenchild.maharashtra.gov.in',
    officialPortalName: 'womenchild.maharashtra.gov.in',
    fees: { mr: 'पूर्णपणे मोफत', en: 'Completely Free' },
    helpline: '1800-120-8040',
    steps: {
      mr: [
        'मुलीचा जन्म दाखला आणि पालकांचे आधार कार्ड सोबत ठेवा.',
        'स्थानिक अंगणवाडी सेविका किंवा बालविकास प्रकल्प अधिकारी (CDPO) कार्यालयात अर्ज सादर करा.',
        'मुलीच्या नावे बँकेत उघडलेल्या खात्याचे पासबुक जोडा.',
        'अंगणवाडीमार्फत ऑनलाईन पडताळणी पूर्ण झाल्यावर थेट खात्यात टप्प्याटप्प्याने रक्कम जमा होते.'
      ],
      en: [
        'Collect child birth certificate and parents Aadhaar cards.',
        'Submit the application through local Anganwadi worker or CDPO office.',
        'Attach girl child bank passbook and ration card.',
        'Milestone funds will be credited directly to the bank account.'
      ]
    }
  },
  {
    id: 'sanjay_gandhi_niradhar',
    name: {
      mr: 'संजय गांधी निराधार अनुदान योजना',
      en: 'Sanjay Gandhi Niradhar Anudan Yojana'
    },
    department: {
      mr: 'सामाजिक न्याय व विशेष सहाय्य विभाग, महाराष्ट्र शासन',
      en: 'Social Justice & Special Assistance Dept, Maharashtra'
    },
    category: 'social_welfare',
    benefit: {
      mr: 'दरमहा ₹1,500 थेट बँक खात्यात नियमित निवृत्तिवेतन',
      en: 'Monthly pension of ₹1,500 directly into beneficiary bank account'
    },
    brief: {
      mr: 'निराधार व्यक्ती, अनाथ मुले, दिव्यांग, घटस्फोटित व गंभीर आजारांनी ग्रस्त व्यक्तींना जीवन जगण्यासाठी मासिक पेन्शन.',
      en: 'Monthly social security allowance for destitute, widows, and severely disabled persons.'
    },
    targetGroup: {
      mr: 'निराधार वृद्ध, दिव्यांग (४०% पेक्षा जास्त), विधवा, अनाथ बालके (वार्षिक उत्पन्न ₹50,000 च्या आत)',
      en: 'Destitute seniors, disabled individuals, widows with annual family income under ₹50,000'
    },
    requiredDocIds: ['aadhaar', 'domicile', 'income_certificate', 'bank_passbook', 'passport_photo'],
    optionalDocIds: ['disability_certificate', 'ration_card'],
    officialUrl: 'https://aaplesarkar.mahaonline.gov.in',
    officialPortalName: 'aaplesarkar.mahaonline.gov.in',
    fees: { mr: 'मोफत', en: 'Free of Cost' },
    helpline: '1800-120-8040',
    steps: {
      mr: [
        'आपले सरकार पोर्टलवर लॉगिन करा किंवा तहसील कार्यालयात संजय गांधी निराधार शाखेत अर्ज मिळवा.',
        'वय, रहिवासी आणि उत्पन्न दाखला (तहसीलदार) जोडा.',
        'दिव्यांग असल्यास सिव्हिल सर्जनचे ४०%+ अपंगत्व प्रमाणपत्र जोडा.',
        'तहसीलदारांच्या अध्यक्षतेखालील समिती अर्जाची छाननी करून मासिक पेन्शन मंजूर करते.'
      ],
      en: [
        'Log in to Aaple Sarkar or visit the Sanjay Gandhi Niradhar cell in Tehsil office.',
        'Attach Age proof, Domicile certificate, and Income certificate.',
        'If applicable, attach disability certificate issued by Civil Surgeon.',
        'The Tehsil committee verifies and sanctions regular monthly pension.'
      ]
    }
  },
  {
    id: 'ayushman_bharat_pmjay',
    name: {
      mr: 'आयुष्मान भारत - महात्मा फुले जन आरोग्य योजना (MJPJAY)',
      en: 'Ayushman Bharat - PM-JAY & MJPJAY Health Scheme'
    },
    department: {
      mr: 'सार्वजनिक आरोग्य विभाग, महाराष्ट्र शासन',
      en: 'Public Health Department, Govt of Maharashtra'
    },
    category: 'health',
    benefit: {
      mr: 'कुटुंबाला दरवर्षी ₹5,00,000 पर्यंत मोफत कॅशलेस वैद्यकीय उपचार व शस्त्रक्रिया',
      en: 'Cashless medical treatment and surgeries up to ₹5 Lakh per family per year'
    },
    brief: {
      mr: 'महाराष्ट्रातील सर्व रेशन कार्डधारक कुटुंबांना शासनमान्य खाजगी व सरकारी रुग्णालयांमध्ये मोफत उपचारांचे कवच.',
      en: 'Universal cashless health coverage in accredited government and private hospitals across Maharashtra.'
    },
    targetGroup: {
      mr: 'पिवळे, केशरी किंवा पांढरे रेशन कार्ड असलेले महाराष्ट्रातील सर्व नागरिक',
      en: 'All citizens in Maharashtra holding valid Ration Card'
    },
    requiredDocIds: ['aadhaar', 'ration_card'],
    optionalDocIds: ['voter_id'],
    officialUrl: 'https://beneficiary.nha.gov.in',
    officialPortalName: 'beneficiary.nha.gov.in / jeevandaye.gov.in',
    fees: { mr: 'पूर्णपणे मोफत (आयुष्मान कार्ड डाऊनलोड मोफत)', en: '100% Free' },
    helpline: '14555 / 155388',
    steps: {
      mr: [
        'beneficiary.nha.gov.in पोर्टलवर मोबाईल नंबरने ओटीपी लॉगिन करा.',
        'राज्य: Maharashtra निवडून रेशन कार्ड क्रमांक किंवा आधार क्रमांक टाका.',
        'कुटुंबातील सदस्यांचे नाव तपासा आणि आधार ई-केवायसी (e-KYC) पूर्ण करा.',
        'काही मिनिटांत डिजिटल "आयुष्मान कार्ड" डाऊनलोड करा.',
        'कोणत्याही पॅनलवरील सरकारी अथवा खाजगी रुग्णालयात आरोग्य मित्राला कार्ड दाखवून कॅशलेस उपचार घ्या.'
      ],
      en: [
        'Open beneficiary.nha.gov.in and log in using mobile OTP.',
        'Select Maharashtra, Scheme PMJAY, and enter Ration Card or Aadhaar number.',
        'Verify family member names and complete quick Aadhaar OTP eKYC.',
        'Instantly download the Golden Ayushman Card PDF.',
        'Present the card at any empaneled hospital Arogya Mitra desk for cashless care.'
      ]
    }
  },
  {
    id: 'pm_surya_ghar',
    name: {
      mr: 'पीएम सूर्य घर मोफत वीज योजना (सौर रूफटॉप सबसिडी)',
      en: 'PM Surya Ghar: Muft Bijli Yojana (Solar Rooftop)'
    },
    department: {
      mr: 'नवीन व नवीकरणीय ऊर्जा मंत्रालय (MNRE)',
      en: 'Ministry of New and Renewable Energy, GoI'
    },
    category: 'housing',
    benefit: {
      mr: 'छतावरील सोलरसाठी ₹78,000 थेट सबसिडी + दरमहा ३०० युनिट मोफत वीज',
      en: 'Direct central subsidy up to ₹78,000 + up to 300 units free electricity monthly'
    },
    brief: {
      mr: 'घराच्या छतावर सौर पॅनेल बसवून शून्य वीज बिल आणि अतिरिक्त वीज विकून दरमहा उत्पन्न मिळवण्याची योजना.',
      en: 'Rooftop solar installation scheme providing central financial assistance to slash home electricity bills.'
    },
    targetGroup: {
      mr: 'स्वतःचे घर आणि कायदेशीर वीज जोडणी असलेले सर्व घरगुती वीज ग्राहक',
      en: 'Residential households with roof rights and valid domestic electricity connection'
    },
    requiredDocIds: ['electricity_bill', 'aadhaar', 'bank_passbook'],
    optionalDocIds: ['pan'],
    officialUrl: 'https://pmsuryaghar.gov.in',
    officialPortalName: 'pmsuryaghar.gov.in',
    fees: { mr: 'नोंदणी मोफत (सबसिडी थेट बँक खात्यात)', en: 'Free Registration' },
    helpline: '15555',
    steps: {
      mr: [
        'pmsuryaghar.gov.in वर जाऊन "Apply for Rooftop Solar" निवडा.',
        'राज्य Maharashtra व वीज वितरण कंपनी (उदा. MSEDCL Mahavitaran) आणि ग्राहक क्रमांक (Consumer No) टाका.',
        'मोबाईल आणि ईमेलने लॉगिन करा.',
        'सौर क्षमतेसाठी अर्ज करा व अधिकृत सोलर व्हेंडर निवडा.',
        'नेट-मीटर बसवल्यानंतर तपासणी पूर्ण झाल्यावर थेट खात्यात सबसिडी जमा होते.'
      ],
      en: [
        'Open pmsuryaghar.gov.in and click "Apply for Rooftop Solar".',
        'Select Maharashtra, distribution discom (MSEDCL), and consumer number from bill.',
        'Complete registration and apply for sanctioned solar capacity.',
        'Contract an empaneled local solar vendor to install panels.',
        'Following net meter installation and inspection, subsidy is credited within 30 days.'
      ]
    }
  },
  {
    id: 'digital_satbara_8a',
    name: {
      mr: 'डिजिटल स्वाक्षरीचा ७/१२ व ८-अ उतारा डाऊनलोड',
      en: 'Digitally Signed 7/12 & 8-A Extract Download'
    },
    department: {
      mr: 'भूमी अभिलेख विभाग, महसूल प्रशासन महाराष्ट्र',
      en: 'Land Records & Revenue Dept, Maharashtra'
    },
    category: 'citizen_services',
    benefit: {
      mr: 'न्यायालय, बँक कर्ज व शासकीय कामांसाठी १००% कायदेशीर वैध डिजिटल सातबारा',
      en: '100% legally recognized digitally signed land ownership extract for banks & courts'
    },
    brief: {
      mr: 'तलाठ्याच्या सही-शिक्क्याशिवाय सर्व शासकीय व कायदेशीर कामांसाठी पूर्णतः वैध असलेला डिजिटल स्वाक्षरीचा सातबारा.',
      en: 'Instant 24x7 online access to official digitally signed RoR 7/12 and 8-A without visiting Talathi office.'
    },
    targetGroup: {
      mr: 'महाराष्ट्रातील सर्व जमीनधारक व शेतकरी बांधव',
      en: 'All agricultural & non-agricultural land owners in Maharashtra'
    },
    requiredDocIds: ['satbara_712'],
    optionalDocIds: ['extract_8a', 'aadhaar'],
    officialUrl: 'https://digitalsatbara.mahabhumi.gov.in',
    officialPortalName: 'digitalsatbara.mahabhumi.gov.in',
    fees: { mr: '₹15 प्रति उतारा', en: '₹15 per digital extract' },
    helpline: '1800-120-8040',
    steps: {
      mr: [
        'digitalsatbara.mahabhumi.gov.in अधिकृत पोर्टल उघडा.',
        'नियमित युझर लॉगिन किंवा ओटीपी लॉगिन करा.',
        'आपला जिल्हा, तालुका, गाव निवडा आणि गट क्रमांक किंवा सर्व्हे नंबर टाका.',
        '₹15 चे शुल्क ऑनलाईन वॉलेट किंवा युपीआय (UPI) द्वारे भरा.',
        'डिजिटल स्वाक्षरी असलेला अधिकृत ७/१२ किंवा ८-अ तात्काळ डाऊनलोड करा.'
      ],
      en: [
        'Visit digitalsatbara.mahabhumi.gov.in official portal.',
        'Log in with mobile OTP or registered account.',
        'Choose District, Taluka, Village and enter Gat / Survey number.',
        'Recharge wallet or pay ₹15 per copy via UPI.',
        'Download instant digitally signed 7/12 or 8-A PDF with QR code.'
      ]
    }
  },
  {
    id: 'pm_vishwakarma',
    name: {
      mr: 'पीएम विश्वकर्मा योजना (टूलकिट व सवलतीचे कर्ज)',
      en: 'PM Vishwakarma Scheme (Toolkit & Collateral-Free Loan)'
    },
    department: {
      mr: 'सूक्ष्म, लघु व मध्यम उद्योग मंत्रालय (MSME)',
      en: 'Ministry of MSME, Govt of India'
    },
    category: 'labour',
    benefit: {
      mr: '₹15,000 मोफत आधुनिक टूलकिट अनुदान + ₹3 लाख पर्यंत ५% सवलतीचे कर्ज',
      en: '₹15,000 free toolkit e-voucher + up to ₹3 Lakh collateral-free loan at 5% interest'
    },
    brief: {
      mr: 'सुतार, लोहार, कुंभार, चर्मकार, गवंडी, शिंपी यांसारख्या १८ पारंपारिक कारागिरांना प्रशिक्षण, आधुनिक अवजारे व आर्थिक बळ.',
      en: 'Comprehensive support scheme for 18 traditional artisan trades with skill training, daily stipend, and low-cost credit.'
    },
    targetGroup: {
      mr: '१८ पारंपारिक हस्तकला व व्यवसाय करणारे १८ वर्षांवरील कारागीर कुटुंब',
      en: 'Traditional artisans & craftsmen in 18 notified trades'
    },
    requiredDocIds: ['aadhaar', 'bank_passbook', 'pan'],
    optionalDocIds: ['ration_card', 'passport_photo'],
    officialUrl: 'https://pmvishwakarma.gov.in',
    officialPortalName: 'pmvishwakarma.gov.in',
    fees: { mr: 'नोंदणी व प्रशिक्षण पूर्णपणे मोफत', en: 'Free Registration & Training' },
    helpline: '1800-267-7777',
    steps: {
      mr: [
        'जवळच्या कॉमन सर्व्हिस सेंटर (CSC) केंद्रात बायोमेट्रिक प्रमाणीकरणासाठी जा.',
        'आपला १८ पारंपारिक व्यवसायांपैकी एक व्यवसाय निवडा.',
        'आधार कार्ड आणि बँक खात्याचा तपशील सादर करा.',
        'ग्रामपंचायत/स्थानिक स्वराज्य संस्थेकडून तपासणी झाल्यावर ५ दिवसांचे मोफत प्रशिक्षण मिळेल.',
        'प्रशिक्षणानंतर ₹15,000 चे टूलकिट ई-व्हाऊचर आणि सवलतीचे कर्ज उपलब्ध होते.'
      ],
      en: [
        'Visit nearest CSC center for biometric verification.',
        'Select your craft category from the 18 traditional trades.',
        'Provide Aadhaar, active mobile number, and bank account.',
        'Upon local verification, attend 5 days basic training with daily stipend.',
        'Receive ₹15,000 e-voucher for modern toolkit and eligibility for credit.'
      ]
    }
  },
  {
    id: 'eshram_registration',
    name: {
      mr: 'ई-श्रम नोंदणी व असंगठित कामगार सामाजिक सुरक्षा',
      en: 'e-Shram Portal National Database Registration'
    },
    department: {
      mr: 'कामगार व रोजगार मंत्रालय, भारत सरकार',
      en: 'Ministry of Labour & Employment, GoI'
    },
    category: 'labour',
    benefit: {
      mr: '१२ अंकी राष्ट्रीय UAN कार्ड + ₹2 लाख अपघाती मृत्यू विमा व सर्व सरकारी कामगार योजनांचा थेट लाभ',
      en: 'Universal 12-digit UAN Card + ₹2 Lakh accident cover & direct welfare integration'
    },
    brief: {
      mr: 'देशातील सर्व असंघटित कामगारांचा राष्ट्रीय डेटाबेस, ज्यामुळे सरकारी संकट काळात थेट रोख मदत व सामाजिक सुरक्षा मिळते.',
      en: 'National unorganized workers registry providing universal identity, social security, and emergency relief access.'
    },
    targetGroup: {
      mr: '१६ ते ५९ वयोगटातील शेतमजूर, बांधकाम कामगार, फेरीवाले, घरगुती कामगार, चालक व असंघटित श्रमिक',
      en: 'Unorganized workers aged 16-59 not enrolled in EPFO or ESIC'
    },
    requiredDocIds: ['aadhaar', 'bank_passbook'],
    optionalDocIds: ['passport_photo'],
    officialUrl: 'https://eshram.gov.in',
    officialPortalName: 'eshram.gov.in',
    fees: { mr: '१००% मोफत', en: '100% Free' },
    helpline: '14434',
    steps: {
      mr: [
        'eshram.gov.in वर जाऊन "Register on e-Shram" वर क्लिक करा.',
        'आधार लिंक मोबाईल नंबर टाका आणि OTP सत्यापित करा.',
        'वैयक्तिक माहिती, पत्ता, शैक्षणिक पात्रता आणि चालू कामाचे स्वरूप निवडा.',
        'बँक खात्याचा तपशील अचूक भरा.',
        '१२ अंकी UAN असलेले ई-श्रम कार्ड तात्काळ डाऊनलोड करा.'
      ],
      en: [
        'Open eshram.gov.in and click "Register on e-Shram".',
        'Enter Aadhaar linked mobile and verify with OTP.',
        'Enter personal details, address, qualification, and occupation type.',
        'Add bank account details for direct benefit transfers.',
        'Download your Universal Account Number (UAN) e-Shram Card.'
      ]
    }
  },
  {
    id: 'sarathi_driving_license',
    name: {
      mr: 'ड्रायव्हिंग लायसन्स व लर्निंग लायसन्स (सारथी परिवहन)',
      en: 'Driving Licence & Learner Licence (Sarathi Parivahan)'
    },
    department: {
      mr: 'परिवहन विभाग, महाराष्ट्र शासन (RTO)',
      en: 'Transport Department (RTO), Maharashtra'
    },
    category: 'citizen_services',
    benefit: {
      mr: 'कायदेशीर वाहन चालवण्याचा परवाना व अधिकृत राष्ट्रीय ओळखपत्र',
      en: 'Legal motor vehicle driving permit & authoritative national identity card'
    },
    brief: {
      mr: 'आरबीआय व रस्ते वाहतूक मंत्रालयाची अधिकृत प्रणाली; घरी बसून लर्निंग लायसन्स आणि आरटीओ परीक्षा.',
      en: 'Online driving licensing system under Ministry of Road Transport and Highways (MoRTH).'
    },
    targetGroup: {
      mr: '१८ वर्षे पूर्ण झालेले सर्व भारतीय नागरिक (विनागिअर दुचाकीसाठी १६ वर्षे)',
      en: 'Citizens aged 18+ (or 16+ for gearless two-wheelers)'
    },
    requiredDocIds: ['aadhaar', 'marksheet', 'passport_photo'],
    optionalDocIds: ['electricity_bill', 'pan'],
    officialUrl: 'https://parivahan.gov.in',
    officialPortalName: 'parivahan.gov.in / sarathi.parivahan.gov.in',
    fees: { mr: '₹200 लर्निंग / ₹700 पक्के लायसन्स', en: '₹200 LL / ₹700 DL' },
    helpline: '0120-4925555',
    steps: {
      mr: [
        'parivahan.gov.in उघडून "Driving License Related Services" निवडा व राज्य महाराष्ट्र निवडा.',
        '"Apply for Learner Licence" वर क्लिक करा व आधार प्रमाणीकरण निवडा (घरी बसून परीक्षा शक्य).',
        'वय आणि पत्ता पुरावा (आधार/गुणपत्रिका) अपलोड करा.',
        'शासकीय शुल्क ऑनलाईन भरा आणि ट्रॅफिक नियमांची ऑनलाईन चाचणी (LL Test) द्या.',
        'चाचणी उत्तीर्ण होताच लर्निंग लायसन्स त्वरित डाऊनलोड करा; ३० दिवसांनंतर पक्क्या लायसन्ससाठी अर्ज करा.'
      ],
      en: [
        'Visit parivahan.gov.in and select Sarathi driving services, choosing Maharashtra.',
        'Click "Apply for Learner Licence" with Aadhaar authentication (home online test).',
        'Upload age and address proofs.',
        'Pay government fee online and take the home road signs quiz.',
        'Download instant Learner Licence; apply for permanent DL slot after 30 days.'
      ]
    }
  },
  {
    id: 'nvsp_voter_card',
    name: {
      mr: 'नवीन मतदार नोंदणी व ओळखपत्र (ECI Form 6)',
      en: 'New Voter ID Registration (ECI Form 6)'
    },
    department: {
      mr: 'भारतीय निवडणूक आयोग (ECI)',
      en: 'Election Commission of India'
    },
    category: 'citizen_services',
    benefit: {
      mr: 'मतदानाचा घटनात्मक अधिकार व अधिकृत रंगीत प्लास्टिक EPIC मतदार ओळखपत्र',
      en: 'Constitutional right to vote & official laminated EPIC voter smart card'
    },
    brief: {
      mr: '१८ वर्षे पूर्ण झालेल्या सर्व तरुणांना व नागरिकांना मतदानाचा हक्क देणारी मोफत ऑनलाईन मतदार नोंदणी सेवा.',
      en: 'Official voter registration under Election Commission of India for all citizens aged 18+.'
    },
    targetGroup: {
      mr: '१८ वर्षे पूर्ण झालेले सर्व भारतीय नागरिक',
      en: 'All Indian citizens having attained 18 years of age'
    },
    requiredDocIds: ['aadhaar', 'electricity_bill', 'passport_photo'],
    optionalDocIds: ['ration_card', 'marksheet'],
    officialUrl: 'https://voters.eci.gov.in',
    officialPortalName: 'voters.eci.gov.in',
    fees: { mr: '१००% मोफत (कार्ड घरपोच स्पीड पोस्टाने येते)', en: '100% Free' },
    helpline: '1950',
    steps: {
      mr: [
        'अधिकृत पोर्टल voters.eci.gov.in उघडा आणि मोबाईल नंबरने नोंदणी करा.',
        '"Form 6 - Register as a New Elector" निवडा.',
        'विधानसभा मतदारसंघ, नाव, जन्मतारीख आणि पत्ता भरा.',
        'पासपोर्ट फोटो आणि वयाचा/पत्याचा पुरावा अपलोड करा.',
        'बीएलओ (BLO) प्रत्यक्ष पडताळणी करेल आणि नवीन रंगीत मतदार ओळखपत्र घरपोच मिळेल.'
      ],
      en: [
        'Visit voters.eci.gov.in and register via mobile OTP.',
        'Click on "Form 6 - Register as a New Elector".',
        'Select constituency, enter personal credentials, and address.',
        'Upload photograph and residence proof.',
        'BLO completes verification, and EPIC card is dispatched to your doorstep.'
      ]
    }
  },
  {
    id: 'udyam_msme',
    name: {
      mr: 'उद्यम नोंदणी (लहान व्यवसाय, दुकान व MSME प्रमाणपत्र)',
      en: 'Udyam Registration (MSME Business Certificate)'
    },
    department: {
      mr: 'सूक्ष्म, लघु व मध्यम उद्योग मंत्रालय, भारत सरकार',
      en: 'Ministry of MSME, Govt of India'
    },
    category: 'labour',
    benefit: {
      mr: 'सरकारी निविदांमध्ये सवलत, कमी व्याजदराने मुद्रा/MSME बँक कर्ज व वीज बिल सवलत',
      en: 'Concessional collateral-free MSME bank loans, subsidy priority, & tender exemptions'
    },
    brief: {
      mr: 'दुकानदार, छोटे व्यापारी, व्यावसायिक व लघुउद्योजकांसाठी भारत सरकारचे कायमस्वरूपी मोफत उद्योग प्रमाणपत्र.',
      en: 'Official zero-paperwork MSME registration for nano, micro, small, and medium businesses.'
    },
    targetGroup: {
      mr: 'दुकानदार, व्यावसायिक, छोटे कारखानदार, सेवा पुरवठादार व बचत गट',
      en: 'Sole proprietors, shopkeepers, service providers, and manufacturing businesses'
    },
    requiredDocIds: ['aadhaar', 'pan', 'bank_passbook'],
    optionalDocIds: ['electricity_bill'],
    officialUrl: 'https://udyamregistration.gov.in',
    officialPortalName: 'udyamregistration.gov.in',
    fees: { mr: 'पूर्णपणे मोफत (Zero Fee - खाजगी दलालांना पैसे देऊ नका)', en: 'Completely Free' },
    helpline: '011-23063288',
    steps: {
      mr: [
        'udyamregistration.gov.in वर जा आणि "For New Entrepreneurs" निवडा.',
        'मालकाचा १२ अंकी आधार क्रमांक आणि नाव टाकून OTP पडताळणी करा.',
        'पॅन क्रमांक (PAN) सत्यापित करा.',
        'व्यवसायाचे नाव, पत्ता, बँकेचा तपशील आणि व्यवसायाचे स्वरूप (NIC Code) निवडा.',
        'अर्ज सबमिट करा; काही वेळात डिजिटल उद्योग प्रमाणपत्र डाऊनलोडसाठी उपलब्ध होईल.'
      ],
      en: [
        'Open udyamregistration.gov.in and select "For New Entrepreneurs".',
        'Enter applicant 12-digit Aadhaar and verify via OTP.',
        'Validate PAN card.',
        'Input business enterprise name, plant address, bank details, and activity NIC code.',
        'Submit application to instantly generate free government Udyam Certificate.'
      ]
    }
  }
];
