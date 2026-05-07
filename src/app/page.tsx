import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeTicker from "@/components/MarqueeTicker";
import AboutSection from "@/components/AboutSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import MissionSection from "@/components/MissionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0d1420]">
      <Navbar />
      <HeroSection />
      <MarqueeTicker />
      <AboutSection />
      <WhatWeDoSection />
      <MissionSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
