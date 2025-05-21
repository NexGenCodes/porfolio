"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/constants/projectData";
import { ProjectCard } from "./card/project";

export function ProjectsShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <AnimatePresence>
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <ProjectCard project={project} isHovered={hoveredIndex === index} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
