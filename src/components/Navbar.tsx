"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "Mission", href: "#mission" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
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
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 hover:text-white transition-colors duration-200 tracking-wide relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#60a5fa] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a href="#contact">
            <Button
              size="sm"
              className="bg-[#60a5fa] hover:bg-[#3b82f6] text-[#0d1420] font-semibold tracking-wide transition-all duration-200"
            >
              Get in Touch
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
          maxHeight: mobileOpen ? "320px" : "0",
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
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileOpen(false)}>
            <Button
              size="sm"
              className="w-full bg-[#60a5fa] hover:bg-[#3b82f6] text-[#0d1420] font-semibold"
            >
              Get in Touch
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
