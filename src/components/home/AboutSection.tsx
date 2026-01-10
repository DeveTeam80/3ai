import React from "react";
import { Target, Eye, Trophy } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const StatsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[var(--bg)] text-[var(--text)] transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col">
            <div className="relative group rounded-2xl overflow-hidden shadow-xl border border-[var(--border-light)] flex-grow mb-8">
              <img
                src="assets/img/hero/535db231f7.jpg"
                alt="Stage Conversation"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="group p-8 rounded-2xl border border-[var(--border-light)] shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex justify-between"
                  style={{ backgroundColor: "var(--card-bg)" }}>
              <div className="flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-100 dark:border-gray-800 pb-8 md:pb-0 md:pr-8">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[10px] font-bold rounded-full w-fit mb-4 uppercase tracking-wider">
                  Representing
                </span>
                <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
                  980+
                </h2>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 leading-tight">
                  Organizations
                  <br />
                  Globally
                </p>
              </div>

              <div className="flex flex-col justify-between">
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Assiduously building the world's largest GCC & AI marketplace.
                  Our mission: Democratize thought leadership for leaders and
                  partner enterprises at scale.
                </p>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-8 rounded-full w-fit text-sm shadow-md">
                  Our Mission
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-10">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
                Democratizing <br />{" "}
                <span className="gradient-text">Thought Leadership</span>
              </h1>
              <h4 className="text-3xl lg:text-4xl font-bold opacity-90 leading-tight">
                at an Institutional Scale.
              </h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Target className="w-6 h-6" />,
                  title: "The Marketplace",
                  desc: "A unified engine for GCC & AI professionals to access elite mandates.",
                },
                {
                  icon: <Eye className="w-6 h-6" />,
                  title: "Enterprise Scale",
                  desc: "Empowering partner enterprises with high-velocity innovation access.",
                },
                {
                  icon: <Trophy className="w-6 h-6" />,
                  title: "Institutionalizing AI",
                  desc: "Premier professional network for the upper crest of India's GCCs.",
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="group p-8 rounded-2xl border border-[var(--border-light)] shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between"
                  style={{ backgroundColor: "var(--card-bg)" }}
                >
                  <div>
                    <div className="mb-5 inline-flex p-3 rounded-xl bg-[var(--accent-glow)] text-[var(--accent)] transition-transform group-hover:scale-110">
                      {feature.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
              <div className="rounded-2xl overflow-hidden border border-[var(--border-light)] shadow-md relative min-h-[200px]">
                <img
                  src="assets/img/hero/about.jpg"
                  className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110"
                  alt="Institutional event"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
