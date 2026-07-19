import type { Bi } from "@/lib/i18n";

export type CategoryId =
  | "healthcare"
  | "fnb"
  | "hospitality"
  | "education"
  | "auto"
  | "pet"
  | "fitness"
  | "motion";

export type StyleId = "clean" | "premium" | "bold" | "soft" | "corporate" | "dark";
export type GoalId = "leads" | "services" | "products" | "campaign";
export type LangTagId = "kh-en" | "en" | "kh";

export const categories: { id: CategoryId | "all"; label: Bi }[] = [
  { id: "all", label: { en: "All", km: "ទាំងអស់" } },
  { id: "healthcare", label: { en: "Healthcare", km: "សុខាភិបាល" } },
  { id: "fnb", label: { en: "Food & Beverage", km: "អាហារ & ភេសជ្ជៈ" } },
  { id: "hospitality", label: { en: "Hospitality", km: "បដិសណ្ឋារកិច្ច" } },
  { id: "education", label: { en: "Education", km: "អប់រំ" } },
  { id: "auto", label: { en: "Auto Service", km: "សេវារថយន្ត" } },
  { id: "pet", label: { en: "Pet Care", km: "ថែទាំសត្វចិញ្ចឹម" } },
  { id: "fitness", label: { en: "Fitness", km: "ហាត់ប្រាណ" } },
  { id: "motion", label: { en: "Premium Motion", km: "Premium Motion" } },
];

export const styleTags: { id: StyleId; label: Bi }[] = [
  { id: "clean", label: { en: "Clean", km: "សាមញ្ញស្អាត" } },
  { id: "premium", label: { en: "Premium", km: "ប្រណីត" } },
  { id: "bold", label: { en: "Bold", km: "លេចធ្លោ" } },
  { id: "soft", label: { en: "Soft", km: "ទន់ភ្លន់" } },
  { id: "corporate", label: { en: "Corporate", km: "បែបក្រុមហ៊ុន" } },
  { id: "dark", label: { en: "Dark", km: "បែបងងឹត" } },
];

export const goals: { id: GoalId; label: Bi }[] = [
  { id: "leads", label: { en: "Get leads", km: "ទទួលអតិថិជន" } },
  { id: "services", label: { en: "Show services", km: "បង្ហាញសេវាកម្ម" } },
  { id: "products", label: { en: "Sell products", km: "លក់ផលិតផល" } },
  { id: "campaign", label: { en: "Promote campaign", km: "ផ្សព្វផ្សាយ" } },
];

export const langTags: { id: LangTagId; label: Bi }[] = [
  { id: "kh-en", label: { en: "KH+EN", km: "ខ្មែរ+អង់គ្លេស" } },
  { id: "en", label: { en: "EN only", km: "អង់គ្លេស" } },
  { id: "kh", label: { en: "KH only", km: "ខ្មែរ" } },
];

export type Demo = {
  id: string;
  name: Bi;
  category: CategoryId;
  categoryLabel: Bi;
  styleLabel: Bi;
  styles: StyleId[];
  goal: GoalId;
  lang: LangTagId;
  description: Bi;
  bestFor: Bi;
  /** Defaults to the in-repo demo at /demos/<id>; set a URL here to point elsewhere. */
  demoUrl: string | null;
  preview: {
    bg: string;
    text: string;
    brand: string;
    accent: string;
    accentText: string;
    headline: string;
    cta: string;
  };
};

