import type { Loc } from "../i18n/types";
import type { IconName } from "../icons/Icon";
import { studio } from "./studio";

export interface Member {
  slug: string;
  name: string;
  role: Loc;
  photo: string;
  location: Loc;
  availability: Loc;
  bio: Loc[];
  links: { label: Loc; href: string; icon?: IconName }[];
  work: string[]; // ids from caseStudies
  skills: { group: Loc; items: Loc[] }[];
  experience: { title: Loc; org: Loc; place: Loc; period: Loc; points: Loc[] }[];
  education: { title: Loc; org: Loc; period: Loc; note?: Loc }[];
  languages: Loc[];
}

export const members: Member[] = [
  {
    slug: "etuge",
    name: "Etuge Marxsim Junior",
    role: { en: "Design & Frontend Lead", fr: "Responsable design et front-end" },
    photo: "/team/etuge.webp",
    location: { en: "Douala, Cameroon", fr: "Douala, Cameroun" },
    availability: {
      en: "Open to internships, junior front-end or product roles, and freelance projects.",
      fr: "Ouvert aux stages, aux postes juniors en développement front-end ou en produit, et aux projets freelance.",
    },
    bio: [
      {
        en: "I am a front-end developer with a strong UI/UX design practice. I design interfaces in Figma first, then build them in React, so clients see the screens before any code is written.",
        fr: "Je suis développeur front-end avec une solide pratique du design UI/UX. Je conçois d'abord les interfaces sur Figma, puis je les développe en React, de sorte que les clients voient les écrans avant que la moindre ligne de code soit écrite.",
      },
      {
        en: "I interned at a web agency in Douala and built and deployed my final-year project, a notification platform for academic announcements. Today I lead design and front end at EMJ Digital Studio and work on Drink Manage, a depot management app.",
        fr: "J'ai fait un stage dans une agence web à Douala, puis construit et déployé mon projet de fin d'études, une plateforme de notifications pour les annonces académiques. Aujourd'hui, je dirige le design et le front-end chez EMJ Digital Studio et je travaille sur Drink Manage, une application de gestion de dépôt.",
      },
    ],
    links: [
      { label: { en: "Email", fr: "E-mail" }, href: `mailto:${studio.email}`, icon: "mail" },
      { label: "LinkedIn", href: studio.linkedin, icon: "linkedin" },
      { label: "GitHub", href: studio.github, icon: "github" },
      { label: "WhatsApp", href: `https://wa.me/${studio.whatsapp}`, icon: "whatsapp" },
    ],
    work: ["campus-info", "drink-manage"],
    skills: [
      {
        group: { en: "Languages", fr: "Langages" },
        items: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3", { en: "PHP (basics)", fr: "PHP (notions)" }],
      },
      { group: { en: "Front end", fr: "Front-end" }, items: ["React", "Next.js", "Vite", "Tailwind CSS"] },
      {
        group: { en: "Back end", fr: "Back-end" },
        items: ["Django", "Node.js", "Express", { en: "REST APIs", fr: "API REST" }, "JWT"],
      },
      { group: { en: "Database", fr: "Base de données" }, items: ["PostgreSQL"] },
      { group: "Design", items: ["Figma", "Canva", "Affinity"] },
      {
        group: { en: "Tools", fr: "Outils" },
        items: ["Git", "GitHub", "GitLab", "Postman", "Firebase Cloud Messaging", "Vercel", "Railway"],
      },
    ],
    experience: [
      {
        title: { en: "Front-End Developer Intern", fr: "Stagiaire développeur front-end" },
        org: "Sunshine Advisory",
        place: "Bonanjo, Douala",
        period: { en: "March to June 2025", fr: "Mars à juin 2025" },
        points: [
          { en: "Built user-facing web interfaces with Next.js.", fr: "Développement d'interfaces web orientées utilisateur avec Next.js." },
          { en: "Turned UI mockups into web pages.", fr: "Intégration de maquettes UI en pages web." },
          {
            en: "Improved usability and the overall user experience.",
            fr: "Amélioration de l'ergonomie et de l'expérience utilisateur globale.",
          },
          { en: "Worked in a team with Git and GitLab.", fr: "Travail en équipe avec Git et GitLab." },
        ],
      },
      {
        title: { en: "IT Trainer", fr: "Formateur en informatique" },
        org: "ISTIA Cameroun",
        place: { en: "Several campuses in Douala", fr: "Plusieurs campus à Douala" },
        period: { en: "July to September 2025", fr: "Juillet à septembre 2025" },
        points: [
          {
            en: "Ran tutoring classes in computer science for nearly 50 scholarship students.",
            fr: "Cours de répétition en informatique pour près de 50 étudiants boursiers.",
          },
          {
            en: "Strengthened core IT skills and followed each student's progress.",
            fr: "Renforcement des bases informatiques et suivi des progrès de chaque étudiant.",
          },
        ],
      },
    ],
    education: [
      {
        title: { en: "Licence de Technologie, Software Engineering", fr: "Licence de Technologie, Génie Logiciel" },
        org: { en: "IUT of Douala", fr: "IUT de Douala" },
        period: { en: "2025 to 2026", fr: "2025 à 2026" },
        note: {
          en: "Defense passed and certificate obtained. Diploma being issued.",
          fr: "Soutenance réussie et attestation obtenue. Diplôme en cours de délivrance.",
        },
      },
      {
        title: { en: "DUT, Computer Engineering", fr: "DUT, Génie Informatique" },
        org: { en: "IUT of Douala", fr: "IUT de Douala" },
        period: { en: "2024 to 2025", fr: "2024 à 2025" },
      },
      {
        title: "GCE Advanced Level",
        org: "Bilingual Comprehensive High School, Loum",
        period: { en: "2023 to 2024", fr: "2023 à 2024" },
      },
    ],
    languages: [
      { en: "English: fluent", fr: "Anglais : courant" },
      { en: "French: good, spoken and written", fr: "Français : bon niveau, à l'oral et à l'écrit" },
    ],
  },
];
