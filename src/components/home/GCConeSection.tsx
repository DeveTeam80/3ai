import React, { useEffect, useRef } from 'react';
import { 
  Mic2, 
  Award, 
  BookOpen, 
  ChevronRight,
  Zap,
  Target
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* 1. DOTTED GLOW BACKGROUND                                                  */
/* (Structure/Math from your snippet + Gradient Fix for Visibility)           */
/* -------------------------------------------------------------------------- */

type DottedGlowBackgroundProps = {
  className?: string;
  gap?: number;
  radius?: number;
  glowColor?: string;
  opacity?: number;
  speedMin?: number;
  speedMax?: number;
  speedScale?: number;
};

function DottedGlowBackground({
  className,
  gap = 15, // Adjusted slightly from 12 to 15 for better background spacing
  radius = 2,
  glowColor = "#ffcbe4", // Soft pink glow for high intensity
  opacity = 1,
  speedMin = 0.5,
  speedMax = 1.5,
  speedScale = 0.8,
}: DottedGlowBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = canvasRef.current;
    const container = containerRef.current;
    if (!el || !container) return;

    const ctx = el.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let stopped = false;

    const dpr = Math.max(1, window.devicePixelRatio || 1);

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      el.width = Math.max(1, Math.floor(width * dpr));
      el.height = Math.max(1, Math.floor(height * dpr));
      el.style.width = `${width}px`;
      el.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(container);
    setTimeout(resize, 0);

    // --- GRID GENERATION (From your code) ---
    // This creates a staggered grid. The "randomness" comes from the phase/speed properties.
    let dots: { x: number; y: number; phase: number; speed: number }[] = [];

    const regenDots = () => {
      dots = [];
      const { width, height } = container.getBoundingClientRect();
      const cols = Math.ceil(width / gap) + 2;
      const rows = Math.ceil(height / gap) + 2;
      for (let i = -1; i < cols; i++) {
        for (let j = -1; j < rows; j++) {
          // Staggered grid logic
          const x = i * gap + (j % 2 === 0 ? 0 : gap * 0.5);
          const y = j * gap;
          dots.push({
            x,
            y,
            phase: Math.random() * Math.PI * 2, // Random starting blink phase
            speed: speedMin + Math.random() * (speedMax - speedMin), // Random blink speed
          });
        }
      }
    };

    regenDots();
    window.addEventListener("resize", regenDots);

    const draw = (now: number) => {
      if (stopped) return;
      const { width, height } = container.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);
      ctx.globalAlpha = opacity;

      // --- GRADIENT DEFINITION ---
      // We create the gradient here to replace the white 'color' prop
      // This ensures dots are visible on the light gray background
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#7b4397"); // Purple
      gradient.addColorStop(1, "#dc2430"); // Red

      const time = (now / 1000) * speedScale;

      dots.forEach((d) => {
        // --- ANIMATION MATH (From your code) ---
        const mod = (time * d.speed + d.phase) % 2;
        const lin = mod < 1 ? mod : 2 - mod;
        const intensity = 0.1 + 0.9 * (lin * lin);

        ctx.beginPath();
        ctx.arc(d.x, d.y, radius, 0, Math.PI * 2);
        
        // Apply styling based on intensity
        if (intensity > 0.7) {
           // High intensity: Glow Color
           ctx.fillStyle = glowColor;
           ctx.shadowColor = glowColor;
           ctx.shadowBlur = 8 * (intensity - 0.7) * 3;
        } else {
           // Low intensity: Gradient (Replacement for white color)
           ctx.fillStyle = gradient;
           ctx.shadowBlur = 0;
        }
        
        // Opacity calculation from your code
        ctx.globalAlpha = opacity * (intensity > 0.7 ? 1 : 0.3 + intensity * 0.5); 
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      stopped = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", regenDots);
      ro.disconnect();
    };
  }, [gap, radius, glowColor, opacity, speedMin, speedMax, speedScale]);

  return (
    <div ref={containerRef} className={className} style={{ position: "absolute", inset: 0, zIndex: 0 }}>
      <canvas ref={canvasRef} style={{ display: "block" }} />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. MAIN ENTERPRISE ENGINE COMPONENT                                        */
/* -------------------------------------------------------------------------- */

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

      {/* --- BACKGROUND ANIMATION --- */}
      <DottedGlowBackground 
        gap={25} // Increased slightly to make it look cleaner as a background
        radius={1.5}
        opacity={0.6}
        glowColor="#ffcbe4"
        className="pointer-events-none"
      />
      
      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="mb-5">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter mb-6">
            <span className='gradient-text'>GCC ONE Platform</span>: The Enterprise Engine
          </h2>
          <p className="text-lg mb-12 leading-relaxed font-light tracking-wide text-slate-500 dark:text-white/40 max-w-3xl">
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