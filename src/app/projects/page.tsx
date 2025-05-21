import { ProjectCard } from "@/components/card/project";
import { ProjectFilter } from "@/components/projectfilter";
import { projects } from "@/constants/projectData";
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
  return (
    <div className="container py-12 md:py-24 space-y-8">
      <div className="flex flex-col items-center text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          My Projects
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          A comprehensive collection of my work across various technologies and
          industries.
        </p>
      </div>

      <ProjectFilter />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
