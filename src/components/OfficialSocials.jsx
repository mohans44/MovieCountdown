import { motion } from 'framer-motion';
import { Youtube, Instagram } from 'lucide-react';

function XIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.727-8.835L1.254 2.25H8.08l4.258 5.63 5.906-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const LATEST_VIDEO_ID = '7EGIKzCwi6w';

const ACCOUNTS = [
  {
    name: 'YouTube',
    handle: '@worldoframayana',
    url: 'https://youtube.com/@worldoframayana',
    Icon: Youtube,
    hoverColor: 'group-hover:text-[#FF4444]',
  },
  {
    name: 'Instagram',
    handle: '@worldoframayana',
    url: 'https://www.instagram.com/worldoframayana',
    Icon: Instagram,
    hoverColor: 'group-hover:text-[#E1306C]',
  },
  {
    name: 'X / Twitter',
    handle: '@WorldOfRamayana',
    url: 'https://x.com/WorldOfRamayana',
    Icon: XIcon,
    hoverColor: 'group-hover:text-white',
  },
];

export default function OfficialSocials() {
  return (
    <section
      className="relative z-10 w-full flex flex-col items-center justify-center px-4 lg:px-16"
      id="media"
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_30%,rgba(212,175,55,0.06)_0%,transparent_70%)] pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="text-center mb-4 md:mb-10 w-full"
      >
        <p className="text-[#D4AF37] tracking-[0.4em] uppercase text-[10px] font-sans mb-2">
          Stay Connected
        </p>
        <h2
          className="text-xl sm:text-3xl md:text-5xl text-white font-light uppercase tracking-[0.2em] md:tracking-[0.35em]"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          World of Ramayana
        </h2>
        <div className="h-px w-40 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mx-auto mt-2 md:mt-6" />
      </motion.div>

      {/* Main content — video left, socials right */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">

        {/* Latest YouTube video — large */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-8 flex flex-col gap-2 md:gap-4"
        >
          <p className="text-white/40 text-[8px] md:text-[10px] tracking-[0.4em] uppercase font-sans">Latest from the channel</p>
          <div className="relative rounded border border-white/10 overflow-hidden shadow-[0_0_80px_rgba(212,175,55,0.08)] bg-black" style={{ aspectRatio: '16/9' }}>
            {/* Gold corners */}
            <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#D4AF37]/50 z-10 pointer-events-none" />
            <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#D4AF37]/50 z-10 pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#D4AF37]/50 z-10 pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#D4AF37]/50 z-10 pointer-events-none" />
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${LATEST_VIDEO_ID}?rel=0&modestbranding=1&controls=1`}
              title="Ramayana — Latest Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-white/50 text-[10px] md:text-xs font-sans tracking-wide">
            Ramayana Har Jagah &nbsp;·&nbsp; Episode 1: The Jogi Community
          </p>
        </motion.div>

        {/* Social links — right column */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4 grid grid-cols-2 md:flex flex-col gap-2 md:gap-4 w-full"
        >
          <p className="col-span-2 text-white/40 text-[8px] tracking-[0.4em] uppercase font-sans md:mb-1">Follow for updates</p>
          {ACCOUNTS.map(({ name, handle, url, Icon, hoverColor }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-2 md:gap-4 p-2 md:p-4 rounded border border-white/8 bg-white/[0.025] hover:bg-white/[0.055] hover:border-white/20 transition-all duration-300"
            >
              <Icon className={`w-5 h-5 flex-shrink-0 text-white/40 ${hoverColor} transition-colors duration-300`} />
              <div className="min-w-0 flex-1">
                <p className="text-white/90 text-xs font-sans tracking-[0.2em] uppercase">{name}</p>
                <p className="text-white/40 text-[10px] tracking-[0.15em] font-sans mt-0.5">{handle}</p>
              </div>
              <span className="text-white/20 group-hover:text-white/50 transition-colors text-sm flex-shrink-0">↗</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
