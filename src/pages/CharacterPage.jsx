import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { characters } from '../data/characters';
import { useLanguage } from '../components/LanguageContext';
import LanguageSelector from '../components/LanguageSelector';

export default function CharacterPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { lang } = useLanguage();
  
  const char = characters.find(c => c.id === id);

  if (!char) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-white/60 tracking-widest uppercase text-sm">Character not found</p>
        <Link to="/" className="text-[#D4AF37] text-xs tracking-widest">← Back to Home</Link>
      </div>
    );
  }

  const translatedData = char.translations?.[lang] || {};
  const displayName = lang === 'en' ? char.name : (translatedData.name || char.name);
  const displayShortDesc = lang === 'en' ? char.shortDesc : (translatedData.shortDesc || char.shortDesc);

  return (
    <div className="min-h-screen relative overflow-x-hidden" style={{ background: 'linear-gradient(135deg, #08091A 0%, #0D0018 50%, #1A0008 100%)' }}>

      <div
        className="absolute top-0 left-0 w-full h-[60vh] pointer-events-none"
        style={{ background: `radial-gradient(ellipse 80% 60% at 30% 0%, ${char.accent}18 0%, transparent 70%)` }}
      />

      <div className="fixed top-6 left-6 z-50 flex items-center gap-4">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-300 text-xs tracking-[0.3em] uppercase font-sans bg-black/30 backdrop-blur-sm px-4 py-2 rounded border border-white/10"
        >
          <ArrowLeft className="w-3 h-3" />
          Back
        </motion.button>
      </div>

      <div className="relative min-h-[60vh] flex items-end pb-16 px-6 lg:px-24 overflow-hidden">

        <div className="absolute inset-0">
          <img
            src={char.image}
            alt={char.name}
            className="w-full h-full object-cover object-top opacity-25"
            onError={(e) => { e.target.src = char.fallback; }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 0%, #08091A 100%)' }} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <LanguageSelector />
          </motion.div>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{char.symbol}</span>
            <span
              className="text-[10px] tracking-[0.5em] uppercase font-sans text-accent"
            >
              Souls of the Epic
            </span>
          </div>
          <h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white font-light tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: lang === 'en' ? "'Cinzel', serif" : "sans-serif" }}
          >
            {displayName}
          </h1>
          <p
            className="text-lg md:text-xl tracking-[0.3em] uppercase font-sans mb-6 text-accent"
          >
            {char.title}
          </p>
          <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-2xl font-sans"
             style={{ fontFamily: lang !== 'en' ? "sans-serif" : undefined }}
          >
            {displayShortDesc}
          </p>
        </motion.div>
      </div>

      <div className="h-px w-full" style={{ background: `linear-gradient(to right, transparent, ${char.accent}40, transparent)` }} />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16 flex flex-col gap-14">

        <div className="flex items-center gap-3 text-white/30">
          <BookOpen className="w-4 h-4" />
          <span className="text-[10px] tracking-[0.4em] uppercase font-sans">Character Chronicle</span>
        </div>

        {char.sections.map((section, i) => {
          const sectionTrans = translatedData.sections?.[i] || {};
          const displayHeading = lang === 'en' ? section.heading : (sectionTrans.heading || section.heading);
          const displayBody = lang === 'en' ? section.body : (sectionTrans.body || section.body);
          
          return (
            <motion.article
              key={section.heading}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-px" style={{ background: char.accent + '80' }} />
                <h2
                  className="text-xl md:text-2xl text-white font-light tracking-[0.2em] uppercase"
                  style={{ fontFamily: lang === 'en' ? "'Cinzel', serif" : "sans-serif" }}
                >
                  {displayHeading}
                </h2>
              </div>
              <p className="text-white/75 text-sm md:text-base leading-[2] font-sans pl-12 text-justify"
                 style={{ fontFamily: lang !== 'en' ? "sans-serif" : undefined }}
              >
                {displayBody}
              </p>
            </motion.article>
          );
        })}


      </div>
    </div>
  );
}
