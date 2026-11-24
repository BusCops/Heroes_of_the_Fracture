# Heroes of the Fracture - Project Context

## Current Frontend Stack

- Vite 8
- React 19
- TypeScript 7
- Phaser 4
- Tailwind CSS 4
- Zustand 5
- Axios
- Oxlint

The frontend is isolated in `frontend/`. It is a fresh Vite React TypeScript template, with Phaser, Tailwind CSS, Zustand, and Axios already listed in `frontend/package.json`. Tailwind is installed but has not yet been connected in `frontend/vite.config.ts` or imported as a stylesheet.

## Frontend Folder Structure

```text
frontend/
  public/
    favicon.svg
    icons.svg
  src/
    assets/
      hero.png
      react.svg
      vite.svg
    App.css
    App.tsx
    index.css
    main.tsx
  index.html
  package.json
  vite.config.ts
  tsconfig.json
  tsconfig.app.json
  tsconfig.node.json
  README.md
```

## Core Game Rules

- Render the game in a landscape 1280x720 canvas.
- Use a 5v5 team layout: 2 heroes in the front and 3 heroes in the back for each side.
- Run sequential turn-based combat, with each unit taking its turn in order.
- Keep gameplay centered on idle RPG progression and combat.
- Use a Western comic-book visual style with bold ink outlines, halftone textures, exaggerated poses, and high-impact effects.
- Use comic callouts for key moments, including impact terms such as "BAM!" and "CRIT!".

## Maintenance Rule

Keep `PROJECT_CONTEXT.md` updated automatically every time a feature is completed, a file is added, or the architecture changes. Record the change clearly in the relevant section and update "Current Status & Next Step" when the development step advances.

## Global Design-Token Foundation

`frontend/src/index.css` is the single source of truth for the application's global visual design tokens.

- Tailwind CSS 4 is connected through `@tailwindcss/vite` and loaded with `@import "tailwindcss";`.
- The `@theme` block defines the palette, rarity colors, text/ink colors, border widths, role-based radii, hard shadows, HUD spacing and gaps, skew/tilt angles, and typography families as global CSS/Tailwind theme variables.
- The reusable `.text-ink-outline`, `.bg-halftone`, `.comic-panel`, and `.comic-btn` classes use these global tokens directly.
- Cosmic dark sections use the deep indigo surface tokens (`--color-bg-cosmic` and `--color-bg-cosmic-deep`) with cyan-to-magenta fracture accents.
- Story and hero roster sections use the vintage cream and pastel surface tokens to create a warm comic-paper theme.
- Sharp comic geometry uses `0px` panel/card/button radii, `3px`–`4px` ink borders, and the `6px 6px 0` medium hard-shadow token.
- `.section-cosmic`, `.section-paper`, `.comic-card-light`, and `.fracture-rift-gradient` provide reusable dual-surface section styles.

### Component Styling Rule

Never hardcode hex colors, pixel border widths, shadow offsets, or arbitrary radii inside components. Use the global CSS custom properties and Tailwind theme utilities from `frontend/src/index.css` for all colors, borders, shadows, radii, spacing, and typography. Components may use local layout values only where a global token is not applicable.

## Current Status & Next Step

- **Status:** Step 1 - Global Design-Token Foundation
- **Next step:** Build UI screens and components using the global Tailwind theme and comic utility classes.
