import React, { useEffect, useState } from "react";
import { X, ArrowRight, Lock, ChevronDown, ChevronUp } from "lucide-react";

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginClick: () => void;
}

const MenuDrawer: React.FC<MenuDrawerProps> = ({ isOpen, onClose, onLoginClick }) => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  // Data structure mapped from the client menu
  const menuData = [
    {
      title: "About Us",
      items: ["Partner with us", "Our Partners", "In the News", "Newsletter", "3AI Ecosystem"]
    },
    {
      title: "Leadership Forums",
      items: ["Upper Crest", "Thought Leaders Circle", "GCC Leaders Circle", "ChangeMakers Circle"]
    },
    {
      title: "GCC Marketplace",
      items: ["GCC ONE Platform", "GCC Leaders Circle", "GCC Events", "GCC Awards", "Leadership Roundtables"]
    },
    {
      title: "Offerings",
      items: ["Thought Leadership Accentuation", "Branding & Positioning", "Talent Advocacy & Engagement", "Ecosystem Access & Capabilities", "Professional Development"]
    },
    {
      title: "Properties",
      items: ["GCC ONE Platform", "Outpace (Fractional AI)", "Elevate (GTM)", "QuantX (Research)", "UACP (Academia)", "UpStart", "Meraki", "Flix", "Atlas"]
    },
    {
      title: "Summits",
      items: ["GCC XL Summit", "BEYOND", "GCC X...Summit", "GCC X...Hyderabad", "Spectra", "Business Mixers"]
    },
    {
      title: "Awards",
      items: ["Pinnacle Awards", "GCC ONE Awards", "GCC Apex Awards", "ACME Awards", "Zenith Awards"]
    }
  ];

  return (
    <div className={`fixed inset-0 z-[100] flex justify-end transition-visibility duration-300 ${isOpen ? "visible" : "invisible delay-300"}`}>
      <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`} onClick={onClose} />

      <div className={`relative w-full max-w-sm h-full bg-[var(--bg)] border-l border-[var(--border-light)] shadow-2xl p-6 flex flex-col transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-50">Navigation Hub</span>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 transition-all"><X size={24} /></button>
        </div>

        {/* Scrollable Nav Area */}
        <nav className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
          {menuData.map((section) => (
            <div key={section.title} className="mb-2">
              <button 
                onClick={() => setOpenSection(openSection === section.title ? null : section.title)}
                className="w-full flex items-center justify-between py-4 border-b border-white/10 text-lg font-bold tracking-tight hover:text-blue-500 transition-colors"
              >
                {section.title}
                {openSection === section.title ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              
              {openSection === section.title && (
                <div className="bg-white/5 rounded-xl mt-2 p-2 flex flex-col gap-1">
                  {section.items.map((subItem) => (
                    <a 
                      key={subItem} 
                      href={`#${subItem.toLowerCase().replace(/ /g, "-")}`}
                      onClick={onClose}
                      className="px-4 py-3 text-sm font-medium opacity-70 hover:opacity-100 hover:bg-white/5 rounded-lg flex items-center justify-between group"
                    >
                      {subItem}
                      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Fixed Footer Buttons */}
        <div className="mt-6 space-y-3 pt-6 border-t border-white/10">
          <button onClick={() => { onLoginClick(); onClose(); }} className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold uppercase tracking-widest text-[10px] shadow-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
            Join 3AI Now
          </button>
          <button onClick={() => { onLoginClick(); onClose(); }} className="w-full py-4 rounded-xl border border-white/10 font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:bg-white/5 transition-all">
            <Lock size={12} /> Member Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuDrawer;