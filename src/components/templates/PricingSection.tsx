"use client";

import { Rocket, Briefcase, LayoutGrid, CheckCircle2, Clock } from "lucide-react";
import { useLang, ui } from "@/lib/i18n";
import { packages, type Package } from "@/lib/demos";

const icons = { starter: Rocket, pro: Briefcase, promax: LayoutGrid } as const;

function PackageCard({
  pkg,
  onChoose,
}: {
  pkg: Package;
  onChoose: (id: Package["id"]) => void;
}) {
  const { t } = useLang();
  const Icon = icons[pkg.id];

  return (
    <div
      className={`relative rounded-2xl p-7 flex flex-col card-glow ${
        pkg.popular ? "!border-[rgba(96,165,250,0.55)]" : ""
      }`}
      style={{ background: "#131c2b" }}
    >
      {pkg.popular && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#60a5fa] text-[#0d1420] text-[11px] font-bold uppercase tracking-wider whitespace-nowrap">
          {t(ui.mostPopular)}
        </span>
      )}

      <div className="w-12 h-12 rounded-xl bg-[rgba(96,165,250,0.09)] border border-[rgba(96,165,250,0.18)] flex items-center justify-center mb-5">
        <Icon size={20} className="text-[#60a5fa]" />
      </div>

      <h3 className="text-xl font-bold text-white mb-2">{t(pkg.name)}</h3>
      <p className="text-sm text-slate-300 leading-relaxed mb-5">{t(pkg.description)}</p>

      <div className="text-4xl font-extrabold text-white mb-2">${pkg.price}</div>
      <div className="flex items-center gap-1.5 text-xs font-semibold text-[#93c5fd] mb-6">
        <Clock size={13} />
        {t(pkg.delivery)}
      </div>

      <ul className="space-y-3 mb-8">
        {pkg.features.map((f) => (
          <li
            key={f.en}
            className="flex items-start gap-2.5 text-sm text-slate-300 pb-3 border-b border-white/5 last:border-0 last:pb-0"
          >
            <CheckCircle2 size={15} className="text-[#60a5fa] shrink-0 mt-0.5" />
            <span>{t(f)}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => onChoose(pkg.id)}
        className={`mt-auto h-11 rounded-xl text-sm font-bold transition-colors cursor-pointer ${
          pkg.popular
            ? "bg-[#60a5fa] hover:bg-[#3b82f6] text-[#0d1420] shadow-lg shadow-blue-500/20"
            : "border border-white/15 text-white bg-white/5 hover:bg-white/10 hover:border-[rgba(96,165,250,0.5)]"
        }`}
      >
        {t(ui.choose)} {pkg.name.en.replace(" Website", "")}
      </button>
    </div>
  );
}

export default function PricingSection({
  onChoose,
}: {
  onChoose: (id: Package["id"]) => void;
}) {
  const { t } = useLang();

  return (
    <section id="pricing" className="relative py-28 md:py-36 overflow-hidden scroll-mt-16">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 92% 50%, rgba(96,165,250,0.05) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#60a5fa]" />
            <span className="text-[#60a5fa] text-xs tracking-widest uppercase font-medium">
              {t(ui.pricingTag)}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            <span className="gradient-text">{t(ui.pricingTitle)}</span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            {t(ui.pricingSubtitle)}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} onChoose={onChoose} />
          ))}
        </div>
      </div>
    </section>
  );
}
