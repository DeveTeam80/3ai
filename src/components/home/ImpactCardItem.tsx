import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ImpactCard } from '@/src/types';

interface CardProps {
  card: ImpactCard; 
}

export const ImpactCardItem: React.FC<CardProps> = ({ card }) => {
  return (
    <div className="flex-shrink-0 w-[250px] h-[320px] relative rounded-xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 select-none">
      <img 
        src={card.image} 
        alt={card.title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        draggable={false}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-400 mb-2">
          Featured Insight
        </span>
        
        <h3 className="text-lg font-bold text-white leading-tight tracking-tight group-hover:text-blue-300 transition-colors">
          {card.title}
        </h3>
        
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
           <ArrowUpRight className="text-white w-5 h-5" />
        </div>
      </div>
    </div>
  );
};