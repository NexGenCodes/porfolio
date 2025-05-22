"use client";
import { skillLevels } from "@/constants/skill";
import { useEffect, useState } from "react";

export function SkillsChart() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div
        className="h-[400px] bg-muted animate-pulse rounded-lg"
        aria-label="Loading skills chart..."
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {Object.entries(skillLevels).map(([category, skills]) => (
        <div key={category} className="space-y-6">
          <h3 className="text-xl font-bold">{category}</h3>
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div
                  className="h-2 bg-muted rounded-full overflow-hidden"
                  role="progressbar"
                  aria-valuenow={skill.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="h-full bg-primary transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
