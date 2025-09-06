import constate from "constate";
import { useState } from "react";

type Language = "en" | "es";
const LOCAL_STORAGE_KEY = "preferred-language";
const defaultPreferredLanguage = localStorage.getItem(LOCAL_STORAGE_KEY) as any;
const preferredLanguage = navigator.language?.startsWith("es") ? "es" : "en";

function useLanguage() {
  const [language, setLanguage] = useState<Language>(() =>
    ["en", "es"].includes(defaultPreferredLanguage)
      ? defaultPreferredLanguage
      : preferredLanguage ?? "en"
  );

  const setLanguageAndStore = (lang: Language) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, lang);
    setLanguage(lang);
  };
  return {
    language,
    setLanguage: setLanguageAndStore,
  };
}

export const [LanguageProvider, useLanguageContext] = constate(useLanguage);
