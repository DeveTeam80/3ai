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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Increased threshold slightly for better UX
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // LOGIC FIX: 
  // If we haven't scrolled, always show the light logo (logo-05) because the hero is dark.
  // Once scrolled, switch based on the actual theme.
  const logoSrc = !isScrolled 
    ? "assets/img/logo/logo-05.png" 
    : isDarkMode 
      ? "assets/img/logo/logo-05.png" 
      : "assets/img/logo/logo-04.png";

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
        <div className="flex items-center gap-4">
          <div className="relative w-28 h-12 flex items-center justify-center">
            <img 
              src={logoSrc} 
              alt="3AI Logo" 
              className="w-full h-auto object-contain transition-all duration-300 hover:scale-105" 
            />
          </div>
        </div>

        {/* Right Side: Actions & Menu Trigger */}
        <div className="flex items-center gap-3 sm:gap-4">
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