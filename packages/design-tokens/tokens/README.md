# Design tokens – Resurs UI 2.0 & brand guidelines

These token files are the single source for colors, spacing, typography, and radius. They align with:

- **Figma:** [Resurs UI 2.0](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=0-1&m=dev) — **color scheme:** [6254:1365](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=6254-1365&m=dev), **color guidelines (full palettes):** [8237:719](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=8237-719&m=dev), **typography:** [6260:3001](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=6260-3001&m=dev)
- **Brand:** Marketing Visual Guidelines (e.g. `2601_Brand_Resurs_VisualGuidelines.pdf`)

## Current values

- **Colors:** Primary (Resurs Green 700 #117069), Resurs Green/Mint/Sand/Night/Greige/Yellow/Dusk, Neutral, Red/Amber/Lime/Cyan, Black/White (with opacity), background/foreground/border, semantic (error/success/warning/info). Synced from Figma color scheme (6254:1365) and color guidelines (8237:719).
- **Typography:** System font stack and scale; update with brand web font and fallback from the guidelines.
- **Spacing / radius:** Standard scale; sync with Resurs UI 2.0 if different.

## Syncing from Figma (Figma Desktop MCP)

When the **Figma Desktop** MCP is available and Resurs UI 2.0 is open in Figma:

1. **Open the file** in Figma Desktop: [Resurs UI 2.0](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=0-1&m=dev)
2. **Get variable definitions:** Use the MCP tool `get_variable_defs` with:
   - **nodeId `6254:1365`** for [color scheme](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=6254-1365&m=dev)
   - **nodeId `8237:719`** for [color guidelines](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=8237-719&m=dev) (Resurs Green/Mint/Sand/Night, Red/Amber/Lime/Cyan, Black/White)
   - **nodeId `6260:3001`** for [typography](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=6260-3001&m=dev)
   Or leave nodeId empty and select the frame in Figma first.
3. **Map Figma variables to these files:** Copy the returned variable names and values into the right token file:
   - Color variables → `colors.json` (e.g. primary.500, neutral.100, semantic.success)
   - Typography (font, size, weight) → `typography.json`
   - Spacing → `spacing.json`
   - Border radius → `radius.json`
4. Run **`pnpm tokens:build`** from the repo root to regenerate `dist/theme.css` and `dist/theme.js`.

If `get_variable_defs` returns `{}`, try selecting a different node (e.g. a component that uses the theme) or use **`get_design_context`** with that node’s id to get design context that may include resolved color/type values.

## Manual sync (without MCP)

1. In Figma, open Resurs UI 2.0 and copy variable values from **Local variables** (or the design-tokens page).
2. Update the corresponding `tokens/*.json` keys (e.g. `color.primary.500`, `fontSize.base`).
3. Run `pnpm tokens:build` (or `pnpm run build` in this package).

## Files

| File        | Contents                          |
|------------|------------------------------------|
| `colors.json`   | Primary, neutral, background, foreground, semantic |
| `typography.json` | fontFamily, fontSize, fontWeight, lineHeight |
| `spacing.json`  | Spacing scale                      |
| `radius.json`   | Border radius                      |
