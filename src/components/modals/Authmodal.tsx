import React from "react";
import { Lock } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
      <div className="relative glass w-full max-w-md rounded-xl p-16 shadow-3xl bg-[var(--bg)] animate-in zoom-in duration-300 border border-white/10">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600/10 rounded-xl flex items-center justify-center mx-auto mb-10 border border-blue-500/20">
            <Lock className="w-10 h-10 text-blue-600" />
          </div>
          <h3 className="text-3xl font-black mb-6 tracking-tight">Access Restricted</h3>
          <p className="opacity-50 mb-10 font-medium leading-relaxed text-lg">
            Please sign in to access technical articles and executive networking forums.
          </p>
          <div className="space-y-4">
            <button className="w-full py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-blue-500 text-white font-black transition-all shadow-xl text-base">
              Sign In via Glue Up
            </button>
            <button className="w-full py-5 rounded-2xl border border-black/10 dark:border-white/10 font-black transition-all text-base hover:bg-black/5 dark:hover:bg-white/5">
              Create Account
            </button>
          </div>
          <button onClick={onClose} className="mt-10 text-[10px] font-black uppercase tracking-[0.4em] opacity-30 hover:opacity-100 transition-all">
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;