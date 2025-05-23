"use client";

import { LangCodeISO6393, LOCALE_TO_ISO6393 } from "@/types/languages";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

export function useExtensionTargetLanguage(): [
  LangCodeISO6393 | undefined,
  (langCodeISO6393: LangCodeISO6393) => void
] {
  const [targetLanguage, setTargetLanguage] = useState<
    LangCodeISO6393 | undefined
  >(undefined);
  const locale = useLocale();

  useEffect(() => {
    // get target language from the web page
    const websiteLanguage = LOCALE_TO_ISO6393[locale] ?? "eng";
    updateTargetLanguage(websiteLanguage);
  }, []);

  const updateTargetLanguage = (langCodeISO6393: LangCodeISO6393) => {
    // send message to extension to set target language
    window.postMessage(
      {
        source: "read-frog-page",
        type: "setTargetLanguage",
        langCodeISO6393: langCodeISO6393,
      },
      "*"
    );
    setTargetLanguage(langCodeISO6393);
  };

  return [targetLanguage, updateTargetLanguage];
}
