import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu } from "lucide-react";

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  onLoginClick: () => void;
  toggleMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  isDarkMode, 
  toggleTheme, 
  onLoginClick, 
  toggleMenu 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Define the navigation items
  const navItems = ["GCCs", "Enterprises", "Startups", "AI News", "Academia"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoSrc = !isScrolled 
    ? "assets/img/logo/logo-bg-black.png" 
    : isDarkMode 
    ? "assets/img/logo/logo-bg-black.png"
      : "assets/img/logo/logo-white.png" 

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[60] h-20 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "glass border-b border-black/5 dark:border-white/5" 
          : "bg-transparent border-transparent" 
      }`}
    >
      <div className="max-w-full mx-auto px-6 h-full flex items-center justify-between">
        
        {/* Left Side: Dynamic Logo */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="relative w-28 h-12 flex items-center justify-center">
            <img 
              src={logoSrc} 
              alt="3AI Logo" 
              className="w-full h-auto object-contain transition-all duration-300 hover:scale-105" 
            />
          </div>
        </div>

        {/* Center: Desktop Navigation Links (Visible only on Desktop) */}
        <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className={`text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${
                isScrolled
                  ? "text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right Side: Actions & Menu Trigger */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <button 
            onClick={toggleTheme} 
            className={`p-2.5 rounded-xl transition-all ${
              isScrolled 
                ? "text-zinc-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/5" 
                : "text-white hover:bg-white/10" 
            }`}
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <div className="hidden sm:flex items-center gap-3">
            <button 
              onClick={onLoginClick} 
              className={`px-5 py-2 rounded-xl border text-xs font-bold uppercase tracking-widest transition-all ${
                isScrolled
                  ? "border-black/10 dark:border-white/10 text-zinc-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/5"
                  : "border-white/20 text-white hover:bg-white/10"
              }`}
            >
              Login
            </button>
            <button 
              onClick={onLoginClick} 
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold uppercase tracking-widest shadow-xl shadow-blue-500/20 hover:scale-105 transition-all"
            >
              Join 3AI
            </button>
          </div>

          <button 
            onClick={toggleMenu}
            className={`p-2.5 rounded-xl transition-all ${
              isScrolled 
                ? "text-zinc-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/5" 
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;