/**
 * Design tokens build: tokens/*.json → dist/theme.css + dist/theme.js
 * Align with Resurs UI 2.0 (Figma) and marketing Visual Guidelines.
 */
const fs = require("fs");
const path = require("path");

const TOKENS_DIR = path.join(__dirname, "tokens");
const DIST_DIR = path.join(__dirname, "dist");

function loadTokens() {
  const files = fs.readdirSync(TOKENS_DIR).filter((f) => f.endsWith(".json"));
  const merged = {};
  for (const file of files) {
    const content = JSON.parse(
      fs.readFileSync(path.join(TOKENS_DIR, file), "utf-8")
    );
    Object.assign(merged, content);
  }
  return merged;
}

function toCssVars(obj, prefix = "--resurs") {
  const lines = [];
  for (const [key, value] of Object.entries(obj)) {
    const name = prefix + "-" + key.replace(/([A-Z])/g, "-$1").toLowerCase();
    if (value && typeof value === "object" && !Array.isArray(value)) {
      lines.push(...toCssVars(value, name));
    } else {
      lines.push(`  ${name}: ${value};`);
    }
  }
  return lines;
}

function toJsTheme(obj) {
  const out = {};
  for (const [key, value] of Object.entries(obj)) {
    const jsKey = key.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    if (value && typeof value === "object" && !Array.isArray(value)) {
      out[jsKey] = toJsTheme(value);
    } else {
      out[jsKey] = value;
    }
  }
  return out;
}

const tokens = loadTokens();

// CSS custom properties (for web / Tailwind)
const cssLines = [
  "/* Resurs design tokens – generated from tokens/*.json */",
  ":root {",
  ...toCssVars(tokens),
  "}",
  "",
].join("\n");

// JS theme (for React Native / Tailwind config)
const jsTheme = toJsTheme(tokens);
const jsContent = [
  "/** Resurs design tokens – for React Native and JS consumers */",
  "module.exports = " + JSON.stringify(jsTheme, null, 2) + ";",
  "",
].join("\n");

const dtsContent = [
  "/** Resurs design tokens – TypeScript types */",
  "export interface ResursTheme {",
  "  color: typeof import('./theme.js').default.color;",
  "  spacing: typeof import('./theme.js').default.spacing;",
  "  fontFamily: typeof import('./theme.js').default.fontFamily;",
  "  fontSize: typeof import('./theme.js').default.fontSize;",
  "  fontWeight: typeof import('./theme.js').default.fontWeight;",
  "  lineHeight: typeof import('./theme.js').default.lineHeight;",
  "  letterSpacing: typeof import('./theme.js').default.letterSpacing;",
  "  typeStyles: typeof import('./theme.js').default.typeStyles;",
  "  radius: typeof import('./theme.js').default.radius;",
  "}",
  "declare const theme: ResursTheme;",
  "export default theme;",
  "",
].join("\n");

if (!fs.existsSync(DIST_DIR)) fs.mkdirSync(DIST_DIR, { recursive: true });
fs.writeFileSync(path.join(DIST_DIR, "theme.css"), cssLines);
fs.writeFileSync(path.join(DIST_DIR, "theme.js"), jsContent);
fs.writeFileSync(path.join(DIST_DIR, "theme.d.ts"), dtsContent);

console.log("Design tokens built → dist/theme.css, dist/theme.js, dist/theme.d.ts");
