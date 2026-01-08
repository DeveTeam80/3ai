import React, { useState, useEffect, useRef } from "react";
import {
  Users,
  Globe,
  Award,
  Play,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Briefcase,
  TrendingUp,
  MessageSquare,
  Lock,
  ChevronRight,
  Menu,
  X,
  Sun,
  Moon,
  Sparkles,
  Shield,
  MailCheck,
  Trophy,
  Eye,
  Target,
  Calendar,
  MapPin,
  Share2,
  Clock,
  ExternalLink,
} from "lucide-react";
import { EventCard, Leader, RecognitionItem } from "./types";
import { BookText, PlayCircle } from "lucide-react";
import { Linkedin, Twitter, Youtube, Facebook } from "lucide-react";
import ProfessionalTab from "./components/ProfessionalTab";
import EnterpriseTab from "./components/EnterpriseTab";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft } from "lucide-react";
// --- Sub-components ---

const AnimatedCounter: React.FC<{ target: string }> = ({ target }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const targetNum = parseInt(target.replace(/[^0-9]/g, ""));
  const suffix = target.replace(/[0-9,]/g, "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTime: number | null = null;
          const duration = 2000;

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
            setCount(Math.floor(easeOutCubic(progress) * targetNum));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [targetNum]);

  return (
    <div
      ref={elementRef}
      className="text-4xl lg:text-5xl font-extrabold gradient-text mb-2 tracking-tighter"
    >
      {count.toLocaleString()}
      {suffix}
    </div>
  );
};

// --- Mock Data ---

