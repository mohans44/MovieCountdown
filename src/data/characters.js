import ramaImg from "../assets/characters/rama.jpg"
import sitaImg from "../assets/characters/sita.jpg"
import lakshmanaImg from "../assets/characters/lakshmana.jpg"
import hanumanImg from "../assets/characters/hanuman.jpg"
import ravanaImg from "../assets/characters/ravana.jpg"
import dasharathaImg from "../assets/characters/dasharatha.jpg"
import kausalyaImg from "../assets/characters/kausalya.jpg"
import sumitraImg from "../assets/characters/sumitra.jpg"
import kaikeyiImg from "../assets/characters/kaikeyi.jpg"
import bharataImg from "../assets/characters/bharata.jpg"
import shatrughnaImg from "../assets/characters/shatrughna.jpg"
import sugrivaImg from "../assets/characters/sugriva.jpg"
import vibhishanaImg from "../assets/characters/vibhishana.jpg"
import kumbhakarnaImg from "../assets/characters/kumbhakarna.jpg"
import indrajitImg from "../assets/characters/indrajit.jpg"
import janakaImg from "../assets/characters/janaka.jpg"
import mandodariImg from "../assets/characters/mandodari.jpg"
import jatayuImg from "../assets/characters/jatayu.jpg"
import valiImg from "../assets/characters/vali.jpg"


