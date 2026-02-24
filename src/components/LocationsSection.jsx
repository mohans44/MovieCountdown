import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { locations } from '../data/locations';

export default function LocationsSection() {
  return (
    <section className="relative z-10 w-full max-w-[90rem] mx-auto py-10 px-6 lg:px-16 flex flex-col justify-center h-full">
      <div>
        <div className="text-center mb-4 md:mb-10 relative">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[#D4AF37] tracking-[0.6em] uppercase text-xs font-sans mb-4"
          >
            Lands of the Legend
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-xl sm:text-2xl md:text-5xl font-light text-primary uppercase tracking-[0.15em] md:tracking-[0.4em] whitespace-nowrap"
            style={{ fontFamily: 'Cinzel, serif', textShadow: "0 0 25px rgba(255,153,51,0.3)"}}
          >
            Sacred Sites
          </motion.h2>
          <div className="h-[1px] w-64 bg-gradient-to-r from-transparent via-accent/50 to-transparent mx-auto mt-8" />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-white/50 text-xs tracking-[0.3em] uppercase font-sans mt-5 max-w-md mx-auto leading-relaxed"
          >
            Explore the sacred cities, dark forests, and golden fortresses of the epic
          </motion.p>
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
          {locations.map((location, index) => (
              <CarouselItem key={`location-${location.id}`} className="pl-3 md:pl-8 basis-1/3 lg:basis-1/4 xl:basis-1/5 transform-gpu will-change-transform">
                <div className="h-full">
                  <Card className="bg-transparent border-none overflow-hidden group cursor-pointer h-full">
                    <CardContent className="flex flex-col items-center justify-start p-0 relative h-full">
                      <Link to={`/locations/${location.id}`} onClick={() => sessionStorage.setItem('returnScroll', 'locations-section')} className="relative w-full aspect-[2/3] overflow-hidden rounded border border-white/10 group-hover:border-[#D4AF37]/50 transition-colors duration-300 block shadow-lg transform-gpu">
                        <img
                          src={location.image}
                          alt={location.name}
                          loading="lazy"
                          decoding="async"
                          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 will-change-transform transform-gpu"
                          onError={(e) => { e.target.src = location.fallback; }}
                        />
                      <div className="hidden md:block absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#08091A] via-[#08091A]/80 to-transparent transition-opacity duration-300 opacity-80 group-hover:opacity-100" />
                      <div className="hidden md:flex absolute inset-x-0 bottom-0 p-4 flex-col items-center justify-end transition-transform duration-300 transform translate-y-9 group-hover:translate-y-0">
                        <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-sans text-center leading-tight mb-2 drop-shadow-md">{location.name}</p>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center">
                          <p className="text-white/60 text-[10px] uppercase tracking-[0.2em] font-sans text-center">{location.title}</p>
                          <div className="flex items-center justify-center gap-1 mt-2 text-[#D4AF37]">
                            <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] font-sans">Open details</span>
                            <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <div className="flex md:hidden flex-col items-center mt-3 mb-2 w-full px-1">
                      <p className="text-[#D4AF37] text-[9px] uppercase tracking-[0.15em] font-sans text-center leading-tight mb-1">{location.name}</p>
                      <p className="text-white/60 text-[8px] uppercase tracking-[0.1em] font-sans text-center">{location.title}</p>
                    </div>
                    </CardContent>
                  </Card>
                </div>
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
          Swipe to see more locations
        </p>
        <div className="flex items-center gap-1 text-[#D4AF37]/80">
          <span className="text-[8px] uppercase tracking-[0.2em] font-sans">Tap any card to view details</span>
          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </div>
      </div>
    </section>
  );
}
