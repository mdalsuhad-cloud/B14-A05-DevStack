export interface Technology {
  id: number;
  name: string;
  category:
    | "Frontend"
    | "Backend"
    | "Database"
    | "Language"
    | "Styling"
    | "DevOps"
    | "Tools";
  description: string;
  icon: string;
  rating: number;
  difficulty: "Beginner-Friendly" | "Intermediate" | "Advanced";
  badge: string;
}

export const technologies: Technology[] = [
  {
    id: 1,
    name: "React",
    category: "Frontend",
    description:
      "A popular JavaScript library for building modern and interactive user interfaces.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    rating: 4.8,
    difficulty: "Beginner-Friendly",
    badge: "Popular",
  },
  {
    id: 2,
    name: "Next.js",
    category: "Frontend",
    description:
      "A React framework for building fast, scalable, and SEO-friendly web applications.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    rating: 4.7,
    difficulty: "Intermediate",
    badge: "Fast",
  },
  {
    id: 3,
    name: "Node.js",
    category: "Backend",
    description:
      "A JavaScript runtime that allows developers to build scalable server-side applications.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    rating: 4.8,
    difficulty: "Beginner-Friendly",
    badge: "Popular",
  },
  {
    id: 4,
    name: "Express.js",
    category: "Backend",
    description:
      "A lightweight Node.js framework for building APIs and web servers quickly.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    rating: 4.6,
    difficulty: "Beginner-Friendly",
    badge: "Essential",
  },
  {
    id: 5,
    name: "MongoDB",
    category: "Database",
    description:
      "A flexible NoSQL database designed for modern applications and scalable data storage.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    rating: 4.7,
    difficulty: "Beginner-Friendly",
    badge: "Popular",
  },
  {
    id: 6,
    name: "PostgreSQL",
    category: "Database",
    description:
      "A powerful open-source relational database known for reliability and advanced features.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    rating: 4.9,
    difficulty: "Intermediate",
    badge: "Essential",
  },
  {
    id: 7,
    name: "TypeScript",
    category: "Language",
    description:
      "A strongly typed programming language that builds on JavaScript for safer and scalable applications.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    rating: 4.9,
    difficulty: "Intermediate",
    badge: "Popular",
  },
  {
    id: 8,
    name: "JavaScript",
    category: "Language",
    description:
      "A versatile programming language used for frontend, backend, and full-stack web development.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    rating: 4.9,
    difficulty: "Beginner-Friendly",
    badge: "Essential",
  },
  {
    id: 9,
    name: "Tailwind CSS",
    category: "Styling",
    description:
      "A utility-first CSS framework for rapidly creating modern and responsive interfaces.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    rating: 4.8,
    difficulty: "Beginner-Friendly",
    badge: "Fast",
  },
  {
    id: 10,
    name: "Sass",
    category: "Styling",
    description:
      "A CSS preprocessor that adds variables, nesting, mixins, and powerful features to CSS.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    rating: 4.5,
    difficulty: "Beginner-Friendly",
    badge: "Essential",
  },
  {
    id: 11,
    name: "Docker",
    category: "DevOps",
    description:
      "A platform for packaging applications into portable and consistent containers.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    rating: 4.8,
    difficulty: "Intermediate",
    badge: "Containers",
  },
  {
    id: 12,
    name: "Kubernetes",
    category: "DevOps",
    description:
      "An open-source platform for automating container deployment, scaling, and management.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    rating: 4.7,
    difficulty: "Advanced",
    badge: "Containers",
  },
  {
    id: 13,
    name: "Git",
    category: "Tools",
    description:
      "A distributed version control system used to track code changes and collaborate with developers.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    rating: 4.9,
    difficulty: "Beginner-Friendly",
    badge: "Essential",
  },
  {
    id: 14,
    name: "GitHub",
    category: "Tools",
    description:
      "A developer platform for hosting repositories, collaborating on code, and managing projects.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    rating: 4.9,
    difficulty: "Beginner-Friendly",
    badge: "Popular",
  },
  {
    id: 15,
    name: "Figma",
    category: "Tools",
    description:
      "A collaborative design tool for creating user interfaces, prototypes, and design systems.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    rating: 4.7,
    difficulty: "Beginner-Friendly",
    badge: "Popular",
  },
];