import { motion } from 'framer-motion';

export default function LandingScreen({ onStart }) {
  return (
    <motion.div
      key="landing"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#08091A]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_15%_20%,rgba(40,15,80,0.6)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_85%_75%,rgba(80,15,30,0.5)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_50%_50%,rgba(180,110,10,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="absolute top-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#d4af37]" />
        <div className="w-1 h-1 rounded-full bg-[#d4af37]" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 text-center px-4 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-[#D4AF37]/70 tracking-[0.3em] sm:tracking-[0.8em] uppercase text-[10px] sm:text-sm md:text-lg font-sans whitespace-nowrap"
        >
          Our Truth &middot; Our History
        </motion.p>


        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-7xl md:text-9xl font-light tracking-[0.2em] sm:tracking-[0.3em] uppercase text-white"
          style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.35em' }}
        >
          Ramayana
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1.2 }}
          className="text-[#d4af37] tracking-[0.55em] uppercase text-xs font-sans"
        >
          Nitesh Tiwari · 2026
        </motion.p>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="flex items-center gap-4"
        >
          <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#d4af37]/60" />
          <span className="text-[#d4af37]/60 text-[10px] tracking-[0.5em] uppercase font-sans">The Epic</span>
          <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#d4af37]/60" />
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          onClick={onStart}
          className="group relative mt-4 overflow-hidden flex items-center gap-3 border border-white/30 hover:border-[#d4af37]/70 text-white/90 hover:text-white bg-transparent hover:bg-[#d4af37]/10 transition-all duration-500 px-8 py-4 sm:px-12 sm:py-5 uppercase tracking-[0.35em] text-[10px] sm:text-xs font-sans"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/0 via-[#d4af37]/10 to-[#d4af37]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
          <span className="relative z-10">Enter the Realm</span>
          <svg className="relative z-10 w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </motion.button>
      </div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-1 h-1 rounded-full bg-[#d4af37]" />
        <div className="w-px h-12 bg-gradient-to-b from-[#d4af37] to-transparent" />
      </div>
    </motion.div>
  );
}
