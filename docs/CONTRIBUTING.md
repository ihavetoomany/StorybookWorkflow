# Contributing to the handoff platform

## Who this is for

- **UX / Design:** Add or update components, modules, and views; add stories so everything is visible in Storybook. No Figma-only handoff—the runnable design lives here.
- **Frontend (web and app):** Use Storybook to inspect and implement; import from `@resurs-handoff/ui` (web) or `@resurs-handoff/native` (RN). Same tokens and specs across teams.
- **Other teams (pure web):** Use the web slice (tokens + `@resurs-handoff/ui`) and Storybook as the reference.

## Design system layers

1. **Foundations** – Colors, typography, spacing (tokens). Shown in Storybook under Foundations.
2. **Components** – Buttons, inputs, cards, etc. Co-locate `*.stories.tsx` next to the component.
3. **Modules** – Composed blocks (e.g. Header, FormSection, ProductCard). Same pattern: component + stories.
4. **Views / Interfaces** – Full screens, 100% mocked. Data via props or story-level mocks; no `fetch`, no app routing.

## Rules for views

- Views are **presentational**: they receive data as props or from story args.
- All data in Storybook is **mock data** (e.g. `mockData` in the story file). No real API or backend.
- This keeps the design layer runnable and reusable for prototypes and handoff.

## Aligning with Figma and brand

- **Resurs UI 2.0 (Figma)** is the main reference for component structure and styling. When adding or changing components, keep names and variants aligned so devs can match Figma and code.
- **Marketing Visual Guidelines (PDF)** define brand (logo, imagery, font). Tokens (colors, type) should respect these; update `packages/design-tokens/tokens/` and run `pnpm tokens:build`.

## Taking this to production

- See README “Production-ready next steps” for publishing packages, deploying Storybook, and optional Expo/one-pipeline migration.
