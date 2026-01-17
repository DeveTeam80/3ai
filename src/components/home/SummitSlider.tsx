import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { IMPACT_DATA } from "../../data/mockData";
import TabSwitcher from './TabSwitcher';
import { ImpactCardItem } from './ImpactCardItem';
import { TabTypes } from '@/types';

const SummitSlider: React.FC = () => {
  // Set default to 'Summits'
  const [activeTab, setActiveTab] = useState<TabTypes>('Summits');
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Map the specific tab data
  const data = IMPACT_DATA[activeTab];

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const startDragging = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const stopDragging = () => setIsDragging(false);

  const onDrag = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; 
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    handleScroll();
    // Reset scroll position when tab changes
    if (scrollRef.current) {
        scrollRef.current.scrollLeft = 0;
    }
  }, [activeTab]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-[80vh] bg-white dark:bg-zinc-950 text-black dark:text-white pt-20 px-4 md:px-12 lg:px-24 transition-colors">
      
      <div className="max-w-7xl mx-auto flex flex-col items-start mb-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-8">
          <h1 className="text-5xl font-bold leading-[1.1]">Upcoming <span className="gradient-text">Industry Events</span></h1>
          {/* Ensure TabSwitcher handles 'Summits' | 'Roundtables' | 'Specials' */}
          <TabSwitcher activeTab={activeTab} onTabChange={setActiveTab as any} />
        </div>
      </div>

      <div className="relative max-w-[1440px] mx-auto">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseDown={startDragging}
          onMouseLeave={stopDragging}
          onMouseUp={stopDragging}
          onMouseMove={onDrag}
          className={`flex overflow-x-auto no-scrollbar gap-5 items-stretch pb-12 cursor-grab ${isDragging ? 'cursor-grabbing active:scale-[0.99] transition-transform' : ''}`}
        >
          {/* Static Info Card */}
          <div className="flex-shrink-0 w-[320px] bg-gray-50 dark:bg-zinc-900 rounded-xl p-10 flex flex-col justify-between border border-gray-100 dark:border-zinc-800">
            <div>
              <h2 className="text-2xl font-bold mb-6 leading-tight tracking-tight">{data.subtitle}</h2>
              <p className="text-gray-500 dark:text-zinc-400 text-sm leading-relaxed mb-8">{data.description}</p>
            </div>
            <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 group">
              View All {activeTab}
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mapping content from links */}
          {data.cards.map((card) => (
            <ImpactCardItem key={card.id} card={card} />
          ))}
          <div className="flex-shrink-0 w-24 h-1" />
        </div>

        {/* Minimalist Controls */}
        <div className="flex justify-between items-center mt-4">
           <div className="h-[1px] flex-1 bg-gray-100 dark:bg-zinc-800 mr-8" />
           <div className="flex gap-2">
            <button onClick={() => scroll('left')} disabled={!canScrollLeft} className="p-2 disabled:opacity-20 hover:text-blue-600 transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => scroll('right')} disabled={!canScrollRight} className="p-2 disabled:opacity-20 hover:text-blue-600 transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SummitSlider;