import type { Loc } from "../i18n/types";

export type Status = "live" | "in-development" | "draft";

/** A screenshot. Without a src it is a placeholder: shown in development, hidden on the live site. */
export interface Shot {
  src?: string;
  label: Loc;
  alt: Loc;
  width: number;
  height: number;
}

export interface Decision {
  title: Loc;
  text: Loc;
  shots?: Shot[];
}

export interface Design {
  intro: Loc;
  session: Loc;
  feedback: Loc[];
  compare?: Shot[];
  decisions: Decision[];
}

export interface CaseStudy {
  id: string;
  name: string;
  title: Loc;
  status: Status;
  summary: Loc;
  problem?: Loc;
  solution?: Loc;
  proof?: Loc;
  role?: Loc;
  statusNote?: Loc;
  images?: Shot[];
  design?: Design;
  stack: string[];
  links?: { live?: string; code?: string };
}

export const studio = {
  name: "EMJ Digital Studio",
  /** Browser-tab title of the home page. Always the full name: "EMJ" alone is shared by other organisations. */
  title: {
    en: "EMJ Digital Studio: web design and front-end development",
    fr: "EMJ Digital Studio : design web et développement front-end",
  },
  line: {
    en: "Remote-first web design and development. Cameroon and abroad.",
    fr: "Design et développement web, à distance. Au Cameroun et à l'international.",
  },
  headline: {
    en: "Interfaces designed in Figma, shipped in React.",
    fr: "Des interfaces conçues sur Figma, livrées en React.",
  },
  value: {
    en: "A remote-first web design and development studio, building clear, fast websites and web apps for businesses in Cameroon and abroad.",
    fr: "Un studio de design et de développement web à distance, qui réalise des sites et des applications web clairs et rapides pour des entreprises au Cameroun et à l'étranger.",
  },
  email: "etugemarxsimjunior@gmail.com",
  whatsapp: "237678128857", // international format, no plus sign (wa.me link)
  linkedin: "https://www.linkedin.com/in/etuge-junior-827ab3350",
  github: "https://github.com/ETUGE-JUNIOR",
  /** CV files live in /public. A visitor who clicks Download saves the file under `filename`.
   *  Put a French CV in /public and point `fr` at it when it exists. */
  cv: {
    en: { href: "/CV_ETUGE_JUNIOR.pdf", filename: "CV_ETUGE_JUNIOR.pdf" },
    fr: { href: "/CV_ETUGE_JUNIOR.pdf", filename: "CV_ETUGE_JUNIOR.pdf" },
  },
  services: [
    {
      name: { en: "UI/UX Design", fr: "Design UI/UX" },
      text: { en: "Flows and screens in Figma before any code.", fr: "Parcours et écrans conçus sur Figma avant la moindre ligne de code." },
    },
    {
      name: { en: "Design Systems", fr: "Systèmes de design" },
      text: { en: "Reusable components with documented states.", fr: "Composants réutilisables, avec leurs états documentés." },
    },
    {
      name: { en: "Frontend Engineering", fr: "Développement front-end" },
      text: { en: "React, TypeScript and Tailwind, deployed on Vercel.", fr: "React, TypeScript et Tailwind, déployés sur Vercel." },
    },
    {
      name: { en: "Web Strategy", fr: "Stratégie web" },
      text: { en: "Scoping what to build first, and what to leave out.", fr: "Décider quoi construire en premier, et quoi laisser de côté." },
    },
  ],
  team: [
    {
      role: { en: "Design & Frontend Lead", fr: "Responsable design et front-end" },
      slug: "etuge",
      holder: "Etuge Marxsim Junior",
      focus: { en: "Interfaces designed in Figma, built in React.", fr: "Interfaces conçues sur Figma, développées en React." },
    },
    {
      role: { en: "Backend Developer", fr: "Développeur back-end" },
      slug: null,
      holder: null,
      focus: { en: "APIs and databases.", fr: "API et bases de données." },
    },
    {
      role: { en: "Full-Stack Developer", fr: "Développeur full-stack" },
      slug: null,
      holder: null,
      focus: { en: "Features built end to end.", fr: "Fonctionnalités développées de bout en bout." },
    },
    {
      role: { en: "Business & Clients", fr: "Commercial et clients" },
      slug: null,
      holder: null,
      focus: { en: "Scoping, quotes and client relations.", fr: "Cadrage, devis et relation client." },
    },
  ],
} as const;

