import type { Metadata } from "next";
import { Heart, Bone, Brain, Baby, Microscope, Pill, Scan, Cross } from "lucide-react";
import DemoShell from "@/lib/demo-theme";
import {
  DemoRoot, DemoNav, Hero, Section, ServiceGrid, Reviews, Prose,
  CheckList, HoursTable, FAQ, BookingSection, ContactBlock, DemoFooter, DemoBadge,
} from "@/components/demo-kit";

export const metadata: Metadata = {
  title: "Angkor Polyclinic — Hospital & Polyclinic | SomaTech Demo",
  description: "Demo website for a hospital and polyclinic: departments, specialists, and emergency care.",
};

const CONTACT = { telegram: "https://t.me/somatech_kh", phone: "tel:+85512345678" };

export default function Page() {
  return (
    <DemoShell slug="somahospital">
      <DemoRoot accent="#0d9488">
        <DemoNav
          brand={<><span className="w-8 h-8 rounded-lg bg-[var(--accent)] text-white flex items-center justify-center">＋</span>Angkor Polyclinic</>}
          links={[
            { label: { en: "Departments", km: "ផ្នែក" }, href: "#services" },
            { label: { en: "About", km: "អំពី" }, href: "#about" },
            { label: { en: "Contact", km: "ទំនាក់ទំនង" }, href: "#contact" },
          ]}
          cta={{ en: "Emergency", km: "សង្គ្រោះបន្ទាន់" }} ctaHref={CONTACT.phone}
        />
        <Hero
          eyebrow={{ en: "Hospital & Polyclinic · 24/7 Emergency", km: "មន្ទីរពេទ្យ · សង្គ្រោះបន្ទាន់ ២៤/៧" }}
          title={{ en: "Care you can trust, close to", km: "ការថែទាំដែលទុកចិត្តបាន នៅជិត" }}
          titleAccent={{ en: "home.", km: "ផ្ទះ។" }}
          subtitle={{ en: "Full-service departments, modern diagnostics, and specialists who take time to listen.", km: "ផ្នែកសេវាកម្មពេញលេញ ការវិនិច្ឆ័យទំនើប និងគ្រូពេទ្យឯកទេសដែលយកចិត្តទុកដាក់ស្តាប់។" }}
          subtitleAlt={{ en: "Emergency care available 24 hours a day.", km: "សេវាសង្គ្រោះបន្ទាន់ ២៤ ម៉ោង។" }}
          primary={{ label: { en: "Our departments", km: "មើលផ្នែក" }, href: "#services" }}
          secondary={{ label: { en: "Ask on Telegram", km: "សួរតាម Telegram" }, href: CONTACT.telegram }}
          stats={[
            { value: 24, suffix: "/7", label: { en: "Emergency", km: "សង្គ្រោះបន្ទាន់" } },
            { value: 35, suffix: "+", label: { en: "Specialists", km: "គ្រូពេទ្យឯកទេស" } },
            { value: 80, suffix: "", label: { en: "Inpatient beds", km: "គ្រែអ្នកជំងឺ" } },
            { value: 15, suffix: "+", label: { en: "Years serving", km: "ឆ្នាំបម្រើ" } },
          ]}
        />
        <Section id="services" eyebrow={{ en: "Specialties", km: "ជំនាញ" }} title={{ en: "Departments", km: "ផ្នែកជំនាញ" }}>
          <ServiceGrid items={[
            { icon: <Heart size={20} />, name: { en: "Cardiology", km: "បេះដូង" }, desc: { en: "Heart screening, ECG, and specialist follow-up.", km: "ពិនិត្យបេះដូង ECG និងតាមដានឯកទេស។" } },
            { icon: <Bone size={20} />, name: { en: "Orthopedics", km: "ឆ្អឹង" }, desc: { en: "Bone, joint, and sports injury care.", km: "ថែទាំឆ្អឹង សន្លាក់ និងរបួសកីឡា។" } },
            { icon: <Brain size={20} />, name: { en: "Neurology", km: "ប្រព័ន្ធប្រសាទ" }, desc: { en: "Nervous system diagnosis and treatment.", km: "វិនិច្ឆ័យ និងព្យាបាលប្រព័ន្ធប្រសាទ។" } },
            { icon: <Baby size={20} />, name: { en: "Pediatrics", km: "កុមារ" }, desc: { en: "Child health, growth, and vaccinations.", km: "សុខភាពកុមារ ការលូតលាស់ និងវ៉ាក់សាំង។" } },
            { icon: <Microscope size={20} />, name: { en: "Laboratory", km: "មន្ទីរពិសោធន៍" }, desc: { en: "Blood work and diagnostics, same day.", km: "ពិនិត្យឈាម និងវិនិច្ឆ័យ ក្នុងថ្ងៃ។" } },
            { icon: <Scan size={20} />, name: { en: "Imaging & X-Ray", km: "ថតរូបភាព" }, desc: { en: "X-ray, ultrasound, and CT scanning.", km: "X-ray អ៊ុលត្រាសោន និង CT scan។" } },
            { icon: <Pill size={20} />, name: { en: "Pharmacy", km: "ឱសថស្ថាន" }, desc: { en: "On-site pharmacy with trusted medicines.", km: "ឱសថស្ថានក្នុងកន្លែង ជាមួយឱសថទុកចិត្តបាន។" } },
            { icon: <Cross size={20} />, name: { en: "Emergency", km: "សង្គ្រោះបន្ទាន់" }, desc: { en: "24/7 emergency room and ambulance.", km: "បន្ទប់សង្គ្រោះបន្ទាន់ ២៤/៧ និងរថយន្តសង្គ្រោះ។" } },
          ]} />
        </Section>
        <Section id="about" alt eyebrow={{ en: "Why us", km: "ហេតុអ្វីយើង" }} title={{ en: "A standard of care Cambodia deserves", km: "ស្តង់ដារថែទាំដែលកម្ពុជាសមនឹងទទួល" }}>
          <Prose>{{
            en: "Since 2011, Angkor Polyclinic has combined international-standard protocols with local, compassionate service. Our specialists train continuously and our facilities are audited yearly — because your family deserves certainty, not guesswork.",
            km: "ចាប់តាំងពីឆ្នាំ ២០១១ Angkor Polyclinic បានផ្សំបទដ្ឋានស្តង់ដារអន្តរជាតិ ជាមួយសេវាកម្មក្នុងស្រុកប្រកបដោយក្តីមេត្តា។ គ្រូពេទ្យរបស់យើងបណ្តុះបណ្តាលជាប្រចាំ ហើយសម្ភារៈត្រូវបានត្រួតពិនិត្យប្រចាំឆ្នាំ។",
          }}</Prose>
        </Section>
        <Section eyebrow={{ en: "Patients", km: "អ្នកជំងឺ" }} title={{ en: "Trusted by families", km: "ទុកចិត្តដោយគ្រួសារ" }}>
          <Reviews reviews={[
            { text: { en: "They handled my father's emergency at 2am with such calm and skill. Forever grateful.", km: "ពួកគេដោះស្រាយករណីបន្ទាន់របស់ឪពុកខ្ញុំនៅម៉ោង ២ យប់ ដោយស្ងប់ស្ងាត់ និងជំនាញ។" }, name: "Pisey N." },
            { text: { en: "Modern equipment and clear explanations. It feels like a real hospital, not a rushed clinic.", km: "ឧបករណ៍ទំនើប និងការពន្យល់ច្បាស់។ វាមានអារម្មណ៍ដូចមន្ទីរពេទ្យពិតប្រាកដ។" }, name: "Chan V." },
          ]} />
        </Section>
        <Section eyebrow={{ en: "Facilities", km: "សម្ភារៈ" }} title={{ en: "On-site facilities", km: "សម្ភារៈក្នុងកន្លែង" }}>
          <CheckList cols={3} items={[
            { en: "24/7 emergency room", km: "បន្ទប់សង្គ្រោះបន្ទាន់ ២៤/៧" },
            { en: "Ambulance service", km: "សេវារថយន្តសង្គ្រោះ" },
            { en: "Operating theatres", km: "បន្ទប់វះកាត់" },
            { en: "Inpatient rooms", km: "បន្ទប់សម្រាកព្យាបាល" },
            { en: "ICU & recovery", km: "ICU និងស្តារ" },
            { en: "In-house pharmacy", km: "ឱសថស្ថានក្នុងកន្លែង" },
            { en: "CT, X-ray & ultrasound", km: "CT, X-ray និងអ៊ុលត្រាសោន" },
            { en: "Insurance & billing desk", km: "តុធានារ៉ាប់រង" },
            { en: "Free visitor parking", km: "ចតរថយន្តភ្ញៀវ" },
          ]} />
        </Section>

        <Section alt eyebrow={{ en: "Visiting", km: "ការមកសួរ" }} title={{ en: "Visiting hours", km: "ម៉ោងសួរសុខទុក្ខ" }}>
          <HoursTable rows={[
            { day: { en: "Emergency", km: "សង្គ្រោះបន្ទាន់" }, time: { en: "24 hours, every day", km: "២៤ ម៉ោង រាល់ថ្ងៃ" } },
            { day: { en: "Outpatient (OPD)", km: "ពិនិត្យក្រៅ (OPD)" }, time: "7:00 AM – 8:00 PM" },
            { day: { en: "Inpatient visits", km: "សួរអ្នកសម្រាក" }, time: "9:00 AM – 8:00 PM" },
          ]} />
        </Section>

        <Section eyebrow={{ en: "FAQ", km: "សំណួរញឹកញាប់" }} title={{ en: "Patient questions", km: "សំណួរអ្នកជំងឺ" }}>
          <FAQ items={[
            { q: { en: "Is the emergency room always open?", km: "តើបន្ទប់សង្គ្រោះបើកជានិច្ចទេ?" }, a: { en: "Yes — our emergency room and ambulance run 24 hours, every day.", km: "បាទ/ចាស — បន្ទប់សង្គ្រោះ និងរថយន្តសង្គ្រោះ ២៤ ម៉ោង។" } },
            { q: { en: "Do you accept insurance?", km: "តើទទួលធានារ៉ាប់រងទេ?" }, a: { en: "We work with major local and international insurers. Bring your card and ID.", km: "យើងធ្វើការជាមួយក្រុមហ៊ុនធានារ៉ាប់រងធំៗ។" } },
            { q: { en: "Can I book a specialist directly?", km: "តើអាចកក់ឯកទេសដោយផ្ទាល់ទេ?" }, a: { en: "Yes, request a department below or message us on Telegram.", km: "បាទ/ចាស ស្នើសុំផ្នែកខាងក្រោម ឬតាម Telegram។" } },
          ]} />
        </Section>

        <BookingSection
          eyebrow={{ en: "Appointment", km: "ការណាត់ជួប" }} title={{ en: "Book a consultation", km: "ណាត់ជួបពិគ្រោះ" }}
          subtitle={{ en: "Choose a department and we'll arrange your visit.", km: "ជ្រើសរើសផ្នែក ហើយយើងនឹងរៀបចំការជួប។" }}
          services={[{ en: "Cardiology", km: "បេះដូង" }, { en: "Orthopedics", km: "ឆ្អឹង" }, { en: "Pediatrics", km: "កុមារ" }, { en: "General", km: "ទូទៅ" }]}
        />
        <Section id="contact" title={{ en: "Find us", km: "រកយើង" }}>
          <ContactBlock telegram={CONTACT.telegram} phone={CONTACT.phone}
            address={{ en: "#250, Russian Blvd, Phnom Penh", km: "#250, មហាវិថីរុស្ស៊ី, ភ្នំពេញ" }}
            hours={{ en: "Open daily · Emergency 24/7", km: "បើករាល់ថ្ងៃ · សង្គ្រោះបន្ទាន់ ២៤/៧" }} />
        </Section>
        <DemoFooter text={{ en: "© 2026 Angkor Polyclinic · Phnom Penh", km: "© ២០២៦ Angkor Polyclinic · ភ្នំពេញ" }} />
        <DemoBadge />
      </DemoRoot>
    </DemoShell>
  );
}
