export interface ImpactCard {
  id: string;
  title: string;
  imageUrl: string;
}

export interface SectionData {
  title: string;
  subtitle: string;
  description: string;
  cards: ImpactCard[];
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

export interface SlideData {
  id: number;
  title: string;
  tagline: string;
  description?: string;
  ctaText: string;
  image: string;
  thumbnailTitle: string;
  duration: string;
  featuredGraphic?: string;
}
