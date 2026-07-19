import type { Metadata } from "next";
import { GraduationCap, MessageSquare, Trophy, Briefcase } from "lucide-react";
import DemoShell from "@/lib/demo-theme";
import {
  DemoRoot, DemoNav, Hero, Section, ServiceGrid, PricingTiers, Reviews, Prose,
  CheckList, TeamGrid, FAQ, BookingSection, ContactBlock, DemoFooter, DemoBadge,
} from "@/components/demo-kit";

export const metadata: Metadata = {
  title: "Fluent House — Language Center | SomaTech Demo",
  description: "Demo website for a language center: course levels, schedules, teachers, and enrollment.",
};

const CONTACT = { telegram: "https://t.me/somatech_kh", phone: "tel:+85512345678" };

export default function Page() {
  return (
    <DemoShell slug="somalingo">
      <DemoRoot accent="#7c3aed">
        <DemoNav
          brand={<><span className="w-8 h-8 rounded-lg bg-[var(--accent)] text-white flex items-center justify-center text-sm">🗣️</span>Fluent House</>}
          links={[
            { label: { en: "Courses", km: "វគ្គសិក្សា" }, href: "#services" },
            { label: { en: "Fees", km: "ថ្លៃសិក្សា" }, href: "#pricing" },
            { label: { en: "Enroll", km: "ចុះឈ្មោះ" }, href: "#book" },
          ]}
          cta={{ en: "Free placement test", km: "តេស្តកម្រិតឥតគិតថ្លៃ" }} ctaHref="#book"
        />
        <Hero
          eyebrow={{ en: "English Language Center · Phnom Penh", km: "មជ្ឈមណ្ឌលភាសាអង់គ្លេស · ភ្នំពេញ" }}
          title={{ en: "Speak English with", km: "និយាយអង់គ្លេសដោយ" }}
          titleAccent={{ en: "confidence.", km: "ទំនុកចិត្ត។" }}
          subtitle={{ en: "Small classes, speaking-first methodology, and teachers who track your progress every week.", km: "ថ្នាក់តូច វិធីសាស្ត្រនិយាយមុន និងគ្រូតាមដានវឌ្ឍនភាពរាល់សប្តាហ៍។" }}
          subtitleAlt={{ en: "Morning, evening, and weekend schedules.", km: "កាលវិភាគព្រឹក ល្ងាច និងចុងសប្តាហ៍។" }}
          primary={{ label: { en: "Take placement test", km: "ធ្វើតេស្តកម្រិត" }, href: "#book" }}
          secondary={{ label: { en: "View courses", km: "មើលវគ្គសិក្សា" }, href: "#services" }}
          stats={[
            { value: 2400, suffix: "+", label: { en: "Graduates", km: "និស្សិតបញ្ចប់" } },
            { value: 7, suffix: ".0", label: { en: "Avg. IELTS", km: "IELTS មធ្យម" } },
            { value: 12, suffix: "", label: { en: "Max class size", km: "ថ្នាក់អតិបរមា" } },
            { value: 4, suffix: ".9★", label: { en: "Student rating", km: "ការវាយតម្លៃ" } },
          ]}
        />
        <Section id="services" eyebrow={{ en: "Courses & levels", km: "វគ្គ និងកម្រិត" }} title={{ en: "Find your level", km: "រកកម្រិតរបស់អ្នក" }}>
          <ServiceGrid items={[
            { icon: <GraduationCap size={20} />, name: { en: "Foundation (A1–A2)", km: "មូលដ្ឋាន (A1–A2)" }, price: "$45", desc: { en: "Grammar basics, everyday vocabulary, confidence to start.", km: "វេយ្យាករណ៍មូលដ្ឋាន វាក្យសព្ទប្រចាំថ្ងៃ។" } },
            { icon: <MessageSquare size={20} />, name: { en: "Intermediate (B1–B2)", km: "មធ្យម (B1–B2)" }, price: "$55", desc: { en: "Conversation-first classes and real-world tasks.", km: "ថ្នាក់និយាយមុន និងកិច្ចការជាក់ស្តែង។" } },
            { icon: <Trophy size={20} />, name: { en: "IELTS (C1)", km: "IELTS (C1)" }, price: "$75", desc: { en: "Exam strategy, academic writing, and mock tests.", km: "យុទ្ធសាស្ត្រប្រឡង សរសេរអប់រំ និងតេស្តសាកល្បង។" } },
            { icon: <Briefcase size={20} />, name: { en: "Business English", km: "អង់គ្លេសអាជីវកម្ម" }, price: "$85", desc: { en: "Meetings, emails, and negotiation for professionals.", km: "កិច្ចប្រជុំ អ៊ីមែល និងការចរចា។" } },
          ]} />
        </Section>
        <Section id="pricing" alt eyebrow={{ en: "Fees", km: "ថ្លៃសិក្សា" }} title={{ en: "Monthly tuition", km: "ថ្លៃសិក្សាប្រចាំខែ" }}>
          <PricingTiers tiers={[
            { name: { en: "Group Class", km: "ថ្នាក់ក្រុម" }, price: "$45", period: { en: "/mo", km: "/ខែ" }, features: [{ en: "Up to 12 students", km: "ដល់ ១២ សិស្ស" }, { en: "3 classes / week", km: "៣ ថ្នាក់/សប្តាហ៍" }, { en: "Free study club", km: "ក្លឹបសិក្សាឥតគិតថ្លៃ" }] },
            { name: { en: "Semi-Private", km: "ពាក់កណ្តាលឯកជន" }, price: "$95", period: { en: "/mo", km: "/ខែ" }, popular: true, features: [{ en: "4–6 students", km: "៤–៦ សិស្ស" }, { en: "Faster progress", km: "វឌ្ឍនភាពលឿន" }, { en: "Progress reports", km: "របាយការណ៍វឌ្ឍនភាព" }] },
            { name: { en: "Private 1-on-1", km: "ឯកជន ១ ទល់ ១" }, price: "$180", period: { en: "/mo", km: "/ខែ" }, features: [{ en: "Personal schedule", km: "កាលវិភាគផ្ទាល់ខ្លួន" }, { en: "Custom curriculum", km: "កម្មវិធីតាមតម្រូវការ" }, { en: "Exam guarantee", km: "ការធានាប្រឡង" }] },
          ]} />
        </Section>
        <Section eyebrow={{ en: "Why us", km: "ហេតុអ្វីយើង" }} title={{ en: "Why students stay", km: "ហេតុអ្វីសិស្សនៅ" }}>
          <Prose>{{
            en: "Morning, evening, and weekend schedules. Progress reports for every student. Free study club on Saturdays. And a money-back guarantee if you attend every class and don't level up.",
            km: "កាលវិភាគព្រឹក ល្ងាច និងចុងសប្តាហ៍។ របាយការណ៍វឌ្ឍនភាពសម្រាប់សិស្សគ្រប់រូប។ ក្លឹបសិក្សាឥតគិតថ្លៃថ្ងៃសៅរ៍។ និងការធានាសងប្រាក់វិញ ប្រសិនបើអ្នកចូលរៀនគ្រប់ថ្នាក់ តែមិនឡើងកម្រិត។",
          }}</Prose>
        </Section>
        <Section eyebrow={{ en: "Students", km: "សិស្ស" }} title={{ en: "Student reviews", km: "មតិសិស្ស" }}>
          <Reviews reviews={[
            { text: { en: "I went from too shy to speak to leading meetings in English in six months.", km: "ខ្ញុំពីខ្មាស់មិនហ៊ាននិយាយ ក្លាយជាដឹកនាំកិច្ចប្រជុំជាអង់គ្លេសក្នុង ៦ ខែ។" }, name: "Sokunthea R." },
            { text: { en: "Got my IELTS 7.0 on the first try. The mock tests made the real exam feel easy.", km: "បាន IELTS 7.0 លើកដំបូង។ តេស្តសាកល្បងធ្វើឱ្យប្រឡងពិតងាយ។" }, name: "Panha V." },
          ]} />
        </Section>
        <Section eyebrow={{ en: "Every course", km: "រាល់វគ្គ" }} title={{ en: "What's included", km: "អ្វីដែលរួមបញ្ចូល" }}>
          <CheckList cols={3} items={[
            { en: "Free placement test", km: "តេស្តកម្រិតឥតគិតថ្លៃ" },
            { en: "Course books & materials", km: "សៀវភៅ និងសម្ភារៈ" },
            { en: "Weekly progress reports", km: "របាយការណ៍ប្រចាំសប្តាហ៍" },
            { en: "Free Saturday study club", km: "ក្លឹបសិក្សាថ្ងៃសៅរ៍" },
            { en: "Certificate on completion", km: "វិញ្ញាបនបត្របញ្ចប់" },
            { en: "Small speaking-first classes", km: "ថ្នាក់និយាយមុន" },
            { en: "Make-up classes", km: "ថ្នាក់សងវិញ" },
            { en: "IELTS mock tests", km: "តេស្តសាកល្បង IELTS" },
            { en: "Level-up guarantee", km: "ការធានាឡើងកម្រិត" },
          ]} />
        </Section>

        <Section id="team" alt eyebrow={{ en: "Teachers", km: "គ្រូ" }} title={{ en: "Meet the teachers", km: "ជួបគ្រូ" }}>
          <TeamGrid members={[
            { emoji: "👩‍🏫", name: { en: "Ms. Sophea", km: "អ្នកគ្រូ សុភា" }, role: { en: "IELTS & academic", km: "IELTS & អប់រំ" } },
            { emoji: "👨‍🏫", name: { en: "Mr. James", km: "លោកគ្រូ James" }, role: { en: "Conversation", km: "សន្ទនា" } },
            { emoji: "👩‍🏫", name: { en: "Ms. Dalin", km: "អ្នកគ្រូ ដាលីន" }, role: { en: "Foundation", km: "មូលដ្ឋាន" } },
            { emoji: "👨‍🏫", name: { en: "Mr. Rithy", km: "លោកគ្រូ រិទ្ធី" }, role: { en: "Business English", km: "អង់គ្លេសអាជីវកម្ម" } },
          ]} />
        </Section>

        <Section eyebrow={{ en: "FAQ", km: "សំណួរញឹកញាប់" }} title={{ en: "Student questions", km: "សំណួរសិស្ស" }}>
          <FAQ items={[
            { q: { en: "How do I know my level?", km: "តើដឹងកម្រិតខ្ញុំយ៉ាងណា?" }, a: { en: "Take our free placement test — online or in person — and we'll place you.", km: "ធ្វើតេស្តកម្រិតឥតគិតថ្លៃ — អនឡាញ ឬផ្ទាល់។" } },
            { q: { en: "What if I miss a class?", km: "បើខ្ញុំខកខានថ្នាក់?" }, a: { en: "You can join a make-up class in another group that week.", km: "អ្នកអាចចូលថ្នាក់សងវិញក្នុងក្រុមផ្សេង។" } },
            { q: { en: "Is there a guarantee?", km: "តើមានការធានាទេ?" }, a: { en: "Attend every class and if you don't level up, the next month is free.", km: "ចូលរៀនគ្រប់ថ្នាក់ បើមិនឡើងកម្រិត ខែបន្ទាប់ឥតគិតថ្លៃ។" } },
          ]} />
        </Section>

        <BookingSection
          eyebrow={{ en: "Enrollment", km: "ការចុះឈ្មោះ" }} title={{ en: "Start this month", km: "ចាប់ផ្តើមខែនេះ" }}
          subtitle={{ en: "Free placement test and a class schedule that fits you.", km: "តេស្តកម្រិតឥតគិតថ្លៃ និងកាលវិភាគសមនឹងអ្នក។" }}
          services={[{ en: "Foundation", km: "មូលដ្ឋាន" }, { en: "Intermediate", km: "មធ្យម" }, { en: "IELTS", km: "IELTS" }, { en: "Business English", km: "អង់គ្លេសអាជីវកម្ម" }]}
        />
        <Section id="contact" title={{ en: "Find us", km: "រកយើង" }}>
          <ContactBlock telegram={CONTACT.telegram} phone={CONTACT.phone}
            address={{ en: "Toul Tom Poung, Phnom Penh", km: "ទួលទំពូង, ភ្នំពេញ" }}
            hours={{ en: "Mon–Sun · 7:00 AM – 9:00 PM", km: "ច័ន្ទ–អាទិត្យ · ៧:០០ – ២១:០០" }} />
        </Section>
        <DemoFooter text={{ en: "© 2026 Fluent House · Phnom Penh", km: "© ២០២៦ Fluent House · ភ្នំពេញ" }} />
        <DemoBadge />
      </DemoRoot>
    </DemoShell>
  );
}
