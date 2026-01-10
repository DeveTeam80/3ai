import { EventCard, Leader, NewsItem, RecognitionItem, SlideData, ImpactCard, SectionData } from "../types";

export const UPCOMING_EVENTS: EventCard[] = [
  { id: "1", title: "GCC X Summit 2026", date: "March 15, 2026", location: "Bangalore / Virtual", image: "assets/img/hero/GCCX25-Fireside-3-768x432.jpeg", type: "upcoming" },
  { id: "2", title: "Zenith Awards 2025", date: "Dec 12, 2025", location: "Mumbai", image: "assets/img/hero/GCCX25-Fireside-Lalit-768x432.jpeg", type: "upcoming" },
  { id: "3", title: "AI Leadership Forum", date: "Jan 20, 2026", location: "New Delhi", image: "assets/img/hero/GCCX25-Fireside-3-768x432.jpeg", type: "upcoming" },
  { id: "4", title: "GCC X Summit 2026", date: "March 15, 2026", location: "Bangalore / Virtual", image: "assets/img/hero/GCCX25-Fireside-3-768x432.jpeg", type: "upcoming" },
  { id: "5", title: "Zenith Awards 2025", date: "Dec 12, 2025", location: "Mumbai", image: "assets/img/hero/GCCX25-Fireside-Lalit-768x432.jpeg", type: "upcoming" },
  { id: "6", title: "AI Leadership Forum", date: "Jan 20, 2026", location: "New Delhi", image: "assets/img/hero/GCCX25-Fireside-3-768x432.jpeg", type: "upcoming" },
];

export const PAST_EVENTS: EventCard[] = [
  { id: "p1", title: "Quantum AI 2024", date: "Sept 2024", location: "On Demand", image: "assets/img/hero/GCCX25-Fireside-3-768x432.jpeg", type: "past", recordingUrl: "#" },
  { id: "p2", title: "Quantum AI 2024", date: "Sept 2025", location: "On Demand", image: "assets/img/hero/GCCX25-Fireside-Lalit-768x432.jpeg", type: "past", recordingUrl: "#" },
];

export const LEADERS_LIST = [
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200",
].concat(Array.from({ length: 10 }, (_, i) => `https://i.pravatar.cc/200?u=${i + 50}`));

export const LOGOS = ["Accenture", "Google", "Wells Fargo", "Amazon", "Goldman Sachs", "J.P. Morgan", "Microsoft", "NVIDIA", "Intel", "American Express", "Adobe", "Salesforce", "Target", "Walmart", "Oracle"];

export const RECOGNITIONS: RecognitionItem[] = [
  { id: "1", title: "Zenith Awards", description: "Celebrating the pinnacle of individual leadership in AI.", image: "assets/img/hero/awards1.png" },
  { id: "2", title: "ACME Awards", description: "Recognizing organizational excellence in GCCs globally.", image: "assets/img/hero/awards2.png" },
  { id: "3", title: "The 3AI 100", description: "Our annual list of the most influential AI leaders shaping the future.", image: "assets/img/hero/awards3.png" },
];

