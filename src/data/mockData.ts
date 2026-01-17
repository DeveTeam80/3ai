import { AwardItem } from '../types';
import {
  EventCard,
  Leader,
  NewsItem,
  RecognitionItem,
  SlideData,
  ImpactCard,
  SectionData,
   InsightType, InsightItem 
} from "../types";

export const UPCOMING_EVENTS: EventCard[] = [
  {
    id: "1",
    title: "GCC X Summit 2026",
    date: "March 15, 2026",
    location: "Bangalore / Virtual",
    image: "assets/img/hero/GCCX25-Fireside-3-768x432.jpeg",
    type: "upcoming",
  },
  {
    id: "2",
    title: "Zenith Awards 2025",
    date: "Dec 12, 2025",
    location: "Mumbai",
    image: "assets/img/hero/GCCX25-Fireside-Lalit-768x432.jpeg",
    type: "upcoming",
  },
  {
    id: "3",
    title: "AI Leadership Forum",
    date: "Jan 20, 2026",
    location: "New Delhi",
    image: "assets/img/hero/GCCX25-Fireside-3-768x432.jpeg",
    type: "upcoming",
  },
  {
    id: "4",
    title: "GCC X Summit 2026",
    date: "March 15, 2026",
    location: "Bangalore / Virtual",
    image: "assets/img/hero/GCCX25-Fireside-3-768x432.jpeg",
    type: "upcoming",
  },
  {
    id: "5",
    title: "Zenith Awards 2025",
    date: "Dec 12, 2025",
    location: "Mumbai",
    image: "assets/img/hero/GCCX25-Fireside-Lalit-768x432.jpeg",
    type: "upcoming",
  },
  {
    id: "6",
    title: "AI Leadership Forum",
    date: "Jan 20, 2026",
    location: "New Delhi",
    image: "assets/img/hero/GCCX25-Fireside-3-768x432.jpeg",
    type: "upcoming",
  },
];

export const PAST_EVENTS: EventCard[] = [
  {
    id: "p1",
    title: "Quantum AI 2024",
    date: "Sept 2024",
    location: "On Demand",
    image: "assets/img/hero/GCCX25-Fireside-3-768x432.jpeg",
    type: "past",
    recordingUrl: "#",
  },
  {
    id: "p2",
    title: "Quantum AI 2024",
    date: "Sept 2025",
    location: "On Demand",
    image: "assets/img/hero/GCCX25-Fireside-Lalit-768x432.jpeg",
    type: "past",
    recordingUrl: "#",
  },
];

export const LEADERS_LIST = [
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200",
].concat(
  Array.from({ length: 10 }, (_, i) => `https://i.pravatar.cc/200?u=${i + 50}`)
);

export const LOGOS = [
  "Accenture",
  "Google",
  "Wells Fargo",
  "Amazon",
  "Goldman Sachs",
  "J.P. Morgan",
  "Microsoft",
  "NVIDIA",
  "Intel",
  "American Express",
  "Adobe",
  "Salesforce",
  "Target",
  "Walmart",
  "Oracle",
];

export const RECOGNITIONS: RecognitionItem[] = [
  {
    id: "1",
    title: "Zenith Awards",
    description: "Celebrating the pinnacle of individual leadership in AI.",
    image: "assets/img/hero/awards1.png",
  },
  {
    id: "2",
    title: "ACME Awards",
    description: "Recognizing organizational excellence in GCCs globally.",
    image: "assets/img/hero/awards2.png",
  },
  {
    id: "3",
    title: "The 3AI 100",
    description:
      "Our annual list of the most influential AI leaders shaping the future.",
    image: "assets/img/hero/awards3.png",
  },
];

export const NEWS_UPDATES: NewsItem[] = [
  {
    id: "n1",
    category: "GCC",
    timestamp: "2h ago",
    headline: "Fortune 500 Bank Expands Bangalore GCC to 5,000 Seats",
    summary:
      "The expansion focuses on centralizing global AI-driven risk orchestration and quantitative modeling.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400",
    linkedInUrl: "#",
  },
  {
    id: "n2",
    category: "AI",
    timestamp: "5h ago",
    headline: "New Sovereign AI Guidelines Proposed for Indian Enterprises",
    summary:
      "MeitY outlines framework for institutionalizing local LLMs within Global Capability Centers.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400",
    linkedInUrl: "#",
  },
  {
    id: "n3",
    category: "STRATEGY",
    timestamp: "1d ago",
    headline: "3AI Launches Elite Mandate Pipeline for Meraki Talent",
    summary:
      "Bridging the gap between Fortune 500 CXO roles and India’s premier AI architects.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400",
    linkedInUrl: "#",
  },
];

