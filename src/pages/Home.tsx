import React from "react";
import Hero from "../components/home/Hero"; 
import EventsSection from "../components/home/EventsSection";
import StatsSection from "../components/home/AboutSection";
import CoreEngineSection from "../components/home/CoreEngineSection";
import TrustedBySection from "../components/home/TrustedBySection";
import ForumsSection from "../components/home/ForumSection";
import RecognitionSection from "../components/home/RecognitionSection";
import IntelligenceFeedSection from "../components/home/IntelligenceFeed";
import MarketPulseSection from "../components/home/MarketPulseSection";
import CommuneSection from "../components/home/CommuneSection";
import SummitSlider from "../components/home/SummitSlider";
import GCCOneSection from "../components/home/GCConeSection";


interface HomeProps {
  isDarkMode: boolean;
}

const Home: React.FC<HomeProps> = ({ isDarkMode }) => {
  return (
    <main>
      <Hero isDarkMode={isDarkMode} />
      <SummitSlider/>
      {/* <EventsSection /> */}
      <StatsSection />
      <GCCOneSection/>
      <TrustedBySection />
      {/* <CoreEngineSection /> */}
      <RecognitionSection />
      <ForumsSection />
      <IntelligenceFeedSection />
      <MarketPulseSection />
      <CommuneSection />
    </main>
  );
};

export default Home;