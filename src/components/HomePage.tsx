"use client";

import { useState } from "react";
import { LangProvider, useLang } from "@/lib/i18n";
import { packages, type Demo, type Package } from "@/lib/demos";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeTicker from "@/components/MarqueeTicker";
import AboutSection from "@/components/AboutSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import ProductsSection from "@/components/ProductsSection";
import TemplatesSection from "@/components/templates/TemplatesSection";
import PricingSection from "@/components/templates/PricingSection";
import MissionSection from "@/components/MissionSection";
import ContactSection, { type InquiryPrefill } from "@/components/ContactSection";
import Footer from "@/components/Footer";

function HomeBody() {
  const { lang } = useLang();
  const [prefill, setPrefill] = useState<InquiryPrefill>({});

  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  const handleRequestDemo = (demo: Demo) => {
    setPrefill((p) => ({ ...p, demo: demo.name.en }));
    scrollToContact();
  };

  const handleChoosePackage = (id: Package["id"]) => {
    const pkg = packages.find((p) => p.id === id);
    if (pkg) setPrefill((p) => ({ ...p, pkg: pkg.name.en }));
    scrollToContact();
  };

  return (
    <main
      className={`flex flex-col min-h-screen bg-[#0d1420] ${lang === "km" ? "lang-km" : ""}`}
    >
      <Navbar />
      <HeroSection />
      <MarqueeTicker />
      <AboutSection />
      <WhatWeDoSection />
      <ProductsSection />
      <TemplatesSection onRequest={handleRequestDemo} />
      <PricingSection onChoose={handleChoosePackage} />
      <MissionSection />
      <ContactSection prefill={prefill} />
      <Footer />
    </main>
  );
}

export default function HomePage() {
  return (
    <LangProvider>
      <HomeBody />
    </LangProvider>
  );
}
