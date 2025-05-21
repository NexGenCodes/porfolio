"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { Project } from "@/constants/projectData";

interface ProjectCardProps {
  project: Project;
  isHovered?: boolean;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div
        className="relative h-48 md:h-64 overflow-hidden"
        onMouseEnter={() => setIsImageHovered(true)}
        onMouseLeave={() => setIsImageHovered(false)}
      >
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500"
          style={{
            transform: isImageHovered ? "scale(1.05)" : "scale(1)",
          }}
        />
        {isImageHovered && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <Link href={`/projects/${project.id}`}>
              <Button>View Details</Button>
            </Link>
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="outline">+{project.technologies.length - 3}</Badge>
          )}
        </div>
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground line-clamp-2">
          {project.description}
        </p>
      </CardContent>
      <CardFooter className="px-6 py-4 border-t flex justify-between">
        {project.demoUrl && (
          <Button variant="ghost" size="sm" asChild>
            <Link
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Demo
            </Link>
          </Button>
        )}
        {project.githubUrl && (
          <Button variant="ghost" size="sm" asChild>
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 mr-2" />
              Code
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
