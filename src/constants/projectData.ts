export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const image = "https://placehold.co/600x800";

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce web platform with product management, cart functionality, payment processing, and order tracking.",
    image: image,
    technologies: [
      "Next.js",
      "TypeScript",
      "Stripe",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
    ],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "fitness-mobile-app",
    title: "Fitness Tracking App",
    description:
      "A cross-platform mobile application for tracking workouts, nutrition, and fitness progress with social features.",
    image: image,
    technologies: ["React Native", "TypeScript", "Firebase", "Redux", "Expo"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "ai-content-generator",
    title: "AI Content Generator",
    description:
      "An AI-powered platform that generates marketing content, blog posts, and social media updates based on user prompts.",
    image: image,
    technologies: ["React", "Node.js", "OpenAI API", "MongoDB", "Express"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "real-estate-platform",
    title: "Real Estate Platform",
    description:
      "A comprehensive real estate platform with property listings, virtual tours, and agent management.",
    image: image,
    technologies: [
      "Next.js",
      "TypeScript",
      "Three.js",
      "Supabase",
      "Tailwind CSS",
    ],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: "task-management",
    title: "Task Management System",
    description:
      "A collaborative task management system with real-time updates, team collaboration, and progress tracking.",
    image: image,
    technologies: ["React", "TypeScript", "Socket.io", "Express", "MongoDB"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: "healthcare-app",
    title: "Healthcare Mobile App",
    description:
      "A mobile application for healthcare providers to manage patient records, appointments, and medical history.",
    image: image,
    technologies: ["Flutter", "Dart", "Firebase", "GraphQL", "Node.js"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
];