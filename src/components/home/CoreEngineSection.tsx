import React, { useState } from "react";
// Assumed these components exist in your project based on original code
import ProfessionalTab from "./ProfessionalTab";
import EnterpriseTab from "./EnterpriseTab";

const CoreEngineSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"enterprise" | "professional">("enterprise");

  return (
    <div className="min-h-screen flex flex-col items-center p-4 md:p-8 lg:p-12 selection:bg-purple-500/30 transition-colors duration-300">
      <div className="max-w-7xl w-full space-y-12">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="flex p-1 bg-slate-100/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl backdrop-blur-md">
            <button
              onClick={() => setActiveTab("enterprise")}
              className={`px-8 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${activeTab === "enterprise" ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20" : "hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5"}`}
            >
              For Enterprises (GCC ONE)
            </button>
            <button
              onClick={() => setActiveTab("professional")}
              className={`px-8 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${activeTab === "professional" ? "bg-purple-600 text-white shadow-lg shadow-purple-500/20" : "hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5"}`}
            >
              For Professionals (The Ecosystem)
            </button>
          </div>
        </div>

        <main className="relative transition-all duration-500 ease-in-out">
          {activeTab === "enterprise" ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700"><EnterpriseTab /></div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700"><ProfessionalTab /></div>
          )}
        </main>
      </div>
      <div className="fixed top-0 left-0 -z-10 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-gradient-to-r from-blue-600 to-purple-600/10 dark:bg-gradient-to-r from-blue-600 to-purple-600/10 rounded-xl blur-[120px]" />
        <div className="absolute bottom-[0%] left-[-5%] w-[35%] h-[35%] bg-purple-600/10 dark:bg-purple-600/10 rounded-xl blur-[120px]" />
      </div>
    </div>
  );
};

export default CoreEngineSection;