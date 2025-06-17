import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Passa a Bola Brand Colors
        brand: {
          primary: "#FF33A8", // Hot Pink
          secondary: "#FF80C2", // Light Pink
          hover: "#E6007E", // Darker pink for hover states
        },
        // Design System Colors
        neutral: {
          light: "#666", // Light gray
          dark: "#333", // Dark gray
          footer: "#999", // Footer text
        },
        // Existing shadcn colors (keeping for compatibility)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#FF33A8",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "#FF80C2",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      fontSize: {
        // Typography system for Passa a Bola
        h1: ["32px", { fontWeight: "700", lineHeight: "1.2" }], // H1: 32px, Bold
        h2: ["18px", { fontWeight: "600", lineHeight: "1.3" }], // H2: 18px, Semi-Bold
        body: ["16px", { fontWeight: "400", lineHeight: "1.5" }], // Body: 16px, Regular
        caption: ["14px", { fontWeight: "400", lineHeight: "1.4" }], // Caption: 14px, Regular
        footer: ["12px", { fontWeight: "400", lineHeight: "1.3" }], // Footer: 12px
      },
      spacing: {
        // Component specific spacing
        "btn-height": "48px", // Button height
        "input-height": "48px", // Input height
        "top-bar-desktop": "64px", // Desktop top bar height
        "top-bar-mobile": "56px", // Mobile top bar height
      },
      width: {
        "btn-primary": "240px", // Primary button width
        "btn-secondary": "200px", // Secondary button width
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      screens: {
        // Breakpoint targets
        mobile: "375px",
        desktop: "1440px",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
