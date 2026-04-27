import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function shortenTag(tag: string | null | undefined): string {
  if (!tag) return "";
  // Strip registry prefix (e.g. localhost:8080/adroit/my-portfolio:tag -> adroit/my-portfolio:tag)
  // Or even shorter: my-portfolio:tag
  const parts = tag.split('/');
  return parts[parts.length - 1]; // Just return the last part (repo:tag)
}
