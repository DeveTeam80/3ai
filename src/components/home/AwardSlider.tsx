
import React, { useState, useEffect, useCallback } from 'react';
import { AWARDS_DATA } from '../../data/mockData';

export const AwardSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

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
      className="relative group w-full max-w-5xl mx-auto overflow-hidden rounded-3xl"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div 
        className="flex transition-transform duration-700 ease-out" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {AWARDS_DATA.map((item) => (
          <div key={item.id} className="min-w-full relative h-[400px] md:h-[500px]">
            <img 
              src={item.image} 
              alt={item.title} 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-12">
              <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-2">
                {item.category}
              </span>
              <h3 className="text-3xl md:text-4xl font-light text-white mb-3">
                {item.title}
              </h3>
              <p className="text-zinc-300 text-lg max-w-xl leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </button>

<div className="absolute bottom-8 right-8 flex gap-2">
  {AWARDS_DATA.map((_, idx) => (
    <button
      key={idx}
      onClick={() => setCurrentIndex(idx)}
      className={`h-1 transition-all duration-300 rounded-full ${
        currentIndex === idx 
          ? 'w-8 bg-[var(--accent)]' // Uses your CSS variable
          : 'w-2 bg-white/40'
      }`}
      aria-label={`Go to slide ${idx + 1}`}
    />
  ))}
</div>
    </div>
  );
};
