export interface ImpactCard {
  id: number;
  title: string;
  image: string; // Matches your slider component props
  date: string;  // Using string for flexible display (e.g., "Feb 2025" or "Invite Only")
  location: string;
  category?: string;
}

export interface SectionData {
  subtitle: string;
  description: string;
  cards: ImpactCard[];
}

export interface ImpactDataMap {
  Summits: SectionData;
  Roundtables: SectionData;
  Mixers: SectionData;
}

export interface EventCard {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
  type: "upcoming" | "past";
  recordingUrl?: string;
}

export interface Leader {
  id: string;
  name: string;
  title: string;
  company: string;
  image: string;
}

export interface RecognitionItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface NewsItem {
  id: string;
  category: "GCC" | "AI" | "STRATEGY";
  timestamp: string;
  headline: string;
  summary: string;
  image: string;
  linkedInUrl: string;
}
export interface LogoCard {
  image: string;
  text: string;
}

export interface SlideData {
  id: number;
  title: string;
  tagline?: string;
  description: string;
  ctaText: string;
  image: string;
  thumbnailTitle: string;
  duration: string;
  featuredGraphic: string;
  logos?: LogoCard[];
}


export enum InsightType {
  DOCUMENT = 'Document',
  VIDEO = 'Video',
  ARTICLE = 'Article'
}

export interface InsightItem {
  id: string;
  type: InsightType;
  title: string;
  subtitle?: string;
  imageUrl?: string;
  duration?: string; 
  pageCount?: number;
  isNew: boolean;
  link: string;
}


export interface AwardItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}