export const NEWS_UPDATES: NewsItem[] = [
  { id: "n1", category: "GCC", timestamp: "2h ago", headline: "Fortune 500 Bank Expands Bangalore GCC to 5,000 Seats", summary: "The expansion focuses on centralizing global AI-driven risk orchestration and quantitative modeling.", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400", linkedInUrl: "#" },
  { id: "n2", category: "AI", timestamp: "5h ago", headline: "New Sovereign AI Guidelines Proposed for Indian Enterprises", summary: "MeitY outlines framework for institutionalizing local LLMs within Global Capability Centers.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400", linkedInUrl: "#" },
  { id: "n3", category: "STRATEGY", timestamp: "1d ago", headline: "3AI Launches Elite Mandate Pipeline for Meraki Talent", summary: "Bridging the gap between Fortune 500 CXO roles and India’s premier AI architects.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400", linkedInUrl: "#" },
];

export const SLIDES: SlideData[] = [
  {
    id: 0,
    title: "India’s Largest GCC & AI Professional Ecosystem",
    tagline: "India's Definitive Marketplace",
    description:
      "3AI is India's definitive professional marketplace. We are the unified engine for GCC excellence and elite AI leadership.",
    ctaText: "Explore the Ecosystem",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000",
    thumbnailTitle: "What is 3AI ?",
    duration: "3 min read",
    featuredGraphic:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 1,
    title: "Unified Architecture for AI Innovation",
    tagline: "Infrastructure & Platform",
    description:
      "We provide the infrastructure where 110K+ members and 980+ organizations engage to solve the most complex AI challenges.",
    ctaText: "Access the Platform",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000",
    thumbnailTitle: "The 3AI Platform",
    duration: "4 min watch",
    featuredGraphic:
      "https://images.unsplash.com/photo-1620712943543-bcc4628c9757?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Exclusive Councils for Architecture & Future",
    tagline: "Circles of Influence",
    description:
      "Membership to our exclusive circles: Upper Crest, GLC & TLC, is reserved for the architects of the future. We curate the Who's Who of global AI leadership.",
    ctaText: "Request Invitation",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000",
    thumbnailTitle: "Circles of Influence",
    duration: "6 min read",
    featuredGraphic:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "The Industry Calendar: Summits & Networking",
    tagline: "Global Summits",
    description:
      "3AI summits are the industry’s calendar markers, setting the standard for networking, benchmarking, and intelligence gathering across the continent.",
    ctaText: "View Event Calendar",
    image:
      "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=2000",
    thumbnailTitle: "Global and Virtual Summits",
    duration: "4 min read",
    featuredGraphic:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "GCC ONE Platform: The B2B Enterprise Gateway",
    tagline: "Operating System",
    description:
      "A unified gateway for Global Capability Centers to accelerate innovation, secure elite talent, and benchmark organizational intelligence against peers.",
    ctaText: "Explore GCC ONE",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
    thumbnailTitle: "GCC ONE Platform",
    duration: "5 min watch",
    featuredGraphic:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    title: "Recognizing Visionaries & Innovators",
    tagline: "Industry Awards",
    description:
      "Celebrating the pinnacle of individual leadership and organizational excellence through our Zenith and ACME accolades. The Oscars of AI.",
    ctaText: "Nominate Now",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=2000",
    thumbnailTitle: "Pinnacle Excellence Awards",
    duration: "3 min read",
    featuredGraphic:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    title: "Strategic Growth through Partnership",
    tagline: "Become a Partner",
    description:
      "Join the ecosystem where Global Capability Centers and Solution Providers find the innovation and network required to scale effectively.",
    ctaText: "Become a Partner",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000",
    thumbnailTitle: "Become a Partner",
    duration: "4 min read",
    featuredGraphic:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
  },
];



export const IMPACT_DATA: Record<string, SectionData> = {
  Centres: {
    title: "ABOUT THE CENTRES",
    subtitle: "We tackle global challenges through our 11 Centres",
    description: "Our Centre teams convert ambition into focused action through structured initiatives and insight generation.",
    cards: [
      { id: '1', title: 'Centre for Advanced Manufacturing and Supply Chains', imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800' },
      { id: '2', title: 'Centre for AI Excellence', imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800' },
      { id: '3', title: 'Centre for Cybersecurity', imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800' },
      { id: '4', title: 'Centre for Energy and Materials', imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800' },
      { id: '5', title: 'Centre for Health and Healthcare', imageUrl: 'https://images.unsplash.com/photo-1504813184591-01592fd03cf7?auto=format&fit=crop&q=80&w=800' },
    ]
  },
  Meetings: {
    title: "UPCOMING MEETINGS",
    subtitle: "Engage with global leaders at our annual summits",
    description: "Our meetings bring together the public and private sectors to address global issues.",
    cards: [
      { id: 'm1', title: 'Annual Meeting 2025', imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800' },
      { id: 'm2', title: 'Growth Summit', imageUrl: 'https://images.unsplash.com/photo-1540575861501-7ad05823c93b?auto=format&fit=crop&q=80&w=800' },
      { id: 'm3', title: 'Climate Innovation Forum', imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800' },
    ]
  },
  Stakeholders: {
    title: "OUR STAKEHOLDERS",
    subtitle: "Collaboration across every industry and region",
    description: "We work with over 1,000 partner companies to drive measurable impact worldwide.",
    cards: [
      { id: 's1', title: 'Private Sector Leaders', imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800' },
      { id: 's2', title: 'Public Sector Partners', imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800' },
      { id: 's3', title: 'Civil Society & NGOs', imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800' },
    ]
  }
};
