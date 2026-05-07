"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Users, Lightbulb, Globe } from "lucide-react";

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(28px)";
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = "opacity 0.85s ease, transform 0.85s ease";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

const pillars = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    body: "We challenge convention, prototype fast, and ship products that genuinely solve problems.",
  },
  {
    icon: Users,
    title: "People-Centered",
    body: "Every line of code serves a human being. We design with empathy and build with purpose.",
  },
  {
    icon: Globe,
    title: "Regional Impact",
    body: "Rooted in Southeast Asia, we create solutions that resonate with local realities and global ambitions.",
  },
];

const tags = ["Product Design", "Mobile Apps", "Web Platforms", "Developer Tools"];

export default function AboutSection() {
  const leftRef = useReveal();
  const rightRef = useReveal(0.08);

  return (
    <section id="about" className="relative py-28 md:py-36 overflow-hidden">
      {/* Soft background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 60% at 85% 40%, rgba(96,165,250,0.06) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-[#60a5fa]" />
          <span className="text-[#60a5fa] text-xs tracking-widest uppercase font-medium">About Us</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div ref={leftRef}>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              We are <span className="gradient-text">SomaTech</span>
            </h2>

            {/* Body text upgraded: slate-300 instead of slate-400 */}
            <div className="space-y-5 text-slate-300 text-base md:text-[17px] leading-relaxed">
              <p>
                SomaTech is a technology startup born from a belief that great software should
                be accessible, purposeful, and impactful. We are a small but ambitious team of
                builders, designers, and thinkers.
              </p>
              <p>
                We started by sharing knowledge — posting tech content, tutorials, and insights
                to help developers grow. Now we are evolving that mission into tangible products,
                tools, platforms, and digital experiences that make a real difference.
              </p>
              <p>
                We are deliberate. And we are building for the long term.
              </p>
            </div>

            <div className="accent-line my-8 w-32" />

            <div className="flex flex-wrap gap-2.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-[#93c5fd] border border-[rgba(96,165,250,0.25)] bg-[rgba(96,165,250,0.06)] rounded-full px-4 py-1.5 tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div ref={rightRef} className="space-y-4">
            {/* Logo card */}
            <div
              className="relative rounded-2xl overflow-hidden flex items-center justify-center mb-6"
              style={{
                background: "#131c2b",
                border: "1px solid rgba(255,255,255,0.1)",
                height: "190px",
              }}
            >
              {/* Subtle dot grid */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: "radial-gradient(rgba(96,165,250,0.08) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="relative animate-float">
                <Image
                  src="/somatech-logo.jpg"
                  alt="SomaTech"
                  width={240}
                  height={92}
                  className="object-contain rounded-xl"
                />
              </div>
            </div>

            {/* Pillar cards */}
            {pillars.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="card-glow rounded-xl p-5 flex items-start gap-4"
                style={{ background: "#131c2b" }}
              >
                <div className="w-10 h-10 rounded-lg bg-[rgba(96,165,250,0.1)] border border-[rgba(96,165,250,0.2)] flex items-center justify-center shrink-0 mt-0.5">
                  <Icon size={18} className="text-[#60a5fa]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 text-sm">{title}</h4>
                  {/* Upgraded from slate-500 to slate-300 */}
                  <p className="text-slate-300 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
