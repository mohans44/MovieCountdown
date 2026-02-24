import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import LandingScreen from './components/LandingScreen';
import ReleaseDates from './components/ReleaseDates';
import CountdownTimer from './components/CountdownTimer';
import CastAndCrew from './components/CastAndCrew';
import Crew from './components/Crew';
import MovieAbout from './components/MovieAbout';
import TicketingEngine from './components/TicketingEngine';
import OfficialSocials from './components/OfficialSocials';
import MusicLinks from './components/MusicLinks';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import YouTube from 'react-youtube';
import CharactersSection from './components/CharactersSection';
import CharacterPage from './pages/CharacterPage';
import KandasSection from './components/KandasSection';
import KandaPage from './pages/KandaPage';
import SenasSection from './components/SenasSection';
import SenaPage from './pages/SenaPage';
import LocationsSection from './components/LocationsSection';
import LocationPage from './pages/LocationPage';
import { LanguageProvider } from './components/LanguageContext';

function GlobalParticles() {
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    setParticles(
      Array.from({ length: 25 }).map((_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        startX: Math.random() * 100,
        duration: Math.random() * 18 + 12,
        delay: Math.random() * 6,
      }))
    );
  }, []);
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bottom-[-20px] rounded-full bg-[#D4AF37] opacity-70"
          style={{ width: p.size, height: p.size, left: `${p.startX}vw`, filter: 'blur(0.5px)' }}
          animate={{ y: ['0vh', '-110vh'], opacity: [0, 0.5, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'linear' }}
        />
      ))}
    </div>
  );
}

function SnapSection({ id, children, className = '' }) {
  return (
    <section
      id={id}
      className={`w-full h-screen flex flex-col items-center justify-center shrink-0 relative pb-[4rem] sm:pb-0 ${className}`}
      style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}
    >
      {children}
    </section>
  );
}

