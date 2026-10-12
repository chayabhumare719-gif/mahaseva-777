import { DocumentCategory, DocumentItem } from '../types';

export const DOCUMENT_CATEGORIES: { id: DocumentCategory; title: { mr: string; en: string }; iconName: string }[] = [
  {
    id: 'identity',
    title: { mr: '१. ओळख पुरावा (Identity Proof)', en: '1. Identity Proof' },
    iconName: 'ShieldCheck'
  },
  {
    id: 'residence',
    title: { mr: '२. रहिवासी पुरावा (Residence Proof)', en: '2. Residence Proof' },
    iconName: 'Home'
  },
  {
    id: 'land_income',
    title: { mr: '३. जमीन व उत्पन्न पुरावा (Land & Income)', en: '3. Land & Income Proof' },
    iconName: 'FileSpreadsheet'
  },
  {
    id: 'education',
    title: { mr: '४. शैक्षणिक पुरावा (Education Proof)', en: '4. Education Proof' },
    iconName: 'GraduationCap'
  },
  {
    id: 'banking_misc',
    title: { mr: '५. बँक व इतर दाखले (Banking & Misc)', en: '5. Banking & Misc' },
    iconName: 'CreditCard'
  }
];

export const DOCUMENTS: DocumentItem[] = [
  // --- Category: Identity ---
  {
    id: 'aadhaar',
    name: { mr: 'आधार कार्ड (Aadhaar Card)', en: 'Aadhaar Card' },
    category: 'identity',
    description: {
      mr: 'UIDAI द्वारे जारी केलेले १२ अंकी विशिष्ट ओळखपत्र (मोबाईल क्रमांक लिंक असणे आवश्यक)',
      en: '12-digit Unique Identification issued by UIDAI (Mobile linkage required)'
    },
    whereToGet: {
      mr: 'जवळचे आधार सेवा केंद्र, पोस्ट ऑफिस किंवा बँक शाखा',
      en: 'Nearest Aadhaar Seva Kendra, Post Office, or Bank Branch'
    },
    isCommon: true
  },
  {
    id: 'pan',
    name: { mr: 'पॅन कार्ड (PAN Card)', en: 'PAN Card' },
    category: 'identity',
    description: {
      mr: 'आयकर विभागाद्वारे जारी केलेले १० अंकी कायमस्वरूपी खाते क्रमांक कार्ड',
      en: 'Permanent Account Number issued by Income Tax Department'
    },
    whereToGet: {
      mr: 'UTIITSL, NSDL किंवा इन्कम टॅक्स ई-फायलिंग पोर्टलवरून ऑनलाईन',
      en: 'Online via NSDL, UTIITSL or Income Tax e-filing portal'
    },
    isCommon: true
  },
  {
    id: 'voter_id',
    name: { mr: 'मतदान ओळखपत्र (Voter ID / EPIC)', en: 'Voter ID (EPIC)' },
    category: 'identity',
    description: {
      mr: 'भारतीय निवडणूक आयोगाचे अधिकृत मतदार ओळखपत्र',
      en: 'Official voter identity card issued by Election Commission of India'
    },
    whereToGet: {
      mr: 'voters.eci.gov.in किंवा तहसील कार्यालय (मतदार नोंदणी शाखा)',
      en: 'Online at voters.eci.gov.in or Tehsil Office (Voter Registry Branch)'
    },
    isCommon: false
  },
  {
    id: 'passport',
    name: { mr: 'पारपत्र (Passport)', en: 'Indian Passport' },
    category: 'identity',
    description: {
      mr: 'परराष्ट्र मंत्रालयाचे अधिकृत भारतीय पारपत्र',
      en: 'Official Indian passport issued by Ministry of External Affairs'
    },
    whereToGet: {
      mr: 'passportindia.gov.in वर ऑनलाईन अपॉइंटमेंट घेऊन पासपोर्ट सेवा केंद्र (PSK)',
      en: 'Passport Seva Kendra (PSK) via passportindia.gov.in appointment'
    },
    isCommon: false
  },
  {
    id: 'driving_license',
    name: { mr: 'वाहन चालक परवाना (Driving Licence)', en: 'Driving Licence (DL)' },
    category: 'identity',
    description: {
      mr: 'परिवहन विभागाचे (RTO) अधिकृत वाहन चालक ओळखपत्र व पत्ता पुरावा',
      en: 'Official driving licence issued by RTO / Ministry of Road Transport'
    },
    whereToGet: {
      mr: 'sarathi.parivahan.gov.in वर ऑनलाईन अर्ज व स्थानिक RTO कार्यालय',
      en: 'Online via sarathi.parivahan.gov.in and local RTO office'
    },
    isCommon: false
  },

  // --- Category: Residence ---
  {
    id: 'ration_card',
    name: { mr: 'रेशन कार्ड (Ration Card)', en: 'Ration Card' },
    category: 'residence',
    description: {
      mr: 'अन्न व नागरी पुरवठा विभागाचे रेशन कार्ड (पिवळे / केशरी / पांढरे किंवा डिजिटल RC)',
      en: 'Food & Civil Supplies ration card (Yellow, Saffron, or White / Digital RC)'
    },
    whereToGet: {
      mr: 'तहसील कार्यालय (पुरवठा शाखा) किंवा आपले सरकार पोर्टल',
      en: 'Tehsil Office (Food Supplies branch) or Aaple Sarkar Portal'
    },
    isCommon: true
  },
  {
    id: 'domicile',
    name: { mr: 'अधिवास प्रमाणपत्र / रहिवासी दाखला (Domicile Certificate)', en: 'Domicile / Residence Certificate' },
    category: 'residence',
    description: {
      mr: 'महाराष्ट्र राज्यात १५ वर्षे वास्तव्याचा अधिकृत अधिवास पुरावा (तहसीलदार/उपविभागीय अधिकारी)',
      en: 'Proof of 15 years domicile residency in Maharashtra issued by SDO/Tehsildar'
    },
    whereToGet: {
      mr: 'सेतू केंद्र, महा-ई-सेवा केंद्र किंवा aaplesarkar.mahaonline.gov.in',
      en: 'Setu Kendra, Maha E-Seva Kendra or aaplesarkar.mahaonline.gov.in'
    },
    isCommon: false
  },
  {
    id: 'electricity_bill',
    name: { mr: 'चालू वीज बिल (Current Electricity Bill)', en: 'Current Electricity Bill' },
    category: 'residence',
    description: {
      mr: 'मागील ३ महिन्यांतील ग्राहकाच्या नावावरील चालू वीज देयक (महावितरण/बेस्ट/अदानी)',
      en: 'Electricity bill within the last 3 months in applicant or family head name'
    },
    whereToGet: {
      mr: 'महावितरण अधिकृत ॲप/वेबसाईटवरून डाऊनलोड करा किंवा वीज वितरण कार्यालय',
      en: 'Mahavitaran / power utility consumer app or local electricity office'
    },
    isCommon: true
  },
  {
    id: 'mgnrega_job_card',
    name: { mr: 'मनरेगा जॉब कार्ड (MGNREGA Job Card)', en: 'MGNREGA Job Card' },
    category: 'residence',
    description: {
      mr: 'ग्रामपंचायत किंवा रोहयो विभागाचे १०० दिवस रोजगार हमी जॉब कार्ड',
      en: 'Rural employment guarantee job card issued by Gram Panchayat'
    },
    whereToGet: {
      mr: 'स्थानिक ग्रामपंचायत कार्यालय किंवा nrega.nic.in',
      en: 'Local Gram Panchayat office or nrega.nic.in'
    },
    isCommon: false
  },

  // --- Category: Land & Income ---
  {
    id: 'satbara_712',
    name: { mr: '७/१२ सातबारा उतारा (7/12 Satbara Extract)', en: '7/12 Satbara Extract' },
    category: 'land_income',
    description: {
      mr: 'महसूल विभागाचा जमिनीचा हक्क व पीक पाहणी दाखवणारा डिजिटल स्वाक्षरी असलेला उतारा',
      en: 'Land ownership & crop record issued by Maharashtra Revenue Dept'
    },
    whereToGet: {
      mr: 'mahabhulekh.maharashtra.gov.in किंवा डिजिटल ७/१२ पोर्टल (digitalsatbara.mahabhumi.gov.in)',
      en: 'mahabhulekh.maharashtra.gov.in or digitalsatbara.mahabhumi.gov.in'
    },
    isCommon: false
  },
  {
    id: 'income_certificate',
    name: { mr: 'तहसीलदार उत्पन्नाचा दाखला (Income Certificate)', en: 'Income Certificate (Tehsildar)' },
    category: 'land_income',
    description: {
      mr: 'सक्षम महसूल प्राधिकाऱ्याने (तहसीलदार) दिलेला चालू आर्थिक वर्षाचा उत्पन्नाचा दाखला',
      en: 'Annual household income certificate issued by competent Tehsildar'
    },
    whereToGet: {
      mr: 'सेतू सुविधा केंद्र, महा-ई-सेवा किंवा आपले सरकार पोर्टल (aaplesarkar.mahaonline.gov.in)',
      en: 'Setu Suvidha Kendra, Maha E-Seva or Aaple Sarkar Portal'
    },
    isCommon: true
  },
  {
    id: 'extract_8a',
    name: { mr: '८-अ खाते उतारा (8-A Extract)', en: '8-A Land Holding Extract' },
    category: 'land_income',
    description: {
      mr: 'गावातील सर्व जमिनींचे एकूण खातेदार क्षेत्र दर्शवणारा ८-अ नोंदवही उतारा',
      en: 'Consolidated land holding register extract under applicant name'
    },
    whereToGet: {
      mr: 'तलाठी कार्यालय किंवा digitalsatbara.mahabhumi.gov.in पोर्टल',
      en: 'Talathi Office or digitalsatbara.mahabhumi.gov.in'
    },
    isCommon: false
  },
  {
    id: 'farmer_cert',
    name: { mr: 'अल्पभूधारक शेतकरी दाखला / पीक पाहणी (Small Farmer Certificate)', en: 'Small/Marginal Farmer Certificate' },
    category: 'land_income',
    description: {
      mr: '२ हेक्टरपर्यंत शेती असल्याचे प्रमाणित करणारा तहसीलदार/तलाठी दाखला',
      en: 'Certificate of landholding up to 2 hectares issued by Revenue Dept'
    },
    whereToGet: {
      mr: 'स्थानिक तलाठी किंवा मंडळ अधिकारी / तहसील कार्यालय',
      en: 'Local Talathi, Circle Officer or Tehsil Office'
    },
    isCommon: false
  },

  // --- Category: Education ---
  {
    id: 'marksheet',
    name: { mr: '१० वी / १२ वी गुणपत्रिका (10th/12th Marksheet)', en: '10th / 12th Marksheet' },
    category: 'education',
    description: {
      mr: 'महाराष्ट्र राज्य माध्यमिक व उच्च माध्यमिक शिक्षण मंडळ किंवा मान्यताप्राप्त बोर्डाची गुणपत्रिका',
      en: 'Class 10th or 12th State Board / CBSE / ICSE marksheet'
    },
    whereToGet: {
      mr: 'शाळा/कॉलेज, डिजिलॉकर (DigiLocker) किंवा mahahsscboard.in',
      en: 'School/College, DigiLocker or mahahsscboard.in'
    },
    isCommon: false
  },
  {
    id: 'ssc_marksheet',
    name: { mr: '१० वी एसएससी गुणपत्रिका (10th SSC Marksheet)', en: '10th SSC Marksheet' },
    category: 'education',
    description: {
      mr: '१० वी बोर्ड परीक्षेची मूळ गुणपत्रिका व सनद (टक्केवारी पडताळणीसाठी)',
      en: '10th standard SSC board marksheet and certificate for percentage verification'
    },
    whereToGet: {
      mr: 'माध्यमिक शाळा किंवा डिजिलॉकर / mahahsscboard.in',
      en: 'Secondary school or DigiLocker / mahahsscboard.in'
    },
    isCommon: false
  },
  {
    id: 'hsc_marksheet',
    name: { mr: '१२ वी एचएससी गुणपत्रिका (12th HSC Marksheet)', en: '12th HSC Marksheet' },
    category: 'education',
    description: {
      mr: '१२ वी कनिष्ठ महाविद्यालयीन बोर्ड परीक्षेची गुणपत्रिका (उच्च शिक्षण व शिष्यवृत्तीसाठी)',
      en: '12th standard HSC marksheet for higher education and scholarships'
    },
    whereToGet: {
      mr: 'कनिष्ठ महाविद्यालय किंवा डिजिलॉकर / mahahsscboard.in',
      en: 'Junior college or DigiLocker / mahahsscboard.in'
    },
    isCommon: false
  },
  {
    id: 'school_leaving_cert',
    name: { mr: 'शाळा सोडल्याचा दाखला / टीसी / एलसी (School Leaving Certificate)', en: 'School Leaving Certificate / TC / LC' },
    category: 'education',
    description: {
      mr: 'जन्मतारीख, शिक्षण व जात सिद्ध करणारा मूळ शाळा सोडल्याचा दाखला (L.C. / T.C.) - हा असल्यास बोनाफाईडची गरज नसते',
      en: 'Original School Leaving / TC proving date of birth, education, and caste'
    },
    whereToGet: {
      mr: 'आपण शिक्षण घेतलेली शाळा अथवा कनिष्ठ महाविद्यालय',
      en: 'Respective School or Junior College last attended'
    },
    isCommon: false
  },
  {
    id: 'bonafide_cert',
    name: { mr: 'बोनाफाईड प्रमाणपत्र (Bonafide Certificate)', en: 'Bonafide Certificate' },
    category: 'education',
    description: {
      mr: 'चालू शैक्षणिक वर्षात शिकत असल्याचे मुख्याध्यापक / प्राचार्यांचे बोनाफाईड (LC असल्यास पर्यायी)',
      en: 'Current studying status certificate issued by School/College Principal'
    },
    whereToGet: {
      mr: 'सध्या शिक्षण सुरू असलेले विद्यालय किंवा महाविद्यालय कार्यालय',
      en: 'Current studying school or college office'
    },
    isCommon: false
  },
  {
    id: 'student_id',
    name: { mr: 'विद्यार्थी ओळखपत्र / चालू कॉलेज आयडी (Student ID Card)', en: 'Student ID Card' },
    category: 'education',
    description: {
      mr: 'चालू शैक्षणिक वर्षाचे महाविद्यालयीन ओळखपत्र',
      en: 'Current academic year College Student ID Card'
    },
    whereToGet: {
      mr: 'सध्या शिक्षण सुरू असलेले विद्यालय किंवा महाविद्यालय',
      en: 'Current studying School, College, or University Department'
    },
    isCommon: false
  },
  {
    id: 'degree_diploma',
    name: { mr: 'पदवी / डिप्लोमा गुणपत्रिका (Degree / Diploma Marksheet)', en: 'Degree / Diploma Marksheet' },
    category: 'education',
    description: {
      mr: 'विद्यापीठाची पदवी, पदविका किंवा पदव्युत्तर अंतिम वर्षाची गुणपत्रिका',
      en: 'University Degree, Diploma, or Post-Graduate final marksheet'
    },
    whereToGet: {
      mr: 'संबंधित विद्यापीठ किंवा महाविद्यालय परीक्षा विभाग',
      en: 'Respective University or College examination department'
    },
    isCommon: false
  },

  // --- Category: Banking & Misc ---
  {
    id: 'bank_passbook',
    name: { mr: 'बँक पासबुक / बँक खाते (Bank Passbook / Aadhaar Linked)', en: 'Bank Passbook / Aadhaar Linked' },
    category: 'banking_misc',
    description: {
      mr: 'नाव, खाते क्रमांक व IFSC कोड स्पष्ट दिसणारे बँक पासबुक (खाते आधार लिंक व DBT सक्रिय हवे)',
      en: 'Bank passbook first page showing Name, A/C No, IFSC (Aadhaar & DBT active)'
    },
    whereToGet: {
      mr: 'आपले खाते असलेल्या राष्ट्रीयीकृत किंवा शेड्युल्ड बँक शाखेतून',
      en: 'Home branch of your Nationalized / Scheduled Commercial Bank'
    },
    isCommon: true
  },
  {
    id: 'passport_photo',
    name: { mr: 'पासपोर्ट आकाराचे छायाचित्र (Passport Photo)', en: 'Passport Size Photograph' },
    category: 'banking_misc',
    description: {
      mr: 'अलिकडच्या काळातील रंगीत पासपोर्ट फोटो (पांढऱ्या किंवा हलक्या पार्श्वभूमीवर)',
      en: 'Recent color passport photograph against light/white background'
    },
    whereToGet: {
      mr: 'स्थानिक फोटो स्टुडिओ किंवा मोबाईलद्वारे स्कॅन',
      en: 'Local photo studio or clean mobile scan'
    },
    isCommon: true
  },
  {
    id: 'caste_certificate',
    name: { mr: 'जात प्रमाणपत्र (Caste Certificate - SC/ST/OBC/NT/SBC/EWS)', en: 'Caste Certificate' },
    category: 'banking_misc',
    description: {
      mr: 'सक्षम प्राधिकाऱ्याने (उपविभागीय अधिकारी/SDO) दिलेले अधिकृत जात प्रमाणपत्र (प्रवर्ग निवडणे आवश्यक)',
      en: 'Official caste certificate issued by Sub-Divisional Officer (SDO)'
    },
    whereToGet: {
      mr: 'उपविभागीय दंडाधिकारी (SDO) कार्यालय किंवा आपले सरकार पोर्टल',
      en: 'Sub-Divisional Magistrate office or Aaple Sarkar Portal'
    },
    isCommon: false
  },
  {
    id: 'non_creamy_layer',
    name: { mr: 'नॉन-क्रिमिलेअर प्रमाणपत्र (Non-Creamy Layer Certificate)', en: 'Non-Creamy Layer Certificate (NCL)' },
    category: 'banking_misc',
    description: {
      mr: 'ओबीसी (OBC), विमुक्त जाती (VJ), भटक्या जमाती (NT-A/B/C/D), एसबीसी (SBC) साठी ३ वर्षांचे प्रगत गटात नसल्याचा दाखला',
      en: 'Valid 3-year Non-Creamy Layer Certificate required for OBC/VJNT/SBC reservations'
    },
    whereToGet: {
      mr: 'तहसीलदार कार्यालय, सेतू केंद्र किंवा aaplesarkar.mahaonline.gov.in',
      en: 'Tehsildar Office, Setu Kendra or aaplesarkar.mahaonline.gov.in'
    },
    isCommon: false
  },
  {
    id: 'caste_validity',
    name: { mr: 'जात पडताळणी / जात वैधता प्रमाणपत्र (Caste Validity Certificate)', en: 'Caste Validity Certificate' },
    category: 'banking_misc',
    description: {
      mr: 'जिल्हा जात पडताळणी समितीने दिलेले अधिकृत जात वैधता प्रमाणपत्र (उच्च शिक्षण व नोकरीसाठी)',
      en: 'Caste Validity Certificate issued by District Caste Scrutiny Committee'
    },
    whereToGet: {
      mr: 'barti.maharashtra.gov.in / CCVIS पोर्टल किंवा समाजकल्याण जात पडताळणी समिती',
      en: 'CCVIS / Barti portal or District Social Welfare Scrutiny Committee'
    },
    isCommon: false
  },
  {
    id: 'disability_certificate',
    name: { mr: 'दिव्यांग प्रमाणपत्र / UDID कार्ड (Disability Certificate)', en: 'Disability Certificate / UDID' },
    category: 'banking_misc',
    description: {
      mr: 'जिल्हा शल्यचिकित्सक (सिव्हिल सर्जन) यांनी दिलेले ४०% किंवा अधिक अपंगत्वाचे प्रमाणपत्र / स्वावलंबन UDID कार्ड',
      en: '40%+ disability certificate issued by District Civil Surgeon or UDID Swavlamban card'
    },
    whereToGet: {
      mr: 'जिल्हा सामान्य रुग्णालय (सिव्हिल हॉस्पिटल) किंवा swavlambancard.gov.in',
      en: 'District Civil Hospital or swavlambancard.gov.in portal'
    },
    isCommon: false
  },
  {
    id: 'eshram_card',
    name: { mr: 'ई-श्रम कार्ड (e-Shram Card)', en: 'e-Shram Card (UAN)' },
    category: 'banking_misc',
    description: {
      mr: 'असंघटित कामगार म्हणून १२ अंकी UAN क्रमांकासह नोंदणीकृत ई-श्रम ओळखपत्र',
      en: 'Unorganized worker registration card with 12-digit UAN number'
    },
    whereToGet: {
      mr: 'eshram.gov.in किंवा कॉमन सर्व्हिस सेंटर (CSC)',
      en: 'eshram.gov.in portal or Common Service Center (CSC)'
    },
    isCommon: false
  },
  {
    id: 'widow_destitute_cert',
    name: { mr: 'विधवा / परितक्त्या / निराधार दाखला (Widow / Destitute Certificate)', en: 'Widow / Destitute Certificate' },
    category: 'banking_misc',
    description: {
      mr: 'संजय गांधी निराधार योजना व महिला कल्याण योजनांसाठी पतीचा मृत्यू दाखला किंवा तहसीलदार निराधार दाखला',
      en: 'Husband death certificate or Tehsildar destitute certificate for pension schemes'
    },
    whereToGet: {
      mr: 'ग्रामपंचायत/नगरपरिषद मृत्यू दाखला अथवा तहसील कार्यालय (संजय गांधी शाखा)',
      en: 'Gram Panchayat death record or Tehsil Office (Sanjay Gandhi Branch)'
    },
    isCommon: false
  },
  {
    id: 'senior_citizen_card',
    name: { mr: 'ज्येष्ठ नागरिक ओळखपत्र (Senior Citizen Card)', en: 'Senior Citizen Identity Card' },
    category: 'banking_misc',
    description: {
      mr: 'वय ६० पेक्षा जास्त असणाऱ्या नागरिकांसाठी समाज कल्याण किंवा एसटी महामंडळ सवलत ओळखपत्र',
      en: 'Social Welfare or MSRTC senior citizen card for citizens aged 60+'
    },
    whereToGet: {
      mr: 'तहसील कार्यालय किंवा स्थानिक ज्येष्ठ नागरिक संघ / एसटी आगार',
      en: 'Tehsil Office, Social Welfare dept, or local MSRTC bus depot'
    },
    isCommon: false
  }
];

