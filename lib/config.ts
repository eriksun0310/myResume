export const CONFIG = {
  email: 'erikawang1233@gmail.com',
  github: 'https://github.com/eriksun0310',
  site: 'https://ptalkbusinessweb.vercel.app/',
} as const;

/** Career start: October 2022. */
const START_YEAR = 2022;
const START_MONTH = 9; // 0-based, October

export function yearsOfExperience(now: Date = new Date()): number {
  const months = (now.getFullYear() - START_YEAR) * 12 + (now.getMonth() - START_MONTH);
  return Math.max(1, Math.floor(months / 12));
}

/** Only year and month of birth are kept here, so the full date never ends up in a public repo. */
const BIRTH_YEAR = 2000;
const BIRTH_MONTH = 2; // 0-based, March

export function ageNow(now: Date = new Date()): number {
  return now.getFullYear() - BIRTH_YEAR - (now.getMonth() < BIRTH_MONTH ? 1 : 0);
}
