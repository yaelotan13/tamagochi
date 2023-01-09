export const TICK_RATE = 1000;
export const ICONS = ["fish", "poop", "weather"];
export const RAIN_CHANCE = 0.25;
export const SCENES = ["day", "rain"];
export const DAY_LENGTH = 60;
export const NIGHT_LENGTH = 10;

export const getNextHungerTime = clock => Math.floor(Math.random() * 5) + 5 + clock;
export const getNextDieTime = clock => Math.floor(Math.random() * 10) + 3 + clock;
export const getNextPoopTime = clock => Math.floor(Math.random() * 10) + 4 + clock;
