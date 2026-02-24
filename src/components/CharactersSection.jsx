import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { characters } from '../data/characters';

export default function CharactersSection() {
  return (
    <section className="relative z-10 w-full max-w-[90rem] mx-auto py-10 px-6 lg:px-16 flex flex-col justify-center h-full">
      <div>
        <div className="text-center mb-4 md:mb-10 relative">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="text-[#D4AF37] tracking-[0.6em] uppercase text-xs font-sans mb-4"
          >
            The Eternal Story
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-xl sm:text-2xl md:text-5xl font-light text-primary uppercase tracking-[0.15em] md:tracking-[0.4em] whitespace-nowrap"
            style={{ fontFamily: 'Cinzel, serif', textShadow: "0 0 25px rgba(255,153,51,0.3)"}}
          >
            Souls of the Epic
          </motion.h2>
          <div className="h-[1px] w-64 bg-gradient-to-r from-transparent via-accent/50 to-transparent mx-auto mt-8" />
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-20 bg-[radial-gradient(ellipse,rgba(212,175,55,0.1)_0%,transparent_70%)] rounded-full blur-[20px] pointer-events-none mix-blend-screen" />
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: false,
            dragFree: true,
          }}
          className="w-full relative group/carousel"
        >
          <CarouselContent className="-ml-3 md:-ml-8">
          {characters.map((char, index) => (
              <CarouselItem key={`char-${char.id}`} className="pl-3 md:pl-8 basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="h-full"
                >
                  <Card className="bg-transparent border-none overflow-hidden group cursor-pointer h-full">
                    <CardContent className="flex flex-col items-center justify-start p-0 relative h-full">
                      <Link to={`/character/${char.id}`} onClick={() => sessionStorage.setItem('returnScroll', 'characters-section')} className="relative w-full aspect-[2/3] overflow-hidden rounded border border-white/10 group-hover:border-[#D4AF37]/50 transition-colors duration-700 shadow-[0_0_20px_rgba(0,0,0,0.6)] block">
                        <img
                          src={char.image}
                          alt={char.name}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          onError={(e) => { e.target.src = char.fallback; }}
                        />
                      <div className="hidden md:block absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#08091A] via-[#08091A]/80 to-transparent transition-opacity duration-500 opacity-80 group-hover:opacity-100" />
                      <div className="hidden md:flex absolute inset-x-0 bottom-0 p-4 flex-col items-center justify-end transition-transform duration-500 transform translate-y-9 group-hover:translate-y-0">
                        <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-sans text-center leading-tight mb-2 drop-shadow-md">{char.name}</p>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center">
                          <p className="text-white/60 text-[10px] uppercase tracking-[0.2em] font-sans text-center">{char.title}</p>
                          <div className="flex items-center justify-center gap-1 mt-2 text-[#D4AF37]">
                            <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] font-sans">Open details</span>
                            <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <div className="flex md:hidden flex-col items-center mt-3 mb-2 w-full px-1">
                      <p className="text-[#D4AF37] text-[9px] uppercase tracking-[0.15em] font-sans text-center leading-tight mb-1">{char.name}</p>
                      <p className="text-white/60 text-[8px] uppercase tracking-[0.1em] font-sans text-center">{char.title}</p>
                    </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
            <CarouselPrevious className="-left-4 lg:-left-8 border-primary/30 text-primary hover:bg-primary/20 hover:text-white bg-[#1b000a]/80 backdrop-blur-xl w-12 h-12 md:w-14 md:h-14 transition-all duration-500 hover:scale-110" />
            <CarouselNext className="-right-4 lg:-right-8 border-primary/30 text-primary hover:bg-primary/20 hover:text-white bg-[#1b000a]/80 backdrop-blur-xl w-12 h-12 md:w-14 md:h-14 transition-all duration-500 hover:scale-110" />
          </div>
        </Carousel>
      </div>

      <div className="md:hidden flex flex-col items-center gap-2 mt-8">
        <p className="text-white/25 text-[10px] tracking-[0.3em] uppercase font-sans text-center">
          Swipe to see more characters
        </p>
        <div className="flex items-center gap-1 text-[#D4AF37]/80">
          <span className="text-[8px] uppercase tracking-[0.2em] font-sans">Tap any card to view details</span>
          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </div>
      </div>
    </section>
  );
}
