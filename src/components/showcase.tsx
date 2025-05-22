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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
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
    </motion.div>
  );
}
