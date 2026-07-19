import type { Metadata } from "next";
import { Palette, BookOpen, FlaskConical, Music } from "lucide-react";
import DemoShell from "@/lib/demo-theme";
import {
  DemoRoot, DemoNav, Hero, Section, ServiceGrid, PricingTiers, Reviews,
  MenuCategory, CheckList, FAQ, BookingSection, ContactBlock, DemoFooter, DemoBadge,
} from "@/components/demo-kit";

export const metadata: Metadata = {
  title: "BrightKids Academy — Kids School | SomaTech Demo",
  description: "Demo website for a kids learning center: programs, teachers, parent reviews, and enrollment.",
};

const CONTACT = { telegram: "https://t.me/somatech_kh", phone: "tel:+85512345678" };

export default function Page() {
  return (
    <DemoShell slug="somakids">
      <DemoRoot accent="#16a34a">
        <DemoNav
          brand={<><span className="w-8 h-8 rounded-xl bg-[var(--accent)] text-white flex items-center justify-center">🌟</span>BrightKids</>}
          links={[
            { label: { en: "Programs", km: "កម្មវិធី" }, href: "#services" },
            { label: { en: "Parents", km: "មាតាបិតា" }, href: "#reviews" },
            { label: { en: "Enroll", km: "ចុះឈ្មោះ" }, href: "#book" },
          ]}
          cta={{ en: "Enroll now", km: "ចុះឈ្មោះ" }} ctaHref="#book"
        />
        <Hero
          variant="center"
          eyebrow={{ en: "Fun Learning for Kids · Phnom Penh", km: "ការសិក្សារីករាយសម្រាប់កុមារ · ភ្នំពេញ" }}
          title={{ en: "Learn better, play brighter,", km: "រៀនពូកែ លេងរីករាយ" }}
          titleAccent={{ en: "grow smarter!", km: "ធំឆ្លាតវៃ!" }}
          subtitle={{ en: "A joyful learning centre for preschoolers and young learners — small classes, caring teachers, big smiles.", km: "មជ្ឈមណ្ឌលសិក្សារីករាយសម្រាប់កុមារ — ថ្នាក់តូច គ្រូយកចិត្តទុកដាក់ ស្នាមញញឹមធំ។" }}
          subtitleAlt={{ en: "Ages 3 to 12 · English & activities", km: "អាយុ ៣ ដល់ ១២ · អង់គ្លេស និងសកម្មភាព" }}
          primary={{ label: { en: "Start learning today", km: "ចាប់ផ្តើមថ្ងៃនេះ" }, href: "#book" }}
          secondary={{ label: { en: "Explore programs", km: "មើលកម្មវិធី" }, href: "#services" }}
          stats={[
            { value: 12, suffix: ":1", label: { en: "Student–teacher", km: "សិស្ស–គ្រូ" } },
            { value: 800, suffix: "+", label: { en: "Happy kids", km: "កុមាររីករាយ" } },
            { value: 4, suffix: ".9★", label: { en: "Parent rating", km: "មតិមាតាបិតា" } },
            { value: 8, suffix: "", label: { en: "Programs", km: "កម្មវិធី" } },
          ]}
        />
        <Section id="services" eyebrow={{ en: "Programs", km: "កម្មវិធី" }} title={{ en: "Our programs", km: "កម្មវិធីរបស់យើង" }}>
          <ServiceGrid items={[
            { icon: <Palette size={20} />, name: { en: "Little Explorers", km: "អ្នករុករកតូច" }, desc: { en: "Play-based learning, phonics, and art. Ages 3–5.", km: "រៀនតាមការលេង phonics និងសិល្បៈ។ អាយុ ៣–៥។" } },
            { icon: <BookOpen size={20} />, name: { en: "Creative English", km: "អង់គ្លេសច្នៃប្រឌិត" }, desc: { en: "Story-driven English with speaking games. Ages 6–9.", km: "អង់គ្លេសតាមរឿង ជាមួយល្បែងនិយាយ។ អាយុ ៦–៩។" } },
            { icon: <FlaskConical size={20} />, name: { en: "Young Scientists", km: "អ្នកវិទ្យាសាស្ត្រតូច" }, desc: { en: "Hands-on STEM projects and challenges. Ages 8–12.", km: "គម្រោង STEM ដោយដៃ និងបញ្ហាប្រកួត។ អាយុ ៨–១២។" } },
            { icon: <Music size={20} />, name: { en: "Weekend Club", km: "ក្លឹបចុងសប្តាហ៍" }, desc: { en: "Drama, music, and maker activities every Saturday.", km: "ល្ខោន តន្ត្រី និងសកម្មភាពរាល់ថ្ងៃសៅរ៍។" } },
          ]} />
        </Section>
        <Section id="pricing" alt eyebrow={{ en: "Tuition", km: "ថ្លៃសិក្សា" }} title={{ en: "Simple monthly plans", km: "គម្រោងប្រចាំខែសាមញ្ញ" }}>
          <PricingTiers tiers={[
            { name: { en: "2 Days / Week", km: "២ ថ្ងៃ/សប្តាហ៍" }, price: "$45", period: { en: "/mo", km: "/ខែ" }, features: [{ en: "2 sessions weekly", km: "២ វេន/សប្តាហ៍" }, { en: "All materials", km: "សម្ភារៈទាំងអស់" }, { en: "Progress reports", km: "របាយការណ៍វឌ្ឍនភាព" }] },
            { name: { en: "4 Days / Week", km: "៤ ថ្ងៃ/សប្តាហ៍" }, price: "$79", period: { en: "/mo", km: "/ខែ" }, popular: true, features: [{ en: "4 sessions weekly", km: "៤ វេន/សប្តាហ៍" }, { en: "Weekend club access", km: "ចូលក្លឹបចុងសប្តាហ៍" }, { en: "Termly showcase", km: "ការបង្ហាញប្រចាំវគ្គ" }] },
            { name: { en: "Full Program", km: "កម្មវិធីពេញ" }, price: "$119", period: { en: "/mo", km: "/ខែ" }, features: [{ en: "5 days + activities", km: "៥ ថ្ងៃ + សកម្មភាព" }, { en: "1-on-1 support", km: "ជំនួយ ១ ទល់ ១" }, { en: "Meals included", km: "មានអាហារ" }] },
          ]} />
        </Section>
        <Section eyebrow={{ en: "Parents", km: "មាតាបិតា" }} title={{ en: "What parents say", km: "មតិមាតាបិតា" }}>
          <Reviews reviews={[
            { text: { en: "Lina sings her English songs all week. She actually asks to go to school early!", km: "លីណាច្រៀងចម្រៀងអង់គ្លេសពេញមួយសប្តាហ៍។ នាងសុំទៅសាលាមុនម៉ោង!" }, name: "Ms. Sophea" },
            { text: { en: "The teachers send photos and progress notes every Friday. We always know how he's doing.", km: "គ្រូផ្ញើរូបភាព និងកំណត់ចំណាំរាល់ថ្ងៃសុក្រ។ យើងតែងដឹងពីវឌ្ឍនភាព។" }, name: "Mr. Rithy" },
          ]} />
        </Section>
        <Section eyebrow={{ en: "A day with us", km: "មួយថ្ងៃជាមួយយើង" }} title={{ en: "Daily schedule", km: "កាលវិភាគប្រចាំថ្ងៃ" }}>
          <MenuCategory title={{ en: "Typical day", km: "ថ្ងៃធម្មតា" }} items={[
            { name: { en: "Morning circle & phonics", km: "រង្វង់ព្រឹក និង phonics" }, price: "8:30 AM" },
            { name: { en: "Creative English lesson", km: "មេរៀនអង់គ្លេស" }, price: "9:30 AM" },
            { name: { en: "Snack & outdoor play", km: "អាហារសម្រន់ និងលេង" }, price: "10:30 AM" },
            { name: { en: "Art, STEM or music", km: "សិល្បៈ STEM ឬតន្ត្រី" }, price: "11:00 AM" },
            { name: { en: "Story time & pickup", km: "ពេលនិទានរឿង និងទទួល" }, price: "12:00 PM" },
          ]} />
        </Section>

        <Section alt eyebrow={{ en: "Good to know", km: "គួរដឹង" }} title={{ en: "What's included", km: "អ្វីដែលរួមបញ្ចូល" }}>
          <CheckList cols={3} items={[
            { en: "All learning materials", km: "សម្ភារៈសិក្សាទាំងអស់" },
            { en: "Small class sizes", km: "ថ្នាក់តូច" },
            { en: "Certified teachers", km: "គ្រូមានវិញ្ញាបនបត្រ" },
            { en: "Weekly progress photos", km: "រូបភាពវឌ្ឍនភាព" },
            { en: "Safe, gated campus", km: "សាលាមានរបង" },
            { en: "Healthy snacks", km: "អាហារសម្រន់ល្អ" },
            { en: "Air-conditioned rooms", km: "បន្ទប់ម៉ាស៊ីនត្រជាក់" },
            { en: "Parent app updates", km: "កម្មវិធីជូនដំណឹងមាតាបិតា" },
            { en: "Free trial class", km: "ថ្នាក់សាកល្បងឥតគិតថ្លៃ" },
          ]} />
        </Section>

        <Section eyebrow={{ en: "FAQ", km: "សំណួរញឹកញាប់" }} title={{ en: "Parent questions", km: "សំណួរមាតាបិតា" }}>
          <FAQ items={[
            { q: { en: "What ages do you accept?", km: "តើទទួលអាយុប៉ុន្មាន?" }, a: { en: "From 3 to 12 years, grouped by age and level.", km: "ចាប់ពី ៣ ដល់ ១២ ឆ្នាំ ចែកតាមអាយុ។" } },
            { q: { en: "Can we try before enrolling?", km: "តើអាចសាកមុនចុះឈ្មោះទេ?" }, a: { en: "Yes — book a free trial class and tour the campus with your child.", km: "បាទ/ចាស — កក់ថ្នាក់សាកល្បងឥតគិតថ្លៃ។" } },
            { q: { en: "Do you provide meals?", km: "តើមានអាហារទេ?" }, a: { en: "Healthy snacks are included; the full program adds lunch.", km: "មានអាហារសម្រន់ល្អ; កម្មវិធីពេញមានអាហារថ្ងៃត្រង់។" } },
          ]} />
        </Section>

        <BookingSection
          eyebrow={{ en: "Enrollment", km: "ការចុះឈ្មោះ" }} title={{ en: "Book a free trial class", km: "កក់ថ្នាក់សាកល្បងឥតគិតថ្លៃ" }}
          subtitle={{ en: "Kids love it, and parents can tour the campus.", km: "កុមារចូលចិត្ត ហើយមាតាបិតាអាចទស្សនាសាលា។" }}
          services={[{ en: "Little Explorers (3–5)", km: "អ្នករុករកតូច (៣–៥)" }, { en: "Creative English (6–9)", km: "អង់គ្លេស (៦–៩)" }, { en: "Young Scientists (8–12)", km: "វិទ្យាសាស្ត្រ (៨–១២)" }]}
        />
        <Section id="contact" title={{ en: "Come visit us", km: "មកលេងយើង" }}>
          <ContactBlock telegram={CONTACT.telegram} phone={CONTACT.phone}
            address={{ en: "Toul Kork, Phnom Penh", km: "ទួលគោក, ភ្នំពេញ" }}
            hours={{ en: "Mon–Sat · 8:00 AM – 5:00 PM", km: "ច័ន្ទ–សៅរ៍ · ៨:០០ – ១៧:០០" }} />
        </Section>
        <DemoFooter text={{ en: "© 2026 BrightKids Academy · Phnom Penh", km: "© ២០២៦ BrightKids Academy · ភ្នំពេញ" }} />
        <DemoBadge />
      </DemoRoot>
    </DemoShell>
  );
}
