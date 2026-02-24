import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield } from 'lucide-react';
import { senas } from '../data/senas';
import { useLanguage } from '../components/LanguageContext';
import LanguageSelector from '../components/LanguageSelector';

export default function SenaPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const sena = senas.find(s => s.id === id);

  if (!sena) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-white/60 tracking-widest uppercase text-sm">Force not found</p>
        <Link to="/" className="text-[#D4AF37] text-xs tracking-widest">← Back to Home</Link>
      </div>
    );
  }

  const translatedData = sena.translations?.[lang] || {};
  const displayName = lang === 'en' ? sena.name : (translatedData.name || sena.name);
  const displayShortDesc = lang === 'en' ? sena.shortDesc : (translatedData.shortDesc || sena.shortDesc);

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-[#0A0505]">

      <div
        className="absolute top-0 left-0 w-full h-[80vh] pointer-events-none opacity-30 mix-blend-screen"
        style={{ background: `radial-gradient(circle at 50% 30%, ${sena.accent}30 0%, transparent 70%)` }}
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

      <div className="relative pt-32 pb-16 px-6 lg:px-24 flex flex-col items-center text-center max-w-5xl mx-auto">
        
        <motion.div
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ duration: 1, ease: "easeOut" }}
           className="w-24 h-24 mb-6 rounded-full border-2 flex items-center justify-center bg-black/80 backdrop-blur-lg shadow-2xl relative z-20"
           style={{ borderColor: sena.accent }}
        >
          <span className="text-4xl">{sena.symbol}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center"
        >
          <LanguageSelector />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xs md:text-sm tracking-[0.6em] uppercase font-sans mb-4 mt-2 text-accent"
        >
          {sena.title}
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-8xl text-white font-light uppercase tracking-widest mb-8"
          style={{ fontFamily: lang === 'en' ? "'Cinzel', serif" : "sans-serif" }}
        >
          {displayName}
        </motion.h1>

        <div className="relative w-full aspect-[21/9] mt-8 mb-16 overflow-hidden rounded border border-white/10 shadow-2xl">
           <img src={sena.image} alt={sena.name} className="w-full h-full object-cover opacity-80" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#0A0505] via-transparent to-transparent" />
        </div>

        <div className="w-full max-w-4xl flex flex-col gap-12 text-left relative z-10">
          {sena.sections.map((section, i) => {
            const sectionTrans = translatedData.sections?.[i] || {};
            const displayHeading = lang === 'en' ? section.heading : (sectionTrans.heading || section.heading);
            const displayBody = lang === 'en' ? section.body : (sectionTrans.body || section.body);
            
            return (
              <motion.article
                key={section.heading}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="bg-white/[0.02] border border-white/5 p-8 rounded hover:bg-white/[0.04] transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                   <Shield className="w-5 h-5" style={{ color: sena.accent }} />
                   <h2
                      className="text-2xl text-white font-light tracking-[0.1em] uppercase"
                      style={{ fontFamily: lang === 'en' ? "'Cinzel', serif" : "sans-serif" }}
                   >
                      {displayHeading}
                   </h2>
                </div>
                <p className="text-white/75 text-sm md:text-base leading-[2] font-sans pl-9 border-l border-white/10 ml-2.5 text-justify"
                   style={{ fontFamily: lang !== 'en' ? "sans-serif" : undefined }}
                >
                  {displayBody}
                </p>
              </motion.article>
            );
          })}
        </div>



      </div>
    </div>
  );
}
