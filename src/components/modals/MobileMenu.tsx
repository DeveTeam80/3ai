import React from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onRestrictedClick: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onRestrictedClick }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[55] bg-[var(--bg)] flex flex-col p-12 pt-32 animate-in slide-in-from-top duration-500">
      <div className="flex flex-col gap-8 text-3xl font-black uppercase tracking-tighter">
        <a href="#events" onClick={onClose}>Events</a>
        <a href="#engine" onClick={onClose}>Core Engine</a>
        <a href="#forums" onClick={onClose}>Forums</a>
        <a href="#recognition" onClick={onClose}>Recognition</a>
        <hr className="border-black/10 dark:border-white/10" />
        <button className="text-left text-blue-600" onClick={onRestrictedClick}>Login</button>
        <button className="text-left text-purple-600" onClick={onRestrictedClick}>Join 3AI</button>
      </div>
    </div>
  );
};

export default MobileMenu;