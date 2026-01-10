import React from "react";
import { Linkedin, Clock, ExternalLink } from "lucide-react";
import { NEWS_UPDATES } from "../../data/mockData";

const MarketPulseSection: React.FC = () => {
  return (
    <section id="pulse" className="py-24 bg-[var(--bg)] transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="space-y-4 text-center md:text-left">
            {/* <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 dark:text-blue-400">
              <Linkedin size={14} /> LinkedIn Pulse
            </div> */}
            <h1 className="text-5xl font-bold leading-[1.1] mb-8 tracking-tighter">
              Market <span className="gradient-text">Pulse.</span>
            </h1>
          </div>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
            Explore More
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_UPDATES.map((news) => (
            <div key={news.id} className="group relative flex flex-col rounded-xl border border-slate-200 dark:border-white/5 transition-all hover:border-blue-500/30 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1">
              <div className="aspect-video relative overflow-hidden">
                <img src={news.image} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" alt={news.headline} />
                <div className="absolute top-4 left-4">
                  <div className="px-3 py-1 rounded-lg glass dark:bg-[#0f0f0f] bg-white/10 text-[8px] font-black uppercase tracking-[0.2em] text-white border border-white/20 backdrop-blur-md">
                    {news.category}
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1 space-y-4">
                <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                  <Clock size={12} /> {news.timestamp}
                </div>
                <h3 className="text-xl font-black leading-tight group-hover:text-blue-600 transition-colors">{news.headline}</h3>
                <p className="text-sm font-medium line-clamp-2 leading-relaxed text-slate-600 dark:text-slate-400">{news.summary}</p>
                <div className="pt-6 mt-auto border-t border-slate-200 dark:border-white/5 flex items-center justify-between">
                  <button className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 group/link">
                    Share Insight <ExternalLink size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </button>
                  <Linkedin size={18} className="opacity-20 group-hover:opacity-100 transition-opacity text-blue-600" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketPulseSection;