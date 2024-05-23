import { TutoriaLogo } from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Nicolas Ottone",
  initials: "NO",
  location: "Buenos Aires, Argentina",
  locationLink: "https://www.google.com/maps/place/Buenos+Aires",
  about: "Front-End Developer",
  summary:
    "Front-End Developer with 2+ years of experience building user-friendly and performant web applications. Proven expertise in React, TypeScript, and Next.js, with a strong foundation in clean code and efficient state management. Passionate about leveraging AI and IoT to develop innovative solutions.",
  avatarUrl: "https://avatars.githubusercontent.com/u/64184394?v=4",
  personalWebsiteUrl: "#",
  contact: {
    email: "nicolasottone7@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/nicolasottone",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nicolas-hernan-ottone/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Universidad Tecnólogica Nacional",
      degree: "Electronic Engineering",
      start: "2020",
      end: "2026",
    },
    {
      school: "E.E.S.T. N°9",
      degree: "Electronic Technician",
      start: "2011",
      end: "2018",
    },
  ],
  work: [
    {
      company: "SiliconMind",
      link: "https://siliconmind.ai/",
      badges: [],
      title: "Ssr-Front-End Developer",
      start: "2023",
      end: "Present",
      description:
        "Developed the UI and part of the backend for the TutorIA SaaS. Developed the SiliconMind landing page. Participated in the creation of artificial intelligence-based solutions, including chatbots and workflows.",
    },
    {
      company: "Private Technical Professor",
      link: "",
      badges: [],
      title: "",
      start: "2020",
      end: "2021",
      description:
        "Private tutor focused on technical high school subjects: mathematics, circuit theory, digital electronics, applied electronics, programming in C and Assembly.",
    },
    {
      company: "Instrumentación & Control",
      link: "https://www.calibraciondeinstrumento.com.ar/#home",
      badges: [],
      title: "Laboratory Technician",
      start: "2019",
      end: "2020",
      description:
        "Calibration of measuring instruments (conductivity meters, thermo-hygrometers, earth resistance testers, etc.), preparation and issuance of certificates, preparation of thermal profiles and autoclave reports. Repair, registration of equipment inputs and outputs.",
    },
  ],
  skills: [
    "TypeScript",
    "React",
    "Node.js",
    "Next.js",
    "tRPC",
    "Tailwind CSS",
    "Radix UI",
    "Langchain",
    "Git/GitLab",
  ],
  projects: [
    {
      title: "TutorIA",
      techStack: [
        "TypeScript",
        "Next.js",
        "React",
        "Pinecone",
        "SQL",
        "Openai API",
        "Langchain.js",
      ],
      description: "SaaS built for students with over 100 users",
      logo: TutoriaLogo,
      link: {
        label: "tutoria.siliconmind.ai",
        href: "https://tutoria.siliconmind.ai/",
      },
    },
    {
      title: "Web Analytics Tracker",
      techStack: ["TypeScript", "Next.js", "Tremor UI", "Redis", "Tailwind"],
      description:
        "Tracks your website visits, events and user data to display them in an elegant dashboard",
      link: {
        label: "web-analytics-tracker.vercel.app",
        href: "https://web-analytics-tracker.vercel.app/",
      },
    },
    {
      title: "SiliconMind Page",
      techStack: ["JavaScript", "React", "Styled Components"],
      description: "SiliconMind AI Landing Page",
      link: {
        label: "siliconmind.ai",
        href: "https://siliconmind.ai/",
      },
    },
    {
      title: "Conversa-Db",
      techStack: ["Next.js", "Drizzle", "Langchain.js", "ReactTable", "LLMs"],
      description: "SQL query agent, chat with your database naturally",
      link: {
        label: "conversa-db.vercel.app",
        href: "https://conversa-db.vercel.app/",
      },
    },
    {
      title: "IoT Firmware",
      techStack: ["C++", "Arduino", "IoT", "RTOS"],
      description:
        "Environmental conditions monitor, sends and receives data in real time to a server to be monitored remotely",
      link: {
        label: "github.com/nicolasottone/rack-controller-firmware",
        href: "https://github.com/nicolasottone/rack-controller-firmware",
      },
    },
    {
      title: "Mercado IA",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Drizzle",
        "Radix UI",
        "tRPC",
        "MercadoLibre API",
        "AI",
      ],
      description:
        "SaaS under development intended to be a Mercado Libre Partner",
      link: {
        label: "",
        href: "",
      },
    },
  ],
} as const;
