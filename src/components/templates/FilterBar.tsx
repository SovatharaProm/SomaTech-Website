"use client";

import { Tag, Flag, Globe, X } from "lucide-react";
import { useLang, ui } from "@/lib/i18n";
import {
  categories,
  styleTags,
  goals,
  langTags,
  type CategoryId,
  type StyleId,
  type GoalId,
  type LangTagId,
} from "@/lib/demos";

export type Filters = {
  category: CategoryId | "all";
  style: StyleId | null;
  goal: GoalId | null;
  langTag: LangTagId | null;
};

const chipBase =
  "px-3.5 py-1.5 rounded-full text-xs font-medium border transition-colors cursor-pointer whitespace-nowrap";
const chipOff =
  "bg-white/5 border-white/10 text-slate-300 hover:border-[rgba(96,165,250,0.5)] hover:text-white";
const chipOn = "bg-[#60a5fa] border-[#60a5fa] text-[#0d1420] font-semibold";

function Row({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-slate-500 mr-1 shrink-0">
        <Icon size={13} />
        {label}
      </span>
      {children}
    </div>
  );
}

export default function FilterBar({
  filters,
  onChange,
}: {
  filters: Filters;
  onChange: (f: Filters) => void;
}) {
  const { t } = useLang();

  const hasActive =
    filters.category !== "all" ||
    filters.style !== null ||
    filters.goal !== null ||
    filters.langTag !== null;

  return (
    <div className="card-glow rounded-2xl p-5 md:p-6 space-y-4" style={{ background: "#131c2b" }}>
      <Row icon={Tag} label={t(ui.category)}>
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => onChange({ ...filters, category: c.id })}
            className={`${chipBase} ${filters.category === c.id ? chipOn : chipOff}`}
          >
            {t(c.label)}
          </button>
        ))}
      </Row>

      <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
        <Row icon={Tag} label={t(ui.style)}>
          {styleTags.map((s) => (
            <button
              key={s.id}
              onClick={() =>
                onChange({ ...filters, style: filters.style === s.id ? null : s.id })
              }
              className={`${chipBase} ${filters.style === s.id ? chipOn : chipOff}`}
            >
              {t(s.label)}
            </button>
          ))}
        </Row>

        <Row icon={Flag} label={t(ui.goal)}>
          {goals.map((g) => (
            <button
              key={g.id}
              onClick={() =>
                onChange({ ...filters, goal: filters.goal === g.id ? null : g.id })
              }
              className={`${chipBase} ${filters.goal === g.id ? chipOn : chipOff}`}
            >
              {t(g.label)}
            </button>
          ))}
        </Row>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <Row icon={Globe} label={t(ui.language)}>
          {langTags.map((l) => (
            <button
              key={l.id}
              onClick={() =>
                onChange({ ...filters, langTag: filters.langTag === l.id ? null : l.id })
              }
              className={`${chipBase} ${filters.langTag === l.id ? chipOn : chipOff}`}
            >
              {t(l.label)}
            </button>
          ))}
        </Row>

        {hasActive && (
          <button
            onClick={() =>
              onChange({ category: "all", style: null, goal: null, langTag: null })
            }
            className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-[#93c5fd] transition-colors"
          >
            <X size={13} />
            {t(ui.clearFilters)}
          </button>
        )}
      </div>
    </div>
  );
}
