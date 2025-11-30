import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateInviteCode(length: number) {
  const CHARACTERS =
    'ABCDEFGHIKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    result += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length));
  }

  return result;
}

export function snakeCaseToTitleCase(str: string) {
  return str
    .toLocaleLowerCase()
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (char) => char.toLocaleUpperCase());
}
