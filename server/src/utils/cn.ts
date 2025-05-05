import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...args: ClassValue[]) {
    // see https://github.com/dcastil/tailwind-merge
    // see https://github.com/lukeed/clsx
    return twMerge(clsx(args))
  }