function Home() {
  const location = useLocation();
  const sessionSkip = sessionStorage.getItem('skipIntro') === 'true';
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
  const shouldSkipIntro = location.state?.skipIntro || sessionSkip || isMobile;

  const [introState, setIntroState] = useState(shouldSkipIntro ? 'finished' : 'landing');
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [showBlackScreen, setShowBlackScreen] = useState(false);
  const audioRef = useRef(null);
  const videoRef = useRef(null);
  const scrollContainerRef = useRef(null);

  const startVideo = () => {
    setIntroState('playing');
  };

  const enterHomepage = () => {
    setShowBlackScreen(true);
    sessionStorage.setItem('skipIntro', 'true');
    setIntroState('finished');
    if (audioRef.current && !isMuted) {
      audioRef.current.volume = 0.35;
      audioRef.current.play().catch(() => {});
    }
  };

  useEffect(() => {
    if (introState === 'playing' && videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(() => {});
    }
  }, [introState]);

  const scrollToTop = () => {
    scrollContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [showGoTop, setShowGoTop] = useState(false);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    
    const handleScroll = () => {
      setShowGoTop(el.scrollTop > window.innerHeight * 0.5);
    };
    
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [introState]);

  useEffect(() => {
    const returnSection = sessionStorage.getItem('returnScroll') || location.state?.scrollTo;
    if (introState === 'finished' && returnSection && scrollContainerRef.current) {
      setTimeout(() => {
        const el = document.getElementById(returnSection);
        if (el) {
          el.scrollIntoView({ behavior: 'instant' });
          sessionStorage.removeItem('returnScroll');
        }
      }, 50);
    }
  }, [introState, location.state]);

  return (
    <div className="w-screen h-screen bg-[#08091A] text-white overflow-hidden relative font-sans selection:bg-[#D4AF37]/20">
      <audio ref={audioRef} loop src="/src/assets/background-music.mp3" />

      <AnimatePresence mode="wait">
        {introState === 'landing' && (
          <LandingScreen key="landing" onStart={startVideo} />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {introState === 'playing' && (
          <motion.div
            key="playing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-40 overflow-hidden"
            style={{ background: '#000' }}
          >
            <div className={`absolute inset-0 bg-black z-40 transition-opacity duration-1000 pointer-events-none ${isVideoReady ? 'opacity-0' : 'opacity-100'}`} />
            
            {showBlackScreen && <div className="absolute inset-0 bg-black z-50 pointer-events-none" />}

            <div className="absolute top-1/2 left-1/2 w-full h-[150vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <YouTube
                videoId="gzUu-FJ7s-Y"
                onReady={(e) => {
                  if (e.target.getPlayerState() === 1) setIsVideoReady(true);
                }}
                onStateChange={(e) => {
                  if (e.data === 1) {
                    setIsVideoReady(true);
                    
                    if (e.target.pollingInterval) clearInterval(e.target.pollingInterval);
                    e.target.pollingInterval = setInterval(() => {
                      // Trigger blackout even earlier (67.0s) to guarantee no end-cards flash
                      if (e.target.getCurrentTime() >= 67.0) {
                        clearInterval(e.target.pollingInterval);
                        enterHomepage();
                      }
                    }, 50);
                  } else {
                    if (e.target.pollingInterval) clearInterval(e.target.pollingInterval);
                  }
                }}
                onEnd={enterHomepage}
                opts={{
                  width: '100%',
                  height: '100%',
                  playerVars: {
                    autoplay: 1,
                    controls: 0,
                    showinfo: 0,
                    modestbranding: 1,
                    fs: 0,
                    cc_load_policy: 0,
                    iv_load_policy: 3,
                    rel: 0,
                    disablekb: 1,
                    playsinline: 1,
                    start: 3,
                    end: 69
                  }
                }}
                className={`w-full h-full object-cover transition-opacity duration-1000 ${isVideoReady ? 'opacity-100' : 'opacity-0'}`}
                iframeClassName="w-full h-full scale-[1.3] object-cover pointer-events-none"
              />
            </div>
            <motion.a
              href="https://www.youtube.com/@WorldOfRamayana"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 z-50 text-white/50 hover:text-white text-[10px] sm:text-xs tracking-[0.2em] font-sans uppercase transition-colors"
            >
              Video: @worldoframayana
            </motion.a>
            
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              onClick={enterHomepage}
              className="absolute bottom-10 right-12 z-50 text-white/50 hover:text-white text-xs uppercase tracking-[0.35em] transition-colors duration-300 font-sans flex items-center gap-2"
            >
              Skip Intro
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {introState === 'finished' && (
          <motion.div
            key="homepage"
            ref={scrollContainerRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="w-full h-screen overflow-y-scroll overflow-x-hidden relative z-10"
            style={{
              scrollSnapType: 'y mandatory',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <style>{`
              div[data-scroll-container]::-webkit-scrollbar { display: none; }
            `}</style>

            <Header />

            <div className="fixed inset-0 z-0 pointer-events-none">
              <div className="absolute inset-0 bg-[#08091A]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,20,80,0.55)_0%,transparent_50%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_left,rgba(80,10,20,0.45)_0%,transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_30%_20%_at_50%_50%,rgba(180,110,10,0.05)_0%,transparent_70%)]" />
              <GlobalParticles />
            </div>

            <SnapSection id="release-dates-snap" className="px-6 py-10">
              <ReleaseDates />
            </SnapSection>

            <SnapSection className="px-6 py-20 border-t border-white/5">
              <CountdownTimer />
            </SnapSection>

            <SnapSection className="border-t border-white/5">
              <MovieAbout />
            </SnapSection>

            <SnapSection className="px-6 border-t border-white/5 overflow-hidden">
              <CastAndCrew />
            </SnapSection>

            <SnapSection className="px-6 border-t border-white/5 overflow-hidden">
              <Crew />
            </SnapSection>

            <SnapSection id="characters-section" className="px-6 border-t border-white/5 overflow-hidden">
              <CharactersSection />
            </SnapSection>

            <SnapSection id="kandas-section" className="px-6 border-t border-white/5 overflow-hidden">
              <KandasSection />
            </SnapSection>

            <SnapSection id="senas-section" className="px-6 border-t border-white/5 overflow-hidden">
              <SenasSection />
            </SnapSection>

            <SnapSection id="locations-section" className="px-6 border-t border-white/5 overflow-hidden">
              <LocationsSection />
            </SnapSection>

            <SnapSection id="music-section" className="px-6 border-t border-white/5 overflow-hidden">
              <MusicLinks />
            </SnapSection>

            <SnapSection id="tickets-section" className="px-6 border-t border-white/5 overflow-hidden">
              <TicketingEngine />
            </SnapSection>

            

            <SnapSection id="socials-section" className="border-t border-white/5 overflow-hidden">
              <OfficialSocials />
            </SnapSection>

            <section
              className="w-full shrink-0 border-t border-white/5"
              style={{ scrollSnapAlign: 'start' }}
            >
              <Footer />
            </section>

            <AnimatePresence>
              {showGoTop && (
                <div className="fixed bottom-6 right-6 z-50">
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    onClick={scrollToTop}
                    title="Go to top"
                    className="w-11 h-11 rounded-full bg-[#08091A]/80 backdrop-blur-md border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/60 transition-all duration-300"
                  >
                    <ArrowUp className="w-4 h-4" />
                  </motion.button>
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<CharacterPage />} />
          <Route path="/kanda/:id" element={<KandaPage />} />
          <Route path="/sena/:id" element={<SenaPage />} />
          <Route path="/locations/:id" element={<LocationPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
