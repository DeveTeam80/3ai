import React from "react";
import ModuleGrid from "./ModuleGrid";
import { ModuleItem } from "../types";

const modules: ModuleItem[] = [
  {
    id: "knowledge",
    title: "3AI Atlas",
    subtitle: "Knowledge",
    logo: "assets/img/subbrands/atlas.png",
    description:
      "Access the most comprehensive repository of proprietary research, whitepapers, and frameworks.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    stat: "2500+ Articles",
  },
  {
    id: "streaming",
    title: "3AIFlix",
    subtitle: "Streaming",
    logo: "assets/img/subbrands/channels4_profile-Photoroom.png",
    description:
      "On-demand masterclasses and deep-dives from the industry leaders redefining AI landscapes.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    stat: "850+ Hours",
  },
  {
    id: "forums",
    title: "TLC & Circle",
    subtitle: "Forums",
    logo: "assets/img/subbrands/Logo-TLC-White.svg",
    description:
      "Engage in curated masterminds and change-maker circles designed for top-tier professionals.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
        />
      </svg>
    ),
  },
  {
    id: "recognition",
    title: "Zenith Awards",
    subtitle: "Recognition",
    logo: "assets/img/subbrands/Zenith-Logo.svg",
    description:
      "Global benchmark for excellence, honoring those pushing the boundaries of AI application.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z"
        />
      </svg>
    ),
  },
];

const EcosystemVisual = () => {
  return (
    <div className="relative glass-dark rounded-3xl p-10 overflow-hidden min-h-[400px] flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 dark:from-purple-500/10 to-transparent" />

      {/* Abstract Orbit Visualization */}
      <div className="relative w-64 h-64">
        <div className="absolute inset-0 border border-purple-500/20 dark:border-purple-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
        <div className="absolute inset-8 border border-purple-500/10 dark:border-purple-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-purple-600 dark:bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
        <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.5)]" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-2">
            <div className="text-5xl font-bold gradient-text">3AI</div>
            <div className="text-[10px] font-bold tracking-[0.2em] text-slate-500 dark:text-slate-500 uppercase">
              Ecosystem
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-4">
        {[
          { l: "Network", v: "12k+" },
          { l: "Articles", v: "2.5k" },
          { l: "Events", v: "50+" },
        ].map((item) => (
          <div key={item.l} className="glass p-3 rounded-xl text-center">
            <div className="text-sm font-bold text-slate-800 dark:text-slate-100">
              {item.v}
            </div>
            <div className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">
              {item.l}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProfessionalTab: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-10 order-2 lg:order-1">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Accelerate Your{" "}
            <span className="text-purple-600 dark:text-purple-400">
              Career in AI
            </span>
            .
          </h2>
          <p className="text-lg leading-relaxed">
            The ultimate launchpad for AI professionals. Gain access to
            high-impact content, exclusive networks, and the industry’s most
            prestigious awards.
          </p>
        </div>

        <ModuleGrid modules={modules} accentColor="purple" />

        <div className="pt-4">
          <button className="group relative px-8 py-4 bg-purple-600 rounded-2xl font-semibold text-white overflow-hidden transition-all hover:bg-purple-700 hover:shadow-2xl hover:shadow-purple-500/40">
            <span className="relative z-10 flex items-center gap-2">
              View Membership Tiers
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </button>
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <EcosystemVisual />
      </div>
    </div>
  );
};

export default ProfessionalTab;
