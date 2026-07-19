import type { Metadata } from "next";
import { Stethoscope, Syringe, TestTube, Baby, HeartPulse, Home } from "lucide-react";
import DemoShell from "@/lib/demo-theme";
import {
  DemoRoot, DemoNav, Hero, Section, ServiceGrid, TeamGrid, Reviews,
  CheckList, HoursTable, FAQ, BookingSection, ContactBlock, DemoFooter, DemoBadge,
} from "@/components/demo-kit";

export const metadata: Metadata = {
  title: "Sokha Care Clinic — Family Clinic | SomaTech Demo",
  description: "Demo website for a family medical clinic: services, doctors, and appointments.",
};

const CONTACT = { telegram: "https://t.me/somatech_kh", phone: "tel:+85512345678" };

export default function Page() {
  return (
    <DemoShell slug="somaclinic">
      <DemoRoot accent="#0284c7">
        <DemoNav
          brand={<><span className="w-8 h-8 rounded-lg bg-[var(--accent)] text-white flex items-center justify-center">＋</span>Sokha Care</>}
          links={[
            { label: { en: "Services", km: "សេវាកម្ម" }, href: "#services" },
            { label: { en: "Doctors", km: "វេជ្ជបណ្ឌិត" }, href: "#team" },
            { label: { en: "Contact", km: "ទំនាក់ទំនង" }, href: "#contact" },
          ]}
          cta={{ en: "Book now", km: "ណាត់ជួប" }} ctaHref="#book"
        />
        <Hero
          eyebrow={{ en: "Family Clinic · Phnom Penh", km: "គ្លីនិកគ្រួសារ · ភ្នំពេញ" }}
          title={{ en: "Trusted care for every", km: "ការថែទាំដែលទុកចិត្តបាន សម្រាប់" }}
          titleAccent={{ en: "family.", km: "គ្រួសារទាំងអស់។" }}
          subtitle={{ en: "Experienced doctors, short waiting times, and honest advice — open every day.", km: "វេជ្ជបណ្ឌិតមានបទពិសោធន៍ រង់ចាំតិច និងដំបូន្មានស្មោះត្រង់ — បើករាល់ថ្ងៃ។" }}
          subtitleAlt={{ en: "Open daily 7:00 AM – 8:00 PM", km: "បើករាល់ថ្ងៃ ៧:០០ – ២០:០០" }}
          primary={{ label: { en: "Book appointment", km: "ណាត់ជួប" }, href: "#book" }}
          secondary={{ label: { en: "View services", km: "មើលសេវាកម្ម" }, href: "#services" }}
          stats={[
            { value: 15, suffix: "+", label: { en: "Years serving", km: "ឆ្នាំបម្រើ" } },
            { value: 30000, suffix: "+", label: { en: "Patients", km: "អ្នកជំងឺ" } },
            { value: 7, suffix: " days", label: { en: "Open weekly", km: "បើកមួយសប្តាហ៍" } },
            { value: 6, suffix: "", label: { en: "Doctors", km: "វេជ្ជបណ្ឌិត" } },
          ]}
        />
        <Section id="services" eyebrow={{ en: "What we offer", km: "សេវាកម្មរបស់យើង" }} title={{ en: "Our services", km: "សេវាកម្ម" }}>
          <ServiceGrid cols={3} items={[
            { icon: <Stethoscope size={20} />, name: { en: "General Checkup", km: "ពិនិត្យសុខភាពទូទៅ" }, desc: { en: "Consultations and health checks for all ages.", km: "ពិគ្រោះ និងពិនិត្យសុខភាពសម្រាប់គ្រប់វ័យ។" } },
            { icon: <Syringe size={20} />, name: { en: "Vaccination", km: "ចាក់វ៉ាក់សាំង" }, desc: { en: "Child and adult vaccines on a standard schedule.", km: "វ៉ាក់សាំងកុមារ និងមនុស្សពេញវ័យ តាមកាលវិភាគ។" } },
            { icon: <TestTube size={20} />, name: { en: "Lab & Blood Tests", km: "ពិនិត្យឈាម" }, desc: { en: "Lab services with same-day results.", km: "សេវាមន្ទីរពិសោធន៍ លទ្ធផលក្នុងថ្ងៃ។" } },
            { icon: <Baby size={20} />, name: { en: "Mother & Child", km: "ម្តាយ និងកុមារ" }, desc: { en: "Prenatal care and child growth tracking.", km: "ថែទាំផ្ទៃពោះ និងតាមដានការលូតលាស់កុមារ។" } },
            { icon: <HeartPulse size={20} />, name: { en: "Chronic Care", km: "ជំងឺរ៉ាំរ៉ៃ" }, desc: { en: "Diabetes, blood pressure, and heart follow-ups.", km: "តាមដានទឹកនោមផ្អែម លើសឈាម និងបេះដូង។" } },
            { icon: <Home size={20} />, name: { en: "Home Visits", km: "ពិនិត្យដល់ផ្ទះ" }, desc: { en: "Health checks at home by appointment.", km: "ពិនិត្យសុខភាពដល់ផ្ទះ តាមការណាត់។" } },
          ]} />
        </Section>
        <Section id="team" alt eyebrow={{ en: "Our team", km: "ក្រុមការងារ" }} title={{ en: "Doctors", km: "វេជ្ជបណ្ឌិត" }}>
          <TeamGrid members={[
            { emoji: "👨‍⚕️", name: { en: "Dr. Sokha", km: "វេជ្ជ. សុខា" }, role: { en: "General physician", km: "វេជ្ជបណ្ឌិតទូទៅ" } },
            { emoji: "👩‍⚕️", name: { en: "Dr. Sreypov", km: "វេជ្ជ. ស្រីពៅ" }, role: { en: "Pediatrics", km: "ឯកទេសកុមារ" } },
            { emoji: "👨‍⚕️", name: { en: "Dr. Visal", km: "វេជ្ជ. វិសាល" }, role: { en: "Chronic care", km: "ជំងឺរ៉ាំរ៉ៃ" } },
            { emoji: "👩‍⚕️", name: { en: "Dr. Bopha", km: "វេជ្ជ. បុប្ផា" }, role: { en: "Women's health", km: "សុខភាពស្ត្រី" } },
          ]} />
        </Section>
        <Section eyebrow={{ en: "Patients", km: "អ្នកជំងឺ" }} title={{ en: "What families say", km: "មតិគ្រួសារ" }}>
          <Reviews reviews={[
            { text: { en: "The doctors take time to explain and never rush. Our whole family comes here now.", km: "វេជ្ជបណ្ឌិតពន្យល់យ៉ាងយកចិត្តទុកដាក់ មិនប្រញាប់។ គ្រួសារយើងទាំងមូលមកទីនេះ។" }, name: "Ratana K." },
            { text: { en: "Short wait, clean clinic, and fair prices. Booking on Telegram is so easy.", km: "រង់ចាំតិច គ្លីនិកស្អាត តម្លៃសមរម្យ។ ណាត់តាម Telegram ងាយស្រួល។" }, name: "Sophea T." },
          ]} />
        </Section>
        <Section eyebrow={{ en: "Also available", km: "មានផងដែរ" }} title={{ en: "More ways we care", km: "សេវាបន្ថែម" }}>
          <CheckList cols={3} items={[
            { en: "Health certificates", km: "វិញ្ញាបនបត្រសុខភាព" },
            { en: "Minor wound care", km: "ព្យាបាលរបួសតូច" },
            { en: "IV drip & vitamins", km: "ដាក់ទឹកសេរ៉ូម និងវីតាមីន" },
            { en: "Family health plans", km: "គម្រោងសុខភាពគ្រួសារ" },
            { en: "Referral to specialists", km: "បញ្ជូនទៅឯកទេស" },
            { en: "Pharmacy on site", km: "ឱសថស្ថានក្នុងកន្លែង" },
            { en: "English & Khmer speaking", km: "និយាយអង់គ្លេស និងខ្មែរ" },
            { en: "Insurance accepted", km: "ទទួលធានារ៉ាប់រង" },
            { en: "Free parking", km: "ចតរថយន្តឥតគិតថ្លៃ" },
          ]} />
        </Section>

        <Section alt eyebrow={{ en: "Hours", km: "ម៉ោង" }} title={{ en: "Opening hours", km: "ម៉ោងបើក" }}>
          <HoursTable rows={[
            { day: { en: "Monday – Saturday", km: "ច័ន្ទ – សៅរ៍" }, time: "7:00 AM – 8:00 PM" },
            { day: { en: "Sunday", km: "អាទិត្យ" }, time: "8:00 AM – 5:00 PM" },
            { day: { en: "Public holidays", km: "ថ្ងៃឈប់សម្រាក" }, time: { en: "On call", km: "តាមការហៅ" } },
          ]} />
        </Section>

        <Section eyebrow={{ en: "FAQ", km: "សំណួរញឹកញាប់" }} title={{ en: "Common questions", km: "សំណួរទូទៅ" }}>
          <FAQ items={[
            { q: { en: "Do I need an appointment?", km: "តើត្រូវការណាត់ជួបទេ?" }, a: { en: "Walk-ins are welcome; booking on Telegram means shorter waiting.", km: "អាចមកផ្ទាល់; ការកក់តាម Telegram រង់ចាំតិច។" } },
            { q: { en: "Do you accept insurance?", km: "តើទទួលធានារ៉ាប់រងទេ?" }, a: { en: "Yes, we work with major local insurers — bring your card.", km: "បាទ/ចាស យើងធ្វើការជាមួយក្រុមហ៊ុនធានារ៉ាប់រង។" } },
            { q: { en: "Can a doctor visit my home?", km: "តើវេជ្ជបណ្ឌិតអាចមកផ្ទះទេ?" }, a: { en: "Yes, home visits are available by appointment within the city.", km: "បាទ/ចាស មានសេវាមកផ្ទះ តាមការណាត់។" } },
          ]} />
        </Section>

        <BookingSection
          eyebrow={{ en: "Appointment", km: "ការណាត់ជួប" }} title={{ en: "Book an appointment", km: "ណាត់ជួប" }}
          subtitle={{ en: "Walk-ins welcome — booking saves you time.", km: "អាចមកផ្ទាល់ — ការណាត់ជួយសន្សំពេលវេលា។" }}
          services={[{ en: "General Checkup", km: "ពិនិត្យទូទៅ" }, { en: "Vaccination", km: "ចាក់វ៉ាក់សាំង" }, { en: "Lab Test", km: "ពិនិត្យឈាម" }, { en: "Home Visit", km: "ពិនិត្យដល់ផ្ទះ" }]}
        />
        <Section id="contact" title={{ en: "Visit us today", km: "មកជួបយើងថ្ងៃនេះ" }}>
          <ContactBlock telegram={CONTACT.telegram} phone={CONTACT.phone}
            address={{ en: "#45, Street 163, Olympic, Phnom Penh", km: "#45, ផ្លូវ 163, អូឡាំពិក, ភ្នំពេញ" }}
            hours={{ en: "Open daily · 7:00 AM – 8:00 PM", km: "បើករាល់ថ្ងៃ · ៧:០០ – ២០:០០" }} />
        </Section>
        <DemoFooter text={{ en: "© 2026 Sokha Care Clinic · Phnom Penh", km: "© ២០២៦ គ្លីនិកសុខាការ · ភ្នំពេញ" }} />
        <DemoBadge />
      </DemoRoot>
    </DemoShell>
  );
}
