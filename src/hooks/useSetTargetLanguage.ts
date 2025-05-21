"use client";

import { useEffect, useState } from "react";

export function useExtensionTargetLanguage() {
  const [targetLanguage, setTargetLanguage] = useState<string | null>(null);

  useEffect(() => {
    // get target language from the web page
    const targetLanguage = document.documentElement.lang ?? "en";
    setTargetLanguage(targetLanguage);
  }, []);

  return targetLanguage;
}
