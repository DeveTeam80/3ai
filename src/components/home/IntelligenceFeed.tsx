import React from 'react';
import { Play, FileText } from 'lucide-react';

// --- TypeScript Definitions ---
interface ContentCardProps {
  title: string;
  meta: string;
  img?: string;
  tag: string;
  isVideo?: boolean;
  embedId?: string;
}

// --- Reusable Content Card (Used for both Blogs and Videos) ---
const ContentCard = ({ title, meta, img, tag, isVideo, embedId }: ContentCardProps) => (
  <div className="group flex flex-col">
    {/* Media Container */}
    <div className="aspect-square bg-gray-100 dark:bg-zinc-900 flex items-center justify-center mb-4 overflow-hidden relative rounded-xl border border-gray-200 dark:border-zinc-800">
      {isVideo && embedId ? (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${embedId}?rel=0`}
          title={title}
          allowFullScreen
        />
      ) : (
        <img 
          src={img} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
      )}
      <div className="absolute top-3 left-3 bg-white/90 dark:bg-black/90 px-2 py-1 text-[9px] font-bold tracking-tighter rounded shadow-sm text-black dark:text-white uppercase">
        {tag}
      </div>
    </div>

    {/* Text Content */}
    <div className="space-y-1 mb-4">
      <h4 className="text-[10px] font-bold uppercase text-gray-400 dark:text-zinc-500 tracking-widest">
        3AI {isVideo ? 'Sessions' : 'Articles'}
      </h4>
      <p className="text-sm font-bold text-gray-900 dark:text-white line-clamp-2 leading-tight h-10">
        {title}
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400 italic">
        {meta}
      </p>
    </div>

    {/* Action Button */}
    <button className="w-full h-14 px-6 flex items-center justify-center gap-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] text-black border border-gray-900 bg-transparent dark:text-white dark:border-white/40 transition-all duration-300 active:scale-95 hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white">
      {isVideo ? 'Play Video' : 'Read More'}
    </button>
  </div>
);

// --- Main Dashboard Component ---
const AIHubDashboard = () => {
  const blogs = [
    {
      id: 1,
      title: "The AI Inflection Point: Operationalizing Intelligence as the New Enterprise Operating System",
      author: "Mohan Khilariwal",
      img: "https://3ai.in/wp-content/uploads/2025/12/ai-nuclear-energy-background-future-innovation-disruptive-technology-1-150x150.jpg",
      tag: "STRATEGY"
    },
    {
      id: 2,
      title: "Rethinking Reasoning in AI with Multimodal Chain-of-Thought Prompting",
      author: "Rahul Pandey",
      img: "https://3ai.in/wp-content/uploads/2023/10/humanoid-robot-working-with-machine-factory-ai-generative-2-1-150x150.jpg",
      tag: "DATA SCIENCE"
    },
    {
      id: 3,
      title: "Towards a Responsible Future – Decoding the Importance of Ethics in AI",
      author: "Anusha Thakur",
      img: "https://3ai.in/wp-content/uploads/2025/05/futuristic-technology-concept-1-150x150.jpg",
      tag: "ETHICS"
    }
  ];

  const videos = [
    { id: 11, title: "Essentials of Deep Learning", embed: "xl-etkHxab8", tag: "DEEP LEARNING" },
    { id: 35, title: "Data Engineering: Demystifying its role in AI", embed: "ug14Piuv4Dg", tag: "ENGINEERING" },
    { id: 18, title: "An Intro to Predictive Customer Lifetime Value Modeling", embed: "Zr0bFmxnc40", tag: "MODELING" }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 p-6 font-sans">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* --- ROW 1: ATLAS FEED (BLOGS) --- */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="relative w-full md:w-1/3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 flex flex-col justify-between min-h-[500px] overflow-hidden">
            <div className="z-10">
              <h2 className="text-3xl font-bold">Atlas Feed</h2>
              <p className="mt-2 opacity-90">3AI Library & Articles</p>
              
              <button className="h-14 px-10 bg-white text-black rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 mt-6">
                Read All
              </button>
            </div>
            
            {/* Background Icon + Text LIB */}
            <div className="absolute bottom-10 left-8 select-none flex items-center gap-4 opacity-30">
              <span className="text-7xl font-black leading-none tracking-tighter">
                3AI<br />LIB
              </span>
              <FileText size={70} strokeWidth={2.5} />
            </div>
          </div>

          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <ContentCard key={blog.id} {...blog} meta={blog.author} />
            ))}
          </div>
        </div>

        {/* --- ROW 2: FLIX FEED (VIDEOS) --- */}
        <div className="flex flex-col md:flex-row-reverse gap-8">
          <div className="relative w-full md:w-1/3 bg-gradient-to-br from-red-600 to-red-800 text-white rounded-2xl p-8 flex flex-col justify-between min-h-[500px] overflow-hidden">
            <div className="z-10 text-right md:text-left">
              <h2 className="text-3xl font-bold">Flix Feed</h2>
              <p className="mt-2 opacity-90">Knowledge Insights Series</p>

              <button className="h-14 px-10 bg-white text-black rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 mt-6 w-full md:w-fit">
                Watch All
              </button>
            </div>

            {/* Background Icon + Text TV */}
            <div className="absolute bottom-10 left-8 md:left-8 select-none flex items-center gap-4 opacity-20">
              <span className="text-7xl font-black leading-none tracking-tighter">
                FLIX<br />TV
              </span>
              <Play size={70} fill="currentColor" />
            </div>
          </div>

          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {videos.map((video) => (
              <ContentCard 
                key={video.id} 
                title={video.title} 
                meta={`Session #${video.id}`} 
                tag={video.tag} 
                isVideo={true} 
                embedId={video.embed} 
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AIHubDashboard;