"use client";

import { useState, useEffect } from "react";
import { Palette } from "lucide-react";
import { Label } from "@/components/ui/label";
import { themes } from "@/constants/themes";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export function ThemeSelector() {
  const [selectedTheme, setSelectedTheme] = useState<string>("default");
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage on component mount
  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("selectedColorTheme") || "default";
    setSelectedTheme(storedTheme);
    applyThemeColors(storedTheme);
  }, []);

  const applyThemeColors = (themeId: string) => {
    if (!themes[themeId]) return;

    // Apply the selected theme colors to CSS variables
    const root = document.documentElement;
    const theme = themes[themeId];

    // Extract the hue from the HSL color values
    const extractHue = (hslColor: string) => {
      const match = hslColor.match(/hsl\((\d+\.?\d*)/);
      return match && match[1] ? match[1] : null;
    };

    // Apply primary color
    const primaryHue = extractHue(theme.primary);
    if (primaryHue) {
      // Update light mode variables
      root.style.setProperty("--theme-primary", `${primaryHue} 83.2% 53.3%`);
      root.style.setProperty("--primary", `${primaryHue} 83.2% 53.3%`);
      root.style.setProperty("--ring", `${primaryHue} 83.2% 53.3%`);
    }

    // Apply secondary color
    const secondaryHue = extractHue(theme.secondary);
    if (secondaryHue) {
      root.style.setProperty(
        "--theme-secondary",
        `${secondaryHue} 27.9% 16.9%`
      );
    }

    // Apply accent color
    const accentHue = extractHue(theme.accent);
    if (accentHue) {
      root.style.setProperty("--theme-accent", `${accentHue} 40% 96.1%`);
    }

    // Force a re-render of components that depend on the theme
    document.body.classList.add("theme-updated");
    setTimeout(() => {
      document.body.classList.remove("theme-updated");
    }, 100);
  };

  const handleThemeChange = (themeId: string) => {
    // Apply the selected theme
    applyThemeColors(themeId);

    // Store the theme preference
    localStorage.setItem("selectedColorTheme", themeId);
    setSelectedTheme(themeId);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Palette className="h-4 w-4 text-primary" aria-hidden="true" />
        <Label htmlFor="theme-select" className="text-sm font-medium">
          Theme
        </Label>
      </div>
      <Select value={selectedTheme} onValueChange={handleThemeChange}>
        <SelectTrigger id="theme-select" className="w-[180px]">
          <SelectValue placeholder="Select a theme" />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(themes).map(([id, theme]) => (
            <SelectItem key={id} value={id} className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="flex gap-1 mr-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: theme.primary }}
                  />
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: theme.secondary }}
                  />
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: theme.accent }}
                  />
                </div>
                {theme.name}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
