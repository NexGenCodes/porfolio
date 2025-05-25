"use client";
import { Project, projects as AllProjects } from "@/constants/projectData";
import { ProjectFilter } from "./projectfilter";
import { ProjectCard } from "./card/project";
import { useState } from "react";

export default function ProjectsPageClient() {
  const [filteredProjects, setFilteredProjects] =
    useState<Project[]>(AllProjects);
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

      <ProjectFilter onFilterChange={setFilteredProjects} />
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium">No projects found</h3>
          <p className="text-muted-foreground mt-2">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
}
