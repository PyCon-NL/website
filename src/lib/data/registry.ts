import type { AllYears, Schedule, Sponsor, Support, Speaker } from './types';
import { schedule as schedule2025 } from './2025/schedule';
import { schedule as schedule2026 } from './2026/schedule';
import { sponsors as sponsors2025 } from './2025/sponsors';
import { sponsors as sponsors2026 } from './2026/sponsors';
import { support as support2026 } from './2026/support';
import { speakers as speakers2025 } from './2025/speakers';
import { speakers as speakers2026 } from './2026/speakers';

type YearData<Y extends AllYears> = {
    schedule: Schedule<Y>;
    sponsors: Sponsor[];
    support: Support[];
    speakers: Speaker[];
};

export const yearData: { [Y in AllYears]: YearData<Y> } = {
    2025: { schedule: schedule2025, sponsors: sponsors2025, support: [], speakers: speakers2025 },
    2026: { schedule: schedule2026, sponsors: sponsors2026, support: support2026, speakers: speakers2026 },
};

// Cross-year schedule lookup used by speaker and talk detail pages.
// Object.values(allSchedules).flat() gives every slot across all years.
export const allSchedules: { [Y in AllYears]: Schedule<Y> } = {
    2025: schedule2025,
    2026: schedule2026,
};