export const caseStudies: CaseStudy[] = [
  {
    id: "campus-info",
    name: "Campus Info",
    title: {
      en: "Campus Info: academic notification platform",
      fr: "Campus Info : plateforme de notifications académiques",
    },
    status: "live",
    summary: {
      en: "Final-year project: one place for academic announcements.",
      fr: "Projet de fin d'études : un seul endroit pour les annonces académiques.",
    },
    problem: {
      en: "Academic announcements were scattered across channels and reached students late.",
      fr: "Les annonces académiques étaient dispersées sur plusieurs canaux et parvenaient trop tard aux étudiants.",
    },
    solution: {
      en: "A centralized platform for students, teachers and administration. Each role sees its own experience, with strict access control, push notifications (Firebase Cloud Messaging) and e-mail.",
      fr: "Une plateforme centralisée pour les étudiants, les enseignants et l'administration. Chaque rôle a sa propre expérience, avec un contrôle d'accès strict, des notifications push (Firebase Cloud Messaging) et par e-mail.",
    },
    proof: {
      en: "Role access and notification delivery were checked with classmates' accounts. The Django API was tested with Postman.",
      fr: "L'accès par rôle et la réception des notifications ont été vérifiés avec les comptes de camarades de classe. L'API Django a été testée avec Postman.",
    },
    stack: ["Figma", "React", "TypeScript", "Vite", "Tailwind CSS", "Django", "Firebase"],
    links: { live: "https://campus-info-frontend.vercel.app" },
    images: [
      {
        src: "/projects/campus-info/landing.webp",
        label: { en: "Landing page", fr: "Page d'accueil" },
        width: 1302,
        height: 638,
        alt: {
          en: "Campus Info landing page with the headline 'Never miss an academic announcement' and a notification preview card.",
          fr: "Page d'accueil de Campus Info avec le titre « Never miss an academic announcement » et une carte d'aperçu de notification.",
        },
      },
      {
        src: "/projects/campus-info/admin-dashboard.webp",
        label: { en: "Admin dashboard", fr: "Tableau de bord administrateur" },
        width: 1366,
        height: 642,
        alt: {
          en: "Campus Info administrator dashboard with announcement counts, recent announcements and quick actions.",
          fr: "Tableau de bord administrateur de Campus Info avec le nombre d'annonces, les annonces récentes et des actions rapides.",
        },
      },
    ],
  },
  {
    id: "drink-manage",
    name: "Drink Manage",
    title: {
      en: "Drink Manage: depot management that works offline",
      fr: "Drink Manage : gestion de dépôt de boissons, même hors ligne",
    },
    status: "in-development",
    summary: {
      en: "A desktop app for drink depots, built around traceability from supplier to customer.",
      fr: "Une application de bureau pour les dépôts de boissons, conçue autour de la traçabilité du fournisseur au client.",
    },
    problem: {
      en: "A depot's work runs from supplier deliveries to handing out crates and products to bars and small shops. The owner needs every step recorded and recoverable, with no dependence on an internet connection.",
      fr: "Le travail d'un dépôt va des livraisons des fournisseurs à la remise de casiers et de produits aux bars et aux petites boutiques. Le propriétaire a besoin que chaque étape soit enregistrée et récupérable, sans dépendre d'une connexion internet.",
    },
    solution: {
      en: "One app covers the whole cycle: stock entries tied to a supplier, returnable crates (casiers) with supplier balances, damages (avaries) that change stock only after an administrator validates them, cash and credit sales with automatic receipts, and reports exported to PDF. It installs on one computer and serves the others over the depot's local network, so it keeps working without internet. A hosted web version is planned.",
      fr: "Une seule application couvre tout le cycle : entrées de stock liées à un fournisseur, casiers consignés avec les soldes par fournisseur, avaries qui ne modifient le stock qu'une fois validées par un administrateur, ventes au comptant et à crédit avec reçus automatiques, et rapports exportés en PDF. Elle s'installe sur un ordinateur et sert les autres via le réseau local du dépôt, donc elle continue de fonctionner sans internet. Une version web hébergée est prévue.",
    },
    role: {
      en: "Visual direction and UI/UX design, including feedback sessions with a depot owner and cashier, then front-end development. The back end was built by Hassan Mimshe, who leads the project.",
      fr: "Direction visuelle et design UI/UX, y compris des séances de retours avec un propriétaire de dépôt et la personne à la caisse, puis développement front-end. Le back-end a été construit par Hassan Mimshe, qui dirige le projet.",
    },
    statusNote: {
      en: "Design, interfaces and back end are done for version 1. The final installer and another round of MVP testing remain.",
      fr: "La conception, les interfaces et le back-end sont terminés pour la version 1. Il reste l'installateur final et un nouveau cycle de tests du MVP.",
    },
    stack: ["Figma", "React", "JavaScript", "Node.js", "Express", "PostgreSQL", "Electron", "GitHub"],
    images: [
      {
        src: "/projects/drink-manage/dashboard.webp",
        label: { en: "Dashboard", fr: "Tableau de bord" },
        width: 1600,
        height: 843,
        alt: {
          en: "Drink Manage dashboard showing sales, stock, crates, damages and receivables cards, with a sidebar of modules.",
          fr: "Tableau de bord de Drink Manage avec les cartes ventes, stock, casiers, avaries et créances, et une barre latérale de modules.",
        },
      },
      {
        src: "/projects/drink-manage/login.webp",
        label: { en: "Login", fr: "Connexion" },
        width: 1582,
        height: 728,
        alt: {
          en: "Drink Manage login screen with a short list of the app's modules beside the sign-in form.",
          fr: "Écran de connexion de Drink Manage, avec la liste des modules de l'application à côté du formulaire.",
        },
      },
    ],
    design: {
      intro: {
        en: "I joined Drink Manage after the back-end developer had built a first version with a basic interface. I first fixed front-end errors he asked me to look at. Once I was fully on the project, I redesigned the interface, because it did not follow UI and UX principles or hold together as one flow.",
        fr: "J'ai rejoint Drink Manage après que le développeur back-end avait construit une première version avec une interface basique. J'ai d'abord corrigé des erreurs front-end qu'il m'avait demandé d'examiner. Une fois pleinement sur le projet, j'ai repensé l'interface, car elle ne respectait pas les principes d'UI et d'UX et ne formait pas un parcours cohérent.",
      },
      session: {
        en: "We showed the first interface to a local depot: the owner, and the cashier who runs the whole depot alone, from supply to stock to sales.",
        fr: "Nous avons présenté la première interface à un dépôt local : le propriétaire, et la personne à la caisse, qui gère seule tout le dépôt, de l'approvisionnement au stock et aux ventes.",
      },
      feedback: [
        {
          en: "Too much data on each screen, which caused decision fatigue and slowed people down.",
          fr: "Trop de données sur chaque écran, ce qui causait une fatigue décisionnelle et ralentissait les gens.",
        },
        {
          en: "Navigation was hard to follow and changed from one part of the app to another.",
          fr: "La navigation était difficile à suivre et changeait d'une partie de l'application à l'autre.",
        },
        {
          en: "The owner already uses digital products and found the flow clear, but he pointed out that many depot owners in Cameroon do not, so the app had to be simpler.",
          fr: "Le propriétaire utilise déjà des produits numériques et a trouvé le parcours clair, mais il a souligné que beaucoup de propriétaires de dépôts au Cameroun n'en utilisent pas, donc l'application devait être plus simple.",
        },
        {
          en: "They asked whether past reports could be reviewed, so we showed reports for a chosen period.",
          fr: "Ils ont demandé s'il était possible de consulter les rapports passés, alors nous avons montré les rapports sur une période choisie.",
        },
      ],
      compare: [
        {
          label: { en: "Version 0: dashboard (before)", fr: "Version 0 : tableau de bord (avant)" },
          width: 1600,
          height: 843,
          alt: {
            en: "The first version of the Drink Manage dashboard, before the redesign.",
            fr: "La première version du tableau de bord de Drink Manage, avant la refonte.",
          },
        },
        {
          src: "/projects/drink-manage/dashboard.webp",
          label: { en: "Version 1: dashboard (after)", fr: "Version 1 : tableau de bord (après)" },
          width: 1600,
          height: 843,
          alt: {
            en: "The redesigned Drink Manage dashboard.",
            fr: "Le tableau de bord de Drink Manage après la refonte.",
          },
        },
      ],
      decisions: [
        {
          title: { en: "One consistent interface", fr: "Une interface cohérente" },
          text: {
            en: "Every screen follows the same layout, spacing and controls, so the user feels they are using one product, not a set of separate pages.",
            fr: "Chaque écran suit la même mise en page, les mêmes espacements et les mêmes contrôles, pour que l'utilisateur ait le sentiment d'utiliser un seul produit, et non un ensemble de pages séparées.",
          },
          shots: [
            {
              label: { en: "Three screens, one layout", fr: "Trois écrans, une seule mise en page" },
              width: 1600,
              height: 843,
              alt: {
                en: "Three Drink Manage screens that share the same layout, spacing and controls.",
                fr: "Trois écrans de Drink Manage qui partagent la même mise en page, les mêmes espacements et les mêmes contrôles.",
              },
            },
          ],
        },
        {
          title: { en: "Dashboard cards that carry less", fr: "Des cartes de tableau de bord plus légères" },
          text: {
            en: "Each card answers one question, such as sales today, stock, crates, damages or receivables, with one main figure and one action. The owner reads the state of the depot at a glance, which lowers the mental effort needed to understand the screen.",
            fr: "Chaque carte répond à une seule question, comme les ventes du jour, le stock, les casiers, les avaries ou les créances, avec un chiffre principal et une action. Le propriétaire lit l'état du dépôt d'un coup d'œil, ce qui réduit l'effort mental nécessaire pour comprendre l'écran.",
          },
          shots: [
            {
              label: { en: "Dashboard cards, close up", fr: "Cartes du tableau de bord, en gros plan" },
              width: 1200,
              height: 600,
              alt: {
                en: "Close-up of the Drink Manage dashboard cards.",
                fr: "Gros plan sur les cartes du tableau de bord de Drink Manage.",
              },
            },
          ],
        },
        {
          title: { en: "A global search bar with suggestions", fr: "Une barre de recherche globale avec suggestions" },
          text: {
            en: "One search bar, opened with Ctrl K, searches across the software and suggests results as you type. People do not have to remember where things live, which cuts navigation effort and decision fatigue.",
            fr: "Une seule barre de recherche, ouverte avec Ctrl K, cherche dans tout le logiciel et propose des résultats pendant la saisie. Les gens n'ont pas à se rappeler où se trouvent les choses, ce qui réduit l'effort de navigation et la fatigue décisionnelle.",
          },
          shots: [
            {
              label: { en: "Global search with suggestions", fr: "Recherche globale avec suggestions" },
              width: 1200,
              height: 700,
              alt: {
                en: "The Drink Manage search bar showing suggestions while typing.",
                fr: "La barre de recherche de Drink Manage affichant des suggestions pendant la saisie.",
              },
            },
          ],
        },
        {
          title: {
            en: "A colour and design system that feels like a family",
            fr: "Un système de couleurs et de design qui forme une famille",
          },
          text: {
            en: "A single palette, type scale and set of components runs through the whole app, so each new screen feels familiar before the user has read it.",
            fr: "Une seule palette, une seule échelle typographique et un seul jeu de composants traversent toute l'application, donc chaque nouvel écran paraît familier avant même d'être lu.",
          },
          shots: [
            {
              label: { en: "Colours, type and components", fr: "Couleurs, typographie et composants" },
              width: 1200,
              height: 700,
              alt: {
                en: "The Drink Manage colours, type and interface components.",
                fr: "Les couleurs, la typographie et les composants d'interface de Drink Manage.",
              },
            },
          ],
        },
      ],
    },
  },
];

/** "shipped" = used in a deployed project. "practiced" = on the CV, no public project yet. */
export const stack = [
  {
    name: "React",
    level: "shipped",
    evidence: { en: "Academic notification platform", fr: "Plateforme de notifications académiques" },
  },
  {
    name: "TypeScript",
    level: "shipped",
    evidence: { en: "Academic notification platform", fr: "Plateforme de notifications académiques" },
  },
  {
    name: "Tailwind CSS",
    level: "shipped",
    evidence: { en: "Academic notification platform", fr: "Plateforme de notifications académiques" },
  },
  { name: "Figma", level: "shipped", evidence: { en: "Mockups before development", fr: "Maquettes avant le développement" } },
  { name: "Node.js", level: "practiced", evidence: { en: "Express and REST APIs", fr: "Express et API REST" } },
  { name: "PostgreSQL", level: "practiced", evidence: { en: "Database work", fr: "Travail sur les bases de données" } },
] as const;
