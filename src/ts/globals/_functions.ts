/**
 * Utility functions for general use
 */

/**
 * Generate a random whole number between min and max
 */
export function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Select a random item from an array
 */
export function randomFrom<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Shuffle an array in place using Fisher-Yates algorithm
 */
export function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Format a number with commas (e.g., 10232021 → "10,232,021")
 */
export function addCommas(x: number): string {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * Find the index of an item in an array
 * Returns the index if found, null otherwise
 */
export function findInArray<T>(haystack: T[], needle: T): number | null {
  const index = haystack.indexOf(needle);
  return index > -1 ? index : null;
}

/**
 * Remove all occurrences of an item from an array
 */
export function removeFromArray<T>(haystack: T[], needle: T): void {
  for (let i = haystack.length - 1; i >= 0; i--) {
    if (haystack[i] === needle) {
      haystack.splice(i, 1);
    }
  }
}

/**
 * Calculate what percentage 'part' is of 'total'
 */
export function percentOf(total: number, part: number): number {
  if (total === 0 || part === 0) {
    return 0;
  }
  return Math.round((part * 100) / total);
}

/**
 * Send an event to Google Analytics
 * @param category - Event category
 * @param action - Event action
 * @param label - Event label (optional)
 * @param value - Event value (optional, must be a number)
 */
export function sendEvent(
  category: string,
  action: string,
  label?: string,
  value?: number,
): void {
  // Check if GA is available
  if (typeof ga !== "undefined") {
    const eventData: any = {
      eventCategory: category,
      eventAction: action,
    };

    if (label) {
      eventData.eventLabel = label;
    }

    if (value !== undefined) {
      eventData.eventValue = value;
    }

    ga("send", "event", eventData);
    // Uncomment for debugging:
    // console.log('Event sent:', eventData);
  }
}

// Type declaration for Google Analytics
declare const ga: any;
