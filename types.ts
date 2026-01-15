export interface EventCard {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
  type: 'upcoming' | 'past';
  recordingUrl?: string;
}
// export type TabTypes = 'Centres' | 'Meetings' | 'Stakeholders';
// @/types/index.ts
export type TabTypes = 'Summits' | 'Roundtables' | 'Mixers';
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

export type TabType = 'enterprise' | 'professional';

export interface ModuleItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  logo: string; // Add this line (path to the image)
  stat?: string;
}

export interface CoreEngineContent {
  headline: string;
  visualLabel: string;
  modules: ModuleItem[];
  ctaLabel: string;
}


export interface AwardItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}