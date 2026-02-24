import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  if (typeof window !== 'undefined') {
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="fixed top-0 inset-x-0 z-50 flex items-center justify-center py-5 px-6"
      style={{
        background: 'linear-gradient(to bottom, rgba(8,9,26,0.85) 0%, rgba(8,9,26,0) 100%)',
        backdropFilter: 'blur(0px)',
      }}
    >
      <motion.h1
        className="text-white uppercase tracking-[0.55em] text-sm md:text-base font-light"
        style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.55em' }}
      >
        Ramayana
      </motion.h1>
    </motion.header>
  );
}
