/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "var(--resurs-color-border-default)",
        input: "var(--resurs-color-border-default)",
        ring: "var(--resurs-color-primary-500)",
        background: "var(--resurs-color-background-paper)",
        foreground: "var(--resurs-color-foreground-default)",
        primary: {
          DEFAULT: "var(--resurs-color-primary-main)",
          foreground: "var(--resurs-color-primary-contrast)",
        },
        muted: {
          DEFAULT: "var(--resurs-color-background-muted)",
          foreground: "var(--resurs-color-foreground-muted)",
        },
      },
      borderRadius: {
        lg: "var(--resurs-radius-lg)",
        md: "var(--resurs-radius-md)",
        sm: "var(--resurs-radius-sm)",
      },
    },
  },
  plugins: [],
};
