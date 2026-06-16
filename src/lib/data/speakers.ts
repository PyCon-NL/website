import type { Speaker } from './types';
import { speakers as speakers2025 } from './2025/speakers';
import { speakers as speakers2026 } from './2026/speakers';

// Aggregates all years. Deduplicates by ID so that a speaker who returns
// in a future year gets a merged years[] and a single profile URL.
const allYearSpeakers = [...speakers2025, ...speakers2026];

const speakerMap = new Map<number, Speaker>();
for (const speaker of allYearSpeakers) {
    const existing = speakerMap.get(speaker.id);
    if (existing) {
        existing.years = [...new Set([...existing.years, ...speaker.years])];
    } else {
        speakerMap.set(speaker.id, { ...speaker });
    }
}

export const speakers: Speaker[] = Array.from(speakerMap.values());
