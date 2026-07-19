import type { Metadata } from "next";
import { Clapperboard, Boxes, Sparkles, PlayCircle } from "lucide-react";
import DemoShell from "@/lib/demo-theme";
import {
  DemoRoot, DemoNav, Hero, Section, ServiceGrid, Steps, Reviews, Prose,
  CheckList, PricingTiers, FAQ, BookingSection, ContactBlock, DemoFooter, DemoBadge,
} from "@/components/demo-kit";

export const metadata: Metadata = {
  title: "Studio Vong — Premium Motion | SomaTech Demo",
  description: "Demo website for a creative motion studio: showreel, services, and premium animated feel.",
};

const CONTACT = { telegram: "https://t.me/somatech_kh", phone: "tel:+85512345678" };

export default function Page() {
  return (
    <DemoShell slug="somamotion">
      <DemoRoot accent="#c026d3">
        <DemoNav
          brand={<span className="tracking-[0.25em] uppercase text-sm">Studio Vong</span>}
          links={[
            { label: { en: "Work", km: "ស្នាដៃ" }, href: "#services" },
            { label: { en: "Services", km: "សេវាកម្ម" }, href: "#process" },
            { label: { en: "Contact", km: "ទំនាក់ទំនង" }, href: "#book" },
          ]}
          cta={{ en: "Start a project", km: "ចាប់ផ្តើមគម្រោង" }} ctaHref="#book"
        />
        <Hero
          variant="bold"
          eyebrow={{ en: "Motion · Film · CGI · Phnom Penh", km: "ចលនា · ភាពយន្ត · CGI · ភ្នំពេញ" }}
          title={{ en: "We craft brands", km: "យើងបង្កើតម៉ាក" }}
          titleAccent={{ en: "in motion.", km: "ក្នុងចលនា។" }}
          subtitle={{ en: "A Phnom Penh studio making films, motion identities and CGI for brands that refuse to be boring.", km: "ស្ទូឌីយោភ្នំពេញ ធ្វើភាពយន្ត អត្តសញ្ញាណចលនា និង CGI សម្រាប់ម៉ាកដែលមិនចង់ធុញ។" }}
          subtitleAlt={{ en: "Concept to final grade, under one roof.", km: "ពីគំនិតដល់បញ្ចប់ ក្រោមដំបូលតែមួយ។" }}
          primary={{ label: { en: "Watch showreel", km: "មើល showreel" }, href: "#services" }}
          secondary={{ label: { en: "Start a project", km: "ចាប់ផ្តើមគម្រោង" }, href: "#book" }}
          stats={[
            { value: 140, suffix: "+", label: { en: "Projects shipped", km: "គម្រោងបានធ្វើ" } },
            { value: 40, suffix: "+", label: { en: "Brands", km: "ម៉ាក" } },
            { value: 9, suffix: " yr", label: { en: "Studio age", km: "អាយុស្ទូឌីយោ" } },
            { value: 12, suffix: "", label: { en: "Awards", km: "ពានរង្វាន់" } },
          ]}
        />
        <Section id="services" eyebrow={{ en: "Selected work", km: "ស្នាដៃជ្រើសរើស" }} title={{ en: "What we make", km: "អ្វីដែលយើងបង្កើត" }}>
          <ServiceGrid items={[
            { icon: <PlayCircle size={20} />, name: { en: "Bank rebrand film", km: "ភាពយន្តប្តូរម៉ាកធនាគារ" }, desc: { en: "A 60-second motion identity for a national bank.", km: "អត្តសញ្ញាណចលនា ៦០ វិនាទី សម្រាប់ធនាគារជាតិ។" } },
            { icon: <PlayCircle size={20} />, name: { en: "Festival opener", km: "ការបើកមហោស្រព" }, desc: { en: "3D type and particles for a music festival.", km: "អក្សរ 3D និងភាគល្អិត សម្រាប់មហោស្រពតន្ត្រី។" } },
            { icon: <PlayCircle size={20} />, name: { en: "Product launch", km: "ការបើកផលិតផល" }, desc: { en: "CGI product film with a full edit and grade.", km: "ភាពយន្តផលិតផល CGI ជាមួយការកាត់ត និងពណ៌។" } },
            { icon: <PlayCircle size={20} />, name: { en: "Fashion loop", km: "Fashion loop" }, desc: { en: "Art direction and looping motion for a label.", km: "ការដឹកនាំសិល្បៈ និងចលនារង្វិលសម្រាប់ម៉ាក។" } },
          ]} />
        </Section>
        <Section id="process" alt eyebrow={{ en: "How we work", km: "របៀបយើងធ្វើ" }} title={{ en: "Concept to delivery", km: "ពីគំនិតដល់ការប្រគល់" }}>
          <Steps items={[
            { n: "1", name: { en: "Discover", km: "ស្វែងយល់" }, desc: { en: "We learn your brand, goals, and the story to tell.", km: "យើងស្វែងយល់ម៉ាក គោលដៅ និងរឿងដែលត្រូវនិយាយ។" } },
            { n: "2", name: { en: "Create", km: "បង្កើត" }, desc: { en: "Design, animation, 3D, and sound — crafted in-house.", km: "រចនា ចលនា 3D និងសំឡេង — ធ្វើផ្ទាល់។" } },
            { n: "3", name: { en: "Deliver", km: "ប្រគល់" }, desc: { en: "Final files for every platform, delivered on time.", km: "ឯកសារចុងក្រោយសម្រាប់គ្រប់វេទិកា ទាន់ពេល។" } },
          ]} />
        </Section>
        <Section eyebrow={{ en: "Clients", km: "អតិថិជន" }} title={{ en: "What clients say", km: "មតិអតិថិជន" }}>
          <Reviews reviews={[
            { text: { en: "They turned a dry brief into a film our whole company was proud to share. Rare talent.", km: "ពួកគេប្រែ brief ស្ងួតៗ ទៅជាភាពយន្តដែលក្រុមហ៊ុនទាំងមូលមោទនភាព។ ទេពកោសល្យកម្រ។" }, name: "Marketing Lead, Bank" },
            { text: { en: "On time, on budget, and more beautiful than we imagined. We're booking them again.", km: "ទាន់ពេល តាមថវិកា និងស្អាតជាងយើងស្រមៃ។ យើងនឹងកក់ម្តងទៀត។" }, name: "Brand Manager" },
          ]} />
        </Section>
        <Prose>{{
          en: "We're a small team of directors, animators, and 3D artists who believe motion should make people feel something. If it moves, we can make it beautiful.",
          km: "យើងជាក្រុមតូចនៃអ្នកដឹកនាំ អ្នកធ្វើចលនា និងសិល្បករ 3D ដែលជឿថាចលនាគួរធ្វើឱ្យមនុស្សមានអារម្មណ៍។ បើវាផ្លាស់ទី យើងធ្វើឱ្យវាស្អាតបាន។",
        }}</Prose>
        <Section eyebrow={{ en: "Capabilities", km: "សមត្ថភាព" }} title={{ en: "Everything we offer", km: "អ្វីៗដែលយើងផ្តល់" }}>
          <CheckList cols={3} items={[
            { en: "Brand motion identities", km: "អត្តសញ្ញាណចលនាម៉ាក" },
            { en: "TV & social commercials", km: "ពាណិជ្ជកម្ម TV និងសង្គម" },
            { en: "3D & CGI product films", km: "ភាពយន្តផលិតផល 3D" },
            { en: "Logo animation", km: "ចលនាឡូហ្គោ" },
            { en: "Explainer videos", km: "វីដេអូពន្យល់" },
            { en: "Title & credit sequences", km: "ចំណងជើង និងឈ្មោះអ្នកសម្តែង" },
            { en: "Music & sound design", km: "តន្ត្រី និងសំឡេង" },
            { en: "Colour grading", km: "ការកែពណ៌" },
            { en: "Social content packages", km: "កញ្ចប់ខ្លឹមសារសង្គម" },
          ]} />
        </Section>

        <Section id="pricing" alt eyebrow={{ en: "Pricing", km: "តម្លៃ" }} title={{ en: "Project packages", km: "កញ្ចប់គម្រោង" }}>
          <PricingTiers tiers={[
            { name: { en: "Social Pack", km: "កញ្ចប់សង្គម" }, price: "$450", features: [{ en: "3 short motion clips", km: "វីដេអូខ្លី ៣" }, { en: "Logo animation", km: "ចលនាឡូហ្គោ" }, { en: "1 revision round", km: "កែ ១ ជុំ" }] },
            { name: { en: "Brand Film", km: "ភាពយន្តម៉ាក" }, price: "$2,500", popular: true, features: [{ en: "60–90s brand film", km: "ភាពយន្ត ៦០–៩០ វិ." }, { en: "Motion + sound design", km: "ចលនា + សំឡេង" }, { en: "3 revision rounds", km: "កែ ៣ ជុំ" }] },
            { name: { en: "Full Campaign", km: "យុទ្ធនាការពេញ" }, price: "Custom", features: [{ en: "Film + cutdowns + 3D", km: "ភាពយន្ត + cutdown + 3D" }, { en: "Dedicated team", km: "ក្រុមឯកទេស" }, { en: "Full delivery kit", km: "ឯកសារពេញ" }] },
          ]} />
        </Section>

        <Section eyebrow={{ en: "FAQ", km: "សំណួរញឹកញាប់" }} title={{ en: "Working with us", km: "ធ្វើការជាមួយយើង" }}>
          <FAQ items={[
            { q: { en: "How long does a project take?", km: "តើគម្រោងចំណាយពេលប៉ុន្មាន?" }, a: { en: "Social packs in about a week; brand films typically 3–5 weeks.", km: "កញ្ចប់សង្គមប្រហែលមួយសប្តាហ៍; ភាពយន្តម៉ាក ៣–៥ សប្តាហ៍។" } },
            { q: { en: "Do you write the concept?", km: "តើអ្នកសរសេរគំនិតទេ?" }, a: { en: "Yes — we take you from idea and script through to the final grade.", km: "បាទ/ចាស — យើងនាំពីគំនិត និងស្គ្រីប ដល់ការបញ្ចប់។" } },
            { q: { en: "Can you work to our budget?", km: "តើអ្នកធ្វើតាមថវិកាយើងទេ?" }, a: { en: "Tell us the budget and goal — we'll scope something that fits.", km: "ប្រាប់ថវិកា និងគោលដៅ — យើងរៀបចំឱ្យសម។" } },
          ]} />
        </Section>

        <BookingSection
          eyebrow={{ en: "Contact", km: "ទំនាក់ទំនង" }} title={{ en: "Got something worth moving?", km: "មានអ្វីសមនឹងផ្លាស់ទី?" }}
          subtitle={{ en: "Tell us the idea — we'll bring the frames.", km: "ប្រាប់យើងគំនិត — យើងនាំ frame មក។" }}
          services={[{ en: "Brand motion", km: "ចលនាម៉ាក" }, { en: "Commercial / film", km: "ពាណិជ្ជកម្ម / ភាពយន្ត" }, { en: "3D / CGI", km: "3D / CGI" }, { en: "Social content", km: "ខ្លឹមសារសង្គម" }]}
          extraLabel={{ en: "Budget", km: "ថវិកា" }}
          extraOptions={[{ en: "Under $2k", km: "ក្រោម $2k" }, { en: "$2k – $10k", km: "$2k – $10k" }, { en: "Over $10k", km: "លើស $10k" }]}
        />
        <Section id="contact" title={{ en: "Find us", km: "រកយើង" }}>
          <ContactBlock telegram={CONTACT.telegram} phone={CONTACT.phone}
            address={{ en: "BKK1, Phnom Penh", km: "បឹងកេងកង ១, ភ្នំពេញ" }}
            hours={{ en: "Mon–Fri · 9:00 AM – 6:00 PM", km: "ច័ន្ទ–សុក្រ · ៩:០០ – ១៨:០០" }} />
        </Section>
        <DemoFooter text={{ en: "© 2026 Studio Vong · Phnom Penh", km: "© ២០២៦ Studio Vong · ភ្នំពេញ" }} />
        <DemoBadge />
      </DemoRoot>
    </DemoShell>
  );
}
