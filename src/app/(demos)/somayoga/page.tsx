import type { Metadata } from "next";
import DemoShell from "@/lib/demo-theme";
import {
  DemoRoot, DemoNav, Hero, Section, MenuList, TeamGrid, Reviews,
  CheckList, PricingTiers, FAQ, BookingSection, ContactBlock, DemoFooter, DemoBadge,
} from "@/components/demo-kit";

export const metadata: Metadata = {
  title: "Anlong Yoga — Yoga Studio | SomaTech Demo",
  description: "Demo website for a yoga studio: class schedule, instructors, retreats, and first-class booking.",
};

const CONTACT = { telegram: "https://t.me/somatech_kh", phone: "tel:+85512345678" };

export default function Page() {
  return (
    <DemoShell slug="somayoga">
      <DemoRoot accent="#9333ea">
        <DemoNav
          brand={<>☾ Anlong Yoga</>}
          links={[
            { label: { en: "Schedule", km: "កាលវិភាគ" }, href: "#services" },
            { label: { en: "Teachers", km: "គ្រូ" }, href: "#team" },
            { label: { en: "First class", km: "ថ្នាក់ដំបូង" }, href: "#book" },
          ]}
          cta={{ en: "First class $3", km: "ថ្នាក់ដំបូង $3" }} ctaHref="#book"
        />
        <Hero
          variant="center"
          eyebrow={{ en: "Yoga & Breathwork · Phnom Penh", km: "យូហ្គា & ដកដង្ហើម · ភ្នំពេញ" }}
          title={{ en: "Breathe in,", km: "ដកដង្ហើមចូល" }}
          titleAccent={{ en: "stress out.", km: "រំសាយភាពតានតឹង។" }}
          subtitle={{ en: "Small classes on a quiet rooftop — morning light, evening calm, and teachers who meet you where you are.", km: "ថ្នាក់តូចនៅលើដំបូលស្ងប់ស្ងាត់ — ពន្លឺព្រឹក ភាពស្ងប់ល្ងាច និងគ្រូដែលយល់អ្នក។" }}
          subtitleAlt={{ en: "No experience needed — beginners welcome.", km: "មិនត្រូវការបទពិសោធន៍ — អ្នកចាប់ផ្តើមស្វាគមន៍។" }}
          primary={{ label: { en: "Try your first class", km: "សាកថ្នាក់ដំបូង" }, href: "#book" }}
          secondary={{ label: { en: "Class schedule", km: "កាលវិភាគ" }, href: "#services" }}
          stats={[
            { value: 20, suffix: "+", label: { en: "Classes / week", km: "ថ្នាក់/សប្តាហ៍" } },
            { value: 4, suffix: ".9★", label: { en: "Studio rating", km: "ការវាយតម្លៃ" } },
            { value: 6, suffix: "", label: { en: "Teachers", km: "គ្រូ" } },
            { value: 3, suffix: "", label: { en: "First class ($)", km: "ថ្នាក់ដំបូង ($)" } },
          ]}
        />
        <Section id="services" eyebrow={{ en: "Weekly schedule", km: "កាលវិភាគប្រចាំសប្តាហ៍" }} title={{ en: "Daily classes", km: "ថ្នាក់ប្រចាំថ្ងៃ" }}>
          <MenuList items={[
            { name: { en: "Sunrise Vinyasa · all levels", km: "Vinyasa ព្រឹក · គ្រប់កម្រិត" }, price: "6:30 AM", desc: { en: "Flowing morning practice to wake the body.", km: "ការហ្វឹកហាត់ព្រឹក លំហូរ ដាស់រាងកាយ។" } },
            { name: { en: "Lunch Flow · beginner", km: "Flow ថ្ងៃត្រង់ · ដំបូង" }, price: "12:00 PM", desc: { en: "A quick reset in the middle of the day.", km: "សម្រាកខ្លីៗ ពាក់កណ្តាលថ្ងៃ។" } },
            { name: { en: "Yin & Restore · all levels", km: "Yin & ស្តារ · គ្រប់កម្រិត" }, price: "5:30 PM", desc: { en: "Slow, deep stretching to unwind the day.", km: "ការទាញយឺតៗ ជ្រៅ រំសាយថ្ងៃ។" } },
            { name: { en: "Power Yoga · intermediate", km: "Power Yoga · មធ្យម" }, price: "7:00 PM", desc: { en: "Strong, dynamic flow to build heat.", km: "លំហូរខ្លាំង សម្រាប់អ្នកកម្រិតមធ្យម។" } },
          ]} />
        </Section>
        <Section id="team" alt eyebrow={{ en: "Your teachers", km: "គ្រូរបស់អ្នក" }} title={{ en: "Meet the teachers", km: "ជួបគ្រូ" }}>
          <div className="max-w-3xl mx-auto"><TeamGrid members={[
            { emoji: "🧘‍♀️", name: { en: "Sreymom", km: "ស្រីមុំ" }, role: { en: "Vinyasa · Yin", km: "Vinyasa · Yin" } },
            { emoji: "🧘", name: { en: "Marco", km: "ម៉ាកូ" }, role: { en: "Power · Mobility", km: "Power · Mobility" } },
            { emoji: "🧘‍♀️", name: { en: "Dalin", km: "ដាលីន" }, role: { en: "Prenatal · Restore", km: "ផ្ទៃពោះ · ស្តារ" } },
            { emoji: "🧘‍♂️", name: { en: "Vibol", km: "វិបុល" }, role: { en: "Breathwork", km: "ដកដង្ហើម" } },
          ]} /></div>
        </Section>
        <Section eyebrow={{ en: "Students", km: "សិស្ស" }} title={{ en: "What students say", km: "មតិសិស្ស" }}>
          <Reviews reviews={[
            { text: { en: "I came for the stretch and stayed for the calm. My sleep has never been better.", km: "ខ្ញុំមកសម្រាប់ការទាញ ហើយនៅសម្រាប់ភាពស្ងប់។ ការគេងខ្ញុំប្រសើរជាងមុន។" }, name: "Leakhena S." },
            { text: { en: "The teachers are patient and kind. Best decision I made this year.", km: "គ្រូអត់ធ្មត់ និងចិត្តល្អ។ ការសម្រេចចិត្តល្អបំផុតឆ្នាំនេះ។" }, name: "Sovann P." },
          ]} />
        </Section>
        <Section eyebrow={{ en: "Good to know", km: "គួរដឹង" }} title={{ en: "What's included", km: "អ្វីដែលរួមបញ្ចូល" }}>
          <CheckList cols={3} items={[
            { en: "Mats & props provided", km: "កម្រាល និងឧបករណ៍" },
            { en: "Showers & lockers", km: "កន្លែងងូតទឹក និងទូ" },
            { en: "Beginners welcome", km: "អ្នកចាប់ផ្តើមស្វាគមន៍" },
            { en: "Small class sizes", km: "ថ្នាក់តូច" },
            { en: "Rooftop garden studio", km: "ស្ទូឌីយោដំបូល" },
            { en: "Herbal tea after class", km: "តែឱសថក្រោយថ្នាក់" },
            { en: "Weekend workshops", km: "សិក្ខាសាលាចុងសប្តាហ៍" },
            { en: "Private & prenatal classes", km: "ថ្នាក់ឯកជន និងផ្ទៃពោះ" },
            { en: "Free first class trial", km: "សាកល្បងថ្នាក់ដំបូង" },
          ]} />
        </Section>

        <Section id="pricing" alt eyebrow={{ en: "Passes", km: "ប័ណ្ណ" }} title={{ en: "Class passes", km: "ប័ណ្ណថ្នាក់" }}>
          <PricingTiers tiers={[
            { name: { en: "Drop-in", km: "ចូលម្តង" }, price: "$5", period: { en: "/class", km: "/ថ្នាក់" }, features: [{ en: "Any single class", km: "ថ្នាក់ណាមួយ" }, { en: "Mats included", km: "មានកម្រាល" }, { en: "No commitment", km: "គ្មានកិច្ចសន្យា" }] },
            { name: { en: "10-Class Pass", km: "ប័ណ្ណ ១០ ថ្នាក់" }, price: "$40", popular: true, features: [{ en: "Save on every class", km: "សន្សំរាល់ថ្នាក់" }, { en: "Valid 3 months", km: "សុពលភាព ៣ ខែ" }, { en: "Any class type", km: "ថ្នាក់ណាមួយ" }] },
            { name: { en: "Unlimited Monthly", km: "គ្មានដែនប្រចាំខែ" }, price: "$55", period: { en: "/mo", km: "/ខែ" }, features: [{ en: "Unlimited classes", km: "ថ្នាក់គ្មានដែន" }, { en: "Workshop discounts", km: "បញ្ចុះតម្លៃសិក្ខាសាលា" }, { en: "Bring a friend free", km: "នាំមិត្តឥតគិតថ្លៃ" }] },
          ]} />
        </Section>

        <Section eyebrow={{ en: "FAQ", km: "សំណួរញឹកញាប់" }} title={{ en: "New to yoga?", km: "ថ្មីនឹងយូហ្គា?" }}>
          <FAQ items={[
            { q: { en: "I've never done yoga — is that okay?", km: "ខ្ញុំមិនធ្លាប់ធ្វើយូហ្គា — បានទេ?" }, a: { en: "Completely. Start with Lunch Flow or Yin & Restore — our teachers guide every step.", km: "បានទាំងស្រុង។ ចាប់ផ្តើមជាមួយ Lunch Flow ឬ Yin។" } },
            { q: { en: "What should I bring?", km: "តើគួរនាំអ្វីមក?" }, a: { en: "Just comfortable clothes and water — mats and props are provided.", km: "គ្រាន់តែសម្លៀកបំពាក់ស្រួល និងទឹក — មានកម្រាល។" } },
            { q: { en: "Do you offer private classes?", km: "តើមានថ្នាក់ឯកជនទេ?" }, a: { en: "Yes, including prenatal and 1-on-1 sessions — ask on Telegram.", km: "បាទ/ចាស រួមទាំងផ្ទៃពោះ និង ១ ទល់ ១។" } },
          ]} />
        </Section>

        <BookingSection
          eyebrow={{ en: "First class", km: "ថ្នាក់ដំបូង" }} title={{ en: "Your first class is $3", km: "ថ្នាក់ដំបូង $3" }}
          subtitle={{ en: "Message us and just show up — we'll take care of the rest.", km: "ផ្ញើសារ ហើយគ្រាន់តែមក — យើងរៀបចំនៅសល់។" }}
          services={[{ en: "Sunrise Vinyasa", km: "Vinyasa ព្រឹក" }, { en: "Lunch Flow", km: "Flow ថ្ងៃត្រង់" }, { en: "Yin & Restore", km: "Yin & ស្តារ" }, { en: "Power Yoga", km: "Power Yoga" }]}
        />
        <Section id="contact" title={{ en: "Find us", km: "រកយើង" }}>
          <ContactBlock telegram={CONTACT.telegram} phone={CONTACT.phone}
            address={{ en: "Riverside, Phnom Penh", km: "តាមដងទន្លេ, ភ្នំពេញ" }}
            hours={{ en: "Mon–Sat · classes from 6:30 AM", km: "ច័ន្ទ–សៅរ៍ · ថ្នាក់ចាប់ពី ៦:៣០ ព្រឹក" }} />
        </Section>
        <DemoFooter text={{ en: "© 2026 Anlong Yoga · Phnom Penh", km: "© ២០២៦ Anlong Yoga · ភ្នំពេញ" }} />
        <DemoBadge />
      </DemoRoot>
    </DemoShell>
  );
}
