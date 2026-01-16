import React, { useState } from "react";
import { BookText, Play, Lock, ExternalLink, X } from "lucide-react";

// --- 1. Sub-Component for the YouTube Card ---
const FlixCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "wtC3ig2G3Fc";

  // URL for the actual video player (Autoplays when loaded)
  // rel=0: Show related videos from same channel only
  // autoplay=1: Start immediately
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0&iv_load_policy=3`;

  // High-res thumbnail from YouTube
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="group relative overflow-hidden rounded-xl h-[500px] bg-black border border-white/5 shadow-2xl">
      {/* STATE A: VIDEO PLAYER IS ACTIVE */}
      {isPlaying ? (
        <div className="absolute inset-0 z-20 animate-in fade-in duration-500">
          <iframe
            src={videoUrl}
            className="w-full h-full object-cover"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          {/* Close Video Button (Optional, to return to text view) */}
          <button
            onClick={() => setIsPlaying(false)}
            className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full backdrop-blur-md hover:bg-red-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
      ) : (
        /* STATE B: THUMBNAIL & TEXT OVERLAY */
        <>
          {/* Background Image (Thumbnail) */}
          <div className="absolute inset-0">
            <img
              src={thumbnailUrl}
              alt="Video Thumbnail"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
          </div>

          {/* CENTER: THE RED PLAY BUTTON */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <button
              onClick={() => setIsPlaying(true)}
              className="pointer-events-auto group/play relative flex items-center justify-center w-20 h-20 bg-red-600 rounded-full shadow-[0_0_40px_-10px_rgba(220,38,38,0.7)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_60px_-10px_rgba(220,38,38,0.9)]"
            >
              {/* Pulse Effect Ring */}
              <div className="absolute inset-0 rounded-full border border-white/30 scale-100 animate-ping opacity-20"></div>

              {/* Play Icon */}
              <Play size={32} className="fill-white text-white ml-1" />
            </button>
          </div>

          {/* Top Tag */}
          <div className="absolute top-8 left-8 z-10 pointer-events-none">
            <div className="px-4 py-1.5 rounded-xl bg-red-600/90 text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg backdrop-blur-sm">
              <Play size={12} className="fill-white" /> Flix Exclusive
            </div>
          </div>

          {/* Bottom Content */}
          <div className="absolute bottom-8 left-8 right-8 space-y-4 z-10">
            <span className="text-blue-400 font-bold uppercase text-xs tracking-widest">
              Trending Masterclass
            </span>

            <h3 className="text-3xl font-bold text-white leading-tight">
              Scaling LLMs in Enterprise
            </h3>

            <p className="text-slate-300 line-clamp-2 font-medium">
              Advanced architectural strategies for hosting, fine-tuning, and
              observing Large Language Models.
            </p>

            <div className="flex items-center gap-4">
              {/* Primary Action: Play Video */}
              <button
                onClick={() => setIsPlaying(true)}
                className="group/btn relative inline-flex items-center justify-center px-8 py-3 bg-white text-slate-950 rounded-xl font-bold overflow-hidden cursor-pointer"
              >
                <a
                  href="https://www.youtube.com/@3aiflix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pointer-events-auto relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover/btn:-translate-y-[150%]"
                >
                  View Channel <ExternalLink size={14} />
                </a>
              </button>

              {/* Secondary Action: Visit Channel */}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// --- 2. Main Section Component ---
const IntelligenceFeedSection: React.FC = () => {
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl font-bold leading-[1.1] mb-8 tracking-tighter">
            The <span className="gradient-text">Intelligence </span>Feed.
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* --- ATLAS CARD (Left Side) --- */}
          <div className="group relative overflow-hidden rounded-xl h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
              className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0"
              alt="Atlas Background"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

            <div className="absolute top-8 left-8">
              <div className="px-4 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <BookText size={14} /> Atlas Feed
              </div>
            </div>

            <div className="absolute bottom-8 left-8 right-8 space-y-4">
              <span className="text-blue-400 font-bold uppercase text-xs tracking-widest">
                Article of the Week
              </span>
              <h3 className="text-3xl font-bold text-white leading-tight">
                The State of GenAI in Retail GCCs
              </h3>
              <p className="text-slate-300 line-clamp-2 font-medium">
                Exploring how retail Global Capability Centers are transitioning
                from pilots to scaled LLM applications.
              </p>

              <a
                href="/login"
                className="group/btn relative inline-flex items-center justify-center px-8 py-3 bg-white text-slate-950 rounded-xl font-bold overflow-hidden cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover/btn:-translate-y-[150%]">
                  Read Abstract <Lock size={14} className="text-slate-950" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                <span className="absolute inset-0 z-20 flex items-center justify-center gap-2 text-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300">
                  Unlock Content <Lock size={14} />
                </span>
              </a>
            </div>
          </div>

          {/* --- FLIX CARD (Right Side - Replaced with Component) --- */}
          <FlixCard />
        </div>
      </div>
    </section>
  );
};

export default IntelligenceFeedSection;
