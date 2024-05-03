import {
  TutoriaLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Nicolas Ottone",
  initials: "NO",
  location: "Buenos Aires, Argentina",
  locationLink: "https://www.google.com/maps/place/Buenos+Aires",
  about: "Front-End Developer",
  summary:
    "Hola! Soy desarrollador de software con 2 años de experiencia en front end y un gran interés en IoT e inteligencia artificial. Comencé mi camino a los 15 años programando microcontroladores en C y Assembler. Me encantan los retos y construir aplicaciones desde cero. Suelo utilizar estas tecnologías: Typescript, React, Tailwind CSS, Node js, React Query, Radix UI, entre otras.",
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
      school: "Universidad Tecnológica Nacional",
      degree: "Ingenieria en Electrónica",
      start: "2020",
      end: "2026",
    },
    {
      school: "E.E.S.T. N°9",
      degree: "Técnico en Electrónica",
      start: "2011",
      end: "2018",
    },
  ],
  work: [
    {
      company: "SiliconMind",
      link: "https://siliconmind.ai/",
      badges: [],
      title: "SSr Front-end developer",
      start: "2023",
      end: "actualmente",
      description:
        "Desarrolle la UI y parte del back en la creación del SaaS TutorIA. Desarrolle la landing page de SiliconMind. Participe en la creación de soluciones basadas en inteligencia artificial, entre las mas frecuentes; chatbots y workflows.",
    },
    {
      company: "Profesor Técnico particular",
      link: "",
      badges: [],
      title: "",
      start: "2020",
      end: "2021",
      description:
        "Profesor particular orientado a materias técnicas de secundario; matemáticas, teoría de circuitos, digitales, electrónica aplicada, programación en C y Assembler.",
    },
    {
      company: "Instrumentación & Control",
      link: "https://www.calibraciondeinstrumento.com.ar/#home",
      badges: [],
      title: "Técnico de Laboratorio",
      start: "2019",
      end: "2020",
      description:
        "Calibración de instrumentos de medición (conductímetros, termo higrómetros, telurimetros, etc.) confección y emisión de certificados, elaboración de perfiles térmicos e informes de autoclaves. Reparación, registro de entrada y salidas de equipos.",
    },
  ],
  skills: [
    ,
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
      description: "SaaS hecho para estudiantes con mas de 100 usuarios",
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
        "Registra las visitas, eventos y datos de los usuarios de tu pagina para visualizarlos en un elegante dashboard",
      link: {
        label: "web-analytics-tracker.vercel.app",
        href: "https://web-analytics-tracker.vercel.app/",
      },
    },
    {
      title: "SiliconMind Page",
      techStack: ["JavaScript", "React", "Styled Components"],
      description: "Landing Page de SiliconMind AI",
      link: {
        label: "siliconmind.ai",
        href: "https://siliconmind.ai/",
      },
    },
    {
      title: "Conversa-Db",
      techStack: ["Next.js", "Drizzle", "Langchain.js", "ReactTable", "LLMs"],
      description:
        "Agente de consultas SQL, chatea con tu base de datos de forma natural",
      link: {
        label: "conversa-db.vercel.app",
        href: "https://conversa-db.vercel.app/",
      },
    },
    {
      title: "IoT Firmware",
      techStack: ["C++", "Arduino", "IoT", "RTOS"],
      description:
        "Monitor de condiciones ambientales, envia y recibe datos en tiempo real a un servidor para ser monitoreados a distancia",
      link: {
        label: "github.com/nicolasottone/rack-controller-firmwareyy",
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
        "IA",
      ],
      description:
        "SaaS en desarrollo destinado a ser Partner de mercado libre",
      link: {
        label: "",
        href: "",
      },
    },
  ],
} as const;
