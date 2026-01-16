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
      className="relative w-full max-w-6xl mx-auto my-12 md:pr-16"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      
      <div className="relative overflow-hidden rounded-3xl bg-black shadow-2xl h-[500px] md:h-[600px]">
        
        <div 
          className="flex transition-transform duration-700 ease-out h-full" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {AWARDS_DATA.map((item) => (
            <div key={item.id} className="min-w-full relative h-full">
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0" />
              
              <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-16 max-w-3xl">
                <h3 className="text-4xl md:text-6xl font-black gradient-text mb-6 leading-tight drop-shadow-lg">
                  {item.title}
                </h3>
                <p className="text-lg leading-relaxed line-clamp-3 max-w-2xl font-medium drop-shadow-md">
                  {item.description}
                </p>
                
                <div className="mt-8">
                   <button className="px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition transform hover:-translate-y-1 shadow-lg">
                      View Nominees
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-8 left-8 md:left-16 flex gap-2 z-10">
          {AWARDS_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                currentIndex === idx 
                  ? 'w-12 bg-[#0076da]' 
                  : 'w-2 bg-black/50 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        
        {/* MOBILE NAVIGATION */}
        <div className="md:hidden absolute bottom-4 right-4 flex gap-2 z-10">
          <button onClick={prevSlide} className="p-2 bg-black/30 rounded-full text-white backdrop-blur-md border border-white/10"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg></button>
          <button onClick={nextSlide} className="p-2 bg-black/30 rounded-full text-white backdrop-blur-md border border-white/10"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg></button>
        </div>

      </div>
      <div className="hidden md:block absolute right-0 top-[85%] -translate-y-1/2 translate-x-1/3 z-20 w-64 aspect-[4/3] shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-105 group-hover:translate-x-1/4">
         
         <div className="absolute inset-0 rounded-xl overflow-hidden border-[4px] border-white/10 backdrop-blur-sm">
             <img 
                src={AWARDS_DATA[nextIndex].category} 
                alt="Next" 
                className="w-full h-full object-cover"
             />
             
             {/* <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end justify-center p-4 pb-12">
                <p className="text-white text-sm font-semibold text-center leading-tight">
                    {AWARDS_DATA[nextIndex].title}
                </p>
             </div> */}
         </div>

         <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-zinc-500/80 border text-white flex items-center justify-center hover:bg-[#0076da] hover:text-white hover:border-[#0076da] transition-all shadow-lg z-30 backdrop-blur-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
         </button>

         <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 rounded-full bg-zinc-500/80 text-white flex items-center justify-center hover:bg-[#0076da] hover:text-white hover:border-[#0076da] transition-all shadow-lg z-30 backdrop-blur-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
         </button>
      </div>
    </div>
  );
};