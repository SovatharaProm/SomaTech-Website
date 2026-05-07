"use client";

import { useEffect, useRef } from "react";
import { Target, Eye, Compass } from "lucide-react";

function useReveal(delay = 0, threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (!el) return;
            el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, delay);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay, threshold]);
  return ref;
}

const pillars = [
  {
    icon: Target,
    label: "Mission",
    color: "#60a5fa",
    colorRgb: "96,165,250",
    headline: "Democratize Technology",
    body: "We believe powerful technology should not be exclusive to those with the largest budgets. Our mission is to build and deliver quality digital products and knowledge that empower individuals, startups, and enterprises across Southeast Asia to compete on the global stage.",
  },
  {
    icon: Eye,
    label: "Vision",
    color: "#93c5fd",
    colorRgb: "147,197,253",
    headline: "A Connected, Innovative Region",
    body: "We envision a Southeast Asia where local talent drives world-class technology — where communities are empowered by digital tools, where innovation flourishes at every level, and where SomaTech stands as a trusted partner in that transformation.",
  },
  {
    icon: Compass,
    label: "Values",
    color: "#bfdbfe",
    colorRgb: "191,219,254",
    headline: "Integrity. Craft. Impact.",
    body: "We hold ourselves to a high standard: honest in how we work, excellent in what we build, and deliberate about the impact we create. We iterate, we listen, and we never ship something we would not use ourselves.",
  },
];

const milestones = [
  { year: "2024", title: "Founded", desc: "SomaTech begins — sharing tech content and building community across the region." },
  { year: "2025", title: "First Products", desc: "Launching our first suite of digital tools, mobile apps, and web platforms." },
  { year: "2026", title: "Regional Expansion", desc: "Growing our reach across Southeast Asia with local partners and markets." },
  { year: "2027+", title: "Platform Scale", desc: "Building the infrastructure layer that powers the next generation of products." },
];

function PillarCard({
  icon: Icon,
  label,
  color,
  colorRgb,
  headline,
  body,
  delay,
}: (typeof pillars)[0] & { delay: number }) {
  const ref = useReveal(delay);
  return (
    <div
      ref={ref}
      className="card-glow rounded-2xl p-8 flex flex-col gap-5 relative overflow-hidden"
      style={{ background: "#131c2b" }}
    >
      <div
        className="absolute top-0 left-8 right-8 h-px"
        style={{ background: `linear-gradient(90deg, transparent, rgba(${colorRgb},0.45), transparent)` }}
      />
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center"
        style={{
          background: `rgba(${colorRgb},0.09)`,
          border: `1px solid rgba(${colorRgb},0.22)`,
        }}
      >
        <Icon size={22} style={{ color }} />
      </div>
      <div>
        <div className="text-xs tracking-widest uppercase font-semibold mb-2" style={{ color }}>
          {label}
        </div>
        <h3 className="text-white font-bold text-xl mb-3">{headline}</h3>
        {/* slate-300 for readability */}
        <p className="text-slate-300 text-sm leading-relaxed">{body}</p>
      </div>
    </div>
  );
}

function MilestoneItem({
  year,
  title,
  desc,
  isRight,
  delay,
}: (typeof milestones)[0] & { isRight: boolean; delay: number }) {
  const ref = useReveal(delay);
  return (
    <div
      ref={ref}
      className={`relative flex items-start gap-6 md:gap-0 ${isRight ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      <div className="absolute left-4 md:left-1/2 w-2.5 h-2.5 rounded-full bg-[#60a5fa] border-2 border-[#0d1420] shadow-[0_0_10px_rgba(96,165,250,0.55)] -translate-x-1/2 mt-1.5" />
      <div
        className={`ml-10 md:ml-0 md:w-[44%] ${
          isRight ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left md:ml-auto"
        }`}
      >
        <div className="text-[#60a5fa] text-xs tracking-widest uppercase font-semibold mb-1">{year}</div>
        <div className="text-white font-semibold mb-1">{title}</div>
        {/* slate-400 — visible enough at this secondary level */}
        <div className="text-slate-400 text-sm leading-relaxed">{desc}</div>
      </div>
    </div>
  );
}

export default function MissionSection() {
  const headingRef = useReveal();

  return (
    <section id="mission" className="relative py-28 md:py-40 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 45%, rgba(96,165,250,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div ref={headingRef} className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#60a5fa]" />
            <span className="text-[#60a5fa] text-xs tracking-widest uppercase font-medium">Our Direction</span>
            <span className="w-8 h-px bg-[#60a5fa]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            What We Are{" "}
            <span className="gradient-text">Trying to Achieve</span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            Beyond code and products — we are building a movement. A future where
            technology empowers every person in our region.
          </p>
        </div>

        {/* Pillar cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-24">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.label} {...pillar} delay={i * 100} />
          ))}
        </div>

        {/* Roadmap */}
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-slate-400 text-xs tracking-widest uppercase font-medium mb-12">
            Our Roadmap
          </p>
          <div className="relative">
            <div
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, rgba(96,165,250,0.35) 20%, rgba(96,165,250,0.35) 80%, transparent)",
                transform: "translateX(-50%)",
              }}
            />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <MilestoneItem key={m.year} {...m} isRight={i % 2 === 0} delay={i * 110} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
