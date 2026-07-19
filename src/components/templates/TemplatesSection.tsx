"use client";

import { useMemo, useState } from "react";
import { Sparkles } from "lucide-react";
import { useLang, ui } from "@/lib/i18n";
import { demos, type Demo } from "@/lib/demos";
import FilterBar, { type Filters } from "./FilterBar";
import DemoCard from "./DemoCard";

export default function TemplatesSection({
  onRequest,
}: {
  onRequest: (demo: Demo) => void;
}) {
  const { t } = useLang();
  const [filters, setFilters] = useState<Filters>({
    category: "all",
    style: null,
    goal: null,
    langTag: null,
  });

  const filtered = useMemo(
    () =>
      demos.filter(
        (d) =>
          (filters.category === "all" || d.category === filters.category) &&
          (filters.style === null || d.styles.includes(filters.style)) &&
          (filters.goal === null || d.goal === filters.goal) &&
          (filters.langTag === null || d.lang === filters.langTag)
      ),
    [filters]
  );

  return (
    <section id="templates" className="relative py-28 md:py-36 overflow-hidden scroll-mt-16">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 8% 30%, rgba(96,165,250,0.05) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#60a5fa]" />
              <span className="text-[#60a5fa] text-xs tracking-widest uppercase font-medium">
                {t(ui.heroTag)}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              <span className="gradient-text">{t(ui.heroTitle)}</span>
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              {t(ui.heroSubtitle)}
            </p>
          </div>
          <div className="text-sm font-medium text-slate-400 whitespace-nowrap">
            {demos.length} {t(ui.stylesUnit)} · {demos.length} {t(ui.liveUnit)}
          </div>
        </div>

        <div
          className="card-glow rounded-2xl p-5 md:p-6 mb-6 flex items-start gap-3"
          style={{ background: "#131c2b" }}
        >
          <Sparkles size={18} className="text-[#60a5fa] shrink-0 mt-0.5" />
          <p className="text-sm text-slate-300 leading-relaxed">{t(ui.banner)}</p>
        </div>

        <FilterBar filters={filters} onChange={setFilters} />

        {filtered.length === 0 ? (
          <div className="py-24 text-center text-slate-400 text-sm">{t(ui.noResults)}</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {filtered.map((demo) => (
              <DemoCard key={demo.id} demo={demo} onRequest={onRequest} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
