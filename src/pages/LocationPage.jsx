import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin } from 'lucide-react';
import { locations } from '../data/locations';
import { useLanguage } from '../components/LanguageContext';
import LanguageSelector from '../components/LanguageSelector';

export default function LocationPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const location = locations.find(l => l.id === id);

  if (!location) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-white/60 tracking-widest uppercase text-sm">Location not found</p>
        <Link to="/" className="text-[#D4AF37] text-xs tracking-widest">← Back to Home</Link>
      </div>
    );
  }

  const translatedData = location.translations?.[lang] || {};
  const displayName = lang === 'en' ? location.name : (translatedData.name || location.name);
  const displayShortDesc = lang === 'en' ? location.shortDesc : (translatedData.shortDesc || location.shortDesc);

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-[#0A0A0C]">

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

      <div className="relative h-[70vh] w-full overflow-hidden flex items-end pb-16 px-6">
        <div className="absolute inset-0">
          <img
            src={location.image}
            alt={location.name}
            className="w-full h-[120%] object-cover object-center -translate-y-10"
            onError={(e) => { e.target.src = location.fallback; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/60 to-transparent" />
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
           className="relative z-10 max-w-5xl mx-auto w-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <LanguageSelector />
          </motion.div>

          <div className="flex items-center gap-3 mb-4 mt-2">
             <MapPin className="w-5 h-5 text-accent" />
             <span className="text-[10px] tracking-[0.6em] uppercase font-sans text-accent">
               Sacred Sites
             </span>
          </div>
          <h1
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-white font-light tracking-wide uppercase mb-4"
            style={{ fontFamily: lang === 'en' ? "'Cinzel', serif" : "sans-serif" }}
          >
            {displayName}
          </h1>
          <p className="text-lg md:text-xl tracking-widest uppercase font-sans font-light mt-2 text-accent">
            {location.title}
          </p>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-0 py-16 flex flex-col gap-16">
        
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.5, duration: 1 }}
           className="flex items-center gap-6"
        >
           <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
           <span className="text-[#D4AF37] text-2xl">{location.symbol}</span>
           <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </motion.div>
        
        <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-sans text-center"
           style={{ fontFamily: lang !== 'en' ? "sans-serif" : undefined }}
        >
           {displayShortDesc}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          {location.sections.map((section, i) => {
            const sectionTrans = translatedData.sections?.[i] || {};
            const displayHeading = lang === 'en' ? section.heading : (sectionTrans.heading || section.heading);
            const displayBody = lang === 'en' ? section.body : (sectionTrans.body || section.body);
            
            return (
              <motion.article
                key={section.heading}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i % 2 * 0.1 }}
                className="flex flex-col gap-4 group"
              >
                <h2
                  className="text-xl md:text-2xl text-white font-light tracking-[0.1em] uppercase border-b border-white/10 pb-4 inline-block"
                  style={{ fontFamily: lang === 'en' ? "'Cinzel', serif" : "sans-serif" }}
                >
                  {displayHeading}
                </h2>
                <p className="text-white/75 text-sm md:text-base leading-[2] font-sans text-justify"
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
