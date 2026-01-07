import React from "react";
import { ModuleItem } from "../types";

interface ModuleGridProps {
  modules: ModuleItem[];
  accentColor: "blue" | "purple";
}

const ModuleGrid: React.FC<ModuleGridProps> = ({ modules, accentColor }) => {
  const accentClass =
    accentColor === "blue"
      ? "group-hover:text-blue-600 dark:group-hover:text-blue-400"
      : "group-hover:text-purple-600 dark:group-hover:text-purple-400";

  const borderClass =
    accentColor === "blue"
      ? "group-hover:border-blue-500/30"
      : "group-hover:border-purple-500/30";

  const iconBg =
    accentColor === "blue"
      ? "bg-blue-500/5 text-blue-600 dark:text-blue-400"
      : "bg-purple-500/5 text-purple-600 dark:text-purple-400";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {modules.map((module) => (
        <div
          key={module.id}
          className={`group relative overflow-hidden glass p-6 rounded-2xl transition-all duration-500 hover:-translate-y-1 ${borderClass}`}
        >
          {/* FULL CARD LOGO: Becomes visible on hover */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            {module.logo && (
              <img
                src={module.logo}
                alt=""
                className="w-2/3 h-2/3 object-contain opacity-0 scale-90 blur-md group-hover:opacity-100 group-hover:scale-100 group-hover:blur-0 transition-all duration-700 ease-in-out brightness-110"
              />
            )}
          </div>

          {/* CONTENT: Gets masked (fades out/blurs) on hover */}
          <div className="relative z-10 flex items-start gap-4 transition-all duration-500 group-hover:opacity-0 group-hover:scale-95 group-hover:blur-sm">
            <div className="flex-1 space-y-1">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg text-transition-colors duration-300">
                  {module.title}
                </h3>
                {module.stat && (
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-slate-200 dark:bg-white/10">
                    {module.stat}
                  </span>
                )}
              </div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-widest">
                {module.subtitle}
              </p>
              <p className="text-sm leading-relaxed mt-2">
                {module.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ModuleGrid;
