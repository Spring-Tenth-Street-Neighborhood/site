export const isBrowser = typeof window !== "undefined";

export const browserLocalStorage = isBrowser ? window.localStorage : null;
