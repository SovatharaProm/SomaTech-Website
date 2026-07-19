"use client";

import Link from "next/link";
import { Reveal, Counter, ReviewSlider, BookingForm } from "@/lib/demo-ui";
import { useDemoLang, type Txt } from "@/lib/demo-theme";

/*
 * Professional, flat (no-gradient), fully light/dark + EN/KH demo kit.
 * Every text prop accepts a plain string or { en, km } and is resolved
 * against the demo's current language.
 */

const soft = (pct = 12) => `color-mix(in srgb, var(--accent) ${pct}%, transparent)`;

/** Inline bilingual text. */
export function T({ children }: { children: Txt }) {
  const { t } = useDemoLang();
  return <>{t(children)}</>;
}

/** Centered bilingual prose block. */
export function Prose({ children }: { children: Txt }) {
  const { t } = useDemoLang();
  return (
    <Reveal className="max-w-3xl mx-auto text-center text-slate-600 dark:text-slate-400 leading-relaxed">
      {t(children)}
    </Reveal>
  );
}

export function DemoNav({
  brand,
  links,
  cta,
  ctaHref,
}: {
  brand: React.ReactNode;
  links: { label: Txt; href: string }[];
  cta: Txt;
  ctaHref: string;
}) {
  const { t } = useDemoLang();
  return (
    <header className="sticky top-0 z-40 bg-white/85 dark:bg-slate-950/85 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <span className="font-extrabold text-lg flex items-center gap-2">{brand}</span>
        <div className="hidden md:flex items-center gap-7 text-sm text-slate-600 dark:text-slate-400">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[var(--accent)] transition-colors">
              {t(l.label)}
            </a>
          ))}
        </div>
        <a
          href={ctaHref}
          target={ctaHref.startsWith("http") ? "_blank" : undefined}
          className="px-4 py-2 rounded-full text-sm font-bold text-[var(--accent-fg)] bg-[var(--accent)] hover:opacity-90 transition-opacity"
        >
          {t(cta)}
        </a>
      </nav>
    </header>
  );
}

type Stat = { value: number; suffix?: string; label: Txt };
type HeroProps = {
  variant?: "split" | "center" | "bold";
  eyebrow: Txt;
  title: Txt;
  titleAccent?: Txt;
  subtitle: Txt;
  subtitleAlt?: Txt;
  primary: { label: Txt; href: string };
  secondary?: { label: Txt; href: string };
  stats?: Stat[];
};

function PrimaryBtn({ cta }: { cta: { label: Txt; href: string } }) {
  const { t } = useDemoLang();
  return (
    <a
      href={cta.href}
      target={cta.href.startsWith("http") ? "_blank" : undefined}
      className="px-7 py-3.5 rounded-full font-bold text-[var(--accent-fg)] bg-[var(--accent)] hover:opacity-90 transition-opacity"
    >
      {t(cta.label)}
    </a>
  );
}
function SecondaryBtn({ cta }: { cta: { label: Txt; href: string } }) {
  const { t } = useDemoLang();
  return (
    <a
      href={cta.href}
      className="px-7 py-3.5 rounded-full font-bold border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
    >
      {t(cta.label)}
    </a>
  );
}
function StatRow({ stats, center }: { stats: Stat[]; center?: boolean }) {
  const { t } = useDemoLang();
  return (
    <div className={`flex flex-wrap gap-x-10 gap-y-5 ${center ? "justify-center" : ""}`}>
      {stats.map((s) => (
        <div key={typeof s.label === "string" ? s.label : s.label.en} className={center ? "text-center" : ""}>
          <Counter to={s.value} suffix={s.suffix} className="block text-3xl font-extrabold text-[var(--accent)]" />
          <div className="text-xs text-slate-500 dark:text-slate-500 mt-1 uppercase tracking-wide">{t(s.label)}</div>
        </div>
      ))}
    </div>
  );
}

