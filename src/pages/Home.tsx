import React from "react";
import Hero from "../components/home/Hero"; 
import StatsSection from "../components/home/AboutSection";
import TrustedBySection from "../components/home/TrustedBySection";
import ForumsSection from "../components/home/ForumSection";
import RecognitionSection from "../components/home/RecognitionSection";
import IntelligenceFeedSection from "../components/home/IntelligenceFeed";
import MarketPulseSection from "../components/home/MarketPulseSection";
import CommuneSection from "../components/home/CommuneSection";
import SummitSlider from "../components/home/SummitSlider";
import GCCOneSection from "../components/home/GCConeSection";
import WhatsNew from "../components/home/WhatsNew";
import { AwardSection } from "../components/home/AwardSection";


interface HomeProps {
  isDarkMode: boolean;
}

const Home: React.FC<HomeProps> = ({ isDarkMode }) => {
  return (
    <main>
      <Hero isDarkMode={isDarkMode} />
      <WhatsNew/>
      <SummitSlider/>
      
      {/* <EventsSection /> */}
      <StatsSection />
      <TrustedBySection isDarkMode={isDarkMode}/>
      <GCCOneSection/>
      {/* <CoreEngineSection /> */}
      <RecognitionSection />
      <ForumsSection />
      <AwardSection/>
      <IntelligenceFeedSection />
      <MarketPulseSection />
      <CommuneSection />
    </main>
  );
};

export default Home;