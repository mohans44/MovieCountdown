import ayodhyaImg from "../assets/visuals/ayodhya.jpg"
import mithilaImg from "../assets/visuals/mithila.jpeg"
import dandakaranyaImg from "../assets/visuals/dandakaranya.jpeg"
import lankaImg from "../assets/visuals/lanka.png"
import kishkindaImg from "../assets/visuals/kishkinda.jpg"
import ramsetuImg from "../assets/visuals/ramsetu.jpg"


export const locations = [
  {
    id: "ayodhya",
    name: "Ayodhya",
    title: "The Golden Capital",
    accent: "#D4AF37",
    image: ayodhyaImg,
    shortDesc: "The prosperous seat of the Ikshvaku dynasty, a utopian city of dharma and supreme justice.",
    symbol: "🏰",
    translations: {
      hi: {
        name: "अयोध्या",
        shortDesc: "इक्ष्वाकु वंश की समृद्ध राजधानी, जो धर्म, न्याय और वैभव का शिखर थी।",
        sections: [
          { heading: "अजेय नगरी", body: "सरयू नदी के तट पर स्थित अयोध्या का अर्थ है 'जिसे युद्ध में जीता न जा सके'। यह कोशल साम्राज्य की राजधानी थी जिसकी स्थापना स्वयं मनु ने की थी। यहाँ के महल स्वर्ण के समान चमकते थे और सड़कें चौड़ी व सुव्यवस्थित थीं।" },
          { heading: "राम राज्य की नींव", body: "दशरथ के शासन में अयोध्या एक आदर्श समाज था जहाँ गरीबी, अकाल और अपराध का नामोन्शान नहीं था। हर नागरिक शिक्षित और धर्मपरायण था। इसे धरती का स्वर्ग माना जाता था।" },
          { heading: "शोक की छाया", body: "राम के वनवास की घोषणा के साथ ही अयोध्या की रौनक समाप्त हो गई। गलियां सूनी हो गईं और नागरिकों ने विलाप किया। भरत ने राजा होने के बावजूद महल त्याग दिया और शहर के बाहर नंदीग्राम से शासन किया।" },
          { heading: "दीपावली का उद्भव", body: "14 वर्ष बाद जब राम लौटे, तो अयोध्या के वासियों ने घी के दीयों से पूरी नगरी को जगमगा दिया, जो दिवाली का आधार बना। राम का शासन 'राम राज्य' के रूप में अमर हो गया।" },
        ]
      },
      te: {
        name: "అయోధ్య",
        shortDesc: "ఇక్ష్వాకు వంశీయుల రాజధాని, ధర్మానికి మరియు రామరాజ్యానికి నిలయం.",
        sections: [
          { heading: "అజేయ నగరం", body: "సరయూ నది తీరాన వెలసిన అయోధ్యకు 'ఎవరూ జయించలేని నగరం' అని అర్థం. మనువు చేత నిర్మితమైన ఈ నగరం అత్యంత సుందరమైన భవనాలతో, విశాలమైన వీధులతో స్వర్గంలా ఉండేది." },
          { heading: "ఆదర్శ సమాజం", body: "దశరథ మహారాజు పాలనలో అయోధ్యలో ఆకలి చావులు, దొంగతనాలు లేవు. ప్రతి ఒక్కరూ విద్యావంతులుగా, ధర్మబద్ధంగా జీవించేవారు. ఇక్కడ సంపదకు కొదవ ఉండేది కాదు." },
          { heading: "విషాద ఛాయలు", body: "రాముడి అరణ్యవాసంతో అయోధ్య కళ తప్పింది. ప్రజలు కన్నీరుమున్నీరయ్యారు. భరతుడు కూడా రాజభోగాలను విడిచి నగరం వెలుపల నందిగ్రామంలో ఉంటూ రాజ్య భారాన్ని మోశాడు." },
          { heading: "వెలుగుల పండుగ", body: "రాముడు తిరిగి వచ్చినప్పుడు అయోధ్య ప్రజలు ఇళ్లపై దీపాలు వెలిగించి స్వాగతం పలికారు. ఇదే దీపావళి పండుగకు మూలం. రాముడి పాలన నేటికీ ఆదర్శప్రాయం." },
        ]
      },
    },
    sections: [
      {
        heading: "The City Invincible",
        body: "Located on the banks of the sacred Sarayu river, Ayodhya (meaning 'that which cannot be subdued in war') was the capital of the Kosala kingdom. Founded by Manu, it featured wide avenues and towering palaces that gleamed like gold."
      },
      {
        heading: "A Utopian Society",
        body: "Under King Dasharatha, Ayodhya achieved near perfection. The kingdom was free of poverty, disease, and crime. Every citizen was educated and lived in absolute harmony following their dharma."
      },
      {
        heading: "The Great Mourning",
        body: "Ayodhya’s golden era turned into darkness when Rama was exiled. Citizens wept and markets closed. Bharata ruled as regent not from the throne, but from a rustic hut in Nandigram outside the city."
      },
      {
        heading: "The Return to Light",
        body: "Upon Rama's return, Ayodhya experienced joy unmatched in history. The citizens lit continuous rows of earthen lamps (diyas), marking the mythological origin of Diwali and the start of 'Rama Rajya'."
      }
    ]
  },
  {
    id: "mithila",
    name: "Mithila",
    title: "The City of Scholars",
    accent: "#14b8a6",
    image: mithilaImg,
    shortDesc: "The intellectual and spiritual hub of the ancient world under King Janaka.",
    symbol: "🌸",
    translations: {
      hi: {
        name: "मिथिला",
        shortDesc: "राजा जनक के अधीन प्राचीन विश्व का बौद्धिक केंद्र और माता सीता का जन्मस्थान।",
        sections: [
          { heading: "ज्ञान की राजधानी", body: "मिथिला (विदेह की राजधानी) आध्यात्मिकता का सर्वोच्च केंद्र थी। यहाँ के राजा जनक एक 'राजर्षि' थे, जिनके दरबार में शास्त्रार्थ के लिए भारतवर्ष के महानतम ऋषि-मुनि आते थे।" },
          { heading: "सीता का प्राकट्य", body: "एक भीषण अकाल के दौरान राजा जनक ने स्वयं हल चलाया। भूमि को जोतते समय उन्हें एक स्वर्ण कलश में नन्ही कन्या मिली, जिसे उन्होंने सीता नाम दिया। मिथिला तब से पावन भूमि मानी गई।" },
          { heading: "धनुष यज्ञ", body: "यहीं पर शिव का भारी धनुष रखा था। राम ने विश्वामित्र की आज्ञा से उसे एक ही झटके में तोड़ दिया और सीता का हाथ जीता। इस घटना ने मिथिला को वीरता के इतिहास में भी दर्ज कर दिया।" },
          { heading: "वंशों का मिलन", body: "राम-सीता और उनके भाइयों के विवाह ने अयोध्या और मिथिला की शक्ति और ज्ञान को एक सूत्र में पिरो दिया, जो इतिहास का सबसे गौरवशाली मिलन था।" },
        ]
      },
      te: {
        name: "మిథిల",
        shortDesc: "జనక మహారాజు పాలించిన విజ్ఞాన నగరం మరియు సీతమ్మ పుట్టిన ఇల్లు.",
        sections: [
          { heading: "జ్ఞాన రాజధాని", body: "మిథిల ఆధ్యాత్మికతకు మరియు వేదాంత చర్చలకు కేంద్రం. ఇక్కడి రాజు జనకుడు ఒక రాజర్షి. ఆయన సభలో దేశ విదేశాల నుండి పండితులు వచ్చి చర్చలు జరిపేవారు." },
          { heading: "సీతమ్మ జననం", body: "జనక మహారాజు పొలం దున్నుతుండగా నాగలికి తగిలిన పెట్టెలో సీతమ్మ లభించింది. ఆమె భూమి పుత్రికగా మిథిల గర్వకారణమైంది." },
          { heading: "శివధనుర్భంగం", body: "సీతమ్మ స్వయంవరం ఇక్కడే జరిగింది. రాముడు శివధనుస్సును విరిచి సీతమ్మను వివాహం చేసుకున్నాడు. ఈ ఘట్టం మిథిల చరిత్రలో చిరస్థాయిగా నిలిచిపోయింది." },
          { heading: "రాజ్యాల కలయిక", body: "రాముడి వివాహంతో అయోధ్య మరియు మిథిల రాజ్యాల మధ్య బలమైన బంధం ఏర్పడింది. జ్ఞానం మరియు పరాక్రమం ఒక్కటయ్యాయి." },
        ]
      },
    },
    sections: [
      {
        heading: "The Intellectual Capital",
        body: "Mithila was the supreme center of intellect and spirituality. Its ruler, King Janaka, was a Rajarshi (royal sage) renowned for attracting the greatest scholars from across Bharatavarsha."
      },
      {
        heading: "The Receptive Earth",
        body: "During a drought, King Janaka plowed a field himself to appease the gods. He discovered a radiant infant girl in the furrow, adopted her as Sita, and the land became blessed."
      },
      {
        heading: "The Legendary Swayamvar",
        body: "Mithila hosted Sita’s Swayamvar. Kings from three worlds failed to move the bow of Shiva, but Rama snapped it effortlessly, unveiling his divine strength to the world."
      },
      {
        heading: "The Union of Empires",
        body: "The marriage of Rama and Sita permanently united the houses of Ayodhya and Mithila, intertwining martial righteousness with intellectual grace."
      }
    ]
  },
  {
    id: "dandaka",
    name: "Dandaka Forest",
    title: "The Dark Wilderness",
    accent: "#15803d",
    image: dandakaranyaImg,
    shortDesc: "A vast wilderness where princes transformed into legends through trial and duty.",
    symbol: "🌲",
    translations: {
      hi: {
        name: "दंडकारण्य",
        shortDesc: "वह विशाल और दुर्गम जंगल जहाँ राम ने राक्षसों का संहार करने की प्रतिज्ञा ली थी।",
        sections: [
          { heading: "आदिम विस्तार", body: "दंडकारण्य मध्य और दक्षिण भारत में फैला एक भयावह लेकिन सुंदर जंगल था। यहाँ घने वृक्षों के बीच ऋषियों के आश्रम और राक्षसों के ठिकाने दोनों मौजूद थे।" },
          { heading: "राक्षसों का आतंक", body: "रावण के सेनापति खर और दूषण यहाँ के ऋषियों को प्रताड़ित करते थे। यह जंगल संतों की हड्डियों से अटा पड़ा था, जिससे राम का हृदय द्रवित हो उठा।" },
          { heading: "भीष्म प्रतिज्ञा", body: "ऋषियों के कष्ट देख राम ने यहीं पर 'निशिचर हीन करहुं मही' (पृथ्वी को राक्षसों से मुक्त करने) की प्रतिज्ञा ली। यह राम के एक योद्धा के रूप में उदय का स्थल बना।" },
          { heading: "पावन पंचवटी", body: "इसी जंगल में गोदावरी के तट पर पंचवटी स्थित थी। यहीं से शूर्पणखा का नाक कटना और सीता का अपहरण जैसी महाकाव्य की प्रमुख घटनाएं शुरू हुईं।" },
        ]
      },
      te: {
        name: "దండకారణ్యం",
        shortDesc: "రామలక్ష్మణులు తమ అరణ్యవాసంలో ఎక్కువ కాలం గడిపిన భయంకరమైన అడవి.",
        sections: [
          { heading: "ప్రకృతి ఒడిలో", body: "దండకారణ్యం మధ్య మరియు దక్షిణ భారతదేశంలో విస్తరించి ఉంది. ఇక్కడ ఎత్తైన చెట్లు, క్రూర మృగాలతో పాటు మునుల ఆశ్రమాలు ఉండేవి." },
          { heading: "రాక్షస నిలయం", body: "ఖరదూషణుల వంటి రాక్షసులు ఇక్కడ మునులను హింసించేవారు. వారిని చూసి రాముడు రాక్షస సంహారానికి ఇక్కడే పూనుకున్నాడు." },
          { heading: "ప్రతిజ్ఞ", body: "మునుల కష్టాలు చూసి ఈ భూమిని రాక్షస రహితం చేస్తానని రాముడు ఇక్కడే ప్రతిజ్ఞ చేశాడు. ఇది ఆయన అవతార లక్ష్యానికి పునాది వేసింది." },
          { heading: "పంచవటి", body: "గోదావరి తీరాన ఉన్న పంచవటిలో రాముడు పర్ణశాల నిర్మించుకున్నాడు. ఇక్కడే శూర్పణఖ గర్వభంగం మరియు సీతాపహరణం జరిగాయి." },
        ]
      },
    },
    sections: [
      {
        heading: "The Primeval Expanse",
        body: "Dandakaranya was a massive wilderness stretching across central and southern India. It was a realm of treacherous terrain and ancient hermitages seeking spiritual isolation."
      },
      {
        heading: "The Demon Outpost",
        body: "The forest was corrupted by Rakshasa outposts. Demons under Khara terrorized and slaughtered peaceful ascetics, leaving the forest literally littered with their remains."
      },
      {
        heading: "The Sacred Vow",
        body: "Witnessing the devastation, Rama stood amidst skeletal remains and swore to eradicate the demon race. Here, he shed his princely restraint for his cosmic role as a protector."
      },
      {
        heading: "Panchavati Grove",
        body: "In a tranquil clearing near the Godavari river, the triad settled in Panchavati. This sanctuary became the site of Sita's abduction and the start of the great search."
      }
    ]
  },
  {
    id: "kishkindha",
    name: "Kishkindha",
    title: "The Hidden Kingdom",
    accent: "#b45309",
    image: kishkindaImg,
    shortDesc: "A subterranean empire of the Vanaras, carved into rocky peaks and caves.",
    symbol: "⛰",
    translations: {
      hi: {
        name: "किष्किंधा",
        shortDesc: "वानरों का पर्वत साम्राज्य, जो अपनी प्राकृतिक सुरक्षा और गुफाओं के लिए प्रसिद्ध था।",
        sections: [
          { heading: "पर्वतीय दुर्ग", body: "तुंगभद्रा नदी के तट पर स्थित यह साम्राज्य पहाड़ियों और गुफाओं में बना था। यहाँ बाहरी सेनाओं का पहुँचना लगभग असंभव था।" },
          { heading: "स्वर्ण नगरी", body: "पहाड़ी होने के बावजूद किष्किंधा के महल रत्नों से जड़े थे। यहाँ की सभ्यता अत्यंत उन्नत थी और वानर कबीलों का यहाँ पूर्ण प्रभुत्व था।" },
          { heading: "ऋष्यमूक पर्वत", body: "किष्किंधा की सीमा पर वह पर्वत था जहाँ सुग्रीव निर्वासन में रहते थे। बालि एक श्राप के कारण यहाँ कदम नहीं रख सकता था, जो सुग्रीव के लिए सुरक्षित स्थान बना।" },
          { heading: "युद्ध की लामबंदी", body: "राम-सुग्रीव मित्रता के बाद किष्किंधा वह केंद्र बना जहाँ से लाखों वानरों ने लंका की ओर कूच किया। यह वानर शक्ति का महान केंद्र था।" },
        ]
      },
      te: {
        name: "కిష్కింధ",
        shortDesc: "పర్వత గుహలలో వెలసిన వానర సామ్రాజ్యం మరియు సుగ్రీవుడి నిలయం.",
        sections: [
          { heading: "కొండల కోట", body: "తుంగభద్ర నది ఒడ్డున ఉన్న కిష్కింధ రాతి శిఖరాలు మరియు లోతైన గుహలతో నిర్మితమైంది. ఇది శత్రువులకు అభేద్యమైనది." },
          { heading: "వైభవం", body: "చూడటానికి రాతి గుహలైనప్పటికీ, లోపల వానర రాజుల వైభవం మరియు సంపద అపారంగా ఉండేది. ఇది వానర జాతికి రాజధాని." },
          { heading: "ఋష్యమూక పర్వతం", body: "వాలి భయంతో సుగ్రీవుడు ఇక్కడే తలదాచుకున్నాడు. ఇక్కడే హనుమంతుడు మొదటిసారిగా రామలక్ష్మణులను కలిశాడు." },
          { heading: "వానర సైన్యం", body: "సీతాన్వేషణ కోసం లక్షలాది వానర సైన్యం ఇక్కడి నుండే కదిలింది. ఇది రాముడి విజయానికి పునాది వేసిన ప్రదేశం." },
        ]
      },
    },
    sections: [
      {
        heading: "The Mountain Fortress",
        body: "Kishkindha was a subterranean empire carved into the rocky peaks of the Tungabhadra valley, making it impossible for foreign armies to besiege."
      },
      {
        heading: "A Golden Realm",
        body: "The interior featured vast halls illuminated by luminous gems in cavern ceilings. It held domain over every primate clan stretching across the subcontinent."
      },
      {
        heading: "The Cave of Exile",
        body: "Mount Rishyamukha provided sanctuary for Sugriva. Protected by a sage’s curse on Vali, it was here that the historic alliance with Rama was forged."
      },
      {
        heading: "The Gathering Storm",
        body: "Kishkindha became the staging ground for the greatest mobilization. Millions of Vanaras gathered here to begin their monumental march on Lanka."
      }
    ]
  },
  {
    id: "lanka",
    name: "Lanka",
    title: "The Golden Fortress",
    accent: "#9f1239",
    image: lankaImg,
    shortDesc: "The impregnable island citadel of the Rakshasas, unmatched in wealth and magic.",
    symbol: "🏰",
    translations: {
      hi: {
        name: "लंका",
        shortDesc: "स्वर्ण की वह अभेद्य नगरी जहाँ रावण का शासन था, जो ऐश्वर्य और माया का केंद्र थी।",
        sections: [
          { heading: "स्वर्णपुरी", body: "विश्वकर्मा द्वारा ठोस सोने से निर्मित लंका मूल रूप से कुबेर की थी। त्रिकुटा पर्वत पर स्थित यह नगरी चारों ओर से समुद्र से घिरी और अभेद्य थी।" },
          { heading: "अशोक वाटिका", body: "महल की चकाचौंध से दूर यह एक शांत उपवन था। रावण ने सीता को यहीं रखा था क्योंकि उनकी पवित्रता उसे सीता को महल में ले जाने से रोकती थी।" },
          { heading: "हनुमान दहन", body: "हनुमान ने अपनी पूंछ से इस स्वर्ण नगरी को जलाकर रावण के अहंकार को पहली चुनौती दी थी, जो लंका के पतन की शुरुआत थी।" },
          { heading: "अंतिम युद्ध", body: "लंका ने वह महासंग्राम देखा जिसने रावण के वंश का समूल नाश कर दिया। अंततः विभीषण के राज्याभिषेक के साथ यहाँ धर्म की स्थापना हुई।" },
        ]
      },
      te: {
        name: "లంక",
        shortDesc: "రావణుడు పాలించిన బంగారు నగరం మరియు రాక్షసుల దుర్భేద్యమైన కోట.",
        sections: [
          { heading: "బంగారు నగరం", body: "విశ్వకర్మ చేత నిర్మితమైన ఈ నగరం మొత్తం బంగారంతో మెరిసిపోయేది. త్రికూట పర్వతం మీద ఉన్న ఈ కోట చుట్టూ సముద్రం రక్షణగా ఉండేది." },
          { heading: "అశోకవనం", body: "రావణుడు సీతమ్మను బంధించిన ప్రదేశం. ఇది అందమైన అశోక వృక్షాలతో నిండి ఉండేది. హనుమంతుడు సీతమ్మను ఇక్కడే కలిశాడు." },
          { heading: "లంకా దహనం", body: "హనుమంతుడు తన తోకతో ఈ బంగారు నగరాన్ని తగులబెట్టి రావణుడికి హెచ్చరిక పంపాడు. ఇది లంకా వినాశనానికి నాంది." },
          { heading: "ధర్మ విజయం", body: "రామ-రావణ యుద్ధం తర్వాత లంకలో విభీషణుడి పట్టాభిషేకం జరిగింది. అధర్మం నశించి మళ్ళీ ధర్మం స్థాపించబడింది." },
        ]
      },
    },
    sections: [
      {
        heading: "The City of Gold",
        body: "Lanka was an architectural marvel constructed of solid gold. Placed atop Trikuta mountain and surrounded by the ocean, it was considered absolutely impregnable."
      },
      {
        heading: "Wealth and Decadence",
        body: "Its streets were paved with crystal and armories filled with celestial weapons. However, this beauty hid a society fueled by arrogance and dark magic."
      },
      {
        heading: "Ashok Vatika",
        body: "A serene grove where Ravana imprisoned Sita. Her purity prevented him from bringing her into the palace, making this the site of her quiet resistance."
      },
      {
        heading: "The Siege and Fall",
        body: "First scorched by Hanuman and later besieged by Rama's army, the invincible city finally fell, marking the end of the Rakshasa empire."
      }
    ]
  },
  {
    id: "ram-setu",
    name: "Rama Setu",
    title: "The Bridge of Stones",
    accent: "#0ea5e9",
    image: ramsetuImg,
    shortDesc: "A miraculous bridge binding the mainland to Lanka, built through faith and strength.",
    symbol: "🌉",
    translations: {
      hi: {
        name: "राम सेतु",
        shortDesc: "समुद्र पर बना वह अद्भुत पुल जिसने वानर सेना के लिए लंका का द्वार खोल दिया।",
        sections: [
          { heading: "सागर की चुनौती", body: "राम की सेना और लंका के बीच 100 योजन का गहरा समुद्र था। रावण का मानना था कि कोई भी वानर सेना इसे पार नहीं कर पाएगी।" },
          { heading: "राम का क्रोध", body: "जब समुद्र देव ने रास्ता नहीं दिया, तो राम ने अपने बाण से समुद्र सुखाने की चेतावनी दी। तब भयभीत होकर वरुण देव ने पुल बनाने का मार्ग सुझाया।" },
          { heading: "इंजीनियरिंग चमत्कार", body: "नल और नील नामक वानरों ने पत्थरों पर 'राम' लिखकर उन्हें समुद्र में तैराया। लाखों वानरों के श्रम से मात्र 5 दिनों में यह सेतु बनकर तैयार हो गया।" },
          { heading: "मनोवैज्ञानिक विजय", body: "जब रावण के दूतों ने खबर दी कि वानर समुद्र पर चलकर आ रहे हैं, तो लंका की मानसिक अजेयता युद्ध शुरू होने से पहले ही टूट गई।" },
        ]
      },
      te: {
        name: "రామసేతు",
        shortDesc: "సముద్రంపై వానరులు నిర్మించిన అద్భుత వారధి మరియు రామ నామ మహిమకు నిదర్శనం.",
        sections: [
          { heading: "సముద్రపు అడ్డంకి", body: "లంకకు వెళ్లడానికి నూరు యోజనాల సముద్రం అడ్డుగా ఉంది. దీన్ని దాటడం అసాధ్యమని అందరూ భావించారు." },
          { heading: "రాముడి ఆగ్రహం", body: "సముద్రుడు దారి ఇవ్వకపోవడంతో రాముడు తన బాణంతో సముద్రాన్ని ఇంకింపజేస్తానని హెచ్చరించాడు. అప్పుడు సముద్రుడు ప్రత్యక్షమై దారి చూపాడు." },
          { heading: "వారధి నిర్మాణం", body: "నల-నీలుల నేతృత్వంలో వానరులు రాళ్లపై 'రామ' అని రాసి సముద్రంలో వేశారు. అవి నీటిపై తేలడం ఒక అద్భుతం. కేవలం ఐదు రోజుల్లోనే వంతెన పూర్తయింది." },
          { heading: "విజయం వైపు", body: "ఈ వారధి ద్వారా వానర సైన్యం లంకకు చేరుకుంది. ఇది రాముడి సంకల్ప బలానికి మరియు వానరుల భక్తికి గుర్తుగా నిలిచింది." },
        ]
      },
    },
    sections: [
      {
        heading: "The Impassable Barrier",
        body: "The ocean offered natural invulnerability to Lanka. Swarming with monsters and storms, it was a barrier Ravana believed could never be overcome by men."
      },
      {
        heading: "The Wrath of Rama",
        body: "When the ocean god ignored Rama's prayers, he nocked an apocalyptic arrow to boil the sea dry. Varuna materialized immediately, submitting to Rama's will."
      },
      {
        heading: "The Engineering Miracle",
        body: "Nala and Nila engineered the crossing. By writing 'Rama' on stones, they made them buoyant, creating a miraculous bridge through millions of acts of devotion."
      },
      {
        heading: "The March to Destiny",
        body: "Completed in five days, the bridge shattered Lanka's psychological invulnerability even before the first arrow of the great war was fired."
      }
    ]
  }
];