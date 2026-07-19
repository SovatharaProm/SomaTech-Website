"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export type Txt = string | { en: string; km: string };
type Lang = "en" | "km";

const Ctx = createContext<{ lang: Lang; t: (v: Txt) => string }>({
  lang: "en",
  t: (v) => (typeof v === "string" ? v : v.en),
});

export function useDemoLang() {
  return useContext(Ctx);
}

/**
 * Wraps a demo site with light/dark + EN/KH support. Renders floating theme
 * and language toggles; both choices are remembered per demo (keyed by slug).
 */
export default function DemoShell({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const st = localStorage.getItem(`demo-theme-${slug}`);
    if (st === "light" || st === "dark") setTheme(st);
    const sl = localStorage.getItem(`demo-lang-${slug}`);
    if (sl === "en" || sl === "km") setLang(sl);
  }, [slug]);

  const toggleTheme = () =>
    setTheme((p) => {
      const n = p === "light" ? "dark" : "light";
      localStorage.setItem(`demo-theme-${slug}`, n);
      return n;
    });

  const setLanguage = (l: Lang) => {
    localStorage.setItem(`demo-lang-${slug}`, l);
    setLang(l);
  };

  const t = (v: Txt) => (typeof v === "string" ? v : v[lang]);

  return (
    <Ctx.Provider value={{ lang, t }}>
      <div className={`${theme === "dark" ? "dark" : ""} ${lang === "km" ? "lang-km" : ""}`}>
        {children}

        {/* Floating controls */}
        <div className="fixed bottom-5 left-5 z-50 flex items-center gap-2">
          <div className="flex items-center rounded-full overflow-hidden text-xs font-bold shadow-xl border border-black/10 dark:border-white/15 bg-white dark:bg-slate-800">
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-2 transition-colors cursor-pointer ${
                lang === "en" ? "bg-blue-600 text-white" : "text-slate-700 dark:text-slate-200"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("km")}
              className={`px-3 py-2 transition-colors cursor-pointer ${
                lang === "km" ? "bg-blue-600 text-white" : "text-slate-700 dark:text-slate-200"
              }`}
            >
              ខ្មែរ
            </button>
          </div>
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="w-10 h-10 rounded-full bg-white text-slate-800 dark:bg-slate-800 dark:text-white shadow-xl border border-black/10 dark:border-white/15 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </Ctx.Provider>
  );
}
