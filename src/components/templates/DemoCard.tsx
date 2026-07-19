"use client";

import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useLang, ui } from "@/lib/i18n";
import { demoUrl, type Demo } from "@/lib/demos";

export default function DemoCard({
  demo,
  onRequest,
}: {
  demo: Demo;
  onRequest: (demo: Demo) => void;
}) {
  const { t } = useLang();
  const p = demo.preview;
  const url = demoUrl(demo);

  return (
    <div
      className="card-glow rounded-2xl overflow-hidden flex flex-col"
      style={{ background: "#131c2b" }}
    >
      {/* Browser mockup — click to open the live demo in a new tab */}
      <a href={url} target="_blank" className="block p-3 pb-0 group" aria-label={`${demo.name.en} live demo`}>
        <div className="rounded-xl overflow-hidden border border-white/10 group-hover:border-[rgba(96,165,250,0.45)] transition-colors">
          <div className="flex items-center gap-1.5 px-3 py-2 bg-white/10">
            <span className="w-2 h-2 rounded-full bg-[#60a5fa]" />
            <span className="w-2 h-2 rounded-full bg-[#60a5fa]/60" />
            <span className="w-2 h-2 rounded-full bg-[#60a5fa]/30" />
            <span className="ml-2 h-1.5 flex-1 max-w-28 rounded-full bg-white/15" />
          </div>
          <div className="aspect-[16/10] p-4 flex flex-col" style={{ background: p.bg }}>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold tracking-wide truncate" style={{ color: p.text }}>
                {p.brand}
              </span>
              <span className="flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="w-5 h-1 rounded-full opacity-40"
                    style={{ background: p.text }}
                  />
                ))}
              </span>
            </div>
            <div className="mt-auto">
              <div
                className="font-extrabold leading-snug text-base md:text-lg max-w-[16rem]"
                style={{ color: p.text }}
              >
                {p.headline}
              </div>
              <span
                className="inline-block mt-3 px-3 py-1 rounded-full text-[10px] font-semibold"
                style={{ background: p.accent, color: p.accentText }}
              >
                {p.cta}
              </span>
            </div>
          </div>
        </div>
      </a>

      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[rgba(96,165,250,0.09)] text-[#93c5fd] border border-[rgba(96,165,250,0.18)]">
            {t(demo.categoryLabel)}
          </span>
          <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white/5 text-slate-300 border border-white/10">
            {t(demo.styleLabel)}
          </span>
        </div>

        {/* Price */}
        <div className="flex flex-wrap gap-2">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/25">
            {t(ui.from)} $99
          </span>
        </div>

        <h3 className="text-lg font-bold text-white leading-snug">{t(demo.name)}</h3>
        <p className="text-sm text-slate-300 leading-relaxed">{t(demo.description)}</p>
        <p className="text-xs text-slate-400 leading-relaxed">
          <span className="font-bold text-slate-200">{t(ui.bestFor)}</span>{" "}
          {t(demo.bestFor)}
        </p>

        <div className="mt-auto pt-4 border-t border-white/10 flex items-center gap-3">
          <a
            href={url}
            target="_blank"
            className="flex-1 h-10 rounded-xl bg-[#60a5fa] hover:bg-[#3b82f6] text-[#0d1420] text-sm font-bold inline-flex items-center justify-center gap-1.5 transition-colors"
          >
            {t(ui.liveDemo)}
            <ArrowUpRight size={14} />
          </a>
          <button
            onClick={() => onRequest(demo)}
            className="shrink-0 inline-flex items-center gap-1 text-xs font-semibold text-[#60a5fa] hover:gap-2 transition-all cursor-pointer"
          >
            {t(ui.requestThisStyle)}
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}
