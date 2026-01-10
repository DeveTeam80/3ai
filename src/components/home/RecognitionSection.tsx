import React from "react";
import { ArrowRight, BookOpen, PlayCircle, BarChart3, Briefcase, Rocket, Zap } from "lucide-react";

const ECOSYSTEM_PILLARS = [
  {
    id: 1,
    title: "3AI Atlas",
    tagline: "The Knowledge Vault",
    description: "2,500+ deep-dive research articles, proprietary frameworks, and curated whitepapers for GCC leaders.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000",
    icon: <BookOpen size={24} />,
    color: "from-blue-600 to-cyan-500"
  },
  {
    id: 2,
    title: "3AIFlix",
    tagline: "Streaming Intelligence",
    description: "850+ hours of masterclasses and exclusive summit recordings. The Netflix for AI leadership.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4628c9757?auto=format&fit=crop&q=80&w=2000",
    icon: <PlayCircle size={24} />,
    color: "from-purple-600 to-pink-500"
  },
  {
    id: 3,
    title: "3AI Quants",
    tagline: "Market Intelligence",
    description: "Exclusive industry dossiers, GCC maturity assessments, and analytical data-to-decision reports.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
    icon: <BarChart3 size={24} />,
    color: "from-emerald-600 to-teal-500"
  },
  {
    id: 4,
    title: "3AI Meraki",
    tagline: "Executive Search",
    description: "Connecting elite AI talent and visionary decision-makers with strategic global mandates.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000",
    icon: <Briefcase size={24} />,
    color: "from-orange-600 to-red-500"
  },
  {
    id: 5,
    title: "3AI UPStart",
    tagline: "Startup Accelerator",
    description: "Bridging the gap between disruptive AI innovators and global enterprise scale requirements.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=2000",
    icon: <Rocket size={24} />,
    color: "from-indigo-600 to-blue-500"
  },
  {
    id: 6,
    title: "3AI Surge",
    tagline: "Future-Ready Learning",
    description: "Coming Soon: Institutional-grade certifications designed for the next-gen AI workforce.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2000",
    icon: <Zap size={24} />,
    color: "from-zinc-700 to-zinc-900"
  }
];

const EcosystemStack: React.FC = () => {
  return (
    <section id="ecosystem-stack" className="py-24 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block Matches your Recognition Style */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-20">
          <div>
            <h2 className="text-5xl lg:text-7xl font-black mb-4 tracking-tighter">
              One Ecosystem. <br />
              <span className="text-zinc-400 font-light italic text-4xl lg:text-6xl">Infinite Intelligence.</span>
            </h2>
            <p className="opacity-60 text-lg font-medium max-w-xl">
              A unified marketplace providing the infrastructure for the global AI and GCC economy.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-all text-xs uppercase tracking-widest shadow-xl">
              Enter Marketplace
            </button>
          </div>
        </div>

        {/* STICKY STACKED CARDS */}
        <div className="space-y-[60px] pb-32">
          {ECOSYSTEM_PILLARS.map((item, index) => (
            <div 
              key={item.id} 
              className="sticky top-0" 
              style={{ paddingTop: `${100 + index * 40}px` }}
            >
              <div className="relative h-[350px] lg:h-[450px] rounded-[2rem] overflow-hidden group cursor-pointer border border-zinc-100 dark:border-white/10 shadow-[0_40px_100px_-15px_rgba(0,0,0,0.2)] bg-white dark:bg-zinc-900 transition-all duration-500">
                
                {/* Background Image with Grayscale to Color Transition */}
                <img 
                  src={item.image} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40" 
                  alt={item.title} 
                />

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-zinc-900 via-white/80 dark:via-zinc-900/80 to-transparent flex items-center p-10 lg:p-20">
                  <div className="max-w-2xl">
                    
                    {/* Floating Icon with unique brand color */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                      {item.icon}
                    </div>

                    <div className="inline-block px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/10 text-zinc-500 dark:text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                      {item.tagline}
                    </div>

                    <h3 className="text-3xl lg:text-5xl font-black mb-6 leading-tight tracking-tighter text-zinc-900 dark:text-white">
                      {item.title}
                    </h3>
                    
                    <p className="text-zinc-600 dark:text-zinc-400 text-base lg:text-xl font-medium leading-relaxed max-w-lg">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Icon */}
                <div className="absolute bottom-10 right-10 lg:bottom-16 lg:right-16">
                  <div className="w-16 h-16 rounded-full border border-zinc-200 dark:border-white/20 flex items-center justify-center group-hover:bg-zinc-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-zinc-900 transition-all shadow-xl group-hover:rotate-45">
                    <ArrowRight size={28} />
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