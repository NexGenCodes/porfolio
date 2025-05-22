"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { skillCategories } from "@/constants/skill";

export function SkillsSection() {
  return (
    <Tabs defaultValue="frontend" className="w-full">
      <div className="flex justify-center overflow-x-auto pb-2">
        <TabsList
          className="flex flex-wrap w-full max-w-2xl light-shadow-sm"
          aria-label="Skill categories"
        >
          {Object.keys(skillCategories).map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="text-xs sm:text-sm whitespace-nowrap"
            >
              {skillCategories[category].label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {Object.entries(skillCategories).map(([category, { skills }]) => (
        <TabsContent key={category} value={category} className="mt-4 sm:mt-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center p-3 sm:p-4 bg-card/80 rounded-lg border border-border/60 shadow-sm hover:shadow-md transition-all duration-200 hover:bg-card hover:-translate-y-1"
              >
                <div
                  className="p-1.5 sm:p-2 rounded-full bg-primary/10 mb-2 sm:mb-3 light-shadow-sm"
                  aria-hidden="true"
                >
                  <skill.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-medium text-center text-xs sm:text-sm">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
