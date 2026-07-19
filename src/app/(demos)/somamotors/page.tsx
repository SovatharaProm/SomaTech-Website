import type { Metadata } from "next";
import { Car, Gauge, ShieldCheck, Banknote } from "lucide-react";
import DemoShell from "@/lib/demo-theme";
import {
  DemoRoot, DemoNav, Hero, Section, ServiceGrid, Steps, Reviews,
  ListingGrid, CheckList, FAQ, BookingSection, ContactBlock, DemoFooter, DemoBadge,
} from "@/components/demo-kit";

export const metadata: Metadata = {
  title: "Mekong Motors — Car Showroom | SomaTech Demo",
  description: "Demo website for a car showroom: inventory, specs, financing, and direct sales contact.",
};

const CONTACT = { telegram: "https://t.me/somatech_kh", phone: "tel:+85512345678" };

export default function Page() {
  return (
    <DemoShell slug="somamotors">
      <DemoRoot accent="#4f46e5">
        <DemoNav
          brand={<>Mekong<span className="text-[var(--accent)]">Motors</span></>}
          links={[
            { label: { en: "Inventory", km: "រថយន្តមាន" }, href: "#services" },
            { label: { en: "Financing", km: "ហិរញ្ញប្បទាន" }, href: "#finance" },
            { label: { en: "Contact", km: "ទំនាក់ទំនង" }, href: "#book" },
          ]}
          cta={{ en: "Request a car", km: "ស្នើសុំរថយន្ត" }} ctaHref="#book"
        />
        <Hero
          variant="bold"
          eyebrow={{ en: "Certified Imports · Phnom Penh", km: "រថយន្តនាំចូលមានវិញ្ញាបនបត្រ · ភ្នំពេញ" }}
          title={{ en: "Drive the", km: "បើកបរ" }}
          titleAccent={{ en: "difference.", km: "ភាពខុសគ្នា។" }}
          subtitle={{ en: "Hand-picked, fully inspected vehicles with transparent history and honest pricing.", km: "រថយន្តជ្រើសរើសយ៉ាងល្អ ពិនិត្យពេញលេញ ប្រវត្តិច្បាស់លាស់ និងតម្លៃស្មោះត្រង់។" }}
          subtitleAlt={{ en: "Financing available with leading banks.", km: "មានហិរញ្ញប្បទានជាមួយធនាគារធំៗ។" }}
          primary={{ label: { en: "View inventory", km: "មើលរថយន្ត" }, href: "#services" }}
          secondary={{ label: { en: "Ask on Telegram", km: "សួរតាម Telegram" }, href: CONTACT.telegram }}
          stats={[
            { value: 120, suffix: "+", label: { en: "Cars in stock", km: "រថយន្តក្នុងស្តុក" } },
            { value: 8, suffix: " yr", label: { en: "In business", km: "ក្នុងអាជីវកម្ម" } },
            { value: 20, suffix: "%", label: { en: "Min. down payment", km: "ប្រាក់កក់អប្បបរមា" } },
            { value: 1, suffix: " day", label: { en: "Loan approval", km: "អនុម័តកម្ចី" } },
          ]}
        />
        <Section id="services" eyebrow={{ en: "Why buy here", km: "ហេតុអ្វីទិញទីនេះ" }} title={{ en: "Buy with confidence", km: "ទិញដោយទំនុកចិត្ត" }}>
          <ServiceGrid items={[
            { icon: <Car size={20} />, name: { en: "Curated Inventory", km: "រថយន្តជ្រើសរើស" }, desc: { en: "Toyota, Lexus, Ford, Honda and more — inspected in-house.", km: "Toyota Lexus Ford Honda និងច្រើនទៀត — ពិនិត្យផ្ទាល់។" } },
            { icon: <Gauge size={20} />, name: { en: "Verified History", km: "ប្រវត្តិផ្ទៀងផ្ទាត់" }, desc: { en: "Real mileage and clear ownership records.", km: "ចម្ងាយពិត និងកំណត់ត្រាកម្មសិទ្ធិច្បាស់លាស់។" } },
            { icon: <ShieldCheck size={20} />, name: { en: "Warranty", km: "ការធានា" }, desc: { en: "Engine and gearbox warranty on every car.", km: "ធានាម៉ាស៊ីន និងលេខ លើរថយន្តគ្រប់គ្រឿង។" } },
            { icon: <Banknote size={20} />, name: { en: "Easy Financing", km: "ហិរញ្ញប្បទានងាយ" }, desc: { en: "Down payments from 20%, terms up to 60 months.", km: "ប្រាក់កក់ចាប់ពី ២០% រយៈពេលដល់ ៦០ ខែ។" } },
          ]} />
        </Section>
        <Section id="finance" alt eyebrow={{ en: "How it works", km: "របៀបធ្វើ" }} title={{ en: "Drive home this week", km: "បើកបរទៅផ្ទះសប្តាហ៍នេះ" }}>
          <Steps items={[
            { n: "1", name: { en: "Pick your car", km: "ជ្រើសរើសរថយន្ត" }, desc: { en: "Message us the model — we send photos and specs.", km: "ផ្ញើសារប្រាប់ម៉ូដែល — យើងផ្ញើរូបភាព និងព័ត៌មាន។" } },
            { n: "2", name: { en: "Get approved", km: "ទទួលការអនុម័ត" }, desc: { en: "Bring your ID; loan approval in one day.", km: "នាំអត្តសញ្ញាណប័ណ្ណ; អនុម័តកម្ចីក្នុងមួយថ្ងៃ។" } },
            { n: "3", name: { en: "Drive away", km: "បើកបរចេញ" }, desc: { en: "Sign, insure, and drive home — we handle paperwork.", km: "ចុះហត្ថលេខា ធានារ៉ាប់រង និងបើកបរទៅផ្ទះ។" } },
          ]} />
        </Section>
        <Section eyebrow={{ en: "Buyers", km: "អ្នកទិញ" }} title={{ en: "Happy owners", km: "ម្ចាស់រថយន្តរីករាយ" }}>
          <Reviews reviews={[
            { text: { en: "They found the exact Highlander I wanted and handled the loan in a day. No hidden fees.", km: "ពួកគេរករថយន្ត Highlander ដែលខ្ញុំចង់បាន ហើយដោះស្រាយកម្ចីក្នុងមួយថ្ងៃ។ គ្មានថ្លៃលាក់ទេ។" }, name: "Sophal R." },
            { text: { en: "Honest about the car's history and gave me a real warranty. Would buy again.", km: "ស្មោះត្រង់អំពីប្រវត្តិរថយន្ត និងផ្តល់ការធានាពិត។ នឹងទិញម្តងទៀត។" }, name: "Menghay S." },
          ]} />
        </Section>
        <Section id="inventory" eyebrow={{ en: "In stock now", km: "មានស្តុកឥឡូវ" }} title={{ en: "Current inventory", km: "រថយន្តមានស្តុក" }} titleAlt={{ en: "A sample of what's on the floor", km: "គំរូរថយន្តក្នុងសាល" }}>
          <ListingGrid items={[
            { emoji: "🚙", name: { en: "Toyota Highlander 2023", km: "Toyota Highlander 2023" }, specs: { en: "2.4L Turbo · AWD · 12k km", km: "2.4L Turbo · AWD · 12k km" }, price: "$52,800", cta: { en: "Enquire", km: "សាកសួរ" } },
            { emoji: "🚗", name: { en: "Lexus RX 350 2022", km: "Lexus RX 350 2022" }, specs: { en: "3.5L V6 · Luxury · 18k km", km: "3.5L V6 · Luxury · 18k km" }, price: "$68,500", cta: { en: "Enquire", km: "សាកសួរ" } },
            { emoji: "🛻", name: { en: "Ford Ranger Wildtrak", km: "Ford Ranger Wildtrak" }, specs: { en: "2.0L Bi-Turbo · 4x4 · 9k km", km: "2.0L Bi-Turbo · 4x4 · 9k km" }, price: "$41,900", cta: { en: "Enquire", km: "សាកសួរ" } },
            { emoji: "🚘", name: { en: "Honda CR-V 2023", km: "Honda CR-V 2023" }, specs: { en: "1.5L Turbo · Hybrid · 6k km", km: "1.5L Turbo · Hybrid · 6k km" }, price: "$38,200", cta: { en: "Enquire", km: "សាកសួរ" } },
            { emoji: "🚐", name: { en: "Kia Carnival 2022", km: "Kia Carnival 2022" }, specs: { en: "3.5L V6 · 7 seats · 22k km", km: "3.5L V6 · 7 កៅអី · 22k km" }, price: "$45,700", cta: { en: "Enquire", km: "សាកសួរ" } },
            { emoji: "🏎️", name: { en: "Mercedes C300 AMG", km: "Mercedes C300 AMG" }, specs: { en: "2.0L Turbo · AMG line · 14k km", km: "2.0L Turbo · AMG · 14k km" }, price: "$74,900", cta: { en: "Enquire", km: "សាកសួរ" } },
          ]} />
        </Section>

        <Section alt eyebrow={{ en: "Every car", km: "រថយន្តគ្រប់គ្រឿង" }} title={{ en: "What's always included", km: "អ្វីដែលរួមបញ្ចូលជានិច្ច" }}>
          <CheckList cols={3} items={[
            { en: "Full inspection report", km: "របាយការណ៍ពិនិត្យ" },
            { en: "Verified mileage & history", km: "ចម្ងាយ និងប្រវត្តិផ្ទៀងផ្ទាត់" },
            { en: "Engine & gearbox warranty", km: "ធានាម៉ាស៊ីន និងលេខ" },
            { en: "Free first service", km: "សេវាដំបូងឥតគិតថ្លៃ" },
            { en: "Bank financing help", km: "ជំនួយកម្ចីធនាគារ" },
            { en: "Trade-in accepted", km: "ទទួលប្តូរ" },
            { en: "Paperwork handled", km: "រៀបចំឯកសារ" },
            { en: "Insurance assistance", km: "ជំនួយធានារ៉ាប់រង" },
            { en: "Import on request", km: "នាំចូលតាមតម្រូវការ" },
          ]} />
        </Section>

        <Section eyebrow={{ en: "FAQ", km: "សំណួរញឹកញាប់" }} title={{ en: "Buyer questions", km: "សំណួរអ្នកទិញ" }}>
          <FAQ items={[
            { q: { en: "Can I get a loan here?", km: "តើអាចខ្ចីប្រាក់ទីនេះទេ?" }, a: { en: "Yes — down payments from 20%, approval in one day with your ID.", km: "បាទ/ចាស — ប្រាក់កក់ ២០%, អនុម័តក្នុងមួយថ្ងៃ។" } },
            { q: { en: "Do you take trade-ins?", km: "តើទទួលប្តូររថយន្តទេ?" }, a: { en: "Absolutely — bring your car for a free valuation.", km: "ពិតណាស់ — នាំរថយន្តមកវាយតម្លៃឥតគិតថ្លៃ។" } },
            { q: { en: "What if the car I want isn't here?", km: "បើរថយន្តដែលចង់បានគ្មាន?" }, a: { en: "Tell us the model and budget and we'll import it for you.", km: "ប្រាប់ម៉ូដែល និងថវិកា យើងនាំចូលឱ្យ។" } },
          ]} />
        </Section>

        <BookingSection
          eyebrow={{ en: "Enquiry", km: "សាកសួរ" }} title={{ en: "Find your next car", km: "រករថយន្តបន្ទាប់" }}
          subtitle={{ en: "Tell us the model — if it's not in stock, we import it.", km: "ប្រាប់យើងម៉ូដែល — បើគ្មានក្នុងស្តុក យើងនាំចូលឱ្យ។" }}
          services={[{ en: "SUV", km: "SUV" }, { en: "Sedan", km: "Sedan" }, { en: "Pickup", km: "Pickup" }, { en: "Van", km: "Van" }]}
          extraLabel={{ en: "Budget", km: "ថវិកា" }}
          extraOptions={[{ en: "Under $30k", km: "ក្រោម $30k" }, { en: "$30k – $60k", km: "$30k – $60k" }, { en: "Over $60k", km: "លើស $60k" }]}
        />
        <Section id="contact" title={{ en: "Visit the showroom", km: "មកកាន់សាលបង្ហាញ" }}>
          <ContactBlock telegram={CONTACT.telegram} phone={CONTACT.phone}
            address={{ en: "National Road 1, Phnom Penh", km: "ផ្លូវជាតិលេខ ១, ភ្នំពេញ" }}
            hours={{ en: "Open daily · 8:00 AM – 7:00 PM", km: "បើករាល់ថ្ងៃ · ៨:០០ – ១៩:០០" }} />
        </Section>
        <DemoFooter text={{ en: "© 2026 Mekong Motors · Phnom Penh", km: "© ២០២៦ Mekong Motors · ភ្នំពេញ" }} />
        <DemoBadge />
      </DemoRoot>
    </DemoShell>
  );
}
