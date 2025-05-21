"use client";

import { useState, useEffect } from "react";
import { Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { themes } from "@/constants/themes";

export function ThemeSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage on component mount
  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("selectedColorTheme");
    if (storedTheme && themes[storedTheme]) {
      setSelectedTheme(storedTheme);
      applyThemeColors(storedTheme);
    } else {
      setSelectedTheme("default");
    }
  }, []);

  const applyThemeColors = (themeId: string) => {
    if (!themes[themeId]) return;

    // Apply the selected theme colors to CSS variables
    const root = document.documentElement;

    // Apply to both light and dark mode
    const theme = themes[themeId];

    // Set the primary color
    root.style.setProperty("--primary", theme.primary);

    // Update the primary hue in both light and dark mode
    const primaryColor = theme.primary.match(/hsl\((\d+\.?\d*)/);
    if (primaryColor && primaryColor[1]) {
      const hue = primaryColor[1];
      root.style.setProperty("--primary", `${hue} 83.2% 53.3%`);

      // Also update ring color which is based on primary
      root.style.setProperty("--ring", `${hue} 83.2% 53.3%`);
    }
  };

  const handleThemeChange = (themeId: string) => {
    // Apply the selected theme
    applyThemeColors(themeId);

    // Store the theme preference
    localStorage.setItem("selectedColorTheme", themeId);
    setSelectedTheme(themeId);

    // Force a re-render of components that depend on the theme
    document.body.classList.add("theme-updated");
    setTimeout(() => {
      document.body.classList.remove("theme-updated");
    }, 100);

    setIsOpen(false);
  };

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full shadow-md"
          aria-label="Select color theme"
        >
          <Palette className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Theme Colors</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {Object.entries(themes).map(([id, theme]) => (
          <DropdownMenuItem
            key={id}
            onClick={() => handleThemeChange(id)}
            className="flex items-center gap-3 cursor-pointer py-3"
          >
            <div className="flex gap-1" aria-hidden="true">
              <div
                className="w-4 h-4 rounded-full border"
                style={{ backgroundColor: theme.primary }}
              />
              <div
                className="w-4 h-4 rounded-full border"
                style={{ backgroundColor: theme.secondary }}
              />
              <div
                className="w-4 h-4 rounded-full border"
                style={{ backgroundColor: theme.accent }}
              />
            </div>
            <span className="flex-1">{theme.name}</span>
            {selectedTheme === id && (
              <div
                className="h-2 w-2 rounded-full bg-primary"
                aria-hidden="true"
              >
                <span className="sr-only">(selected)</span>
              </div>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
