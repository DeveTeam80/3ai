import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SlideData } from '@/src/types';

interface SlideContentProps {
  slide: SlideData;
  isDark: boolean; // Component is now optimized for dark-only hero
}

export const SlideContent: React.FC<SlideContentProps> = ({ slide }) => {
  return (
    <div className="slide-active max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000 pl-5">

      {/* Title: Using tracking-tighter and slightly reduced weight for elegance */}
      <h1 className="text-5xl font-bold leading-[1.1] mb-8 tracking-tighter text-white drop-shadow-sm">
        {slide.title}
      </h1>

      {/* Description: Light weight and increased line height for a "premium" feel */}
      <p className="text-lg mb-12 max-w-xl leading-relaxed font-light text-white tracking-wide">
        {slide.description}
      </p>
      
      <div className="flex items-center gap-8">
        {/* Primary CTA: Transparent glass style with white border */}
        <button className="group h-14 px-10 border border-white/20 rounded-xl font-bold text-xs uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-black hover:border-white flex items-center gap-3">
          {slide.ctaText}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};