export function Hero(props: HeroProps) {
  const { variant = "split" } = props;
  const { t } = useDemoLang();

  // Centered editorial hero — wellness, dining, hospitality
  if (variant === "center") {
    return (
      <section className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-5 py-24 md:py-36 text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-3 mb-7">
              <span className="w-8 h-px bg-[var(--accent)]" />
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[var(--accent)]">{t(props.eyebrow)}</span>
              <span className="w-8 h-px bg-[var(--accent)]" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
              {t(props.title)} {props.titleAccent && <span className="text-[var(--accent)]">{t(props.titleAccent)}</span>}
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl mx-auto mb-2">{t(props.subtitle)}</p>
            {props.subtitleAlt && <p className="text-slate-500 dark:text-slate-500 text-sm mb-9">{t(props.subtitleAlt)}</p>}
            <div className="flex flex-wrap justify-center gap-3 mb-14">
              <PrimaryBtn cta={props.primary} />
              {props.secondary && <SecondaryBtn cta={props.secondary} />}
            </div>
          </Reveal>
          {props.stats && (
            <Reveal delay={150} className="pt-10 border-t border-slate-200 dark:border-slate-800">
              <StatRow stats={props.stats} center />
            </Reveal>
          )}
        </div>
      </section>
    );
  }

  // Bold full-bleed hero — auto, gym, creative
  if (variant === "bold") {
    return (
      <section className="bg-slate-900 text-white dark:bg-black border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-5 py-24 md:py-36">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-1 rounded bg-[var(--accent)]" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-[var(--accent)]">{t(props.eyebrow)}</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black uppercase leading-[0.95] mb-6 max-w-3xl">
              {t(props.title)} {props.titleAccent && <span className="text-[var(--accent)]">{t(props.titleAccent)}</span>}
            </h1>
            <p className="text-slate-300 text-lg max-w-lg mb-2">{t(props.subtitle)}</p>
            {props.subtitleAlt && <p className="text-slate-500 text-sm mb-9">{t(props.subtitleAlt)}</p>}
            <div className="flex flex-wrap gap-3 mb-14">
              <PrimaryBtn cta={props.primary} />
              {props.secondary && (
                <a href={props.secondary.href} className="px-7 py-3.5 rounded-full font-bold border border-white/25 text-white hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors">
                  {t(props.secondary.label)}
                </a>
              )}
            </div>
          </Reveal>
          {props.stats && (
            <Reveal delay={150}>
              <StatRow stats={props.stats} />
            </Reveal>
          )}
        </div>
      </section>
    );
  }

  // Split hero with stat tiles — clinical, education, automotive listing (default)
  return (
    <section className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-5 py-20 md:py-28">
        <div className={props.stats ? "grid md:grid-cols-[1.3fr_1fr] gap-12 items-center" : ""}>
          <Reveal>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 text-[var(--accent)]" style={{ background: soft(12) }}>
              {t(props.eyebrow)}
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] mb-5">
              {t(props.title)} {props.titleAccent && <span className="text-[var(--accent)]">{t(props.titleAccent)}</span>}
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-lg mb-2">{t(props.subtitle)}</p>
            {props.subtitleAlt && <p className="text-slate-500 dark:text-slate-500 text-sm mb-8">{t(props.subtitleAlt)}</p>}
            <div className={`flex flex-wrap gap-3 ${props.subtitleAlt ? "" : "mt-6"}`}>
              <PrimaryBtn cta={props.primary} />
              {props.secondary && <SecondaryBtn cta={props.secondary} />}
            </div>
          </Reveal>
          {props.stats && (
            <Reveal delay={150} className="grid grid-cols-2 gap-4">
              {props.stats.map((s) => (
                <div key={typeof s.label === "string" ? s.label : s.label.en} className="rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-5 text-center">
                  <Counter to={s.value} suffix={s.suffix} className="block text-3xl font-extrabold text-[var(--accent)]" />
                  <div className="text-xs text-slate-500 dark:text-slate-500 mt-1">{t(s.label)}</div>
                </div>
              ))}
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

/** Editorial price list with dotted leaders — spa, dining, café menus. */
export function MenuList({ items }: { items: { name: Txt; desc?: Txt; price?: string }[] }) {
  const { t } = useDemoLang();
  return (
    <div className="max-w-3xl mx-auto">
      {items.map((m, i) => (
        <Reveal key={i} delay={i * 50}>
          <div className="flex items-baseline gap-4 py-5 border-b border-slate-200 dark:border-slate-800">
            <div className="min-w-0">
              <h3 className="font-bold text-lg">{t(m.name)}</h3>
              {m.desc && <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{t(m.desc)}</p>}
            </div>
            <span className="flex-1 border-b border-dotted border-slate-300 dark:border-slate-700 translate-y-[-3px]" />
            {m.price && <span className="text-[var(--accent)] font-bold whitespace-nowrap">{m.price}</span>}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/** A labelled group of menu rows — for categorized menus (drinks, food, etc.). */
export function MenuCategory({
  title,
  items,
}: {
  title: Txt;
  items: { name: Txt; desc?: Txt; price?: string }[];
}) {
  const { t } = useDemoLang();
  return (
    <div className="max-w-3xl mx-auto mb-12 last:mb-0">
      <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)] mb-1">{t(title)}</h3>
      <MenuList items={items} />
    </div>
  );
}

/** Checklist of everything offered / included / amenities. */
export function CheckList({ items, cols = 2 }: { items: Txt[]; cols?: 1 | 2 | 3 }) {
  const { t } = useDemoLang();
  const grid = cols === 3 ? "sm:grid-cols-3" : cols === 2 ? "sm:grid-cols-2" : "";
  return (
    <div className={`max-w-4xl mx-auto grid gap-x-8 gap-y-3.5 ${grid}`}>
      {items.map((it, i) => (
        <Reveal key={i} delay={i * 25}>
          <div className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
            <span className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[var(--accent-fg)] bg-[var(--accent)] text-[11px] shrink-0">✓</span>
            <span className="text-sm">{t(it)}</span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/** Opening hours table. */
export function HoursTable({ rows }: { rows: { day: Txt; time: Txt }[] }) {
  const { t } = useDemoLang();
  return (
    <Reveal className="max-w-md mx-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
      {rows.map((r, i) => (
        <div
          key={i}
          className="flex items-center justify-between px-5 py-3.5 text-sm border-b border-slate-100 dark:border-slate-800 last:border-0"
        >
          <span className="font-semibold">{t(r.day)}</span>
          <span className="text-slate-500 dark:text-slate-400">{t(r.time)}</span>
        </div>
      ))}
    </Reveal>
  );
}

/** Native accordion FAQ. */
export function FAQ({ items }: { items: { q: Txt; a: Txt }[] }) {
  const { t } = useDemoLang();
  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {items.map((f, i) => (
        <Reveal key={i} delay={i * 40}>
          <details className="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-5 py-4">
            <summary className="flex items-center justify-between cursor-pointer font-semibold list-none gap-4">
              {t(f.q)}
              <span className="text-[var(--accent)] text-xl leading-none transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">{t(f.a)}</p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}

/** Detailed listing card (inventory, rooms) with a spec line and price. */
export function ListingGrid({
  items,
}: {
  items: { emoji: string; name: Txt; specs: Txt; price: string; cta?: Txt; href?: string }[];
}) {
  const { t } = useDemoLang();
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((c, i) => (
        <Reveal key={i} delay={i * 60}>
          <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-[var(--accent)] hover:-translate-y-1 transition-all duration-300">
            <div className="aspect-video flex items-center justify-center text-6xl" style={{ background: soft(10) }}>
              {c.emoji}
            </div>
            <div className="p-5">
              <h3 className="font-bold">{t(c.name)}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-3">{t(c.specs)}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-extrabold text-[var(--accent)]">{c.price}</span>
                {c.cta && (
                  <a href={c.href ?? "#book"} target={c.href?.startsWith("http") ? "_blank" : undefined} className="text-xs font-bold text-[var(--accent)] hover:underline">
                    {t(c.cta)} →
                  </a>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/** Colored tile gallery (image placeholders) — hospitality, grooming, wellness. */
export function Gallery({ tiles }: { tiles: { emoji: string; label?: Txt }[] }) {
  const { t } = useDemoLang();
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {tiles.map((g, i) => (
        <Reveal key={i} delay={i * 60}>
          <div
            className="aspect-square rounded-2xl flex flex-col items-center justify-center gap-2 text-5xl border border-slate-200 dark:border-slate-800"
            style={{ background: soft(10) }}
          >
            {g.emoji}
            {g.label && <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">{t(g.label)}</span>}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/** Alternating image + text feature row — hospitality, wellness stories. */
export function FeatureRow({
  emoji,
  title,
  body,
  flip,
}: {
  emoji: string;
  title: Txt;
  body: Txt;
  flip?: boolean;
}) {
  const { t } = useDemoLang();
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center py-4">
      <Reveal className={flip ? "md:order-2" : ""}>
        <div className="aspect-[4/3] rounded-3xl flex items-center justify-center text-7xl border border-slate-200 dark:border-slate-800" style={{ background: soft(10) }}>
          {emoji}
        </div>
      </Reveal>
      <Reveal delay={120} className={flip ? "md:order-1" : ""}>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{t(title)}</h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t(body)}</p>
      </Reveal>
    </div>
  );
}

export function Section({
  id,
  alt,
  eyebrow,
  title,
  titleAlt,
  children,
}: {
  id?: string;
  alt?: boolean;
  eyebrow?: Txt;
  title?: Txt;
  titleAlt?: Txt;
  children: React.ReactNode;
}) {
  const { t } = useDemoLang();
  return (
    <section
      id={id}
      className={`scroll-mt-16 py-20 ${alt ? "bg-slate-50 dark:bg-slate-900" : "bg-white dark:bg-slate-950"}`}
    >
      <div className="max-w-6xl mx-auto px-5">
        {(eyebrow || title) && (
          <Reveal className="mb-12 text-center">
            {eyebrow && (
              <div className="text-xs font-bold tracking-widest uppercase text-[var(--accent)] mb-3">{t(eyebrow)}</div>
            )}
            {title && <h2 className="text-3xl md:text-4xl font-extrabold">{t(title)}</h2>}
            {titleAlt && <p className="text-slate-500 dark:text-slate-500 mt-2">{t(titleAlt)}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}

export function ServiceGrid({
  items,
  cols = 4,
}: {
  items: { icon: React.ReactNode; name: Txt; price?: string; desc: Txt }[];
  cols?: 3 | 4;
}) {
  const { t } = useDemoLang();
  return (
    <div className={`grid sm:grid-cols-2 ${cols === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"} gap-5`}>
      {items.map((s, i) => (
        <Reveal key={typeof s.name === "string" ? s.name : s.name.en} delay={i * 60}>
          <div className="h-full rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 hover:border-[var(--accent)] hover:-translate-y-1 transition-all duration-300">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center text-[var(--accent)] mb-4" style={{ background: soft(12) }}>
              {s.icon}
            </div>
            <div className="flex items-baseline justify-between gap-2 mb-2">
              <h3 className="font-bold">{t(s.name)}</h3>
              {s.price && <span className="text-[var(--accent)] font-extrabold text-sm">{s.price}</span>}
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{t(s.desc)}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function Steps({ items }: { items: { n: string; name: Txt; desc: Txt }[] }) {
  const { t } = useDemoLang();
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {items.map((s, i) => (
        <Reveal key={s.n} delay={i * 80}>
          <div className="h-full rounded-2xl border border-slate-200 dark:border-slate-800 p-7">
            <div className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-[var(--accent-fg)] bg-[var(--accent)] mb-4">
              {s.n}
            </div>
            <h3 className="font-bold text-lg mb-2">{t(s.name)}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{t(s.desc)}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function PricingTiers({
  tiers,
  popularLabel,
}: {
  tiers: { name: Txt; price: string; period?: Txt; features: Txt[]; popular?: boolean }[];
  popularLabel?: Txt;
}) {
  const { t } = useDemoLang();
  return (
    <div className="grid md:grid-cols-3 gap-6 items-start">
      {tiers.map((tier, i) => (
        <Reveal key={typeof tier.name === "string" ? tier.name : tier.name.en} delay={i * 80}>
          <div
            className="rounded-2xl p-7 border bg-white dark:bg-slate-900"
            style={{
              borderColor: tier.popular ? "var(--accent)" : undefined,
              boxShadow: tier.popular ? `0 10px 40px ${soft(18)}` : undefined,
            }}
          >
            {tier.popular && (
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-[var(--accent-fg)] bg-[var(--accent)] mb-4">
                {t(popularLabel ?? { en: "Most popular", km: "ពេញនិយម" })}
              </span>
            )}
            <h3 className="font-bold text-lg mb-1">{t(tier.name)}</h3>
            <div className="text-4xl font-extrabold mb-1">
              {tier.price}
              {tier.period && (
                <span className="text-sm font-semibold text-slate-500 dark:text-slate-500 ml-1">{t(tier.period)}</span>
              )}
            </div>
            <ul className="mt-6 space-y-3">
              {tier.features.map((f, j) => (
                <li key={j} className="flex gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                  <span className="text-[var(--accent)] font-bold">✓</span>
                  {t(f)}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function TeamGrid({ members }: { members: { emoji: string; name: Txt; role: Txt }[] }) {
  const { t } = useDemoLang();
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {members.map((m, i) => (
        <Reveal key={i} delay={i * 60}>
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 text-center">
            <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl" style={{ background: soft(14) }}>
              {m.emoji}
            </div>
            <h3 className="font-bold">{t(m.name)}</h3>
            <p className="text-sm text-[var(--accent)] mt-1">{t(m.role)}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function Reviews({ reviews }: { reviews: { text: Txt; name: string }[] }) {
  const { t } = useDemoLang();
  return (
    <Reveal className="max-w-2xl mx-auto text-center">
      <ReviewSlider
        reviews={reviews.map((r) => ({ text: t(r.text), name: r.name }))}
        cardClass="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 md:p-10"
        starClass="text-[var(--accent)] mb-4 text-lg"
        textClass="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-5"
        nameClass="text-sm font-bold text-slate-500 dark:text-slate-500"
        dotClass="bg-slate-300 dark:bg-slate-700"
        dotActiveClass="bg-[var(--accent)]"
      />
    </Reveal>
  );
}

export function BookingSection({
  id = "book",
  eyebrow,
  title,
  subtitle,
  services,
  extraLabel,
  extraOptions,
}: {
  id?: string;
  eyebrow?: Txt;
  title: Txt;
  subtitle: Txt;
  services: Txt[];
  extraLabel?: Txt;
  extraOptions?: Txt[];
}) {
  const { t } = useDemoLang();
  const inputClass =
    "w-full rounded-xl px-4 py-3 text-sm bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[var(--accent)] transition-colors";
  const labelClass = "block text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-500 mb-1.5";
  const buttonClass = "w-full h-12 rounded-xl font-bold text-[var(--accent-fg)] bg-[var(--accent)] hover:opacity-90 transition-opacity";

  return (
    <Section id={id} alt eyebrow={eyebrow} title={title} titleAlt={subtitle}>
      <Reveal className="max-w-2xl mx-auto">
        <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-7 md:p-8">
          <BookingForm
            services={services.map(t)}
            extraLabel={extraLabel ? t(extraLabel) : undefined}
            extraOptions={extraOptions?.map(t)}
            labels={{
              name: t({ en: "Your name", km: "ឈ្មោះរបស់អ្នក" }),
              phone: t({ en: "Phone / Telegram", km: "ទូរស័ព្ទ / Telegram" }),
              service: t({ en: "Service", km: "សេវាកម្ម" }),
              date: t({ en: "Preferred date", km: "កាលបរិច្ឆេទ" }),
              time: t({ en: "Preferred time", km: "ម៉ោង" }),
              message: t({ en: "Message (optional)", km: "សារ (មិនចាំបាច់)" }),
              submit: t({ en: "Request appointment", km: "ស្នើសុំការណាត់ជួប" }),
              successTitle: t({ en: "Request received!", km: "បានទទួលសំណើ!" }),
              successBody: t({
                en: "Thank you — we will confirm shortly via phone or Telegram.",
                km: "អរគុណ — យើងនឹងបញ្ជាក់ក្នុងពេលឆាប់ៗ តាមទូរស័ព្ទ ឬ Telegram។",
              }),
            }}
            inputClass={inputClass}
            labelClass={labelClass}
            buttonClass={buttonClass}
            successClass="text-slate-900 dark:text-slate-100"
          />
        </div>
      </Reveal>
    </Section>
  );
}

export function ContactBlock({
  telegram,
  phone,
  address,
  hours,
}: {
  telegram: string;
  phone: string;
  address: Txt;
  hours: Txt;
}) {
  const { t } = useDemoLang();
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <Reveal className="space-y-4">
        <div className="flex items-start gap-3">
          <span className="text-[var(--accent)]">📍</span>
          <p className="text-slate-600 dark:text-slate-400 text-sm">{t(address)}</p>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-[var(--accent)]">🕗</span>
          <p className="text-slate-600 dark:text-slate-400 text-sm">{t(hours)}</p>
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
          <a href={telegram} target="_blank" className="px-6 py-3 rounded-full font-bold text-[var(--accent-fg)] bg-[var(--accent)] hover:opacity-90 transition-opacity">
            {t({ en: "Chat on Telegram", km: "ឆាតតាម Telegram" })}
          </a>
          <a href={phone} className="px-6 py-3 rounded-full font-bold border border-slate-300 dark:border-slate-700 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors">
            {t({ en: "Call us", km: "ទូរស័ព្ទមកយើង" })}
          </a>
        </div>
      </Reveal>
      <Reveal delay={120}>
        <div className="aspect-video rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 dark:text-slate-600 text-sm">
          Google Map embed
        </div>
      </Reveal>
    </div>
  );
}

export function DemoFooter({ text }: { text: Txt }) {
  const { t } = useDemoLang();
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-8 text-center text-sm text-slate-500 dark:text-slate-500 bg-white dark:bg-slate-950">
      {t(text)}
    </footer>
  );
}

export function DemoBadge() {
  const { t } = useDemoLang();
  return (
    <Link
      href="/#templates"
      className="fixed bottom-5 right-5 z-50 px-4 py-2.5 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-semibold shadow-xl hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-colors"
    >
      {t({ en: "✦ Demo by SomaTech — from $99", km: "✦ គំរូដោយ SomaTech — ចាប់ពី $99" })}
    </Link>
  );
}

export function DemoRoot({
  accent,
  accentFg = "#ffffff",
  font,
  children,
}: {
  accent: string;
  accentFg?: string;
  font?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100"
      style={{ "--accent": accent, "--accent-fg": accentFg, fontFamily: font } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