export const characters = [
  {
    id: "rama",
    name: "Rama",
    title: "The Ideal King",
    accent: "#E8832A",
    image: ramaImg,
    shortDesc: "The seventh avatar of Vishnu and the embodiment of dharma.",
    symbol: "✧",
    sections: [
      { heading: "Birth & Divinity", body: "Rama was born to King Dasharatha and Queen Kaushalya of Ayodhya. He is revered as the seventh avatar of Lord Vishnu, descending to earth to restore cosmic order and defeat the demon king Ravana." },
      { heading: "The Exile", body: "On the eve of his coronation, Rama was banished for fourteen years due to his stepmother Kaikeyi's boons. He accepted the exile with serenity, serving his father's word above personal power." },
      { heading: "The War of Lanka", body: "When Sita was abducted, Rama forged an alliance with the Vanara army. He led them across a miraculous bridge over the ocean to wage a righteous war against the formidable forces of Lanka." },
      { heading: "Maryada Purushottam", body: "Rama is worshipped as the 'Ideal Man' who never veered from the path of righteousness, regardless of his personal suffering, setting the standard for morality in leadership." }
    ],
    translations: {
      hi: {
        name: "राम",
        shortDesc: "विष्णु के सातवें अवतार और धर्म के साक्षात स्वरूप।",
        sections: [
          { heading: "जन्म और देवत्व", body: "राम का जन्म अयोध्या के राजा दशरथ और रानी कौशल्या के घर हुआ था। उन्हें भगवान विष्णु के सातवें अवतार के रूप में पूजा जाता है, जिन्होंने पृथ्वी पर धर्म की पुनर्स्थापना और राक्षस राज रावण के अंत के लिए अवतार लिया।" },
          { heading: "वनवास का त्याग", body: "अपने राज्याभिषेक की पूर्व संध्या पर, अपनी सौतेली माँ कैकेयी के वचनों को पूरा करने के लिए, राम ने चौदह वर्षों का वनवास स्वीकार किया। उन्होंने व्यक्तिगत सुख के ऊपर पिता की आज्ञा और सत्य को प्राथमिकता दी।" },
          { heading: "लंका का धर्मयुद्ध", body: "जब रावण ने सीता का अपहरण किया, तो राम ने सुग्रीव और हनुमान की वानर सेना के साथ अटूट गठबंधन किया। उन्होंने समुद्र पर सेतु का निर्माण किया और लंका की आसुरी शक्तियों के विरुद्ध एक धर्मयुद्ध का नेतृत्व किया।" },
          { heading: "मर्यादा पुरुषोत्तम", body: "राम को 'मर्यादा पुरुषोत्तम' के रूप में पूजा जाता है, जिन्होंने घोर कष्टों के बावजूद कभी धर्म का मार्ग नहीं छोड़ा। उनका जीवन आज भी न्याय और नैतिकता का सर्वोच्च मानक माना जाता है।" }
        ]
      },
      te: {
        name: "రాముడు",
        shortDesc: "మహావిష్ణువు ఏడవ అవతారం మరియు ధర్మ స్వరూపం.",
        sections: [
          { heading: "జననం & దైవత్వం", body: "అయోధ్య రాజైన దశరథుడు మరియు కౌసల్యా దేవి పుణ్యఫలంగా రాముడు జన్మించాడు. అధర్మాన్ని నశింపజేసి, లోక కల్యాణం కోసం విష్ణుమూర్తి ఏడవ అవతారంగా రాముడు ఈ ధరణిపై అవతరించాడు." },
          { heading: "పితృవాక్య పరిపాలన", body: "పట్టాభిషేకానికి సిద్ధమవుతున్న తరుణంలో, తండ్రి ఇచ్చిన మాట కోసం రాముడు పదునాలుగేళ్ల అరణ్యవాసానికి వెళ్లాడు. రాజభోగాలను తృణప్రాయంగా భావించి, ధర్మాన్ని నిలబెట్టిన ఆదర్శ పురుషుడు ఆయన." },
          { heading: "లంకా యుద్ధం", body: "సీతమ్మను రావణుడు అపహరించినప్పుడు, రాముడు వానర సైన్యంతో కలిసి సముద్రంపై వారధిని నిర్మించాడు. సామాన్య మానవుడిగా ఉంటూనే అసాధారణ బలపరాక్రమాలతో రావణుడిని సంహరించి ధర్మాన్ని గెలిపించాడు." },
          { heading: "మర్యాద పురుషోత్తముడు", body: "జీవితంలో ఎన్ని కష్టాలు ఎదురైనా సత్యం మరియు మర్యాద తప్పని వాడు కాబట్టి రాముడిని 'మర్యాద పురుషోత్తముడు' అని కొలుస్తారు. ఆయన పాలన నేటికీ రామరాజ్యంగా ఆదర్శప్రాయం." }
        ]
      }
    }
  },
  {
    id: "dasharatha",
    name: "Dasharatha",
    title: "Emperor of Ayodhya",
    accent: "#78350f",
    image: dasharathaImg,
    shortDesc: "The emperor of Ayodhya and father of Lord Rama.",
    symbol: "❂",
    sections: [
      { heading: "Chakravarti King", body: "Dasharatha was a descendant of the Raghu dynasty and ruler of Kosala. His name means 'one who can drive a chariot in ten directions'." },
      { heading: "Putrakameshti", body: "Having no heirs, he performed a grand sacrifice (Yagna), which resulted in the birth of his four divine sons: Rama, Bharat, Lakshman, and Shatrughna." },
      { heading: "Truth Bound", body: "His tragedy was his commitment to his word. Bound by the boons given to Kaikeyi, he could not stop Rama's exile, even though it killed him." },
      { heading: "Tragic Death", body: "He died of a broken heart shortly after Rama left for the forest, proving that his love for his eldest son was the center of his existence." }
    ],
    translations: {
      hi: {
        name: "दशरथ",
        shortDesc: "अयोध्या के प्रतापी राजा जिन्होंने सत्य के लिए अपने प्राणों का त्याग कर दिया।",
        sections: [
          { heading: "चक्रवर्ती राजा", body: "दशरथ इक्ष्वाकु वंश के प्रतापी राजा थे। उनके नाम का अर्थ है 'वह जो दसों दिशाओं में रथ चलाने में सक्षम हो'।" },
          { heading: "पुत्र प्राप्ति", body: "संतान न होने के कारण उन्होंने पुत्रकामेष्टि यज्ञ किया, जिसके फलस्वरूप उन्हें राम, भरत, लक्ष्मण और शत्रुघ्न के रूप में चार पुत्र मिले।" },
          { heading: "सत्य के बंधन", body: "उनकी त्रासदी उनके वचनों के प्रति अटूट प्रतिबद्धता थी। कैकेयी के वचनों से बंधे होने के कारण, वे राम के वनवास को नहीं रोक सके।" },
          { heading: "शोकपूर्ण अंत", body: "राम के वन जाने के कुछ ही समय बाद उन्होंने पुत्र वियोग में अपने प्राण त्याग दिए, जो उनके असीम प्रेम का प्रमाण है।" }
        ]
      },
      te: {
        name: "దశరథుడు",
        shortDesc: "అయోధ్య చక్రవర్తి మరియు రాముడికి ప్రాణప్రదమైన తండ్రి.",
        sections: [
          { heading: "మహారాజు", body: "దశరథుడు ఇక్ష్వాకు వంశానికి చెందిన గొప్ప రాజు. దశరథుడు అంటే పది దిశలలో రథాన్ని నడపగల సమర్థుడు అని అర్థం." },
          { heading: "పుత్ర సంతానం", body: "చాలా కాలం సంతానం లేకపోవడంతో పుత్రకామేష్టి యజ్ఞం చేసి, రామ, భరత, లక్ష్మణ, శతృఘ్నులను కుమారులుగా పొందాడు." },
          { heading: "సత్యవ్రతుడు", body: "మాట తప్పని గుణం ఆయనది. కైకేయికి ఇచ్చిన మాట కోసం తనకెంతో ఇష్టమైన కొడుకును అడవికి పంపాల్సి వచ్చింది." },
          { heading: "విషాదం", body: "రాముడి ఎడబాటును భరించలేక, పుత్ర శోకంతో ఆయన మరణించాడు. తండ్రి ప్రేమానురాగాలకి ఆయన ఒక నిదర్శనం." }
        ]
      }
    }
  },
  {
    id: "kausalya",
    name: "Kausalya",
    title: "Queen Mother of Ayodhya",
    accent: "#F472B6",
    image: kausalyaImg,
    shortDesc: "The eldest queen of Dasharatha and the mother of Rama.",
    symbol: "✿",
    sections: [
      { heading: "The Virtuous Queen", body: "Kausalya, the princess of Magadha, was known for her wisdom and immense patience. As the senior-most queen, she maintained the dignity of the royal household through years of childlessness." },
      { heading: "Divine Motherhood", body: "After years of penance, she was blessed to be the mother of Lord Rama. Her bond with Rama was one of profound mutual respect and silent, spiritual understanding." },
      { heading: "The Silent Sufferer", body: "When Rama was banished, her world crumbled. Despite her grief, she composed herself to comfort others, embodying the silent strength of a mother facing unbearable loss." },
      { heading: "Legacy of Grace", body: "She is revered as the epitome of the 'ideal mother' in Hindu culture, representing the quiet power of devotion and the resilience of a woman's spirit." }
    ],
    translations: {
      hi: {
        name: "कौशल्या",
        shortDesc: "राजा दशरथ की ज्येष्ठ रानी और भगवान राम की माता।",
        sections: [
          { heading: "धर्मात्मा रानी", body: "मगध की राजकुमारी कौशल्या अपनी बुद्धिमानी और अपार धैर्य के लिए जानी जाती थीं। ज्येष्ठ रानी के रूप में उन्होंने राजघराने की मर्यादा को सदैव अक्षुण्ण रखा।" },
          { heading: "दिव्य मातृत्व", body: "कठिन तपस्या के बाद उन्हें भगवान राम की माता बनने का सौभाग्य प्राप्त हुआ। राम के प्रति उनका प्रेम निस्वार्थ और आध्यात्मिक था।" },
          { heading: "धैर्य की प्रतिमूर्ति", body: "राम के वनवास के समय उनका हृदय विदीर्ण हो गया था, फिर भी उन्होंने दूसरों को सहारा दिया। उनका मौन संघर्ष उनके चरित्र की महानता को दर्शाता है।" },
          { heading: "आदर्श माता", body: "हिंदू संस्कृति में कौशल्या को एक आदर्श माता के रूप में पूजा जाता है, जो त्याग और ममता की साक्षात मूरत हैं।" }
        ]
      },
      te: {
        name: "కౌసల్య",
        shortDesc: "దశరథుని పెద్ద భార్య మరియు శ్రీరాముని తల్లి.",
        sections: [
          { heading: "ధర్మపత్ని", body: "దశరథుని పట్టమహిషిగా కౌసల్య అత్యంత గౌరవప్రదమైన స్థానాన్ని పొందింది. మగధ రాజకుమారి అయిన ఆమె తన విజ్ఞతతో అంతఃపురాన్ని నడిపించేది." },
          { heading: "పుత్ర వాత్సల్యం", body: "ఎన్నో ఏళ్ళ నిరీక్షణ తర్వాత ఆమెకు రాముడు జన్మించాడు. తన ప్రాణ సమానమైన కొడుకుపై ఆమెకు ఉన్న మమకారం అనంతమైనది." },
          { heading: "నిశ్శబ్ద వేదన", body: "రాముడిని అడవికి పంపినప్పుడు ఆమె అనుభవించిన శోకం వర్ణనాతీతం. అయినా భర్త పట్ల, కొడుకు పట్ల తన బాధ్యతను విస్మరించని ధీరవనిత." },
          { heading: "మాతృత్వం", body: "భారతీయ సంస్కృతిలో కౌసల్య ఆదర్శ మాతృత్వానికి నిలువుటద్దం. ఆమె ఓర్పు, మమకారం నేటికీ స్ఫూర్తిదాయకం." }
        ]
      }
    }
  },
  {
    id: "sumitra",
    name: "Sumitra",
    title: "The Wise Queen",
    accent: "#10B981",
    image: sumitraImg,
    shortDesc: "The second queen of Dasharatha, mother of Lakshmana and Shatrughna.",
    symbol: "✺",
    sections: [
      { heading: "Wisdom & Insight", body: "Sumitra was often considered the wisest of the three queens. She possessed a deep understanding of dharma and the interconnected fates of the four brothers." },
      { heading: "A Mother's Sacrifice", body: "She encouraged Lakshmana to accompany Rama into the forest, famously telling him to 'look upon Rama as Dasharatha and the forest as Ayodhya.' She prioritized duty over her own maternal attachment." },
      { heading: "Balanced Spirit", body: "Her sons, Lakshmana and Shatrughna, were devoted to Rama and Bharata respectively. She fostered a household of selfless service where egos had no place." },
      { heading: "The Unsung Heroine", body: "Sumitra remains a symbol of selfless sacrifice. She endured the separation from both her sons with a steady heart, knowing they were serving a higher purpose." }
    ],
    translations: {
      hi: {
        name: "सुमित्रा",
        shortDesc: "राजा दशरथ की दूसरी रानी और लक्ष्मण व शत्रुघ्न की माता।",
        sections: [
          { heading: "विदुषी रानी", body: "सुमित्रा को तीनों रानियों में सबसे अधिक बुद्धिमती माना जाता था। उन्हें धर्म और चारों भाइयों के परस्पर संबंधों का गहरा ज्ञान था।" },
          { heading: "त्याग की प्रेरणा", body: "उन्होंने ही लक्ष्मण को राम के साथ वन जाने के लिए प्रेरित किया था। उन्होंने कहा था, 'राम को अपने पिता दशरथ के समान और वन को अयोध्या के समान समझना'।" },
          { heading: "संतुलित स्वभाव", body: "उनके पुत्रों ने सदैव अपने बड़े भाइयों की सेवा को अपना धर्म माना। सुमित्रा ने ही उनमें निस्वार्थ सेवा के बीज बोए थे।" },
          { heading: "मौन नायिका", body: "सुमित्रा निस्वार्थ त्याग की प्रतीक हैं। उन्होंने अपने दोनों पुत्रों के वियोग को धैर्य के साथ सहा, क्योंकि वे जानती थीं कि वे उच्च उद्देश्य की सेवा कर रहे हैं।" }
        ]
      },
      te: {
        name: "సుమిత్ర",
        shortDesc: "దశరథుని రెండో భార్య, లక్ష్మణ శతృఘ్నుల తల్లి.",
        sections: [
          { heading: "జ్ఞానమూర్తి", body: "ముగ్గురు భార్యలలో సుమిత్ర అత్యంత విజ్ఞానవంతురాలు. ధర్మం పట్ల ఆమెకు ఉన్న అవగాహన అపారమైనది." },
          { heading: "హితబోధ", body: "లక్ష్మణుడిని రాముడి వెంట వెళ్ళమని ప్రోత్సహిస్తూ, 'రాముడిని తండ్రిలా, అడవిని అయోధ్యలా భావించు' అని చెప్పిన మహనీయురాలు." },
          { heading: "నిస్వార్థం", body: "తన కొడుకులు ఇద్దరూ అన్నల సేవలో తరించాలని ఆకాంక్షించిన త్యాగమూర్తి. ఆమె పెంపకం వల్లనే లక్ష్మణ శతృఘ్నులు గొప్ప సేవకులు అయ్యారు." },
          { heading: "ధీరత్వం", body: "కొడుకుల ఎడబాటును భరిస్తూ కూడా ధైర్యంగా నిలబడిన సుమిత్ర, రామాయణంలో ఒక నిశ్శబ్ద నాయకురాలు." }
        ]
      }
    }
  },
  {
    id: "kaikeyi",
    name: "Kaikeyi",
    title: "The Queen of Decisions",
    accent: "#C084FC",
    image: kaikeyiImg,
    shortDesc: "The queen whose boons sent Rama into the forest.",
    symbol: "☾",
    sections: [
      { heading: "The Warrior Queen", body: "Kaikeyi was Dasharatha's youngest and favorite queen. She was a skilled charioteer who once saved the King's life in battle, earning two boons." },
      { heading: "Manthara's Influence", body: "Originally, Kaikeyi loved Rama more than her own son. It was the toxic influence of her maid Manthara that poisoned her mind during the coronation." },
      { heading: "Two Boons", body: "She used her boons to ask for Bharat's coronation and Rama's exile for fourteen years, which broke Dasharatha's heart and led to his death." },
      { heading: "Redemption", body: "After the death of Dasharatha and Bharat's rejection of her act, she lived in deep regret, eventually seeking Rama's forgiveness upon his return." }
    ],
    translations: {
      hi: {
        name: "कैकेयी",
        shortDesc: "अयोध्या की वो रानी जिनके वरदानों ने रामायण की दिशा बदल दी।",
        sections: [
          { heading: "योद्धा रानी", body: "कैकेयी राजा दशरथ की सबसे प्रिय रानी थीं। वे एक कुशल रथ चालक थीं जिन्होंने युद्ध में राजा की जान बचाई थी, जिसके बदले उन्हें दो वरदान मिले थे।" },
          { heading: "मंथरा का विष", body: "मूल रूप से कैकेयी राम को अपने पुत्र भरत से भी अधिक प्रेम करती थीं। यह उनकी दासी मंथरा की संगति थी जिसने उनके मन में ईर्ष्या और असुरक्षा का विष घोला।" },
          { heading: "दो वरदान", body: "उन्होंने अपने वरदानों का उपयोग भरत के राज्याभिषेक और राम के 14 वर्ष के वनवास के लिए किया, जिसने राजा दशरथ का हृदय तोड़ दिया।" },
          { heading: "पश्चाताप", body: "दशरथ की मृत्यु और भरत द्वारा खुद को ठुकराए जाने के बाद, उन्हें अपनी भूल का अहसास हुआ और वे अंत तक ग्लानि में रहीं।" }
        ]
      },
      te: {
        name: "కైకేయి",
        shortDesc: "దశరథుని భార్య, మంథర మాట విని రాముడిని అడవికి పంపిన రాణి.",
        sections: [
          { heading: "వీరనారి", body: "కైకేయి కేవలం అందగత్తె మాత్రమే కాదు, యుద్ధ రంగంలో దశరథుడికి తోడుగా ఉండే వీరవనిత. ఒక యుద్ధంలో దశరథుని ప్రాణాలు కాపాడినందుకు ఆయన ఆమెకు రెండు వరాలు ఇచ్చారు." },
          { heading: "మంథర ప్రభావం", body: "నిజానికి కైకేయికి రాముడంటే ప్రాణం. కానీ మంథర అనే దాసి నూరిపోసిన మాటల వల్ల తన కొడుకు భవిష్యత్తు కోసం రాముడిని అడవికి పంపాలనే కఠిన నిర్ణయం తీసుకుంది." },
          { heading: "రెండు వరాలు", body: "తనకు ఉన్న రెండు వరాలను ఉపయోగించి భరతుడికి పట్టాభిషేకం, రాముడికి 14 ఏళ్ల అరణ్యవాసం కోరి అయోధ్యలో విషాదాన్ని నింపింది." },
          { heading: "పశ్చాత్తాపం", body: "రాముడు వెళ్ళిపోవడం, దశరథుడు మరణించడం, మరియు కొడుకు భరతుడు తనను అసహ్యించుకోవడం చూసి ఆమె ఎంతో కుమిలిపోయింది." }
        ]
      }
    }
  },
  {
    id: "lakshmana",
    name: "Lakshmana",
    title: "The Loyal Brother",
    accent: "#4ADE80",
    image: lakshmanaImg,
    shortDesc: "The loyal younger brother who followed Rama into the forest.",
    symbol: "🗡",
    sections: [
      { heading: "Absolute Devotion", body: "Lakshmana is an avatar of Shesha Naag, the divine serpent. He chose to accompany Rama into exile, leaving behind his own wife and the comforts of the palace." },
      { heading: "The Sleepless Guard", body: "It is said that Lakshmana did not sleep for fourteen years so he could guard Rama and Sita. He asked the Goddess of Sleep to grant his share of sleep to his wife, Urmila." },
      { heading: "Fierce Warrior", body: "He was a highly skilled archer and was responsible for killing Indrajit, Ravana's most powerful son, who could only be defeated by someone who had conquered sleep." },
      { heading: "Protective Boundary", body: "The 'Lakshmana Rekha' drawn by him for Sita's safety remains a cultural metaphor for a line that should not be crossed." }
    ],
    translations: {
      hi: {
        name: "लक्ष्मण",
        shortDesc: "भगवान राम के समर्पित अनुज और शेषनाग के साक्षात अवतार।",
        sections: [
          { heading: "अनन्य निष्ठा", body: "लक्ष्मण शेषनाग के अवतार थे। उन्होंने अपनी पत्नी और राजमहल के सुखों को छोड़कर वनवास में राम के साथ जाने का निर्णय लिया, जो उनकी निस्वार्थ सेवा को दर्शाता है।" },
          { heading: "निद्राहीन प्रहरी", body: "माना जाता है कि लक्ष्मण वनवास के 14 वर्षों तक कभी नहीं सोए ताकि वे राम और सीता की रक्षा कर सकें। उन्होंने निद्रा देवी से अपनी नींद का हिस्सा अपनी पत्नी उर्मिला को देने का अनुरोध किया था।" },
          { heading: "भयंकर योद्धा", body: "वे एक अत्यंत कुशल धनुर्धर थे। रावण के सबसे शक्तिशाली पुत्र इंद्रजीत का वध लक्ष्मण ने ही किया था, जिसे केवल वही हरा सकता था जिसने निद्रा को जीत लिया हो।" },
          { heading: "सुरक्षा की सीमा", body: "सीता की रक्षा के लिए उनके द्वारा खींची गई 'लक्ष्मण रेखा' आज भी भारतीय संस्कृति में उस मर्यादा का प्रतीक है जिसे कभी पार नहीं किया जाना चाहिए।" }
        ]
      },
      te: {
        name: "లక్ష్మణుడు",
        shortDesc: "రాముడి అడుగుజాడల్లో నడిచే సోదరుడు మరియు శేషాంశ సంభూతుడు.",
        sections: [
          { heading: "అచంచల భక్తి", body: "లక్ష్మణుడు ఆదిశేషుని అవతారంగా పరిగణించబడతాడు. అన్న రాముడి కోసం తన భార్యను, రాజభోగాలను విడిచిపెట్టి అడవికి వెళ్ళిన గొప్ప త్యాగమూర్తి." },
          { heading: "నిద్రను జయించిన వాడు", body: "రామలక్ష్మణులు అడవిలో ఉన్న 14 ఏళ్లు లక్ష్మణుడు అస్సలు నిద్రపోలేదు. తన వాటా నిద్రను కూడా భార్య ఊర్మిళకు ఇమ్మని నిద్రాదేవిని కోరి, అన్నకు రాత్రింబవళ్లు కాపలా కాశాడు." },
          { heading: "వీర యోధుడు", body: "లక్ష్మణుడు సాటిలేని విలుకాడు. నిద్రను జయించిన వాడు మాత్రమే చంపగలడనే వరం ఉన్న రావణ కుమారుడు ఇంద్రజిత్తును లక్ష్మణుడు సంహరించి విజయ కేతనం ఎగురవేశాడు." },
          { heading: "రక్షణ కవచం", body: "సీతమ్మ రక్షణ కోసం ఆయన గీసిన 'లక్ష్మణ రేఖ' నేటికీ హద్దులు దాటకూడదు అనే విషయానికి ఒక గొప్ప ఉదాహరణగా నిలిచిపోయింది." }
        ]
      }
    }
  },
  {
    id: "bharata",
    name: "Bharata",
    title: "The Righteous Regent",
    accent: "#2563eb",
    image: bharataImg,
    shortDesc: "The brother who ruled Ayodhya in Rama's name.",
    symbol: "⚖",
    sections: [
      { heading: "Duty over Desire", body: "When Kaikeyi secured the throne for him, Bharata was heartbroken. He rejected the crown and went to the forest to beg Rama to return to Ayodhya." },
      { heading: "The Paduka Ruler", body: "When Rama insisted on fulfilling his father's vow, Bharata requested Rama's wooden sandals. He placed them on the throne, ruling as a servant-regent from the village of Nandigram." },
      { heading: "Ideal Character", body: "Bharata represents the peak of fraternal love. He lived like an ascetic for fourteen years, mirroring Rama's hardships in the forest while staying in the kingdom." },
      { heading: "Selflessness", body: "He vowed to immolate himself if Rama did not return on the exact day his exile ended, proving his life was tied entirely to his brother's presence." }
    ],
    translations: {
      hi: {
        name: "भरत",
        shortDesc: "राम के वो भाई जिन्होंने अयोध्या के सिंहासन पर खड़ाऊं रखकर शासन किया।",
        sections: [
          { heading: "कर्तव्य और प्रेम", body: "जब कैकेयी ने उनके लिए सिंहासन प्राप्त किया, तो भरत का हृदय टूट गया। उन्होंने राजमुकुट को अस्वीकार कर दिया और राम से अयोध्या लौटने की विनती करने के लिए चित्रकूट चले गए।" },
          { heading: "पादुका शासन", body: "जब राम ने पिता का वचन निभाने के लिए लौटने से मना किया, तो भरत ने उनकी चरण पादुकाएं (खड़ाऊं) मांगी। उन्होंने उन्हें सिंहासन पर रखा और स्वयं नंदीग्राम गांव से एक सेवक के रूप में शासन किया।" },
          { heading: "आदर्श चरित्र", body: "भरत भाईचारे के प्रेम की पराकाष्ठा हैं। उन्होंने 14 वर्षों तक एक तपस्वी की तरह जीवन जिया, और महल में रहकर भी वन के कष्टों को मानसिक रूप से भोगा।" },
          { heading: "निस्वार्थ भावना", body: "उन्होंने कसम खाई थी कि यदि राम वनवास समाप्त होने के ठीक समय पर नहीं लौटे, तो वे आत्मदाह कर लेंगे। उनका जीवन पूरी तरह से उनके बड़े भाई के प्रति समर्पित था।" }
        ]
      },
      te: {
        name: "భరతుడు",
        shortDesc: "రాముడి ప్రతినిధిగా రాజ్య భారాన్ని మోసిన సోదర ప్రేమామూర్తి.",
        sections: [
          { heading: "నిస్వార్థ బుద్ధి", body: "తల్లి కైకేయి తన కోసం రాజ్యాన్ని కోరినప్పటికీ, భరతుడు దానిని తిరస్కరించాడు. రాముడిని తిరిగి రమ్మని వేడుకోవడానికి అడవికి వెళ్ళిన ధర్మపరుడు ఆయన." },
          { heading: "పాదుకా పట్టాభిషేకం", body: "రాముడు తిరిగి రావడానికి నిరాకరించినప్పుడు, ఆయన పాదుకలను తీసుకుని అయోధ్య సింహాసనంపై ఉంచి, తాను ఒక సేవకుడిలా నందిగ్రామం నుండి పాలన సాగించాడు." },
          { heading: "ఆదర్శ సోదరుడు", body: "రాముడు అడవిలో కష్టపడుతుంటే తాను రాజభవనంలో ఉండటం తగదని భావించి, 14 ఏళ్ల పాటు మునిలా జీవించిన గొప్ప మనసు భరతుడిది." },
          { heading: "ప్రమాణం", body: "రాముడు అరణ్యవాసం ముగిసిన వెంటనే తిరిగి రాకపోతే ప్రాణత్యాగం చేస్తానని ప్రతిజ్ఞ చేశాడు. భరతుడి భక్తి సోదర భావానికి ఒక శిఖరం వంటిది." }
        ]
      }
    }
  },
  {
    id: "shatrughna",
    name: "Shatrughna",
    title: "Destroyer of Enemies",
    accent: "#059669",
    image: shatrughnaImg,
    shortDesc: "The youngest brother and the pillar of Ayodhya's administration.",
    symbol: "🛡",
    sections: [
      { heading: "Quiet Strength", body: "Shatrughna was the youngest of the four brothers. While Rama and Lakshmana were in the forest and Bharata was in prayer, Shatrughna took over the heavy burden of ruling Ayodhya." },
      { heading: "Loyalty to Bharata", body: "Just as Lakshmana was devoted to Rama, Shatrughna was deeply devoted to Bharata. He supported Bharata during his time of grief and helped maintain order in the kingdom." },
      { heading: "Lavanasura Conquest", body: "Shatrughna performed a great feat by killing the demon Lavanasura, who had become a menace to the sages. He then established the beautiful city of Mathura." },
      { heading: "Administrator", body: "He is often remembered for his administrative skills and his ability to handle domestic issues while the more famous battles were happening elsewhere." }
    ],
    translations: {
      hi: {
        name: "शत्रुघ्न",
        shortDesc: "सबसे छोटे भाई जिन्होंने अयोध्या की व्यवस्था को सुचारू रूप से संभाला।",
        sections: [
          { heading: "शांत शक्ति", body: "शत्रुघ्न चारों भाइयों में सबसे छोटे थे। जब राम और लक्ष्मण वन में थे और भरत तपस्या में लीन थे, तब शत्रुघ्न ने ही अयोध्या के राजकाज का भारी बोझ उठाया।" },
          { heading: "भरत के प्रति निष्ठा", body: "जैसे लक्ष्मण राम के प्रति समर्पित थे, वैसे ही शत्रुघ्न भरत के प्रति समर्पित थे। उन्होंने दुःख के समय में भरत को संभाला और राज्य में शांति व्यवस्था बनाए रखी।" },
          { heading: "लवणासुर का वध", body: "शत्रुघ्न ने ऋषि-मुनियों को आतंकित करने वाले असुर लवणासुर का वध करके एक महान पराक्रम दिखाया। इसके बाद उन्होंने सुंदर नगरी मथुरा की स्थापना की।" },
          { heading: "कुशल प्रशासक", body: "उन्हें अक्सर उनके प्रशासनिक कौशल के लिए याद किया जाता है। जब अन्य भाई धर्मयुद्धों में व्यस्त थे, तब उन्होंने आंतरिक शासन को बखूबी संभाला।" }
        ]
      },
      te: {
        name: "శతృఘ్నుడు",
        shortDesc: "అయోధ్య పరిపాలనను నిశ్శబ్దంగా నడిపించిన కనిష్ట సోదరుడు.",
        sections: [
          { heading: "నిశ్శబ్ద యోధుడు", body: "నలుగురు అన్నదమ్ములలో శతృఘ్నుడు అందరికంటే చిన్నవాడు. అన్నలు అడవిలో ఉన్నప్పుడు, భరతుడు నందిగ్రామంలో ఉన్నప్పుడు అయోధ్య ప్రజలను కనిపెట్టుకుని చూసుకున్నాడు." },
          { heading: "భరతుని సేవ", body: "లక్ష్మణుడు రాముడికి ఎలాగో, శతృఘ్నుడు భరతుడికి అలా నీడలా తోడుండేవాడు. భరతుడి మానసిక వ్యధను పంచుకుని, రాజ్య కార్యకలాపాలలో ఆయనకు కుడిభుజంగా నిలిచాడు." },
          { heading: "లవణాసుర సంహారం", body: "ఋషులను హింసిస్తున్న భయంకరమైన లవణాసురుడిని శతృఘ్నుడు సంహరించి అద్భుత వీరత్వాన్ని చాటుకున్నాడు. ఆ తర్వాత మధురా నగరాన్ని స్థాపించి పాలించాడు." },
          { heading: "సమర్థ పరిపాలకుడు", body: "రామాయణంలో ఎక్కువ ప్రచారానికి దూరంగా ఉన్నప్పటికీ, అంతర్గత పరిపాలనను మరియు ప్రజా క్షేమాన్ని నిర్వహించడంలో శతృఘ్నుడు అత్యంత సమర్థుడు." }
        ]
      }
    }
  },
  {
    id: "janaka",
    name: "Janaka",
    title: "The Rajarshi of Mithila",
    accent: "#FDE047",
    image: janakaImg,
    shortDesc: "The saint-king of Mithila and the father of Sita.",
    symbol: "⚖",
    sections: [
      { heading: "Rajarshi Status", body: "King Janaka was a rare combination of an administrator and a spiritual saint. He was famous for his philosophical depth and for hosting grand spiritual debates." },
      { heading: "The Finding of Sita", body: "While plowing the sacred ground for a ritual, he discovered an infant in a golden furrow. He raised her as his daughter, Sita, seeing her as a blessing from Mother Earth." },
      { heading: "The Divine Bow", body: "He possessed the legendary bow of Lord Shiva and declared that only the man who could string it would be worthy of marrying Sita, leading to the arrival of Rama." },
      { heading: "Philosophical Legacy", body: "Janaka is often cited in ancient texts as the ideal householder-saint, demonstrating that one can achieve spiritual liberation while performing worldly duties." }
    ],
    translations: {
      hi: {
        name: "जनक",
        shortDesc: "मिथिला के राजर्षि और माता सीता के पिता।",
        sections: [
          { heading: "राजर्षि पद", body: "राजा जनक एक महान प्रशासक और आध्यात्मिक संत का अद्भुत संगम थे। वे अपनी दार्शनिक गहराई और ज्ञान के लिए विश्व विख्यात थे।" },
          { heading: "सीता की प्राप्ति", body: "जब वे यज्ञ के लिए भूमि जोत रहे थे, तब उन्हें एक स्वर्ण कलश में नन्ही कन्या प्राप्त हुई। उन्होंने उसे अपनी पुत्री सीता के रूप में पाला।" },
          { heading: "शिव धनुष", body: "उनके पास भगवान शिव का पौराणिक धनुष था। उन्होंने घोषणा की थी कि जो इसे चढ़ाएगा, वही सीता का वर होगा, जिससे राम और सीता का मिलन हुआ।" },
          { heading: "दार्शनिक विरासत", body: "जनक को शास्त्रों में एक आदर्श गृहस्थ-संत के रूप में जाना जाता है, जो सांसारिक कर्तव्य निभाते हुए भी वैराग्य में रहते थे।" }
        ]
      },
      te: {
        name: "జనకుడు",
        shortDesc: "మిథిలా నగరానికి రాజర్షి మరియు సీతమ్మ తండ్రి.",
        sections: [
          { heading: "రాజర్షి", body: "జనక మహారాజు కేవలం రాజు మాత్రమే కాదు, పరమ జ్ఞాని. రాజ్యాన్ని పాలిస్తూనే బ్రహ్మజ్ఞానాన్ని పొందిన మహనీయుడు." },
          { heading: "సీతమ్మ జననం", body: "యజ్ఞ భూమిని దున్నుతుండగా నాగలికి తగిలిన పెట్టెలో ఆయనకు సీతమ్మ లభించింది. ఆమెను తన కన్నకూతురిలా ప్రేమతో పెంచాడు." },
          { heading: "శివధనుస్సు", body: "ఆయన వద్ద ఉన్న శివధనుస్సును ఎవరు ఎక్కుపెడతారో వారికే సీతను ఇచ్చి వివాహం చేస్తానని ప్రకటించి, రాముడి పరాక్రమాన్ని లోకానికి చాటాడు." },
          { heading: "ఆదర్శం", body: "లోకంలో ఉంటూనే తామరాకుపై నీటిబొట్టులా ఎలా జీవించాలో జనక మహారాజు జీవితం మనకు నేర్పుతుంది." }
        ]
      }
    }
  },
  {
    id: "sita",
    name: "Sita",
    title: "Goddess of Earth",
    accent: "#D4AF37",
    image: sitaImg,
    shortDesc: "Daughter of the Earth and the embodiment of purity and strength.",
    symbol: "❖",
    sections: [
      { heading: "Born of Earth", body: "Sita was found in a golden furrow by King Janaka while he was ploughing the sacrificial ground. She is considered the daughter of Bhumi Devi (Earth) and an avatar of Lakshmi." },
      { heading: "The Swayamvar", body: "Sita's hand was won by Rama after he successfully lifted and broke the heavy bow of Lord Shiva, a feat that no other king or suitor could achieve." },
      { heading: "Captivity in Lanka", body: "Abducted by Ravana, Sita was kept in the Ashok Vatika. Despite immense psychological pressure, she remained steadfast in her devotion, refusing to even look at her captor." },
      { heading: "Symbol of Strength", body: "Sita represents silent resilience and inner power. Her life was defined by extreme sacrifice, yet she remained dignified and firm in her convictions until the end." }
    ],
    translations: {
      hi: {
        name: "सीता",
        shortDesc: "धरती की पुत्री और पवित्रता व धैर्य की साक्षात प्रतिमूर्ति।",
        sections: [
          { heading: "भूमिपुत्री", body: "सीता राजा जनक को हल चलाते समय भूमि की गहराई से प्राप्त हुई थीं। वे साक्षात लक्ष्मी का स्वरूप और धरती माता की पुत्री मानी जाती हैं, जिनका दिव्य जन्म उनकी शुद्धता का प्रतीक है।" },
          { heading: "शिव धनुष और स्वयंवर", body: "सीता का हाथ पाने के लिए राम ने भगवान शिव के अत्यंत भारी पिनाक धनुष को न केवल उठाया बल्कि उसे तोड़ दिया। यह गठबंधन दो आत्माओं के अटूट प्रेम और सम्मान की शुरुआत थी।" },
          { heading: "अशोक वाटिका में धैर्य", body: "रावण द्वारा अपहरण के बाद, सीता को अशोक वाटिका में कैद किया गया था। तमाम प्रलोभनों और डरावे के बावजूद, उन्होंने राम के प्रति अपनी अटूट निष्ठा और चारित्रिक दृढ़ता को कभी कम नहीं होने दिया।" },
          { heading: "शक्ति और बलिदान", body: "सीता का जीवन मूक सहनशक्ति और आंतरिक शक्ति का प्रमाण है। वनवास और अग्निपरीक्षा जैसी चुनौतियों को झेलते हुए भी वे सदैव गरिमापूर्ण बनी रहीं, जो उन्हें नारी शक्ति का आदर्श बनाती हैं।" }
        ]
      },
      te: {
        name: "సీత",
        shortDesc: "భూమి పుత్రిక మరియు పవిత్రతకు అచంచలమైన నిదర్శనం.",
        sections: [
          { heading: "భూమిజ", body: "జనక మహారాజు యజ్ఞ భూమిని దున్నుతుండగా నాగలి చాలులో సీతమ్మ శిశువుగా లభించింది. ఆమె భూదేవి పుత్రికగా మరియు సాక్షాత్తు లక్ష్మీదేవి అవతారంగా పూజలందుకుంటోంది." },
          { heading: "శివధనుస్సు - స్వయంవరం", body: "ఎంతో మంది రాజులు ఎత్తలేకపోయిన శివధనుస్సును రాముడు అవలీలగా ఎత్తి విరిచినప్పుడు సీతమ్మ ఆయనను వరించింది. ఈ వివాహం భూమిపై అత్యంత పవిత్రమైన బంధంగా నిలిచిపోయింది." },
          { heading: "అశోకవనంలో ధైర్యం", body: "రావణుడు సీతమ్మను అపహరించి అశోకవనంలో బందీగా ఉంచినప్పటికీ, ఆమె రామనామాన్ని వీడలేదు. రావణుడి బెదిరింపులకు ఏమాత్రం లొంగకుండా తన పాతివ్రత్యాన్ని కాపాడుకుంది." },
          { heading: "శక్తి స్వరూపిణి", body: "సీతమ్మ ఓర్పుకు మరియు త్యాగానికి మారుపేరు. ఎన్ని కష్టాలు ఎదురైనా ఆమె గౌరవంగా నిలబడటం ఆమె అంతర్గత శక్తికి నిదర్శనం. నేటికీ ఆమె భారతీయ స్త్రీలకి గొప్ప ఆదర్శం." }
        ]
      }
    }
  },
  {
    id: "hanuman",
    name: "Hanuman",
    title: "The Divine Devotee",
    accent: "#FF9933",
    image: hanumanImg,
    shortDesc: "The son of the wind god and the greatest devotee of Rama.",
    symbol: "✦",
    sections: [
      { heading: "Divine Origin", body: "Hanuman is the son of Anjana and Vayu (the wind god). He was born with supernatural abilities, including the power to change his size and fly at great speeds." },
      { heading: "The Leap of Faith", body: "To find Sita, Hanuman took a giant leap across the ocean to Lanka. His faith in Rama allowed him to overcome obstacles like the demoness Surasa and the mountain Mainaka." },
      { heading: "Sankat Mochan", body: "Known as the 'remover of obstacles,' he saved Lakshmana's life by carrying the entire Dronagiri mountain to provide the Sanjivani herb when he couldn't identify it." },
      { heading: "Eternal Presence", body: "Hanuman is a Chiranjeevi (immortal). It is believed he resides on Earth wherever the Ramayana is recited, serving as the ultimate symbol of selfless devotion." }
    ],
    translations: {
      hi: {
        name: "हनुमान",
        shortDesc: "पवनपुत्र और भगवान राम के चरणों में समर्पित निस्वार्थ भक्त।",
        sections: [
          { heading: "दिव्य उत्पत्ति", body: "हनुमान अंजना और वायु देव के पुत्र हैं। वे जन्म से ही अष्ट सिद्धि और नौ निधि के स्वामी थे। वे अपनी इच्छानुसार रूप बदलने और बादलों की गति से उड़ने की शक्ति रखते थे।" },
          { heading: "विश्वास की छलांग", body: "माता सीता की खोज में, हनुमान ने समुद्र के ऊपर से एक विशाल छलांग लगाई। राम के प्रति उनके अटूट विश्वास ने उन्हें सुरसा और मैनाक पर्वत जैसी बाधाओं को पार करने की शक्ति दी।" },
          { heading: "संकट मोचन", body: "बाधाओं को दूर करने वाले हनुमान ने मूर्छित लक्ष्मण के प्राण बचाने के लिए द्रोणागिरी पर्वत उठा लिया था, क्योंकि वे संजीवनी बूटी की पहचान नहीं कर पा रहे थे।" },
          { heading: "अमर उपस्थिति", body: "हनुमान चिरंजीवी हैं। माना जाता है कि पृथ्वी पर जहां कहीं भी रामायण का पाठ होता है, वहां हनुमान जी मूक रूप से उपस्थित रहते हैं, जो निस्वार्थ भक्ति के प्रतीक हैं।" }
        ]
      },
      te: {
        name: "హనుమంతుడు",
        shortDesc: "వాయుపుత్రుడు మరియు రాముడి పాదాలకు అంకితమైన భక్తాగ్రేసర.",
        sections: [
          { heading: "దైవ మూలాలు", body: "హనుమంతుడు అంజనా దేవి మరియు వాయుదేవుని కుమారుడు. జన్మతః అసాధారణ బలపరాక్రమాలు, ఏ రూపాన్నైనా ధరించగల శక్తి మరియు గగన మార్గంలో ప్రయాణించగల సామర్థ్యం కలిగినవాడు." },
          { heading: "సముద్ర లంఘనం", body: "సీతమ్మ జాడ కోసం హనుమంతుడు ఒక్క గెంతుతో సముద్రాన్ని దాటాడు. రామ నామంపై ఆయనకున్న అచంచలమైన విశ్వాసమే సురస మరియు మైనాక పర్వతం వంటి అడ్డంకులను అధిగమించేలా చేసింది." },
          { heading: "సంకట మోచనుడు", body: "కష్టాలను తొలగించే హనుమంతుడు, లక్ష్మణుడి ప్రాణాలను కాపాడటం కోసం సంజీవని మూలిక కోసం ఏకంగా ద్రోణగిరి పర్వతాన్నే మోసుకొచ్చిన ధీశాలి." },
          { heading: "చిరంజీవి", body: "హనుమంతుడు చిరంజీవి. రామాయణం పారాయణం జరిగే ప్రతిచోట ఆయన అదృశ్య రూపంలో కొలువై ఉంటారని భక్తుల నమ్మకం. ఆయన నిస్వార్థ సేవకు నిలువుటద్దం." }
        ]
      }
    }
  },
  {
    id: "sugriva",
    name: "Sugriva",
    title: "The Exiled King",
    accent: "#ea580c",
    image: sugrivaImg,
    shortDesc: "The Vanara king who allied with Rama to defeat Vali.",
    symbol: "✧",
    sections: [
      { heading: "The Exile", body: "Sugriva lived in fear of his brother Vali on the Rishyamukha mountain. This was the only place Vali could not enter due to a sage's curse." },
      { heading: "Pact with Rama", body: "Rama and Sugriva forged a pact over a sacred fire: Rama would help Sugriva get his kingdom back, and Sugriva would help Rama find Sita." },
      { heading: "Search for Sita", body: "As King of the Vanaras, Sugriva mobilized millions of troops to search for Sita in all four directions, with the southern group being led by Hanuman." },
      { heading: "War Effort", body: "Sugriva personally fought in the battle of Lanka, showing great valor against the giant Rakshasas and remaining a loyal friend to Rama until the end." }
    ],
    translations: {
      hi: {
        name: "सुग्रीव",
        shortDesc: "वानर राजा जिन्होंने माता सीता की खोज में श्री राम का साथ दिया।",
        sections: [
          { heading: "कठिन निर्वासन", body: "सुग्रीव अपने भाई वालि के भय से ऋष्यमूक पर्वत पर रहते थे। यही वह एकमात्र स्थान था जहाँ एक ऋषि के श्राप के कारण वालि प्रवेश नहीं कर सकता था।" },
          { heading: "राम के साथ मित्रता", body: "राम और सुग्रीव ने अग्नि के सामने अटूट मित्रता की शपथ ली: राम ने सुग्रीव को उनका राज्य वापस दिलाने का और सुग्रीव ने सीता को खोजने का वचन दिया।" },
          { heading: "सीता की खोज", body: "वानर राज के रूप में, सुग्रीव ने सीता की खोज के लिए चारों दिशाओं में लाखों वानरों को भेजा, जिसमें दक्षिण की ओर जाने वाले दल का नेतृत्व हनुमान ने किया।" },
          { heading: "युद्ध में योगदान", body: "सुग्रीव ने लंका के युद्ध में स्वयं भाग लिया और बड़े-बड़े राक्षसों के विरुद्ध वीरता दिखाई। वे अंत तक राम के एक निष्ठावान मित्र बने रहे।" }
        ]
      },
      te: {
        name: "సుగ్రీవుడు",
        shortDesc: "వాలిని ఎదిరించడానికి రాముడితో స్నేహం చేసిన వానర రాజు.",
        sections: [
          { heading: "దీన స్థితి", body: "అన్న వాలి భయంతో సుగ్రీవుడు ఋష్యమూక పర్వతంపై తలదాచుకున్నాడు. ఒక ఋషి శాపం వల్ల వాలి ఆ పర్వతం మీద అడుగు పెట్టలేడు." },
          { heading: "రామ స్నేహం", body: "అగ్నిసాక్షిగా రాముడు, సుగ్రీవుడు స్నేహం చేసుకున్నారు. రాముడు వాలిని చంపి సుగ్రీవుడికి రాజ్యాన్ని ఇస్తే, సుగ్రీవుడు సీతమ్మ జాడ తెలుస్తానని మాట ఇచ్చాడు." },
          { heading: "సీతమ్మ అన్వేషణ", body: "వానర రాజుగా సుగ్రీవుడు కోట్లాది వానర సైన్యాన్ని నలుదుక్కులా పంపాడు. అందులో హనుమంతుడు ఉన్న దక్షిణ దిశ బృందమే సీతమ్మ జాడను కనిపెట్టింది." },
          { heading: "లంకా యుద్ధం", body: "సుగ్రీవుడు స్వయంగా లంకా యుద్ధంలో పాల్గొని రాక్షసులను ఉతికి ఆరేశాడు. రాముడికి అత్యంత నమ్మకమైన మిత్రుడిగా చివరి వరకు నిలిచాడు." }
        ]
      }
    }
  },
  {
    id: "vali",
    name: "Vali",
    title: "The Unconquered Vanara",
    accent: "#b45309",
    image: valiImg,
    shortDesc: "The powerful king of Kishkindha with an invincible boon.",
    symbol: "❂",
    sections: [
      { heading: "Incredible Strength", body: "Vali was the King of Kishkindha. He had a boon that half of his opponent's strength would be transferred to him, making him undefeatable in direct combat." },
      { heading: "Humbled Ravana", body: "Once Ravana challenged him, Vali caught Ravana in his armpit and flew across the four oceans, proving his superiority over the Rakshasa king." },
      { heading: "The Feud", body: "A misunderstanding led him to believe his brother Sugriva had betrayed him. He drove Sugriva out and took his wife, a severe breach of Dharma." },
      { heading: "Final Realization", body: "When Rama struck him from behind a tree, Vali questioned the act. Rama explained that Vali's sins against his brother required punishment. Vali accepted this and died in peace." }
    ],
    translations: {
      hi: {
        name: "वालि",
        shortDesc: "किष्किंधा के शक्तिशाली राजा जिन्हें सामने वाले की आधी शक्ति छीनने का वरदान था।",
        sections: [
          { heading: "अतुलनीय बल", body: "वालि किष्किंधा के राजा थे। उन्हें वरदान प्राप्त था कि जो भी उनके सामने युद्ध करने आएगा, उसकी आधी शक्ति उनमें समा जाएगी, जिससे उन्हें सीधे युद्ध में हराना नामुमकिन था।" },
          { heading: "रावण का मानमर्दन", body: "जब रावण ने उन्हें चुनौती दी, तो वालि ने रावण को अपनी कांख में दबा लिया और चारों समुद्रों की परिक्रमा की, जिससे रावण को अपनी हार स्वीकार करनी पड़ी।" },
          { heading: "पारिवारिक विवाद", body: "एक गलतफहमी के कारण उन्होंने अपने भाई सुग्रीव को राज्य से निकाल दिया और उनकी पत्नी को अपना लिया, जो धर्म के विरुद्ध एक बड़ा अपराध था।" },
          { heading: "अंतिम बोध", body: "जब राम ने उन्हें बाण मारा, तो पहले वालि ने सवाल किया। राम द्वारा धर्म की व्याख्या करने पर उन्हें अपनी गलती का अहसास हुआ और वे शांति से मृत्यु को प्राप्त हुए।" }
        ]
      },
      te: {
        name: "వాలి",
        shortDesc: "ఎదుటివారి బలంలో సగాన్ని పొందే అజేయ వరం కలిగిన కిష్కింధ రాజు.",
        sections: [
          { heading: "అపార బలం", body: "వాలి కిష్కింధకు రాజు. తన ముందు నిలబడి యుద్ధం చేసే శత్రువు బలంలో సగం తనకి వచ్చేలా వరం ఉండటం వల్ల అతన్ని నేరుగా ఎవరూ ఓడించలేరు." },
          { heading: "రావణుడి ఓటమి", body: "ఒకప్పుడు రావణుడు వాలిని సవాలు చేయగా, వాలి అతడిని తన చంకలో పెట్టుకుని నాలుగు సముద్రాల వెంబడి ఎగిరి రావణుడి గర్వాన్ని అణిచివేశాడు." },
          { heading: "తమ్ముడితో వైరం", body: "ఒక అపార్థం వల్ల తన తమ్ముడు సుగ్రీవుడు ద్రోహం చేశాడని భావించి, అతడిని వెళ్లగొట్టి అతని భార్యను తన వద్దే ఉంచుకుని అధర్మానికి ఒడిగట్టాడు." },
          { heading: "జ్ఞానోదయం", body: "రాముడు చాటు నుండి కొట్టినప్పుడు వాలి ప్రశ్నించాడు. కానీ తమ్ముడికి చేసిన అన్యాయానికి ఇది శిక్ష అని రాముడు వివరించగా, వాలి తన తప్పు తెలుసుకుని ప్రశాంతంగా కన్నుమూశాడు." }
        ]
      }
    }
  },
  {
    id: "jatayu",
    name: "Jatayu",
    title: "The Winged Martyr",
    accent: "#64748b",
    image: jatayuImg,
    shortDesc: "The noble bird who sacrificed his life to save Sita.",
    symbol: "✧",
    sections: [
      { heading: "Divine Lineage", body: "Jatayu was the king of vultures and the son of Aruna (the charioteer of the Sun). He was a great friend of King Dasharatha." },
      { heading: "The Brave Stand", body: "When he saw Ravana abducting Sita, the aged bird did not hesitate to fight. He shattered Ravana's chariot and killed his charioteer before his wings were cut off." },
      { heading: "Crucial Witness", body: "Jatayu clung to his life until Rama found him. He provided the vital information that it was Ravana who had taken Sita towards the South." },
      { heading: "Highest Honor", body: "Rama was so moved by Jatayu's bravery that he performed his funeral rites as a son would for a father, granting him liberation." }
    ],
    translations: {
      hi: {
        name: "जटायु",
        shortDesc: "एक महान पक्षी राज जिन्होंने सीता की रक्षा के लिए अपने प्राण न्योछावर कर दिए।",
        sections: [
          { heading: "दिव्य वंश", body: "जटायु गिद्धों के राजा और सूर्य के सारथी अरुण के पुत्र थे। वे अयोध्या के राजा दशरथ के अत्यंत प्रिय मित्र थे।" },
          { heading: "वीरतापूर्ण संघर्ष", body: "जब उन्होंने रावण को सीता का अपहरण करते देखा, तो वृद्ध होने के बावजूद वे निडर होकर लड़ पड़े। उन्होंने रावण के रथ को छिन्न-भिन्न कर दिया था।" },
          { heading: "महत्वपूर्ण गवाह", body: "पंख कट जाने के बाद भी जटायु ने तब तक अपने प्राणों को रोके रखा जब तक राम उन्हें मिल नहीं गए, ताकि वे सीता के अपहरण की दिशा बता सकें।" },
          { heading: "सर्वोच्च सम्मान", body: "राम जटायु की बहादुरी से इतने द्रवित हुए कि उन्होंने जटायु का अंतिम संस्कार एक पुत्र की भांति किया और उन्हें मोक्ष प्रदान किया।" }
        ]
      },
      te: {
        name: "జటాయువు",
        shortDesc: "సీతమ్మ కోసం ప్రాణాలను అర్పించిన గొప్ప పక్షి రాజు మరియు రాముడి ఆప్తబంధువు.",
        sections: [
          { heading: "వంశం", body: "జటాయువు పక్షులకు రాజు మరియు సూర్యుడి సారథి అయిన అరుణుడి కుమారుడు. దశరథ మహారాజుకు అత్యంత ఆప్త మిత్రుడు." },
          { heading: "మహా పోరాటం", body: "రావణుడు సీతను అపహరిస్తుంటే చూసి, వృద్ధాప్యంలో ఉన్నా వెనకాడకుండా పోరాడాడు. రావణుడి రథాన్ని విరిచి, అతడిని ముప్పుతిప్పలు పెట్టాడు." },
          { heading: "ఆఖరి సమాచారం", body: "రెక్కలు తెగి ప్రాణాలు పోతున్నా, రాముడికి సీతమ్మ ఆచూకీ చెప్పాలనే పట్టుదలతో ప్రాణాలు నిలుపుకుని దక్షిణ దిశగా వెళ్ళారని సమాచారం ఇచ్చాడు." },
          { heading: "మోక్షం", body: "జటాయువు త్యాగానికి చలించిపోయిన రాముడు, ఒక కొడుకులా అతనికి అంత్యక్రియలు నిర్వహించి శాశ్వత మోక్షాన్ని ప్రసాదించాడు." }
        ]
      }
    }
  },
  {
    id: "ravana",
    name: "Ravana",
    title: "King of Lanka",
    accent: "#8B1A00",
    image: ravanaImg,
    shortDesc: "The brilliant ten-headed king undone by pride.",
    symbol: "⟡",
    sections: [
      { heading: "The Scholar King", body: "Ravana was a master of the four Vedas and six Shastras. He was a brilliant musician (veena player) and a devout follower of Lord Shiva, who granted him immense power." },
      { heading: "Fatal Hubris", body: "Despite his wisdom, Ravana's ego was his downfall. His abduction of Sita, driven by revenge for his sister Surpanakha, led to the annihilation of his entire kingdom." },
      { heading: "Immense Power", body: "Ravana had conquered the gods and controlled the planetary alignments. He was so powerful that even the Sun and Moon followed his command in the golden city of Lanka." },
      { heading: "A Complex Legacy", body: "He is remembered as a 'villain' but also as a tragic figure of immense intellect whose lack of character control overshadowed his great gifts." }
    ],
    translations: {
      hi: {
        name: "रावण",
        shortDesc: "लंका का प्रकांड विद्वान राजा, जिसका अहंकार उसके पतन का कारण बना।",
        sections: [
          { heading: "महापंडित और भक्त", body: "रावण चारों वेदों और छह शास्त्रों का ज्ञाता था। वह एक महान संगीतज्ञ (वीणा वादक) और भगवान शिव का अनन्य भक्त था, जिसने अपनी कठिन तपस्या से अपार शक्तियां प्राप्त की थीं।" },
          { heading: "विनाशकारी अहंकार", body: "अपनी अपार बुद्धिमत्ता के बावजूद, रावण का अहंकार ही उसका काल बना। अपनी बहन शूर्पणखा के अपमान का बदला लेने के लिए उसने माता सीता का अपहरण किया, जिसने उसके विनाश की पटकथा लिखी।" },
          { heading: "अतुलनीय शक्ति", body: "रावण ने इंद्र सहित समस्त देवताओं पर विजय प्राप्त की थी और ग्रहों की चाल को भी नियंत्रित कर लिया था। उसकी स्वर्ण लंका की समृद्धि और शक्ति उस समय दुनिया में अद्वितीय थी।" },
          { heading: "जटिल व्यक्तित्व", body: "रावण को केवल एक 'खलनायक' के रूप में नहीं, बल्कि एक ऐसे दुखद पात्र के रूप में याद किया जाता है जिसका महान ज्ञान उसके चरित्र की कमजोरी और अभिमान के नीचे दब गया।" }
        ]
      },
      te: {
        name: "రావణుడు",
        shortDesc: "లంక పాలకుడు, అపార మేధావి మరియు అహంకారంతో పతనమైన వాడు.",
        sections: [
          { heading: "ప్రకాండ పండితుడు", body: "రావణుడు వేదాలను, శాస్త్రాలను ఔపోసన పట్టిన గొప్ప జ్ఞాని. ఆయన అద్భుతమైన వీణా వాయిద్యకారుడు మరియు పరమ శివ భక్తుడు. శివుడిని మెప్పించి ఎన్నో వరాలను పొందాడు." },
          { heading: "అహంకారం", body: "అపారమైన జ్ఞానం ఉన్నప్పటికీ, రావణుడి గర్వం అతని పతనానికి కారణమైంది. తన సోదరి శూర్పణఖకు జరిగిన అవమానానికి ప్రతీకారంగా సీతమ్మను అపహరించి తన రాజ్య నాశనాన్ని కోరి తెచ్చుకున్నాడు." },
          { heading: "అసమాన బలం", body: "రావణుడు దేవతలను సైతం జయించి నవగ్రహాలను తన సింహాసనానికి మెట్లుగా చేసుకున్నాడు. ఆయన పాలనలో లంక 'బంగారు లంక'గా విరాజిల్లింది, కానీ అది అధర్మంతో కూడి ఉంది." },
          { heading: "చరిత్రలో స్థానం", body: "రావణుడు పురాణాలలో ఒక విలన్ గానే కాకుండా, అంతటి జ్ఞానం ఉండి కూడా గర్వం వల్ల ఎలా నాశనం కాకూడదో చెప్పే ఒక గొప్ప గుణపాఠంలా నిలిచిపోయాడు." }
        ]
      }
    }
  },
  {
    id: "mandodari",
    name: "Mandodari",
    title: "The Queen of Virtue",
    accent: "#be185d",
    image: mandodariImg,
    shortDesc: "Ravana's pious wife who warned him against sin.",
    symbol: "✿",
    sections: [
      { heading: "The Virtuous Queen", body: "Mandodari was the daughter of the celestial architect Maya Danava. She was one of the 'Panchakanya' (five virgins) whose names are said to dispel sin." },
      { heading: "Warnings ignored", body: "She was the most persistent voice of reason in Lanka, repeatedly warning Ravana that Sita was the mother of the universe and abducting her would bring doom." },
      { heading: "Piety", body: "Despite being married to a man who committed many sins, her own character remained untainted. She practiced severe austerities and remained devoted to her husband." },
      { heading: "Tragedy", body: "Her life is a tragedy of a wise woman whose counsel was ignored by those she loved, leading to the loss of her husband and all her sons in the war." }
    ],
    translations: {
      hi: {
        name: "मंदोदरी",
        shortDesc: "रावण की धर्मपरायण पत्नी जिन्होंने उसे हमेशा पाप के प्रति सचेत किया।",
        sections: [
          { heading: "सती शिरोमणि", body: "मंदोदरी मय दानव की पुत्री थीं। वे हिंदू धर्म की उन 'पंचकन्याओं' में से एक हैं जिनका नाम लेने मात्र से पाप दूर हो जाते हैं।" },
          { heading: "अनसुनी चेतावनी", body: "वे लंका में विवेक की सबसे मुखर आवाज थीं। उन्होंने रावण को बार-बार चेतावनी दी कि सीता जगतजननी हैं और उनका अपहरण विनाश लाएगा।" },
          { heading: "चरित्र की शुद्धता", body: "अधर्मी पति के साथ रहने के बावजूद उनका अपना चरित्र निष्कलंक रहा। वे एक सती और विदुषी स्त्री के रूप में जानी जाती हैं।" },
          { heading: "दुखद जीवन", body: "उनका जीवन एक ऐसी बुद्धिमती स्त्री की त्रासदी है जिसकी सलाह को अपनों ने ही नजरअंदाज कर दिया, जिससे उन्होंने अपना पति और पुत्र खो दिए।" }
        ]
      },
      te: {
        name: "మండోదరి",
        shortDesc: "రావణుడి భార్య మరియు నీతి నియమాలు కలిగిన గొప్ప సాధ్వి.",
        sections: [
          { heading: "గుణవతి", body: "మండోదరి మయాసురుడి కుమార్తె. పురాణాలలో పేర్కొన్న ఐదుగురు పుణ్యస్త్రీలలో (పంచకన్యలు) మండోదరి ఒకరు. ఆమె అత్యంత సౌందర్యవతి మరియు జ్ఞాని." },
          { heading: "హితబోధ", body: "సీతమ్మను అపహరించడం పాపమని, ఆమెను రాముడికి అప్పగించమని రావణుడికి ఎన్నో సార్లు వేడుకుంది. కానీ విధి బలవత్తరం కావడంతో రావణుడు ఆమె మాట వినలేదు." },
          { heading: "పాతివ్రత్యం", body: "తన భర్త ఎన్ని తప్పులు చేసినా, ఆమె మాత్రం ఒక పతివ్రతగా తన ధర్మాన్ని నెరవేర్చింది. లంకా నగరంలో ఆమె గౌరవం అపారమైనది." },
          { heading: "విషాదం", body: "ఎంతటి జ్ఞానం ఉన్నా తన వారిని కాపాడుకోలేకపోయిన ఒక తల్లి మరియు భార్యగా ఆమె జీవితం ఎంతో విషాదకరమైనది." }
        ]
      }
    }
  },
  {
    id: "kumbhakarna",
    name: "Kumbhakarna",
    title: "The Sleeping Colossus",
    accent: "#9f1239",
    image: kumbhakarnaImg,
    shortDesc: "Ravana's giant brother known for his deep slumber.",
    symbol: "✦",
    sections: [
      { heading: "The Giant", body: "Kumbhakarna was the middle brother of Ravana. He was so large that his movement caused tremors, and his appetite was legendary." },
      { heading: "Cursed Sleep", body: "Due to a slip of the tongue during a boon, he asked for 'Nidrasana' (sleep) instead of 'Indrasana'. He slept for six months at a time." },
      { heading: "Moral Standing", body: "Like Vibhishana, Kumbhakarna told Ravana that his actions were wrong. However, unlike Vibhishana, he chose to fight for his brother out of loyalty." },
      { heading: "War Awakening", body: "It took thousands of drums and elephants to wake him for the war. He fought bravely and was finally liberated by Rama's arrow." }
    ],
    translations: {
      hi: {
        name: "कुंभकर्ण",
        shortDesc: "रावण का वो विशालकाय भाई जो अपनी गहरी नींद और अपार शक्ति के लिए प्रसिद्ध था।",
        sections: [
          { heading: "विशाल शरीर", body: "कुंभकर्ण रावण का मंझला भाई था। उसका शरीर इतना विशाल था कि उसके चलने से धरती कांपती थी और उसका भोजन कई गांवों के बराबर होता था।" },
          { heading: "श्रापित निद्रा", body: "वरदान मांगते समय जीभ फिसलने के कारण उसने 'इंद्रासन' की जगह 'निद्रासन' मांग लिया, जिससे उसे साल में छह महीने सोने का श्राप मिला।" },
          { heading: "नैतिक पक्ष", body: "विभीषण की तरह कुंभकर्ण ने भी रावण से कहा था कि सीता का अपहरण गलत है। फिर भी, उन्होंने अपने भाई के प्रति वफादारी के कारण युद्ध का रास्ता चुना।" },
          { heading: "युद्ध के लिए जागना", body: "युद्ध के दौरान उन्हें जगाने के लिए हजारों ढोल और हाथियों का सहारा लिया गया था। वे वीरता से लड़े और अंततः राम के बाण से मोक्ष प्राप्त किया।" }
        ]
      },
      te: {
        name: "కుంభకర్ణుడు",
        shortDesc: "నిద్రాదేవి వరంతో పర్వతం లాగా నిద్రపోయే రావణుడి సోదరుడు.",
        sections: [
          { heading: "భీకరాకారుడు", body: "కుంభకర్ణుడు రావణుడి తమ్ముడు. ఆయన శరీరం ఎంత పెద్దదంటే ఆయన నడుస్తుంటే భూమి కంపించేది. ఆయన ఆకలి మరియు ఆహారం కూడా అంతే భారీగా ఉండేవి." },
          { heading: "నిద్రా శాపం", body: "వరం కోరుకునే సమయంలో సరస్వతీ దేవి మాయ వల్ల 'ఇంద్రాసనం' బదులు 'నిద్రాసనం' కోరుకున్నాడు. ఫలితంగా ఆరు నెలల పాటు నిద్రపోతూ ఉండేవాడు." },
          { heading: "ధర్మ సందేహం", body: "రావణుడు చేసింది తప్పని కుంభకర్ణుడికి తెలుసు. అన్నకు ఆ విషయం చెప్పినప్పటికీ, సోదర ప్రేమతో మరియు కృతజ్ఞతతో అన్న పక్షాన యుద్ధం చేశాడు." },
          { heading: "వీర మరణం", body: "యుద్ధం కోసం అతన్ని లేపడానికి ఏనుగులతో తొక్కించి, భేరీలు మోగించాల్సి వచ్చింది. యుద్ధంలో అద్భుతంగా పోరాడి రాముడి చేతిలో హతమై మోక్షం పొందాడు." }
        ]
      }
    }
  },
  {
    id: "vibhishana",
    name: "Vibhishana",
    title: "The Righteous Demon",
    accent: "#6366f1",
    image: vibhishanaImg,
    shortDesc: "Ravana's brother who chose righteousness over kinship.",
    symbol: "❖",
    sections: [
      { heading: "Moral Compass", body: "Vibhishana was the only member of Ravana's court who openly condemned the abduction of Sita. He valued Dharma (righteousness) over blind loyalty to his brother." },
      { heading: "Seeking Asylum", body: "After being humiliated and kicked by Ravana, he sought refuge with Rama. Rama accepted him, declaring that anyone who seeks shelter must be protected." },
      { heading: "The Inside Story", body: "His knowledge of Lanka's defenses and Ravana's vulnerabilities was crucial for Rama's victory. He guided Rama on how to destroy the weapons of the Rakshasas." },
      { heading: "The Wise King", body: "After Ravana's death, Rama crowned Vibhishana as the King of Lanka. He ruled for centuries as a just and pious king, transforming Lanka into a land of Dharma." }
    ],
    translations: {
      hi: {
        name: "विभीषण",
        shortDesc: "रावण के वो भाई जिन्होंने अधर्म के ऊपर धर्म को चुना।",
        sections: [
          { heading: "नैतिक दिशा", body: "विभीषण रावण की सभा के एकमात्र सदस्य थे जिन्होंने सीता के अपहरण की खुलकर निंदा की। उन्होंने अपने भाई के प्रति अंधभक्ति के ऊपर धर्म और नैतिकता को प्राथमिकता दी।" },
          { heading: "राम की शरण", body: "रावण द्वारा अपमानित होने के बाद, वे राम की शरण में चले गए। राम ने उन्हें 'शरणागत वत्सल' भाव से स्वीकार किया और उन्हें सुरक्षा का वचन दिया।" },
          { heading: "विजय का आधार", body: "लंका की रक्षा प्रणालियों और रावण की कमजोरियों का उनका ज्ञान राम की विजय के लिए अत्यंत महत्वपूर्ण था। उन्होंने राम को आसुरी अस्त्रों के काट के बारे में मार्गदर्शन दिया।" },
          { heading: "न्यायप्रिय राजा", body: "रावण के वध के बाद, राम ने विभीषण को लंका का राजा बनाया। उन्होंने सदियों तक एक धर्मपरायण राजा के रूप में शासन किया और लंका को पापमुक्त किया।" }
        ]
      },
      te: {
        name: "విభీషణుడు",
        shortDesc: "రక్తం కంటే ధర్మానికి విలువనిచ్చి రాముడిని ఆశ్రయించిన నీతిమంతుడు.",
        sections: [
          { heading: "ధర్మవర్తనుడు", body: "రావణుడి సభలో సీతమ్మ అపహరణను ధైర్యంగా ఖండించిన ఏకైక వ్యక్తి విభీషణుడు. అన్నపై ఉన్న మమకారం కంటే ధర్మమే ముఖ్యమని భావించిన మహనీయుడు." },
          { heading: "శరణాగతి", body: "రావణుడిచే అవమానించబడిన తర్వాత విభీషణుడు రాముడి పాదాలను ఆశ్రయించాడు. శరణు కోరిన వారిని కాపాడటం తన ధర్మమని రాముడు అతడిని అక్కున చేర్చుకున్నాడు." },
          { heading: "యుద్ధ రహస్యాలు", body: "లంక యొక్క రక్షణ వ్యూహాలు మరియు రావణుడి మరణ రహస్యాలను రాముడికి తెలిపి, అధర్మంపై ధర్మం సాధించిన విజయంలో విభీషణుడు కీలక పాత్ర పోషించాడు." },
          { heading: "లంక రాజు", body: "రావణ వధ అనంతరం రాముడు విభీషణుడిని లంకకు రాజుగా పట్టాభిషేకం చేశాడు. ఆయన పాలనలో లంక తిరిగి వైభవంగా మరియు ధర్మబద్ధంగా విరాజిల్లింది." }
        ]
      }
    }
  },
  {
    id: "indrajit",
    name: "Indrajit",
    title: "Vanquisher of the Gods",
    accent: "#831843",
    image: indrajitImg,
    shortDesc: "The master of illusions who once captured Indra.",
    symbol: "⚡",
    sections: [
      { heading: "Meghnaad", body: "Born as Meghnaad, his cry at birth sounded like thunder. He was the eldest son of Ravana and the most powerful warrior in the Lankan army." },
      { heading: "Capturing Heaven", body: "He earned the name 'Indrajit' (Conqueror of Indra) after he defeated the King of Gods and took him to Lanka as a prisoner." },
      { heading: "Celestial Weapons", body: "He was the only warrior in the Ramayana who possessed the three ultimate weapons: Brahmastra, Vaishnavastra, and Pashupatastra." },
      { heading: "Invisibility", body: "Indrajit was a master of Maya (illusion). He could fight from behind the clouds and remain invisible to his enemies, making him nearly undefeatable." }
    ],
    translations: {
      hi: {
        name: "इंद्रजीत",
        shortDesc: "रावण का वो मायावी पुत्र जिसने देवराज इंद्र पर विजय प्राप्त की थी।",
        sections: [
          { heading: "मेघनाद", body: "जन्म के समय मेघ की तरह गर्जना करने के कारण उनका नाम मेघनाद पड़ा। वे रावण के सबसे बड़े और लंका की सेना के सबसे शक्तिशाली योद्धा थे।" },
          { heading: "स्वर्ग पर विजय", body: "उन्होंने देवराज इंद्र को पराजित कर उन्हें लंका में बंदी बना लिया था, जिसके बाद ब्रह्मा जी ने उन्हें 'इंद्रजीत' की उपाधि दी थी।" },
          { heading: "दिव्य अस्त्रों का स्वामी", body: "वे रामायण के एकमात्र योद्धा थे जिनके पास तीन परम दिव्य अस्त्र - ब्रह्मास्त्र, वैष्णवास्त्र और पाशुपतास्त्र - एक साथ थे।" },
          { heading: "मायावी युद्ध", body: "इंद्रजीत मायावी युद्ध में निपुण थे। वे बादलों के पीछे छिपकर युद्ध कर सकते थे और अदृश्य रहकर अपने शत्रुओं पर प्रहार करते थे।" }
        ]
      },
      te: {
        name: "ఇంద్రజిత్తు",
        shortDesc: "మాయా యుద్ధ తంత్ర కోవిదుడు మరియు దేవేంద్రుడిని ఓడించిన వీరుడు.",
        sections: [
          { heading: "మేఘనాథుడు", body: "పుట్టినప్పుడు మేఘంలా గర్జించడం వల్ల ఇతనికి మేఘనాథుడు అని పేరు వచ్చింది. రావణుడి కుమారులలో అత్యంత బలవంతుడు మరియు గొప్ప వీరుడు ఇతను." },
          { heading: "స్వర్గ విజేత", body: "దేవేంద్రుడిని యుద్ధంలో ఓడించి లంకకు బందీగా తీసుకువచ్చినందుకు బ్రహ్మదేవుడు ఇతనికి 'ఇంద్రజిత్తు' అనే బిరుదును ప్రసాదించాడు." },
          { heading: "దివ్యాస్త్రాలు", body: "రామాయణంలో బ్రహ్మాస్త్రం, నారాయణాస్త్రం మరియు పాశుపతాస్త్రం అనే మూడు గొప్ప అస్త్రాలను కలిగిన ఏకైక యోధుడు ఇంద్రజిత్తు." },
          { heading: "మాయా యుద్ధం", body: "ఇంద్రజిత్తు మాయా యుద్ధంలో దిట్ట. ఆకాశంలో మేఘాల చాటున దాక్కుని శత్రువులకు కనిపించకుండా యుద్ధం చేస్తూ వారిని ఉక్కిరిబిక్కిరి చేసేవాడు." }
        ]
      }
    }
  }
];