import React from "react";
import { Globe } from "lucide-react";

const CommuneSection: React.FC = () => {
  return (
    <section className="py-24">
      <div className="w-full px-6">
        <div className="bg-gradient-to-br from-green-600 to-emerald-950 rounded-xl p-16 lg:p-24 text-center relative overflow-hidden shadow-2xl transition-all transform hover:scale-[1.01] group">
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 tracking-tight">
              The Conversation Never Stops
            </h2>
            <p className="text-green-50 text-xl lg:text-2xl mb-12 font-medium leading-relaxed max-w-3xl mx-auto opacity-80">
              Join the 3AI WhatsApp Commune – 17,000+ peers sharing insights in
              real-time.
            </p>
            <button className="px-16 py-6 rounded-2xl bg-white text-green-800 font-black text-xl hover:bg-green-50 transition-all transform hover:scale-105 shadow-3xl">
              Join Commune
            </button>
          </div>
          <div className="absolute -bottom-24 -right-24 pointer-events-none transition-all duration-[3s] ease-out group-hover:scale-110 group-hover:-rotate-6">
            <img
              src="assets/img/whatsapp.png" // UPDATE THIS PATH
              alt="WhatsApp Watermark"
              className="w-[30rem] h-[30rem] object-contain opacity-[0.2] grayscale brightness-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommuneSection;
