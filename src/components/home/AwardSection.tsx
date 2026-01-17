import React from "react";
import { AwardSlider } from "./AwardSlider";

export const AwardSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500 overflow-hidden">
      <div className="max-w-8xl mx-auto flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-5">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter mb-6">
              Credible{" "}
              <span className="gradient-text"> Industry Recognition </span>{" "}
              Awards.
            </h1>
            <p className="text-lg mb-12 leading-relaxed font-light tracking-wide text-slate-500 dark:text-white/40 font-light max-w-3xl">
              Recognizing the visionaries, GCCs, and innovators shaping the
              future of intelligence.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
              Nominate Now
              <svg
                className="ml-2 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
            <button className="px-8 py-4 rounded-xl border text-xs font-bold uppercase tracking-widest transition-all">
              View Past Winners
            </button>
          </div>
        </div>

        {/* The Slider */}
        <div className="w-full mb-16 relative">
          <div className="absolute -inset-4 bg-gold-200/20 dark:bg-gold-900/10 blur-3xl rounded-full pointer-events-none" />
          <AwardSlider />
        </div>
      </div>
    </section>
  );
};
