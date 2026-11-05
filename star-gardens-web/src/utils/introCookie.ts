/**
 * Utility to manage viewing state for Star Gardens multilingual brand introduction / loading screen.
 */

export const INTRO_COOKIE_NAME = "sg_welcome_seen";
export const INTRO_STORAGE_KEY = "sg_welcome_seen_until";
export const SIX_HOURS_SECONDS = 6 * 60 * 60; // 21,600 seconds = 6 hours
export const SIX_HOURS_MS = SIX_HOURS_SECONDS * 1000; // 21,600,000 milliseconds

/**
 * Checks if the user has seen the welcome screen.
 * Supports '?replay=1' or '?intro=1' query parameter to force replay.
 */
export function hasViewedIntroInLast6Hours(): boolean {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return false;
  }

  try {
    const search = window.location.search || "";
    if (search.includes("replay=1") || search.includes("intro=1")) {
      clearIntroCookie();
      return false;
    }

    // In local development, check sessionStorage so navigation doesn't replay endlessly,
    // but a fresh reload/tab allows proper testing.
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
      return !!sessionStorage.getItem("sg_welcome_session_seen");
    }

    // 1. Check document.cookie
    const cookieMatch = document.cookie.match(
      new RegExp(`(?:^|;\\s*)${INTRO_COOKIE_NAME}=1`)
    );
    if (cookieMatch) {
      return true;
    }

    // 2. Check localStorage fallback
    const storedUntil = localStorage.getItem(INTRO_STORAGE_KEY);
    if (storedUntil) {
      const expiry = parseInt(storedUntil, 10);
      if (!isNaN(expiry) && Date.now() < expiry) {
        return true;
      } else {
        localStorage.removeItem(INTRO_STORAGE_KEY);
      }
    }
  } catch (err) {
    console.warn("Error reading intro cookie:", err);
  }

  return false;
}

/**
 * Marks the intro as viewed. Call this ONLY after the welcome sequence finishes fading out!
 */
export function setIntroCookie(): void {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return;
  }

  try {
    sessionStorage.setItem("sg_welcome_session_seen", "1");

    const expiresDate = new Date(Date.now() + SIX_HOURS_MS).toUTCString();
    document.cookie = `${INTRO_COOKIE_NAME}=1; max-age=${SIX_HOURS_SECONDS}; expires=${expiresDate}; path=/; SameSite=Lax`;
    localStorage.setItem(INTRO_STORAGE_KEY, (Date.now() + SIX_HOURS_MS).toString());

    // Mark root so subsequent page navigations bypass the intro
    document.documentElement.classList.add("sg-welcome-dismissed");
  } catch (err) {
    console.warn("Error setting intro cookie:", err);
  }
}

/**
 * Clears the intro cookie and storage state.
 */
export function clearIntroCookie(): void {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return;
  }

  try {
    sessionStorage.removeItem("sg_welcome_session_seen");
    document.cookie = `${INTRO_COOKIE_NAME}=; max-age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Lax`;
    localStorage.removeItem(INTRO_STORAGE_KEY);
    document.documentElement.classList.remove("sg-welcome-dismissed");
  } catch (err) {
    console.warn("Error clearing intro cookie:", err);
  }
}
