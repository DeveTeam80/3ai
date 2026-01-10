import React from 'react';
import { 
  Mic2, 
  Award, 
  BookOpen, 
  ChevronRight,
  Zap,
  Target
} from 'lucide-react';

const engineModules = [
  {
    number: '01',
    category: 'Thought Leadership',
    title: 'Accentuation',
    icon: <Mic2 className="w-4 h-4" />,
    items: [
      '3AI GCC Leadership Forums',
      'AI Makers Unpacked Podcast',
      'Leaders Exclusive Roundtable'
    ],
    cta: 'Explore More'
  },
  {
    number: '02',
    category: 'Positioning & Branding',
    title: 'Strategic Positioning',
    icon: <Target className="w-4 h-4" />,
    items: [
      '3AI Flagship GCC Events',
      'Annual Exemplary GCCs Compilation',
      'Annual Exemplary GCC Heads Compilation'
    ],
    cta: 'Explore More'
  },
  {
    number: '03',
    category: 'Talent Advocacy',
    title: 'Engagement',
    icon: <Award className="w-4 h-4" />,
    items: [
      '3AI Industry Recognition Awards',
      'Meraki: Exec Leadership Hiring',
      'Digital Hiring & Talent Campaigns'
    ],
    cta: 'Explore More'
  },
  {
    number: '04',
    category: 'Innovation Access',
    title: 'Capability Buildup',
    icon: <Zap className="w-4 h-4" />,
    items: [
      'GCC Sphere: Integrated Marketplace',
      '3AI Upstart: Curated Startups',
      'AI Advisory GCC Services'
    ],
    cta: 'Explore More'
  },
  {
    number: '05',
    category: 'Professional Dev',
    title: 'Knowledge Fuel',
    icon: <BookOpen className="w-4 h-4" />,
    items: [
      'High-Performance Hackathons',
      'Strategy Masterclasses',
      'QuantX: Thematic Research'
    ],
    cta: 'Explore More'
  }
];

const EnterpriseEngine: React.FC = () => {
  return (
    <div className="py-24 relative overflow-hidden bg-slate-100/30 dark:bg-black/20">

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-5">
          {/* <div className="flex items-center gap-4 mb-4">
             <div className="w-12 h-[1px] bg-gradient-to-r from-blue-600 to-purple-600"></div>
             <span className="text-[10px] font-black tracking-[0.4em] gradient-text uppercase">Operating Framework</span>
          </div> */}
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter mb-6">
            <span className='gradient-text'>GCC ONE Platform</span>: The Enterprise Engine
          </h2>
          <p className="text-lg mb-12 leading-relaxed font-light tracking-wide text-slate-500 dark:text-white/40 font-light max-w-3xl">
            A high-octane enterprise engine for Global Capability Centers to accelerate innovation, 
            secure elite talent, and benchmark intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-px bg-slate-200 dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-xl overflow-hidden shadow-sm dark:shadow-none">
          {engineModules.map((module) => (
            <div 
              key={module.number} 
              className="group relative bg-white dark:bg-[#020203] p-8 flex flex-col min-h-[440px] transition-all duration-700 hover:bg-zinc-50/50 dark:hover:bg-white/[0.01]"
            >
              <div className="mb-12">
                <div className="flex items-center justify-between mb-4">
                   <span className="text-3xl font-black tracking-tighter text-slate-100 dark:text-white/10 group-hover:text-zinc-200 dark:group-hover:text-white/20 transition-colors">
                     {module.number}
                   </span>
                   <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-white/5 text-slate-400 dark:text-white/40 group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500 shadow-sm">
                     {module.icon}
                   </div>
                </div>
                <div className="space-y-1">
                   {/* Gradient applied to Category */}
                   <h4 className="text-[10px] font-bold gradient-text uppercase tracking-widest">{module.category}</h4>
                   <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">{module.title}</h3>
                </div>
              </div>

              <div className="flex-grow space-y-4">
                {module.items.map((item, idx) => (
                  <div key={idx} className="flex gap-3 group/item">
                    <div className="mt-1.5 w-1 h-1 rounded-full bg-slate-200 dark:bg-white/10 group-hover/item:bg-blue-500 transition-colors"></div>
                    <span className="text-xs text-slate-500 dark:text-white/40 leading-snug group-hover/item:text-slate-900 dark:group-hover/item:text-white/80 transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/5">
                {module.cta ? (
                  /* Gradient applied to CTA button text */
                  <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest gradient-text hover:brightness-125 transition-all">
                    {module.cta}
                    <ChevronRight className="w-3 h-3 text-blue-500" />
                  </button>
                ) : (
                  <div className="text-[8px] font-mono text-slate-300 dark:text-white/10 uppercase tracking-widest">
                    Status: Verified_Link
                  </div>
                )}
              </div>

              {/* Bottom Border Gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnterpriseEngine;