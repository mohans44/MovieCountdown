import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { musicPlatforms } from '../data/data';

export default function MusicLinks() {
  const [active, setActive] = useState(null); // the currently selected platform

  const handleClick = (platform) => {
    if (!platform.embed) {
      window.open(platform.url, '_blank', 'noopener,noreferrer');
      return;
    }
    setActive(active?.name === platform.name ? null : platform);
  };

  return (
    <section className="relative z-10 w-full max-w-4xl mx-auto px-6 flex flex-col gap-10">
      <div className="text-center">
        <p className="text-[#d4af37] tracking-[0.2em] sm:tracking-[0.5em] uppercase text-[10px] sm:text-xs font-sans mb-2 sm:mb-3 whitespace-nowrap">
          Ramayana Official Album
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-light text-white uppercase tracking-[0.2em] sm:tracking-[0.4em] whitespace-nowrap"
          style={{ fontFamily: 'Cinzel, serif' }}>
          Listen Now
        </h2>
        <div className="h-px w-32 sm:w-48 bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent mx-auto mt-4 sm:mt-6" />
        <p className="mt-4 text-white/40 text-[8px] sm:text-xs tracking-[0.1em] sm:tracking-[0.3em] uppercase font-sans">
          Composed by A.R. Rahman &amp; Hans Zimmer
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-10">
        {musicPlatforms.map((platform) => {
          const isActive = active?.name === platform.name;
          return (
            <motion.button
              key={platform.name}
              onClick={() => handleClick(platform)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              animate={isActive
                ? { scale: 1.05, y: -2 }
                : { scale: 1, y: 0 }
              }
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              title={platform.name}
              className="relative flex flex-col items-center gap-2 group"
            >
              <div
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-[#0d0005]/80 border transition-all duration-400 flex items-center justify-center backdrop-blur-md"
                style={{
                  borderColor: isActive
                    ? platform.accentColor.replace('0.6', '0.8')
                    : 'rgba(255,255,255,0.1)',
                  boxShadow: isActive
                    ? `0 0 20px ${platform.accentColor}`
                    : 'none',
                }}
              >
                <img
                  src={platform.icon}
                  alt={platform.name}
                  className="w-8 h-8 md:w-10 md:h-10 object-contain transition-opacity duration-300"
                  style={{
                    filter: ['Apple Music'].includes(platform.name)
                      ? 'invert(1) brightness(1)'
                      : 'none',
                    opacity: isActive ? 1 : 0.7,
                  }}
                />
              </div>
              <span
                className="text-[8px] sm:text-[10px] uppercase tracking-[0.1em] sm:tracking-[0.2em] font-sans transition-colors duration-300"
                style={{ color: isActive ? platform.accentColor.replace('0.6', '1') : 'rgba(255,255,255,0.4)' }}
              >
                {platform.name}
              </span>
              {isActive && (
                <motion.div
                  layoutId="active-dot"
                  className="w-1 h-1 rounded-full"
                  style={{ background: platform.accentColor }}
                />
              )}
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            key={active.name}
            layout
            initial={{ opacity: 0, height: 0, scale: 0.98 }}
            animate={{ opacity: 1, height: 'auto', scale: 1 }}
            exit={{ opacity: 0, height: 0, scale: 0.98 }}
            transition={{ 
              height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.25 },
              scale: { duration: 0.4 }
            }}
            className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-[#0d0005]/60 backdrop-blur-md"
            style={{
              boxShadow: `0 0 60px ${active.accentColor.replace('0.6', '0.15')}`,
            }}
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/5">
              <span className="text-white/50 text-xs tracking-[0.3em] uppercase font-sans">
                {active.name}
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={active.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-white/70 transition-colors"
                  title="Open in app"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setActive(null)}
                  className="text-white/30 hover:text-white/70 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="p-3">
              <iframe
                src={active.embed.src}
                height={active.embed.height}
                width="100%"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                sandbox={active.embed.type === 'apple'
                  ? 'allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation'
                  : undefined
                }
                allowFullScreen
                loading="lazy"
                style={{
                  borderRadius: active.embed.type === 'spotify' ? '12px' : '8px',
                  display: 'block',
                  background: 'transparent',
                }}
                title={`${active.name} embed`}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
