
import React from 'react';
import ModuleGrid from './ModuleGrid';
import { ModuleItem } from '../../../types';

const modules: ModuleItem[] = [
  {
    id: 'marketplace',
    title: 'GCC Sphere',
    subtitle: 'Marketplace',
    logo: 'assets/img/subbrands/gcc-sphere.png', // New Field
    description: 'The world’s first integrated marketplace specifically curated for GCC-ready AI solutions.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    id: 'talent',
    title: 'Meraki',
    subtitle: 'Talent Acquisition',
    logo: 'assets/img/subbrands/meraki.png', // New Field
    description: 'Elite executive leadership hiring focused on high-stakes AI and GCC transformations.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: 'innovation',
    title: 'UPStart',
    subtitle: 'Innovation',
    logo: 'assets/img/subbrands/upstart.jpg', // New Field
    description: 'Tailored startup accelerator pipelines connecting enterprises with disruptive AI tech.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 'intelligence',
    title: 'Outpace',
    subtitle: 'Intelligence',
    logo: '/assets/img/subbrands/74.jpg', // New Field
    description: 'Fractional AI services providing strategic speed without the massive overhead.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];
const FrameworkVisual = () => {
  return (
    <div className="relative glass-dark rounded-3xl p-8 overflow-hidden aspect-video flex flex-col items-center justify-center space-y-6">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 dark:from-blue-500/10 to-transparent" />
      <div className="relative z-10 w-full max-w-lg">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">5x15 Framework</h4>
          <div className="flex gap-1">
            {[1,2,3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-blue-500/20 dark:bg-blue-500/20" />)}
          </div>
        </div>
        
        <div className="grid grid-cols-5 gap-2">
          {Array.from({ length: 25 }).map((_, i) => {
            const isHighlight = i % 6 === 0;
            return (
              <div 
                key={i} 
                className={`h-8 rounded-md transition-all duration-500 ${
                  isHighlight 
                    ? 'bg-blue-600/40 dark:bg-blue-500/40 border border-blue-400/50 shadow-lg shadow-blue-500/20 scale-105' 
                    : 'bg-slate-200 dark:bg-white/5 border border-transparent dark:border-white/5 hover:bg-slate-300 dark:hover:bg-white/10'
                }`}
              />
            );
          })}
        </div>
        
        <div className="mt-8 flex justify-between gap-4">
          {['Strategy', 'Execution', 'Governance', 'Talent', 'Scale'].map((label, idx) => (
            <div key={label} className="text-center">
              <div className="text-[10px] font-bold text-slate-500 dark:text-slate-500 uppercase mb-1">{label}</div>
              <div className="w-full h-1 bg-slate-300 dark:bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 dark:bg-blue-500" style={{ width: `${60 + (idx * 10)}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const EnterpriseTab: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-10 order-2 lg:order-1">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            The Operating System for <span className="text-blue-600 dark:text-blue-400">GCC Excellence</span>.
          </h2>
          <p className="text-lg leading-relaxed">
            Standardizing the way Global Capability Centers leverage AI. From strategic fractional leadership to a turnkey solutions marketplace.
          </p>
        </div>

        <ModuleGrid modules={modules} accentColor="blue" />

        <div className="pt-4">
          <button className="group relative px-8 py-4 bg-blue-600 rounded-2xl font-semibold text-white overflow-hidden transition-all hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-500/40">
            <span className="relative z-10 flex items-center gap-2">
              Explore GCC Sphere
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </button>
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <FrameworkVisual />
      </div>
    </div>
  );
};

export default EnterpriseTab;
