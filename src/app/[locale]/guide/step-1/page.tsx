"use client";

import { useExtensionTargetLanguage } from "@/hooks/useSetTargetLanguage";

export default function Step1Page() {
  const targetLanguage = useExtensionTargetLanguage();
  return <div>{targetLanguage}</div>;
}
