import { motion } from 'framer-motion';
import SplitText from './SplitText';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { crew } from '../data/data';

export default function EpicCrew() {
  return (
    <section className="relative z-10 w-full max-w-[90rem] mx-auto py-10 px-6 lg:px-16 flex flex-col justify-center h-full">
      <div>
          <div className="text-center mb-4 md:mb-10 relative">
            <SplitText 
              text="The Architects"
              className="text-lg md:text-4xl font-light text-primary uppercase tracking-[0.15em] md:tracking-[0.4em] whitespace-nowrap"
            />
            <div className="h-[1px] w-48 bg-gradient-to-r from-transparent via-accent/50 to-transparent mx-auto mt-6" />
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: false,
              dragFree: true,
            }}
            className="w-full relative"
          >
            <CarouselContent className="-ml-3 md:-ml-8">
              {crew.map((person, index) => (
                <CarouselItem key={`crew-${person.name}-${index}`} className="pl-3 md:pl-8 basis-1/3 lg:basis-1/4 xl:basis-1/5">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-30px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full"
                  >
                <Card className="bg-transparent border-none overflow-hidden group cursor-pointer h-full">
                  <CardContent className="flex flex-col items-center justify-center p-0 relative h-full">
                    <div className="relative w-full aspect-[2/3] overflow-hidden rounded border border-white/10 group-hover:border-[#D4AF37]/50 transition-colors duration-700 shadow-[0_0_20px_rgba(0,0,0,0.6)]">
                      <img
                        src={person.image}
                        alt={person.role}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop' }}
                      />
                      <div className="hidden md:flex absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#08091A] via-[#08091A]/70 to-transparent flex-col justify-end h-1/2">
                        <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-sans text-center leading-tight mb-1">{person.role}</p>
                        <p className="text-white/60 text-[10px] uppercase tracking-[0.2em] font-sans text-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">{person.name}</p>
                      </div>
                    </div>
                    <div className="flex md:hidden flex-col items-center mt-3 mb-2 w-full px-1">
                      <p className="text-[#D4AF37] text-[9px] uppercase tracking-[0.15em] font-sans text-center leading-tight mb-1">{person.role}</p>
                      <p className="text-white/60 text-[8px] uppercase tracking-[0.1em] font-sans text-center">{person.name}</p>
                    </div>
                  </CardContent>
                </Card>
                 </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-4 lg:-left-16 border-accent/30 text-accent hover:bg-accent/20 hover:text-white bg-[#1b000a]/80 backdrop-blur-xl w-12 h-12 md:w-14 md:h-14 transition-all duration-500 hover:scale-110" />
              <CarouselNext className="-right-4 lg:-right-16 border-accent/30 text-accent hover:bg-accent/20 hover:text-white bg-[#1b000a]/80 backdrop-blur-xl w-12 h-12 md:w-14 md:h-14 transition-all duration-500 hover:scale-110" />
            </div>
          </Carousel>
      </div>
    </section>
  );
}
