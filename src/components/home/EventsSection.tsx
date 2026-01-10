import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Calendar, MapPin, ArrowRight, PlayCircle } from "lucide-react";
import { UPCOMING_EVENTS, PAST_EVENTS } from "../../data/mockData";

const EventsSection: React.FC = () => {
  const [eventFilter, setEventFilter] = useState("upcoming");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const events = eventFilter === "upcoming" ? UPCOMING_EVENTS : PAST_EVENTS;

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", containScroll: "trimSnaps", dragFree: false },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (emblaApi) emblaApi.reInit();
  }, [eventFilter, emblaApi]);

  return (
    <section id="events" className="py-24 bg-[var(--bg)] transition-colors overflow-hidden">
      <div className="px-6 sm:px-12 w-full max-w-[1920px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 text-blue-600 text-[11px] font-black uppercase tracking-[0.4em] mb-6">
              <Calendar size={16} /> Summit Intelligence
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]">
              Where the <span className="gradient-text">Industry</span> Meets
            </h2>
            <p className="mt-6 opacity-50 text-xl font-medium max-w-xl">
              A panoramic circuit of elite GCC summits, AI roundtables, and leadership forums across the globe.
            </p>
          </div>
          <div className="flex p-1.5 bg-black/5 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/5">
            {["upcoming", "past"].map((filter) => (
              <button
                key={filter}
                onClick={() => setEventFilter(filter)}
                className={`px-10 py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                  eventFilter === filter ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl" : "opacity-40 hover:opacity-100"
                }`}
              >
                {filter === "upcoming" ? "Upcoming" : "Archive"}
              </button>
            ))}
          </div>
        </div>

        <div className="relative group/slider">
          <button onClick={scrollPrev} className="absolute -left-6 top-1/2 -translate-y-1/2 z-30 p-5 rounded-full glass border-white/10 text-white hover:bg-blue-600 transition-all opacity-0 group-hover/slider:opacity-100 hidden lg:flex shadow-2xl">
            <ChevronLeft size={24} />
          </button>
          <button onClick={scrollNext} className="absolute -right-6 top-1/2 -translate-y-1/2 z-30 p-5 rounded-full glass border-white/10 text-white hover:bg-blue-600 transition-all opacity-0 group-hover/slider:opacity-100 hidden lg:flex shadow-2xl">
            <ChevronRight size={24} />
          </button>

          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef} key={eventFilter}>
            <div className="flex -ml-5">
              {events.map((event) => (
                <div key={event.id} className="flex-none w-[90%] md:w-1/2 xl:w-1/3 min-h-[500px] px-5">
                  <div className="group relative rounded-xl overflow-hidden glass border border-black/5 dark:border-white/10 transition-all duration-700 flex flex-col h-full bg-slate-900/50 shadow-sm hover:shadow-2xl hover:-translate-y-2">
                    <div className="relative w-full h-full overflow-hidden flex flex-col">
                      <img src={event.image} alt={event.title} className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent z-[1]" />
                      <div className="absolute top-8 left-8 z-[2]">
                        <div className="px-5 py-2 rounded-xl glass bg-white/10 text-[10px] font-black uppercase tracking-widest backdrop-blur-xl border border-white/20 text-white">
                          {event.date}
                        </div>
                      </div>
                      <div className="relative z-[2] mt-auto p-10 text-white">
                        <div className="flex items-center gap-2 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                          <MapPin size={12} /> {event.location}
                        </div>
                        <h3 className="text-3xl font-black mb-6 leading-tight group-hover:text-blue-400 transition-colors">{event.title}</h3>
                        <div className="flex items-center justify-between">
                          <button className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] group-hover:gap-5 transition-all text-white border-b-2 border-white/20 pb-2 hover:border-blue-400">
                            {event.type === "upcoming" ? "Request Invite" : "Watch Keynote"} <ArrowRight size={16} />
                          </button>
                          {event.type === "past" && <PlayCircle size={32} className="opacity-40 group-hover:opacity-100 group-hover:text-blue-400 transition-all" />}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center gap-3 mt-12">
            {scrollSnaps.map((_, index) => (
              <button key={index} onClick={() => scrollTo(index)} className={`transition-all duration-500 rounded-full h-2 ${index === selectedIndex ? "w-12 bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]" : "w-2 bg-slate-500 hover:bg-slate-400"}`} aria-label={`Go to slide ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;