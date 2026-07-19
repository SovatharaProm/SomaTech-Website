import type { Metadata } from "next";
import { Droplets, Sparkles, ShieldCheck, Layers } from "lucide-react";
import DemoShell from "@/lib/demo-theme";
import {
  DemoRoot, DemoNav, Hero, Section, ServiceGrid, Steps, PricingTiers, Reviews,
  CheckList, HoursTable, FAQ, BookingSection, ContactBlock, DemoFooter, DemoBadge,
} from "@/components/demo-kit";

export const metadata: Metadata = {
  title: "Soma Auto Detailing — Car Care & Ceramic Coating | SomaTech Demo",
  description: "Demo website for an auto detailing studio: car wash, detailing, ceramic coating, and protection plans.",
};

const CONTACT = { telegram: "https://t.me/somatech_kh", phone: "tel:+85512345678" };

export default function Page() {
  return (
    <DemoShell slug="somadetailing">
      <DemoRoot accent="#0891b2">
        <DemoNav
          brand={<><span className="w-8 h-8 rounded-full bg-[var(--accent)] text-white flex items-center justify-center text-sm">🚗</span>Soma<span className="text-[var(--accent)]">Auto</span></>}
          links={[
            { label: { en: "Services", km: "សេវាកម្ម" }, href: "#services" },
            { label: { en: "How it works", km: "របៀបធ្វើ" }, href: "#process" },
            { label: { en: "Pricing", km: "តម្លៃ" }, href: "#pricing" },
          ]}
          cta={{ en: "Book now", km: "កក់ឥឡូវ" }} ctaHref="#book"
        />
        <Hero
          variant="bold"
          eyebrow={{ en: "Auto Detailing Studio · Phnom Penh", km: "ស្ទូឌីយោថែទាំរថយន្ត · ភ្នំពេញ" }}
          title={{ en: "Shine like", km: "ភ្លឺថ្លាដូច" }}
          titleAccent={{ en: "day one.", km: "ថ្ងៃដំបូង។" }}
          subtitle={{ en: "Wash, detailing, ceramic and PPF — with free pick-up in the city and a photo report on every job.", km: "លាង detailing ceramic និង PPF — មានសេវាទទួលឥតគិតថ្លៃក្នុងក្រុង និងរបាយការណ៍រូបភាពរាល់ការងារ។" }}
          subtitleAlt={{ en: "Open Mon–Sun, 8:00 AM – 6:00 PM", km: "បើក ច័ន្ទ–អាទិត្យ ៨:០០ – ១៨:០០" }}
          primary={{ label: { en: "Get a quote", km: "សុំតម្លៃ" }, href: "#book" }}
          secondary={{ label: { en: "View services", km: "មើលសេវាកម្ម" }, href: "#services" }}
          stats={[
            { value: 3000, suffix: "+", label: { en: "Cars detailed", km: "រថយន្តបានធ្វើ" } },
            { value: 4, suffix: ".9★", label: { en: "Google rating", km: "ការវាយតម្លៃ" } },
            { value: 3, suffix: " yr", label: { en: "Ceramic warranty", km: "ធានា ceramic" } },
            { value: 100, suffix: "%", label: { en: "Free city pick-up", km: "ទទួលឥតគិតថ្លៃ" } },
          ]}
        />
        <Section id="services" eyebrow={{ en: "Services & pricing", km: "សេវាកម្ម និងតម្លៃ" }} title={{ en: "What we do", km: "អ្វីដែលយើងធ្វើ" }}>
          <ServiceGrid items={[
            { icon: <Droplets size={20} />, name: { en: "Premium Wash", km: "លាងពិសេស" }, price: "$8", desc: { en: "Foam wash, wheel clean, interior vacuum, glass shine.", km: "លាងពពុះ សម្អាតកង់ បូមខាងក្នុង និងសម្អាតកញ្ចក់។" } },
            { icon: <Sparkles size={20} />, name: { en: "Full Detailing", km: "Detailing ពេញ" }, price: "$45", desc: { en: "Clay bar, machine polish, interior shampoo, engine bay.", km: "Clay bar ខាត់ម៉ាស៊ីន សម្អាតខាងក្នុង និងម៉ាស៊ីន។" } },
            { icon: <ShieldCheck size={20} />, name: { en: "Ceramic Coating", km: "ស្រោប Ceramic" }, price: "$249", desc: { en: "9H ceramic protection with a 3-year warranty.", km: "ការពារ ceramic 9H ធានា ៣ ឆ្នាំ។" } },
            { icon: <Layers size={20} />, name: { en: "PPF Protection", km: "ការពារ PPF" }, price: "$399+", desc: { en: "Paint protection film for high-impact zones.", km: "ខ្សែភាពយន្តការពារថ្នាំលាបសម្រាប់តំបន់ប៉ះទង្គិច។" } },
          ]} />
        </Section>
        <Section id="process" alt eyebrow={{ en: "Simple process", km: "ដំណើរការសាមញ្ញ" }} title={{ en: "How it works", km: "របៀបធ្វើការ" }}>
          <Steps items={[
            { n: "1", name: { en: "Book a slot", km: "កក់ម៉ោង" }, desc: { en: "Send your car model on Telegram — we confirm in minutes.", km: "ផ្ញើម៉ូដែលរថយន្តតាម Telegram — យើងបញ្ជាក់ក្នុងពេលបន្តិច។" } },
            { n: "2", name: { en: "We detail", km: "យើងធ្វើ" }, desc: { en: "Drop off or use our free pick-up inside Phnom Penh.", km: "នាំមកផ្ទាល់ ឬប្រើសេវាទទួលឥតគិតថ្លៃក្នុងភ្នំពេញ។" } },
            { n: "3", name: { en: "Drive shiny", km: "បើកបរភ្លឺថ្លា" }, desc: { en: "Photo report before hand-over, aftercare tips included.", km: "របាយការណ៍រូបភាពមុនប្រគល់ ជាមួយការណែនាំថែទាំ។" } },
          ]} />
        </Section>
        <Section id="pricing" eyebrow={{ en: "Plans", km: "គម្រោង" }} title={{ en: "Service plans", km: "គម្រោងសេវាកម្ម" }}>
          <PricingTiers tiers={[
            { name: { en: "Wash Club", km: "Wash Club" }, price: "$19", period: { en: "/mo", km: "/ខែ" }, features: [{ en: "4 premium washes / month", km: "លាងពិសេស ៤ ដង/ខែ" }, { en: "Interior vacuum", km: "បូមខាងក្នុង" }, { en: "Priority booking", km: "កក់អាទិភាព" }] },
            { name: { en: "Detail Pro", km: "Detail Pro" }, price: "$59", period: { en: "/mo", km: "/ខែ" }, popular: true, features: [{ en: "Everything in Wash Club", km: "អ្វីៗក្នុង Wash Club" }, { en: "1 full detailing / month", km: "Detailing ពេញ ១ ដង/ខែ" }, { en: "Free city pick-up", km: "ទទួលឥតគិតថ្លៃ" }] },
            { name: { en: "Ceramic Care", km: "Ceramic Care" }, price: "$249", period: { en: "once", km: "ម្តង" }, features: [{ en: "9H ceramic coating", km: "ស្រោប ceramic 9H" }, { en: "3-year warranty", km: "ធានា ៣ ឆ្នាំ" }, { en: "2 free maintenance washes", km: "លាងថែទាំ ២ ដងឥតគិតថ្លៃ" }] },
          ]} />
        </Section>
        <Section eyebrow={{ en: "Drivers", km: "អ្នកបើកបរ" }} title={{ en: "Driver reviews", km: "មតិអ្នកបើកបរ" }}>
          <Reviews reviews={[
            { text: { en: "My 5-year-old Lexus looks newer than the day I bought it. The ceramic coat is worth every dollar.", km: "Lexus អាយុ ៥ ឆ្នាំរបស់ខ្ញុំមើលទៅថ្មីជាងថ្ងៃទិញ។ ការស្រោប ceramic សមនឹងតម្លៃ។" }, name: "Vireak S." },
            { text: { en: "Fast, careful, and honest about what my car actually needed. Now on the monthly plan.", km: "លឿន ប្រុងប្រយ័ត្ន និងស្មោះត្រង់អំពីអ្វីដែលរថយន្តខ្ញុំត្រូវការ។" }, name: "Dara K." },
            { text: { en: "Booked on Telegram at 8am, car done by lunch. Best detailing in Phnom Penh.", km: "កក់តាម Telegram ម៉ោង ៨ ព្រឹក រថយន្តរួចម៉ោងថ្ងៃត្រង់។ ល្អបំផុតក្នុងភ្នំពេញ។" }, name: "Sokchea M." },
          ]} />
        </Section>
        <Section eyebrow={{ en: "Every job", km: "រាល់ការងារ" }} title={{ en: "What's always included", km: "អ្វីដែលរួមបញ្ចូលជានិច្ច" }}>
          <CheckList cols={3} items={[
            { en: "Free city pick-up & drop-off", km: "ទទួល-ប្រគល់ឥតគិតថ្លៃ" },
            { en: "Photo report before hand-over", km: "របាយការណ៍រូបភាព" },
            { en: "pH-neutral products", km: "ផលិតផល pH ធម្មតា" },
            { en: "Interior vacuum & wipe", km: "បូម និងជូតខាងក្នុង" },
            { en: "Tyre & trim dressing", km: "ថែកង់ និងគ្រឿង" },
            { en: "Aftercare guidance", km: "ការណែនាំថែទាំក្រោយ" },
            { en: "Ceramic warranty card", km: "កាតធានា ceramic" },
            { en: "Waiting lounge & wifi", km: "កន្លែងរង់ចាំ និង wifi" },
            { en: "Fleet & monthly plans", km: "គម្រោង fleet និងខែ" },
          ]} />
        </Section>

        <Section alt eyebrow={{ en: "Hours", km: "ម៉ោង" }} title={{ en: "Opening hours", km: "ម៉ោងបើក" }}>
          <HoursTable rows={[
            { day: { en: "Monday – Saturday", km: "ច័ន្ទ – សៅរ៍" }, time: "8:00 AM – 6:00 PM" },
            { day: { en: "Sunday", km: "អាទិត្យ" }, time: "9:00 AM – 5:00 PM" },
            { day: { en: "Pick-up requests", km: "ស្នើទទួលរថយន្ត" }, time: { en: "Until 4:00 PM", km: "រហូតដល់ ១៦:០០" } },
          ]} />
        </Section>

        <Section eyebrow={{ en: "FAQ", km: "សំណួរញឹកញាប់" }} title={{ en: "Common questions", km: "សំណួរទូទៅ" }}>
          <FAQ items={[
            { q: { en: "How long does ceramic coating take?", km: "តើស្រោប ceramic ចំណាយពេលប៉ុន្មាន?" }, a: { en: "Usually 1–2 days depending on paint condition. We keep the car safe indoors.", km: "ធម្មតា ១–២ ថ្ងៃ អាស្រ័យលើស្ថានភាពថ្នាំ។" } },
            { q: { en: "Do you pick up my car?", km: "តើអ្នកមកយករថយន្តទេ?" }, a: { en: "Yes — free pick-up and drop-off anywhere inside Phnom Penh.", km: "បាទ/ចាស — ទទួល-ប្រគល់ឥតគិតថ្លៃក្នុងភ្នំពេញ។" } },
            { q: { en: "Is there a warranty?", km: "តើមានការធានាទេ?" }, a: { en: "Ceramic coating comes with a 3-year warranty and free maintenance washes.", km: "ស្រោប ceramic ធានា ៣ ឆ្នាំ និងលាងថែទាំឥតគិតថ្លៃ។" } },
          ]} />
        </Section>

        <BookingSection
          eyebrow={{ en: "Appointment", km: "ការណាត់ជួប" }} title={{ en: "Book your detailing", km: "កក់ការធ្វើ detailing" }}
          subtitle={{ en: "Tell us your car and service — we confirm in minutes.", km: "ប្រាប់យើងអំពីរថយន្ត និងសេវាកម្ម — យើងបញ្ជាក់ក្នុងពេលបន្តិច។" }}
          services={[{ en: "Premium Wash", km: "លាងពិសេស" }, { en: "Full Detailing", km: "Detailing ពេញ" }, { en: "Ceramic Coating", km: "ស្រោប Ceramic" }, { en: "PPF Protection", km: "ការពារ PPF" }]}
          extraLabel={{ en: "Vehicle type", km: "ប្រភេទរថយន្ត" }}
          extraOptions={[{ en: "Sedan", km: "Sedan" }, { en: "SUV / Pickup", km: "SUV / Pickup" }, { en: "Van", km: "Van" }]}
        />
        <Section id="contact" title={{ en: "Find us", km: "រកយើង" }}>
          <ContactBlock telegram={CONTACT.telegram} phone={CONTACT.phone}
            address={{ en: "#35, Street 598, Phnom Penh", km: "#35, ផ្លូវ 598, ភ្នំពេញ" }}
            hours={{ en: "Mon–Sun · 8:00 AM – 6:00 PM", km: "ច័ន្ទ–អាទិត្យ · ៨:០០ – ១៨:០០" }} />
        </Section>
        <DemoFooter text={{ en: "© 2026 Soma Auto Detailing · Phnom Penh", km: "© ២០២៦ Soma Auto Detailing · ភ្នំពេញ" }} />
        <DemoBadge />
      </DemoRoot>
    </DemoShell>
  );
}
