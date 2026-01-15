
import React from 'react';
import { InsightItem, InsightType } from '../../types';

interface InsightCardProps {
  item: InsightItem;
}

const InsightCard: React.FC<InsightCardProps> = ({ item }) => {
  const isDocument = item.type === InsightType.DOCUMENT;

  if (isDocument) {
    return (
      <div className="flex-shrink-0 w-[320px] h-[200px] rounded-xl overflow-hidden glass-card flex group cursor-pointer hover:border-white/30 transition-all">
        {/* Left Side: Document Icon/Graphic */}
        <div className="w-[40%] bg-[#081829] p-4 flex items-center justify-center relative">
          {item.isNew && <span className="absolute top-3 left-3 new-badge">NEW</span>}
          <div className="w-full h-full bg-indigo-950 rounded flex flex-col items-center justify-center p-2 border border-white/10 shadow-xl overflow-hidden">
             <div className="text-[8px] opacity-40 mb-1 text-center font-bold">In collaboration with McKinsey & Company</div>
             <img src={item.imageUrl} className="w-16 h-16 object-cover rounded shadow-lg mb-2" alt="doc-preview" />
          </div>
        </div>
        {/* Right Side: Content */}
        <div className="w-[60%] p-5 flex flex-col justify-between bg-[#001427]">
          <h3 className="text-sm font-bold leading-tight text-white group-hover:text-blue-300 transition-colors">
            {item.title}
          </h3>
          <div className="flex items-center justify-between text-[11px] text-white/60">
            <div className="flex items-center gap-1.5">
              <i className="fa-solid fa-file-lines"></i>
              <span>{item.pageCount} pages</span>
            </div>
            <button className="hover:text-white transition-colors">
              <i className="fa-solid fa-download"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-shrink-0 w-[320px] h-[200px] rounded-xl overflow-hidden glass-card relative group cursor-pointer">
      {item.isNew && <span className="absolute top-4 right-4 z-20 new-badge">NEW</span>}
      
      {/* Background Image */}
      <img 
        src={item.imageUrl} 
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-5 z-20">
        <h3 className="text-sm font-bold leading-tight text-white mb-3 group-hover:text-blue-200 transition-colors line-clamp-2">
          {item.title}
        </h3>
        <div className="flex items-center gap-2 text-[11px] font-medium text-white/80">
          {item.type === InsightType.VIDEO ? (
            <i className="fa-solid fa-play text-[10px]"></i>
          ) : (
            <i className="fa-solid fa-file-lines text-[10px]"></i>
          )}
          <span>{item.duration}</span>
        </div>
      </div>
    </div>
  );
};

export default InsightCard;
