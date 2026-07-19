"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Send, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import { useLang, ui } from "@/lib/i18n";
import { demos, packages } from "@/lib/demos";
import { CONTACT } from "@/lib/site";

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
            el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
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

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

export type InquiryPrefill = { pkg?: string; demo?: string };

export default function ContactSection({
  prefill = {},
}: {
  prefill?: InquiryPrefill;
}) {
  const { t } = useLang();
  const leftRef = useReveal();
  const rightRef = useReveal(100);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    pkg: "",
    demo: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setForm((f) => ({
      ...f,
      pkg: prefill.pkg ?? f.pkg,
      demo: prefill.demo ?? f.demo,
    }));
  }, [prefill]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email || "not-provided@somatech.site",
          message: [
            "Website template inquiry",
            `Phone / Telegram: ${form.phone}`,
            `Package: ${form.pkg || "-"}`,
            `Demo style: ${form.demo || "-"}`,
            "",
            form.message,
          ].join("\n"),
        },
        PUBLIC_KEY
      );
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-[rgba(96,165,250,0.45)] focus:bg-[rgba(96,165,250,0.03)] transition-all duration-200";
  const labelClass =
    "block text-xs text-slate-300 uppercase tracking-widest mb-2 font-medium";

  const channels = [
    { icon: Send, label: t(ui.chatTelegram), value: "@somatech_kh", href: CONTACT.telegram },
    { icon: MessageCircle, label: t(ui.chatMessenger), value: "SomaTech", href: CONTACT.messenger },
    { icon: Phone, label: t(ui.callUs), value: CONTACT.phone, href: CONTACT.phoneHref },
    { icon: Mail, label: t(ui.emailUs), value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  ];

  return (
    <section id="contact" className="relative py-28 md:py-36 overflow-hidden scroll-mt-16">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 25% 60%, rgba(96,165,250,0.06) 0%, transparent 65%)",
        }}
      />

      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div ref={leftRef}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#60a5fa]" />
              <span className="text-[#60a5fa] text-xs tracking-widest uppercase font-medium">
                {t(ui.inquiryTag)}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              <span className="gradient-text">{t(ui.inquiryTitle)}</span>
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-6">
              {t(ui.inquirySubtitle)}
            </p>

            <div className="rounded-xl bg-[rgba(96,165,250,0.07)] border border-[rgba(96,165,250,0.18)] p-4 text-sm text-slate-300 leading-relaxed mb-8">
              {t(ui.opsNote)}
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {channels.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  className="card-glow flex items-center gap-3 rounded-xl p-4 group"
                  style={{ background: "#131c2b" }}
                >
                  <span className="w-10 h-10 rounded-xl bg-[rgba(96,165,250,0.09)] border border-[rgba(96,165,250,0.18)] flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-[#60a5fa]" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-bold text-white group-hover:text-[#93c5fd] transition-colors">
                      {label}
                    </span>
                    <span className="block text-xs text-slate-400 truncate">{value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right */}
          <div ref={rightRef}>
            <div className="card-glow rounded-2xl p-8" style={{ background: "#131c2b" }}>
              {sent ? (
                <div className="text-center py-14">
                  <div className="w-14 h-14 rounded-full bg-[rgba(96,165,250,0.1)] border border-[rgba(96,165,250,0.25)] flex items-center justify-center mx-auto mb-5">
                    <Send size={22} className="text-[#60a5fa]" />
                  </div>
                  <h3 className="text-white font-semibold text-xl mb-2">{t(ui.sentTitle)}</h3>
                  <p className="text-slate-300 text-sm">{t(ui.sentBody)}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>{t(ui.formName)} *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>{t(ui.formPhone)} *</label>
                      <input
                        type="text"
                        required
                        placeholder="012 345 678 / @telegram"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>{t(ui.formEmail)}</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>{t(ui.formPackage)}</label>
                      <select
                        value={form.pkg}
                        onChange={(e) => setForm({ ...form, pkg: e.target.value })}
                        className={inputClass + " bg-[#131c2b]"}
                      >
                        <option value="">{t(ui.notSure)}</option>
                        {packages.map((p) => (
                          <option key={p.id} value={p.name.en}>
                            {p.name.en} — ${p.price}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>{t(ui.formTemplate)}</label>
                      <select
                        value={form.demo}
                        onChange={(e) => setForm({ ...form, demo: e.target.value })}
                        className={inputClass + " bg-[#131c2b]"}
                      >
                        <option value="">{t(ui.notSure)}</option>
                        {demos.map((d) => (
                          <option key={d.id} value={d.name.en}>
                            {t(d.name)}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>{t(ui.formMessage)}</label>
                    <textarea
                      rows={4}
                      placeholder={t(ui.formMessagePlaceholder)}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={inputClass + " resize-none"}
                    />
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm text-center">{t(ui.sendError)}</p>
                  )}
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#60a5fa] hover:bg-[#3b82f6] text-[#0d1420] font-semibold h-12 tracking-wide transition-all duration-200 shadow-lg shadow-blue-500/20 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? t(ui.sending) : t(ui.send)}
                    {!loading && <Send className="ml-2 h-4 w-4" />}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
