"use client";

import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Project, projects } from "@/constants/projectData";

const categories = [
  "All",
  "Web",
  "Mobile",
  "E-commerce",
  "Backend",
  "AI",
  "Real Estate",
  "Task Management",
  "Healthcare",
];

// Category mapping for filtering
const categoryFilters: Record<string, (project: Project) => boolean> = {
  all: () => true,
  web: (project) =>
    project.technologies.some((tech) =>
      ["next.js", "react", "tailwind css", "express"].some((t) =>
        tech.toLowerCase().includes(t)
      )
    ) || project.description.toLowerCase().includes("web"),
  mobile: (project) =>
    project.technologies.some((tech) =>
      ["react native", "flutter", "expo", "dart"].some((t) =>
        tech.toLowerCase().includes(t)
      )
    ) || project.description.toLowerCase().includes("mobile"),
  "e-commerce": (project) =>
    project.title.toLowerCase().includes("e-commerce") ||
    project.description.toLowerCase().includes("e-commerce"),
  backend: (project) =>
    project.technologies.some((tech) =>
      [
        "node.js",
        "express",
        "prisma",
        "supabase",
        "graphql",
        "mongodb",
        "postgresql",
      ].some((t) => tech.toLowerCase().includes(t))
    ) || project.description.toLowerCase().includes("backend"),
  ai: (project) =>
    project.technologies.includes("OpenAI API") ||
    project.title.toLowerCase().includes("ai") ||
    project.description.toLowerCase().includes("ai"),
  "real estate": (project) =>
    project.title.toLowerCase().includes("real estate") ||
    project.description.toLowerCase().includes("real estate"),
  "task management": (project) =>
    project.title.toLowerCase().includes("task management") ||
    project.description.toLowerCase().includes("task management"),
  healthcare: (project) =>
    project.title.toLowerCase().includes("healthcare") ||
    project.description.toLowerCase().includes("healthcare"),
};

interface ProjectFilterProps {
  onFilterChange?: (filteredProjects: Project[]) => void;
}

export function ProjectFilter({ onFilterChange }: ProjectFilterProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const processedProjects = useMemo(
    () =>
      projects.map((project) => ({
        ...project,
        titleLower: project.title.toLowerCase(),
        descriptionLower: project.description.toLowerCase(),
        technologiesLower: project.technologies.map((tech) =>
          tech.toLowerCase()
        ),
      })),
    []
  );

  // Filter projects
  const filteredProjects = useMemo(() => {
    const categoryKey = activeCategory.toLowerCase();
    const filterFn = categoryFilters[categoryKey] || (() => true);

    return processedProjects.filter((project) => {
      // Category filter
      const categoryMatch = filterFn(project);

      // Search filter
      const searchMatch =
        searchTerm === "" ||
        project.titleLower.includes(searchTerm.toLowerCase()) ||
        project.descriptionLower.includes(searchTerm.toLowerCase()) ||
        project.technologiesLower.some((tech) =>
          tech.includes(searchTerm.toLowerCase())
        );

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, searchTerm, processedProjects]);

  // Filter projects when category or search term changes
  // Notify parent and update local state
  useEffect(() => {
    if (onFilterChange) {
      onFilterChange(filteredProjects);
    }
  }, [filteredProjects, onFilterChange]);

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search projects..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search projects"
        />
      </div>

      <div className="flex flex-wrap gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(category)}
            className="text-xs sm:text-sm whitespace-nowrap"
            aria-pressed={activeCategory === category}
          >
            {category}
          </Button>
        ))}
      </div>

      <p className="text-xs sm:text-sm text-muted-foreground">
        {filteredProjects.length === 0
          ? "No projects found."
          : `Found ${filteredProjects.length} project${
              filteredProjects.length !== 1 ? "s" : ""
            }`}
      </p>
    </div>
  );
}