export interface DocumentPack {
  id: string;
  title: { mr: string; en: string };
  icon: string;
  docIds: string[];
  description: { mr: string; en: string };
}

export const DOCUMENT_PACKS: DocumentPack[] = [
  {
    id: 'below_10th_student_pack',
    title: { mr: '🎒 १० वी खालील विद्यार्थी पॅक', en: '🎒 Below 10th School Pack' },
    icon: 'GraduationCap',
    docIds: ['aadhaar', 'school_leaving_cert', 'bonafide_cert', 'student_id', 'bank_passbook', 'passport_photo'],
    description: {
      mr: 'शालेय शिष्यवृत्ती, मोफत गणवेश व पाठ्यपुस्तके, पोषण आहार व RTE प्रवेशासाठी (गुणपत्रिकेची गरज नाही)',
      en: 'For pre-matric scholarships, RTE admission, and school welfare (No 10th marksheet needed)'
    }
  },
  {
    id: 'above_10th_student_pack',
    title: { mr: '🎓 १० वी वरील विद्यार्थी पॅक', en: '🎓 Above 10th College Pack' },
    icon: 'GraduationCap',
    docIds: ['aadhaar', 'ssc_marksheet', 'hsc_marksheet', 'school_leaving_cert', 'domicile', 'income_certificate', 'bank_passbook'],
    description: {
      mr: 'महाडीबीटी पोस्ट-मॅट्रिक शिष्यवृत्ती, EBC शुल्क प्रतिपूर्ती, स्वाधार व महाविद्यालय प्रवेशासाठी',
      en: 'For MahaDBT post-matric scholarships, EBC reimbursement, Swadhar & college admissions'
    }
  },
  {
    id: 'farmer_pack',
    title: { mr: '🌾 शेतकरी बांधव पॅक', en: '🌾 Farmer Welfare Pack' },
    icon: 'Tractor',
    docIds: ['aadhaar', 'satbara_712', 'extract_8a', 'bank_passbook', 'income_certificate', 'electricity_bill'],
    description: {
      mr: 'पीएम किसान, नमो शेतकरी, पीक विमा, विहीर व कृषी यांत्रिकीकरण योजनांसाठी',
      en: 'For PM Kisan, Namo Shetkari, crop insurance, and solar pumps'
    }
  },
  {
    id: 'women_pack',
    title: { mr: '👩 लाडकी बहीण व महिला पॅक', en: '👩 Women & Ladki Bahin Pack' },
    icon: 'Heart',
    docIds: ['aadhaar', 'ration_card', 'bank_passbook', 'passport_photo', 'income_certificate'],
    description: {
      mr: 'मुख्यमंत्री माझी लाडकी बहीण योजना, लेक लाडकी व महिला बचत गट योजनांसाठी',
      en: 'For Ladki Bahin, Lek Ladki, and women welfare programs'
    }
  },
  {
    id: 'caste_scholarship_pack',
    title: { mr: '📜 आरक्षण व शिष्यवृत्ती पॅक (OBC/NT/SC/ST)', en: '📜 Caste & Reservation Pack' },
    icon: 'Award',
    docIds: ['aadhaar', 'caste_certificate', 'non_creamy_layer', 'income_certificate', 'domicile', 'bank_passbook', 'school_leaving_cert'],
    description: {
      mr: 'जात दाखला, नॉन-क्रिमिलेअर, वसतिगृह भत्ता व सामाजिक न्याय योजनांसाठी',
      en: 'For caste category reservation, fee reimbursement, and hostels'
    }
  },
  {
    id: 'senior_pension_pack',
    title: { mr: '👵 ज्येष्ठ नागरिक व पेन्शन पॅक', en: '👵 Senior Citizen & Pension Pack' },
    icon: 'Users',
    docIds: ['aadhaar', 'senior_citizen_card', 'bank_passbook', 'ration_card', 'income_certificate', 'passport_photo'],
    description: {
      mr: 'श्रावण बाळ, संजय गांधी निराधार व एसटी मोफत प्रवास योजनेसाठी',
      en: 'For Shravan Bal, Sanjay Gandhi pension, and bus concessions'
    }
  }
];
