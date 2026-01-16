import React from "react";
import { ArrowRight } from "lucide-react";
import { SlideData } from "@/src/types";

interface SlideContentProps {
  slide: SlideData;
  isDark: boolean;
}

export const SlideContent: React.FC<SlideContentProps> = ({ slide }) => {
  // Default to empty array if undefined
  const logos = slide.logos || [];
  const isFirstSlide = slide.id === 0;

  // Grid logic helper (unchanged)
  const getGridClass = (count: number) => {
    if (count === 1) return "flex justify-center";
    // If 3 or more than 4, use 3 columns
    if (count === 3 || count > 4) return "grid grid-cols-3";
    // Otherwise (2 or 4) use 2 columns
    return "grid grid-cols-2";
  };

  return (
    <div className="w-full flex flex-col lg:flex-row items-center lg:items-center justify-between gap-10 lg:gap-0">
      <div className="slide-active max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000 pl-5">
        <h1 className="text-5xl font-bold leading-[1.1] mb-8 tracking-tighter text-white drop-shadow-sm">
          {slide.title}
        </h1>

        <p className="text-lg mb-12 max-w-xl leading-relaxed font-light text-white tracking-wide">
          {slide.description}
        </p>

        <div className="flex items-center gap-8">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white group h-14 px-10 border border-white/20 rounded-xl font-bold text-xs uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-black hover:border-white flex items-center gap-3">
            {slide.ctaText}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          {isFirstSlide && (
            <button className="group h-14 px-10 border border-white/20 rounded-xl font-bold text-xs uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-black hover:border-white flex items-center gap-3">
              Partner with 3AI
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          )}
        </div>
      </div>

      {logos.length > 0 && (
        <div className="lg:pr-10 lg:mt-0 mt-12 animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
          <div
            className={`
              opacity-90
              ${getGridClass(logos.length)}
              ${logos.length === 3 || logos.length > 4 ? "gap-8" : "gap-12"}
            `}
          >
            {logos.map((logoItem, index) => (
              <div
                key={index}
                className={`
      flex flex-col items-center text-center
      ${logos.length === 1 ? "w-64" : "w-full lg:w-[13rem]"} 
      ${
        isFirstSlide
          ? `
            relative overflow-hidden
            bg-white/5 backdrop-blur-xl 
            border border-white/20 border-b-white/10 border-r-white/10
            rounded-2xl p-6 
            shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
            transition-all duration-300 ease-in-out
            hover:bg-white/10 hover:scale-[1.03] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.45)]
            `
          : ""
      }
    `}
              >
                {/* Suble highlight flare for extra elegance */}
                {isFirstSlide && (
                  <div className="absolute -top-10 -left-10 w-20 h-20 bg-white/10 blur-3xl rounded-full pointer-events-none" />
                )}

                <p className="text-xl text-white/90 font-semibold leading-tight tracking-wide mb-4 z-10">
                  {logoItem.text}
                </p>
                <div className="h-32 w-full flex items-center justify-center z-10">
                  <img
                    src={logoItem.image}
                    alt={logoItem.text}
                    className="max-w-[80%] max-h-full object-contain filter drop-shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
