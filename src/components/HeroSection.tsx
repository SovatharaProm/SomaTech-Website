"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CircuitBackground from "./CircuitBackground";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    const t = setTimeout(() => {
      el.style.transition = "opacity 1s ease, transform 1s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <CircuitBackground />

      <div ref={ref} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <Badge
            variant="outline"
            className="border-[rgba(96,165,250,0.4)] text-[#93c5fd] bg-[rgba(96,165,250,0.08)] px-4 py-1.5 text-xs tracking-widest uppercase font-medium"
          >
            Tech Startup — Southeast Asia
          </Badge>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[82px] font-bold leading-[1.06] tracking-tight mb-6">
          <span className="gradient-text">Smart Solutions</span>
          <br />
          <span className="text-white">for Modern Businesses</span>
        </h1>

        {/* Subheadline — upgraded from slate-400 to slate-300 */}
        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          SomaTech create intelligent products and scalable solutions that
          contribute to the success of modern businesses.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#what-we-do">
            <Button
              size="lg"
              className="bg-[#60a5fa] hover:bg-[#3b82f6] text-[#0d1420] font-semibold px-8 h-12 text-base tracking-wide transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35"
            >
              Explore What We Build
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <a href="#about">
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:border-[rgba(96,165,250,0.5)] bg-white/5 hover:bg-white/8 px-8 h-12 text-base tracking-wide transition-all duration-200"
            >
              Our Story
            </Button>
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: "2024", label: "Founded" },
            { value: "100%", label: "Community Focus" },
            { value: "Asia", label: "Our Region" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1.5">{stat.value}</div>
              <div className="text-xs text-slate-400 tracking-wider uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 animate-bounce">
        <span className="text-[11px] tracking-widest uppercase">Scroll</span>
        <ChevronDown size={15} />
      </div>
    </section>
  );
}