export const SLIDES: SlideData[] = [
  {
    id: 0,
    title: "India's largest Platform and Marketplace for GCC & AI Leaders and leaders",
    tagline: "India's Definitive Marketplace",
    description:
      "Integrated Platform and Marketplace for leaders, decision-makers, professionals from GCCs, Enterprises and Start-ups.",
    ctaText: "Become 3AI Member",
    image: "assets/img/hero/firstslide.jpg",
    thumbnailTitle: "What is 3AI ?",
    duration: "3 min read",
    featuredGraphic:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800",
    logos: [
      { image: "assets/img/subbrands/forbes-Photoroom.png", text: "Featured in" },
      { image: "assets/img/subbrands/11.png", text: "Recognised By" },
    ],
  },
  {
    id: 1,
    title: "Bespoke Leadership Forums",
    tagline: "Circles of Influence",
    description:
      "3AI Forums bring together top executives, thought leaders, GCC leaders and emerging professionals to accentuate their thought leadership, share knowledge, drive innovation and shape the future of AI.",
    ctaText: "Express Interest",
    image: "assets/img/hero/secondslide.jpg",
    thumbnailTitle: "Circles of Influence",
    duration: "6 min read",
    featuredGraphic:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
    logos: [
      { image: "assets/img/subbrands/upper-crest.png", text: "" },
      { image: "assets/img/subbrands/49-Photoroom.png", text: "" },
      { image: "assets/img/subbrands/42-Photoroom.png", text: "" },
      { image: "assets/img/subbrands/CMC.png", text: "" },
    ],
  },
  {
    id: 2,
    title: "GCC ONE Platform: The B2B Enterprise Gateway",
    tagline: "Operating System",
    description:
      "The most comprehensive suite of GCC-focused properties under one umbrella with a 5 x 15 Framework - creating an unparalleled platform for thought leadership, positioning, branding, talent visibility and ecosystem engagement.",
    ctaText: "Explore GCC ONE",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
    thumbnailTitle: "GCC ONE Platform",
    duration: "5 min watch",
    featuredGraphic:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    logos: [
      { image: "assets/img/subbrands/GCC-ONE-Logo-Light.png", text: "" },
    ],
  },
  {
    id: 3,
    title: "Events & Conferences",
    tagline: "Global Summits",
    description:
      "Conceptualize and execute pathbreaking & pioneering summits, conferences and speaking interventions with innovative formats, & session tracks to bring out the next-in-class themes & topics in AI arena.",
    ctaText: "View Event Calendar",
    image: "assets/img/hero/535db231f7.jpg",
    thumbnailTitle: "Global and Virtual Summits",
    duration: "4 min read",
    featuredGraphic:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    logos: [
      { image: "assets/img/subbrands/14.png", text: "" },
      { image: "assets/img/subbrands/17.png", text: "" },
      { image: "assets/img/subbrands/23-Photoroom.png", text: "" },
      { image: "assets/img/subbrands/15.png", text: "" },
      { image: "assets/img/subbrands/16.png", text: "" },
    ],
  },
  {
    id: 4,
    title: "Credible Industry Recognition Awards",
    tagline: "Industry Awards",
    description:
      "Recognizing and rewarding the select GCCs, enterprises & Strtups and their ensuing noteworthy leaders & professionals across different award categories that have significantly executed the art of solving large, complex & unresolved problems in AI arena",
    ctaText: "Nominate Now",
    image: "assets/img/hero/awardsslide.jpg",
    thumbnailTitle: "Industry Recognition Awards",
    duration: "3 min read",
    featuredGraphic:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
    logos: [
      { image: "assets/img/subbrands/61.png", text: "" },
      { image: "assets/img/subbrands/62.png", text: "" },
      { image: "assets/img/subbrands/63.png", text: "" },
      { image: "assets/img/subbrands/64.png", text: "" },
    ],
  },
  {
    id: 5,
    title: "Industry Insights and Knowledge Library",
    tagline: "Knowledge & Insights",
    description:
      "Featured articles, blogs, case studies, white papers, solution accelerators and engaging & immersive video streaming content.",
    ctaText: "Access Knowledge Hub",
    image: "assets/img/hero/atlasslide.jpg",
    thumbnailTitle: "Largest Knowledge Library",
    duration: "Strategic Suite",
    featuredGraphic:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    logos: [
      { image: "assets/img/subbrands/atlas-Photoroom.png", text: "" },
      { image: "assets/img/subbrands/3aiflix.png", text: "" },
      // { image: "assets/img/subbrands/quants-Photoroom.png", text: "" },
    ],
  },
  {
    id: 6,
    title: "Industry Research and Reports",
    tagline: "Quants- QuantX",
    description:
      "Researching & publishing fact-based AI industry insights reports, dossiers & compendiums that help executives, leaders and decision makers.",
    ctaText: "View Reports",
    image: "assets/img/hero/sevenslide.jpg",
    thumbnailTitle: "Industry Research and Reports",
    duration: "Dossiers & Reports",
    featuredGraphic:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    logos: [
      { image: "assets/img/subbrands/quants-Photoroom.png", text: "" },
    ],
  },
];

