# AgroStore — AGENTS.md

## Commands

| Command | Action |
|---|---|
| `npm run dev` | Dev server on `http://localhost:8080` |
| `npm run build` | Production build |
| `npm run lint` | ESLint — **only checks `.ts`/`.tsx` files** (source is `.jsx`) |
| `npm run test` | Vitest (jsdom, `src/test/setup.js`) |
| `npm run test -- --watch` | Watch mode |

## Architecture

- **All source is `.jsx`/`.js`** — TypeScript is installed but unused. Don't add `.tsx` files; the ESLint config only targets `*.ts`.
- **`@/`** path alias maps to `src/`.
- **Single-page app**: React Router with only `/` (Index) and `*` (NotFound). Nav links use `#hash` anchors.
- **Hardcoded data**: Products, supplements, and farmers are static arrays in `ProductGrid.jsx` and `Supplements.jsx`. No backend.
- **Cart**: `useCart` hook (`src/hooks/useCart.js`) persists to `localStorage` (`agrostore-cart` key).
- **Dark mode**: `next-themes` with `attribute="class"`. Variables in `.dark` block in `index.css`.
- **shadcn/ui**: Components in `src/components/ui/`. Custom button variants (`hero`, `leaf`, `harvest`, `outlineLight`).
- **Lovable scaffold**: `lovable-tagger` runs in dev mode only.

## Testing quirks

- Single placeholder test at `src/test/example.test.js`.
- No integration or E2E tests.

## Notas importantes
- Nunca hagas commit sin mi autorizacion explicita
- Nunca hagas push a git hub sin mi autorizacion explicita
- Siempre responde en español
- Los commits deben ser cortos y tecnicos
