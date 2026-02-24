import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isLive, setIsLive] = useState(false);

  // Target Date: Ram Navami 2026 (March 27, 2026)
  const targetDate = new Date('2026-03-27T00:00:00');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setIsLive(true);
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000); // Update every second
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative z-10 w-full max-w-4xl mx-auto px-6 py-20 flex flex-col items-center justify-center">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[radial-gradient(circle,rgba(255,153,51,0.05)_0%,transparent_70%)] rounded-full pointer-events-none mix-blend-screen" />
      <motion.div 
        animate={{ rotate: 360 }} 
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[550px] md:h-[550px] border border-primary/5 rounded-full border-dashed pointer-events-none" 
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="text-center w-full relative z-10"
      >
        <span className="text-[#d1b3c4] tracking-[0.5em] uppercase text-xs md:text-sm font-sans block mb-6 drop-shadow-[0_0_10px_rgba(255,153,51,0.2)]">
          The Glimpse
        </span>
        <h2 className="text-4xl md:text-6xl text-primary font-bold uppercase tracking-widest drop-shadow-[0_0_20px_rgba(255,153,51,0.4)] mb-2">
          Official Teaser
        </h2>
        <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto mt-6 mb-12" />

        <AnimatePresence mode="wait">
          {!isLive ? (
            <motion.div 
              key="countdown"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 1 }}
              className="flex items-center justify-center gap-3 md:gap-10"
            >
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds }
              ].map((item, index) =>
                <>
                  <div key={item.label} className="flex flex-col items-center">
                    <div className="text-3xl md:text-7xl lg:text-8xl font-light text-white tabular-nums tracking-tighter w-12 md:w-28 text-center mb-2 md:mb-3">
                      {String(item.value).padStart(2, '0')}
                    </div>
                    <span className="text-[8px] md:text-xs text-[#D4AF37] tracking-[0.35em] uppercase font-sans">
                      {item.label}
                    </span>
                  </div>
                  {index < 3 && (
                    <span key={`dot-${index}`} className="text-[#D4AF37]/40 text-base md:text-3xl leading-none pb-5 flex-shrink-0" style={{ textShadow: '0 0 10px rgba(212,175,55,0.4)' }}>&#10042;</span>
                  )}
                </>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="live"
              initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
              className="py-12 relative"
            >
                <div className="absolute inset-0 bg-primary/20 blur-[50px] rounded-full scale-150 pointer-events-none" />
                <h3 className="text-5xl md:text-7xl font-bold bg-gradient-to-tr from-white via-[#ffb973] to-primary bg-clip-text text-transparent uppercase tracking-widest relative z-10 drop-shadow-[0_0_30px_rgba(255,153,51,0.5)]">
                    Now Streaming
                </h3>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.p
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: false }}
           transition={{ delay: 1, duration: 1.5 }}
           className="mt-16 text-[#666666] tracking-[0.3em] font-sans text-xs uppercase"
        >
            Rama Navami &middot; March 27, 2026
        </motion.p>
      </motion.div>
    </section>
  );
}
