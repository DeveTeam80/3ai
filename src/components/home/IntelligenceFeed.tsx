import React from "react";
import { BookText, PlayCircle, Lock } from "lucide-react";

const IntelligenceFeedSection: React.FC = () => {
  return (
    <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">The Intelligence Feed.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-xl h-[500px]">
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0" alt="Atlas Background" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              <div className="absolute top-8 left-8">
                <div className="px-4 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  <BookText size={14} /> Atlas Feed
                </div>
              </div>
              <div className="absolute bottom-8 left-8 right-8 space-y-4">
                <span className="text-blue-400 font-bold uppercase text-xs tracking-widest">Article of the Week</span>
                <h3 className="text-3xl font-bold text-white leading-tight">The State of GenAI in Retail GCCs</h3>
                <p className="text-slate-300 line-clamp-2 font-medium">Exploring how retail Global Capability Centers are transitioning from pilots to scaled LLM applications.</p>
                <button className="group/btn relative px-8 py-3 bg-white text-slate-950 rounded-xl font-bold overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">Read Abstract <Lock size={14} /></span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                </button>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl h-[500px]">
              <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0" alt="Flix Background" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/40 to-transparent"></div>
              <div className="absolute top-8 left-8">
                <div className="px-4 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  <PlayCircle size={14} /> Flix Feed
                </div>
              </div>
              <div className="absolute bottom-8 left-8 right-8 space-y-4">
                <span className="text-blue-400 font-bold uppercase text-xs tracking-widest">Trending Masterclass</span>
                <h3 className="text-3xl font-bold text-white leading-tight">Masterclass: Scaling LLMs in Enterprise</h3>
                <p className="text-slate-300 line-clamp-2 font-medium">Advanced architectural strategies for hosting, fine-tuning, and observing Large Language Models.</p>
                <button className="group/btn relative px-8 py-3 bg-white text-slate-950 rounded-xl font-bold overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">Watch Trailer <Lock size={14} /></span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default IntelligenceFeedSection;