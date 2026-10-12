import { PortalCategory, PortalDirectoryItem } from '../types';

export const PORTAL_CATEGORIES: { id: PortalCategory; title: { mr: string; en: string } }[] = [
  { id: 'all', title: { mr: 'सर्व पोर्टल (All)', en: 'All' } },
  { id: 'revenue_land', title: { mr: 'महसूल व जमीन (7/12, फेरफार)', en: 'Revenue & Land' } },
  { id: 'agriculture', title: { mr: 'शेतकरी व कृषी (Agri & Kisan)', en: 'Agri & Farmers' } },
  { id: 'identity_cards', title: { mr: 'ओळखपत्रे (Aadhaar, PAN, Voter)', en: 'Identity Cards' } },
  { id: 'scholarship_edu', title: { mr: 'शिक्षण व शिष्यवृत्ती (Education)', en: 'Education & Scholarships' } },
  { id: 'welfare_women', title: { mr: 'महिला व सामाजिक कल्याण (Welfare)', en: 'Women & Welfare' } },
  { id: 'health', title: { mr: 'आरोग्य व विमा (Health & Medical)', en: 'Health & Medical' } },
  { id: 'transport', title: { mr: 'वाहतूक व एसटी (Transport & RTO)', en: 'Transport & RTO' } },
  { id: 'housing', title: { mr: 'घरकुल व वीज (Housing & Power)', en: 'Housing & Power' } },
  { id: 'labour_employment', title: { mr: 'कामगार व रोजगार (Jobs & Labour)', en: 'Jobs & Labour' } }
];

