import { motion } from 'framer-motion';

export default function ReleaseDates() {
  return (
    <section className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-16 flex flex-col items-center gap-16">

      <div className="text-center">
        <p className="text-[#D4AF37] tracking-[0.6em] uppercase text-base md:text-xl font-sans mb-4">
          The Saga Begins
        </p>
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mx-auto" />
      </div>

      <div className="flex flex-row items-stretch justify-center gap-0 md:gap-0 w-full max-w-3xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 flex flex-col items-center gap-3 md:gap-5 py-6 md:py-16 px-2 md:px-10 border border-white/10 relative overflow-hidden group"
          style={{ background: 'linear-gradient(135deg, rgba(26,8,4,0.8) 0%, rgba(8,9,26,0.4) 100%)' }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_30%_50%,rgba(220,80,20,0.12)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          <p className="text-white/80 text-xs md:text-3xl tracking-[0.2em] md:tracking-[0.4em] uppercase font-sans">Part</p>
          <h2
            className="text-5xl md:text-[6.5rem] font-light text-white leading-none"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            I
          </h2>
          <div className="h-px w-12 md:w-16 bg-[#E8832A]/60" />
          <div className="text-center">
            <p className="text-white/40 text-[7px] md:text-[10px] tracking-[0.2em] md:tracking-[0.5em] uppercase font-sans mb-1 md:mb-2 leading-tight">Worldwide<br className="block sm:hidden"/> Release</p>
            <p className="text-[#E8832A] text-[10px] sm:text-xs md:text-xl tracking-[0.15em] md:tracking-[0.3em] uppercase font-sans whitespace-nowrap">Diwali 2026</p>
          </div>
        </motion.div>

        <div className="flex flex-col items-center justify-center px-1 sm:px-6 relative">
          <div className="w-px flex-1 bg-gradient-to-b from-transparent via-white/15 to-transparent" />
          <span className="text-[#D4AF37]/40 text-[10px] md:text-lg my-3">✦</span>
          <div className="w-px flex-1 bg-gradient-to-b from-transparent via-white/15 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="flex-1 flex flex-col items-center gap-3 md:gap-5 py-6 md:py-16 px-2 md:px-10 border border-white/10 relative overflow-hidden group"
          style={{ background: 'linear-gradient(135deg, rgba(8,9,26,0.4) 0%, rgba(20,15,4,0.8) 100%)' }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_70%_50%,rgba(180,130,10,0.1)_0%,transparent_70%)] pointer-events-none" />

          <p className="text-white/80 text-xs md:text-3xl tracking-[0.2em] md:tracking-[0.4em] uppercase font-sans">Part</p>
          <h2
            className="text-5xl md:text-[6.5rem] font-light text-white leading-none"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            II
          </h2>
          <div className="h-px w-12 md:w-16 bg-[#D4AF37]/60" />
          <div className="text-center">
            <p className="text-white/40 text-[7px] md:text-[10px] tracking-[0.2em] md:tracking-[0.5em] uppercase font-sans mb-1 md:mb-2 leading-tight">Worlwide<br className="block sm:hidden"/> Release</p>
            <p className="text-[#D4AF37] text-[10px] sm:text-xs md:text-xl tracking-[0.15em] md:tracking-[0.3em] uppercase font-sans whitespace-nowrap">Diwali 2027</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
