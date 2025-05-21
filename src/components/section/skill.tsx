"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { skillCategories } from "@/constants/skill";

export function SkillsSection() {
  return (
    <Tabs defaultValue="frontend" className="w-full">
      <div className="flex justify-center">
        <TabsList className="grid grid-cols-3 md:grid-cols-4 w-full max-w-2xl">
          {Object.keys(skillCategories).map((category) => (
            <TabsTrigger key={category} value={category}>
              {skillCategories[category].label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {Object.entries(skillCategories).map(([category, { skills }]) => (
        <TabsContent key={category} value={category} className="mt-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex flex-col items-center p-4 bg-card rounded-lg border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-2 rounded-full bg-primary/10 mb-3">
                  <skill.icon className="h-5 w-5" />
                </div>
                <h3 className="font-medium text-center">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