export const IMPACT_DATA = {
  Summits: {
    subtitle: "Summits & Conclaves",
    description:
      "Industry-defining flagship events and conclaves that bring together the largest gathering of AI & GCC leaders in India.",
    cards: [
      {
        id: 1,
        title: "BEYOND 2025",
        date: "Feb 2025",
        location: "Bengaluru",
        image: "assets/img/hero/GCCX25-Fireside-3-768x432.jpeg",
      },
      {
        id: 2,
        title: "GCC X Summit",
        date: "April 2025",
        location: "Bengaluru",
        image: "assets/img/hero/GCCX25-Fireside-Lalit-768x432.jpeg",
      },
      {
        id: 3,
        title: "Lighthouse Bengaluru",
        date: "Annual",
        location: "Bengaluru",
        image: "assets/img/hero/GCCX25-Fireside-3-768x432.jpeg",
      },
      {
        id: 4,
        title: "BEYOND 2025",
        date: "Feb 2025",
        location: "Bengaluru",
        image: "assets/img/hero/GCCX25-Fireside-3-768x432.jpeg",
      },
      {
        id: 5,
        title: "GCC X Summit",
        date: "April 2025",
        location: "Bengaluru",
        image: "assets/img/hero/GCCX25-Fireside-Lalit-768x432.jpeg",
      },
      {
        id: 6,
        title: "Lighthouse Bengaluru",
        date: "Annual",
        location: "Bengaluru",
        image: "assets/img/hero/GCCX25-Fireside-3-768x432.jpeg",
      },
    ],
  },
  Roundtables: {
    subtitle: "Bespoke Roundtables",
    description:
      "Exclusive, closed-door curated sessions for the MDs and GCC Heads to deliberate on strategic AI and leadership mandates.",
    cards: [
      {
        id: 7,
        title: "MD & GCC Head Roundtable",
        date: "Quarterly",
        location: "Mumbai",
        image: "assets/img/hero/GCCX25-Fireside-Lalit-768x432.jpeg",
      },
      {
        id: 8,
        title: "3AI Evoke Series",
        date: "Invite Only",
        location: "NCR",
        image: "assets/img/hero/GCCX25-Fireside-3-768x432.jpeg",
      },
      {
        id: 9,
        title: "MD & GCC Head Roundtable",
        date: "Quarterly",
        location: "Mumbai",
        image: "assets/img/hero/GCCX25-Fireside-Lalit-768x432.jpeg",
      },
      {
        id: 10,
        title: "3AI Evoke Series",
        date: "Invite Only",
        location: "NCR",
        image: "assets/img/hero/GCCX25-Fireside-3-768x432.jpeg",
      },
    ],
  },
  Mixers: {
    subtitle: "3AI Business Mixers",
    description:
      "Signature properties like AI Makers Unpacked and curated initiatives designed for niche AI ecosystem engagement.",
    cards: [
      {
        id: 6,
        title: "AI Makers Unpacked",
        date: "Weekly",
        location: "Digital",
        image: "assets/img/hero/GCCX25-Fireside-Lalit-768x432.jpeg",
      },
      {
        id: 7,
        title: "Women in AI Specials",
        date: "Annual",
        location: "National",
        image: "assets/img/hero/GCCX25-Fireside-3-768x432.jpeg",
      },
    ],
  },
};

export const INSIGHTS: InsightItem[] = [
  {
    id: '1',
    type: InsightType.DOCUMENT,
    title: 'The Global Cooperation Barometer 2026 — Key Findings',
    pageCount: 37,
    isNew: true,
    link: '#',
    imageUrl: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=300' // Placeholder for the document cover
  },
  {
    id: '2',
    type: InsightType.VIDEO,
    title: 'Watch: The Global Cooperation Barometer 2026 press conference',
    duration: '3 min read', // Image says "read" even for video title sometimes, or "watch"
    isNew: true,
    link: '#',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    type: InsightType.ARTICLE,
    title: "Global cooperation is undergoing a major shift. Here's how",
    duration: '4 min watch',
    isNew: true,
    link: '#',
    imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    type: InsightType.ARTICLE,
    title: 'The new shape of global cooperation',
    duration: '5 min read',
    isNew: false,
    link: '#',
    imageUrl: 'https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5',
    type: InsightType.VIDEO,
    title: 'Addressing the global dialogue gap',
    duration: '12 min watch',
    isNew: false,
    link: '#',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800'
  }
];


export const AWARDS_DATA: AwardItem[] = [
  {
    id: 'zenith',
    title: 'Zenith Awards',
    description: 'Celebrating the pinnacle of individual leadership and pioneering contributions to the field of AI.',
    image: 'assets/img/hero/awards1.png',
    category: 'assets/img/subbrands/63.png'
  },
  {
    id: 'acme',
    title: 'ACME Awards',
    description: 'Recognizing organizational excellence in Global Capability Centers (GCCs) and strategic innovation.',
    image: 'assets/img/hero/awards2.png',
    category: 'assets/img/subbrands/62.png'
  },
  {
    id: '3ai-100',
    title: 'The 3AI 100',
    description: 'Our annual definitive list spotlighting the 100 most influential and visionary AI leaders across the globe.',
    image: 'assets/img/hero/awards3.png',
    category: 'assets/img/subbrands/61.png'
  }
];