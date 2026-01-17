import React, { useRef } from 'react';
import { INSIGHTS } from '../../data/mockData';
import InsightCard from './InsightCard';

const WhatsNew: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-20 px-6 md:px-12 bg-slate-100/30">
      <div className="max-w-7xl mx-auto">
        
        {/* --- TOP SECTION (70% Content / 30% Ad) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 mb-12">
          
          {/* LEFT COLUMN: Content (70% -> col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <h1 className="text-5xl font-bold leading-[1.1] mb-8 tracking-tighter drop-shadow-sm">
              Discover What's<span className='gradient-text'> New</span> at 3AI?
            </h1>

            {/* Carousel Container */}
            <div className="relative">
              <div 
                ref={scrollRef}
                className="flex gap-5 overflow-x-auto hide-scrollbar pb-8 snap-x snap-mandatory"
              >
                {INSIGHTS.map((item) => (
                  <div key={item.id} className="snap-start">
                    <InsightCard item={item} />
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="absolute -bottom-4 right-0 flex items-center gap-4">
                <button 
                  onClick={() => scroll('left')}
                  className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-200 transition-colors"
                  aria-label="Previous"
                >
                  <i className="fa-solid fa-arrow-left text-sm"></i>
                </button>
                <button 
                  onClick={() => scroll('right')}
                  className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-200 transition-colors"
                  aria-label="Next"
                >
                  <i className="fa-solid fa-arrow-right text-sm"></i>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Vertical Ad (30% -> col-span-3) */}
          <div className="lg:col-span-3 hidden lg:block">
            <div className="h-full min-h-[400px] w-full bg-slate-200/50 border-2 border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center text-slate-400 gap-2">
              <span className="text-xs uppercase font-bold tracking-widest">Advertisement</span>
              <span className="text-sm">Vertical Ad Space (300x600)</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhatsNew;