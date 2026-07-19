"use client";

import { useEffect, useRef, useState } from "react";

/** Fade-up on scroll. */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(22px)";
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, delay);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/** Count-up number that animates when scrolled into view. */
export function Counter({
  to,
  suffix = "",
  className = "",
  duration = 1400,
}: {
  to: number;
  suffix?: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

/** Auto-rotating testimonial slider with dot navigation. */
export function ReviewSlider({
  reviews,
  cardClass = "",
  textClass = "",
  nameClass = "",
  starClass = "",
  dotClass = "",
  dotActiveClass = "",
}: {
  reviews: { text: string; name: string }[];
  cardClass?: string;
  textClass?: string;
  nameClass?: string;
  starClass?: string;
  dotClass?: string;
  dotActiveClass?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % reviews.length),
      5000
    );
    return () => clearInterval(timer);
  }, [reviews.length]);

  const review = reviews[index];

  return (
    <div className={cardClass}>
      <div className={starClass}>★★★★★</div>
      <p key={index} className={`${textClass} review-fade`}>
        &ldquo;{review.text}&rdquo;
      </p>
      <p className={nameClass}>{review.name}</p>
      <div className="flex justify-center gap-2 mt-6">
        {reviews.map((_, i) => (
          <button
            key={i}
            aria-label={`Review ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
              i === index ? dotActiveClass : dotClass
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/** Front-end appointment/booking form with a success state. */
export function BookingForm({
  services,
  extraLabel,
  extraOptions,
  labels = {},
  inputClass,
  labelClass,
  buttonClass,
  successClass = "",
}: {
  services: string[];
  extraLabel?: string;
  extraOptions?: string[];
  labels?: Partial<{
    name: string;
    phone: string;
    service: string;
    date: string;
    time: string;
    message: string;
    submit: string;
    successTitle: string;
    successBody: string;
  }>;
  inputClass: string;
  labelClass: string;
  buttonClass: string;
  successClass?: string;
}) {
  const [sent, setSent] = useState(false);
  const l = {
    name: "Your name",
    phone: "Phone / Telegram",
    service: "Service",
    date: "Preferred date",
    time: "Preferred time",
    message: "Message (optional)",
    submit: "Request appointment",
    successTitle: "Request received!",
    successBody:
      "Thank you — we will confirm your appointment shortly via phone or Telegram.",
    ...labels,
  };

  if (sent) {
    return (
      <div className={`text-center py-12 ${successClass}`}>
        <div className="text-4xl mb-4">✓</div>
        <h3 className="font-bold text-xl mb-2">{l.successTitle}</h3>
        <p className="text-sm opacity-70 max-w-sm mx-auto">{l.successBody}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-4 text-left"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>{l.name} *</label>
          <input type="text" required className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>{l.phone} *</label>
          <input type="text" required placeholder="012 345 678" className={inputClass} />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>{l.service}</label>
          <select className={inputClass}>
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
        {extraLabel && extraOptions ? (
          <div>
            <label className={labelClass}>{extraLabel}</label>
            <select className={inputClass}>
              {extraOptions.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>
        ) : (
          <div>
            <label className={labelClass}>{l.time}</label>
            <input type="time" className={inputClass} />
          </div>
        )}
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>{l.date}</label>
          <input type="date" className={inputClass} />
        </div>
        {extraLabel && (
          <div>
            <label className={labelClass}>{l.time}</label>
            <input type="time" className={inputClass} />
          </div>
        )}
      </div>
      <div>
        <label className={labelClass}>{l.message}</label>
        <textarea rows={3} className={`${inputClass} resize-none`} />
      </div>
      <button type="submit" className={buttonClass}>
        {l.submit}
      </button>
    </form>
  );
}
