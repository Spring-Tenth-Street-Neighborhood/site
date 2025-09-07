import constate from "constate";
import { useState } from "react";
import { browserLocalStorage } from "../browserStorage";

type Language = "en" | "es";
const LOCAL_STORAGE_KEY = "preferred-language";
const potentialDefaultLanguage = browserLocalStorage?.getItem(
  LOCAL_STORAGE_KEY
) as any;
const defaultPreferredLanguage = potentialDefaultLanguage ?? "en";
const preferredLanguage =
  typeof window !== "undefined" && navigator?.language?.startsWith("es")
    ? "es"
    : "en";

function useLanguage() {
  const [language, setLanguage] = useState<Language>(() =>
    ["en", "es"].includes(defaultPreferredLanguage)
      ? defaultPreferredLanguage
      : preferredLanguage
  );

  const setLanguageAndStore = (lang: Language) => {
    browserLocalStorage?.setItem(LOCAL_STORAGE_KEY, lang);
    setLanguage(lang);
  };
  return {
    language: language ?? "en",
    setLanguage: setLanguageAndStore,
  };
}

export const [LanguageProvider, useLanguageContext] = constate(useLanguage);
