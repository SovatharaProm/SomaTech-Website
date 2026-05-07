"use client";

import { Cpu, Globe, Code2, BarChart3, Smartphone, Layers } from "lucide-react";

const items = [
  { icon: Smartphone, text: "Mobile Development" },
  { icon: Globe, text: "Web Platforms" },
  { icon: Cpu, text: "AI Solutions" },
  { icon: Code2, text: "Developer Tools" },
  { icon: BarChart3, text: "Data Analytics" },
  { icon: Layers, text: "Digital Transformation" },
  { icon: Smartphone, text: "React Native" },
  { icon: Globe, text: "Next.js" },
  { icon: Cpu, text: "Machine Learning" },
  { icon: Code2, text: "TypeScript" },
  { icon: BarChart3, text: "Business Intelligence" },
  { icon: Layers, text: "Cloud Architecture" },
];

export default function MarqueeTicker() {
  return (
    <div
      className="relative overflow-hidden py-4"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(19, 28, 43, 0.6)",
      }}
    >
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #0d1420, transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #0d1420, transparent)" }}
      />

      <div
        className="flex gap-10 whitespace-nowrap"
        style={{ animation: "marquee 32s linear infinite", width: "max-content" }}
      >
        {[...items, ...items].map((item, i) => {
          const Icon = item.icon;
          return (
            <span
              key={i}
              className="inline-flex items-center gap-2.5 text-slate-400 text-sm font-medium"
            >
              <Icon size={14} className="text-[#60a5fa] shrink-0" />
              {item.text}
              <span className="ml-4 text-slate-600">·</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
