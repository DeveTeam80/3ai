
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
    <div className="py-20 flex flex-col justify-center px-8 md:px-16 bg-slate-100/30">
      {/* Main Title Section */}
      <div className="max-w-7xl w-full mx-auto mb-10">
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
          <div className="absolute -bottom-16 right-0 flex items-center gap-6">
            <button 
              onClick={() => scroll('left')}
              className="transition-colors"
              aria-label="Previous"
            >
              <i className="fa-solid fa-arrow-left text-xl"></i>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="transition-colors"
              aria-label="Next"
            >
              <i className="fa-solid fa-arrow-right text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsNew;
