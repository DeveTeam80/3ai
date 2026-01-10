import React from 'react';
import { Clock, Play } from 'lucide-react';
import { SlideData } from '@/src/types';

interface ThumbnailNavProps {
  slide: SlideData;
  isActive: boolean;
  onClick: () => void;
  isDark: boolean;
}

export const ThumbnailNav: React.FC<ThumbnailNavProps> = ({ slide, isActive, onClick }) => {
  // We ignore isDark prop passed from parent and force dark styling
  
  return (
    <button 
      onClick={onClick}
      // Reduced width from w-80 to w-56, and height from h-48 to h-32
      className={`relative flex-shrink-0 w-56 h-32 rounded-lg overflow-hidden group transition-all duration-500 ${
        isActive 
          ? 'ring-2 ring-blue-600 ring-offset-2 ring-offset-slate-950 scale-[1.02]' 
          : 'opacity-50 hover:opacity-100'
      }`}
    >
      <img 
        src={slide.image} 
        alt={slide.thumbnailTitle} 
        // Forced brightness-[0.6] to make text readable and match dark theme
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-[0.6]"
      />
      
      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
      
      <div className="absolute inset-0 p-4 flex flex-col justify-end text-left">
        <div className="mb-1">
          {/* Reduced text size from text-sm to text-xs for better fit */}
          <h3 className="text-xs font-bold leading-tight tracking-tight text-white group-hover:text-blue-400 transition-colors line-clamp-2">
            {slide.thumbnailTitle}
          </h3>
        </div>
      </div>
      
      {/* Selection indicator line */}
      <div className={`absolute bottom-0 left-0 h-1 bg-blue-600 transition-all duration-500 ${isActive ? 'w-full' : 'w-0'}`} />
    </button>
  );
};