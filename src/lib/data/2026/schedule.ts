import type { Schedule } from '../types';

export const schedule: Schedule<2026> = [
  {
    type: "other",
    trackType: "common",
    title: "Walk-in",
    timeSlot: "08:00",
  },
  {
    type: "other",
    trackType: "common",
    title: "Welcome",
    timeSlot: "09:30",
  },
  {
    type: "talk",
    trackType: "common",
    title: "Keynote - TBA",
    description: ``,
    room: "Polars",
    speakerId: 99,
    timeSlot: "09:45",
    year: 2026,
    id: 1,
  },
  {
    type: "other",
    trackType: "common",
    title: "Break",
    timeSlot: "10:30",
  },
  {
    type: "talk",
    trackType: "single",
    title: "Community Organizers sprint",
    description: "weuifhjwiuegfhui",
    room: "Flash",
    speakerId: 15,
    timeSlot: "10:45",
    year: 2026,
    id: 2,
    multiSlot: 2
  },
  {
    type: "other",
    trackType: "common",
    title: "Lunch",
    timeSlot: "12:35",
  },
  {
    type: "other",
    trackType: "common",
    title: "Break",
    timeSlot: "14:35",
  },
  {
    type: "other",
    trackType: "common",
    title: "Break",
    timeSlot: "15:55",
  },
  {
    type: "other",
    trackType: "common",
    title: "Closing",
    timeSlot: "16:55",
  },
  {
    type: "other",
    trackType: "common",
    title: "Drinks & Snacks",
    timeSlot: "17:05",
  },
];
