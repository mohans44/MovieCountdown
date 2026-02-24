import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 pt-16 pb-10 px-6 relative z-10 overflow-hidden"
      style={{ background: 'linear-gradient(to top, rgba(8,9,26,1) 0%, rgba(8,9,26,0.6) 100%)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-10">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center gap-3"
        >
          <p
            className="text-2xl md:text-4xl text-[#D4AF37] tracking-[0.5em] uppercase"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Ramayana
          </p>
          <p className="text-xs sm:text-sm md:text-base tracking-wider text-white/80 font-sans leading-relaxed">
            रामायण &nbsp;·&nbsp; రామాయణం &nbsp;·&nbsp; இராமாயணம் &nbsp;·&nbsp; രാമായണം &nbsp;·&nbsp; ರಾಮಾಯಣ
          </p>
        </motion.div>

        <div className="h-px w-48 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-5xl text-white/50 text-[10px] sm:text-xs leading-relaxed font-sans"
        >
          <p className="mb-2 text-white/70 tracking-widest uppercase text-[8px] sm:text-[10px]">
            A Fan-Made Tribute to the Upcoming Ramayana Epic
          </p>
          <p className="text-[8px] sm:text-[10px]">
            © 2026 Unofficial fan-made promotional website. All characters, titles, logos and images are trademarks of their respective owners (Prime Focus Studios & Monster Mind Creations).
            <br className="hidden sm:block" />
            For educational and portfolio purposes only. Dates and information subject to change.
          </p>
        </motion.div>

      </div>
    </footer>
  );
}