export const demos: Demo[] = [
  {
    id: "dental",
    name: { en: "Premium Dental Clinic", km: "គ្លីនិកធ្មេញប្រណីត" },
    category: "healthcare",
    categoryLabel: { en: "Healthcare / Dental", km: "សុខាភិបាល / ធ្មេញ" },
    styleLabel: { en: "Clean Medical", km: "វេជ្ជសាស្ត្រស្អាត" },
    styles: ["clean"],
    goal: "leads",
    lang: "kh-en",
    description: {
      en: "A bright, modern clinic website demo for braces, clear aligners, whitening, smile design, doctor profiles, treatment results, and appointment requests.",
      km: "គំរូវេបសាយគ្លីនិកទំនើប សម្រាប់ការតម្រង់ធ្មេញ ការធ្វើឱ្យធ្មេញស ប្រវត្តិវេជ្ជបណ្ឌិត លទ្ធផលព្យាបាល និងការស្នើណាត់ជួប។",
    },
    bestFor: {
      en: "Dental clinics, orthodontists, smile studios",
      km: "គ្លីនិកធ្មេញ អ្នកឯកទេសតម្រង់ធ្មេញ",
    },
    demoUrl: null,
    preview: {
      bg: "#dbeafe",
      text: "#1e3a5f",
      brand: "Align Dental Studio",
      accent: "#2563eb",
      accentText: "#ffffff",
      headline: "Make your clinic look as premium as the smiles you create.",
      cta: "Request this style",
    },
  },
  {
    id: "clinic",
    name: { en: "Family Medical Clinic", km: "គ្លីនិកគ្រួសារ" },
    category: "healthcare",
    categoryLabel: { en: "Healthcare / Clinic", km: "សុខាភិបាល / គ្លីនិក" },
    styleLabel: { en: "Trusted Care", km: "ទុកចិត្តបាន" },
    styles: ["clean", "soft"],
    goal: "services",
    lang: "kh",
    description: {
      en: "A friendly clinic website demo with services, doctor team, opening hours, patient guidance, and quick contact for local families.",
      km: "គំរូវេបសាយគ្លីនិកបែបរួសរាយ មានសេវាកម្ម ក្រុមវេជ្ជបណ្ឌិត ម៉ោងបើក ការណែនាំអ្នកជំងឺ និងទំនាក់ទំនងរហ័ស។",
    },
    bestFor: {
      en: "Family clinics, general practices, pharmacies",
      km: "គ្លីនិកគ្រួសារ ការអនុវត្តទូទៅ ឱសថស្ថាន",
    },
    demoUrl: null,
    preview: {
      bg: "#e0f2fe",
      text: "#0c4a6e",
      brand: "Sokha Care Clinic",
      accent: "#0284c7",
      accentText: "#ffffff",
      headline: "Trusted care for every family.",
      cta: "Book a visit",
    },
  },
  {
    id: "hospital",
    name: { en: "Hospital & Polyclinic", km: "មន្ទីរពេទ្យ & ប៉ូលីគ្លីនិក" },
    category: "healthcare",
    categoryLabel: { en: "Healthcare / Hospital", km: "សុខាភិបាល / មន្ទីរពេទ្យ" },
    styleLabel: { en: "Corporate Medical", km: "វេជ្ជសាស្ត្រស្តង់ដារ" },
    styles: ["corporate", "clean"],
    goal: "services",
    lang: "kh-en",
    description: {
      en: "A structured hospital website demo with departments, specialists, facilities, emergency info, and a professional, trustworthy look.",
      km: "គំរូវេបសាយមន្ទីរពេទ្យមានរចនាសម្ព័ន្ធច្បាស់ មានផ្នែកជំនាញ គ្រូពេទ្យឯកទេស សម្ភារៈ និងព័ត៌មានសង្គ្រោះបន្ទាន់។",
    },
    bestFor: {
      en: "Hospitals, polyclinics, diagnostic centers",
      km: "មន្ទីរពេទ្យ ប៉ូលីគ្លីនិក មជ្ឈមណ្ឌលវិភាគ",
    },
    demoUrl: null,
    preview: {
      bg: "#ccfbf1",
      text: "#134e4a",
      brand: "Angkor Polyclinic",
      accent: "#0d9488",
      accentText: "#ffffff",
      headline: "Care you can trust, close to home.",
      cta: "Our departments",
    },
  },
  {
    id: "auto-detailing",
    name: { en: "Auto Detailing Website", km: "វេបសាយថែទាំរថយន្ត" },
    category: "auto",
    categoryLabel: { en: "Auto Service", km: "សេវារថយន្ត" },
    styleLabel: { en: "Bold Automotive", km: "រថយន្តលេចធ្លោ" },
    styles: ["bold", "dark"],
    goal: "leads",
    lang: "kh-en",
    description: {
      en: "A bold black-orange garage website demo for car wash, detailing, ceramic coating, pricing plans, process steps, reviews, and appointment requests.",
      km: "គំរូវេបសាយហ្គារ៉ាសពណ៌ខ្មៅ-ទឹកក្រូច សម្រាប់លាងរថយន្ត detailing ស្រោប ceramic តម្លៃ និងការណាត់ជួប។",
    },
    bestFor: {
      en: "Auto garages, car wash, detailing studios",
      km: "ហ្គារ៉ាស លាងរថយន្ត ស្ទូឌីយោ detailing",
    },
    demoUrl: null,
    preview: {
      bg: "#0f172a",
      text: "#fafaf9",
      brand: "SOMA AUTO DETAILING",
      accent: "#06b6d4",
      accentText: "#03282f",
      headline: "Shine like day one.",
      cta: "Get a quote",
    },
  },
  {
    id: "car-showroom",
    name: { en: "Car Showroom Website", km: "វេបសាយសាលបង្ហាញរថយន្ត" },
    category: "auto",
    categoryLabel: { en: "Auto / Showroom", km: "រថយន្ត / សាលបង្ហាញ" },
    styleLabel: { en: "Premium Automotive", km: "រថយន្តប្រណីត" },
    styles: ["premium", "dark"],
    goal: "products",
    lang: "kh-en",
    description: {
      en: "A sleek showroom website demo with vehicle listings, specs, gallery, financing info, and direct contact to your sales team.",
      km: "គំរូវេបសាយសាលបង្ហាញរថយន្ត មានបញ្ជីរថយន្ត លក្ខណៈបច្ចេកទេស វិចិត្រសាល និងទំនាក់ទំនងផ្ទាល់ទៅក្រុមលក់។",
    },
    bestFor: {
      en: "Car dealers, showrooms, import businesses",
      km: "អ្នកចែកចាយរថយន្ត សាលបង្ហាញ អាជីវកម្មនាំចូល",
    },
    demoUrl: null,
    preview: {
      bg: "#1e293b",
      text: "#f8fafc",
      brand: "MEKONG MOTORS",
      accent: "#e2e8f0",
      accentText: "#0f172a",
      headline: "Drive the difference.",
      cta: "View inventory",
    },
  },
  {
    id: "villa",
    name: { en: "Luxury Villa Website", km: "វេបសាយវីឡាប្រណីត" },
    category: "hospitality",
    categoryLabel: { en: "Hotel / Villa", km: "សណ្ឋាគារ / វីឡា" },
    styleLabel: { en: "Luxury Hospitality", km: "បដិសណ្ឋារកិច្ចប្រណីត" },
    styles: ["premium"],
    goal: "leads",
    lang: "kh-en",
    description: {
      en: "A cinematic hotel website demo for boutique hotels and private villas, with villa cards, destinations, experiences, gallery, and enquiry drawer.",
      km: "គំរូវេបសាយសណ្ឋាគារបែបភាពយន្ត សម្រាប់ boutique hotel និងវីឡាឯកជន មានកាតវីឡា ទីកន្លែង បទពិសោធន៍ និងវិចិត្រសាល។",
    },
    bestFor: {
      en: "Boutique hotels, villas, guesthouses, resorts",
      km: "សណ្ឋាគារ boutique វីឡា ផ្ទះសំណាក់ រីសត",
    },
    demoUrl: null,
    preview: {
      bg: "#166534",
      text: "#f7fee7",
      brand: "Maison Dara Villas",
      accent: "#fefce8",
      accentText: "#365314",
      headline: "Welcome home to slow tropical living.",
      cta: "Explore villas",
    },
  },
  {
    id: "spa",
    name: { en: "Spa & Wellness Website", km: "វេបសាយស្ប៉ា & សុខភាព" },
    category: "hospitality",
    categoryLabel: { en: "Spa / Wellness", km: "ស្ប៉ា / សុខភាព" },
    styleLabel: { en: "Soft Serenity", km: "ស្ងប់ស្ងាត់ទន់ភ្លន់" },
    styles: ["soft"],
    goal: "services",
    lang: "kh-en",
    description: {
      en: "A calm, elegant spa website demo with treatment menus, packages, therapist profiles, gift vouchers, and booking requests via Telegram.",
      km: "គំរូវេបសាយស្ប៉ាស្ងប់ស្ងាត់ មានម៉ឺនុយព្យាបាល កញ្ចប់សេវា ប្រវត្តិអ្នកព្យាបាល និងការកក់តាម Telegram។",
    },
    bestFor: {
      en: "Spas, massage studios, beauty salons",
      km: "ស្ប៉ា ស្ទូឌីយោម៉ាស្សា ហាងកែសម្ផស្ស",
    },
    demoUrl: null,
    preview: {
      bg: "#fce7f3",
      text: "#831843",
      brand: "Lotus Spa",
      accent: "#db2777",
      accentText: "#ffffff",
      headline: "Relax. Restore. Glow.",
      cta: "View treatments",
    },
  },
  {
    id: "fine-dining",
    name: { en: "Fine Dining Restaurant", km: "ភោជនីយដ្ឋានកម្រិតខ្ពស់" },
    category: "fnb",
    categoryLabel: { en: "F&B / Fine Dining", km: "អាហារ / Fine Dining" },
    styleLabel: { en: "Premium Dark", km: "ប្រណីតបែបងងឹត" },
    styles: ["premium", "dark"],
    goal: "campaign",
    lang: "en",
    description: {
      en: "An elegant dark-gold restaurant website demo with tasting menus, chef story, wine pairing, private dining, and reservation requests.",
      km: "គំរូវេបសាយភោជនីយដ្ឋានពណ៌ខ្មៅ-មាស មានម៉ឺនុយ tasting រឿងរ៉ាវរបស់ចុងភៅ និងការស្នើកក់តុ។",
    },
    bestFor: {
      en: "Fine dining, rooftop bars, chef-led restaurants",
      km: "ភោជនីយដ្ឋានកម្រិតខ្ពស់ rooftop bar",
    },
    demoUrl: null,
    preview: {
      bg: "#1c1917",
      text: "#fafaf9",
      brand: "CHANDARA",
      accent: "#ca8a04",
      accentText: "#1c1917",
      headline: "A tasting journey through Cambodia.",
      cta: "Reserve a table",
    },
  },
  {
    id: "cafe",
    name: { en: "Specialty Café Website", km: "វេបសាយហាងកាហ្វេ" },
    category: "fnb",
    categoryLabel: { en: "F&B / Café", km: "អាហារ / កាហ្វេ" },
    styleLabel: { en: "Warm & Cozy", km: "កក់ក្តៅ" },
    styles: ["soft"],
    goal: "services",
    lang: "kh-en",
    description: {
      en: "A warm café website demo with signature drinks, food menu, story, location, opening hours, and social links to keep regulars coming back.",
      km: "គំរូវេបសាយហាងកាហ្វេកក់ក្តៅ មានភេសជ្ជៈពិសេស ម៉ឺនុយអាហារ ទីតាំង ម៉ោងបើក និងបណ្តាញសង្គម។",
    },
    bestFor: {
      en: "Cafés, bakeries, dessert shops, tea houses",
      km: "ហាងកាហ្វេ នំប៉័ង បង្អែម ហាងតែ",
    },
    demoUrl: null,
    preview: {
      bg: "#fde68a",
      text: "#78350f",
      brand: "Brew & Bloom",
      accent: "#92400e",
      accentText: "#fef3c7",
      headline: "Slow mornings, good coffee.",
      cta: "See the menu",
    },
  },
  {
    id: "kids-school",
    name: { en: "Kids School Website", km: "វេបសាយសាលាកុមារ" },
    category: "education",
    categoryLabel: { en: "Education / Kids School", km: "អប់រំ / សាលាកុមារ" },
    styleLabel: { en: "Playful Learning", km: "រៀនលេងរីករាយ" },
    styles: ["soft", "clean"],
    goal: "leads",
    lang: "kh-en",
    description: {
      en: "A playful modern school website demo for kids learning centers, English schools, preschools, programs, teachers, parent reviews, pricing, and enrollment inquiries.",
      km: "គំរូវេបសាយសាលាបែបរីករាយ សម្រាប់មជ្ឈមណ្ឌលរៀនកុមារ សាលាអង់គ្លេស មត្តេយ្យ កម្មវិធីសិក្សា គ្រូ និងការចុះឈ្មោះ។",
    },
    bestFor: {
      en: "Kindergartens, learning centers, English schools",
      km: "មត្តេយ្យ មជ្ឈមណ្ឌលសិក្សា សាលាអង់គ្លេស",
    },
    demoUrl: null,
    preview: {
      bg: "#dcfce7",
      text: "#166534",
      brand: "BrightKids Academy",
      accent: "#16a34a",
      accentText: "#ffffff",
      headline: "Learn Better, Play Brighter, Grow Smarter!",
      cta: "Start learning today",
    },
  },
  {
    id: "language-center",
    name: { en: "Language Center Website", km: "វេបសាយមជ្ឈមណ្ឌលភាសា" },
    category: "education",
    categoryLabel: { en: "Education / Language", km: "អប់រំ / ភាសា" },
    styleLabel: { en: "Clean Academic", km: "សិក្សាស្អាត" },
    styles: ["clean"],
    goal: "leads",
    lang: "kh-en",
    description: {
      en: "A clean language center website demo with course levels, schedules, teachers, student results, fees, and enrollment via Telegram or phone.",
      km: "គំរូវេបសាយមជ្ឈមណ្ឌលភាសា មានកម្រិតវគ្គសិក្សា កាលវិភាគ គ្រូ តម្លៃ និងចុះឈ្មោះតាម Telegram ឬទូរស័ព្ទ។",
    },
    bestFor: {
      en: "Language centers, tutoring, exam-prep schools",
      km: "មជ្ឈមណ្ឌលភាសា រៀនគួរ ត្រៀមប្រឡង",
    },
    demoUrl: null,
    preview: {
      bg: "#e0e7ff",
      text: "#312e81",
      brand: "Fluent House",
      accent: "#4f46e5",
      accentText: "#ffffff",
      headline: "Speak English with confidence.",
      cta: "View courses",
    },
  },
  {
    id: "pet-grooming",
    name: { en: "Pet Grooming Website", km: "វេបសាយកែសម្ផស្សសត្វ" },
    category: "pet",
    categoryLabel: { en: "Pet Care / Grooming", km: "សត្វចិញ្ចឹម / កែសម្ផស្ស" },
    styleLabel: { en: "Friendly & Fun", km: "រួសរាយរីករាយ" },
    styles: ["soft"],
    goal: "services",
    lang: "kh-en",
    description: {
      en: "A cheerful grooming website demo with service packages, before-after gallery, pricing, pet hotel info, and booking via Messenger.",
      km: "គំរូវេបសាយកែសម្ផស្សសត្វ មានកញ្ចប់សេវា រូបភាពមុន-ក្រោយ តម្លៃ និងការកក់តាម Messenger។",
    },
    bestFor: {
      en: "Grooming salons, pet shops, pet hotels",
      km: "ហាងកែសម្ផស្សសត្វ ហាងសត្វ សណ្ឋាគារសត្វ",
    },
    demoUrl: null,
    preview: {
      bg: "#fce7f3",
      text: "#831843",
      brand: "Pawfect Studio",
      accent: "#db2777",
      accentText: "#ffffff",
      headline: "Happy pets, fresh looks.",
      cta: "Book grooming",
    },
  },
  {
    id: "vet-clinic",
    name: { en: "Vet Clinic Website", km: "វេបសាយពេទ្យសត្វ" },
    category: "pet",
    categoryLabel: { en: "Pet Care / Vet", km: "សត្វចិញ្ចឹម / ពេទ្យសត្វ" },
    styleLabel: { en: "Clean Care", km: "ថែទាំស្អាត" },
    styles: ["clean"],
    goal: "leads",
    lang: "kh-en",
    description: {
      en: "A trustworthy vet clinic website demo with services, vaccination plans, emergency contact, vet profiles, and visit requests.",
      km: "គំរូវេបសាយពេទ្យសត្វ មានសេវាកម្ម គម្រោងចាក់វ៉ាក់សាំង ទំនាក់ទំនងបន្ទាន់ និងការស្នើណាត់ជួប។",
    },
    bestFor: {
      en: "Vet clinics, animal hospitals, vaccination centers",
      km: "គ្លីនិកពេទ្យសត្វ មន្ទីរពេទ្យសត្វ",
    },
    demoUrl: null,
    preview: {
      bg: "#cffafe",
      text: "#155e75",
      brand: "PetCare Vet Clinic",
      accent: "#0891b2",
      accentText: "#ffffff",
      headline: "Gentle care for every paw.",
      cta: "Our services",
    },
  },
  {
    id: "gym",
    name: { en: "Fitness Gym Website", km: "វេបសាយក្លឹបហាត់ប្រាណ" },
    category: "fitness",
    categoryLabel: { en: "Fitness / Gym", km: "ហាត់ប្រាណ / ជីម" },
    styleLabel: { en: "Bold Energy", km: "ថាមពលខ្លាំង" },
    styles: ["bold", "dark"],
    goal: "leads",
    lang: "kh-en",
    description: {
      en: "A high-energy gym website demo with membership plans, classes, trainers, transformation gallery, and free-trial requests.",
      km: "គំរូវេបសាយជីមពេញថាមពល មានគម្រោងសមាជិកភាព ថ្នាក់ហាត់ គ្រូបង្ហាត់ និងការសាកល្បងឥតគិតថ្លៃ។",
    },
    bestFor: {
      en: "Gyms, crossfit boxes, martial arts clubs",
      km: "ជីម ក្លឹប crossfit ក្បាច់គុន",
    },
    demoUrl: null,
    preview: {
      bg: "#18181b",
      text: "#fafafa",
      brand: "FORGE GYM",
      accent: "#84cc16",
      accentText: "#1a2e05",
      headline: "STRONGER EVERY DAY.",
      cta: "Start free trial",
    },
  },
  {
    id: "yoga",
    name: { en: "Yoga Studio Website", km: "វេបសាយស្ទូឌីយោយូហ្គា" },
    category: "fitness",
    categoryLabel: { en: "Fitness / Yoga", km: "ហាត់ប្រាណ / យូហ្គា" },
    styleLabel: { en: "Calm Balance", km: "តុល្យភាពស្ងប់" },
    styles: ["soft"],
    goal: "services",
    lang: "kh-en",
    description: {
      en: "A peaceful yoga studio website demo with class schedule, instructors, retreats, pricing, and first-class booking requests.",
      km: "គំរូវេបសាយយូហ្គាស្ងប់ស្ងាត់ មានកាលវិភាគថ្នាក់ គ្រូបង្រៀន retreat តម្លៃ និងការកក់ថ្នាក់ដំបូង។",
    },
    bestFor: {
      en: "Yoga & pilates studios, wellness coaches",
      km: "ស្ទូឌីយោយូហ្គា pilates គ្រូសុខភាព",
    },
    demoUrl: null,
    preview: {
      bg: "#f3e8ff",
      text: "#581c87",
      brand: "Anlong Yoga",
      accent: "#9333ea",
      accentText: "#ffffff",
      headline: "Breathe in, stress out.",
      cta: "Class schedule",
    },
  },
  {
    id: "motion-studio",
    name: { en: "Premium Motion Website", km: "វេបសាយ Premium Motion" },
    category: "motion",
    categoryLabel: { en: "Premium Motion", km: "Premium Motion" },
    styleLabel: { en: "Animated Premium", km: "ចលនាប្រណីត" },
    styles: ["premium", "dark"],
    goal: "campaign",
    lang: "en",
    description: {
      en: "A cinematic animated website demo with scroll effects, motion branding, showreel sections, and a striking premium feel for creative brands.",
      km: "គំរូវេបសាយមានចលនាបែបភាពយន្ត មាន scroll effect ការបង្ហាញស្នាដៃ និងអារម្មណ៍ប្រណីតខ្ពស់ សម្រាប់ម៉ាកច្នៃប្រឌិត។",
    },
    bestFor: {
      en: "Creative studios, agencies, premium brands",
      km: "ស្ទូឌីយោច្នៃប្រឌិត ភ្នាក់ងារ ម៉ាកប្រណីត",
    },
    demoUrl: null,
    preview: {
      bg: "#1e1b4b",
      text: "#f5f3ff",
      brand: "STUDIO VONG",
      accent: "#c026d3",
      accentText: "#ffffff",
      headline: "We craft brands in motion.",
      cta: "Watch showreel",
    },
  },
];

