import { motion } from 'framer-motion';
import SplitText from './SplitText';

export default function TicketingEngine() {
  return (
    <section className="relative z-10 w-full max-w-6xl mx-auto py-32 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_60%)] pointer-events-none mix-blend-screen" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 1.5, type: "spring", stiffness: 40, damping: 20 }}
        className="relative w-full rounded-xl md:rounded-t-[40%] md:rounded-b-[2rem] p-6 md:p-24 text-center overflow-hidden border border-accent/20 shadow-[0_0_80px_rgba(212,175,55,0.08)]"
        style={{ background: 'linear-gradient(to bottom, rgba(20,10,4,0.9) 0%, rgba(8,9,26,0.95) 100%)' }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[150%] -left-[50%] w-[200%] h-[400%] bg-[conic-gradient(from_0deg,transparent,rgba(212,175,55,0.06),transparent)] pointer-events-none mix-blend-screen"
        />

        <div className="hidden md:block absolute inset-4 border-t border-l border-r border-accent/20 rounded-t-[40%] pointer-events-none" />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 text-accent/40 text-xl">✧</div>

        <div className="relative z-10 mt-10 md:mt-16">
          <span className="text-[#D4AF37] tracking-[0.55em] uppercase text-xs font-sans block mb-6">
            The Final Journey
          </span>
          <SplitText
            text="Witness the Epic"
            className="text-3xl md:text-5xl lg:text-6xl font-light text-white uppercase tracking-[0.3em] mb-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.5, duration: 1.2 }}
            className="text-white/40 text-xs tracking-[0.4em] uppercase mb-16 max-w-xl mx-auto font-sans leading-relaxed"
          >
            Mark your interest to get notified when tickets are available
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.7, duration: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="https://in.bookmyshow.com/movies/ramayana/ET00451914"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-56 py-4 flex items-center justify-center rounded border border-[#F84464]/40 bg-[#F84464]/5 text-[#F84464] tracking-[0.35em] uppercase text-xs font-sans hover:bg-[#F84464]/15 hover:border-[#F84464]/70 transition-all duration-300"
            >
              BookMyShow
            </motion.a>

            <motion.a
              href="https://www.district.in/movies/ramayana-movie-tickets-MV176276"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-56 py-4 flex items-center justify-center rounded border border-[#8B5CF6]/40 bg-[#8B5CF6]/5 text-[#C4B5FD] tracking-[0.35em] uppercase text-xs font-sans hover:bg-[#8B5CF6]/15 hover:border-[#8B5CF6]/70 transition-all duration-300"
            >
              District
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