const UPCOMING_EVENTS: EventCard[] = [
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

const PAST_EVENTS: EventCard[] = [
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

const LEADERS: Leader[] = [
  {
    id: "l1",
    name: "Anita Bhat",
    title: "MD, GCC Leader",
    company: "Fortune 500 GCC",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    id: "l2",
    name: "Rajesh Kumar",
    title: "CXO, AI Strategy",
    company: "Leading Tech GCC",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    id: "l3",
    name: "Sana Iyer",
    title: "Head of Analytics",
    company: "Retail Global",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    id: "l4",
    name: "Vikram Shah",
    title: "Country Head",
    company: "Banking GCC",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    id: "l5",
    name: "Priya Das",
    title: "VP Engineering",
    company: "Healthcare AI",
    image:
      "https://images.unsplash.com/photo-1567532939604-b6c5b0ad2e01?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    id: "l6",
    name: "Arjun Rao",
    title: "CDO",
    company: "FMCG Tech",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    id: "l7",
    name: "Meera Nair",
    title: "Director, AI CoE",
    company: "Automotive GCC",
    image:
      "https://images.unsplash.com/photo-1598550874175-4d0fe4a2c90b?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    id: "l8",
    name: "Rohan Gupta",
    title: "Global Head, GCC",
    company: "Cloud Solutions",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
  },
];

const LOGOS = [
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

const RECOGNITIONS: RecognitionItem[] = [
  {
    id: "1",
    title: "Zenith Awards",
    description: "Celebrating the pinnacle of individual leadership in AI.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "2",
    title: "ACME Awards",
    description: "Recognizing organizational excellence in GCCs globally.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "3",
    title: "The 3AI 100",
    description:
      "Our annual list of the most influential AI leaders shaping the future.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
  },
];

export interface NewsItem {
  id: string;
  category: "GCC" | "AI" | "STRATEGY";
  timestamp: string;
  headline: string;
  summary: string;
  image: string;
  linkedInUrl: string;
}

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState<"enterprise" | "professional">(
    "enterprise"
  );
  const [eventFilter, setEventFilter] = useState("upcoming");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  // 1. Initialize Embla
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      containScroll: "trimSnaps",
      dragFree: false, // Set to true if you want a "flick" feel
    },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  // 2. Navigation Logic
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  // 3. Track Active Slide & Snaps
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // 4. Force Reset when filter changes
  useEffect(() => {
    if (emblaApi) emblaApi.reInit();
  }, [eventFilter, emblaApi]);

  const events = eventFilter === "upcoming" ? UPCOMING_EVENTS : PAST_EVENTS;

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.setAttribute("data-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const handleRestrictedClick = () => {
    setIsAuthModalOpen(true);
  };

  const leaders = [
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200", // Male, Corporate
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200", // Female, Leadership
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200", // Male, Tech
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200", // Female, Executive
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200", // Male, Strategy
  ].concat(
    Array.from(
      { length: 10 },
      (_, i) => `https://i.pravatar.cc/200?u=${i + 50}`
    )
  );
  const NEWS_UPDATES: NewsItem[] = [
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
  const getColumns = (list: string[], count: number): string[][] => {
    const cols: string[][] = Array.from({ length: count }, () => []);
    list.forEach((item, i) => {
      cols[i % count].push(item);
    });
    return cols;
  };

  const columns = getColumns(leaders, 4);

  return (
    <div className="min-h-screen transition-colors duration-500">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[60] glass border-b h-20 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo Container */}
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <img
                  src="assets/img/logo/logo-bg-black.png"
                  alt="3AI Logo"
                  className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">
            <a href="#events" className="hover:text-blue-600 transition-colors">
              GCC One Platform
            </a>
            <a href="#engine" className="hover:text-blue-600 transition-colors">
              Summits
            </a>
            <a href="#forums" className="hover:text-blue-600 transition-colors">
              Forums
            </a>
            <a
              href="#recognition"
              className="hover:text-blue-600 transition-colors"
            >
              Awards
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-all"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={handleRestrictedClick}
              className="px-5 py-2 rounded-xl border border-black/10 dark:border-white/10 text-xs font-bold uppercase tracking-widest hover:bg-black/5 dark:hover:bg-white/5"
            >
              Login
            </button>
            <button
              onClick={handleRestrictedClick}
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold uppercase tracking-widest shadow-xl shadow-blue-500/20 hover:bg-blue-500 transition-all"
            >
              Join 3AI
            </button>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}

      <section className="relative min-h-[100vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden rounded-[3rem] mt-4 mb-20 group">
        {/* Cinematic Background Video */}
        <div className="absolute inset-0 z-0 video-container transition-all duration-1000">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[10s]"
          >
            <source src="assets/home-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Decorative Overlays */}
        <div className="absolute inset-0 z-[2] pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-xl blur-3xl animate-pulse-slow"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-xl blur-3xl animate-pulse-slow"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto space-y-12">
          {/* Timed Reveal Badge */}
          <div
            className="flex justify-center opacity-0 animate-reveal-4s"
            style={{ animationDelay: "3.8s" }}
          >
            {/* <div className="inline-flex items-center gap-3 px-6 py-2 rounded-xl glass border-white/20 shadow-2xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-xl bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-xl h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-800 dark:text-blue-400">
                THE EPICENTER
              </span>
            </div> */}
          </div>

          {/* The 4s Headline Reveal */}
          <div className="space-y-8">
            <div className="overflow-hidden">
              <h1
                className="opacity-0 animate-reveal-4s text-6xl font-black tracking-tighter leading-[1.25] text-white drop-shadow-2xl"
                style={{ animationDelay: "4s" }}
              >
                The Global Pulse of <br />
                <span className="gradient-text">AI Leadership</span>
              </h1>
            </div>

            <p
              className="opacity-0 animate-reveal-4s text-lg text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed"
              style={{ animationDelay: "4.2s" }}
            >
              India’s definitive professional ecosystem and unified engine for
              GCC excellence, elite AI leadership, and the future of
              intelligence.
            </p>
          </div>

          {/* Action Buttons */}
          <div
            className="opacity-0 animate-reveal-4s flex flex-col sm:flex-row items-center justify-center gap-6 pt-10"
            style={{ animationDelay: "4.5s" }}
          >
            <button className="group relative px-14 py-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-black text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl">
              <span className="relative z-10 flex items-center gap-3">
                Join 3AI
                <svg
                  className="w-6 h-6 transition-transform group-hover:translate-x-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>

            <button className="group px-14 py-6 glass border-white/20 text-white rounded-xl font-black text-lg transition-all bg-white/10 active:scale-95">
              Partner Your Enterprise
            </button>
          </div>
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
    @keyframes revealDelayed {
      0% { 
        opacity: 0; 
        transform: translateY(30px); 
        filter: blur(10px);
      }
      100% { 
        opacity: 1; 
        transform: translateY(0); 
        filter: blur(0);
      }
    }

    .animate-reveal-4s {
      animation: revealDelayed 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }
  `,
          }}
        />
      </section>
      {/* Elegant Stacking Events Section */}
      <section
        id="events"
        className="py-24 bg-[var(--bg)] transition-colors overflow-hidden"
      >
        <div className="px-6 sm:px-12 w-full max-w-[1920px] mx-auto">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 text-blue-600 text-[11px] font-black uppercase tracking-[0.4em] mb-6">
                <Calendar size={16} />
                Summit Intelligence
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]">
                Where the <span className="gradient-text">Upper Crest</span>{" "}
                Meets
              </h2>
              <p className="mt-6 opacity-50 text-xl font-medium max-w-xl">
                A panoramic circuit of elite GCC summits, AI roundtables, and
                leadership forums across the globe.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex p-1.5 bg-black/5 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/5">
              <button
                onClick={() => setEventFilter("upcoming")}
                className={`px-10 py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                  eventFilter === "upcoming"
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl"
                    : "opacity-40 hover:opacity-100"
                }`}
              >
                Upcoming
              </button>
              <button
                onClick={() => setEventFilter("past")}
                className={`px-10 py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                  eventFilter === "past"
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl"
                    : "opacity-40 hover:opacity-100"
                }`}
              >
                Archive
              </button>
            </div>
          </div>

          {/* --- Slider Container --- */}
          <div className="relative group/slider">
            {/* Navigation Arrows */}
            <button
              onClick={scrollPrev}
              className="absolute -left-6 top-1/2 -translate-y-1/2 z-30 p-5 rounded-full glass border-white/10 text-white hover:bg-blue-600 transition-all opacity-0 group-hover/slider:opacity-100 hidden lg:flex shadow-2xl"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={scrollNext}
              className="absolute -right-6 top-1/2 -translate-y-1/2 z-30 p-5 rounded-full glass border-white/10 text-white hover:bg-blue-600 transition-all opacity-0 group-hover/slider:opacity-100 hidden lg:flex shadow-2xl"
            >
              <ChevronRight size={24} />
            </button>

            {/* Viewport */}
            <div
              className="overflow-hidden cursor-grab active:cursor-grabbing"
              ref={emblaRef}
              key={eventFilter}
            >
              {/* -ml-5 offsets the px-5 on the slides so the first card lines up with the header text */}
              <div className="flex -ml-5">
                {events.map((event) => (
                  <div
                    key={event.id}
                    /* px-5 creates the gap between cards without breaking the loop logic */
                    className="flex-none w-[90%] md:w-1/2 xl:w-1/3 min-h-[500px] px-5"
                  >
                    <div className="group relative rounded-xl overflow-hidden glass border border-black/5 dark:border-white/10 transition-all duration-700 flex flex-col h-full bg-slate-900/50 shadow-sm hover:shadow-2xl hover:-translate-y-2">
                      {/* Background Image & Overlay */}
                      <div className="relative w-full h-full overflow-hidden flex flex-col">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent z-[1]" />

                        {/* Top Date Badge */}
                        <div className="absolute top-8 left-8 z-[2]">
                          <div className="px-5 py-2 rounded-xl glass bg-white/10 text-[10px] font-black uppercase tracking-widest backdrop-blur-xl border border-white/20 text-white">
                            {event.date}
                          </div>
                        </div>

                        {/* Content Overlay */}
                        <div className="relative z-[2] mt-auto p-10 text-white">
                          <div className="flex items-center gap-2 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                            <MapPin size={12} />
                            {event.location}
                          </div>
                          <h3 className="text-3xl font-black mb-6 leading-tight group-hover:text-blue-400 transition-colors">
                            {event.title}
                          </h3>

                          <div className="flex items-center justify-between">
                            <button className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] group-hover:gap-5 transition-all text-white border-b-2 border-white/20 pb-2 hover:border-blue-400">
                              {event.type === "upcoming"
                                ? "Request Invite"
                                : "Watch Keynote"}
                              <ArrowRight size={16} />
                            </button>
                            {event.type === "past" && (
                              <PlayCircle
                                size={32}
                                className="opacity-40 group-hover:opacity-100 group-hover:text-blue-400 transition-all"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-3 mt-12">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`transition-all duration-500 rounded-full h-2 ${
                    index === selectedIndex
                      ? "w-12 bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]"
                      : "w-2 bg-slate-500 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-24 bg-[var(--bg)] text-[var(--text)] transition-colors duration-500 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Media & Stats */}
            <div className="space-y-8">
              {/* Main Cinematic Image */}
              <div className="relative group rounded-xl overflow-hidden shadow-2xl border border-black/5 dark:border-white/5">
                <div className="aspect-[16/9]">
                  <img
                    src="assets/img/hero/535db231f7.jpg"
                    alt="Stage Conversation"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Stats Glass Plate */}
              <div className="bg-slate-400/5 dark:bg-white/5 backdrop-blur-2xl rounded-xl p-8 border border-black/5 dark:border-white/10 shadow-sm">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "Active Members", value: "56,000+" },
                    { label: "GCC Leaders", value: "690+" },
                    { label: "Thought Leaders", value: "1,600+" },
                    { label: "GCCs", value: "430+" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <AnimatedCounter target={stat.value} />
                      <div className="opacity-40 font-bold uppercase text-[9px] tracking-[0.3em] mt-2">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Content & Features */}
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                  Democratizing <br />
                  <span className="gradient-text">Thought Leadership</span>
                </h2>
                <h4 className="text-5xl font-black leading-[1.1] tracking-tight">
                  at an Institutional Scale.
                </h4>
              </div>

              {/* Features Grid - Improved Spacing to prevent overflow */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  {
                    icon: <Target className="w-5 h-5" />,
                    title: "The Marketplace",
                    desc: "A unified engine for GCC & AI professionals to access elite mandates.",
                  },
                  {
                    icon: <Eye className="w-5 h-5" />,
                    title: "Enterprise Scale",
                    desc: "Empowering partner enterprises with high-velocity innovation access.",
                  },
                  {
                    icon: <Trophy className="w-5 h-5" />,
                    title: "Institutionalizing AI",
                    desc: "Premier professional network for the upper crest of India's GCCs.",
                  },
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="group p-6 rounded-xl bg-slate-500/5 dark:bg-white/5 backdrop-blur-xl border border-black/5 dark:border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-1 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="mb-4 inline-flex p-2.5 rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400 transition-transform group-hover:scale-110">
                        {feature.icon}
                      </div>
                      <h4 className="text-md font-bold mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-[13px] opacity-50 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Media Thumbnail - Unified with the card sizes */}
                <div className="rounded-xl overflow-hidden border border-black/5 dark:border-white/10 shadow-lg relative min-h-[160px]">
                  <img
                    src="assets/img/hero/about.jpg"
                    className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110"
                    alt="Institutional event"
                  />
                  <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply group-hover:bg-transparent transition-all" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Core Engine */}
      <div className="min-h-screen flex flex-col items-center p-4 md:p-8 lg:p-12 selection:bg-purple-500/30 transition-colors duration-300">
        <div className="max-w-7xl w-full space-y-12">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="flex p-1 bg-slate-100/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl backdrop-blur-md">
              <button
                onClick={() => setActiveTab("enterprise")}
                className={`px-8 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === "enterprise"
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                    : "hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5"
                }`}
              >
                For Enterprises (GCC ONE)
              </button>
              <button
                onClick={() => setActiveTab("professional")}
                className={`px-8 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === "professional"
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-500/20"
                    : "hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5"
                }`}
              >
                For Professionals (The Ecosystem)
              </button>
            </div>
          </div>

          <main className="relative transition-all duration-500 ease-in-out">
            {activeTab === "enterprise" ? (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <EnterpriseTab />
              </div>
            ) : (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <ProfessionalTab />
              </div>
            )}
          </main>
        </div>

        {/* Background blobs for aesthetic depth */}
        <div className="fixed top-0 left-0 -z-10 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-gradient-to-r from-blue-600 to-purple-600/10 dark:bg-gradient-to-r from-blue-600 to-purple-600/10 rounded-xl blur-[120px]" />
          <div className="absolute bottom-[0%] left-[-5%] w-[35%] h-[35%] bg-purple-600/10 dark:bg-purple-600/10 rounded-xl blur-[120px]" />
        </div>
      </div>
      {/* Trusted By Scroll */}
      <section className="py-16 bg-black/5 dark:bg-white/5 border-y border-black/5 dark:border-white/5 overflow-hidden">
        <div className="relative overflow-hidden w-full">
          <div className="flex animate-infinite-scroll w-max whitespace-nowrap py-4">
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <div
                key={i}
                className="mx-12 text-3xl font-black opacity-20 grayscale hover:grayscale-0 transition-all cursor-default hover:text-blue-600 hover:opacity-80 tracking-tighter"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Forums Section - Clean Head Wall Style */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                  Your Seat at the Table.
                </h2>
                <p className="text-xl text-slate-500 font-medium">
                  Access the upper crest of global AI and GCC leadership.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    logo: "assets/img/subbrands/upper-crest.png", // Replace with your paths
                    title: "Upper Crest",
                    desc: "Reserved exclusively for MDs, CXOs, and Country Heads defining India's landscape.",
                    color: "hover:border-amber-500/50",
                    bg: "bg-amber-500/5",
                  },
                  {
                    logo: "assets/img/subbrands/Logo-TLC-White.svg",
                    title: "Thought Leaders Circle (TLC)",
                    desc: "The veteran architects and strategic visionaries behind enterprise-grade AI stacks.",
                    color: "hover:border-blue-500/50",
                    bg: "bg-blue-500/5",
                  },
                  {
                    logo: "assets/img/subbrands/CMC.png",
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
                    {/* Logo Container */}
                    <div
                      className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center shrink-0 border border-white/10 overflow-hidden p-1 transition-transform group-hover:scale-110`}
                    >
                      <img
                        src={item.logo}
                        alt={`${item.title} Logo`}
                        className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>

                    {/* Text Content */}
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
              <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
                <MailCheck size={18} />
                Apply for Invitation
              </button>
            </div>

            <div className="relative h-[500px] overflow-hidden">
              {" "}
              {/* Constrained height to prevent huge vertical size */}
              <div className="grid grid-cols-4 gap-4 h-full">
                {columns.map((colImages, colIndex) => (
                  <div
                    key={colIndex}
                    className="relative h-full overflow-hidden"
                  >
                    <div
                      className={
                        colIndex % 2 === 0
                          ? "animate-scroll-up flex flex-col gap-4" // Tighter vertical gap
                          : "animate-scroll-down flex flex-col gap-4"
                      }
                    >
                      {/* Double the array for the loop */}
                      {[...colImages, ...colImages].map((url, i) => (
                        <div
                          key={`${colIndex}-${i}`}
                          className="relative aspect-square shrink-0 rounded-2xl overflow-hidden glass border-white/20"
                        >
                          <img
                            src={url}
                            alt="Leader"
                            className="w-full h-full object-cover filter transition-all duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity p-3 flex flex-col justify-end">
                            <span className="text-[9px] font-bold text-blue-400 uppercase tracking-widest">
                              MD, Analytics
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {/* Overlays */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-r from-blue-600 to-purple-600/20 rounded-xl blur-3xl animate-pulse pointer-events-none"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-600/20 rounded-xl blur-3xl animate-pulse pointer-events-none"></div>
              {/* Fade Edges for smooth exit */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-slate-50 via-transparent to-slate-50 dark:from-[#0f0f0f] dark:to-[#0f0f0f] opacity-20 h-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section - Theme-aware Horizontal Slider Style */}
      <section
        id="recognition"
        className="py-24 bg-gradient-to-b from-[var(--bg)] to-[var(--card-bg)] border-y border-black/5 dark:border-white/5 transition-colors"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div>
              <h2 className="text-5xl font-black mb-4 tracking-tight">
                The Oscars of AI & Analytics
              </h2>
              <p className="opacity-60 text-lg font-medium">
                Recognizing the visionaries and innovators shaping the future.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
                Nominate Now
              </button>
              <button className="px-6 py-3 rounded-xl border border-black/10 hover:bg-black/5 dark:hover:bg-white/5 font-bold transition-all text-xs uppercase tracking-widest">
                Past Winners
              </button>
            </div>
          </div>

          <div className="space-y-[50px] pb-32">
            {RECOGNITIONS.map((item, index) => (
              <div
                key={item.id}
                className="sticky-card"
                style={{ top: `${140 + index * 35}px` }}
              >
                <div className="relative h-[300px] lg:h-[350px] rounded-xl overflow-hidden group cursor-pointer border border-black/5 dark:border-white/10 hover:border-blue-500/50 transition-all bg-[var(--bg)] shadow-2xl">
                  <img
                    src={item.image}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-30 group-hover:opacity-40 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/40 to-transparent flex items-center p-10 lg:p-14">
                    <div className="max-w-xl transition-transform duration-500 group-hover:translate-x-6">
                      <div className="inline-block px-3 py-1 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-white-600 text-[9px] font-black uppercase tracking-widest mb-6">
                        Global Recognition
                      </div>
                      <h3 className="text-3xl lg:text-5xl font-black mb-4 leading-tight">
                        {item.title}
                      </h3>
                      <p className="opacity-60 text-base lg:text-xl font-medium leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-10 right-10 lg:bottom-14 lg:right-14">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-xl glass border border-black/10 dark:border-white/20 flex items-center justify-center group-hover:bg-gradient-to-r from-blue-600 to-purple-600 group-hover:border-blue-400 group-hover:text-white transition-all shadow-xl">
                      <ChevronRight
                        size={36}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intelligence Feed */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              The Intelligence Feed.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Atlas Feed */}
            <div className="group relative overflow-hidden rounded-xl h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
                className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0"
                alt="Atlas Background"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

              <div className="absolute top-8 left-8">
                <div className="px-4 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  <BookText size={14} />
                  Atlas Feed
                </div>
              </div>

              <div className="absolute bottom-8 left-8 right-8 space-y-4">
                <span className="text-blue-400 font-bold uppercase text-xs tracking-widest">
                  Article of the Week
                </span>
                <h3 className="text-3xl font-bold text-white leading-tight">
                  The State of GenAI in Retail GCCs
                </h3>
                <p className="text-slate-300 line-clamp-2 font-medium">
                  Exploring how retail Global Capability Centers are
                  transitioning from pilots to scaled LLM applications.
                </p>

                <button
                  // onClick={onAction}
                  className="group/btn relative px-8 py-3 bg-white text-slate-950 rounded-xl font-bold overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Read Abstract
                    <Lock size={14} />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                </button>
              </div>
            </div>

            {/* Flix Feed */}
            <div className="group relative overflow-hidden rounded-xl h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop"
                className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0"
                alt="Flix Background"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/40 to-transparent"></div>

              <div className="absolute top-8 left-8">
                <div className="px-4 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  <PlayCircle size={14} />
                  Flix Feed
                </div>
              </div>

              <div className="absolute bottom-8 left-8 right-8 space-y-4">
                <span className="text-blue-400 font-bold uppercase text-xs tracking-widest">
                  Trending Masterclass
                </span>
                <h3 className="text-3xl font-bold text-white leading-tight">
                  Masterclass: Scaling LLMs in Enterprise
                </h3>
                <p className="text-slate-300 line-clamp-2 font-medium">
                  Advanced architectural strategies for hosting, fine-tuning,
                  and observing Large Language Models.
                </p>

                <button
                  // onClick={onAction}
                  className="group/btn relative px-8 py-3 bg-white text-slate-950 rounded-xl font-bold overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Watch Trailer
                    <Lock size={14} />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Market Pulse: LinkedIn Style News Section */}
      <section id="pulse" className="py-24 bg-[var(--bg)] transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
            <div className="space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 dark:text-blue-400">
                <Linkedin size={14} />
                LinkedIn Pulse
              </div>
              <h2 className="text-5xl font-black tracking-tight leading-tight">
                Market <span className="gradient-text">Pulse.</span>
              </h2>
              <p className="text-lg opacity-50 font-medium max-w-md leading-relaxed">
                Real-time GCC & AI intelligence optimized for executive sharing.
              </p>
            </div>
            <button className="px-8 py-4 glass border border-slate-200 dark:border-white/10 rounded-xl font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-white/5 transition-all shadow-sm">
              Explore More
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NEWS_UPDATES.map((news) => (
              <div
                key={news.id}
                className="group relative flex flex-col rounded-xl border border-slate-200 dark:border-white/5 transition-all hover:border-blue-500/30 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={news.image}
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                    alt={news.headline}
                  />
                  <div className="absolute top-4 left-4">
                    <div className="px-3 py-1 rounded-lg glass dark:bg-[#0f0f0f] bg-white/10 text-[8px] font-black uppercase tracking-[0.2em] text-white border border-white/20 backdrop-blur-md">
                      {news.category}
                    </div>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1 space-y-4">
                  {/* Added dark:text-slate-400 so it looks good on both */}
                  <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                    <Clock size={12} />
                    {news.timestamp}
                  </div>

                  {/* FIX APPLIED HERE: 
            Added 'text-slate-900' for Light Mode 
            Added 'dark:text-white' for Dark Mode 
        */}
                  <h3 className="text-xl font-black leading-tight group-hover:text-blue-600 transition-colors">
                    {news.headline}
                  </h3>

                  {/* FIX APPLIED HERE: 
            Added 'text-slate-600' for Light Mode 
            Added 'dark:text-slate-400' for Dark Mode 
        */}
                  <p className="text-sm font-medium line-clamp-2 leading-relaxed text-slate-600 dark:text-slate-400">
                    {news.summary}
                  </p>

                  <div className="pt-6 mt-auto border-t border-slate-200 dark:border-white/5 flex items-center justify-between">
                    <button className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 group/link">
                      Share Insight
                      <ExternalLink
                        size={14}
                        className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
                      />
                    </button>
                    <Linkedin
                      size={18}
                      className="opacity-20 group-hover:opacity-100 transition-opacity text-blue-600"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commune CTA */}
      <section className="py-24">
        <div className="w-full px-6">
          <div className="bg-gradient-to-br from-green-600 to-emerald-950 rounded-xl p-16 lg:p-24 text-center relative overflow-hidden shadow-2xl transition-all transform hover:scale-[1.01] group">
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 tracking-tight">
                The Conversation Never Stops
              </h2>
              <p className="text-green-50 text-xl lg:text-2xl mb-12 font-medium leading-relaxed max-w-3xl mx-auto opacity-80">
                Join the 3AI WhatsApp Commune – 15,000+ peers sharing insights
                in real-time.
              </p>
              <button className="px-16 py-6 rounded-2xl bg-white text-green-800 font-black text-xl hover:bg-green-50 transition-all transform hover:scale-105 shadow-3xl">
                Join Commune
              </button>
            </div>
            <div className="absolute bottom-0 right-0 p-12 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
              <Globe className="w-[30rem] h-[30rem] text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <img
                  src="assets/img/logo/logo-bg-black.png"
                  alt="3AI Logo"
                  className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
            <p className="text-slate-400 font-medium max-w-xs leading-relaxed">
              The world's largest integrated professional ecosystem for GCC
              leaders and AI professionals.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Youtube, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-gradient-to-r from-blue-600 to-purple-600 transition-all text-slate-400 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase text-xs tracking-[0.2em] text-blue-500">
              Platform
            </h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Marketplace
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Atlas Knowledge
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  3AIFlix
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  UPStart Pipeline
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase text-xs tracking-[0.2em] text-blue-500">
              Exclusives
            </h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Upper Crest
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  TLC Forum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Zenith Awards
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Meraki Talent
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase text-xs tracking-[0.2em] text-blue-500">
              Company
            </h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Partner With Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase text-xs tracking-[0.2em] text-blue-500">
              Legal
            </h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Membership Rules
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500 font-medium">
          <p>© 2026 3AI. All Rights Reserved.</p>
          <p>Powered by <a href="https://www.visionarybizz.com/">Visionary Services</a></p>
        </div>
      </footer>
      {/* Auth Modal */}
      {isAuthModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setIsAuthModalOpen(false)}
          />
          <div className="relative glass w-full max-w-md rounded-xl p-16 shadow-3xl bg-[var(--bg)] animate-in zoom-in duration-300 border border-white/10">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600/10 rounded-xl flex items-center justify-center mx-auto mb-10 border border-blue-500/20">
                <Lock className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-3xl font-black mb-6 tracking-tight">
                Access Restricted
              </h3>
              <p className="opacity-50 mb-10 font-medium leading-relaxed text-lg">
                Please sign in to access technical articles and executive
                networking forums.
              </p>
              <div className="space-y-4">
                <button className="w-full py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-blue-500 text-white font-black transition-all shadow-xl text-base">
                  Sign In via Glue Up
                </button>
                <button className="w-full py-5 rounded-2xl border border-black/10 dark:border-white/10 font-black transition-all text-base hover:bg-black/5 dark:hover:bg-white/5">
                  Create Account
                </button>
              </div>
              <button
                onClick={() => setIsAuthModalOpen(false)}
                className="mt-10 text-[10px] font-black uppercase tracking-[0.4em] opacity-30 hover:opacity-100 transition-all"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[55] bg-[var(--bg)] flex flex-col p-12 pt-32 animate-in slide-in-from-top duration-500">
          <div className="flex flex-col gap-8 text-3xl font-black uppercase tracking-tighter">
            <a href="#events" onClick={() => setIsMenuOpen(false)}>
              Events
            </a>
            <a href="#engine" onClick={() => setIsMenuOpen(false)}>
              Core Engine
            </a>
            <a href="#forums" onClick={() => setIsMenuOpen(false)}>
              Forums
            </a>
            <a href="#recognition" onClick={() => setIsMenuOpen(false)}>
              Recognition
            </a>
            <hr className="border-black/10 dark:border-white/10" />
            <button
              className="text-left text-blue-600"
              onClick={handleRestrictedClick}
            >
              Login
            </button>
            <button
              className="text-left text-purple-600"
              onClick={handleRestrictedClick}
            >
              Join 3AI
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
