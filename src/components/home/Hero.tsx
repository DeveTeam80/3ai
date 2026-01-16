import React, { useState } from "react";
import { ThumbnailNav } from "./ThumbNav";
import { SlideContent } from "./SlideContent";
import { StatsSidebar } from "./StatsSidebar";
import { SLIDES } from "../../data/mockData";

interface HeroProps {
  isDarkMode: boolean;
}

const Hero: React.FC<HeroProps> = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-slate-950 selection:bg-blue-600/30">
      
      {SLIDES.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            activeSlide === idx ? "opacity-100 z-0" : "opacity-0 z-[-1]"
          }`}
        >
          <img
            src={slide.image}
            className="w-full h-full object-cover transition-all duration-1000 brightness-[0.5]"
            alt=""
          />
          <div className="absolute inset-0" />
        </div>
      ))}

      {/* Main Content Wrapper */}
      <div className="relative z-10 h-full flex flex-col pt-24 px-8 lg:pl-6 lg:pr-48 max-w-[1800px] mx-auto">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-12">
            <SlideContent slide={SLIDES[activeSlide]} isDark={true} />
          </div>
        </div>

        <div className="pb-2 w-full">
          <div className="mb-6 flex items-center justify-end">
            <div className="flex gap-4">
              <button
                onClick={() =>
                  setActiveSlide((prev) =>
                    prev > 0 ? prev - 1 : SLIDES.length - 1
                  )
                }
                // Hardcoded white/blue colors
                className="p-1 transition-colors text-white/50 hover:text-blue-500"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() =>
                  setActiveSlide((prev) =>
                    prev < SLIDES.length - 1 ? prev + 1 : 0
                  )
                }
                className="p-1 transition-colors text-white/50 hover:text-blue-500"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Thumbnails - Forced isDark={true} */}
          <div className="flex gap-4 overflow-x-auto no-scrollbar py-2 pr-32 lg:pr-48">
            {SLIDES.map((slide, idx) => (
              <ThumbnailNav
                key={slide.id}
                slide={slide}
                isActive={activeSlide === idx}
                onClick={() => setActiveSlide(idx)}
                isDark={true}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Stats Sidebar - Forced isDark={true} */}
      <StatsSidebar isDark={true} />
    </div>
  );
};

export default Hero;