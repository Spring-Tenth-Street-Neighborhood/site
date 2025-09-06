import constate from "constate";
import { useState } from "react";

type Language = "en" | "es";
const LOCAL_STORAGE_KEY = "preferred-language";

function useLanguage() {
  const [language, setLanguage] = useState<Language>(
    () => (localStorage.getItem(LOCAL_STORAGE_KEY) as Language) || "en"
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
