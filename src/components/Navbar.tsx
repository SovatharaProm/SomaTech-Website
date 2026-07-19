"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang, type Bi } from "@/lib/i18n";

const navLinks: { label: Bi; href: string }[] = [
  { label: { en: "About", km: "អំពីយើង" }, href: "#about" },
  { label: { en: "What We Do", km: "អ្វីដែលយើងធ្វើ" }, href: "#what-we-do" },
  { label: { en: "Products", km: "ផលិតផល" }, href: "#products" },
  { label: { en: "Templates", km: "គំរូវេបសាយ" }, href: "#templates" },
  { label: { en: "Pricing", km: "តម្លៃ" }, href: "#pricing" },
  { label: { en: "Contact", km: "ទំនាក់ទំនង" }, href: "#contact" },
];

const getInTouch: Bi = { en: "Get in Touch", km: "ទាក់ទងយើង" };

function LangSwitch({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLang();
  return (
    <div
      className={`flex items-center rounded-full border border-white/15 overflow-hidden text-xs font-semibold ${
        compact ? "self-start" : ""
      }`}
    >
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1.5 transition-colors cursor-pointer ${
          lang === "en" ? "bg-[#60a5fa] text-[#0d1420]" : "text-slate-300 hover:bg-white/10"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang("km")}
        className={`px-3 py-1.5 transition-colors cursor-pointer ${
          lang === "km" ? "bg-[#60a5fa] text-[#0d1420]" : "text-slate-300 hover:bg-white/10"
        }`}
      >
        ខ្មែរ
      </button>
    </div>
  );
}

export default function Navbar() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(13, 20, 32, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="SomaTech Home">
          <div className="relative w-9 h-9 md:w-10 md:h-10 overflow-hidden rounded-full">
            <Image
              src="/somatech-logo.jpg"
              alt="SomaTech Logo"
              fill
              className="object-cover scale-[1.8] translate-x-[-18%]"
              priority
            />
          </div>
          <span className="text-white font-semibold text-lg tracking-widest uppercase">
            Soma<span className="text-[#60a5fa]">Tech</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 hover:text-white transition-colors duration-200 tracking-wide relative group"
            >
              {t(link.label)}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#60a5fa] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <LangSwitch />
          <a href="#contact">
            <Button
              size="sm"
              className="bg-[#60a5fa] hover:bg-[#3b82f6] text-[#0d1420] font-semibold tracking-wide transition-all duration-200"
            >
              {t(getInTouch)}
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className="md:hidden transition-all duration-300 overflow-hidden"
        style={{
          maxHeight: mobileOpen ? "440px" : "0",
          background: "rgba(13, 20, 32, 0.98)",
          backdropFilter: "blur(20px)",
          borderBottom: mobileOpen ? "1px solid rgba(255,255,255,0.07)" : "none",
        }}
      >
        <div className="px-6 py-4 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-slate-200 hover:text-white text-sm tracking-wide transition-colors"
            >
              {t(link.label)}
            </a>
          ))}
          <LangSwitch compact />
          <a href="#contact" onClick={() => setMobileOpen(false)}>
            <Button
              size="sm"
              className="w-full bg-[#60a5fa] hover:bg-[#3b82f6] text-[#0d1420] font-semibold"
            >
              {t(getInTouch)}
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
