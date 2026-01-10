import React, { useState, useEffect } from 'react';
import { Users, ShieldCheck, Zap, Award } from 'lucide-react';

interface StatItemProps {
  label: string;
  count: number;
  icon: React.ReactNode;
  isDark: boolean;
}

const StatItem: React.FC<StatItemProps> = ({ label, count, icon, isDark }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 3000;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 5); 
      setDisplayValue(Math.floor(ease * count));
      if (progress < 1) window.requestAnimationFrame(step);
    };

    window.requestAnimationFrame(step);
  }, [count]);

  return (
    <div className={`flex flex-col py-8 border-b last:border-0 group transition-colors duration-500 ${isDark ? 'border-white/5' : 'border-black/5'}`}>
      <div className={`mb-3 transition-colors duration-500 ${isDark ? 'text-white/20 group-hover:text-blue-500' : 'text-black/20 group-hover:text-blue-600'}`}>
        {icon}
      </div>
      <div className={`text-xl lg:text-2xl font-bold tracking-tighter transition-colors duration-500 ${isDark ? 'text-white' : 'text-black'}`}>
        {displayValue.toLocaleString()}
        <span className="text-blue-600 ml-0.5 text-lg">+</span>
      </div>
      <div className={`text-[9px] font-bold uppercase tracking-widest mt-1.5 leading-tight transition-colors duration-500 ${isDark ? 'text-white/30 group-hover:text-white/60' : 'text-black/40 group-hover:text-black/80'}`}>
        {label}
      </div>
    </div>
  );
};

interface StatsSidebarProps {
  isDark: boolean;
}

export const StatsSidebar: React.FC<StatsSidebarProps> = ({ isDark }) => {
  return (
    // CHANGED: 'fixed' -> 'absolute'. Added z-[20] to stack above background.
    <aside className={`absolute right-0 top-0 bottom-0 w-32 lg:w-40 glass-sidebar z-[20] flex flex-col justify-end items-center px-6 transition-all duration-500`}>
      {/* <div className={`w-px h-24 bg-gradient-to-b from-transparent to-transparent mb-8 transition-colors ${isDark ? 'via-white/10' : 'via-black/10'}`} /> */}
      
      <div className="flex flex-col w-full">
        <StatItem 
          label="Active Members" 
          count={56000} 
          icon={<Users className="w-5 h-5" />} 
          isDark={isDark}
        />
        <StatItem 
          label="GCC Leaders" 
          count={690} 
          icon={<ShieldCheck className="w-5 h-5" />} 
          isDark={isDark}
        />
        <StatItem 
          label="Thought Leaders" 
          count={1600} 
          icon={<Award className="w-5 h-5" />} 
          isDark={isDark}
        />
        <StatItem 
          label="GCCs" 
          count={430} 
          icon={<Zap className="w-5 h-5" />} 
          isDark={isDark}
        />
      </div>
    </aside>
  );
};