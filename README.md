<img align="right" width="250" alt="Pycon-nl.org logo" src="./static/marketing/socials.png">

# Pycon-nl.org

Here's the code of the website [pycon-nl.org](https://pycon-nl.org/).

## Tech stack

- [SvelteKit](https://kit.svelte.dev/) & [Svelte](https://svelte.dev/)
  - Using the [SvelteKit Static Adapter](https://kit.svelte.dev/docs/adapter-static).
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- Hosted on Github Pages
- [Prettier](https://prettier.io/) for code formatting

## Running

This should do it all:

```bash
npm i
npm run dev
```

### Releasing

Releasing is as simple as pushing/merging to main. For more information about how older versions of the site are injected, see https://github.com/code-star/event-ops-template.

## Preparing for a new conference year

### 1. Update `src/lib/config.ts`

This is the first place to update. It controls what the whole site displays:

- `YEAR` — the current conference year
- `CONFERENCE_DATE`, `CONFERENCE_DAY`, `PAPERS_PROPOSAL_DEADLINE`, `CONFERENCE_VENUE`
- `TICKETS_URL`, `PAPERS_FORM_URL`, `VOLUNTEERS_FORM_URL` — update or replace with new links
- `PLATINUM_PRICE`, `GOLD_PRICE`, `SILVER_PRICE`, `BRONZE_PRICE` — adjust if pricing changes
- `HIDE_CALL_FOR_PAPERS`, `HIDE_CALL_FOR_VOLUNTEERS` — toggle visibility of those pages

> After changing `YEAR`, verify all links and dates are correct before publishing.

### 2. Update `src/lib/data/types.ts`

Add the new year to the `rooms` and `timeSlots` objects (use empty arrays until confirmed):

```ts
const rooms2026 = [] as const;           // fill in when venue rooms are known
const timeSlots2026 = [] as const;       // fill in when programme is set

export const rooms = {
    2025: rooms2025,
    2026: rooms2026,   // ← add this
} as const;
```

The `AllYears` union type is derived automatically from the `rooms` keys — no manual update needed.

### 3. Fill in the year data folders

Each year has its own folder under `src/lib/data/<year>/` with three files:

| File | When to fill in |
|---|---|
| `schedule.ts` | As the programme is finalised |
| `speakers.ts` | As speakers are confirmed |
| `sponsors.ts` | As sponsors are confirmed |

Until data is added the site shows graceful fallbacks:
- **Schedule page** → "Coming soon"
- **Speakers page** → "Speakers coming soon" placeholder
- **Sponsors page** → nothing shown

### 4. Archiving past years

Nothing to do — past year data lives in its own folder (e.g. `data/2025/`) and is never removed. Speaker profile pages (`/speakers/[id]`) and talk detail pages automatically reflect the full history via the `allSchedules` registry.

If a speaker returns in a future year, add them again to that year's `speakers.ts` using the **same `id`**. The aggregator in `data/speakers.ts` will merge their `years[]` array so their profile page lists all their talks across editions.
