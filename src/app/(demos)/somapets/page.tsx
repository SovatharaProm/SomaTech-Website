import type { Metadata } from "next";
import { Bath, Scissors, Crown, Hotel } from "lucide-react";
import DemoShell from "@/lib/demo-theme";
import {
  DemoRoot, DemoNav, Hero, Section, ServiceGrid, Gallery, Reviews,
  MenuCategory, CheckList, HoursTable, FAQ, BookingSection, ContactBlock, DemoFooter, DemoBadge,
} from "@/components/demo-kit";

export const metadata: Metadata = {
  title: "Pawfect Studio — Pet Grooming | SomaTech Demo",
  description: "Demo website for a pet grooming salon: packages, gallery, pet hotel, and Messenger booking.",
};

const CONTACT = { telegram: "https://t.me/somatech_kh", phone: "tel:+85512345678" };

export default function Page() {
  return (
    <DemoShell slug="somapets">
      <DemoRoot accent="#db2777">
        <DemoNav
          brand={<><span className="w-8 h-8 rounded-xl bg-[var(--accent)] text-white flex items-center justify-center">🐾</span>Pawfect Studio</>}
          links={[
            { label: { en: "Packages", km: "កញ្ចប់" }, href: "#services" },
            { label: { en: "Reviews", km: "មតិ" }, href: "#reviews" },
            { label: { en: "Book", km: "កក់" }, href: "#book" },
          ]}
          cta={{ en: "Book grooming", km: "កក់កែសម្ផស្ស" }} ctaHref="#book"
        />
        <Hero
          variant="center"
          eyebrow={{ en: "Grooming · Spa · Pet Hotel · Phnom Penh", km: "កែសម្ផស្ស · ស្ប៉ា · សណ្ឋាគារសត្វ · ភ្នំពេញ" }}
          title={{ en: "Happy pets,", km: "សត្វរីករាយ" }}
          titleAccent={{ en: "fresh looks.", km: "រូបរាងស្រស់។" }}
          subtitle={{ en: "Gentle grooming by certified pet stylists — with photo updates so you never miss the glow-up.", km: "កែសម្ផស្សថ្នមៗ ដោយអ្នកជំនាញ — មានរូបភាពធ្វើបច្ចុប្បន្នភាព។" }}
          subtitleAlt={{ en: "For dogs, cats, and small friends.", km: "សម្រាប់ឆ្កែ ឆ្មា និងសត្វតូចៗ។" }}
          primary={{ label: { en: "Book grooming", km: "កក់កែសម្ផស្ស" }, href: "#book" }}
          secondary={{ label: { en: "See packages", km: "មើលកញ្ចប់" }, href: "#services" }}
          stats={[
            { value: 5000, suffix: "+", label: { en: "Pets groomed", km: "សត្វបានធ្វើ" } },
            { value: 4, suffix: ".9★", label: { en: "Owner rating", km: "ការវាយតម្លៃ" } },
            { value: 6, suffix: "", label: { en: "Certified stylists", km: "អ្នកជំនាញ" } },
            { value: 100, suffix: "%", label: { en: "Photo updates", km: "រូបភាពធ្វើបច្ចុប្បន្នភាព" } },
          ]}
        />
        <Section id="services" eyebrow={{ en: "Packages", km: "កញ្ចប់" }} title={{ en: "Grooming packages", km: "កញ្ចប់កែសម្ផស្ស" }}>
          <ServiceGrid items={[
            { icon: <Bath size={20} />, name: { en: "Fresh Bath", km: "ងូតទឹកស្រស់" }, price: "$8", desc: { en: "Bath, blow-dry, brush, ear clean, and cologne.", km: "ងូតទឹក សម្ងួត ស្មៅ សម្អាតត្រចៀក និងទឹកអប់។" } },
            { icon: <Scissors size={20} />, name: { en: "Full Groom", km: "កែសម្ផស្សពេញ" }, price: "$15", desc: { en: "Bath plus haircut, nail trim, paw care, and styling.", km: "ងូតទឹក បូកកាត់រោម កាត់ក្រចក និងតុបតែង។" } },
            { icon: <Crown size={20} />, name: { en: "Royal Spa Day", km: "ថ្ងៃស្ប៉ាប្រណីត" }, price: "$25", desc: { en: "Full groom, conditioning mask, teeth clean, and bow.", km: "កែសម្ផស្សពេញ ម៉ាស សម្អាតធ្មេញ និងខ្សែក្រវាត់។" } },
            { icon: <Hotel size={20} />, name: { en: "Pet Hotel", km: "សណ្ឋាគារសត្វ" }, price: "$10", desc: { en: "Cozy rooms, daily walks, and photo updates for you.", km: "បន្ទប់កក់ក្តៅ ដើរលេងរាល់ថ្ងៃ និងរូបភាព។" } },
          ]} />
        </Section>
        <Section alt eyebrow={{ en: "Glow-ups", km: "ការផ្លាស់ប្តូរ" }} title={{ en: "Fresh from the studio", km: "ស្រស់ៗពីស្ទូឌីយោ" }}>
          <Gallery tiles={[
            { emoji: "🐩", label: { en: "Poodle trim", km: "កាត់រោម poodle" } },
            { emoji: "🐕", label: { en: "Full groom", km: "កែសម្ផស្សពេញ" } },
            { emoji: "🐈", label: { en: "Cat spa", km: "ស្ប៉ាឆ្មា" } },
            { emoji: "🐶", label: { en: "Puppy bath", km: "ងូតទឹកកូនឆ្កែ" } },
          ]} />
        </Section>
        <Section id="reviews" eyebrow={{ en: "Owners", km: "ម្ចាស់សត្វ" }} title={{ en: "What owners say", km: "មតិម្ចាស់សត្វ" }}>
          <Reviews reviews={[
            { text: { en: "My poodle comes home smelling amazing and so happy. The before-after photos are the best part.", km: "ឆ្កែ poodle របស់ខ្ញុំត្រឡប់មកផ្ទះក្លិនក្រអូប និងរីករាយ។ រូបភាពមុន-ក្រោយល្អបំផុត។" }, name: "Chenda L." },
            { text: { en: "Left my cat at the pet hotel for a week — daily photos gave me total peace of mind.", km: "ទុកឆ្មានៅសណ្ឋាគារសត្វមួយសប្តាហ៍ — រូបភាពរាល់ថ្ងៃធ្វើឱ្យខ្ញុំធូរចិត្ត។" }, name: "Vic P." },
          ]} />
        </Section>
        <Section eyebrow={{ en: "Add-ons", km: "សេវាបន្ថែម" }} title={{ en: "Extra treats", km: "សេវាបន្ថែម" }}>
          <MenuCategory title={{ en: "Add to any groom", km: "បន្ថែមលើការកែសម្ផស្ស" }} items={[
            { name: { en: "Nail trim & file", km: "កាត់ក្រចក" }, price: "$3" },
            { name: { en: "Teeth brushing", km: "ដុសធ្មេញ" }, price: "$4" },
            { name: { en: "De-shedding treatment", km: "បណ្តេញរោមជ្រុះ" }, price: "$6" },
            { name: { en: "Flea & tick bath", km: "ងូតបណ្តេញល្អិត" }, price: "$8" },
            { name: { en: "Paw balm & cologne", km: "ថ្នាំក្រញ៉ាំ និងទឹកអប់" }, price: "$3" },
          ]} />
        </Section>

        <Section alt eyebrow={{ en: "Pet hotel", km: "សណ្ឋាគារសត្វ" }} title={{ en: "Boarding includes", km: "ការស្នាក់នៅរួមបញ្ចូល" }}>
          <CheckList cols={3} items={[
            { en: "Cozy private rooms", km: "បន្ទប់ឯកជនកក់ក្តៅ" },
            { en: "3 daily walks", km: "ដើរលេង ៣ ដង/ថ្ងៃ" },
            { en: "Daily photo updates", km: "រូបភាពរាល់ថ្ងៃ" },
            { en: "Feeding to your schedule", km: "ចំណីតាមកាលវិភាគ" },
            { en: "Playtime & cuddles", km: "ពេលលេង និងអោប" },
            { en: "24/7 supervision", km: "មើលថែ ២៤/៧" },
            { en: "Medication if needed", km: "ឱសថបើចាំបាច់" },
            { en: "Air-conditioned", km: "ម៉ាស៊ីនត្រជាក់" },
            { en: "Pick-up & drop-off", km: "ទទួល និងប្រគល់" },
          ]} />
        </Section>

        <Section eyebrow={{ en: "Hours", km: "ម៉ោង" }} title={{ en: "Opening hours", km: "ម៉ោងបើក" }}>
          <HoursTable rows={[
            { day: { en: "Tuesday – Sunday", km: "អង្គារ – អាទិត្យ" }, time: "9:00 AM – 7:00 PM" },
            { day: { en: "Monday", km: "ច័ន្ទ" }, time: { en: "Closed", km: "បិទ" } },
            { day: { en: "Pet hotel check-in", km: "ចូលសណ្ឋាគារសត្វ" }, time: "10:00 AM – 5:00 PM" },
          ]} />
        </Section>

        <Section alt eyebrow={{ en: "FAQ", km: "សំណួរញឹកញាប់" }} title={{ en: "Owner questions", km: "សំណួរម្ចាស់សត្វ" }}>
          <FAQ items={[
            { q: { en: "How long does grooming take?", km: "តើកែសម្ផស្សចំណាយពេលប៉ុន្មាន?" }, a: { en: "A full groom is about 1.5–2 hours. We send a photo the moment it's done.", km: "កែសម្ផស្សពេញ ១.៥–២ ម៉ោង។ យើងផ្ញើរូបភាពពេលរួច។" } },
            { q: { en: "Is the pet hotel safe?", km: "តើសណ្ឋាគារសត្វមានសុវត្ថិភាពទេ?" }, a: { en: "Yes — air-conditioned rooms, 24/7 supervision, and daily photo updates.", km: "បាទ/ចាស — បន្ទប់ត្រជាក់ មើលថែ ២៤/៧ និងរូបភាពរាល់ថ្ងៃ។" } },
            { q: { en: "Do you groom cats too?", km: "តើកែសម្ផស្សឆ្មាទេ?" }, a: { en: "Yes, we groom cats and small pets with gentle, quiet handling.", km: "បាទ/ចាស យើងកែសម្ផស្សឆ្មា និងសត្វតូចដោយថ្នម។" } },
          ]} />
        </Section>

        <BookingSection
          eyebrow={{ en: "Booking", km: "ការកក់" }} title={{ en: "Book a fresh look", km: "កក់រូបរាងស្រស់" }}
          subtitle={{ en: "Tell us your pet's breed and size — we confirm right away.", km: "ប្រាប់ពូជ និងទំហំសត្វ — យើងបញ្ជាក់ភ្លាម។" }}
          services={[{ en: "Fresh Bath", km: "ងូតទឹកស្រស់" }, { en: "Full Groom", km: "កែសម្ផស្សពេញ" }, { en: "Royal Spa Day", km: "ថ្ងៃស្ប៉ា" }, { en: "Pet Hotel", km: "សណ្ឋាគារសត្វ" }]}
          extraLabel={{ en: "Pet type", km: "ប្រភេទសត្វ" }}
          extraOptions={[{ en: "Dog", km: "ឆ្កែ" }, { en: "Cat", km: "ឆ្មា" }, { en: "Small pet", km: "សត្វតូច" }]}
        />
        <Section id="contact" title={{ en: "Find us", km: "រកយើង" }}>
          <ContactBlock telegram={CONTACT.telegram} phone={CONTACT.phone}
            address={{ en: "Boeung Keng Kang, Phnom Penh", km: "បឹងកេងកង, ភ្នំពេញ" }}
            hours={{ en: "Tue–Sun · 9:00 AM – 7:00 PM", km: "អង្គារ–អាទិត្យ · ៩:០០ – ១៩:០០" }} />
        </Section>
        <DemoFooter text={{ en: "© 2026 Pawfect Studio · Phnom Penh", km: "© ២០២៦ Pawfect Studio · ភ្នំពេញ" }} />
        <DemoBadge />
      </DemoRoot>
    </DemoShell>
  );
}
