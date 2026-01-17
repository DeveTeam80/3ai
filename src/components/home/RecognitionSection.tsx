import React from "react";
import { ArrowRight, BookOpen, PlayCircle, BarChart3, Briefcase, Rocket, Zap } from "lucide-react";

const ECOSYSTEM_PILLARS = [
  {
    id: 1,
    title: "3AI Atlas",
    tagline: "The Knowledge Vault",
    description: "2,500+ deep-dive research articles, proprietary frameworks, and curated whitepapers for GCC leaders.",
    image: "assets/img/subbrands/atlas.png",
    icon: <BookOpen size={24} />,
    color: "from-blue-600 to-cyan-500"
  },
  {
    id: 2,
    title: "3AIFlix",
    tagline: "Streaming Intelligence",
    description: "850+ hours of masterclasses and exclusive summit recordings. The Netflix for AI leadership.",
    image: "assets/img/subbrands/channels4_profile-Photoroom.png",
    icon: <PlayCircle size={24} />,
    color: "from-purple-600 to-pink-500"
  },
  {
    id: 3,
    title: "3AI Quants",
    tagline: "Market Intelligence",
    description: "Exclusive industry dossiers, GCC maturity assessments, and analytical data-to-decision reports.",
    image: "assets/img/subbrands/quants.png",
    icon: <BarChart3 size={24} />,
    color: "from-emerald-600 to-teal-500"
  },
  {
    id: 4,
    title: "3AI Meraki",
    tagline: "Executive Search",
    description: "Connecting elite AI talent and visionary decision-makers with strategic global mandates.",
    image: "assets/img/subbrands/71.jpg",
    icon: <Briefcase size={24} />,
    color: "from-orange-600 to-red-500"
  },
  {
    id: 5,
    title: "3AI UPStart",
    tagline: "Startup Accelerator",
    description: "Bridging the gap between disruptive AI innovators and global enterprise scale requirements.",
    image: "assets/img/subbrands/77.jpg",
    icon: <Rocket size={24} />,
    color: "from-indigo-600 to-blue-500"
  },
  {
    id: 6,
    title: "3AI Elevate",
    tagline: "Future-Ready Learning",
    description: "Coming Soon: Institutional-grade certifications designed for the next-gen AI workforce.",
    image: "assets/img/subbrands/78.jpg",
    icon: <Zap size={24} />,
    color: "from-zinc-700 to-zinc-900"
  }
];

const EcosystemStack: React.FC = () => {
  return (
    <section id="ecosystem-stack" className="py-24 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter mb-6">
              <span className='gradient-text'>3AI</span> Properties & Offerings
            </h1>
            <p className="text-xl leading-relaxed text-slate-500 dark:text-zinc-400 font-light">
               A unified marketplace providing the infrastructure for the global AI and GCC economy.
            </p>
          </div>
          <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold flex items-center gap-2 hover:scale-105 transition-all text-xs uppercase tracking-widest shadow-xl whitespace-nowrap">
             Enter Marketplace
          </button>
        </div>

        <div className="space-y-[40px] pb-32">
          {ECOSYSTEM_PILLARS.map((item) => (
            <div key={item.id} className="sticky top-24">
              <div className="relative overflow-hidden rounded-[2.5rem] border border-zinc-100 dark:border-white/10 shadow-[0_40px_100px_-15px_rgba(0,0,0,0.1)] bg-white dark:bg-zinc-900 group transition-all duration-500">
                
                <div className="flex flex-col lg:flex-row min-h-[400px]">
                  
                  {/* LEFT CONTENT SIDE */}
                  <div className="w-full lg:w-3/5 p-10 lg:p-16 flex flex-col justify-center">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      {item.icon}
                    </div>

                    <div className="inline-block w-fit px-4 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                      {item.tagline}
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 tracking-tighter text-zinc-900 dark:text-white">
                      {item.title}
                    </h2>
                    
                    <p className="text-lg leading-relaxed font-light text-zinc-600 dark:text-zinc-400 max-w-lg mb-8">
                      {item.description}
                    </p>

                    <button className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 group/btn">
                      Explore {item.title} 
                      <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                  </div>

                  {/* RIGHT IMAGE SIDE - FIXED STRETCHING */}
                  <div className="w-full lg:w-2/5 relative flex items-center justify-center bg-zinc-50 dark:bg-zinc-800/50 p-12 lg:p-20">
                    <img 
                      src={item.image} 
                      className="w-full h-full max-h-[200px] object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-2xl" 
                      alt={item.title} 
                    />
                    
                    {/* Subtle aesthetic gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 dark:to-white/5 pointer-events-none" />
                  </div>

                </div>

                {/* Floating Corner Arrow */}
                <div className="absolute top-8 right-8 hidden lg:block">
                  <div className="w-12 h-12 rounded-full border border-zinc-200 dark:border-white/10 flex items-center justify-center bg-white/50 dark:bg-zinc-800/50 backdrop-blur-md group-hover:bg-zinc-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-zinc-900 transition-all">
                    <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform" />
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

export default EcosystemStack;