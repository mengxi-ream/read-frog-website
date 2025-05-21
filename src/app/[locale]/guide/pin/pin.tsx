"use client";

import { useExtensionPinned } from "@/hooks/useExtensionPinned";

export default function Pin() {
  const isPinned = useExtensionPinned();

  return (
    <div>isPinned: {isPinned === null ? "" : isPinned ? "true" : "false"}</div>
  );
}
