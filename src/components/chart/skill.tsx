"use client";
import { skillLevels } from "@/constants/skill";
import { motion } from "framer-motion";

export function SkillsChart() {
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
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
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
