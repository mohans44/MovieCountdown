import React from 'react';
import { useLanguage } from './LanguageContext';

export default function LanguageSelector() {
  const { lang, setLang } = useLanguage();

  const languages = [
    { code: 'en', label: 'ENGLISH' },
    { code: 'hi', label: 'हिन्दी' },
    { code: 'te', label: 'తెలుగు' }
  ];

  return (
    <div className="flex items-center gap-3 z-50 mb-4">
      {languages.map((l, index) => (
        <React.Fragment key={l.code}>
          <button
            onClick={() => setLang(l.code)}
            className={`text-xs tracking-widest uppercase font-sans transition-colors duration-300 font-bold hover:text-[#D4AF37] ${
              lang === l.code ? 'text-[#D4AF37]' : 'text-white/30'
            }`}
          >
            {l.label}
          </button>
          {index < languages.length - 1 && (
            <span className="text-white/20 text-[10px]">|</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
