import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import type { ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const processDiscordImage = (
  imageHash: string | undefined,
  appID?: string,
) => {
  return imageHash?.startsWith('mp:external/')
    ? `https://media.discordapp.net/external/${imageHash.replace(
        'mp:external/',
        '',
      )}`
    : `https://cdn.discordapp.com/app-assets/${appID}/${imageHash}.webp?size=512`;
};