export const OFFICIAL_PORTALS: PortalDirectoryItem[] = [
  {
    id: 'aaple_sarkar',
    name: { mr: 'आपले सरकार पोर्टल (Aaple Sarkar)', en: 'Aaple Sarkar Portal' },
    category: 'revenue_land',
    dept: { mr: 'माहिती तंत्रज्ञान विभाग, महाराष्ट्र शासन', en: 'DIT, Govt of Maharashtra' },
    description: {
      mr: '४००+ शासकीय सेवा एकाच ठिकाणी: उत्पन्नाचा दाखला, जात प्रमाणपत्र, रहिवासी दाखला, नॉन-क्रिमीलेअर.',
      en: 'Single window for 400+ citizen services: Income, Caste, Domicile, Non-Creamy Layer.'
    },
    url: 'https://aaplesarkar.mahaonline.gov.in',
    badge: 'महाराष्ट्र शासन',
    popularServices: {
      mr: ['उत्पन्नाचा दाखला', 'रहिवासी दाखला', 'जात प्रमाणपत्र', 'नॉन क्रिमिलेअर', 'नवीन रेशन कार्ड'],
      en: ['Income Cert', 'Domicile Cert', 'Caste Cert', 'Non Creamy Layer', 'New Ration Card']
    }
  },
  {
    id: 'mahadbt',
    name: { mr: 'महाडीबीटी पोर्टल (MahaDBT)', en: 'MahaDBT Portal' },
    category: 'scholarship_edu',
    dept: { mr: 'उच्च व तंत्रशिक्षण आणि कृषी विभाग, महाराष्ट्र', en: 'Higher Education & Agri Dept, MH' },
    description: {
      mr: 'विद्यार्थी शिष्यवृत्ती, शिक्षण फी प्रतिपूर्ती आणि कृषी यांत्रिकीकरण/ठिबक सिंचन योजना.',
      en: 'State DBT portal for Post-Matric Scholarships and Farmer Tractor/Drip schemes.'
    },
    url: 'https://mahadbt.maharashtra.gov.in',
    badge: 'शिष्यवृत्ती व शेती',
    popularServices: {
      mr: ['पोस्ट-मॅट्रिक शिष्यवृत्ती', 'शेती अवजारे सबसिडी', 'ठिबक सिंचन अनुदान', 'कांदा चाळ योजना'],
      en: ['Scholarships', 'Agri Implements', 'Drip Subsidy', 'Farm Machinery']
    }
  },
  {
    id: 'mahabhulekh',
    name: { mr: 'महाभूमी - महाभुलेख ७/१२ (MahaBhulekh)', en: 'MahaBhulekh Land Records' },
    category: 'revenue_land',
    dept: { mr: 'भूमी अभिलेख व महसूल विभाग, महाराष्ट्र', en: 'Land Records Dept, Maharashtra' },
    description: {
      mr: 'महाराष्ट्रातील सर्व जिल्ह्यांचे विनामूल्य ७/१२ आणि ८-अ पाहण्याचे अधिकृत सरकारी पोर्टल.',
      en: 'Official viewing portal for 7/12 Satbara, 8-A and property land records across Maharashtra.'
    },
    url: 'https://mahabhulekh.maharashtra.gov.in',
    badge: '७/१२ उतारा',
    popularServices: {
      mr: ['मोफत ७/१२ पाहणे', '८-अ खाते उतारा', 'फेरफार स्थिती', 'जिल्हावार जमिनीचा शोध'],
      en: ['Free 7/12 View', '8-A Extract', 'Ferfar Status', 'District Land Search']
    }
  },
  {
    id: 'digital_satbara',
    name: { mr: 'डिजिटल सातबारा पोर्टल (Digital 7/12 Mahabhumi)', en: 'Digital Satbara Mahabhumi' },
    category: 'revenue_land',
    dept: { mr: 'महसूल विभाग, महाराष्ट्र शासन', en: 'Revenue Dept, Maharashtra' },
    description: {
      mr: 'शासकीय व कायदेशीर कामांसाठी अधिकृत डिजिटल स्वाक्षरी असलेला ७/१२, ८-अ व ई-फेरफार डाऊनलोड करा.',
      en: 'Download legally certified digitally signed 7/12, 8-A, and Ferfar copies with QR code.'
    },
    url: 'https://digitalsatbara.mahabhumi.gov.in',
    badge: 'कायदेशीर सातबारा',
    popularServices: {
      mr: ['डिजिटल स्वाक्षरी ७/१२', 'डिजिटल ८-अ', 'ई-फेरफार नोंद', 'प्रॉपर्टी कार्ड (PR Card)'],
      en: ['Signed 7/12', 'Signed 8-A', 'E-Ferfar', 'City Survey Property Card']
    }
  },
  {
    id: 'pm_kisan_portal',
    name: { mr: 'पीएम किसान सन्मान निधी (PM Kisan)', en: 'PM Kisan Official Portal' },
    category: 'agriculture',
    dept: { mr: 'कृषी मंत्रालय, भारत सरकार', en: 'Ministry of Agriculture, GoI' },
    description: {
      mr: 'शेतकऱ्यांसाठी दरवर्षी ₹6,000; नवीन शेतकरी नोंदणी, ई-केवायसी आणि हप्त्याची स्थिती तपासा.',
      en: 'Direct ₹6,000 annual farmer support: new registration, Aadhaar eKYC, and payment status.'
    },
    url: 'https://pmkisan.gov.in',
    badge: '₹6,000 शेतकरी',
    popularServices: {
      mr: ['नवीन शेतकरी नोंदणी', 'ओटीपी ई-केवायसी', 'हप्त्याची स्थिती (Beneficiary Status)', 'आधार दुरुस्ती'],
      en: ['New Registration', 'e-KYC', 'Beneficiary Status', 'Aadhaar Correction']
    }
  },
  {
    id: 'msrtc_portal',
    name: { mr: 'एसटी महामंडळ (MSRTC Official Portal)', en: 'MSRTC Bus Services Portal' },
    category: 'transport',
    dept: { mr: 'महाराष्ट्र राज्य मार्ग परिवहन महामंडळ', en: 'MSRTC, Govt of Maharashtra' },
    description: {
      mr: 'महिला सन्मान ५०% सवलत, ज्येष्ठ नागरिक मोफत प्रवास आणि ऑनलाईन एसटी बस तिकीट आरक्षण.',
      en: 'State bus pass concessions (Women 50%, Senior Citizens 100%) and online bus reservation.'
    },
    url: 'https://msrtc.maharashtra.gov.in',
    badge: 'एसटी सवलत पास',
    popularServices: {
      mr: ['महिला सन्मान सवलत', 'ज्येष्ठ नागरिक पास', 'विद्यार्थी सवलत पास', 'ऑनलाईन बस बुकिंग'],
      en: ['Women Concession', 'Senior Citizen Pass', 'Student Pass', 'Online Bus Booking']
    }
  },
  {
    id: 'digilocker',
    name: { mr: 'डिजिलॉकर (DigiLocker India)', en: 'DigiLocker Official Portal' },
    category: 'identity_cards',
    dept: { mr: 'इलेक्ट्रॉनिक्स आणि माहिती तंत्रज्ञान मंत्रालय (MeitY)', en: 'MeitY, Govt of India' },
    description: {
      mr: 'कायदेशीर डिजिटल कागदपत्रे: आधार, ड्रायव्हिंग लायसन्स, १०वी/१२वी गुणपत्रिका, पॅन कार्ड डाऊनलोड.',
      en: 'Legally valid paperless storage and instant download of Govt issued ID certificates.'
    },
    url: 'https://www.digilocker.gov.in',
    badge: 'डिजिटल कागदपत्रे',
    popularServices: {
      mr: ['डिजिटल ड्रायव्हिंग लायसन्स', '१०वी/१२वी बोर्ड गुणपत्रिका', 'पॅन कार्ड', 'गाडीची आरसी बुक'],
      en: ['Digital DL', 'Class 10/12 Marksheet', 'PAN Card', 'Vehicle RC']
    }
  },
  {
    id: 'parivahan_sarathi',
    name: { mr: 'परिवहन सेवा - सारथी (Parivahan Sarathi)', en: 'Parivahan Sarathi (DL & RC)' },
    category: 'transport',
    dept: { mr: 'रस्ते वाहतूक व महामार्ग मंत्रालय (MoRTH)', en: 'MoRTH, Govt of India' },
    description: {
      mr: 'लर्निंग लायसन्स, ड्रायव्हिंग लायसन्स नूतनीकरण, वाहन मालकी हस्तांतरण व आरटीओ सेवा.',
      en: 'Learner License online test, driving license renewal, vehicle registration, and RTO forms.'
    },
    url: 'https://parivahan.gov.in',
    badge: 'ड्रायव्हिंग लायसन्स',
    popularServices: {
      mr: ['ऑनलाईन लर्निंग लायसन्स', 'लायसन्स नूतनीकरण', 'पत्ता बदलणे', 'वाहन फिटनेस व कर'],
      en: ['Learner Licence Test', 'DL Renewal', 'Address Change', 'Vehicle Tax & Fitness']
    }
  },
  {
    id: 'voters_eci',
    name: { mr: 'मतदार सेवा पोर्टल (ECI Voters Portal)', en: 'ECI Voters Service Portal' },
    category: 'identity_cards',
    dept: { mr: 'भारतीय निवडणूक आयोग', en: 'Election Commission of India' },
    description: {
      mr: 'नवीन मतदार नोंदणी (Form 6), मतदार यादीत नाव शोधणे, पत्ता दुरुस्ती आणि ई-एपिक डाऊनलोड.',
      en: 'Voter registration (Form 6), search electoral roll, address correction, and e-EPIC download.'
    },
    url: 'https://voters.eci.gov.in',
    badge: 'मतदान ओळखपत्र',
    popularServices: {
      mr: ['नवीन मतदार अर्ज (फॉर्म ६)', 'मतदार यादी नाव शोध', 'नाव/पत्ता दुरुस्ती (फॉर्म ८)', 'ई-एपिक डाऊनलोड'],
      en: ['New Voter Form 6', 'Search Electoral Roll', 'Correction Form 8', 'e-EPIC Card']
    }
  },
  {
    id: 'eshram_portal',
    name: { mr: 'ई-श्रम पोर्टल (e-Shram National Portal)', en: 'e-Shram National Portal' },
    category: 'labour_employment',
    dept: { mr: 'कामगार व रोजगार मंत्रालय, भारत सरकार', en: 'Ministry of Labour & Employment' },
    description: {
      mr: 'असंघटित कामगारांसाठी राष्ट्रीय UAN ओळखपत्र व ₹2 लाख अपघात विमा सुरक्षा.',
      en: 'National unorganized worker registration, 12-digit UAN card, and ₹2 Lakh accidental insurance.'
    },
    url: 'https://eshram.gov.in',
    badge: 'कामगार UAN कार्ड',
    popularServices: {
      mr: ['नवीन ई-श्रम नोंदणी', 'UAN कार्ड डाऊनलोड', 'प्रोफाईल अपडेट', 'मानधन पेन्शन योजना'],
      en: ['New Registration', 'Download UAN Card', 'Profile Update', 'Maan-dhan Pension']
    }
  },
  {
    id: 'uidai_myaadhaar',
    name: { mr: 'माय आधार पोर्टल (UIDAI MyAadhaar)', en: 'UIDAI MyAadhaar Portal' },
    category: 'identity_cards',
    dept: { mr: 'भारतीय विशिष्ट ओळख प्राधिकरण (UIDAI)', en: 'UIDAI, Govt of India' },
    description: {
      mr: 'ई-आधार डाऊनलोड, पीव्हीसी प्लास्टिक कार्ड ऑर्डर, पत्ता अपडेट आणि मोबाईल-बँक लिंकिंग स्थिती.',
      en: 'Download e-Aadhaar, order PVC card, online address update, and check bank seeding status.'
    },
    url: 'https://myaadhaar.uidai.gov.in',
    badge: 'आधार सेवा',
    popularServices: {
      mr: ['ई-आधार डाऊनलोड', 'पीव्हीसी आधार कार्ड', 'पत्ता बदल ऑनलाईन', 'बँक सीडिंग स्टेटस'],
      en: ['Download e-Aadhaar', 'Order PVC Card', 'Address Update', 'Bank Seeding Status']
    }
  },
  {
    id: 'incometax_efiling',
    name: { mr: 'इन्कम टॅक्स ई-फायलिंग (Income Tax Portal)', en: 'Income Tax e-Filing Portal' },
    category: 'identity_cards',
    dept: { mr: 'आयकर विभाग, वित्त मंत्रालय', en: 'Income Tax Dept, Ministry of Finance' },
    description: {
      mr: 'इन्स्टंट ई-पॅन कार्ड (१० मिनिटांत मोफत), आधार-पॅन लिंक आणि आयकर विवरणपत्र भरणे.',
      en: 'Instant e-PAN card (free in 10 minutes), Aadhaar-PAN linkage, and tax return filing.'
    },
    url: 'https://www.incometax.gov.in',
    badge: 'मोफत इन्स्टंट पॅन',
    popularServices: {
      mr: ['इन्स्टंट ई-पॅन (Instant e-PAN)', 'आधार-पॅन लिंक करणे', 'पॅन व्हेरिफाय', 'आयटीआर रिटर्न'],
      en: ['Instant Free e-PAN', 'Link Aadhaar to PAN', 'Verify PAN', 'ITR Return']
    }
  },
  {
    id: 'pmay_gramin',
    name: { mr: 'प्रधानमंत्री आवास योजना ग्रामीण (PMAY-G)', en: 'PMAY-G Housing Portal' },
    category: 'housing',
    dept: { mr: 'ग्रामीण विकास मंत्रालय, भारत सरकार', en: 'Ministry of Rural Development' },
    description: {
      mr: 'ग्रामीण भागातील कच्च्या घरांच्या जागी पक्के घरकुल; यादीत नाव पाहणे व हप्ता स्थिती तपासणे.',
      en: 'Rural housing scheme; track beneficiary status, instalments, and AwaasSoft list.'
    },
    url: 'https://pmayg.nic.in',
    badge: 'घरकुल अनुदान',
    popularServices: {
      mr: ['लाभार्थी यादी शोध', 'हप्ता पेमेंट ट्रॅक', 'आवास सॉफ्ट रिपोर्ट', 'एफपीओ स्थिती'],
      en: ['Beneficiary List', 'Payment Track', 'AwaasSoft Report', 'FTO Status']
    }
  },
  {
    id: 'pmay_urban',
    name: { mr: 'प्रधानमंत्री आवास योजना शहरी (PMAY Urban)', en: 'PMAY Urban Portal' },
    category: 'housing',
    dept: { mr: 'गृहनिर्माण व शहरी व्यवहार मंत्रालय', en: 'MoHUA, Govt of India' },
    description: {
      mr: 'शहरात राहणाऱ्या मध्यम व अल्प उत्पन्न गटासाठी घर अनुदानासाठी नागरिक अर्ज (Citizen Assessment).',
      en: 'Urban affordable housing financial subsidy portal for low and middle-income families.'
    },
    url: 'https://pmaymis.gov.in',
    badge: 'शहरी घरकुल',
    popularServices: {
      mr: ['नागरिक अर्ज (Citizen Assessment)', 'अर्जाची स्थिती', 'सबसिडी कॅल्क्युलेटर', 'रेरा मान्यता'],
      en: ['Citizen Assessment', 'Track Status', 'Subsidy Calculator', 'RERA Check']
    }
  },
  {
    id: 'mahaswayam',
    name: { mr: 'महास्वयंम रोजगार पोर्टल (Mahaswayam MH)', en: 'Mahaswayam Employment Portal' },
    category: 'labour_employment',
    dept: { mr: 'कौशल्य विकास, रोजगार व उद्योजकता विभाग', en: 'Skill Development & Entrepreneurship' },
    description: {
      mr: 'बेरोजगार तरुणांसाठी सरकारी रोजगार नोंदणी (Employment Card), नोकरी मेळावे व मोफत कौशल्य प्रशिक्षण.',
      en: 'State employment exchange registration card, job fairs, and free vocational training.'
    },
    url: 'https://www.mahaswayam.gov.in',
    badge: 'रोजगार कार्ड',
    popularServices: {
      mr: ['रोजगार नोंदणी कार्ड', 'नोकरी मेळावे', 'कौशल्य प्रशिक्षण (MSSDS)', 'अप्रेंटिसशिप अर्ज'],
      en: ['Employment Registration', 'Job Fairs', 'Skill Training', 'Apprenticeship']
    }
  },
  {
    id: 'nsp_scholarships',
    name: { mr: 'नॅशनल स्कॉलरशिप पोर्टल (NSP India)', en: 'National Scholarship Portal' },
    category: 'scholarship_edu',
    dept: { mr: 'इलेक्ट्रॉनिक्स व माहिती तंत्रज्ञान मंत्रालय', en: 'MeitY, Govt of India' },
    description: {
      mr: 'केंद्र शासनाच्या सर्व केंद्रीय व अल्पसंख्याक शिष्यवृत्तींचे अधिकृत राष्ट्रीय पोर्टल.',
      en: 'Single national platform for Central Sector, Minority, and National Merit scholarships.'
    },
    url: 'https://scholarships.gov.in',
    badge: 'केंद्रीय शिष्यवृत्ती',
    popularServices: {
      mr: ['केंद्रीय शिष्यवृत्ती अर्ज', 'अल्पसंख्याक शिष्यवृत्ती', 'मेरिट स्कॉलरशिप', 'बायोमेट्रिक प्रमाणीकरण'],
      en: ['Central Scheme Apply', 'Minority Scholarship', 'Merit Scholarship', 'Biometric Auth']
    }
  },
  {
    id: 'jeevan_pramaan',
    name: { mr: 'जीवन प्रमाण (Jeevan Pramaan)', en: 'Jeevan Pramaan (Life Certificate)' },
    category: 'welfare_women',
    dept: { mr: 'पेन्शन व पेन्शनधारक कल्याण विभाग', en: 'Dept of Pension & Pensioners Welfare' },
    description: {
      mr: 'पेन्शनधारकांसाठी घरबसल्या बायोमेट्रिक अथवा फेस-अथेंटिकेशन द्वारे डिजिटल जीवन प्रमाणपत्र सादर करा.',
      en: 'Digital Life Certificate for pensioners generated via mobile face-authentication or biometric.'
    },
    url: 'https://jeevanpramaan.gov.in',
    badge: 'पेन्शन जीवन दाखला',
    popularServices: {
      mr: ['डिजिटल जीवन प्रमाणपत्र', 'मोबाईल फेस ॲप', 'दाखला डाऊनलोड', 'पेन्शन वितरण ट्रॅक'],
      en: ['Digital Life Cert', 'Face Auth App', 'Download Cert', 'Pension Track']
    }
  },
  {
    id: 'epfo_member',
    name: { mr: 'कर्मचारी भविष्य निर्वाह निधी (EPFO UAN Member)', en: 'EPFO UAN Member Portal' },
    category: 'labour_employment',
    dept: { mr: 'कामगार व रोजगार मंत्रालय, भारत सरकार', en: 'Ministry of Labour & Employment' },
    description: {
      mr: 'पीएफ बॅलन्स तपासणे, पीएफ ऑनलाईन क्लेम/काढणे, UAN कार्ड डाऊनलोड व पासबुक पाहणे.',
      en: 'EPFO Member Portal to check PF balance, submit withdrawal claims, and download passbooks.'
    },
    url: 'https://unifiedportal-mem.epfindia.gov.in',
    badge: 'पीएफ / UAN सेवा',
    popularServices: {
      mr: ['पीएफ शिल्लक पासबुक', 'ऑनलाईन पीएफ क्लेम (Form 19/31)', 'UAN ॲक्टिव्हेशन', 'केवायसी अपडेट'],
      en: ['PF Passbook', 'Online Claim', 'UAN Activation', 'KYC Update']
    }
  },
  {
    id: 'bhunaksha_mh',
    name: { mr: 'भू-नकाशा महाराष्ट्र (Bhunaksha Maharashtra)', en: 'Bhunaksha Land Map MH' },
    category: 'revenue_land',
    dept: { mr: 'भूमी अभिलेख विभाग, महाराष्ट्र शासन', en: 'Land Records Dept, Maharashtra' },
    description: {
      mr: 'आपल्या शेतीचा आणि जमिनीच्या गटाचा अधिकृत भूमी अभिलेख नकाशा ऑनलाईन मोफत पहा व डाऊनलोड करा.',
      en: 'View and download authentic digitized cadastral village land boundary maps.'
    },
    url: 'https://mahabhunakasha.mahabhumi.gov.in',
    badge: 'शेती नकाशा',
    popularServices: {
      mr: ['गट नकाशा पाहणे', 'जमिनीच्या चतुःसीमा', 'गाव नकाशा डाऊनलोड', 'प्लॉट मोजणी रेकॉर्ड'],
      en: ['Gat Map View', 'Plot Boundaries', 'Village Map PDF', 'Measurement Record']
    }
  },
  {
    id: 'mahavitaran_msedcl',
    name: { mr: 'महावितरण वीज बिल व सेवा (Mahavitaran MSEDCL)', en: 'Mahavitaran MSEDCL Portal' },
    category: 'housing',
    dept: { mr: 'महाराष्ट्र राज्य विद्युत वितरण कंपनी मर्यादित', en: 'MSEDCL, Govt of Maharashtra' },
    description: {
      mr: 'नवीन घरगुती व शेती वीज जोडणी अर्ज, चालू वीज बिल पाहणे, ऑनलाईन पेमेंट व तक्रार निवारण.',
      en: 'New domestic and agricultural electricity connections, bill viewing, and complaints.'
    },
    url: 'https://www.mahadiscom.in',
    badge: 'वीज जोडणी व बिल',
    popularServices: {
      mr: ['नवीन वीज जोडणी अर्ज', 'चालू वीज बिल डाऊनलोड', 'मीटर रिडींग सबमिट', 'शेती पंप कनेक्शन'],
      en: ['New Connection', 'Download Bill', 'Submit Meter Reading', 'Agri Pump Connection']
    }
  },
  {
    id: 'igr_maharashtra',
    name: { mr: 'नोंदणी व मुद्रांक विभाग (IGR Maharashtra)', en: 'IGR Maharashtra (Stamp & Reg)' },
    category: 'revenue_land',
    dept: { mr: 'नोंदणी महानिरीक्षक व मुद्रांक नियंत्रक', en: 'Inspector General of Registration' },
    description: {
      mr: 'घर/जमीन खरेदी-विक्री दस्त नोंदणी, ई-सर्च (मागील ३० वर्षांचे सर्च), रेडीरेकनर दर व मुद्रांक शुल्क.',
      en: 'Property deed registration, 30-year online search, Ready Reckoner rates, and stamp duty.'
    },
    url: 'https://igrmaharashtra.gov.in',
    badge: 'दस्त नोंदणी व रेडीरेकनर',
    popularServices: {
      mr: ['ई-सर्च (मागील खरेदीखत शोध)', 'रेडीरेकनर दर पाहणे', 'मुद्रांक शुल्क कॅल्क्युलेटर', 'भाडेकरार नोंदणी'],
      en: ['e-Search Old Deeds', 'Ready Reckoner Rates', 'Stamp Duty Calc', 'e-Registration Leave License']
    }
  },
  {
    id: 'mahacet_cell',
    name: { mr: 'राज्य सामाईक प्रवेश परीक्षा कक्ष (MahaCET Cell)', en: 'State Common Entrance Test Cell' },
    category: 'scholarship_edu',
    dept: { mr: 'उच्च व तंत्रशिक्षण विभाग, महाराष्ट्र', en: 'Higher & Technical Education Dept' },
    description: {
      mr: 'अभियांत्रिकी, वैद्यकीय, कृषी, विधी, बी.एड, एमबीए प्रवेश परीक्षा अर्ज आणि कॅप (CAP) राऊंड.',
      en: 'Entrance tests & centralized admission (CAP) for Engineering, Medical, MBA, Law in Maharashtra.'
    },
    url: 'https://cetcell.mahacet.org',
    badge: 'सीईटी प्रवेश परीक्षा',
    popularServices: {
      mr: ['MHT-CET नोंदणी', 'कॅप राऊंड ॲडमिशन', 'हॉल तिकीट डाऊनलोड', 'मेरिट लिस्ट पाहणे'],
      en: ['MHT-CET Register', 'CAP Round Admission', 'Hall Ticket', 'Merit List']
    }
  },
  {
    id: 'rtps_maharashtra',
    name: { mr: 'महाराष्ट्र लोकसेवा हक्क आयोग (RTS Commission)', en: 'Right to Services Commission MH' },
    category: 'revenue_land',
    dept: { mr: 'महाराष्ट्र लोकसेवा हक्क आयोग', en: 'Maharashtra State Commission for RTS' },
    description: {
      mr: 'शासकीय सेवा विहित मुदतीत मिळण्याचा कायदेशीर अधिकार; तक्रार व प्रथम/द्वितीय अपील दाखल करा.',
      en: 'Statutory right to time-bound public services; file appeals against delayed government services.'
    },
    url: 'https://aaplesarkar.mahaonline.gov.in/en/Home/RTSAct',
    badge: 'लोकसेवा हक्क कायदा',
    popularServices: {
      mr: ['सेवा मुदत तपासणे', 'पहिला अपील अर्ज', 'दुसरा अपील अर्ज', 'अधिकारी दंड नियम'],
      en: ['Service Timelines', 'First Appeal', 'Second Appeal', 'Penalty Tracking']
    }
  },
  {
    id: 'ayushman_portal',
    name: { mr: 'आयुष्मान भारत लाभार्थी पोर्टल (PMJAY)', en: 'Ayushman Beneficiary Portal' },
    category: 'health',
    dept: { mr: 'राष्ट्रीय आरोग्य प्राधिकरण (NHA)', en: 'National Health Authority' },
    description: {
      mr: 'कुटुंबाचे आयुष्मान कार्ड ऑनलाईन डाऊनलोड करा, हॉस्पिटल यादी शोधा आणि ₹5 लाखांचा उपचार लाभ घ्या.',
      en: 'Self e-KYC and download Golden Ayushman card for ₹5 Lakh family health coverage.'
    },
    url: 'https://beneficiary.nha.gov.in',
    badge: '₹5 लाख मोफत उपचार',
    popularServices: {
      mr: ['आयुष्मान कार्ड डाऊनलोड', 'नाव शोध (आधार/रेशन कार्डने)', 'मान्यताप्राप्त हॉस्पिटल शोध', 'कुटुंब सदस्य जोडणे'],
      en: ['Download Card', 'Search Name', 'Find Empaneled Hospital', 'Add Family Member']
    }
  },
  {
    id: 'epik_pahani',
    name: { mr: 'ई-पीक पाहणी (e-Pik Pahani Portal)', en: 'e-Pik Pahani Crop Survey' },
    category: 'agriculture',
    dept: { mr: 'महसूल व कृषी विभाग, महाराष्ट्र शासन', en: 'Revenue & Agri Dept, Maharashtra' },
    description: {
      mr: 'शेतकऱ्यांनी स्वतःच्या मोबाईलवरून ७/१२ वर पिकांची नोंद करणे; पीक विमा व नुकसान भरपाईसाठी आवश्यक.',
      en: 'Farmer digital crop reporting directly onto 7/12 land record for crop insurance claims.'
    },
    url: 'https://epinpahanisurat.mahabhumi.gov.in',
    badge: 'ई-पीक पाहणी ७/१२',
    popularServices: {
      mr: ['खरीप/रब्बी पीक नोंद', 'फळबाग नोंद', 'खातेदार शेतकरी लॉगिन', 'पीक पाहणी प्रत डाऊनलोड'],
      en: ['Crop Entry', 'Fruit Orchard Entry', 'Farmer Login', 'Download Survey Copy']
    }
  },
  {
    id: 'ecourts_services',
    name: { mr: 'ई-कोर्ट्स सेवा (eCourts Services India)', en: 'eCourts Citizen Services' },
    category: 'revenue_land',
    dept: { mr: 'न्याय विभाग, विधी व न्याय मंत्रालय', en: 'Department of Justice, GoI' },
    description: {
      mr: 'महाराष्ट्रातील जिल्हा व तालुका न्यायालयांतील केस स्टेटस, पुढील सुनावणी तारीख आणि निकाल प्रत पहा.',
      en: 'Track court case status, next hearing dates, cause lists, and certified judgments online.'
    },
    url: 'https://services.ecourts.gov.in',
    badge: 'न्यायालय निकाल व तारीख',
    popularServices: {
      mr: ['केस नंबरने स्टेटस शोध', 'पक्षकार नावाने केस शोध', 'न्यायालयीन निकाल (Judgments)', 'दैनिक बोर्ड (Cause List)'],
      en: ['Case Status by CNR', 'Search by Party Name', 'Order / Judgment PDF', 'Daily Cause List']
    }
  },
  {
    id: 'udyam_portal',
    name: { mr: 'उद्यम नोंदणी (Udyam MSME Portal)', en: 'Udyam Registration Portal' },
    category: 'labour_employment',
    dept: { mr: 'सूक्ष्म, लघु व मध्यम उद्योग मंत्रालय (MSME)', en: 'Ministry of MSME, Govt of India' },
    description: {
      mr: 'लहान व्यवसाय, दुकान, वर्कशॉप व स्टार्टअपसाठी केंद्र शासनाचे अधिकृत कायमस्वरूपी मोफत प्रमाणपत्र.',
      en: 'Zero-cost government MSME registration certificate for shops, micro ventures, and manufacturing.'
    },
    url: 'https://udyamregistration.gov.in',
    badge: 'मोफत उद्योग आधार',
    popularServices: {
      mr: ['नवीन व्यवसाय नोंदणी', 'उद्यम प्रमाणपत्र डाऊनलोड', 'तपशील दुरुस्ती', 'मुद्रा लोन पात्रता'],
      en: ['New Registration', 'Download Certificate', 'Update Profile', 'Mudra Loan Eligibility']
    }
  },
  {
    id: 'mahafood_ration',
    name: { mr: 'अन्न व नागरी पुरवठा (Mahafood Ration)', en: 'Food & Civil Supplies Maharashtra' },
    category: 'welfare_women',
    dept: { mr: 'अन्न, नागरी पुरवठा व ग्राहक संरक्षण विभाग', en: 'Food & Civil Supplies Dept, MH' },
    description: {
      mr: 'ई-रेशन कार्ड डाऊनलोड, रेशन कार्डमधील सदस्यांची नावे पाहणे, नवीन रेशन कार्ड स्थिती व धान्य कोटा तपासणे.',
      en: 'View ration card details, download e-Ration Card (RC), and verify food grain entitlement.'
    },
    url: 'https://mahafood.gov.in',
    badge: 'रेशन कार्ड डाऊनलोड',
    popularServices: {
      mr: ['ई-रेशन कार्ड डाऊनलोड', 'रेशन धान्य कोटा तपासणे', 'दुकानदार माहिती', 'रेशन कार्ड तक्रार'],
      en: ['e-Ration Card PDF', 'Monthly Food Grain Quota', 'FPS Shop Details', 'Grievance Redressal']
    }
  },
  {
    id: 'rcms_ration',
    name: { mr: 'आरसीएमएस रेशन पोर्टल (RCMS Maharashtra)', en: 'RCMS Ration Card Management' },
    category: 'welfare_women',
    dept: { mr: 'अन्न व नागरी पुरवठा विभाग, महाराष्ट्र', en: 'Food & Civil Supplies, MH' },
    description: {
      mr: 'रेशन कार्डमध्ये नवीन बाळाचे नाव जोडणे, नाव कमी करणे आणि रेशन दुकानाचे स्थलांतर करणे.',
      en: 'Ration card modification: add newborn child name, delete members, or transfer ration shop.'
    },
    url: 'https://rcms.mahafood.gov.in',
    badge: 'रेशन कार्ड नाव बदल',
    popularServices: {
      mr: ['रेशन कार्डात नाव वाढवणे', 'नाव कमी करणे', 'रेशन कार्ड विभक्त करणे', 'रेशन दुकान बदलणे'],
      en: ['Add Member', 'Delete Member', 'Split Ration Card', 'Change Fair Price Shop']
    }
  },
  {
    id: 'mhpolice_citizen',
    name: { mr: 'महाराष्ट्र पोलीस नागरिक पोर्टल (MH Police)', en: 'Maharashtra Police Citizen Portal' },
    category: 'identity_cards',
    dept: { mr: 'गृह विभाग, महाराष्ट्र पोलीस दल', en: 'Home Dept, Maharashtra Police' },
    description: {
      mr: 'हरवलेल्या वस्तू/कागदपत्रांची ऑनलाईन तक्रार (Lost & Found), चारित्र्य प्रमाणपत्र (Police Clearance).',
      en: 'File lost mobile/documents report online and apply for Police Character Clearance Certificate.'
    },
    url: 'https://citizen.mahapolice.gov.in',
    badge: 'पोलीस चारित्र्य दाखला',
    popularServices: {
      mr: ['चारित्र्य पडताळणी दाखला', 'हरवलेली वस्तू नोंद (Lost Report)', 'ई-तक्रार नोंदवणे', 'घरगुती कामगार पडताळणी'],
      en: ['Police Verification Cert', 'Lost Article Report', 'File Complaint Online', 'Domestic Help Verify']
    }
  },
  {
    id: 'caste_validity_ccvis',
    name: { mr: 'जात पडताळणी पोर्टल (CCVIS MahaOnline)', en: 'Caste Validity CCVIS Portal' },
    category: 'welfare_women',
    dept: { mr: 'सामाजिक न्याय व आदिवासी विकास विभाग', en: 'Social Justice Dept, Maharashtra' },
    description: {
      mr: 'नोकरी, निवडणूक व उच्च शिक्षण प्रवेशासाठी जात वैधता प्रमाणपत्रासाठी (Caste Validity) ऑनलाईन अर्ज.',
      en: 'Online application and status tracking for Caste Validity Certificate in Maharashtra.'
    },
    url: 'https://ccvis.mahaonline.gov.in',
    badge: 'जात वैधता दाखला',
    popularServices: {
      mr: ['नवीन जात वैधता अर्ज', 'अर्जाची सद्यस्थिती', 'समिती सुनावणी तारीख', 'प्रमाणपत्र डाऊनलोड'],
      en: ['Apply for Validity', 'Track Application', 'Hearing Date', 'Download Certificate']
    }
  },
  {
    id: 'barti_maharashtra',
    name: { mr: 'बार्टी महाराष्ट्र (BARTI Pune)', en: 'BARTI Pune Social Justice' },
    category: 'scholarship_edu',
    dept: { mr: 'डॉ. बाबासाहेब आंबेडकर संशोधन व प्रशिक्षण संस्था', en: 'BARTI, Govt of Maharashtra' },
    description: {
      mr: 'स्पर्धा परीक्षा मोफत प्रशिक्षण (UPSC/MPSC/बँकिंग), आंतरजातीय विवाह अनुदान आणि फेलोशिप.',
      en: 'Free competitive exam coaching, MPSC/UPSC stipends, inter-caste marriage grants, and research fellowships.'
    },
    url: 'https://barti.maharashtra.gov.in',
    badge: 'स्पर्धा परीक्षा व फेलोशिप',
    popularServices: {
      mr: ['MPSC/UPSC मोफत प्रशिक्षण', 'एम.फिल/पीएच.डी. फेलोशिप', 'आंतरजातीय विवाह अनुदान', 'कौशल्य विकास'],
      en: ['Free UPSC/MPSC Coaching', 'Ph.D Fellowship', 'Inter-caste Marriage Grant', 'Skill Programs']
    }
  },
  {
    id: 'sarathi_pune',
    name: { mr: 'सारथी संस्था पुणे (SARATHI Pune)', en: 'SARATHI Pune Development' },
    category: 'scholarship_edu',
    dept: { mr: 'छत्रपती शाहू महाराज संशोधन, प्रशिक्षण व मानव विकास संस्था', en: 'SARATHI, Govt of Maharashtra' },
    description: {
      mr: 'मराठा, कुणबी व शेतकरी कुटुंबातील विद्यार्थ्यांसाठी मोफत स्पर्धा परीक्षा कोचिंग, परदेशी शिष्यवृत्ती व कर्ज योजना.',
      en: 'Autonomous institute providing fellowships, competitive coaching, and foreign scholarships.'
    },
    url: 'https://sarthi-maharashtragov.in',
    badge: 'सारथी फेलोशिप',
    popularServices: {
      mr: ['छत्रपती शाहू महाराज फेलोशिप', 'परदेशी उच्च शिक्षण शिष्यवृत्ती', 'पोलीस भरती मोफत प्रशिक्षण', 'अण्णासाहेब पाटील कर्ज'],
      en: ['CSMN Fellowship', 'Foreign Scholarship', 'Police Training', 'Self-Employment Loan']
    }
  },
  {
    id: 'trti_pune',
    name: { mr: 'टीआरटीआय पुणे (TRTI Pune)', en: 'TRTI Pune Tribal Development' },
    category: 'scholarship_edu',
    dept: { mr: 'आदिवासी संशोधन व प्रशिक्षण संस्था, पुणे', en: 'TRTI Tribal Dept, Maharashtra' },
    description: {
      mr: 'आदिवासी (ST) प्रवर्गातील तरुण-तरुणींसाठी उच्च शिक्षण शिष्यवृत्ती, पायलट प्रशिक्षण व व्यावसायिक योजना.',
      en: 'Tribal empowerment institute offering research fellowships, pilot training, and education grants.'
    },
    url: 'https://trti.maharashtra.gov.in',
    badge: 'आदिवासी कल्याण',
    popularServices: {
      mr: ['आदिवासी विद्यार्थी शिष्यवृत्ती', 'कमर्शियल पायलट प्रशिक्षण', 'स्पर्धा परीक्षा मार्गदर्शन', 'वन हक्क दावा'],
      en: ['Tribal Scholarships', 'Pilot Training', 'Exam Guidance', 'Forest Rights Claims']
    }
  },
  {
    id: 'amrut_mh',
    name: { mr: 'अमृत संस्था (AMRUT Maharashtra)', en: 'AMRUT Maharashtra Institute' },
    category: 'scholarship_edu',
    dept: { mr: 'महाराष्ट्र संशोधन, उन्नती व प्रशिक्षण प्रबोधिनी', en: 'AMRUT, Govt of Maharashtra' },
    description: {
      mr: 'खुल्या प्रवर्गातील (General/Open) आर्थिक दुर्बल घटकांसाठी करिअर मार्गदर्शन, कोचिंग व रोजगार साहाय्य.',
      en: 'Empowerment programs and competitive exam guidance for economically weaker open category youth.'
    },
    url: 'https://amrut.maharashtra.gov.in',
    badge: 'खुल्या प्रवर्गासाठी',
    popularServices: {
      mr: ['ओपन कॅटेगरी शिष्यवृत्ती', 'रोजगार मेळावे', 'स्पर्धा परीक्षा साहाय्य', 'कौशल्य प्रशिक्षण'],
      en: ['Open Category Scholarship', 'Job Fairs', 'Exam Support', 'Skill Training']
    }
  },
  {
    id: 'maharera',
    name: { mr: 'महारेरा पोर्टल (MahaRERA)', en: 'MahaRERA Real Estate' },
    category: 'housing',
    dept: { mr: 'महाराष्ट्र स्थावर संपदा नियामक प्राधिकरण', en: 'Maharashtra Real Estate Regulatory Authority' },
    description: {
      mr: 'फ्लॅट/घर खरेदी करताना बिल्डरचा प्रकल्प अधिकृत नोंदणीकृत आहे का ते तपासा आणि बिल्डरविरुद्ध तक्रार करा.',
      en: 'Verify authorized real estate builders, sanctioned layout plans, and file consumer complaints.'
    },
    url: 'https://maharera.maharashtra.gov.in',
    badge: 'बिल्डर प्रकल्प तपासणी',
    popularServices: {
      mr: ['प्रकल्प रेरा नंबर तपासणे', 'बिल्डरविरुद्ध ऑनलाईन तक्रार', 'ताबा मिळण्याची अधिकृत तारीख', 'काळ्या यादीतील प्रकल्प'],
      en: ['Verify Project RERA ID', 'File Builder Complaint', 'Check Delivery Date', 'Defaulter Projects']
    }
  },
  {
    id: 'pmsuryaghar_portal',
    name: { mr: 'पीएम सूर्य घर पोर्टल (PM Surya Ghar)', en: 'PM Surya Ghar Solar Portal' },
    category: 'housing',
    dept: { mr: 'नवीन व नवीकरणीय ऊर्जा मंत्रालय', en: 'Ministry of New & Renewable Energy' },
    description: {
      mr: 'घराच्या छतावर मोफत सौर पॅनेल बसवून ₹78,000 पर्यंत थेट बँक खात्यात सबसिडी मिळवा.',
      en: 'Apply for central rooftop solar subsidy up to ₹78,000 and 300 units free solar power.'
    },
    url: 'https://pmsuryaghar.gov.in',
    badge: 'रूफटॉप सोलर सबसिडी',
    popularServices: {
      mr: ['नवीन सोलर सबसिडी अर्ज', 'व्हेंडर निवड', 'सबसिडी कॅल्क्युलेटर', 'नेट-मीटर ट्रॅक'],
      en: ['Solar Subsidy Apply', 'Select Vendor', 'Subsidy Calculator', 'Net Meter Tracking']
    }
  },
  {
    id: 'pmvishwakarma_portal',
    name: { mr: 'पीएम विश्वकर्मा पोर्टल (PM Vishwakarma)', en: 'PM Vishwakarma Portal' },
    category: 'labour_employment',
    dept: { mr: 'सूक्ष्म, लघु व मध्यम उद्योग मंत्रालय', en: 'Ministry of MSME, GoI' },
    description: {
      mr: '१८ पारंपारिक कारागिरांसाठी ₹15,000 टूलकिट अनुदान आणि ₹3 लाख पर्यंत ५% सवलतीचे कर्ज.',
      en: 'Support for 18 traditional artisans with ₹15,000 modern toolkit vouchers and 5% interest loans.'
    },
    url: 'https://pmvishwakarma.gov.in',
    badge: 'कारागीर टूलकिट व कर्ज',
    popularServices: {
      mr: ['कारागीर नोंदणी', 'टूलकिट व्हाउचर', 'कौशल्य प्रशिक्षण अर्ज', 'सवलतीचे बँक कर्ज'],
      en: ['Artisan Register', 'Toolkit Voucher', 'Skill Training', 'Concessional Loan']
    }
  },
  {
    id: 'abha_card',
    name: { mr: 'आभा डिजिटल हेल्थ कार्ड (ABHA Card NHA)', en: 'ABHA Health Card (Ayushman)' },
    category: 'health',
    dept: { mr: 'आयुष्मान भारत डिजिटल मिशन (ABDM)', en: 'National Health Authority' },
    description: {
      mr: '१४ अंकी आभा आरोग्य ओळखपत्र; सर्व वैद्यकीय तपासण्या व रिपोर्ट्स डिजिटल स्वरूपात सुरक्षित ठेवा.',
      en: '14-digit Ayushman Bharat Health Account to securely manage medical prescriptions and lab reports.'
    },
    url: 'https://abha.abdm.gov.in',
    badge: 'डिजिटल हेल्थ कार्ड',
    popularServices: {
      mr: ['आभा कार्ड तयार करा (आधारने)', 'आभा कार्ड डाऊनलोड', 'आरोग्य नोंदी लिंक करा', 'हॉस्पिटल ओपीडी टोकन'],
      en: ['Create ABHA Card', 'Download ABHA Card', 'Link Health Records', 'Scan & Share Hospital OPD']
    }
  },
  {
    id: 'passport_seva',
    name: { mr: 'पासपोर्ट सेवा केंद्र (Passport Seva)', en: 'Passport Seva Kendra Portal' },
    category: 'identity_cards',
    dept: { mr: 'परराष्ट्र मंत्रालय, भारत सरकार', en: 'Ministry of External Affairs, GoI' },
    description: {
      mr: 'नवीन भारतीय पारपत्र (Passport) ऑनलाईन अर्ज, फी पेमेंट, अपॉइंटमेंट बुक करणे व ट्रॅक करणे.',
      en: 'Official portal for fresh passport applications, renewal, fee payment, and appointment booking.'
    },
    url: 'https://passportindia.gov.in',
    badge: 'भारतीय पारपत्र',
    popularServices: {
      mr: ['नवीन पासपोर्ट अर्ज', 'तत्काळ पासपोर्ट सेवा', 'अपॉइंटमेंट स्लॉट बुक', 'पासपोर्ट डिस्पॅच ट्रॅक'],
      en: ['Apply Fresh Passport', 'Tatkaal Service', 'Book Appointment', 'Track Dispatch']
    }
  },
  {
    id: 'umang_gov',
    name: { mr: 'उमंग पोर्टल (UMANG All-in-One)', en: 'UMANG Unified Mobile App/Portal' },
    category: 'identity_cards',
    dept: { mr: 'इलेक्ट्रॉनिक्स व माहिती तंत्रज्ञान मंत्रालय', en: 'MeitY & NeGD, Govt of India' },
    description: {
      mr: 'केंद्र व राज्य शासनाच्या १,२०० हून अधिक शासकीय सेवा एकाच मोबाईल ॲप/पोर्टलवर उपलब्ध.',
      en: 'Unified platform accessing 1,200+ central and state government e-services.'
    },
    url: 'https://web.umang.gov.in',
    badge: 'सर्व-इन-वन सरकारी सेवा',
    popularServices: {
      mr: ['ईपीएफओ पासबुक', 'पॅन कार्ड सेवा', 'गॅस सिलिंडर बुकिंग', 'ड्रायव्हिंग लायसन्स'],
      en: ['EPFO Passbook', 'PAN Services', 'LPG Cylinder Booking', 'Driving Licence']
    }
  },
  {
    id: 'ncs_career',
    name: { mr: 'नॅशनल करिअर सर्व्हिस (NCS Portal)', en: 'National Career Service Portal' },
    category: 'labour_employment',
    dept: { mr: 'कामगार व रोजगार मंत्रालय, भारत सरकार', en: 'Ministry of Labour & Employment' },
    description: {
      mr: 'केंद्र व राज्य सरकारी नोकऱ्या, खाजगी कंपन्यांमधील भरती आणि मोफत करिअर कौन्सिलिंग.',
      en: 'Nationwide job portal connecting candidates with central/state vacancies and private employers.'
    },
    url: 'https://www.ncs.gov.in',
    badge: 'नोकरी व करिअर शोध',
    popularServices: {
      mr: ['सरकारी नोकऱ्या शोध', 'खाजगी नोकरी शोध', 'कौन्सिलर मार्गदर्शन', 'जॉब फेअर शेड्युल'],
      en: ['Govt Jobs Search', 'Private Vacancies', 'Career Counselling', 'Job Fair Schedule']
    }
  },
  {
    id: 'jan_samarth',
    name: { mr: 'जन समर्थ पोर्टल (Jan Samarth Credit)', en: 'Jan Samarth Credit Linked Schemes' },
    category: 'agriculture',
    dept: { mr: 'वित्त मंत्रालय, भारत सरकार', en: 'Ministry of Finance, Govt of India' },
    description: {
      mr: 'शेतकरी, शिक्षण, व्यवसाय व मुद्रा कर्जासाठी थेट १३ केंद्रीय सबसिडी कर्ज योजनांसाठी ऑनलाईन अर्ज.',
      en: 'Direct digital platform linking 13 credit-linked government subsidy loan schemes.'
    },
    url: 'https://www.jansamarth.in',
    badge: 'सरकारी सबसिडी कर्ज',
    popularServices: {
      mr: ['मुद्रा कर्ज (Mudra Loan)', 'किसान क्रेडिट कार्ड कर्ज', 'शिक्षण कर्ज (Education Loan)', 'स्टार्टअप कर्ज'],
      en: ['Mudra Loan', 'Kisan Credit Card Loan', 'Education Loan', 'Startup Credit']
    }
  },
  {
    id: 'india_post_services',
    name: { mr: 'इंडिया पोस्ट नागरिक सेवा (India Post)', en: 'India Post Citizen Services' },
    category: 'welfare_women',
    dept: { mr: 'टपाल विभाग, दळणवळण मंत्रालय', en: 'Department of Posts, GoI' },
    description: {
      mr: 'सुकन्या समृद्धी योजना, टपाल बचत खाते, स्पीड पोस्ट ट्रॅकिंग आणि पोस्ट ऑफिस आधार सेवा.',
      en: 'Sukanya Samriddhi, postal savings accounts, Speed Post tracking, and Aadhaar booking.'
    },
    url: 'https://www.indiapost.gov.in',
    badge: 'सुकन्या समृद्धी व टपाल',
    popularServices: {
      mr: ['सुकन्या समृद्धी खाते', 'स्पीड पोस्ट ट्रॅकिंग', 'टपाल जीवन विमा (PLI)', 'पोस्ट पेमेंट बँक (IPPB)'],
      en: ['Sukanya Samriddhi', 'Speed Post Track', 'Postal Life Insurance', 'IPPB Banking']
    }
  },
  {
    id: 'aapli_chawdi',
    name: { mr: 'आपली चावडी (Aapli Chawdi Maharashtra)', en: 'Aapli Chawdi Digital Notice Board' },
    category: 'revenue_land',
    dept: { mr: 'महसूल विभाग, महाराष्ट्र शासन', en: 'Revenue Dept, Maharashtra' },
    description: {
      mr: 'आपल्या गावातील जमिनींच्या चालू फेरफार नोटीसा, जाहीर प्रकटन व तलाठी चावडीची माहिती ऑनलाईन पहा.',
      en: 'Digital village notice board to check pending land mutations (Ferfar notices) in your village.'
    },
    url: 'https://digitalsatbara.mahabhumi.gov.in/aaplichawdi',
    badge: 'गाव चावडी नोटीस',
    popularServices: {
      mr: ['फेरफार नोटीस पाहणे', 'जमिनीची जाहीर नोटीस', 'गावातील नवीन नोंदी', 'तलाठी सूचना'],
      en: ['Mutation Notice', 'Public Land Notice', 'New Village Entries', 'Talathi Announcements']
    }
  },
  {
    id: 'pm_svanidhi',
    name: { mr: 'पीएम स्वनिधी योजना (PM SVANidhi)', en: 'PM SVANidhi Micro Credit' },
    category: 'labour_employment',
    dept: { mr: 'गृहनिर्माण व शहरी व्यवहार मंत्रालय', en: 'MoHUA, Govt of India' },
    description: {
      mr: 'हातगाडी, फेरीवाले व रस्त्यावरील विक्रेत्यांसाठी ₹10,000 ते ₹50,000 विनातारण खेळते भांडवल कर्ज.',
      en: 'Micro-credit collateral free working capital loan of ₹10,000 to ₹50,000 for street vendors.'
    },
    url: 'https://pmsvanidhi.mohua.gov.in',
    badge: 'फेरीवाले खेळते भांडवल',
    popularServices: {
      mr: ['₹10,000 विनातारण कर्ज', '७% व्याज सबसिडी', 'कॅशबॅक प्रोत्साहन', 'दुसरा टप्पा ₹20,000'],
      en: ['₹10k Collateral Free Loan', '7% Interest Subsidy', 'Digital Cashback', 'Tranche 2 ₹20k']
    }
  },
  {
    id: 'india_gov_portal',
    name: { mr: 'राष्ट्रीय सरकारी सेवा पोर्टल (National Portal of India)', en: 'National Portal of India (india.gov.in)' },
    category: 'identity_cards',
    dept: { mr: 'राष्ट्रीय सूचना विज्ञान केंद्र (NIC)', en: 'NIC, Govt of India' },
    description: {
      mr: 'भारत सरकारच्या सर्व मंत्रालये, विभाग व राज्य सरकारांच्या सर्व अधिकृत सेवांचे मुख्य प्रवेशद्वार.',
      en: 'Single window access to information and public services being provided by Govt of India.'
    },
    url: 'https://www.india.gov.in',
    badge: 'राष्ट्रीय सेवा पोर्टल',
    popularServices: {
      mr: ['सर्व केंद्रीय सेवा', 'राज्यांची सेवा यादी', 'सरकारी फॉर्म्स डाऊनलोड', 'गॅझेट व कायदे'],
      en: ['All Central Services', 'State Directory', 'Download Govt Forms', 'Acts & Gazettes']
    }
  },
  {
    id: 'enam_market',
    name: { mr: 'ई-नाम राष्ट्रीय कृषी बाजार (e-NAM Portal)', en: 'e-NAM National Agri Market' },
    category: 'agriculture',
    dept: { mr: 'कृषी व शेतकरी कल्याण मंत्रालय', en: 'Ministry of Agriculture, GoI' },
    description: {
      mr: 'शेतकऱ्यांना देशभरातील बाजार समित्यांमध्ये (APMC) शेतीमालाला स्पर्धात्मक व पारदर्शक दर मिळवून देणारे पोर्टल.',
      en: 'Pan-India electronic trading portal for farm produce, ensuring fair price discovery for farmers.'
    },
    url: 'https://www.enam.gov.in',
    badge: 'शेतीमाल बाजारभाव',
    popularServices: {
      mr: ['थेट बाजारभाव तपासणे', 'ऑनलाईन शेतीमाल लिलाव', 'बाजार समिती शोध', 'थेट बँक पेमेंट'],
      en: ['Live Mandi Prices', 'Online Bidding', 'APMC Directory', 'Direct Payment']
    }
  },
  {
    id: 'swachh_bharat_toilet',
    name: { mr: 'स्वच्छ भारत शौचालय अनुदान (SBM Urban/Gramin)', en: 'Swachh Bharat Toilet Subsidy' },
    category: 'housing',
    dept: { mr: 'पेयजल व स्वच्छता विभाग / शहरी विकास मंत्रालय', en: 'Dept of Drinking Water & Sanitation' },
    description: {
      mr: 'वैयक्तिक घरगुती शौचालय (IHHL) बांधण्यासाठी ₹12,000 थेट बँक खात्यात आर्थिक अनुदान.',
      en: 'Financial incentive of ₹12,000 for constructing individual household latrines (IHHL).'
    },
    url: 'https://sbm.gov.in',
    badge: '₹12,000 शौचालय अनुदान',
    popularServices: {
      mr: ['नवीन शौचालय अर्ज', 'अनुदान हप्ता स्थिती', 'जिओ-टॅगिंग फोटो अपलोड', 'ग्रामपंचायत यादी'],
      en: ['Apply for Toilet Subsidy', 'Track Subsidy Amount', 'Geo-tagging Photo', 'Panchayat Verification']
    }
  }
];
