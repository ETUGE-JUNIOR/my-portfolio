export interface Member {
  slug: string;
  name: string;
  role: string;
  photo: string;
  location: string;
  availability: string;
  bio: string[];
  links: { label: string; href: string }[];
  work: string[]; // ids from caseStudies
  skills: { group: string; items: string[] }[];
  experience: { title: string; org: string; place: string; period: string; points: string[] }[];
  education: { title: string; org: string; period: string; note?: string }[];
  languages: string[];
}

export const members: Member[] = [
  {
    slug: "etuge",
    name: "Etuge Marxsim Junior",
    role: "Design & Frontend Lead",
    photo: "/team/etuge.webp",
    location: "Douala, Cameroon",
    availability: "Open to internships, junior front-end or product roles, and freelance projects.",
    bio: [
      "I am a front-end developer with a strong UI/UX design practice. I design interfaces in Figma first, then build them in React, so clients see the screens before any code is written.",
      "I interned at a web agency in Douala and built and deployed my final-year project, a notification platform for academic announcements. Today I lead design and front end at EMJ Digital Studio and work on Drink Manage, a depot management app.",
    ],
    links: [
      { label: "Download CV (PDF)", href: "/cv.pdf" },
      { label: "Email", href: "mailto:etugemarxsimjunior@gmail.com" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/etuge-junior-827ab3350" },
      { label: "GitHub", href: "https://github.com/ETUGE-JUNIOR" },
      { label: "WhatsApp", href: "https://wa.me/237678128857" },
    ],
    work: ["campus-info", "drink-manage"],
    skills: [
      { group: "Languages", items: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3", "PHP (basics)"] },
      { group: "Front end", items: ["React", "Next.js", "Vite", "Tailwind CSS"] },
      { group: "Back end", items: ["Django", "Node.js", "Express", "REST APIs", "JWT"] },
      { group: "Database", items: ["PostgreSQL"] },
      { group: "Design", items: ["Figma", "Canva", "Affinity"] },
      { group: "Tools", items: ["Git", "GitHub", "GitLab", "Postman", "Firebase Cloud Messaging", "Vercel", "Railway"] },
    ],
    experience: [
      {
        title: "Front-End Developer Intern",
        org: "Sunshine Advisory",
        place: "Bonanjo, Douala",
        period: "March to June 2025",
        points: [
          "Built user-facing web interfaces with Next.js.",
          "Turned UI mockups into web pages.",
          "Improved usability and the overall user experience.",
          "Worked in a team with Git and GitLab.",
        ],
      },
      {
        title: "IT Trainer",
        org: "ISTIA Cameroun",
        place: "Several campuses in Douala",
        period: "July to September 2025",
        points: [
          "Ran tutoring classes in computer science for nearly 50 scholarship students.",
          "Strengthened core IT skills and followed each student's progress.",
        ],
      },
    ],
    education: [
      {
        title: "Licence de Technologie, Software Engineering",
        org: "IUT of Douala",
        period: "2025 to 2026",
        note: "Defense passed and certificate obtained. Diploma being issued.",
      },
      { title: "DUT, Computer Engineering", org: "IUT of Douala", period: "2024 to 2025" },
      {
        title: "GCE Advanced Level",
        org: "Bilingual Comprehensive High School, Loum",
        period: "2023 to 2024",
      },
    ],
    languages: ["English: fluent", "French: good, spoken and written"],
  },
];
