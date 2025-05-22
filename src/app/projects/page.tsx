import ProjectsPageClient from "@/components/projectsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | NexGenCode Portfolio",
  description:
    "Explore my projects across web, mobile, and end-to-end development",
  keywords: [
    "web development",
    "mobile apps",
    "full-stack projects",
    "portfolio",
  ],
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
