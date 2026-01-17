import React from "react";
import { MailCheck } from "lucide-react";

const ForumsSection: React.FC = () => {
  const imageNumbers = [
    26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  ];

  const dummyImages = imageNumbers.map((num) => {
    const extension = num === 36 ? "png" : "jpg";
    return `/assets/img/subbrands/${num}.${extension}`;
  });

  const columns = [
    dummyImages.slice(0, 4),
    dummyImages.slice(4, 8),
    dummyImages.slice(8, 12),
    dummyImages.slice(12, 16),
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* LEFT COLUMN: Text and Cards */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter mb-6">
                <span className="gradient-text">Your Seat</span> at the Table.
              </h1>
              <p className="text-lg mb-12 max-w-xl leading-relaxed font-light tracking-wide text-slate-500 font-medium">
                Access the upper crest of global AI and GCC leadership.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  logo: "assets/img/subbrands/25.jpg",
                  title: "Upper Crest",
                  desc: "Reserved exclusively for MDs, CXOs, and Country Heads defining India's landscape.",
                  color: "hover:border-amber-500/50",
                  bg: "bg-amber-500/5",
                },
                {
                  logo: "assets/img/subbrands/49-Photoroom.png",
                  title: "GCC Leaders Circle (GLC)",
                  desc: "The veteran architects and strategic visionaries behind enterprise-grade AI stacks.",
                  color: "hover:border-blue-500/50",
                  bg: "bg-blue-500/5",
                },
                {
                  logo: "assets/img/subbrands/42.jpg",
                  title: "Thought Leaders Circle (TLC)",
                  desc: "The veteran architects and strategic visionaries behind enterprise-grade AI stacks.",
                  color: "hover:border-blue-500/50",
                  bg: "bg-blue-500/5",
                },
                {
                  logo: "assets/img/subbrands/50.jpg",
                  title: "Change Makers",
                  desc: "For the high-potential emerging 1% of the workforce accelerating the intelligence curve.",
                  color: "hover:border-emerald-500/50",
                  bg: "bg-emerald-500/5",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`group flex gap-6 items-start p-6 glass rounded-3xl transition-all duration-500 border border-white/5 shadow-sm hover:shadow-xl hover:-translate-y-1 ${item.color}`}
                >
                  <div
                    className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center shrink-0 border border-white/10 overflow-hidden p-1 transition-transform group-hover:scale-110`}
                  >
                    <img
                      src={item.logo}
                      alt={`${item.title} Logo`}
                      className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="flex flex-col justify-center min-h-[64px]">
                    <h4 className="text-xl font-black mb-1 tracking-tight text-[var(--text)] group-hover:text-blue-500 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Button and Marquee */}
          <div className="space-y-8">
            {/* Button positioned above the marquee */}
            <div className="flex justify-end">
              <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
                <MailCheck size={18} /> Express Interest
              </button>
            </div>

            <div className="relative h-[500px] overflow-hidden">
              <div className="grid grid-cols-4 gap-4 h-full p-4">
                {columns.map((colImages, colIndex) => (
                  <div key={colIndex} className="relative h-full overflow-hidden">
                    <div
                      className={`${
                        colIndex % 2 === 0
                          ? "animate-scroll-up"
                          : "animate-scroll-down"
                      } flex flex-col gap-4`}
                    >
                      {[...colImages, ...colImages, ...colImages].map(
                        (path, i) => (
                          <div
                            key={`${colIndex}-${i}`}
                            className="relative aspect-square shrink-0 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-sm"
                          >
                            <img
                              src={path}
                              alt={`Brand ${i}`}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src =
                                  "https://via.placeholder.com/150?text=Brand";
                              }}
                            />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative Accents */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForumsSection;