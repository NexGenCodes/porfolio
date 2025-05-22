"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Project } from "@/constants/projectData";

interface ProjectCardProps {
  project: Project;
  isHovered?: boolean;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border border-border/60 bg-card/80 hover:bg-card group">
        <div
          className="relative h-40 sm:h-48 md:h-56 overflow-hidden"
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={() => setIsImageHovered(false)}
        >
          <Image
            src={project.image || "/placeholder.svg"}
            alt={`Screenshot of ${project.title} project`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            style={{
              transform: isImageHovered ? "scale(1.05)" : "scale(1)",
            }}
          />
        </div>
        <CardContent className="p-4 sm:p-6">
          <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3">
            {project.technologies.slice(0, 3).map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-secondary/70 text-secondary-foreground font-medium text-xs"
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="outline" className="bg-background text-xs">
                +{project.technologies.length - 3}
                <span className="sr-only">more technologies</span>
              </Badge>
            )}
          </div>
          <motion.h3
            className="text-base sm:text-xl font-bold mb-1 sm:mb-2 animated-underline"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {project.title}
          </motion.h3>
          <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
            {project.description}
          </p>
        </CardContent>
        <CardFooter className="px-4 sm:px-6 py-3 sm:py-4 border-t flex justify-between bg-muted/20">
          {project.demoUrl && (
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="hover:bg-background/80 group text-xs sm:text-sm"
            >
              <Link
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink
                  className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 group-hover:scale-110 transition-transform"
                  aria-hidden="true"
                />
                Demo
              </Link>
            </Button>
          )}
          {project.githubUrl && (
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="hover:bg-background/80 group text-xs sm:text-sm"
            >
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github
                  className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 group-hover:scale-110 transition-transform"
                  aria-hidden="true"
                />
                Code
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
