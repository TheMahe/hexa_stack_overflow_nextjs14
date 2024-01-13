import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// In your @/lib/utils file
export const removeKeysFromQuery = ({ params, keysToRemove }) => {
  const searchParams = new URLSearchParams(params);

  keysToRemove.forEach((key) => {
    searchParams.delete(key);
  });

  return searchParams.toString();
};
