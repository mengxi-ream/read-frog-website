import { LangCodeISO6393 } from "@/types/languages";
import { useEffect, useState } from "react";

export function useGetTargetLanguage() {
  const [targetLanguage, setTargetLanguage] = useState<
    LangCodeISO6393 | undefined
  >(undefined);

  useEffect(() => {
    window.postMessage(
      {
        source: "read-frog-page",
        type: "getTargetLanguage",
      },
      "*"
    );
    window.addEventListener("message", (ev) => {
      if (ev.source !== window) return;
      const { source, type, data } = ev.data || {};
      if (source === "read-frog-ext" && type === "getTargetLanguage") {
        setTargetLanguage(data.targetLanguage);
      }
    });
  }, []);

  return targetLanguage;
}
