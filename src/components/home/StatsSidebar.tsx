import React, { useState, useEffect } from 'react';
import { Users, ShieldCheck, Zap, Award } from 'lucide-react';

interface StatItemProps {
  label: string;
  count: number;
  icon: React.ReactNode;
  isDark: boolean;
  bgColor: string; 
}

const StatItem: React.FC<StatItemProps> = ({ label, count, icon, isDark, bgColor }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 5000;

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
    <div 
      style={{ backgroundColor: bgColor }}
      className={`flex flex-col py-6 px-4 group transition-all duration-500 border-b border-white/5 last:border-0 hover:brightness-110`}
    >
      <div className="mb-3 text-white transition-transform group-hover:scale-110 duration-300">
        {icon}
      </div>
      <div className="text-xl lg:text-2xl font-bold tracking-tighter text-white">
        {displayValue.toLocaleString()}
        <span className="opacity-60 ml-0.5 text-lg">+</span>
      </div>
      <div className="text-[9px] font-black uppercase tracking-[0.15em] mt-1.5 leading-tight text-white/70 group-hover:text-white transition-colors">
        {label}
      </div>
    </div>
  );
};

interface StatsSidebarProps {
  isDark: boolean;
}

export const StatsSidebar: React.FC<StatsSidebarProps> = ({ isDark }) => {
  const stats = [
    { label: "Active Members", count: 56000, icon: <Users className="w-5 h-5" /> },
    { label: "GCC Leaders", count: 690, icon: <ShieldCheck className="w-5 h-5" /> },
    { label: "Thought Leaders", count: 1600, icon: <Award className="w-5 h-5" /> },
    { label: "GCCs", count: 430, icon: <Zap className="w-5 h-5" /> },
  ];

  return (
    <aside className="absolute right-0 top-0 bottom-0 w-32 lg:w-40 z-[20] flex flex-col justify-end transition-all duration-500 mt-[10rem]">
      <div className="flex flex-col w-full overflow-hidden rounded-l-2xl shadow-2xl">
        {stats.map((stat, index) => (
          <StatItem 
            key={index}
            label={stat.label}
            count={stat.count}
            icon={stat.icon}
            isDark={isDark}
            // Logic for alternate background colors
            bgColor={index % 2 === 0 ? "#1A1A1A" : "#0076da"}
          />
        ))}
      </div>
    </aside>
  );
};