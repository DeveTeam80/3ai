import React from "react";
import { ChevronRight } from "lucide-react";
import { RECOGNITIONS } from "../../data/mockData";

const RecognitionSection: React.FC = () => {
  return (
    <section id="recognition" className="py-24 bg-gradient-to-b from-[var(--bg)] to-[var(--card-bg)] border-y border-black/5 dark:border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div>
            <h2 className="text-5xl font-black mb-4 tracking-tight">The Oscars of AI & Analytics</h2>
            <p className="opacity-60 text-lg font-medium">Recognizing the visionaries and innovators shaping the future.</p>
          </div>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">Nominate Now</button>
            <button className="px-6 py-3 rounded-xl border border-black/10 hover:bg-black/5 dark:hover:bg-white/5 font-bold transition-all text-xs uppercase tracking-widest">Past Winners</button>
          </div>
        </div>
        <div className="space-y-[50px] pb-32">
          {RECOGNITIONS.map((item, index) => (
            <div key={item.id} className="sticky-card" style={{ top: `${140 + index * 35}px` }}>
              <div className="relative h-[300px] lg:h-[350px] rounded-xl overflow-hidden group cursor-pointer border border-black/5 dark:border-white/10 hover:border-blue-500/50 transition-all bg-[var(--bg)] shadow-2xl">
                <img src={item.image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-30 group-hover:opacity-40 grayscale group-hover:grayscale-0" alt={item.title} />
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/40 to-transparent flex items-center p-10 lg:p-14">
                  <div className="max-w-xl transition-transform duration-500 group-hover:translate-x-6">
                    <div className="inline-block px-3 py-1 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[9px] font-black uppercase tracking-widest mb-6">Global Recognition</div>
                    <h3 className="text-3xl lg:text-5xl font-black mb-4 leading-tight">{item.title}</h3>
                    <p className="opacity-60 text-base lg:text-xl font-medium leading-relaxed">{item.description}</p>
                  </div>
                </div>
                <div className="absolute bottom-10 right-10 lg:bottom-14 lg:right-14">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-xl glass border border-black/10 dark:border-white/20 flex items-center justify-center group-hover:bg-gradient-to-r from-blue-600 to-purple-600 group-hover:border-blue-400 group-hover:text-white transition-all shadow-xl">
                    <ChevronRight size={36} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;