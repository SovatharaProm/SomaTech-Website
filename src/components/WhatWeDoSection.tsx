"use client";

import { useEffect, useRef } from "react";
import { Smartphone, Globe, BarChart3, Code2, Cpu, Shield } from "lucide-react";

function useReveal(delay = 0) {
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
            el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, delay);
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

const services = [
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Cross-platform mobile apps built with React Native and Expo — crafted for performance, usability, and a great user experience on iOS and Android.",
    tags: ["React Native", "Expo", "iOS & Android"],
  },
  {
    icon: Globe,
    title: "Web Platforms & SaaS",
    description:
      "From marketing sites to full-stack applications, we deliver modern web platforms built on Next.js with scalable cloud infrastructure.",
    tags: ["Next.js", "TypeScript", "Cloud"],
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description:
      "We turn raw data into actionable insight — building dashboards, reporting systems, and analytics tools that help you make smarter decisions.",
    tags: ["Analytics", "Dashboards", "BI"],
  },
  {
    icon: Code2,
    title: "Developer Tools & APIs",
    description:
      "Robust APIs, SDKs, and developer tooling designed for reliability and scale — the infrastructure that powers great products.",
    tags: ["REST APIs", "SDKs", "DevEx"],
  },
  {
    icon: Cpu,
    title: "AI-Powered Solutions",
    description:
      "We integrate intelligent automation and machine learning into products — from smart recommendations to natural language interfaces.",
    tags: ["AI Integration", "Automation", "LLM"],
  },
  {
    icon: Shield,
    title: "Digital Transformation",
    description:
      "We partner with businesses to modernize operations, adopt the right technologies, and build a digital foundation ready to scale.",
    tags: ["Strategy", "Architecture", "Consulting"],
  },
];

function ServiceCard({
  icon: Icon,
  title,
  description,
  tags,
  delay,
}: (typeof services)[0] & { delay: number }) {
  const ref = useReveal(delay);
  return (
    <div
      ref={ref}
      className="card-glow rounded-2xl p-7 flex flex-col gap-4 group"
      style={{ background: "#131c2b" }}
    >
      <div className="w-11 h-11 rounded-xl bg-[rgba(96,165,250,0.1)] border border-[rgba(96,165,250,0.18)] flex items-center justify-center group-hover:bg-[rgba(96,165,250,0.16)] transition-colors duration-300">
        <Icon size={20} className="text-[#60a5fa]" />
      </div>
      <h3 className="text-white font-semibold text-[17px] leading-snug">{title}</h3>
      {/* Upgraded from slate-400 to slate-300 */}
      <p className="text-slate-300 text-sm leading-relaxed flex-1">{description}</p>
      <div className="flex flex-wrap gap-2 pt-1">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-[#93c5fd] bg-[rgba(96,165,250,0.07)] border border-[rgba(96,165,250,0.18)] rounded-full px-3 py-1 tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function WhatWeDoSection() {
  const headingRef = useReveal();

  return (
    <section id="what-we-do" className="relative py-28 md:py-36 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 8% 50%, rgba(96,165,250,0.05) 0%, transparent 65%)",
        }}
      />

      {/* Section separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={headingRef} className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#60a5fa]" />
            <span className="text-[#60a5fa] text-xs tracking-widest uppercase font-medium">What We Do</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            Products &amp; Services<br />
            <span className="gradient-text">We Deliver</span>
          </h2>
          {/* slate-300 for body copy */}
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            We are builders at heart. From mobile apps to enterprise platforms, we create
            digital solutions designed to scale and built to last.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <ServiceCard key={svc.title} {...svc} delay={i * 80} />
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }}
      />
    </section>
  );
}
