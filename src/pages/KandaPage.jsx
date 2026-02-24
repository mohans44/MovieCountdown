import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Scroll } from 'lucide-react';
import { kandas } from '../data/kandas';
import { useLanguage } from '../components/LanguageContext';
import LanguageSelector from '../components/LanguageSelector';

export default function KandaPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const kanda = kandas.find(k => k.id === id);

  if (!kanda) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-white/60 tracking-widest uppercase text-sm">Chapter not found</p>
        <Link to="/" className="text-[#D4AF37] text-xs tracking-widest">← Back to Home</Link>
      </div>
    );
  }

  const translatedData = kanda.translations?.[lang] || {};
  const displayName = lang === 'en' ? kanda.name : (translatedData.name || kanda.name);
  const displayShortDesc = lang === 'en' ? kanda.shortDesc : (translatedData.shortDesc || kanda.shortDesc);

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-[#05050A]">

      <div
        className="absolute top-0 left-0 w-full h-[70vh] pointer-events-none opacity-40 mix-blend-screen"
        style={{ background: `radial-gradient(ellipse 100% 100% at 50% 0%, ${kanda.accent}25 0%, transparent 80%)` }}
      />

      <div className="fixed top-6 left-6 z-50 flex items-center gap-4">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-300 text-xs tracking-[0.3em] uppercase font-sans bg-black/40 backdrop-blur-md px-4 py-2 rounded border border-white/10"
        >
          <ArrowLeft className="w-3 h-3" />
          Back
        </motion.button>
      </div>

      <div className="relative min-h-[60vh] flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={kanda.image}
            alt={kanda.name}
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-[#05050A]/70 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center max-w-4xl w-full"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-white/20 mb-8 bg-black/50 backdrop-blur-md">
             <span className="text-3xl text-[#D4AF37]">{kanda.symbol}</span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center"
          >
            <LanguageSelector />
          </motion.div>

          <p
            className="text-xs md:text-sm tracking-[0.6em] uppercase font-sans mb-4 mt-2 text-accent"
          >
            {kanda.title}
          </p>
          <h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white font-light uppercase tracking-widest mb-8"
            style={{ fontFamily: lang === 'en' ? "'Cinzel', serif" : "sans-serif" }}
          >
            {displayName}
          </h1>
          <div className="h-px w-32 mx-auto mb-8 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-sans"
             style={{ fontFamily: lang !== 'en' ? "sans-serif" : undefined }}
          >
            {displayShortDesc}
          </p>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16 flex flex-col gap-16 relative z-10">
        <div className="flex items-center justify-center gap-3 text-white/30">
          <Scroll className="w-5 h-5" />
          <span className="text-[10px] tracking-[0.5em] uppercase font-sans line-through opacity-50">✦✦✦</span>
        </div>

        {kanda.sections.map((section, i) => {
          const sectionTrans = translatedData.sections?.[i] || {};
          const displayHeading = lang === 'en' ? section.heading : (sectionTrans.heading || section.heading);
          const displayBody = lang === 'en' ? section.body : (sectionTrans.body || section.body);
          
          return (
            <motion.article
              key={section.heading}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              className="flex flex-col md:flex-row gap-6 md:gap-12 items-start"
            >
              <div className="md:w-1/3 flex flex-col gap-3">
                <h2
                  className="text-xl md:text-2xl text-white font-light tracking-[0.1em] uppercase border-l-2 pl-4"
                  style={{ fontFamily: lang === 'en' ? "'Cinzel', serif" : "sans-serif", borderColor: kanda.accent }}
                >
                  {displayHeading}
                </h2>
              </div>
              <div className="md:w-2/3">
                <p className="text-white/75 text-sm md:text-base leading-[2] font-sans text-justify"
                   style={{ fontFamily: lang !== 'en' ? "sans-serif" : undefined }}
                >
                  {displayBody}
                </p>
              </div>
            </motion.article>
          );
        })}



      </div>
    </div>
  );
}
