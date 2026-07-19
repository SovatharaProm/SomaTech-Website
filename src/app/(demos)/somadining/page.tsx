import type { Metadata } from "next";
import DemoShell from "@/lib/demo-theme";
import {
  DemoRoot, DemoNav, Hero, Section, MenuList, TeamGrid, Reviews, Prose,
  CheckList, HoursTable, FAQ, BookingSection, ContactBlock, DemoFooter, DemoBadge,
} from "@/components/demo-kit";

export const metadata: Metadata = {
  title: "Chandara — Fine Dining | SomaTech Demo",
  description: "Demo website for a fine dining restaurant: tasting menus, chef story, and reservations.",
};

const CONTACT = { telegram: "https://t.me/somatech_kh", phone: "tel:+85512345678" };

export default function Page() {
  return (
    <DemoShell slug="somadining">
      <DemoRoot accent="#9f1239" font="Georgia, 'Times New Roman', serif">
        <DemoNav
          brand={<span className="tracking-[0.3em] uppercase">Chandara</span>}
          links={[
            { label: { en: "Menus", km: "ម៉ឺនុយ" }, href: "#services" },
            { label: { en: "The Chef", km: "ចុងភៅ" }, href: "#team" },
            { label: { en: "Reservations", km: "កក់តុ" }, href: "#book" },
          ]}
          cta={{ en: "Reserve", km: "កក់តុ" }} ctaHref="#book"
        />
        <Hero
          variant="center"
          eyebrow={{ en: "Modern Khmer Cuisine · Phnom Penh", km: "មុខម្ហូបខ្មែរទំនើប · ភ្នំពេញ" }}
          title={{ en: "A tasting journey through", km: "ដំណើរភ្លក្សរសជាតិ" }}
          titleAccent={{ en: "Cambodia.", km: "កម្ពុជា។" }}
          subtitle={{ en: "Seasonal ingredients from provincial farms, transformed into stories on a plate.", km: "គ្រឿងផ្សំតាមរដូវពីចម្ការខេត្ត ប្រែក្លាយជារឿងរ៉ាវលើចាន។" }}
          subtitleAlt={{ en: "Two seatings nightly, Wednesday to Sunday.", km: "ពីរវេនរាល់យប់ ពុធដល់អាទិត្យ។" }}
          primary={{ label: { en: "Discover the menus", km: "មើលម៉ឺនុយ" }, href: "#services" }}
          secondary={{ label: { en: "Reserve a table", km: "កក់តុ" }, href: "#book" }}
          stats={[
            { value: 10, suffix: "", label: { en: "Course degustation", km: "មុខ degustation" } },
            { value: 4, suffix: ".9★", label: { en: "Diner rating", km: "ការវាយតម្លៃ" } },
            { value: 12, suffix: "", label: { en: "Private dining seats", km: "កៅអីតុឯកជន" } },
            { value: 6, suffix: "", label: { en: "Provinces sourced", km: "ខេត្តប្រភព" } },
          ]}
        />
        <Section id="services" eyebrow={{ en: "Tasting menus", km: "ម៉ឺនុយ Tasting" }} title={{ en: "Our menus", km: "ម៉ឺនុយរបស់យើង" }}>
          <MenuList items={[
            { name: { en: "Mekong Tasting · 7 courses", km: "Mekong Tasting · ៧ មុខ" }, price: "$68", desc: { en: "River fish, Kampot pepper, and wild herbs.", km: "ត្រីទន្លេ ម្រេចកំពត និងបន្លែព្រៃ។" } },
            { name: { en: "Garden Menu · 7 courses", km: "ម៉ឺនុយសួន · ៧ មុខ" }, price: "$58", desc: { en: "A vegetable-led menu grown on our own farm.", km: "ម៉ឺនុយបន្លែ ដាំនៅចម្ការផ្ទាល់ខ្លួន។" } },
            { name: { en: "Angkor Degustation · 10 courses", km: "Angkor Degustation · ១០ មុខ" }, price: "$95", desc: { en: "Our signature journey through the provinces.", km: "ដំណើរពិសេសកាត់ខេត្តនានា។" } },
            { name: { en: "Wine Pairing", km: "ផ្គូផ្គងស្រា" }, price: "+$45", desc: { en: "A glass matched to every course by our sommelier.", km: "កែវស្រាផ្គូនឹងគ្រប់មុខ ដោយ sommelier។" } },
          ]} />
        </Section>
        <Section id="team" alt eyebrow={{ en: "The kitchen", km: "ផ្ទះបាយ" }} title={{ en: "Meet the chef", km: "ជួបចុងភៅ" }}>
          <div className="max-w-3xl mx-auto"><TeamGrid members={[
            { emoji: "👨‍🍳", name: { en: "Chef Chandara", km: "ចុងភៅ ចន្ទដារ៉ា" }, role: { en: "Chef & Founder", km: "ចុងភៅ & ស្ថាបនិក" } },
            { emoji: "👩‍🍳", name: { en: "Chef Lina", km: "ចុងភៅ លីណា" }, role: { en: "Pastry", km: "នំផ្អែម" } },
            { emoji: "🧑‍🍳", name: { en: "Sopheak", km: "សុភ័ក្រ" }, role: { en: "Sous chef", km: "ជំនួយចុងភៅ" } },
            { emoji: "🍷", name: { en: "Marc", km: "ម៉ាក" }, role: { en: "Sommelier", km: "អ្នកជំនាញស្រា" } },
          ]} /></div>
          <div className="mt-12"><Prose>{{
            en: "After a decade in Paris and Copenhagen kitchens, Chef Chandara came home to cook the food of his grandmother — elevated, but never distant. Every menu begins in a provincial market at dawn.",
            km: "ក្រោយពេលមួយទសវត្សរ៍ក្នុងផ្ទះបាយប៉ារីស និងកូប៉ិនហាក ចុងភៅ ចន្ទដារ៉ា បានត្រឡប់មកស្រុកកំណើត ដើម្បីចម្អិនម្ហូបរបស់ជីដូន — ថ្លៃថ្នូរ តែមិនឆ្ងាយ។ រាល់ម៉ឺនុយចាប់ផ្តើមនៅផ្សារខេត្តពេលព្រលឹម។",
          }}</Prose></div>
        </Section>
        <Section eyebrow={{ en: "Guests", km: "ភ្ញៀវ" }} title={{ en: "Diner reviews", km: "មតិភ្ញៀវ" }}>
          <Reviews reviews={[
            { text: { en: "Easily the most memorable meal I've had in Cambodia. Every course told a story.", km: "ជាអាហារដ៏គួរឱ្យចងចាំបំផុតក្នុងកម្ពុជា។ រាល់មុខនិយាយរឿងរ៉ាវ។" }, name: "Antoine D." },
            { text: { en: "The degustation with wine pairing was flawless. Worth every riel.", km: "Degustation ជាមួយស្រា គ្មានកន្លែងបន្ទោស។ សមនឹងតម្លៃ។" }, name: "Sokngim L." },
          ]} />
        </Section>
        <Section eyebrow={{ en: "Good to know", km: "គួរដឹង" }} title={{ en: "The experience", km: "បទពិសោធន៍" }}>
          <CheckList cols={3} items={[
            { en: "Two seatings nightly", km: "ពីរវេនរាល់យប់" },
            { en: "Private dining for 12", km: "តុឯកជនសម្រាប់ ១២" },
            { en: "Wine & tea pairings", km: "ផ្គូផ្គងស្រា និងតែ" },
            { en: "Vegetarian menu", km: "ម៉ឺនុយបួស" },
            { en: "Allergy-friendly", km: "សម្រាប់អ្នកមានអាឡែស៊ី" },
            { en: "Smart-casual dress", km: "សម្លៀកបំពាក់សមរម្យ" },
            { en: "Free valet parking", km: "ចតរថយន្តឥតគិតថ្លៃ" },
            { en: "Event & set menus", km: "ម៉ឺនុយព្រឹត្តិការណ៍" },
            { en: "Gift vouchers", km: "ប័ណ្ណអំណោយ" },
          ]} />
        </Section>

        <Section alt eyebrow={{ en: "Hours", km: "ម៉ោង" }} title={{ en: "Seatings", km: "វេនអង្គុយ" }}>
          <HoursTable rows={[
            { day: { en: "Wednesday – Sunday", km: "ពុធ – អាទិត្យ" }, time: "6:00 PM & 8:30 PM" },
            { day: { en: "Monday – Tuesday", km: "ច័ន្ទ – អង្គារ" }, time: { en: "Closed", km: "បិទ" } },
            { day: { en: "Private events", km: "ព្រឹត្តិការណ៍ឯកជន" }, time: { en: "By arrangement", km: "តាមការរៀបចំ" } },
          ]} />
        </Section>

        <Section eyebrow={{ en: "FAQ", km: "សំណួរញឹកញាប់" }} title={{ en: "Before you dine", km: "មុនពេលទទួលទាន" }}>
          <FAQ items={[
            { q: { en: "Is there a dress code?", km: "តើមានកូដសម្លៀកបំពាក់ទេ?" }, a: { en: "Smart-casual. No shorts or flip-flops for dinner service, please.", km: "សមរម្យ។ សូមកុំពាក់ខោខ្លី ឬស្បែកជើងផ្ទាត់។" } },
            { q: { en: "Can you cater to allergies?", km: "តើអាចសម្រួលអាឡែស៊ីទេ?" }, a: { en: "Yes — tell us when booking and the chef will adapt each course.", km: "បាទ/ចាស — ប្រាប់ពេលកក់ ចុងភៅនឹងកែសម្រួល។" } },
            { q: { en: "Do you host private dinners?", km: "តើរៀបចំពិធីអាហារឯកជនទេ?" }, a: { en: "Our private room seats up to 12 with a bespoke menu.", km: "បន្ទប់ឯកជនផ្ទុក ១២ នាក់ ជាមួយម៉ឺនុយពិសេស។" } },
          ]} />
        </Section>

        <BookingSection
          eyebrow={{ en: "Reservations", km: "ការកក់តុ" }} title={{ en: "Reserve a table", km: "កក់តុ" }}
          subtitle={{ en: "Seatings at 6:00 PM and 8:30 PM, Wednesday – Sunday.", km: "វេនម៉ោង ១៨:០០ និង ២០:៣០ ពុធ – អាទិត្យ។" }}
          services={[{ en: "Mekong Tasting", km: "Mekong Tasting" }, { en: "Angkor Degustation", km: "Angkor Degustation" }, { en: "Garden Menu", km: "ម៉ឺនុយសួន" }]}
          extraLabel={{ en: "Guests", km: "ចំនួនភ្ញៀវ" }}
          extraOptions={[{ en: "2 guests", km: "២ នាក់" }, { en: "3–4 guests", km: "៣–៤ នាក់" }, { en: "Private dining (up to 12)", km: "តុឯកជន (ដល់ ១២)" }]}
        />
        <Section id="contact" title={{ en: "Find us", km: "រកយើង" }}>
          <ContactBlock telegram={CONTACT.telegram} phone={CONTACT.phone}
            address={{ en: "Street 240, Phnom Penh", km: "ផ្លូវ 240, ភ្នំពេញ" }}
            hours={{ en: "Wed–Sun · 6:00 PM – 11:00 PM", km: "ពុធ–អាទិត្យ · ១៨:០០ – ២៣:០០" }} />
        </Section>
        <DemoFooter text={{ en: "© 2026 Chandara · Phnom Penh", km: "© ២០២៦ Chandara · ភ្នំពេញ" }} />
        <DemoBadge />
      </DemoRoot>
    </DemoShell>
  );
}
