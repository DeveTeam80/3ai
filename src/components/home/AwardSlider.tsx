import React, { useState, useEffect, useCallback } from 'react';
import { AWARDS_DATA } from '../../data/mockData';

export const AwardSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const nextIndex = (currentIndex + 1) % AWARDS_DATA.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % AWARDS_DATA.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + AWARDS_DATA.length) % AWARDS_DATA.length);
  }, []);

  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isHovering, nextSlide]);

  return (
    <div 
      className="relative w-full max-w-7xl mx-auto my-12 md:px-16"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative overflow-hidden rounded-3xl shadow-2xl min-h-[500px] md:h-[550px]">
        
        {/* SLIDER TRACK */}
        <div 
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] h-full" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {AWARDS_DATA.map((item) => (
            <div key={item.id} className="min-w-full h-full flex flex-col md:flex-row items-center">
              
              {/* LEFT SIDE: TEXT CONTENT */}
              <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center order-2 md:order-1">
                <h3 className="text-3xl md:text-5xl font-black gradient-text mb-6 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed line-clamp-4 font-medium mb-8">
                  {item.description}
                </p>
                <div>
                  <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:bg-blue-600 transition transform hover:-translate-y-1 shadow-lg">
                    View Nominees
                  </button>
                </div>
              </div>

              {/* RIGHT SIDE: IMAGE */}
              <div className="w-full md:w-1/2 h-[250px] md:h-full p-6 md:p-12 order-1 md:order-2">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <img 
                    src={item.category} 
                    alt={item.title} 
                    className="w-full h-full object-cover select-none"
                  />
                  {/* Subtle vignette/overlay for depth */}
                  {/* <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" /> */}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* DOTS NAVIGATION */}
        <div className="absolute bottom-8 left-8 md:left-16 flex gap-2 z-10">
          {AWARDS_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                currentIndex === idx 
                  ? 'w-12 bg-[#0076da]' 
                  : 'w-2 bg-zinc-400 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        
        {/* MOBILE ARROWS */}
        <div className="md:hidden absolute bottom-4 right-4 flex gap-2 z-10">
          <button onClick={prevSlide} className="p-2 bg-white/10 rounded-full text-white backdrop-blur-md border border-white/10"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg></button>
          <button onClick={nextSlide} className="p-2 bg-white/10 rounded-full text-white backdrop-blur-md border border-white/10"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg></button>
        </div>

      </div>

      {/* FLOATING NEXT PREVIEW (MODIFIED TO BE A NAVIGATION HUB) */}
      <div className="hidden md:block absolute right-0 top-[85%] -translate-y-1/2 translate-x-1/4 z-20 w-56 aspect-[3/2]">
         <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl group transition-all duration-500">
             <img 
                src={AWARDS_DATA[nextIndex].category} 
                alt="Next" 
                className="w-full h-full object-cover opacity-80 transition-opacity"
             />
             <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <span className="text-[10px] uppercase tracking-[0.2em] gradient-text font-bold mb-2">Up Next</span>
                {/* <p className="text-white text-xs font-bold leading-tight">
                    {AWARDS_DATA[nextIndex].title}
                </p> */}
             </div>

             {/* NAVIGATION BUTTONS */}
             <div className="absolute inset-x-0 bottom-4 flex justify-center gap-4">
               <button 
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all shadow-xl"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
               </button>
               <button 
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all shadow-xl"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
               </button>
             </div>
         </div>
      </div>
    </div>
  );
};