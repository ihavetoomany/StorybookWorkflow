# Resurs UX Handoff Platform

Design system, Storybook, and runnable prototypes for web and app. One repo for UX handoff: components, modules, and views run fully mocked in Storybook so frontend and other teams get **usable code**, not only Figma.

## Quick start

```bash
pnpm install          # or: npx pnpm install
pnpm tokens:build     # Generate design tokens (CSS + JS)
pnpm storybook        # Start Storybook at http://localhost:6006
```

If `pnpm` is not installed globally, use `npx pnpm` for each command.

## Repo structure

| Path | Purpose |
|------|--------|
| `packages/design-tokens` | Single source: colors, spacing, typography, radius. Outputs `theme.css` (web) and `theme.js` (RN). |
| `packages/ui` | Web design system (React, Tailwind, Shadcn-style). Components, modules, views. |
| `packages/native` | React Native design system. Same structure as `ui`; consumes design tokens. |
| `apps/storybook` | Storybook: Foundations, Components, Modules, Views. Imports tokens + `@resurs-handoff/ui`. |

## Design references

- **Figma:** [Resurs UI 2.0](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0) – main UI reference. Tokens and components should align with this file.
- **Brand:** Marketing Visual Guidelines (PDF) – logo, colors, font, imagery. Tokens respect these guidelines.

## Adding components and stories

1. **Tokens:** Edit `packages/design-tokens/tokens/*.json`, then run `pnpm tokens:build`.
2. **Web:** Add or edit components in `packages/ui/src/components/` (and optionally `modules/`, `views/`). Add co-located `*.stories.tsx` for Storybook.
3. **Native:** Mirror structure in `packages/native/src/`; use `@resurs-handoff/design-tokens` for theme values.
4. **Stories:** Stories in `packages/ui` are picked up by `apps/storybook`. Add Foundations/Components/Modules/Views as needed. Keep views **fully mocked** (no API or app wiring).

## Production-ready next steps

- **Publish packages:** Scope is `@resurs-handoff/*`. To publish to npm or a private registry, add `publishConfig` and CI that runs `pnpm build` and `pnpm tokens:build`.
- **Storybook deploy:** Run `pnpm build:storybook` and host `apps/storybook/storybook-static` (e.g. Chromatic, S3, or internal host).
- **Expo / one pipeline:** If the dev team adopts one Expo pipeline (web + iOS + Android), consider one UI package (Expo/RN + RNW) and one Storybook; see plan in `.cursor/plans/` or `docs/`.
- **Figma sync:** Optionally sync tokens from Figma variables into `packages/design-tokens/tokens/` via API or token pipeline.

## Scripts

| Script | Description |
|--------|-------------|
| `pnpm install` | Install all workspace dependencies |
| `pnpm tokens:build` | Build design tokens → `packages/design-tokens/dist/` |
| `pnpm storybook` | Start Storybook (dev) on **http://localhost:6006** |
| `pnpm build:storybook` | Build static Storybook |
| `pnpm build` | Build all packages (Turbo) |

### If Storybook shows a blank page or 404 for manager-bundle.js

1. **Use the exact URL from the terminal** – After `pnpm storybook`, the terminal prints e.g. `Local: http://localhost:6006/` or `http://localhost:6011/`. Open **that** URL; the port can change if 6006 is in use.
2. **Open in a normal browser** – If you use Cursor’s embedded browser and see 404s, copy the URL and open it in Chrome, Safari, or Firefox. Embedded browsers sometimes change the base URL and break asset loading.
3. **One Storybook at a time** – Stop any other Storybook (or dev server on the same port), then run `pnpm storybook` again.
4. **Clear cache and restart** – `rm -rf apps/storybook/node_modules/.cache` then `pnpm storybook`. Hard refresh the page (Cmd+Shift+R or Ctrl+Shift+R).
