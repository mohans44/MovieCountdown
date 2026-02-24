
import balaImg from '../assets/kandas/balakanda.jpg';
import ayodhyaImg from '../assets/kandas/ayodhyakand.jpg';
import aranyaImg from '../assets/kandas/aranyakanda.jpg';
import kishkindaImg from '../assets/kandas/kishkindakanda.jpeg';
import sundaraImg from '../assets/kandas/sundarakanda.jpg';
import yuddhaImg from '../assets/kandas/yuddhakanda.jpg';
import uttaraImg from '../assets/kandas/uttarakanda.png';


export const kandas = [
  {
    id: "bala-kanda",
    name: "Bala Kanda",
    title: "The Book of Childhood",
    accent: "#f59e0b",
    image: balaImg,
    shortDesc: "The divine birth of Rama and his brothers, his early education, and his marriage to Sita in Mithila.",
    symbol: "✧",
    translations: {
      hi: {
        name: "बाल कांड",
        shortDesc: "श्री राम और उनके भाइयों का दिव्य जन्म, उनकी शिक्षा-दीक्षा और मिथिला में माता सीता के साथ उनका पावन विवाह।",
        sections: [
          { heading: "दिव्य अवतार", body: "बाल कांड की शुरुआत महर्षि वाल्मीकि द्वारा एक 'आदर्श पुरुष' की खोज से होती है, जो उन्हें रामायण की रचना की प्रेरणा देती है। अयोध्या में, धर्मपरायण राजा दशरथ संतान प्राप्ति के लिए पुत्रकामेष्टि यज्ञ करते हैं। भगवान विष्णु, राम के रूप में अवतार लेते हैं और उनके अंश उनके भाइयों—भरत, लक्ष्मण और शत्रुघ्न के रूप में प्रकट होते हैं।" },
          { heading: "कर्तव्य का आह्वान", body: "जब राम अभी किशोर ही थे, तब महर्षि विश्वामित्र राजा दशरथ के दरबार में आए और अपने यज्ञों की रक्षा के लिए राम की सहायता मांगी। पिता के संकोच के बावजूद, राम और लक्ष्मण महर्षि के साथ प्रस्थान करते हैं। वन में, राम ने ताड़का जैसी राक्षसी का वध किया और विश्वामित्र से कई दिव्य अस्त्र-शस्त्र प्राप्त किए।" },
          { heading: "शिव धनुष और सीता स्वयंवर", body: "विश्वामित्र दोनों राजकुमारों को मिथिला ले जाते हैं, जहाँ राजा जनक अपनी पुत्री सीता के लिए स्वयंवर आयोजित कर रहे थे। चुनौती थी भगवान शिव के 'पिनाक' धनुष पर प्रत्यंचा चढ़ाना। बड़े-बड़े प्रतापी राजा उसे हिला भी न सके, पर राम ने सहजता से धनुष उठाया और प्रत्यंचा चढ़ाते ही वह बीच से टूट गया। इस तरह राम और सीता का विवाह संपन्न हुआ और इक्ष्वाकु व विदेह वंशों का मिलन हुआ।" },
        ]
      },
      te: {
        name: "బాలకాండ",
        shortDesc: "శ్రీరామ జననం, అన్నదమ్ముల బాల్యం, విశ్వామిత్ర యాగ రక్షణ మరియు మిథిలలో సీతమ్మతో జరిగిన పవిత్ర కళ్యాణం.",
        sections: [
          { heading: "దైవాంశ సంభూతులు", body: "బాలకాండ వాల్మీకి మహర్షి నారద మహర్షిని అడిగిన 'కోన్వస్మిన్ సాంప్రతం లోకే' అనే ప్రశ్నతో మొదలవుతుంది. సంతానం లేని దశరథ మహారాజు పుత్రకామేష్టి యజ్ఞం చేయగా, శ్రీమహావిష్ణువు రాముడిగా అవతరించాడు. ఆయన అంశలతో భరత, లక్ష్మణ, శతృఘ్నులు జన్మించారు." },
          { heading: "యాగ రక్షణ", body: "రాముడు ఇంకా బాలుడిగా ఉన్నప్పుడే, విశ్వామిత్ర మహర్షి తన యాగాలను ధ్వంసం చేస్తున్న మారీచ సుబాహులను అరికట్టడానికి రాముడిని పంపమని దశరథుడిని కోరతాడు. విశ్వామిత్రుని వెంట వెళ్లిన రామలక్ష్మణులు తాటక అనే రాక్షసిని సంహరించి, ముని నుండి దివ్యాస్త్రాలను పొందుతారు." },
          { heading: "శివధనుర్భంగం", body: "విశ్వామిత్రుడు రామలక్ష్మణులను మిథిలా నగరానికి తీసుకువెళతాడు. అక్కడ జనక మహారాజు సీతమ్మ కోసం ఏర్పాటు చేసిన స్వయంవరంలో శివధనుస్సును ఎక్కుపెట్టడం ప్రధాన సవాలు. ఎందరో వీరులు విఫలమైన చోట, రాముడు అవలీలగా ఆ విల్లును ఎత్తి విరిచాడు. దీనితో సీతారాముల కళ్యాణం నిశ్చయమైంది." },
        ]
      },
    },
    sections: [
      {
        heading: "The Divine Origin",
        body: "Bala Kanda begins with the sage Valmiki seeking the perfect man, leading him to compose the Ramayana. In Ayodhya, the righteous but heirless King Dasharatha performs the Putrakameshti Yagna. By divine intervention, Vishnu incarnates as Rama, with his infinite attributes divided among his brothers Bharata, Lakshmana, and Shatrughna."
      },
      {
        heading: "The Call to Destiny",
        body: "When Rama is still a boy, the formidable sage Vishwamitra arrives at Dasharatha's court demanding Rama's assistance to slay demons terrorizing his ashram. Despite a father's hesitation, Rama and Lakshmana depart. In the forest, Rama demonstrates his divine martial prowess by slaying the demoness Tataka, earning celestial weapons (astras) from the sage."
      },
      {
        heading: "The Bow of Shiva",
        body: "Vishwamitra guides the princes to Mithila, where King Janaka is hosting a Swayamvar for his daughter, Sita. The challenge is to string the Pinaka, the legendary bow of Lord Shiva. While mighty kings fail to even move it, Rama effortlessly lifts, strings, and snaps the immense bow in half. The sound echoes across the three worlds, securing Sita's hand in marriage and uniting the houses of Ikshvaku and Videha."
      }
    ]
  },
  {
    id: "ayodhya-kanda",
    name: "Ayodhya Kanda",
    title: "The Book of Ayodhya",
    accent: "#b45309",
    image: ayodhyaImg,
    shortDesc: "The preparations for Rama's coronation, shattered by Queen Kaikeyi's boons leading to a 14-year exile.",
    symbol: "❂",
    translations: {
      hi: {
        name: "अयोध्या कांड",
        shortDesc: "राम के राज्याभिषेक की खुशियों के बीच रानी कैकेयी के दो वरदानों के कारण उनका चौदह वर्षों का वनवास।",
        sections: [
          { heading: "राज्याभिषेक की घोषणा", body: "वृद्धावस्था को देखते हुए राजा दशरथ ने राम को अयोध्या का 'युवराज' बनाने का निर्णय लिया। इस समाचार से अयोध्या में उत्सव का माहौल फैल गया, हर गली को सजाया गया और प्रजा अपने प्रिय राजकुमार के अभिषेक की प्रतीक्षा करने लगी।" },
          { heading: "कैकेयी का कोप", body: "दासी मंथरा ने रानी कैकेयी के मन में ईर्ष्या का विष घोल दिया। उसने कैकेयी को विश्वास दिलाया कि राम के राजा बनने से भरत का अनिष्ट होगा। कैकेयी ने दशरथ से अपने वे दो वरदान मांगे जो उन्होंने वर्षों पहले युद्ध में दिए थे—भरत का राज्याभिषेक और राम को चौदह वर्ष का वनवास।" },
          { heading: "वन गमन", body: "दशरथ दुखी थे पर वचन से बंधे थे। राम ने मुस्कुराते हुए पिता के वचन को निभाया और वनवास स्वीकार किया। सीता और लक्ष्मण ने भी उनके साथ जाने की जिद की। राजसी वस्त्र त्याग कर उन्होंने वल्कल धारण किए। पूरी अयोध्या रो पड़ी जब राम वन की ओर निकले, और विरह में राजा दशरथ ने अपने प्राण त्याग दिए।" },
        ]
      },
      te: {
        name: "అయోధ్యకాండ",
        shortDesc: "శ్రీరామ పట్టాభిషేక ప్రయత్నం, కైకేయి కోరిన వరాల వల్ల కలిగిన ఆటంకం మరియు రాముని అరణ్యవాస గమనం.",
        sections: [
          { heading: "పట్టాభిషేక ప్రకటన", body: "వృద్ధాప్యం సమీపిస్తుండటంతో దశరథ మహారాజు తన జ్యేష్ఠ పుత్రుడైన రాముడికి పట్టాభిషేకం చేయాలని నిశ్చయించుకున్నాడు. ఈ వార్తతో అయోధ్య నగరం మొత్తం పండగ వాతావరణంలో మునిగిపోయింది." },
          { heading: "కైకేయి కోపగృహం", body: "మంథర మాటల వల్ల ప్రభావితమైన కైకేయి, పూర్వం దశరథుడు తనకు ఇచ్చిన రెండు వరాలను ఇప్పుడు కోరుతుంది. ఒకటి భరతుడికి పట్టాభిషేకం, రెండోది రాముడికి పద్నాలుగేళ్ల అరణ్యవాసం. సత్యసంధుడైన దశరథుడు మారుమాట చెప్పలేక కుమిలిపోయాడు." },
          { heading: "అరణ్యవాసారంభం", body: "తండ్రి మాటను నిలబెట్టడం కోసం రాముడు పట్టాభిషేకాన్ని త్యజించి అడవికి వెళ్లడానికి సిద్ధపడ్డాడు. అన్నను విడిచి ఉండలేక లక్ష్మణుడు, పతియే దైవమని సీతమ్మ కూడా రాముడి వెంట నడిచారు. అయోధ్య ప్రజల రోదనల మధ్య రాముడు అడవికి వెళ్లగా, ఆ పుత్ర వియోగం తట్టుకోలేక దశరథుడు ప్రాణాలు విడిచాడు." },
        ]
      },
    },
    sections: [
      {
        heading: "The Joyous Proclamation",
        body: "Sensing his advancing age, King Dasharatha decides to crown Rama as the Yuvaraja (Crown Prince) of Ayodhya. The entire city erupts in ecstatic celebration, decorating the streets and preparing for the coronation of their beloved prince."
      },
      {
        heading: "The Poisoned Mind",
        body: "Manthara, a malicious maid, manipulates Dasharatha's favorite queen, Kaikeyi. Tapping into her insecurities, Manthara convinces Kaikeyi that Rama's coronation will mean the ruin of her own son, Bharata. Kaikeyi demands the two boons Dasharatha had promised her years ago: Bharata's coronation and Rama's banishment to the Dandaka forest for fourteen years."
      },
      {
        heading: "The Departure",
        body: "Bound by dharma, an utterly devastated Dasharatha grants the boons. Rama accepts his exile cheerfully, seeing it as his duty to uphold his father's word. Sita and Lakshmana fiercely refuse to be left behind, stripping themselves of royal garments and donning the bark of ascetics. The populace of Ayodhya weeps as the triad departs, and King Dasharatha dies of a broken heart shortly after."
      }
    ]
  },
  {
    id: "aranya-kanda",
    name: "Aranya Kanda",
    title: "The Book of the Forest",
    accent: "#15803d",
    image: aranyaImg,
    shortDesc: "The peaceful forest life disrupted by demons, culminating in the tragic abduction of Sita by Ravana.",
    symbol: "🌿",
    translations: {
      hi: {
        name: "अरण्य कांड",
        shortDesc: "वन में शांतिपूर्ण जीवन और उसके बाद राक्षसों के उत्पात के बीच रावण द्वारा माता सीता का अपहरण।",
        sections: [
          { heading: "पंचवटी प्रवास", body: "राम, सीता और लक्ष्मण गोदावरी के तट पर पंचवटी में निवास करते हैं। दस वर्षों तक उन्होंने वहां ऋषियों की संगति में शांत जीवन बिताया। वे वन के जीव-जंतुओं और प्रकृति के साथ पूर्ण सामंजस्य में रहते थे।" },
          { heading: "शूर्पणखा और खर-दूषण वध", body: "शांति तब भंग हुई जब राक्षसी शूर्पणखा राम के सौंदर्य पर मोहित हो गई। सीता पर आक्रमण करने के कारण लक्ष्मण ने उसके नाक और कान काट दिए। इसके प्रतिशोध में खर और दूषण ने 14,000 राक्षसों के साथ हमला किया, लेकिन राम ने अकेले ही पूरी सेना का संहार कर दिया।" },
          { heading: "स्वर्ण मृग और सीता हरण", body: "अपमान से जलती शूर्पणखा ने रावण को उकसाया। रावण ने मारीच की सहायता ली, जिसने स्वर्ण मृग का रूप धरकर राम-लक्ष्मण को कुटिया से दूर कर दिया। रावण ने साधु का वध धरकर सीता का हरण किया और मार्ग में रोकने वाले वृद्ध जटायु को मरणासन्न कर दिया।" },
        ]
      },
      te: {
        name: "అరణ్యకాండ",
        shortDesc: "మునుల ఆశ్రమ సందర్శన, శూర్పణఖ గర్వభంగం, మారీచ వధ మరియు రావణుడి ద్వారా సీతాపహరణం.",
        sections: [
          { heading: "పంచవటి నివాసం", body: "రామలక్ష్మణులు సీతమ్మతో కలిసి గోదావరి తీరంలోని పంచవటిలో పర్ణశాల నిర్మించుకుని నివసించారు. అక్కడ మునుల ఆశ్రమాలను సందర్శిస్తూ, వారి యాగాలను కాపాడుతూ పది సంవత్సరాలు ప్రశాंतంగా గడిపారు." },
          { heading: "శూర్పణఖ ముక్కుచెవులు కోయుట", body: "రావణుడి చెల్లెలు శూర్పణఖ రాముడిని చూసి మోహించి, సీతమ్మను చంపబోగా లక్ష్మణుడు ఆమె ముక్కుచెవులను కోసి పంపాడు. దానికి ప్రతీకారంగా వచ్చిన ఖరదూషణాది రాక్షస మూకలను రాముడు ఒంటిచేత్తో సంహరించాడు." },
          { heading: "మాయా మృగం - సీతాపహరణం", body: "శూర్పణఖ ద్వారా సీతమ్మ అందాన్ని విన్న రావణుడు, మారీచుడిని మాయా మృగంగా పంపాడు. ఆ జింక వెనుక రాముడు, లక్ష్మణుడు వెళ్లిన సమయంలో రావణుడు సన్యాసి వేషంలో వచ్చి సీతమ్మను అపహరించాడు. అడ్డుకున్న జటాయువు రెక్కలను రావణుడు ఖండించాడు." },
        ]
      },
    },
    sections: [
      {
        heading: "Life in Panchavati",
        body: "Rama, Sita, and Lakshmana settle in the tranquil grove of Panchavati along the banks of the Godavari river. For over ten years, they live a peaceful, ascetic life, visiting sages, destroying isolated demon bands that terrorize the ashrams, and living in deep harmony with nature."
      },
      {
        heading: "The Mutilation of Surpanakha",
        body: "The peace shatters when the demoness Surpanakha approaches Rama with lust. Rejected by Rama and mocked by Lakshmana, she attacks Sita in a rage. Retaliating, Lakshmana cuts off her nose and ears. She flees to her fierce brothers, Khara and Dushana, who attack Panchavati with an army of 14,000 demons. Rama annihilates the entire force single-handedly."
      },
      {
        heading: "The Golden Deer & Abduction",
        body: "Seeking revenge, Surpanakha incites her supreme brother, Ravana, by describing Sita's unparalleled beauty. Ravana enlists the demon Maricha, who disguises himself as a mesmerizing golden deer to lure Rama and Lakshmana away. In their absence, Ravana appears as a mendicant and abducts Sita, mercilessly striking down the ancient vulture king Jatayu who attempts to stop him."
      }
    ]
  },
  {
    id: "kishkindha-kanda",
    name: "Kishkindha Kanda",
    title: "The Book of Kishkindha",
    accent: "#ea580c",
    image: kishkindaImg,
    shortDesc: "Rama's alliance with the Vanara king Sugriva, the slaying of Vali, and the mobilization of the search parties.",
    symbol: "⛰",
    translations: {
      hi: {
        name: "किष्किंधा कांड",
        shortDesc: "राम और हनुमान की भेंट, सुग्रीव से मैत्री, बालि का वध और सीता की खोज का आरंभ।",
        sections: [
          { heading: "राम-हनुमान मिलन और सुग्रीव मैत्री", body: "सीता की खोज में राम और लक्ष्मण पंपा सरोवर पहुँचे, जहाँ उनकी भेंट हनुमान से हुई। हनुमान ने उन्हें सुग्रीव से मिलवाया। अग्नि के साक्षी में राम और सुग्रीव ने अटूट मित्रता की शपथ ली।" },
          { heading: "बालि वध", body: "सुग्रीव को न्याय दिलाने के लिए राम ने उनके अत्याचारी भाई बालि का वध किया। बालि को वरदान था कि सामने वाले की आधी शक्ति उसे मिल जाएगी, इसलिए राम ने ओट से बालि को बाण मारा। बालि की मृत्यु के बाद सुग्रीव का किष्किंधा के राजा के रूप में अभिषेक हुआ।" },
          { heading: "सीता की खोज का अभियान", body: "सुग्रीव ने वानरों की विशाल सेना को चारों दिशाओं में भेजा। हनुमान, अंगद और जाम्बवान के नेतृत्व में दक्षिणी दल को संपाती (जटायु का भाई) से ज्ञात हुआ कि सीता समुद्र पार लंका में रावण की कैद में हैं।" },
        ]
      },
      te: {
        name: "కిష్కింధాకాండ",
        shortDesc: "శ్రీరామ-హనుమత్ సమాగమం, సుగ్రీవ సఖ్యం, వాలి వధ మరియు వానరుల సీతాన్వేషణ.",
        sections: [
          { heading: "రామ-హనుమత్ సమాగమం", body: "సీతమ్మ కోసం వెతుకుతున్న రాముడు పంపా సరోవరం వద్ద హనుమంతుడిని కలుసుకున్నాడు. హనుమంతుడు రామలక్ష్మణులను సుగ్రీవుడి వద్దకు తీసుకువెళ్లగా, వారిద్దరూ అగ్నిసాక్షిగా స్నేహం చేసుకున్నారు." },
          { heading: "వాలి వధ", body: "సుగ్రీవుడిని వేధించిన అతని అన్న వాలిని రాముడు ఏడు సాల వృక్షాలను ఒక్క బాణంతో ఛేదించి తన శక్తిని నిరూపించుకున్నాడు. యుద్ధంలో వాలిని ఓడించి సుగ్రీవుడికి కిష్కింధ రాజ్యాన్ని అప్పగించాడు." },
          { heading: "సీతాన్వేషణారంభం", body: "సుగ్రీవుడు వానర సైన్యాన్ని నలుదిక్కులా పంపాడు. హనుమంతుడు, అంగదుడు, జాంబవంతుల బృందం దక్షిణ దిశగా వెళ్లి, సంపాతి ద్వారా సీతమ్మ లంకలో ఉందని తెలుసుకున్నారు." },
        ]
      },
    },
    sections: [
      {
        heading: "The Divine Alliance",
        body: "Wandering in devastating grief, Rama and Lakshmana reach the Pampa lake where they meet Hanuman. Realizing Rama's divinity, Hanuman takes them to Mount Rishyamukha to meet the exiled Vanara prince, Sugriva. Before a fire, Rama and Sugriva forge a pact of brotherhood and mutual assistance."
      },
      {
        heading: "The Fall of Vali",
        body: "To fulfill his vow, Rama must eliminate Sugriva's invincible brother, King Vali, who had usurped Sugriva's wife and kingdom. Since Vali's boon absorbs half his opponent's strength in direct combat, Rama strikes him from concealment while Sugriva engages him in a duel. Vali questions the righteousness of the act, but dies enlightened by Rama's explanation of dharma."
      },
      {
        heading: "The Search Begins",
        body: "After a period of delay during the monsoon, a stern warning from Lakshmana spurs Sugriva into action. He summons millions of Vanaras from across the world and dispatches search parties in all four cardinal directions. The southern party, led by Prince Angada, Jambavan, and Hanuman, reaches the edge of the boundless ocean, discovering from Jatayu's brother Sampati that Sita is imprisoned in the island fortress of Lanka."
      }
    ]
  },
  {
    id: "sundara-kanda",
    name: "Sundara Kanda",
    title: "The Book of Beauty",
    accent: "#6366f1",
    image: sundaraImg,
    shortDesc: "Hanuman's magnificent leap across the ocean, his discovery of Sita, and the burning of Lanka.",
    symbol: "🌊",
    translations: {
      hi: {
        name: "सुंदर कांड",
        shortDesc: "हनुमान का समुद्र लांघना, अशोक वाटिका में सीता से भेंट और लंका दहन की शौर्य गाथा।",
        sections: [
          { heading: "हनुमान का महाप्रयाण", body: "जाम्बवान द्वारा शक्ति याद दिलाने पर हनुमान विशाल रूप धारण कर समुद्र पार करने के लिए उड़ान भरते हैं। सुरसा और सिंहिका जैसी बाधाओं को पार कर वे लंका पहुँचे और सूक्ष्म रूप धारण कर नगर में प्रवेश किया।" },
          { heading: "अशोक वाटिका में दर्शन", body: "लंका के महलों में सीता को न पाकर हनुमान अशोक वाटिका पहुँचे। वहाँ उन्होंने रावण द्वारा सीता को डराते हुए देखा। रावण के जाने पर हनुमान ने सीता को राम की अंगूठी दी और राम का संदेश सुनाया, जिससे सीता के मन में आशा जागी।" },
          { heading: "लंका दहन", body: "रावण की शक्ति को परखने के लिए हनुमान ने वाटिका उजाड़ दी। पकड़े जाने पर रावण ने उनकी पूंछ में आग लगा दी। हनुमान ने उस अग्नि से स्वर्ण लंका को जला डाला और राम के पास लौटकर 'दृष्ट्वा सीता' (सीता को देख लिया) का शुभ समाचार दिया।" },
        ]
      },
      te: {
        name: "సుందరకాండ",
        shortDesc: "హనుమంతుని సముద్ర లంఘనం, అశోకవనంలో సీతమ్మను కనుగొనుట మరియు లంకా దహనం.",
        sections: [
          { heading: "సముద్ర లంఘనం", body: "జాంబవంతుడు ప్రేరేపించగా హనుమంతుడు మహోన్నత రూపం దాల్చి సముద్రాన్ని లంఘించాడు. దారిలో మైనాక పర్వతం, సురస, సింహికల అడ్డంకులను అధిగమించి లంకలో అడుగుపెట్టాడు." },
          { heading: "సీతమ్మ దర్శనం", body: "అశోకవనంలో శోకిస్తున్న సీతమ్మను హనుమంతుడు చూశాడు. రాముడు పంపిన ఆనవాలుగా 'రామ ముద్రిక'ను ఇచ్చి, ఆమెలో ధైర్యం నింపాడు. శిరోమణిని ఆనవాలుగా తీసుకున్నాడు." },
          { heading: "లంకా దహనం", body: "రావణుడి ఆస్థానంలో తన విశ్వరూపాన్ని చూపిన హనుమంతుడు, తన తోకకు పెట్టిన నిప్పుతో లంకను దహనం చేశాడు. తిరిగి వచ్చి రాముడికి 'చూశాను సీతమ్మను' అని శుభవార్త అందించాడు." },
        ]
      },
    },
    sections: [
      {
        heading: "The Great Leap",
        body: "Reminded of his forgotten divine powers by Jambavan, Hanuman expands to a colossal size and leaps across the southern ocean. He overcomes supernatural obstacles—Surasa the sea-serpent and Simhika the shadow-grabbing demoness—before landing on the shores of Lanka, reducing his size to infiltrate the golden fortress unnoticed at night."
      },
      {
        heading: "Discovery in Ashok Vatika",
        body: "After searching Ravana's opulent palaces, Hanuman finds a desolate Sita in the Ashok Vatika grove, surrounded by terrifying demoness guards. He witnesses Ravana attempting to coerce her and her fierce, unwavering rejection. When alone, Hanuman approaches her, presenting Rama's signet ring as proof of his identity and offering to carry her back, which she refuses, insisting Rama must win her back in battle."
      },
      {
        heading: "The Burning of Lanka",
        body: "To assess Ravana's military strength and leave a warning, Hanuman destroys the grove and allows himself to be captured by Indrajit. Brought before Ravana, his tail is set on fire as punishment. Hanuman shrinks, escapes his bonds, and uses his flaming tail to set the magnificent city of Lanka ablaze before taking a triumphant leap back across the ocean to deliver the news to Rama."
      }
    ]
  },
  {
    id: "yuddha-kanda",
    name: "Yuddha Kanda",
    title: "The Book of War",
    accent: "#9f1239",
    image: yuddhaImg,
    shortDesc: "The monumental battle between Rama's Vanara army and Ravana's demon forces, ending in the triumph of light.",
    symbol: "⚔",
    translations: {
      hi: {
        name: "युद्ध कांड (लंका कांड)",
        shortDesc: "राम सेतु का निर्माण, राम और रावण की सेनाओं के बीच महासंग्राम और बुराई पर अच्छाई की विजय।",
        sections: [
          { heading: "राम सेतु निर्माण", body: "वानर सेना समुद्र तट पर पहुँची। नल और नील के नेतृत्व में वानरों ने समुद्र पर तैरते पत्थरों का पुल (राम सेतु) बनाया, जिससे विशाल सेना लंका में प्रवेश कर सकी।" },
          { heading: "लंका का महासंग्राम", body: "दोनों सेनाओं के बीच भयंकर युद्ध हुआ। कुंभकर्ण, मेघनाद (इंद्रजीत) जैसे महाबली राक्षस मारे गए। लक्ष्मण मेघनाद के साथ भीषण युद्ध में विजयी हुए।" },
          { heading: "रावण वध और विजय", body: "युद्ध के अंत में राम और रावण का आमना-सामना हुआ। विभीषण के परामर्श पर राम ने रावण की नाभि में ब्रह्मास्त्र मारा, जिससे दस सिरों वाले अहंकारी रावण का अंत हुआ। विभीषण का लंका के राजा के रूप में अभिषेक हुआ और राम अयोध्या लौटे।" },
        ]
      },
      te: {
        name: "యుద్ధకాండ",
        shortDesc: "రామసేతు నిర్మాణం, రామ-రావణ ఘోర యుద్ధం మరియు అధర్మంపై ధర్మం సాధించిన విజయం.",
        sections: [
          { heading: "రామసేతు నిర్మాణం", body: "నల-నీలుల ఆధ్వర్యంలో వానర సైన్యం సముద్రంపై రాళ్లతో వంతెన నిర్మించింది. దీని ద్వారా రాముడు తన సైన్యంతో లంకకు చేరుకున్నాడు." },
          { heading: "రామ-రావణ యుద్ధం", body: "కుంభకర్ణుడు, ఇంద్రజిత్తు వంటి వీరులు యుద్ధంలో నేలకూలారు. రాముడు-రావణుడు ముఖాముఖీ తలపడ్డారు. చివరకు విభీషణుడి సాయంతో రావణుడి నాభిలోని అమృత కలశాన్ని రాముడు ఛేదించి అతడిని సంహరించాడు." },
          { heading: "పట్టాభిషేకం", body: "సీతమ్మను విడిపించిన రాముడు, విభీషణుడిని లంకకు రాజును చేశాడు. అరణ్యవాస సమయం ముగియగానే పుష్పక విమానంపై అయోధ్యకు చేరుకుని పట్టాभिషేకం చేసుకున్నాడు." },
        ]
      },
    },
    sections: [
      {
        heading: "The Bridge on the Ocean",
        body: "With the location of Lanka confirmed, the immense Vanara army marches to the ocean. Rama prays to the ocean god, then threatens to boil the sea dry when ignored. In response, the ocean god allows the Vanara engineers, Nala and Nila, to construct the legendary Rama Setu (a bridge of floating stones) across the strait."
      },
      {
        heading: "The Great War",
        body: "The armies clash in a battle of apocalyptic proportions. The Vanaras fight with trees, boulders, and raw strength against Rakshasas wielding dark sorcery and celestial weapons. Ravana's greatest warriors fall one by one: the sleeping giant Kumbhakarna is slain by Rama, and the invincible sorcerer Indrajit is finally killed by Lakshmana after nearly wiping out the Vanara leaders."
      },
      {
        heading: "The Fall of Ravana",
        body: "The war culminates in a terrifying, prolonged duel between Rama and Ravana. For every head Rama severs, another grows in its place. Finally, acting on the crucial advice of Vibhishana (Ravana's righteous brother who defected to Rama), Rama fires the ultimate Brahmastra aimed at Ravana's navel, destroying his source of immortality and felling the demon king."
      },
      {
        heading: "The Agni Pariksha & Return",
        body: "Following the victory, Sita undergoes the controversial Agni Pariksha (trial by fire) to prove her absolute purity during captivity to the world. Emerging unscathed, she is reunited with Rama. With the fourteen-year exile complete, they fly back to Ayodhya on the magical Pushpaka Vimana, where Rama is finally crowned Emperor."
      }
    ]
  },
  {
    id: "uttara-kanda",
    name: "Uttara Kanda",
    title: "The Book of the Aftermath",
    accent: "#475569",
    image: uttaraImg,
    shortDesc: "The prosperous reign of Rama, the tragic banishment of Sita, and the conclusion of the epic avatar.",
    symbol: "⚖",
    translations: {
      hi: {
        name: "उत्तर कांड",
        shortDesc: "राम राज्य की स्थापना, सीता का वनवास, लव-कुश का जन्म और श्री राम का बैकुंठ गमन।",
        sections: [
          { heading: "राम राज्य", body: "राम का शासन 'राम राज्य' के रूप में प्रसिद्ध हुआ, जहाँ चारों ओर शांति, न्याय और सुख था। यह एक आदर्श शासन का प्रतीक बन गया।" },
          { heading: "सीता का निर्वासन और लव-कुश", body: "लोक-निंदा के कारण राम ने गर्भवती सीता का त्याग कर दिया। सीता वाल्मीकि आश्रम में रहीं, जहाँ लव और कुश का जन्म हुआ। उन्होंने महर्षि से रामायण का गान सीखा।" },
          { heading: "महाप्रयाण", body: "सीता अंततः धरती माता की गोद में समा गईं। अपना अवतार कार्य पूर्ण कर राम ने सरयू नदी में जल समाधि ली और विष्णु रूप में लौट गए।" },
        ]
      },
      te: {
        name: "ఉత్తరకాండ",
        shortDesc: "రామరాజ్యం, సీతమ్మ పరిత్యాగం, లవకుశుల జననం మరియు శ్రీరామ అవతార సమాప్తి.",
        sections: [
          { heading: "రామరాజ్యం", body: "రాముడి పాలనలో అయోధ్య సుభిక్షంగా ఉంది. ధర్మం నాలుగు పాదాల మీద నడిచింది. ప్రజలందరూ సుఖశాంతులతో విరాజిల్లారు." },
          { heading: "లవకుశులు", body: "లోకాపవాదం వల్ల రాముడు సీతమ్మను అడవికి పంపాడు. వాల్మీకి ఆశ్రమంలో లవకుశులు జన్మించి, ఆయన వద్ద రామాయణ గాథను నేర్చుకున్నారు." },
          { heading: "అవతార సమాప్తి", body: "సీతమ్మ భూమాతలో ఐక్యమవ్వగా, శ్రీరాముడు కూడా తన అవతార కార్యం ముగించి సరయూ నదిలో ప్రవేశించి వైకుంఠానికి వెళ్లాడు." },
        ]
      },
    },
    sections: [
      {
        heading: "Rama Rajya",
        body: "Rama's rule over Ayodhya, known as Rama Rajya, becomes the ultimate benchmark for a utopian society. It is an era of absolute justice, unprecedented prosperity, and spiritual fulfillment, where there is no disease, famine, or premature death, and all citizens follow their dharma."
      },
      {
        heading: "The Tragic Banishment",
        body: "Despite Sita's trial by fire, whispers and gossip circulate among the citizens of Ayodhya questioning her purity after living in Ravana's house. To uphold the absolute, unimpeachable standard of a king who must be above all public suspicion, a heartbroken Rama banishes a pregnant Sita to the forest. She finds refuge in the ashram of Sage Valmiki."
      },
      {
        heading: "Lava, Kusha, and the Epic",
        body: "In the forest, Sita gives birth to twin sons, Lava and Kusha. Valmiki educates them and teaches them his grand composition—the Ramayana. Years later, during Rama's Ashvamedha Yagna in Ayodhya, the unrecognized twins sing the epic before the entire court, piercing Rama's heart with sorrow as he realizes they are his sons."
      },
      {
        heading: "The Return to the Earth",
        body: "Sita is brought to the court to prove her purity one final time. Declaring that she possesses nothing left to prove to the world, she calls upon her mother, Bhumi Devi (the Earth). The ground parts, and Sita descends back into the earth, leaving Rama in eternal grief. Later, having completed his cosmic mission, Rama willingly walks into the Sarayu river, returning to his divine form as Vishnu."
      }
    ]
  }
];
