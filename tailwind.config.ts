// tailwind.config.ts
import type { Config } from "tailwindcss";

const withAlpha = (cssVar: string) =>
  `hsl(${cssVar} / <alpha-value>)`;           // enables  bg-primary/80  etc.

export default {
  darkMode: "class",                        // toggle by adding .dark to <html>

  content: ["./src/**/*.{js,jsx,ts,tsx}"],    // scan everything in /src

  theme: {
    extend: {
      /* ——— COLOURS ——— */
      colors: {
        /* generic tokens */
        background:  withAlpha("var(--color-background)"),
        foreground:  withAlpha("var(--color-foreground)"),

        card:               withAlpha("var(--color-card)"),
        "card-foreground":  withAlpha("var(--color-card-foreground)"),

        popover:            withAlpha("var(--color-popover)"),
        "popover-foreground":
                            withAlpha("var(--color-popover-foreground)"),

        primary: {
          DEFAULT:          withAlpha("var(--color-primary)"),
          foreground:       withAlpha("var(--color-primary-foreground)"),
        },

        secondary: {
          DEFAULT:          withAlpha("var(--color-secondary)"),
          foreground:       withAlpha("var(--color-secondary-foreground)"),
        },

        muted: {
          DEFAULT:          withAlpha("var(--color-muted)"),
          foreground:       withAlpha("var(--color-muted-foreground)"),
        },

        accent: {
          DEFAULT:          withAlpha("var(--color-accent)"),
          foreground:       withAlpha("var(--color-accent-foreground)"),
        },

        destructive: {
          DEFAULT:          withAlpha("var(--color-destructive)"),
          foreground:       withAlpha("var(--color-destructive-foreground)"),
        },

        border:            withAlpha("var(--color-border)"),
        ring:              withAlpha("var(--color-ring)"),

        /* chart + sidebar extras (optional) */
        "chart-1":         withAlpha("var(--color-chart-1)"),
        "chart-2":         withAlpha("var(--color-chart-2)"),
        "chart-3":         withAlpha("var(--color-chart-3)"),
        "chart-4":         withAlpha("var(--color-chart-4)"),
        "chart-5":         withAlpha("var(--color-chart-5)"),

        sidebar: {
          DEFAULT:         withAlpha("var(--color-sidebar)"),
          foreground:      withAlpha("var(--color-sidebar-foreground)"),
          primary:         withAlpha("var(--color-sidebar-primary)"),
          "primary-foreground":
                            withAlpha("var(--color-sidebar-primary-foreground)"),
          accent:          withAlpha("var(--color-sidebar-accent)"),
          "accent-foreground":
                            withAlpha("var(--color-sidebar-accent-foreground)"),
          border:          withAlpha("var(--color-sidebar-border)"),
          ring:            withAlpha("var(--color-sidebar-ring)"),
        },
      },

      /* ——— RADII ——— */
      borderRadius: {
        sm:      "var(--radius-sm)",
        DEFAULT: "var(--radius-md)",
        lg:      "var(--radius-lg)",
        xl:      "var(--radius-xl)",
      },
    },
  },

  plugins: [],
} satisfies Config;
