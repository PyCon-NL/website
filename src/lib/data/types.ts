import { YEAR } from '$lib/config';

// Extend this union each year
const rooms2025 = ["Progress", "Quest"] as const;
const rooms2026 = [] as const;

const timeSlots2025 = ["08:00", "09:30", "09:45", "10:30", "10:45", "11:25", "12:05", "12:35", "13:30", "14:05", "14:35", "14:50", "15:25", "15:55", "16:10", "16:55", "17:05"] as const;
const timeSlots2026 = [] as const;

export const rooms = {
    2025: rooms2025,
    2026: rooms2026,
} as const;

export const timeSlots = {
    2025: timeSlots2025,
    2026: timeSlots2026,
} as const;

export type AllYears = keyof typeof rooms;
export type Year = AllYears; // backward-compat alias
export type CurrentYear = typeof YEAR;

export const currentYear: CurrentYear = YEAR;

export type Tier = "platinum" | "gold" | "silver" | "bronze";

export type Sponsor = {
    tier: Tier;
    name: string;
    logo: string;
    url?: string;
};

export type Speaker = {
    id: number;
    name: string;
    position: string;
    company?: string;
    image?: string;
    bio: string;
    years: AllYears[];
};

export type Room<Y extends AllYears> = (typeof rooms)[Y][number];

interface Talk<Y extends AllYears> {
    year: Y;
    id: number;
    title: string;
    description: string;
    speakerId: number;
}

interface SingleTrackTalk<Y extends AllYears> extends Talk<Y> {
    type: "talk";
    trackType: "single";
    room: Room<Y>;
    multiSlot?: number;
}

interface CommonTalk<Y extends AllYears> extends Talk<Y> {
    type: "talk";
    trackType: "common";
    room: string;
}

interface SingleTrackEvent<Y extends AllYears> {
    type: "other";
    trackType: "single";
    title: string;
    room: Room<Y>;
}

interface CommonEvent {
    type: "other";
    trackType: "common";
    title: string;
    description?: string;
}

export type Slot<Y extends AllYears> = (SingleTrackTalk<Y> | CommonTalk<Y> | SingleTrackEvent<Y> | CommonEvent) & {
    timeSlot: (typeof timeSlots)[Y][number];
};

export type Schedule<Y extends AllYears> = Slot<Y>[];

export function initials(speaker: Speaker) {
    const parts = speaker.name.split(" ");
    return parts[0].at(0)!.toUpperCase() + parts[parts.length - 1].at(0)!.toUpperCase();
}
