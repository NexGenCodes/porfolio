interface Theme {
  name: string
  primary: string
  secondary: string
  accent: string
}

export const themes: Record<string, Theme> = {
  default: {
    name: "NexGen Blue",
    primary: "hsl(221.2 83.2% 53.3%)", // Higher contrast blue
    secondary: "hsl(215 27.9% 16.9%)",
    accent: "hsl(210 40% 96.1%)",
  },
  purple: {
    name: "Cosmic Purple",
    primary: "hsl(262.1 83.3% 57.8%)", // Higher contrast purple
    secondary: "hsl(263.4 70% 50.4%)",
    accent: "hsl(221.2 83.2% 53.3%)",
  },
  emerald: {
    name: "Emerald",
    primary: "hsl(142.1 76.2% 36.3%)", // Higher contrast green
    secondary: "hsl(160 84.1% 39.4%)",
    accent: "hsl(181.3 100% 41.6%)",
  },
  sunset: {
    name: "Sunset",
    primary: "hsl(20.5 90.2% 48.2%)", // Higher contrast orange
    secondary: "hsl(47.9 95.8% 53.1%)",
    accent: "hsl(339.6 89.6% 68%)",
  },
  midnight: {
    name: "Midnight",
    primary: "hsl(217.2 91.2% 59.8%)", // Higher contrast blue
    secondary: "hsl(215.3 25% 26.7%)",
    accent: "hsl(198 93.2% 59.6%)",
  },
}
