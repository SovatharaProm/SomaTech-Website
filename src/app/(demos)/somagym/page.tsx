import type { Metadata } from "next";
import { Dumbbell, Zap, Bike, HeartPulse } from "lucide-react";
import DemoShell from "@/lib/demo-theme";
import {
  DemoRoot, DemoNav, Hero, Section, ServiceGrid, MenuCategory, TeamGrid, CheckList,
  PricingTiers, FAQ, Reviews, BookingSection, ContactBlock, DemoFooter, DemoBadge,
} from "@/components/demo-kit";

export const metadata: Metadata = {
  title: "Forge Gym — Fitness & Training | SomaTech Demo",
  description: "Demo website for a gym: class timetable, facilities, trainers, membership, and free trials.",
};

const CONTACT = { telegram: "https://t.me/somatech_kh", phone: "tel:+85512345678" };

export default function Page() {
  return (
    <DemoShell slug="somagym">
      <DemoRoot accent="#65a30d" accentFg="#1a2e05">
        <DemoNav
          brand={<>Forge<span className="text-[var(--accent)]">Gym</span></>}
          links={[
            { label: { en: "Classes", km: "ថ្នាក់ហាត់" }, href: "#classes" },
            { label: { en: "Timetable", km: "កាលវិភាគ" }, href: "#timetable" },
            { label: { en: "Membership", km: "សមាជិកភាព" }, href: "#pricing" },
            { label: { en: "Free trial", km: "សាកល្បង" }, href: "#book" },
          ]}
          cta={{ en: "Free trial", km: "សាកល្បង" }} ctaHref="#book"
        />
        <Hero
          variant="bold"
          eyebrow={{ en: "Train Hard · Open 24/7 · Phnom Penh", km: "ហាត់ខ្លាំង · បើក ២៤/៧ · ភ្នំពេញ" }}
          title={{ en: "Stronger", km: "រឹងមាំ" }}
          titleAccent={{ en: "every day.", km: "រាល់ថ្ងៃ។" }}
          subtitle={{ en: "24/7 access, real coaches, and a community that shows up. Your first session is on us.", km: "ចូល ២៤/៧ គ្រូបង្ហាត់ពិត និងសហគមន៍។ វេនដំបូងឥតគិតថ្លៃ។" }}
          subtitleAlt={{ en: "No joining fee this month.", km: "គ្មានថ្លៃចូលរួមខែនេះ។" }}
          primary={{ label: { en: "Start free trial", km: "ចាប់ផ្តើមសាកល្បង" }, href: "#book" }}
          secondary={{ label: { en: "See membership", km: "មើលសមាជិកភាព" }, href: "#pricing" }}
          stats={[
            { value: 24, suffix: "/7", label: { en: "Gym access", km: "ចូលជីម" } },
            { value: 1200, suffix: "+", label: { en: "Members", km: "សមាជិក" } },
            { value: 15, suffix: "+", label: { en: "Weekly classes", km: "ថ្នាក់/សប្តាហ៍" } },
            { value: 8, suffix: "", label: { en: "Coaches", km: "គ្រូបង្ហាត់" } },
          ]}
        />

        <Section id="classes" eyebrow={{ en: "Group classes", km: "ថ្នាក់ក្រុម" }} title={{ en: "Find your session", km: "រកវេនរបស់អ្នក" }}>
          <ServiceGrid items={[
            { icon: <Dumbbell size={20} />, name: { en: "Strength", km: "កម្លាំង" }, desc: { en: "Barbell and free-weight coaching for real gains.", km: "បង្ហាត់លើកទម្ងន់ សម្រាប់លទ្ធផលពិត។" } },
            { icon: <Zap size={20} />, name: { en: "Boxing", km: "ប្រដាល់" }, desc: { en: "Pads, bags, and conditioning to burn it all off.", km: "ដៃ កាបូប និងការហ្វឹកហាត់។" } },
            { icon: <Bike size={20} />, name: { en: "Spin", km: "Spin" }, desc: { en: "High-energy indoor cycling with big playlists.", km: "ជិះកង់ក្នុងផ្ទះពេញថាមពល។" } },
            { icon: <HeartPulse size={20} />, name: { en: "Functional", km: "Functional" }, desc: { en: "Mobility and full-body circuits for every level.", km: "ចលនា និងសៀគ្វីទាំងខ្លួន។" } },
          ]} />
        </Section>

        <Section id="timetable" alt eyebrow={{ en: "Weekly timetable", km: "កាលវិភាគសប្តាហ៍" }} title={{ en: "Class schedule", km: "កាលវិភាគថ្នាក់" }} titleAlt={{ en: "Same times every week", km: "ម៉ោងដូចគ្នារាល់សប្តាហ៍" }}>
          <MenuCategory title={{ en: "Morning", km: "ព្រឹក" }} items={[
            { name: { en: "Strength · Mon / Wed / Fri", km: "កម្លាំង · ច/ព/សុ" }, price: "6:00 AM" },
            { name: { en: "Spin · Tue / Thu", km: "Spin · អ/ព្រ" }, price: "6:30 AM" },
            { name: { en: "Functional · Sat", km: "Functional · សៅរ៍" }, price: "8:00 AM" },
          ]} />
          <MenuCategory title={{ en: "Evening", km: "ល្ងាច" }} items={[
            { name: { en: "Boxing · Mon / Wed", km: "ប្រដាល់ · ច/ព" }, price: "6:00 PM" },
            { name: { en: "Strength · Tue / Thu", km: "កម្លាំង · អ/ព្រ" }, price: "6:30 PM" },
            { name: { en: "Functional · Fri", km: "Functional · សុ" }, price: "7:00 PM" },
          ]} />
        </Section>

        <Section eyebrow={{ en: "The gym", km: "ជីម" }} title={{ en: "Facilities & perks", km: "សម្ភារៈ និងអត្ថប្រយោជន៍" }}>
          <CheckList cols={3} items={[
            { en: "24/7 keycard access", km: "ចូល ២៤/៧ ដោយកាត" },
            { en: "Free weights & machines", km: "ទម្ងន់ និងម៉ាស៊ីន" },
            { en: "Boxing ring & bags", km: "សង្វៀន និងកាបូបប្រដាល់" },
            { en: "Cardio zone", km: "តំបន់ Cardio" },
            { en: "Clean showers & lockers", km: "កន្លែងងូតទឹក និងទូ" },
            { en: "Protein & shake bar", km: "កន្លែងលក់ shake" },
            { en: "Free wifi", km: "wifi ឥតគិតថ្លៃ" },
            { en: "Free parking", km: "ចតរថយន្តឥតគិតថ្លៃ" },
            { en: "Fitness assessment", km: "ការវាយតម្លៃរាងកាយ" },
          ]} />
        </Section>

        <Section id="team" alt eyebrow={{ en: "Coaches", km: "គ្រូបង្ហាត់" }} title={{ en: "Meet the coaches", km: "ជួបគ្រូបង្ហាត់" }}>
          <TeamGrid members={[
            { emoji: "🏋️", name: { en: "Vuthy", km: "វុទ្ធី" }, role: { en: "Strength", km: "កម្លាំង" } },
            { emoji: "🥊", name: { en: "Rith", km: "រិទ្ធ" }, role: { en: "Boxing", km: "ប្រដាល់" } },
            { emoji: "🚴", name: { en: "Sophal", km: "សុផល" }, role: { en: "Spin & cardio", km: "Spin & cardio" } },
            { emoji: "🤸", name: { en: "Maly", km: "ម៉ាលី" }, role: { en: "Functional", km: "Functional" } },
          ]} />
        </Section>

        <Section id="pricing" eyebrow={{ en: "Membership", km: "សមាជិកភាព" }} title={{ en: "Simple plans", km: "គម្រោងសាមញ្ញ" }}>
          <PricingTiers tiers={[
            { name: { en: "Day Pass", km: "ប័ណ្ណ ១ ថ្ងៃ" }, price: "$3", period: { en: "/visit", km: "/ដង" }, features: [{ en: "Full gym access", km: "ចូលជីមពេញ" }, { en: "Locker included", km: "មានទូ" }, { en: "No commitment", km: "គ្មានកិច្ចសន្យា" }] },
            { name: { en: "Monthly", km: "ប្រចាំខែ" }, price: "$25", period: { en: "/mo", km: "/ខែ" }, popular: true, features: [{ en: "Unlimited 24/7 access", km: "ចូល ២៤/៧" }, { en: "2 classes / week", km: "ថ្នាក់ ២/សប្តាហ៍" }, { en: "Fitness assessment", km: "ការវាយតម្លៃ" }] },
            { name: { en: "Annual", km: "ប្រចាំឆ្នាំ" }, price: "$199", period: { en: "/yr", km: "/ឆ្នាំ" }, features: [{ en: "Unlimited everything", km: "គ្មានដែនកំណត់" }, { en: "Personal program", km: "កម្មវិធីផ្ទាល់ខ្លួន" }, { en: "Free shake / week", km: "shake ឥតគិតថ្លៃ" }] },
          ]} />
        </Section>

        <Section alt eyebrow={{ en: "Members", km: "សមាជិក" }} title={{ en: "Member results", km: "លទ្ធផលសមាជិក" }}>
          <Reviews reviews={[
            { text: { en: "Down 12kg in four months. The coaches actually check your form and push you.", km: "ស្រកទម្ងន់ ១២ គីឡូក្នុង ៤ ខែ។ គ្រូពិនិត្យទម្រង់ និងជំរុញអ្នក។" }, name: "Chakrya S." },
            { text: { en: "24/7 access means I can train after night shifts. Cleanest gym I've joined.", km: "ចូល ២៤/៧ ធ្វើឱ្យខ្ញុំហាត់ក្រោយវេនយប់បាន។ ជីមស្អាតបំផុត។" }, name: "Rotha P." },
          ]} />
        </Section>

        <Section id="faq" eyebrow={{ en: "FAQ", km: "សំណួរញឹកញាប់" }} title={{ en: "Before you join", km: "មុនចូលរួម" }}>
          <FAQ items={[
            { q: { en: "Can I really train 24/7?", km: "តើអាចហាត់ ២៤/៧ មែនទេ?" }, a: { en: "Yes — members get a keycard for round-the-clock access, staffed during peak hours.", km: "បាទ/ចាស — សមាជិកទទួលកាតចូល ២៤ ម៉ោង។" } },
            { q: { en: "Are classes included in membership?", km: "តើថ្នាក់រួមក្នុងសមាជិកភាពទេ?" }, a: { en: "Monthly and annual members get group classes; day passes can add classes for $2.", km: "សមាជិកខែ និងឆ្នាំ ទទួលថ្នាក់ក្រុម។" } },
            { q: { en: "Do you have personal trainers?", km: "តើមានគ្រូឯកជនទេ?" }, a: { en: "Yes, 1-on-1 coaching is available — ask at the front desk or on Telegram.", km: "បាទ/ចាស មានគ្រូ ១ ទល់ ១។" } },
          ]} />
        </Section>

        <BookingSection
          eyebrow={{ en: "Free trial", km: "សាកល្បងឥតគិតថ្លៃ" }} title={{ en: "Your first session is free", km: "វេនដំបូងឥតគិតថ្លៃ" }}
          subtitle={{ en: "Bring shoes — we handle the rest.", km: "នាំស្បែកជើងមក — យើងរៀបចំនៅសល់។" }}
          services={[{ en: "Gym floor", km: "កន្លែងហាត់" }, { en: "Strength class", km: "ថ្នាក់កម្លាំង" }, { en: "Boxing class", km: "ថ្នាក់ប្រដាល់" }, { en: "Spin class", km: "ថ្នាក់ Spin" }]}
        />
        <Section id="contact" title={{ en: "Find us", km: "រកយើង" }}>
          <ContactBlock telegram={CONTACT.telegram} phone={CONTACT.phone}
            address={{ en: "Toul Kork, Phnom Penh", km: "ទួលគោក, ភ្នំពេញ" }}
            hours={{ en: "Open 24 hours, every day", km: "បើក ២៤ ម៉ោង រាល់ថ្ងៃ" }} />
        </Section>
        <DemoFooter text={{ en: "© 2026 Forge Gym · Phnom Penh", km: "© ២០២៦ Forge Gym · ភ្នំពេញ" }} />
        <DemoBadge />
      </DemoRoot>
    </DemoShell>
  );
}
