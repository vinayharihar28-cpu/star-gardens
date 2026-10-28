/**
 * Utility to manage the 6-hour viewing cookie & localStorage state
 * for Star Gardens multilingual brand introduction / loading screen.
 */

export const INTRO_COOKIE_NAME = "sg_welcome_seen";
export const INTRO_STORAGE_KEY = "sg_welcome_seen_until";
export const SIX_HOURS_SECONDS = 6 * 60 * 60; // 21,600 seconds = 6 hours
export const SIX_HOURS_MS = SIX_HOURS_SECONDS * 1000; // 21,600,000 milliseconds

/**
 * Checks if the user has seen the welcome screen within the last 6 hours.
 * Supports '?replay=1' or '?intro=1' query parameter to force replay for testing.
 */
export function hasViewedIntroInLast6Hours(): boolean {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return false;
  }

  try {
    // If explicit query parameter to replay is present, allow replay and clear cookie
    const search = window.location.search;
    if (search.includes("replay=1") || search.includes("intro=1")) {
      clearIntroCookie();
      return false;
    }

    // 1. Check document.cookie
    const cookieMatch = document.cookie.match(
      new RegExp(`(?:^|;\\s*)${INTRO_COOKIE_NAME}=1`)
    );
    if (cookieMatch) {
      return true;
    }

    // 2. Check localStorage fallback (in case cookies are restricted or partitioned)
    const storedUntil = localStorage.getItem(INTRO_STORAGE_KEY);
    if (storedUntil) {
      const expiry = parseInt(storedUntil, 10);
      if (!isNaN(expiry) && Date.now() < expiry) {
        // Synchronize back to document.cookie as well
        setIntroCookie();
        return true;
      } else {
        // Expired
        localStorage.removeItem(INTRO_STORAGE_KEY);
      }
    }
  } catch (err) {
    console.warn("Error reading intro cookie:", err);
  }

  return false;
}

/**
 * Marks the intro as viewed for 6 hours across both document.cookie and localStorage.
 */
export function setIntroCookie(): void {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return;
  }

  try {
    const expiresDate = new Date(Date.now() + SIX_HOURS_MS).toUTCString();

    // Set cookie valid for 6 hours (21,600 seconds)
    document.cookie = `${INTRO_COOKIE_NAME}=1; max-age=${SIX_HOURS_SECONDS}; expires=${expiresDate}; path=/; SameSite=Lax`;

    // Also persist expiry timestamp in localStorage
    localStorage.setItem(INTRO_STORAGE_KEY, (Date.now() + SIX_HOURS_MS).toString());

    // Mark the document root so CSS immediately hides the loading screen on subsequent views
    document.documentElement.classList.add("sg-welcome-dismissed");
  } catch (err) {
    console.warn("Error setting intro cookie:", err);
  }
}

/**
 * Clears the intro cookie and localStorage (useful for development or replay).
 */
export function clearIntroCookie(): void {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return;
  }

  try {
    document.cookie = `${INTRO_COOKIE_NAME}=; max-age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Lax`;
    localStorage.removeItem(INTRO_STORAGE_KEY);
    document.documentElement.classList.remove("sg-welcome-dismissed");
  } catch (err) {
    console.warn("Error clearing intro cookie:", err);
  }
}
