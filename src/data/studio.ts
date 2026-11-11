export type Status = "live" | "in-development" | "draft";

export interface CaseStudy {
  id: string;
  title: string;
  status: Status;
  summary: string;
  problem?: string;
  solution?: string;
  proof?: string;
  role?: string;
  statusNote?: string;
  images?: { src: string; alt: string }[];
  stack: string[];
  links?: { live?: string; code?: string };
}

export const studio = {
  name: "EMJ Digital Studio",
  headline: "Interfaces designed in Figma, shipped in React.",
  value:
    "A remote-first web design and development studio, building clear, fast websites and web apps for businesses in Cameroon and abroad.",
  email: "etugemarxsimjunior@gmail.com",
  services: [
    { name: "UI/UX Design", text: "Flows and screens in Figma before any code." },
    { name: "Design Systems", text: "Reusable components with documented states." },
    { name: "Frontend Engineering", text: "React, TypeScript and Tailwind, deployed on Vercel." },
    { name: "Web Strategy", text: "Scoping what to build first, and what to leave out." },
  ],
  team: [
    { role: "Design & Frontend Lead", slug: "etuge", holder: "Etuge Marxsim Junior", focus: "Interfaces designed in Figma, built in React." },
    { role: "Backend Developer", slug: null, holder: null, focus: "APIs and databases." },
    { role: "Full-Stack Developer", slug: null, holder: null, focus: "Features built end to end." },
    { role: "Business & Clients", slug: null, holder: null, focus: "Scoping, quotes and client relations." },
  ],
} as const;

export const caseStudies: CaseStudy[] = [
  {
    id: "campus-info",
    title: "Campus Info: academic notification platform",
    status: "live",
    summary: "Final-year project: one place for academic announcements.",
    problem: "Academic announcements were scattered across channels and reached students late.",
    solution:
      "A centralized platform for students, teachers and administration. Each role sees its own experience, with strict access control, push notifications (Firebase Cloud Messaging) and e-mail.",
    proof:
      "Role access and notification delivery were checked with classmates' accounts. The Django API was tested with Postman.",
    stack: ["Figma", "React", "TypeScript", "Vite", "Tailwind CSS", "Django", "Firebase"],
    links: { live: "https://campus-info-frontend.vercel.app" },
    images: [
      { src: "/projects/campus-info/landing.webp", alt: "Campus Info landing page with the headline 'Never miss an academic announcement' and a notification preview card." },
      { src: "/projects/campus-info/admin-dashboard.webp", alt: "Campus Info administrator dashboard with announcement counts, recent announcements and quick actions." },
    ],
  },
  {
    id: "drink-manage",
    title: "Drink Manage: depot management that works offline",
    status: "in-development",
    summary:
      "A desktop app for drink depots, built around traceability from supplier to customer.",
    problem:
      "A depot's work runs from supplier deliveries to handing out crates and products to bars and small shops. The owner needs every step recorded and recoverable, with no dependence on an internet connection.",
    solution:
      "One app covers the whole cycle: stock entries tied to a supplier, returnable crates (casiers) with supplier balances, damages (avaries) that change stock only after an administrator validates them, cash and credit sales with automatic receipts, and reports exported to PDF. It installs on one computer and serves the others over the depot's local network, so it keeps working without internet. A hosted web version is planned.",
    role:
      "Visual direction and UI/UX design, including user research and usability testing, then front-end development. The back end was built by Hassan Mimshe, who leads the project.",
    statusNote:
      "Design, interfaces and back end are done for version 1. The final installer and another round of MVP testing remain.",
    stack: ["Figma", "React", "JavaScript", "Node.js", "Express", "PostgreSQL", "Electron", "GitHub"],
    images: [
      { src: "/projects/drink-manage/dashboard.webp", alt: "Drink Manage dashboard showing sales, stock, crates, damages and receivables cards, with a sidebar of modules." },
      { src: "/projects/drink-manage/login.webp", alt: "Drink Manage login screen with a short list of the app's modules beside the sign-in form." },
    ],
  },
];

/** "shipped" = used in a deployed project. "practiced" = on the CV, no public project yet. */
export const stack = [
  { name: "React", level: "shipped", evidence: "Academic notification platform" },
  { name: "TypeScript", level: "shipped", evidence: "Academic notification platform" },
  { name: "Tailwind CSS", level: "shipped", evidence: "Academic notification platform" },
  { name: "Figma", level: "shipped", evidence: "Mockups before development" },
  { name: "Node.js", level: "practiced", evidence: "Express and REST APIs" },
  { name: "PostgreSQL", level: "practiced", evidence: "Database work" },
] as const;
