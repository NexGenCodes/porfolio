"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Project, projects } from "@/constants/projectData";

const categories = [
  "All",
  "Web Development",
  "Mobile Apps",
  "UI/UX Design",
  "E-commerce",
  "Backend",
];

interface ProjectFilterProps {
  onFilterChange?: (filteredProjects: Project[]) => void;
}

export function ProjectFilter({ onFilterChange }: ProjectFilterProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Filter projects when category or search term changes
  useEffect(() => {
    const filtered = projects.filter((project) => {
      // Filter by category
      const categoryMatch =
        activeCategory === "All" ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(activeCategory.toLowerCase())
        ) ||
        project.title.toLowerCase().includes(activeCategory.toLowerCase()) ||
        project.description
          .toLowerCase()
          .includes(activeCategory.toLowerCase());

      // Filter by search term
      const searchMatch =
        searchTerm === "" ||
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        );

      return categoryMatch && searchMatch;
    });

    setFilteredProjects(filtered);

    // Notify parent component about filtered projects if callback exists
    if (onFilterChange) {
      onFilterChange(filtered);
    }
  }, [activeCategory, searchTerm, onFilterChange]);

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
          >
            {category}
          </Button>
        ))}
      </div>

      <p className="text-xs sm:text-sm text-muted-foreground">
        Found {filteredProjects.length} project
        {filteredProjects.length !== 1 ? "s" : ""}
      </p>
    </div>
  );
}
