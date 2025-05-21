import {
  Code,
  Database,
  Globe,
  Smartphone,
  Server,
  Layers,
  PenTool,
  Cpu,
  Cloud,
  BarChart,
  LucideIcon,
} from "lucide-react";

interface Skill {
  name: string;
  icon: LucideIcon;
}

interface SkillLevel {
  name: string;
  level: number;
}

interface SkillCategory {
  label: string;
  skills: Skill[];
}

export const skillCategories: Record<string, SkillCategory> = {
  frontend: {
    label: "Frontend",
    skills: [
      { name: "React", icon: Code },
      { name: "Next.js", icon: Globe },
      { name: "TypeScript", icon: Code },
      { name: "Tailwind CSS", icon: PenTool },
      { name: "Vue.js", icon: Layers },
      { name: "Angular", icon: Code },
      { name: "Redux", icon: Layers },
      { name: "HTML/CSS", icon: Code },
      { name: "Three.js", icon: Cpu },
      { name: "Framer Motion", icon: PenTool },
    ],
  },
  backend: {
    label: "Backend",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Server },
      { name: "Python", icon: Code },
      { name: "Django", icon: Server },
      { name: "GraphQL", icon: Database },
      { name: "REST API", icon: Server },
      { name: "PostgreSQL", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "Firebase", icon: Cloud },
      { name: "AWS", icon: Cloud },
    ],
  },
  mobile: {
    label: "Mobile",
    skills: [
      { name: "React Native", icon: Smartphone },
      { name: "Flutter", icon: Smartphone },
      { name: "Swift", icon: Code },
      { name: "Kotlin", icon: Code },
      { name: "Expo", icon: Smartphone },
      { name: "Mobile UI/UX", icon: PenTool },
    ],
  },
  other: {
    label: "Other",
    skills: [
      { name: "Git", icon: Code },
      { name: "CI/CD", icon: Cloud },
      { name: "Docker", icon: Layers },
      { name: "Testing", icon: BarChart },
      { name: "Agile", icon: Layers },
      { name: "UI/UX Design", icon: PenTool },
    ],
  },
};

export const skillLevels: Record<string, SkillLevel[]> = {
  "Programming Languages": [
    { name: "JavaScript/TypeScript", level: 95 },
    { name: "Python", level: 85 },
    { name: "Dart", level: 75 },
    { name: "Swift", level: 70 },
    { name: "Kotlin", level: 65 },
  ],
  "Frontend Development": [
    { name: "React/Next.js", level: 95 },
    { name: "HTML/CSS", level: 90 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Vue.js", level: 80 },
    { name: "Angular", level: 70 },
  ],
  "Backend Development": [
    { name: "Node.js/Express", level: 90 },
    { name: "Django", level: 80 },
    { name: "GraphQL", level: 85 },
    { name: "REST API Design", level: 90 },
    { name: "Serverless", level: 75 },
  ],
  "Mobile Development": [
    { name: "React Native", level: 90 },
    { name: "Flutter", level: 85 },
    { name: "iOS Native", level: 70 },
    { name: "Android Native", level: 65 },
    { name: "Progressive Web Apps", level: 80 },
  ],
  "Database & Cloud": [
    { name: "PostgreSQL", level: 85 },
    { name: "MongoDB", level: 90 },
    { name: "Firebase", level: 85 },
    { name: "AWS", level: 80 },
    { name: "Docker", level: 75 },
  ],
  "Other Skills": [
    { name: "UI/UX Design", level: 80 },
    { name: "Testing", level: 85 },
    { name: "CI/CD", level: 80 },
    { name: "Agile Methodology", level: 90 },
    { name: "Technical Writing", level: 75 },
  ],
};
