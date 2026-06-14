"use client";

import { useEffect, useRef } from "react";
import {
  FileCheck2,
  ClipboardList,
  ShoppingBag,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

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

type Product = {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  bestFor: string;
  accent: string;
};

const products: Product[] = [
  {
    icon: FileCheck2,
    name: "Document Approval System",
    tagline: "Paperless workflows, end-to-end.",
    description:
      "Streamline how your team requests, reviews, and approves documents — with multi-level routing, version history, and a full audit trail for every signature.",
    features: [
      "Multi-step approval workflows",
      "Role-based access & permissions",
      "Version control & audit log",
      "Email & in-app notifications",
    ],
    bestFor: "Government offices, NGOs, mid-sized enterprises",
    accent: "from-[#60a5fa] to-[#3b82f6]",
  },
  {
    icon: ClipboardList,
    name: "Survey & Questionnaire Platform",
    tagline: "From form to insight in minutes.",
    description:
      "A drag-and-drop survey builder paired with real-time analytics dashboards — designed for researchers, HR teams, and customer experience leaders who need answers, not spreadsheets.",
    features: [
      "Drag-and-drop form builder",
      "Conditional logic & branching",
      "Real-time analytics dashboard",
      "Export to CSV, Excel & PDF",
    ],
    bestFor: "Research firms, HR teams, customer experience leads",
    accent: "from-[#a78bfa] to-[#7c3aed]",
  },
  {
    icon: ShoppingBag,
    name: "Online Product Catalog",
    tagline: "Showcase your products, close on Messenger.",
    description:
      "A clean, mobile-first website that puts your products online — fully managed from an admin and super-admin dashboard. Customers browse, then reach out through Facebook Messenger or your preferred channel to order.",
    features: [
      "Admin & super-admin product management",
      "Category, pricing & image controls",
      "Direct-to-Messenger contact buttons",
      "Mobile-first, fast-loading storefront",
    ],
    bestFor: "Boutique shops, F&B brands, independent sellers",
    accent: "from-[#34d399] to-[#10b981]",
  },
  {
    icon: Users,
    name: "Staff Management System",
    tagline: "Your whole team in one place.",
    description:
      "Centralize employee records, attendance, leave requests, and performance — giving HR and managers the visibility they need to lead a healthy, productive workforce.",
    features: [
      "Employee profiles & records",
      "Attendance & leave management",
      "Payroll-ready reporting",
      "Performance & review tracking",
    ],
    bestFor: "SMEs, hospitality, retail chains",
    accent: "from-[#fbbf24] to-[#f59e0b]",
  },
];

function ProductCard({ product, delay }: { product: Product; delay: number }) {
  const ref = useReveal(delay);
  const Icon = product.icon;

  return (
    <div
      ref={ref}
      className="card-glow rounded-2xl p-7 md:p-8 flex flex-col gap-5 group relative overflow-hidden"
      style={{ background: "#131c2b" }}
    >
      {/* Top accent bar */}
      <div
        className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${product.accent} opacity-60`}
      />

      <div className="flex items-start gap-4">
        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.accent} bg-opacity-10 flex items-center justify-center shrink-0`}
          style={{ background: "rgba(96,165,250,0.1)", border: "1px solid rgba(96,165,250,0.18)" }}
        >
          <Icon size={22} className="text-[#60a5fa]" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-semibold text-lg md:text-xl leading-snug mb-1.5">
            {product.name}
          </h3>
          <p className="text-[#93c5fd] text-sm leading-snug">{product.tagline}</p>
        </div>
      </div>

      <p className="text-slate-300 text-sm leading-relaxed">{product.description}</p>

      <ul className="space-y-2.5">
        {product.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-300">
            <CheckCircle2
              size={16}
              className="text-[#60a5fa] shrink-0 mt-0.5"
              strokeWidth={2}
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div
        className="mt-auto pt-5 border-t flex items-center justify-between gap-3"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="min-w-0">
          <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">
            Best for
          </div>
          <div className="text-xs text-slate-400 truncate">{product.bestFor}</div>
        </div>
        <a href="#contact" className="shrink-0">
          <Button
            size="sm"
            variant="outline"
            className="border-white/15 text-white hover:border-[rgba(96,165,250,0.5)] bg-white/5 hover:bg-white/10 text-xs tracking-wide"
          >
            Request Demo
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </Button>
        </a>
      </div>
    </div>
  );
}

export default function ProductsSection() {
  const headingRef = useReveal();
  const ctaRef = useReveal(120);

  return (
    <section id="products" className="relative py-28 md:py-36 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 92% 40%, rgba(96,165,250,0.05) 0%, transparent 65%)",
        }}
      />

      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={headingRef} className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#60a5fa]" />
            <span className="text-[#60a5fa] text-xs tracking-widest uppercase font-medium">
              Our Products
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            Battle-tested Systems,<br />
            <span className="gradient-text">Now Available as SaaS</span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            Each of these platforms has been built and proven in production with real clients.
            We&apos;re now offering them as ready-to-deploy SaaS solutions — so you can launch in
            days, not months.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.name} product={product} delay={i * 90} />
          ))}
        </div>

        <div
          ref={ctaRef}
          className="mt-16 md:mt-20 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          style={{
            background:
              "linear-gradient(135deg, rgba(96,165,250,0.08) 0%, rgba(96,165,250,0.02) 100%)",
            border: "1px solid rgba(96,165,250,0.18)",
          }}
        >
          <div className="max-w-xl">
            <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">
              Need something custom?
            </h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Every product can be tailored to your workflows, branding, and integrations.
              Tell us what you need — we&apos;ll show you what&apos;s possible.
            </p>
          </div>
          <a href="#contact" className="shrink-0">
            <Button
              size="lg"
              className="bg-[#60a5fa] hover:bg-[#3b82f6] text-[#0d1420] font-semibold px-8 h-12 tracking-wide transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35"
            >
              Talk to Our Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)",
        }}
      />
    </section>
  );
}
