# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Use **bun** as the package manager (not npm/yarn/pnpm).

```bash
bun dev        # Start development server
bun build      # Production build
bun start      # Start production server
bun lint       # Run ESLint
```

## Architecture

Next.js 16 app with the App Router, React 19, TypeScript (strict), Tailwind CSS v4, and shadcn/ui (new-york style).

**Path alias:** `@/*` maps to `src/app/*`. Everything under `src/app/` is the root for imports — so `@/components/UI/header` resolves to `src/app/components/UI/header`.

**Key config note:** `tsconfig.json` sets `baseUrl: "src/app/"`, meaning bare imports (without `@/`) also resolve from `src/app/`.

**Component locations:**
- `src/app/components/UI/` — layout-level UI (Header, Footer)
- `src/app/components/ui/` — shadcn-generated components (added via `bunx shadcn add <component>`)
- `src/lib/utils.ts` — `cn()` utility (clsx + tailwind-merge)

**Styling:** Tailwind v4 with CSS variables defined in `src/app/globals.css`. The color palette is amber/orange/rose themed. Dark mode uses the `.dark` class variant.

**shadcn/ui:** Configured in `components.json` with `rsc: true`, icon library is lucide-react. Add new components with `bunx shadcn add <component>`.
