import type { Metadata } from "next";
import DemoShell from "@/lib/demo-theme";
import {
  DemoRoot, DemoNav, Hero, Section, MenuCategory, Steps, TeamGrid, Gallery,
  CheckList, FAQ, Reviews, BookingSection, ContactBlock, DemoFooter, DemoBadge,
} from "@/components/demo-kit";

export const metadata: Metadata = {
  title: "Align Dental Studio — Premium Dental Clinic | SomaTech Demo",
  description: "Demo website for a dental clinic: full treatment list, doctors, results, and appointments.",
};

const CONTACT = { telegram: "https://t.me/somatech_kh", phone: "tel:+85512345678" };

export default function Page() {
  return (
    <DemoShell slug="somadental">
      <DemoRoot accent="#2563eb">
        <DemoNav
          brand={<><span className="w-8 h-8 rounded-lg bg-[var(--accent)] text-white flex items-center justify-center text-sm">🦷</span>Align Dental</>}
          links={[
            { label: { en: "Treatments", km: "សេវាព្យាបាល" }, href: "#menu" },
            { label: { en: "Doctors", km: "វេជ្ជបណ្ឌិត" }, href: "#team" },
            { label: { en: "Results", km: "លទ្ធផល" }, href: "#results" },
            { label: { en: "FAQ", km: "សំណួរ" }, href: "#faq" },
          ]}
          cta={{ en: "Book a visit", km: "ណាត់ជួប" }} ctaHref="#book"
        />
        <Hero
          eyebrow={{ en: "Premium Orthodontic Care · Phnom Penh", km: "ការតម្រង់ធ្មេញប្រណីត · ភ្នំពេញ" }}
          title={{ en: "Make your smile look as premium as you", km: "ធ្វើឱ្យស្នាមញញឹមរបស់អ្នក" }}
          titleAccent={{ en: "deserve.", km: "ស្អាតប្រណីត។" }}
          subtitle={{ en: "Braces, clear aligners, whitening and smile design — planned digitally, delivered gently.", km: "តម្រង់ធ្មេញ ធ្វើឱ្យធ្មេញស និងរចនាស្នាមញញឹម — គ្រោងជាមួយបច្ចេកវិទ្យា។" }}
          subtitleAlt={{ en: "Free first consultation & digital scan.", km: "ពិគ្រោះដំបូង និងស្កេនឌីជីថលឥតគិតថ្លៃ។" }}
          primary={{ label: { en: "Request appointment", km: "ស្នើសុំណាត់ជួប" }, href: "#book" }}
          secondary={{ label: { en: "See treatments", km: "មើលសេវាកម្ម" }, href: "#menu" }}
          stats={[
            { value: 12, suffix: "+", label: { en: "Years experience", km: "ឆ្នាំបទពិសោធន៍" } },
            { value: 8500, suffix: "+", label: { en: "Happy smiles", km: "ស្នាមញញឹម" } },
            { value: 4, suffix: ".9★", label: { en: "Patient rating", km: "ការវាយតម្លៃ" } },
            { value: 5, suffix: "", label: { en: "Specialists", km: "គ្រូពេទ្យ" } },
          ]}
        />

        <Section id="menu" eyebrow={{ en: "Treatments & prices", km: "សេវាកម្ម និងតម្លៃ" }} title={{ en: "Full treatment list", km: "បញ្ជីសេវាកម្មពេញ" }} titleAlt={{ en: "Transparent pricing, no surprises", km: "តម្លៃច្បាស់លាស់" }}>
          <MenuCategory title={{ en: "General Dentistry", km: "ធ្មេញទូទៅ" }} items={[
            { name: { en: "Consultation & digital scan", km: "ពិគ្រោះ និងស្កេន" }, price: "Free", desc: { en: "Full assessment and a personalised plan.", km: "ការវាយតម្លៃ និងផែនការផ្ទាល់ខ្លួន។" } },
            { name: { en: "Scaling & polishing", km: "ដុសសម្អាតធ្មេញ" }, price: "$25" },
            { name: { en: "Tooth filling", km: "ស៊ុតធ្មេញ" }, price: "$30+" },
            { name: { en: "Root canal", km: "ព្យាបាលឫសធ្មេញ" }, price: "$90+" },
          ]} />
          <MenuCategory title={{ en: "Cosmetic", km: "សម្ផស្ស" }} items={[
            { name: { en: "In-clinic whitening", km: "ធ្វើឱ្យធ្មេញស" }, price: "$120", desc: { en: "Visible results in one session.", km: "ឃើញលទ្ធផលក្នុងលើកតែមួយ។" } },
            { name: { en: "Veneers (per tooth)", km: "Veneer (ក្នុងមួយ)" }, price: "$150+" },
            { name: { en: "Smile design", km: "រចនាស្នាមញញឹម" }, price: "By quote" },
          ]} />
          <MenuCategory title={{ en: "Orthodontics", km: "តម្រង់ធ្មេញ" }} items={[
            { name: { en: "Metal braces", km: "ដែកតម្រង់ធ្មេញ" }, price: "$650+", desc: { en: "Monthly payment plans available.", km: "មានគម្រោងបង់ប្រចាំខែ។" } },
            { name: { en: "Ceramic braces", km: "សេរ៉ាមិច" }, price: "$900+" },
            { name: { en: "Clear aligners", km: "Aligner ថ្លា" }, price: "$1,200+" },
          ]} />
        </Section>

        <Section alt eyebrow={{ en: "Your visit", km: "ការមករបស់អ្នក" }} title={{ en: "What to expect", km: "អ្វីដែលរំពឹងទុក" }}>
          <Steps items={[
            { n: "1", name: { en: "Free consultation", km: "ពិគ្រោះឥតគិតថ្លៃ" }, desc: { en: "Digital scan and a clear, itemised plan.", km: "ស្កេនឌីជីថល និងផែនការច្បាស់លាស់។" } },
            { n: "2", name: { en: "Gentle treatment", km: "ព្យាបាលថ្នមៗ" }, desc: { en: "Comfortable, on-schedule appointments.", km: "ការណាត់ស្រួល ទាន់ពេល។" } },
            { n: "3", name: { en: "Aftercare & follow-up", km: "ថែទាំក្រោយ" }, desc: { en: "Reminders and check-ups to keep results.", km: "ការរំលឹក និងពិនិត្យ រក្សាលទ្ធផល។" } },
          ]} />
        </Section>

        <Section eyebrow={{ en: "Good to know", km: "គួរដឹង" }} title={{ en: "Included & available", km: "រួមបញ្ចូល និងមាន" }}>
          <CheckList cols={3} items={[
            { en: "Free first consultation", km: "ពិគ្រោះដំបូងឥតគិតថ្លៃ" },
            { en: "Monthly payment plans", km: "គម្រោងបង់ប្រចាំខែ" },
            { en: "Digital 3D scanning", km: "ស្កេន 3D ឌីជីថល" },
            { en: "Sterilised, single-use tools", km: "ឧបករណ៍ស្អាត ប្រើម្តង" },
            { en: "Kids & family friendly", km: "សម្រាប់កុមារ និងគ្រួសារ" },
            { en: "Emergency slots daily", km: "ម៉ោងបន្ទាន់រាល់ថ្ងៃ" },
            { en: "English & Khmer speaking", km: "និយាយអង់គ្លេស និងខ្មែរ" },
            { en: "Free parking", km: "ចតរថយន្តឥតគិតថ្លៃ" },
            { en: "Online consultation", km: "ពិគ្រោះតាមអនឡាញ" },
          ]} />
        </Section>

        <Section id="team" alt eyebrow={{ en: "Meet the team", km: "ក្រុមការងារ" }} title={{ en: "Our doctors", km: "វេជ្ជបណ្ឌិត" }}>
          <TeamGrid members={[
            { emoji: "👩‍⚕️", name: { en: "Dr. Sreyneang", km: "វេជ្ជ. ស្រីនាង" }, role: { en: "Orthodontist", km: "ឯកទេសតម្រង់ធ្មេញ" } },
            { emoji: "👨‍⚕️", name: { en: "Dr. Rathana", km: "វេជ្ជ. រតនា" }, role: { en: "Implant surgeon", km: "វះកាត់ implant" } },
            { emoji: "👩‍⚕️", name: { en: "Dr. Kanha", km: "វេជ្ជ. កញ្ញា" }, role: { en: "Pediatric dentist", km: "ធ្មេញកុមារ" } },
            { emoji: "🧑‍⚕️", name: { en: "Dr. Visal", km: "វេជ្ជ. វិសាល" }, role: { en: "Endodontist", km: "ព្យាបាលឫសធ្មេញ" } },
          ]} />
        </Section>

        <Section id="results" eyebrow={{ en: "Before & after", km: "មុន & ក្រោយ" }} title={{ en: "Real smile results", km: "លទ្ធផលពិត" }}>
          <Gallery tiles={[
            { emoji: "😁", label: { en: "Aligners", km: "Aligner" } },
            { emoji: "✨", label: { en: "Whitening", km: "ធ្វើឱ្យស" } },
            { emoji: "🦷", label: { en: "Veneers", km: "Veneer" } },
            { emoji: "🪥", label: { en: "Cleaning", km: "សម្អាត" } },
          ]} />
        </Section>

        <Section alt eyebrow={{ en: "Patients", km: "អ្នកជំងឺ" }} title={{ en: "What patients say", km: "មតិអ្នកជំងឺ" }}>
          <Reviews reviews={[
            { text: { en: "My aligners were done in 8 months and the team explained every step. My smile is exactly what they designed.", km: "Aligner ចប់ក្នុង ៨ ខែ ក្រុមការងារពន្យល់គ្រប់ជំហាន។" }, name: "Sokha P." },
            { text: { en: "Painless whitening and honest advice — they didn't upsell me anything.", km: "ធ្វើឱ្យធ្មេញសដោយឥតឈឺ និងដំបូន្មានស្មោះត្រង់។" }, name: "Dara L." },
          ]} />
        </Section>

        <Section id="faq" eyebrow={{ en: "FAQ", km: "សំណួរញឹកញាប់" }} title={{ en: "Common questions", km: "សំណួរទូទៅ" }}>
          <FAQ items={[
            { q: { en: "Do you offer payment plans?", km: "តើមានគម្រោងបង់រំលស់ទេ?" }, a: { en: "Yes — braces and aligners can be paid monthly over the treatment period.", km: "បាទ/ចាស — ដែក និង aligner អាចបង់ប្រចាំខែ។" } },
            { q: { en: "Is the first visit really free?", km: "តើការមកលើកដំបូងឥតគិតថ្លៃមែនទេ?" }, a: { en: "Yes, the consultation and digital scan are free with no obligation.", km: "បាទ/ចាស ការពិគ្រោះ និងស្កេនឥតគិតថ្លៃ គ្មានកាតព្វកិច្ច។" } },
            { q: { en: "Do you treat children?", km: "តើព្យាបាលកុមារទេ?" }, a: { en: "Absolutely — we have a pediatric dentist and a kid-friendly clinic.", km: "ពិតណាស់ — យើងមានពេទ្យធ្មេញកុមារ។" } },
          ]} />
        </Section>

        <BookingSection
          eyebrow={{ en: "Appointment", km: "ការណាត់ជួប" }} title={{ en: "Request your appointment", km: "ស្នើសុំការណាត់ជួប" }}
          subtitle={{ en: "We reply within the hour during clinic time.", km: "យើងឆ្លើយតបក្នុងមួយម៉ោង។" }}
          services={[{ en: "Free consultation", km: "ពិគ្រោះឥតគិតថ្លៃ" }, { en: "Cleaning", km: "សម្អាតធ្មេញ" }, { en: "Whitening", km: "ធ្វើឱ្យធ្មេញស" }, { en: "Braces / Aligners", km: "តម្រង់ធ្មេញ" }]}
        />
        <Section id="contact" title={{ en: "Visit us", km: "មកជួបយើង" }}>
          <ContactBlock telegram={CONTACT.telegram} phone={CONTACT.phone}
            address={{ en: "#88, Street 271, Phnom Penh", km: "#88, ផ្លូវ 271, ភ្នំពេញ" }}
            hours={{ en: "Mon–Sat · 8:00 AM – 6:00 PM", km: "ច័ន្ទ–សៅរ៍ · ៨:០០ – ១៨:០០" }} />
        </Section>
        <DemoFooter text={{ en: "© 2026 Align Dental Studio · Phnom Penh", km: "© ២០២៦ Align Dental Studio · ភ្នំពេញ" }} />
        <DemoBadge />
      </DemoRoot>
    </DemoShell>
  );
}
