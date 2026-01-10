import React, { useState, useEffect } from "react";
import Navbar from "./src/components/layout/Navbar";
import Footer from "./src/components/layout/Footer";
import Home from "./src/pages/Home";
import AuthModal from "./src/components/modals/Authmodal";
import MobileMenu from "./src/components/modals/MobileMenu";
import MenuDrawer from "./src/components/modals/MenuDrawer";

const App: React.FC = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Handlers
  const handleRestrictedClick = () => {
    setIsAuthModalOpen(true);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen transition-colors duration-500">
      <Navbar
        isDarkMode={isDarkMode}
        toggleTheme={() => setIsDarkMode(!isDarkMode)}
        onLoginClick={handleRestrictedClick}
        toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
      />
      <Home isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onLoginClick={handleRestrictedClick}
      />
    </div>
  );
};

export default App;
