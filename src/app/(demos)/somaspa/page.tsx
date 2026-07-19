import type { Metadata } from "next";
import DemoShell from "@/lib/demo-theme";
import {
  DemoRoot, DemoNav, Hero, Section, MenuCategory, Gallery, TeamGrid, CheckList,
  PricingTiers, HoursTable, FAQ, Reviews, BookingSection, ContactBlock, DemoFooter, DemoBadge,
} from "@/components/demo-kit";

export const metadata: Metadata = {
  title: "Lotus Spa — Spa & Wellness | SomaTech Demo",
  description: "Demo website for a spa: full treatment menu, packages, therapists, hours, and booking.",
};

const CONTACT = { telegram: "https://t.me/somatech_kh", phone: "tel:+85512345678" };

export default function Page() {
  return (
    <DemoShell slug="somaspa">
      <DemoRoot accent="#e11d48">
        <DemoNav
          brand={<>🪷 Lotus Spa</>}
          links={[
            { label: { en: "Treatments", km: "សេវាព្យាបាល" }, href: "#menu" },
            { label: { en: "Packages", km: "កញ្ចប់" }, href: "#packages" },
            { label: { en: "Therapists", km: "អ្នកព្យាបាល" }, href: "#team" },
            { label: { en: "FAQ", km: "សំណួរ" }, href: "#faq" },
          ]}
          cta={{ en: "Book now", km: "កក់ឥឡូវ" }} ctaHref="#book"
        />
        <Hero
          variant="center"
          eyebrow={{ en: "Spa & Wellness · Phnom Penh", km: "ស្ប៉ា & សុខភាព · ភ្នំពេញ" }}
          title={{ en: "Relax. Restore.", km: "សម្រាក. ស្តារ." }}
          titleAccent={{ en: "Glow.", km: "ភ្លឺថ្លា។" }}
          subtitle={{ en: "Traditional Khmer therapies in a calm, candle-lit sanctuary — an hour here feels like a holiday.", km: "ការព្យាបាលបែបខ្មែរប្រពៃណី ក្នុងបរិយាកាសស្ងប់ស្ងាត់។" }}
          subtitleAlt={{ en: "Open daily 10:00 AM – 10:00 PM", km: "បើករាល់ថ្ងៃ ១០:០០ – ២២:០០" }}
          primary={{ label: { en: "View treatments", km: "មើលសេវាព្យាបាល" }, href: "#menu" }}
          secondary={{ label: { en: "Book a session", km: "កក់ម៉ោង" }, href: "#book" }}
          stats={[
            { value: 4, suffix: ".9★", label: { en: "Client rating", km: "ការវាយតម្លៃ" } },
            { value: 20, suffix: "+", label: { en: "Treatments", km: "សេវាព្យាបាល" } },
            { value: 8, suffix: "", label: { en: "Therapists", km: "អ្នកព្យាបាល" } },
            { value: 100, suffix: "%", label: { en: "Natural products", km: "ផលិតផលធម្មជាតិ" } },
          ]}
        />

        <Section id="menu" eyebrow={{ en: "Treatment menu", km: "ម៉ឺនុយព្យាបាល" }} title={{ en: "Full treatment menu", km: "ម៉ឺនុយព្យាបាលពេញ" }} titleAlt={{ en: "Everything we offer", km: "អ្វីៗដែលយើងផ្តល់" }}>
          <MenuCategory title={{ en: "Massage", km: "ម៉ាស្សា" }} items={[
            { name: { en: "Khmer Herbal Massage · 60 min", km: "ម៉ាស្សាឱសថខ្មែរ · ៦០ នាទី" }, price: "$18", desc: { en: "Warm herbal compress with traditional techniques.", km: "បង្កបឱសថក្តៅ បច្ចេកទេសបុរាណ។" } },
            { name: { en: "Aromatherapy Oil · 90 min", km: "ប្រេងក្រអូប · ៩០ នាទី" }, price: "$32", desc: { en: "Full-body relaxation with essential oils.", km: "សម្រាកទាំងខ្លួន ជាមួយប្រេងធម្មជាតិ។" } },
            { name: { en: "Deep Tissue · 60 min", km: "Deep Tissue · ៦០ នាទី" }, price: "$28" },
            { name: { en: "Foot Reflexology · 45 min", km: "ម៉ាស្សាជើង · ៤៥ នាទី" }, price: "$14" },
          ]} />
          <MenuCategory title={{ en: "Body & Scrub", km: "ខ្លួន & ដុស" }} items={[
            { name: { en: "Hot Stone Therapy · 75 min", km: "ថ្មក្តៅ · ៧៥ នាទី" }, price: "$25", desc: { en: "Deep warmth to melt tension head to toe.", km: "កម្តៅជ្រៅ រំសាយភាពតានតឹង។" } },
            { name: { en: "Coconut Body Scrub · 60 min", km: "ដុសខ្លួនដូង · ៦០ នាទី" }, price: "$22", desc: { en: "Fresh coconut and sea salt for soft skin.", km: "ដូងស្រស់ និងអំបិលសមុទ្រ។" } },
            { name: { en: "Herbal Steam · 30 min", km: "ចំហុយឱសថ · ៣០ នាទី" }, price: "$10" },
          ]} />
          <MenuCategory title={{ en: "Facial & Beauty", km: "ថែមុខ & សម្ផស្ស" }} items={[
            { name: { en: "Signature Lotus Facial · 60 min", km: "ថែមុខផ្កាឈូក · ៦០ នាទី" }, price: "$28", desc: { en: "Lotus extract for a calm, natural glow.", km: "សារធាតុផ្កាឈូក ភ្លឺថ្លាធម្មជាតិ។" } },
            { name: { en: "Brightening Facial · 75 min", km: "ថែមុខបំភ្លឺ · ៧៥ នាទី" }, price: "$35" },
            { name: { en: "Manicure & Pedicure", km: "ថែក្រចកដៃ-ជើង" }, price: "$16" },
          ]} />
        </Section>

        <Section alt eyebrow={{ en: "Every visit", km: "រាល់ការមក" }} title={{ en: "Included with every treatment", km: "រួមបញ្ចូលរាល់ការព្យាបាល" }}>
          <CheckList cols={3} items={[
            { en: "Welcome herbal tea", km: "តែឱសថស្វាគមន៍" },
            { en: "Private treatment room", km: "បន្ទប់ព្យាបាលឯកជន" },
            { en: "Fresh towels & robe", km: "កន្សែង និងអាវ" },
            { en: "Shower facilities", km: "កន្លែងងូតទឹក" },
            { en: "Free parking", km: "ចតរថយន្តឥតគិតថ្លៃ" },
            { en: "Couples rooms available", km: "មានបន្ទប់គូ" },
            { en: "Gift vouchers", km: "ប័ណ្ណអំណោយ" },
            { en: "Female & male therapists", km: "អ្នកព្យាបាលស្រី និងប្រុស" },
            { en: "Walk-ins welcome", km: "អាចមកផ្ទាល់" },
          ]} />
        </Section>

        <Section id="packages" eyebrow={{ en: "Save more", km: "សន្សំបន្ថែម" }} title={{ en: "Signature packages", km: "កញ្ចប់ពិសេស" }}>
          <PricingTiers tiers={[
            { name: { en: "Half-Day Retreat", km: "កម្សាន្តកន្លះថ្ងៃ" }, price: "$55", features: [{ en: "Massage + scrub + facial", km: "ម៉ាស្សា + ដុស + ថែមុខ" }, { en: "Herbal tea & fruit", km: "តែ និងផ្លែឈើ" }, { en: "2.5 hours of calm", km: "២.៥ ម៉ោង" }] },
            { name: { en: "Couple's Ritual", km: "កម្មវិធីគូ" }, price: "$79", popular: true, features: [{ en: "Side-by-side massage", km: "ម៉ាស្សាជាប់គ្នា" }, { en: "Private room", km: "បន្ទប់ឯកជន" }, { en: "Refreshments", km: "ភេសជ្ជៈ" }] },
            { name: { en: "Monthly Member", km: "សមាជិកប្រចាំខែ" }, price: "$99", period: { en: "/mo", km: "/ខែ" }, features: [{ en: "4 treatments / month", km: "ព្យាបាល ៤ ដង/ខែ" }, { en: "20% off extras", km: "បញ្ចុះ ២០%" }, { en: "Priority booking", km: "កក់អាទិភាព" }] },
          ]} />
        </Section>

        <Section id="team" alt eyebrow={{ en: "Our team", km: "ក្រុមការងារ" }} title={{ en: "Meet the therapists", km: "ជួបអ្នកព្យាបាល" }}>
          <TeamGrid members={[
            { emoji: "💆‍♀️", name: { en: "Sophea", km: "សុភា" }, role: { en: "Herbal & aroma", km: "ឱសថ & ក្រអូប" } },
            { emoji: "💆", name: { en: "Nita", km: "នីតា" }, role: { en: "Deep tissue", km: "Deep tissue" } },
            { emoji: "💆‍♀️", name: { en: "Chan", km: "ចន្ទ" }, role: { en: "Facial & beauty", km: "ថែមុខ" } },
            { emoji: "💆", name: { en: "Dara", km: "ដារ៉ា" }, role: { en: "Hot stone", km: "ថ្មក្តៅ" } },
          ]} />
        </Section>

        <Section eyebrow={{ en: "The space", km: "ទីកន្លែង" }} title={{ en: "A calm sanctuary", km: "ទីជម្រកស្ងប់ស្ងាត់" }}>
          <Gallery tiles={[
            { emoji: "🕯️", label: { en: "Candle rooms", km: "បន្ទប់ទៀន" } },
            { emoji: "🌸", label: { en: "Herbal bar", km: "កន្លែងឱសថ" } },
            { emoji: "🛁", label: { en: "Soaking tubs", km: "អាងត្រាំ" } },
            { emoji: "🍵", label: { en: "Tea lounge", km: "កន្លែងតែ" } },
          ]} />
        </Section>

        <Section alt eyebrow={{ en: "Hours", km: "ម៉ោង" }} title={{ en: "Opening hours", km: "ម៉ោងបើក" }}>
          <HoursTable rows={[
            { day: { en: "Monday – Friday", km: "ច័ន្ទ – សុក្រ" }, time: "10:00 AM – 10:00 PM" },
            { day: { en: "Saturday – Sunday", km: "សៅរ៍ – អាទិត្យ" }, time: "9:00 AM – 11:00 PM" },
            { day: { en: "Last booking", km: "ការកក់ចុងក្រោយ" }, time: { en: "90 min before close", km: "៩០ នាទីមុនបិទ" } },
          ]} />
        </Section>

        <Section eyebrow={{ en: "Guests", km: "ភ្ញៀវ" }} title={{ en: "What guests say", km: "មតិភ្ញៀវ" }}>
          <Reviews reviews={[
            { text: { en: "I came in stressed and left floating. The herbal massage is the best I've had in the city.", km: "ខ្ញុំមកដោយតានតឹង ចាកចេញធូរស្រាល។ ម៉ាស្សាឱសថល្អបំផុត។" }, name: "Chariya P." },
            { text: { en: "Calm, clean, and the therapists really know what they're doing. My monthly ritual now.", km: "ស្ងប់ស្ងាត់ ស្អាត អ្នកព្យាបាលពូកែ។ ឥឡូវជាកម្មវិធីប្រចាំខែ។" }, name: "Nita K." },
          ]} />
        </Section>

        <Section id="faq" alt eyebrow={{ en: "FAQ", km: "សំណួរញឹកញាប់" }} title={{ en: "Before you visit", km: "មុនពេលមក" }}>
          <FAQ items={[
            { q: { en: "Do I need to book ahead?", km: "តើត្រូវកក់ជាមុនទេ?" }, a: { en: "Walk-ins are welcome, but booking guarantees your therapist and time.", km: "អាចមកផ្ទាល់ តែការកក់ធានាអ្នកព្យាបាល និងម៉ោង។" } },
            { q: { en: "Can I request a female therapist?", km: "តើអាចសុំអ្នកព្យាបាលស្រីទេ?" }, a: { en: "Yes — just note it when booking and we'll arrange it.", km: "បាទ/ចាស — គ្រាន់តែសរសេរពេលកក់ យើងរៀបចំឱ្យ។" } },
            { q: { en: "Do you sell gift vouchers?", km: "តើមានលក់ប័ណ្ណអំណោយទេ?" }, a: { en: "Yes, for any treatment or amount — perfect for birthdays.", km: "បាទ/ចាស សម្រាប់ការព្យាបាល ឬចំនួនណាមួយ។" } },
          ]} />
        </Section>

        <BookingSection
          eyebrow={{ en: "Booking", km: "ការកក់" }} title={{ en: "Reserve your moment of calm", km: "កក់ពេលវេលាស្ងប់ស្ងាត់" }}
          subtitle={{ en: "Walk-ins welcome, bookings preferred.", km: "អាចមកផ្ទាល់ តែការកក់ជាមុនប្រសើរ។" }}
          services={[{ en: "Herbal Massage", km: "ម៉ាស្សាឱសថ" }, { en: "Hot Stone Therapy", km: "ព្យាបាលថ្មក្តៅ" }, { en: "Body Scrub", km: "ដុសខ្លួន" }, { en: "Facial", km: "ថែទាំផ្ទៃមុខ" }, { en: "Package", km: "កញ្ចប់" }]}
          extraLabel={{ en: "Therapist", km: "អ្នកព្យាបាល" }}
          extraOptions={[{ en: "No preference", km: "គ្មានចំណូលចិត្ត" }, { en: "Female", km: "ស្រី" }, { en: "Male", km: "ប្រុស" }]}
        />
        <Section id="contact" title={{ en: "Find us", km: "រកយើង" }}>
          <ContactBlock telegram={CONTACT.telegram} phone={CONTACT.phone}
            address={{ en: "BKK1, Phnom Penh", km: "បឹងកេងកង ១, ភ្នំពេញ" }}
            hours={{ en: "Open daily · 10:00 AM – 10:00 PM", km: "បើករាល់ថ្ងៃ · ១០:០០ – ២២:០០" }} />
        </Section>
        <DemoFooter text={{ en: "© 2026 Lotus Spa · Phnom Penh", km: "© ២០២៦ Lotus Spa · ភ្នំពេញ" }} />
        <DemoBadge />
      </DemoRoot>
    </DemoShell>
  );
}
