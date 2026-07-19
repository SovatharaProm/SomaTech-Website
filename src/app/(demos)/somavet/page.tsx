import type { Metadata } from "next";
import { Stethoscope, Syringe, Bone, Microscope, Scissors, Ambulance } from "lucide-react";
import DemoShell from "@/lib/demo-theme";
import {
  DemoRoot, DemoNav, Hero, Section, ServiceGrid, PricingTiers, Reviews,
  CheckList, HoursTable, FAQ, BookingSection, ContactBlock, DemoFooter, DemoBadge,
} from "@/components/demo-kit";

export const metadata: Metadata = {
  title: "PetCare Vet Clinic — Veterinary Care | SomaTech Demo",
  description: "Demo website for a vet clinic: services, vaccination plans, emergency contact, and visits.",
};

const CONTACT = { telegram: "https://t.me/somatech_kh", phone: "tel:+85512345678" };

export default function Page() {
  return (
    <DemoShell slug="somavet">
      <DemoRoot accent="#0d9488">
        <DemoNav
          brand={<><span className="w-8 h-8 rounded-lg bg-[var(--accent)] text-white flex items-center justify-center">🐾</span>PetCare Vet</>}
          links={[
            { label: { en: "Services", km: "សេវាកម្ម" }, href: "#services" },
            { label: { en: "Vaccination", km: "វ៉ាក់សាំង" }, href: "#pricing" },
            { label: { en: "Visit", km: "ជួប" }, href: "#book" },
          ]}
          cta={{ en: "Emergency line", km: "ខ្សែបន្ទាន់" }} ctaHref={CONTACT.phone}
        />
        <Hero
          eyebrow={{ en: "Veterinary Clinic · Phnom Penh", km: "គ្លីនិកពេទ្យសត្វ · ភ្នំពេញ" }}
          title={{ en: "Gentle care for every", km: "ការថែទាំថ្នមៗ សម្រាប់រាល់" }}
          titleAccent={{ en: "paw.", km: "ក្រញ៉ាំ។" }}
          subtitle={{ en: "Experienced vets, modern diagnostics, and honest advice — because your pet is family.", km: "ពេទ្យសត្វមានបទពិសោធន៍ ការវិនិច្ឆ័យទំនើប និងដំបូន្មានស្មោះត្រង់ — ព្រោះសត្វរបស់អ្នកជាគ្រួសារ។" }}
          subtitleAlt={{ en: "Open daily · Emergency line available", km: "បើករាល់ថ្ងៃ · មានខ្សែបន្ទាន់" }}
          primary={{ label: { en: "Request a visit", km: "ស្នើសុំជួប" }, href: "#book" }}
          secondary={{ label: { en: "Our services", km: "សេវាកម្ម" }, href: "#services" }}
          stats={[
            { value: 10, suffix: "+", label: { en: "Years caring", km: "ឆ្នាំថែទាំ" } },
            { value: 15000, suffix: "+", label: { en: "Pets treated", km: "សត្វបានព្យាបាល" } },
            { value: 4, suffix: ".9★", label: { en: "Owner rating", km: "ការវាយតម្លៃ" } },
            { value: 100, suffix: "%", label: { en: "In-house lab", km: "មន្ទីរពិសោធន៍ផ្ទាល់" } },
          ]}
        />
        <Section id="services" eyebrow={{ en: "What we offer", km: "សេវាកម្មរបស់យើង" }} title={{ en: "Services", km: "សេវាកម្ម" }}>
          <ServiceGrid cols={3} items={[
            { icon: <Stethoscope size={20} />, name: { en: "Health Checkups", km: "ពិនិត្យសុខភាព" }, desc: { en: "Full wellness exams for dogs, cats, and small pets.", km: "ពិនិត្យសុខភាពពេញលេញ សម្រាប់ឆ្កែ ឆ្មា និងសត្វតូច។" } },
            { icon: <Syringe size={20} />, name: { en: "Vaccination Plans", km: "គម្រោងវ៉ាក់សាំង" }, desc: { en: "Puppy and kitten schedules with reminders.", km: "កាលវិភាគកូនឆ្កែ កូនឆ្មា ជាមួយការរំលឹក។" } },
            { icon: <Bone size={20} />, name: { en: "Dental Care", km: "ថែទាំធ្មេញ" }, desc: { en: "Cleaning, extractions, and at-home care guidance.", km: "សម្អាត ដក និងការណែនាំថែទាំនៅផ្ទះ។" } },
            { icon: <Microscope size={20} />, name: { en: "Lab & Diagnostics", km: "មន្ទីរពិសោធន៍" }, desc: { en: "In-house blood work and imaging, same day.", km: "ពិនិត្យឈាម និងរូបភាព ក្នុងថ្ងៃ។" } },
            { icon: <Scissors size={20} />, name: { en: "Surgery & Spay", km: "វះកាត់ & ក្រៀវ" }, desc: { en: "Modern surgical suite with careful aftercare.", km: "បន្ទប់វះកាត់ទំនើប ជាមួយការថែទាំក្រោយ។" } },
            { icon: <Ambulance size={20} />, name: { en: "Emergency Care", km: "ការថែទាំបន្ទាន់" }, desc: { en: "Priority line for urgent cases during opening hours.", km: "ខ្សែអាទិភាពសម្រាប់ករណីបន្ទាន់ ក្នុងម៉ោងបើក។" } },
          ]} />
        </Section>
        <Section id="pricing" alt eyebrow={{ en: "Plans", km: "គម្រោង" }} title={{ en: "Vaccination plans", km: "គម្រោងវ៉ាក់សាំង" }}>
          <PricingTiers tiers={[
            { name: { en: "Puppy Start", km: "កូនឆ្កែ" }, price: "$45", features: [{ en: "3 core vaccines", km: "វ៉ាក់សាំងសំខាន់ ៣" }, { en: "Deworming", km: "បណ្តេញព្រូន" }, { en: "Health book", km: "សៀវភៅសុខភាព" }] },
            { name: { en: "Kitten Start", km: "កូនឆ្មា" }, price: "$40", popular: true, features: [{ en: "2 core vaccines", km: "វ៉ាក់សាំងសំខាន់ ២" }, { en: "Deworming", km: "បណ្តេញព្រូន" }, { en: "Health book", km: "សៀវភៅសុខភាព" }] },
            { name: { en: "Annual Booster", km: "បន្ថែមប្រចាំឆ្នាំ" }, price: "$25", features: [{ en: "Yearly vaccines", km: "វ៉ាក់សាំងប្រចាំឆ្នាំ" }, { en: "Full checkup", km: "ពិនិត្យពេញលេញ" }, { en: "Reminder service", km: "សេវារំលឹក" }] },
          ]} />
        </Section>
        <Section eyebrow={{ en: "Owners", km: "ម្ចាស់សត្វ" }} title={{ en: "Trusted by pet owners", km: "ទុកចិត្តដោយម្ចាស់សត្វ" }}>
          <Reviews reviews={[
            { text: { en: "They caught my dog's illness early and explained everything clearly. Truly caring vets.", km: "ពួកគេរកឃើញជំងឺឆ្កែខ្ញុំទាន់ពេល ហើយពន្យល់ច្បាស់។ ពេទ្យសត្វយកចិត្តទុកដាក់ពិត។" }, name: "Sina K." },
            { text: { en: "Clean clinic, gentle staff, and fair prices. My cat is never stressed here.", km: "គ្លីនិកស្អាត បុគ្គលិកថ្នម តម្លៃសមរម្យ។ ឆ្មាខ្ញុំមិនតានតឹងទេ។" }, name: "Bora M." },
          ]} />
        </Section>
        <Section eyebrow={{ en: "Also available", km: "មានផងដែរ" }} title={{ en: "More pet services", km: "សេវាសត្វបន្ថែម" }}>
          <CheckList cols={3} items={[
            { en: "Microchipping", km: "ដាក់បន្ទះ microchip" },
            { en: "Deworming & flea control", km: "បណ្តេញព្រូន និងល្អិត" },
            { en: "Nutrition advice", km: "ដំបូន្មានអាហារ" },
            { en: "Travel health certificates", km: "វិញ្ញាបនបត្រធ្វើដំណើរ" },
            { en: "Boarding referrals", km: "បញ្ជូនកន្លែងស្នាក់" },
            { en: "Pet pharmacy", km: "ឱសថសត្វ" },
            { en: "Home visits", km: "សេវាមកផ្ទះ" },
            { en: "Puppy & kitten packages", km: "កញ្ចប់កូនឆ្កែ-ឆ្មា" },
            { en: "Free parking", km: "ចតរថយន្តឥតគិតថ្លៃ" },
          ]} />
        </Section>

        <Section alt eyebrow={{ en: "Hours", km: "ម៉ោង" }} title={{ en: "Opening hours", km: "ម៉ោងបើក" }}>
          <HoursTable rows={[
            { day: { en: "Monday – Saturday", km: "ច័ន្ទ – សៅរ៍" }, time: "8:00 AM – 7:00 PM" },
            { day: { en: "Sunday", km: "អាទិត្យ" }, time: "8:00 AM – 12:00 PM" },
            { day: { en: "Emergency", km: "បន្ទាន់" }, time: { en: "Priority line in hours", km: "ខ្សែអាទិភាពក្នុងម៉ោង" } },
          ]} />
        </Section>

        <Section eyebrow={{ en: "FAQ", km: "សំណួរញឹកញាប់" }} title={{ en: "Pet owner questions", km: "សំណួរម្ចាស់សត្វ" }}>
          <FAQ items={[
            { q: { en: "When should I vaccinate my puppy?", km: "តើគួរចាក់វ៉ាក់សាំងកូនឆ្កែពេលណា?" }, a: { en: "From 6–8 weeks. Our puppy package covers the full schedule with reminders.", km: "ចាប់ពី ៦–៨ សប្តាហ៍។ កញ្ចប់កូនឆ្កែគ្របដណ្តប់ពេញ។" } },
            { q: { en: "Do you handle emergencies?", km: "តើអ្នកដោះស្រាយករណីបន្ទាន់ទេ?" }, a: { en: "Yes, we keep a priority line during opening hours — call ahead if you can.", km: "បាទ/ចាស មានខ្សែអាទិភាពក្នុងម៉ោងបើក។" } },
            { q: { en: "Can you visit at home?", km: "តើអាចមកផ្ទះទេ?" }, a: { en: "Home visits are available by appointment within the city.", km: "មានសេវាមកផ្ទះ តាមការណាត់ក្នុងក្រុង។" } },
          ]} />
        </Section>

        <BookingSection
          eyebrow={{ en: "Appointment", km: "ការណាត់ជួប" }} title={{ en: "Bring them in", km: "នាំពួកគេមក" }}
          subtitle={{ en: "Book a visit and we'll be ready for your pet.", km: "កក់ការជួប ហើយយើងនឹងត្រៀមសម្រាប់សត្វរបស់អ្នក។" }}
          services={[{ en: "Health Checkup", km: "ពិនិត្យសុខភាព" }, { en: "Vaccination", km: "វ៉ាក់សាំង" }, { en: "Dental Care", km: "ថែទាំធ្មេញ" }, { en: "Surgery", km: "វះកាត់" }]}
          extraLabel={{ en: "Pet type", km: "ប្រភេទសត្វ" }}
          extraOptions={[{ en: "Dog", km: "ឆ្កែ" }, { en: "Cat", km: "ឆ្មា" }, { en: "Other", km: "ផ្សេងទៀត" }]}
        />
        <Section id="contact" title={{ en: "Find us", km: "រកយើង" }}>
          <ContactBlock telegram={CONTACT.telegram} phone={CONTACT.phone}
            address={{ en: "#102, Street 289, Phnom Penh", km: "#102, ផ្លូវ 289, ភ្នំពេញ" }}
            hours={{ en: "Open daily · 8:00 AM – 7:00 PM", km: "បើករាល់ថ្ងៃ · ៨:០០ – ១៩:០០" }} />
        </Section>
        <DemoFooter text={{ en: "© 2026 PetCare Vet Clinic · Phnom Penh", km: "© ២០២៦ PetCare Vet Clinic · ភ្នំពេញ" }} />
        <DemoBadge />
      </DemoRoot>
    </DemoShell>
  );
}
