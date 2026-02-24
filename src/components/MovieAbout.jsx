import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import posterImg from '../assets/poster.jpg';
import { movieMeta } from '../data/data';

const GLIMPSE_URL = 'https://www.youtube.com/watch?v=gzUu-FJ7s-Y';

export default function MovieAbout() {
  return (
    <section className="relative z-10 w-full px-6 lg:px-16 py-6 md:py-10 flex flex-col items-center justify-center h-full">

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_20%_50%,rgba(15,20,80,0.3)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_80%_50%,rgba(80,10,20,0.25)_0%,transparent_70%)] pointer-events-none" />

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-8 lg:gap-20 w-full max-w-6xl mx-auto mt-2 md:mt-0">

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: false }}
           transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
           className="relative flex-shrink-0 inline-flex place-self-center md:place-self-auto"
        >
          <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-[#D4AF37]/70 z-10" />
          <div className="absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2 border-[#D4AF37]/70 z-10" />
          <div className="absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2 border-[#D4AF37]/70 z-10" />
          <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-[#D4AF37]/70 z-10" />
          <div className="overflow-hidden rounded border border-[#D4AF37]/20 shadow-[0_0_50px_rgba(212,175,55,0.15)] w-[140px] sm:w-[180px] lg:w-[320px]">
            <img
              src={posterImg}
              alt="Ramayana Official Poster"
              className="w-full h-auto object-cover block"
              loading="eager"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="flex-1 flex flex-col gap-3 lg:gap-6 text-center md:text-left items-center md:items-start justify-center"
        >
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2
              className="text-xl sm:text-3xl md:text-5xl text-white font-light tracking-[0.2em] md:tracking-[0.3em] uppercase mb-1 md:mb-2 ml-[0.2em] md:ml-0"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Ramayana
            </h2>
            <p className="text-[#D4AF37] text-[8px] sm:text-[11px] tracking-[0.3em] lg:tracking-[0.5em] uppercase font-sans ml-[0.3em] md:ml-0">
              {movieMeta.year} &nbsp;·&nbsp; Dir. {movieMeta.director}
            </p>
          </div>

          <div className="h-px w-20 md:w-32 bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent md:from-[#D4AF37]/60 md:via-[#D4AF37]/60 md:to-transparent mx-auto md:mx-0" />

          <div className="flex flex-col items-center md:items-start w-full">
            <p className="text-white text-[10px] sm:text-sm md:text-[15px] leading-[1.6] md:leading-[1.9] font-sans max-w-2xl opacity-90 text-justify md:text-left tracking-wide">
              {movieMeta.synopsis}
            </p>
          </div>

          <p className="text-white/45 text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.35em] uppercase font-sans">
            {movieMeta.studio}
          </p>

          <div className="flex justify-center md:justify-start pt-2">
            <motion.a
              href={GLIMPSE_URL}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-7 py-2 md:py-3 border border-[#D4AF37]/50 bg-[#D4AF37]/8 text-[#D4AF37] text-[8px] md:text-xs tracking-[0.2em] md:tracking-[0.4em] uppercase font-sans hover:bg-[#D4AF37]/15 hover:border-[#D4AF37]/80 transition-all duration-300"
            >
              <Play className="w-3 h-3 fill-current" />
              Watch the Glimpse
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
