import type { Metadata } from "next";
import { Waves, Trees, Utensils } from "lucide-react";
import DemoShell from "@/lib/demo-theme";
import {
  DemoRoot, DemoNav, Hero, Section, ServiceGrid, Gallery, Reviews,
  CheckList, FAQ, BookingSection, ContactBlock, DemoFooter, DemoBadge,
} from "@/components/demo-kit";

export const metadata: Metadata = {
  title: "Maison Dara Villas — Boutique Villa Collection | SomaTech Demo",
  description: "Demo website for boutique hotels and private villas: villas, experiences, and enquiries.",
};

const CONTACT = { telegram: "https://t.me/somatech_kh", phone: "tel:+85512345678" };

export default function Page() {
  return (
    <DemoShell slug="somavilla">
      <DemoRoot accent="#059669" font="Georgia, 'Times New Roman', serif">
        <DemoNav
          brand={<span className="italic">Maison Dara Villas</span>}
          links={[
            { label: { en: "Villas", km: "វីឡា" }, href: "#services" },
            { label: { en: "Experiences", km: "បទពិសោធន៍" }, href: "#experiences" },
            { label: { en: "Enquire", km: "សាកសួរ" }, href: "#book" },
          ]}
          cta={{ en: "Book a stay", km: "កក់ស្នាក់នៅ" }} ctaHref="#book"
        />
        <Hero
          variant="center"
          eyebrow={{ en: "Boutique Villa Collection · Kampot", km: "បណ្តុំវីឡាប្រណីត · កំពត" }}
          title={{ en: "Welcome home to slow tropical", km: "សូមស្វាគមន៍មកកាន់ការរស់នៅ" }}
          titleAccent={{ en: "living.", km: "បែបត្រូពិចស្ងប់ស្ងាត់។" }}
          subtitle={{ en: "Three private villas between river and pepper farms — quiet mornings, long lunches, endless green.", km: "វីឡាឯកជនបីរវាងទន្លេ និងចម្ការម្រេច — ព្រឹកស្ងប់ អាហារថ្ងៃត្រង់យូរ បៃតងគ្មានទីបញ្ចប់។" }}
          subtitleAlt={{ en: "A boutique escape, ninety minutes from the city.", km: "កន្លែងសម្រាកប្រណីត ៩០ នាទីពីទីក្រុង។" }}
          primary={{ label: { en: "Explore villas", km: "មើលវីឡា" }, href: "#services" }}
          secondary={{ label: { en: "Enquire now", km: "សាកសួរ" }, href: "#book" }}
          stats={[
            { value: 3, suffix: "", label: { en: "Private villas", km: "វីឡាឯកជន" } },
            { value: 4, suffix: ".9★", label: { en: "Guest rating", km: "ការវាយតម្លៃ" } },
            { value: 90, suffix: " min", label: { en: "From the city", km: "ពីទីក្រុង" } },
            { value: 100, suffix: "%", label: { en: "Private pools", km: "អាងទឹកឯកជន" } },
          ]}
        />
        <Section id="services" eyebrow={{ en: "Stay with us", km: "ស្នាក់នៅជាមួយយើង" }} title={{ en: "Our villas", km: "វីឡារបស់យើង" }}>
          <ServiceGrid cols={3} items={[
            { icon: <Waves size={20} />, name: { en: "Garden Pool Villa", km: "វីឡាអាងសួន" }, price: "$120", desc: { en: "Private plunge pool wrapped in frangipani and palms.", km: "អាងទឹកឯកជនឡោមព័ទ្ធដោយផ្កាចំប៉ា និងដើមត្នោត។" } },
            { icon: <Trees size={20} />, name: { en: "Riverfront Villa", km: "វីឡាមុខទន្លេ" }, price: "$160", desc: { en: "Wake to the Mekong from your own wooden veranda.", km: "ភ្ញាក់ពីដំណេកមើលទន្លេមេគង្គពីរានផ្ទាល់ខ្លួន។" } },
            { icon: <Utensils size={20} />, name: { en: "Heritage Residence", km: "លំនៅឋានបុរាណ" }, price: "$210", desc: { en: "A restored Khmer house with modern comforts throughout.", km: "ផ្ទះខ្មែរបុរាណជួសជុលឡើងវិញ ជាមួយផាសុកភាពទំនើប។" } },
          ]} />
        </Section>
        <Section id="experiences" alt eyebrow={{ en: "Things to do", km: "សកម្មភាព" }} title={{ en: "Experiences", km: "បទពិសោធន៍" }}>
          <Gallery tiles={[
            { emoji: "🛶", label: { en: "Sunset river cruise", km: "ជិះទូកថ្ងៃលិច" } },
            { emoji: "🍜", label: { en: "Khmer cooking class", km: "ថ្នាក់ចម្អិន" } },
            { emoji: "💆", label: { en: "In-villa spa", km: "ស្ប៉ាក្នុងវីឡា" } },
            { emoji: "🚲", label: { en: "Countryside cycling", km: "ជិះកង់ជនបទ" } },
          ]} />
        </Section>
        <Section eyebrow={{ en: "Guests", km: "ភ្ញៀវ" }} title={{ en: "Guest stories", km: "រឿងរ៉ាវភ្ញៀវ" }}>
          <Reviews reviews={[
            { text: { en: "The most peaceful three days we've had in years. The pool villa felt like our own private world.", km: "បីថ្ងៃដ៏ស្ងប់ស្ងាត់បំផុតក្នុងរយៈពេលជាច្រើនឆ្នាំ។ វីឡាអាងទឹកដូចជាពិភពឯកជនផ្ទាល់ខ្លួន។" }, name: "Elise & Tom" },
            { text: { en: "Every detail was thoughtful, from the welcome drink to the cooking class. We'll be back.", km: "គ្រប់ព័ត៌មានលម្អិតត្រូវបានយកចិត្តទុកដាក់ ចាប់ពីភេសជ្ជៈស្វាគមន៍។ យើងនឹងត្រឡប់មកវិញ។" }, name: "Sreymom C." },
          ]} />
        </Section>
        <Section eyebrow={{ en: "Every stay", km: "រាល់ការស្នាក់នៅ" }} title={{ en: "Included in your stay", km: "រួមបញ្ចូលក្នុងការស្នាក់នៅ" }}>
          <CheckList cols={3} items={[
            { en: "Private plunge pool", km: "អាងទឹកឯកជន" },
            { en: "Daily breakfast", km: "អាហារព្រឹករាល់ថ្ងៃ" },
            { en: "Airport & town transfer", km: "ដឹកជញ្ជូនព្រលានយន្តហោះ" },
            { en: "Free bikes & kayaks", km: "កង់ និងទូកឥតគិតថ្លៃ" },
            { en: "High-speed wifi", km: "wifi លឿន" },
            { en: "Air-con & fans", km: "ម៉ាស៊ីនត្រជាក់ និងកង្ហារ" },
            { en: "In-villa dining", km: "អាហារក្នុងវីឡា" },
            { en: "Daily housekeeping", km: "សម្អាតរាល់ថ្ងៃ" },
            { en: "Concierge on Telegram", km: "អ្នកជំនួយតាម Telegram" },
          ]} />
        </Section>

        <Section alt eyebrow={{ en: "FAQ", km: "សំណួរញឹកញាប់" }} title={{ en: "Before you book", km: "មុនពេលកក់" }}>
          <FAQ items={[
            { q: { en: "How do I get there?", km: "តើធ្វើដំណើរយ៉ាងណា?" }, a: { en: "About 90 minutes from Phnom Penh — we can arrange a private transfer.", km: "ប្រហែល ៩០ នាទីពីភ្នំពេញ — យើងអាចរៀបចំរថយន្តឯកជន។" } },
            { q: { en: "Is breakfast included?", km: "តើមានអាហារព្រឹកទេ?" }, a: { en: "Yes, daily breakfast is included for all guests in every villa.", km: "បាទ/ចាស អាហារព្រឹករាល់ថ្ងៃ សម្រាប់ភ្ញៀវទាំងអស់។" } },
            { q: { en: "Can you host events?", km: "តើអាចរៀបចំព្រឹត្តិការណ៍ទេ?" }, a: { en: "We host small weddings and retreats — message us for a private quote.", km: "យើងរៀបចំពិធីមង្គលការតូច និង retreat។" } },
          ]} />
        </Section>

        <BookingSection
          eyebrow={{ en: "Enquiry", km: "សាកសួរ" }} title={{ en: "Plan your escape", km: "រៀបចំដំណើរកម្សាន្ត" }}
          subtitle={{ en: "Send your dates and villa of choice — we confirm the same day.", km: "ផ្ញើកាលបរិច្ឆេទ និងវីឡាដែលចង់បាន — យើងបញ្ជាក់ក្នុងថ្ងៃ។" }}
          services={[{ en: "Garden Pool Villa", km: "វីឡាអាងសួន" }, { en: "Riverfront Villa", km: "វីឡាមុខទន្លេ" }, { en: "Heritage Residence", km: "លំនៅឋានបុរាណ" }]}
          extraLabel={{ en: "Guests", km: "ចំនួនភ្ញៀវ" }}
          extraOptions={[{ en: "2 guests", km: "២ នាក់" }, { en: "3–4 guests", km: "៣–៤ នាក់" }, { en: "5+ guests", km: "៥+ នាក់" }]}
        />
        <Section id="contact" title={{ en: "Getting here", km: "ការធ្វើដំណើរ" }}>
          <ContactBlock telegram={CONTACT.telegram} phone={CONTACT.phone}
            address={{ en: "Kampot Riverside, Cambodia", km: "តាមដងទន្លេកំពត, កម្ពុជា" }}
            hours={{ en: "Reception 7:00 AM – 9:00 PM", km: "ផ្នែកទទួលភ្ញៀវ ៧:០០ – ២១:០០" }} />
        </Section>
        <DemoFooter text={{ en: "© 2026 Maison Dara Villas · Kampot", km: "© ២០២៦ Maison Dara Villas · កំពត" }} />
        <DemoBadge />
      </DemoRoot>
    </DemoShell>
  );
}
