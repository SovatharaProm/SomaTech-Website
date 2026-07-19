"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "en" | "km";
export type Bi = { en: string; km: string };

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "en",
  setLang: () => {},
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("st-lang");
    if (saved === "km" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    localStorage.setItem("st-lang", l);
    setLangState(l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const { lang, setLang } = useContext(LangContext);
  const t = (b: Bi) => b[lang];
  return { lang, setLang, t };
}

export const ui = {
  navDemos: { en: "Live Demos", km: "គំរូផ្ទាល់" },
  navPricing: { en: "Pricing", km: "តម្លៃ" },
  navContact: { en: "Contact", km: "ទំនាក់ទំនង" },
  mainSite: { en: "Main site", km: "គេហទំព័រមេ" },

  heroTag: { en: "Website Templates", km: "គំរូវេបសាយ" },
  heroTitle: { en: "Featured live demos", km: "គំរូវេបសាយបង្ហាញផ្ទាល់" },
  heroSubtitle: {
    en: "Explore completed website styles for real Cambodian SME categories. Choose a demo, view the live website, then request customization.",
    km: "ស្វែងរកស្ទីលវេបសាយដែលបានបញ្ចប់ សម្រាប់អាជីវកម្មខ្នាតតូច និងមធ្យមនៅកម្ពុជា។ ជ្រើសរើសគំរូ មើលវេបសាយផ្ទាល់ រួចស្នើសុំការកែសម្រួលតាមតម្រូវការ។",
  },
  banner: {
    en: "Browse completed live website demos for Cambodian SMEs. Choose a style first. Final package depends on pages, content, and sections needed.",
    km: "រកមើលគំរូវេបសាយសម្រាប់ SMEs កម្ពុជា។ ជ្រើសរើសស្ទីលជាមុនសិន។ កញ្ចប់តម្លៃចុងក្រោយអាស្រ័យលើចំនួនទំព័រ ខ្លឹមសារ និងផ្នែកដែលត្រូវការ។",
  },
  stylesUnit: { en: "styles", km: "ស្ទីល" },
  liveUnit: { en: "live demos available", km: "គំរូផ្ទាល់អាចមើលបាន" },

  category: { en: "Category", km: "ប្រភេទ" },
  style: { en: "Style", km: "ស្ទីល" },
  goal: { en: "Goal", km: "គោលដៅ" },
  language: { en: "Language", km: "ភាសា" },
  clearFilters: { en: "Clear filters", km: "លុបតម្រងទាំងអស់" },
  noResults: {
    en: "No demos match these filters yet.",
    km: "មិនទាន់មានគំរូត្រូវនឹងតម្រងនេះទេ។",
  },

  from: { en: "From", km: "ចាប់ពី" },
  liveDemo: { en: "Live Demo", km: "មើលគំរូផ្ទាល់" },
  requestPreview: { en: "Request preview", km: "ស្នើសុំមើលគំរូ" },
  requestThisStyle: { en: "Request this style", km: "ស្នើសុំស្ទីលនេះ" },
  bestFor: { en: "Best for:", km: "ល្អបំផុតសម្រាប់៖" },

  pricingTag: { en: "Packages", km: "កញ្ចប់តម្លៃ" },
  pricingTitle: {
    en: "Simple website packages for Cambodian SMEs",
    km: "កញ្ចប់វេបសាយសាមញ្ញ សម្រាប់អាជីវកម្មកម្ពុជា",
  },
  pricingSubtitle: {
    en: "Choose a package based on how much content your business needs. Domain and hosting are paid by client.",
    km: "ជ្រើសរើសកញ្ចប់ទៅតាមទំហំខ្លឹមសារដែលអាជីវកម្មរបស់អ្នកត្រូវការ។ តម្លៃ Domain និង Hosting បង់ដោយអតិថិជន។",
  },
  mostPopular: { en: "Most popular", km: "ពេញនិយមបំផុត" },
  choose: { en: "Choose", km: "ជ្រើសរើស" },

  inquiryTag: { en: "Contact", km: "ទំនាក់ទំនង" },
  inquiryTitle: {
    en: "Request a preview or ask us anything",
    km: "ស្នើសុំមើលគំរូ ឬសាកសួរព័ត៌មានបន្ថែម",
  },
  inquirySubtitle: {
    en: "Tell us about your business and which style you like. We'll reply on Telegram, Messenger, or by phone.",
    km: "ប្រាប់យើងអំពីអាជីវកម្មរបស់អ្នក និងស្ទីលដែលអ្នកចូលចិត្ត។ យើងនឹងឆ្លើយតបតាម Telegram, Messenger ឬទូរស័ព្ទ។",
  },
  opsNote: {
    en: "Ordering, booking, and consultations are handled directly through Telegram, Messenger, or phone — your website stays simple, fast, and easy to maintain.",
    km: "ការកម្ម៉ង់ ការកក់ និងការប្រឹក្សា ធ្វើឡើងផ្ទាល់តាម Telegram, Messenger ឬទូរស័ព្ទ — វេបសាយរបស់អ្នកនៅតែសាមញ្ញ លឿន និងងាយថែទាំ។",
  },
  chatTelegram: { en: "Chat on Telegram", km: "ឆាតតាម Telegram" },
  chatMessenger: { en: "Chat on Messenger", km: "ឆាតតាម Messenger" },
  callUs: { en: "Call us", km: "ទូរស័ព្ទមកយើង" },
  emailUs: { en: "Email us", km: "អ៊ីមែលមកយើង" },

  formName: { en: "Your name", km: "ឈ្មោះរបស់អ្នក" },
  formPhone: { en: "Phone / Telegram", km: "ទូរស័ព្ទ / Telegram" },
  formEmail: { en: "Email (optional)", km: "អ៊ីមែល (មិនចាំបាច់)" },
  formBusiness: { en: "Business type", km: "ប្រភេទអាជីវកម្ម" },
  formBusinessPlaceholder: {
    en: "e.g. dental clinic, café, car showroom...",
    km: "ឧ. គ្លីនិកធ្មេញ ហាងកាហ្វេ សាលបង្ហាញរថយន្ត...",
  },
  formPackage: { en: "Interested package", km: "កញ្ចប់ដែលចាប់អារម្មណ៍" },
  formTemplate: { en: "Interested demo style", km: "ស្ទីលគំរូដែលចាប់អារម្មណ៍" },
  formMessage: { en: "Message", km: "សារ" },
  formMessagePlaceholder: {
    en: "Tell us about your business, the pages you need, or ask for a preview...",
    km: "ប្រាប់យើងអំពីអាជីវកម្មរបស់អ្នក ទំព័រដែលត្រូវការ ឬស្នើសុំមើលគំរូ...",
  },
  notSure: { en: "Not sure yet", km: "មិនទាន់ប្រាកដ" },
  send: { en: "Send inquiry", km: "ផ្ញើសំណើ" },
  sending: { en: "Sending...", km: "កំពុងផ្ញើ..." },
  sentTitle: { en: "Inquiry sent", km: "សំណើត្រូវបានផ្ញើ" },
  sentBody: {
    en: "Thank you! We'll get back to you soon on Telegram, Messenger, or by phone.",
    km: "អរគុណ! យើងនឹងឆ្លើយតបទៅអ្នកឆាប់ៗ តាម Telegram, Messenger ឬទូរស័ព្ទ។",
  },
  sendError: {
    en: "Something went wrong. Please try again or contact us on Telegram.",
    km: "មានបញ្ហាបន្តិច។ សូមព្យាយាមម្តងទៀត ឬទាក់ទងតាម Telegram។",
  },

  footerTagline: {
    en: "Static website templates for Cambodian SMEs — fast, bilingual, and easy to launch.",
    km: "គំរូវេបសាយសម្រាប់ SMEs កម្ពុជា — លឿន ពីរភាសា និងងាយបើកដំណើរការ។",
  },
} satisfies Record<string, Bi>;