/** Short live-demo URLs (somatech.site/somacafe, ...) — one folder per demo in src/app/(demos)/. */
export const demoSlugs: Record<string, string> = {
  dental: "somadental",
  clinic: "somaclinic",
  hospital: "somahospital",
  "auto-detailing": "somadetailing",
  "car-showroom": "somamotors",
  villa: "somavilla",
  spa: "somaspa",
  "fine-dining": "somadining",
  cafe: "somacafe",
  "kids-school": "somakids",
  "language-center": "somalingo",
  "pet-grooming": "somapets",
  "vet-clinic": "somavet",
  gym: "somagym",
  yoga: "somayoga",
  "motion-studio": "somamotion",
};

export const demoUrl = (demo: Demo) => demo.demoUrl ?? `/${demoSlugs[demo.id]}`;

export type Package = {
  id: "starter" | "pro" | "promax";
  name: Bi;
  price: number;
  delivery: Bi;
  description: Bi;
  features: Bi[];
  popular: boolean;
};

export const packages: Package[] = [
  {
    id: "starter",
    name: { en: "Starter Website", km: "Starter Website" },
    price: 99,
    delivery: { en: "Delivered in 3–5 days", km: "រួចរាល់ក្នុង ៣–៥ ថ្ងៃ" },
    description: {
      en: "Best for simple businesses that need a clean online presence.",
      km: "ល្អសម្រាប់អាជីវកម្មសាមញ្ញ ដែលត្រូវការវត្តមានអនឡាញស្អាតបាត។",
    },
    features: [
      { en: "1-page website", km: "វេបសាយ ១ ទំព័រ" },
      { en: "Khmer + English bilingual content", km: "ខ្លឹមសារពីរភាសា ខ្មែរ + អង់គ្លេស" },
      { en: "Mobile-responsive design", km: "រចនាសម្របតាមទូរស័ព្ទ" },
      { en: "Client provides logo, content, and photos", km: "អតិថិជនផ្តល់ឡូហ្គោ ខ្លឹមសារ និងរូបភាព" },
      { en: "Contact button: Telegram / Messenger / Phone", km: "ប៊ូតុងទំនាក់ទំនង៖ Telegram / Messenger / ទូរស័ព្ទ" },
      { en: "Google Map link or embed", km: "តំណ ឬបង្កប់ Google Map" },
      { en: "Basic SEO title and description", km: "ចំណងជើង និងពិពណ៌នា SEO មូលដ្ឋាន" },
      { en: "Revision 2 times", km: "កែសម្រួល ២ ដង" },
      { en: "Domain cost is paid by client", km: "តម្លៃ Domain បង់ដោយអតិថិជន" },
    ],
    popular: false,
  },
  {
    id: "pro",
    name: { en: "Pro Website", km: "Pro Website" },
    price: 199,
    delivery: { en: "Delivered in 7–10 days", km: "រួចរាល់ក្នុង ៧–១០ ថ្ងៃ" },
    description: {
      en: "Best for SMEs that need a more complete business website.",
      km: "ល្អសម្រាប់ SMEs ដែលត្រូវការវេបសាយអាជីវកម្មពេញលេញជាង។",
    },
    features: [
      { en: "Multiple pages or longer business website", km: "ទំព័រច្រើន ឬវេបសាយអាជីវកម្មវែងជាង" },
      { en: "Khmer + English bilingual content", km: "ខ្លឹមសារពីរភាសា ខ្មែរ + អង់គ្លេស" },
      { en: "Mobile-responsive design", km: "រចនាសម្របតាមទូរស័ព្ទ" },
      { en: "Client provides logo, content, and photos", km: "អតិថិជនផ្តល់ឡូហ្គោ ខ្លឹមសារ និងរូបភាព" },
      { en: "Services / menu / gallery / reviews sections", km: "ផ្នែកសេវាកម្ម / ម៉ឺនុយ / វិចិត្រសាល / មតិអតិថិជន" },
      { en: "Contact form or inquiry form", km: "ទម្រង់ទំនាក់ទំនង ឬទម្រង់សាកសួរ" },
      { en: "Telegram / Messenger / Phone integration", km: "ការភ្ជាប់ Telegram / Messenger / ទូរស័ព្ទ" },
      { en: "Google Maps embed", km: "បង្កប់ Google Maps" },
      { en: "Basic SEO setup", km: "ការរៀបចំ SEO មូលដ្ឋាន" },
      { en: "Revision 3 times", km: "កែសម្រួល ៣ ដង" },
      { en: "Domain cost is paid by client", km: "តម្លៃ Domain បង់ដោយអតិថិជន" },
    ],
    popular: true,
  },
  {
    id: "promax",
    name: { en: "Pro Max Website", km: "Pro Max Website" },
    price: 299,
    delivery: { en: "Delivered in 10–15 days", km: "រួចរាល់ក្នុង ១០–១៥ ថ្ងៃ" },
    description: {
      en: "Best for businesses with many products, services, rooms, menus, or gallery items.",
      km: "ល្អសម្រាប់អាជីវកម្មដែលមានផលិតផល សេវាកម្ម បន្ទប់ ម៉ឺនុយ ឬរូបភាពច្រើន។",
    },
    features: [
      { en: "Multiple pages or large catalog-style website", km: "ទំព័រច្រើន ឬវេបសាយបែបកាតាឡុកធំ" },
      { en: "Khmer + English bilingual content", km: "ខ្លឹមសារពីរភាសា ខ្មែរ + អង់គ្លេស" },
      { en: "Product / service / room / menu listing sections", km: "ផ្នែកបញ្ជីផលិតផល / សេវាកម្ម / បន្ទប់ / ម៉ឺនុយ" },
      { en: "Large product or portfolio display pages", km: "ទំព័របង្ហាញផលិតផល ឬស្នាដៃទំហំធំ" },
      { en: "Mobile-responsive design", km: "រចនាសម្របតាមទូរស័ព្ទ" },
      { en: "Client provides logo, content, and photos", km: "អតិថិជនផ្តល់ឡូហ្គោ ខ្លឹមសារ និងរូបភាព" },
      { en: "Contact form or inquiry form", km: "ទម្រង់ទំនាក់ទំនង ឬទម្រង់សាកសួរ" },
      { en: "Telegram / Messenger / Phone integration", km: "ការភ្ជាប់ Telegram / Messenger / ទូរស័ព្ទ" },
      { en: "Google Map embed", km: "បង្កប់ Google Map" },
      { en: "Basic SEO setup", km: "ការរៀបចំ SEO មូលដ្ឋាន" },
      { en: "Revision 4 times", km: "កែសម្រួល ៤ ដង" },
      { en: "Domain cost is paid by client", km: "តម្លៃ Domain បង់ដោយអតិថិជន" },
    ],
    popular: false,
  },
];
