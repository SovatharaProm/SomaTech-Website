import type { Metadata } from "next";
import DemoShell from "@/lib/demo-theme";
import {
  DemoRoot, DemoNav, Hero, Section, MenuCategory, Gallery, CheckList,
  HoursTable, FAQ, Reviews, Prose, BookingSection, ContactBlock, DemoFooter, DemoBadge,
} from "@/components/demo-kit";

export const metadata: Metadata = {
  title: "Brew & Bloom — Specialty Café | SomaTech Demo",
  description: "Demo website for a specialty café: full menu, story, gallery, hours, and location.",
};

const CONTACT = { telegram: "https://t.me/somatech_kh", phone: "tel:+85512345678" };

export default function Page() {
  return (
    <DemoShell slug="somacafe">
      <DemoRoot accent="#92400e" font="Georgia, 'Times New Roman', serif">
        <DemoNav
          brand={<>Brew &amp; Bloom</>}
          links={[
            { label: { en: "Menu", km: "ម៉ឺនុយ" }, href: "#menu" },
            { label: { en: "Story", km: "រឿងរ៉ាវ" }, href: "#story" },
            { label: { en: "Visit", km: "ទីតាំង" }, href: "#hours" },
            { label: { en: "FAQ", km: "សំណួរ" }, href: "#faq" },
          ]}
          cta={{ en: "Order via Telegram", km: "កម្ម៉ង់តាម Telegram" }} ctaHref={CONTACT.telegram}
        />
        <Hero
          variant="center"
          eyebrow={{ en: "Specialty Coffee · Phnom Penh", km: "កាហ្វេពិសេស · ភ្នំពេញ" }}
          title={{ en: "Slow mornings,", km: "ព្រឹកយឺតៗ" }}
          titleAccent={{ en: "good coffee.", km: "កាហ្វេឆ្ងាញ់។" }}
          subtitle={{ en: "Small-batch roasts, homemade bakes, and a quiet corner to breathe — in the heart of the city.", km: "កាហ្វេលីងក្នុងបរិមាណតូច នំធ្វើផ្ទាល់ និងជ្រុងស្ងប់ស្ងាត់ — ចំកណ្តាលទីក្រុង។" }}
          subtitleAlt={{ en: "Open daily from 6:30 AM", km: "បើករាល់ថ្ងៃ ចាប់ពី ៦:៣០ ព្រឹក" }}
          primary={{ label: { en: "See the menu", km: "មើលម៉ឺនុយ" }, href: "#menu" }}
          secondary={{ label: { en: "Find us", km: "រកយើង" }, href: "#hours" }}
          stats={[
            { value: 4, suffix: ".8★", label: { en: "Café rating", km: "ការវាយតម្លៃ" } },
            { value: 30, suffix: "+", label: { en: "Menu items", km: "មុខម៉ឺនុយ" } },
            { value: 18, suffix: " hr", label: { en: "Cold brew steep", km: "ត្រាំ cold brew" } },
            { value: 100, suffix: "%", label: { en: "Baked fresh", km: "ដុតនំស្រស់" } },
          ]}
        />

        <Section id="menu" eyebrow={{ en: "Fresh every day", km: "ស្រស់រាល់ថ្ងៃ" }} title={{ en: "Full menu", km: "ម៉ឺនុយពេញ" }} titleAlt={{ en: "Everything we serve", km: "អ្វីៗដែលយើងបម្រើ" }}>
          <MenuCategory title={{ en: "Espresso Bar", km: "កាហ្វេ Espresso" }} items={[
            { name: { en: "Signature Latte", km: "ឡាតេពិសេស" }, price: "$2.75", desc: { en: "Double shot, silky oat milk, house caramel.", km: "ពីរ shot ទឹកដោះអូត និង caramel ផ្ទះ។" } },
            { name: { en: "Flat White", km: "Flat White" }, price: "$2.50", desc: { en: "Velvety microfoam over a ristretto base.", km: "ពពុះម៉ដ្ឋ លើ ristretto។" } },
            { name: { en: "Cappuccino", km: "Cappuccino" }, price: "$2.40" },
            { name: { en: "Espresso / Piccolo", km: "Espresso / Piccolo" }, price: "$1.80" },
          ]} />
          <MenuCategory title={{ en: "Cold & Slow", km: "ត្រជាក់ & យឺត" }} items={[
            { name: { en: "Mekong Cold Brew", km: "កាហ្វេត្រជាក់" }, price: "$2.50", desc: { en: "18-hour slow brew, dark chocolate notes.", km: "ត្រាំ ១៨ ម៉ោង ក្លិនសូកូឡាខ្មៅ។" } },
            { name: { en: "Iced Matcha Latte", km: "ម៉ាឆាទឹកកក" }, price: "$3.00", desc: { en: "Ceremonial matcha over cold coconut milk.", km: "ម៉ាឆា លើទឹកដោះដូងត្រជាក់។" } },
            { name: { en: "Coconut Cold Brew", km: "Cold Brew ដូង" }, price: "$3.20" },
            { name: { en: "Fresh Fruit Soda", km: "សូដាផ្លែឈើ" }, price: "$2.20" },
          ]} />
          <MenuCategory title={{ en: "Bakery & Brunch", km: "នំ & អាហារព្រឹក" }} items={[
            { name: { en: "Butter Croissant", km: "គ្រូសង់" }, price: "$1.80", desc: { en: "Baked every morning, 27 layers of butter.", km: "ដុតរាល់ព្រឹក ២៧ ស្រទាប់ប៊ឺ។" } },
            { name: { en: "Pandan Chiffon Cake", km: "នំតើយ" }, price: "$2.20", desc: { en: "Soft chiffon with fresh pandan cream.", km: "នំ chiffon ទន់ ជាមួយក្រែមតើយ។" } },
            { name: { en: "Avocado Toast", km: "នំបុ័ង Avocado" }, price: "$4.50", desc: { en: "Sourdough, smashed avo, chilli, lime.", km: "នំបុ័ង sourdough avocado ម្ទេស ក្រូច។" } },
            { name: { en: "Big Brunch Plate", km: "ចានអាហារព្រឹកធំ" }, price: "$6.00", desc: { en: "Eggs, sausage, greens, and toast.", km: "ស៊ុត សាច់ក្រក បន្លែ និងនំបុ័ង។" } },
          ]} />
        </Section>

        <Section alt eyebrow={{ en: "Good to know", km: "គួរដឹង" }} title={{ en: "What we offer", km: "អ្វីដែលយើងផ្តល់" }}>
          <CheckList cols={3} items={[
            { en: "Fast free wifi", km: "wifi លឿនឥតគិតថ្លៃ" },
            { en: "Power sockets at every table", km: "រន្ធភ្លើងគ្រប់តុ" },
            { en: "Dairy-free & oat milk", km: "ទឹកដោះអូត / គ្មានទឹកដោះ" },
            { en: "Takeaway & delivery", km: "យកទៅ / ដឹកជញ្ជូន" },
            { en: "Whole beans to buy", km: "គ្រាប់កាហ្វេលក់" },
            { en: "Event & group bookings", km: "កក់ក្រុម / ព្រឹត្តិការណ៍" },
            { en: "Catering for offices", km: "Catering ការិយាល័យ" },
            { en: "Loyalty card (10th free)", km: "កាតសមាជិក (ទី១០ ឥតគិតថ្លៃ)" },
            { en: "Pet-friendly garden", km: "សួនស្វាគមន៍សត្វចិញ្ចឹម" },
          ]} />
        </Section>

        <Section id="story" eyebrow={{ en: "The café", km: "ហាងកាហ្វេ" }} title={{ en: "Come hang out", km: "មកកម្សាន្ត" }}>
          <Gallery tiles={[
            { emoji: "☕", label: { en: "Slow bar", km: "Slow bar" } },
            { emoji: "🥐", label: { en: "Bakery", km: "នំប៉័ង" } },
            { emoji: "🪴", label: { en: "Garden seats", km: "កៅអីសួន" } },
            { emoji: "📚", label: { en: "Quiet corner", km: "ជ្រុងស្ងាត់" } },
          ]} />
          <div className="mt-14"><Prose>{{
            en: "Brew & Bloom started with one small roaster and a big idea: coffee should slow the day down, not speed it up. We roast Mondulkiri beans in-house and bake everything fresh each morning. Come for the coffee, stay for the quiet.",
            km: "Brew & Bloom ចាប់ផ្តើមពីម៉ាស៊ីនលីងតូចមួយ និងគំនិតធំមួយ៖ កាហ្វេគួរធ្វើឱ្យថ្ងៃយឺតចុះ។ យើងលីងគ្រាប់កាហ្វេមណ្ឌលគិរីផ្ទាល់ ហើយដុតនំស្រស់រាល់ព្រឹក។ មកសម្រាប់កាហ្វេ នៅសម្រាប់ភាពស្ងប់ស្ងាត់។",
          }}</Prose></div>
        </Section>

        <Section id="hours" alt eyebrow={{ en: "Visit us", km: "មកលេងយើង" }} title={{ en: "Opening hours", km: "ម៉ោងបើក" }}>
          <HoursTable rows={[
            { day: { en: "Monday – Friday", km: "ច័ន្ទ – សុក្រ" }, time: "6:30 AM – 8:00 PM" },
            { day: { en: "Saturday", km: "សៅរ៍" }, time: "7:00 AM – 9:00 PM" },
            { day: { en: "Sunday", km: "អាទិត្យ" }, time: "7:00 AM – 9:00 PM" },
            { day: { en: "Public holidays", km: "ថ្ងៃឈប់សម្រាក" }, time: "8:00 AM – 6:00 PM" },
          ]} />
        </Section>

        <Section eyebrow={{ en: "Regulars", km: "ភ្ញៀវទៀងទាត់" }} title={{ en: "What regulars say", km: "មតិភ្ញៀវទៀងទាត់" }}>
          <Reviews reviews={[
            { text: { en: "My favourite work-from-café spot in town. Great wifi, better croissants.", km: "កន្លែងធ្វើការក្នុងហាងកាហ្វេដែលខ្ញុំចូលចិត្តបំផុត។ wifi ល្អ គ្រូសង់ឆ្ងាញ់។" }, name: "Lyda S." },
            { text: { en: "The cold brew is smooth and never bitter. I stop by every morning now.", km: "Cold brew រលោង មិនល្វីង។ ខ្ញុំឈប់រាល់ព្រឹក។" }, name: "Rithy P." },
          ]} />
        </Section>

        <Section id="faq" alt eyebrow={{ en: "FAQ", km: "សំណួរញឹកញាប់" }} title={{ en: "Good questions", km: "សំណួរល្អៗ" }}>
          <FAQ items={[
            { q: { en: "Do you take table reservations?", km: "តើអ្នកទទួលការកក់តុទេ?" }, a: { en: "Yes — message us on Telegram for groups of 4 or more.", km: "បាទ/ចាស — ផ្ញើសារតាម Telegram សម្រាប់ក្រុម ៤ នាក់ឡើង។" } },
            { q: { en: "Do you deliver?", km: "តើអ្នកដឹកជញ្ជូនទេ?" }, a: { en: "We deliver within 3km via Telegram order, plus all major delivery apps.", km: "យើងដឹកក្នុងចម្ងាយ ៣គីឡូ តាមការកម្ម៉ង់ Telegram និងកម្មវិធីដឹកទាំងអស់។" } },
            { q: { en: "Can I buy your beans?", km: "តើខ្ញុំអាចទិញគ្រាប់កាហ្វេទេ?" }, a: { en: "Yes, 250g and 1kg bags of our house roast are available at the counter.", km: "បាទ/ចាស មានលក់ ២៥០ក្រាម និង ១គីឡូ នៅបញ្ជរ។" } },
          ]} />
        </Section>

        <BookingSection
          eyebrow={{ en: "Reserve", km: "កក់" }} title={{ en: "Book a table or order ahead", km: "កក់តុ ឬកម្ម៉ង់ជាមុន" }}
          subtitle={{ en: "For groups, events, or catering — send us a message.", km: "សម្រាប់ក្រុម ព្រឹត្តិការណ៍ ឬ catering — ផ្ញើសារមកយើង។" }}
          services={[{ en: "Table for 2", km: "តុ ២ នាក់" }, { en: "Group / event", km: "ក្រុម / ព្រឹត្តិការណ៍" }, { en: "Catering order", km: "កម្ម៉ង់ catering" }, { en: "Buy beans", km: "ទិញគ្រាប់កាហ្វេ" }]}
        />
        <Section id="contact" title={{ en: "Visit us", km: "មកលេងយើង" }}>
          <ContactBlock telegram={CONTACT.telegram} phone={CONTACT.phone}
            address={{ en: "#12, Street 240, Daun Penh, Phnom Penh", km: "#12, ផ្លូវ 240, ដូនពេញ, ភ្នំពេញ" }}
            hours={{ en: "Open daily from 6:30 AM", km: "បើករាល់ថ្ងៃ ចាប់ពី ៦:៣០ ព្រឹក" }} />
        </Section>
        <DemoFooter text={{ en: "© 2026 Brew & Bloom Café · Phnom Penh", km: "© ២០២៦ Brew & Bloom Café · ភ្នំពេញ" }} />
        <DemoBadge />
      </DemoRoot>
    </DemoShell>
  );
}
