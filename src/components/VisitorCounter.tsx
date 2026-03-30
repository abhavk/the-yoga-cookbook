"use client";

import { useMemo } from "react";

const STORAGE_KEY = "food-for-the-soul-visitor-count";
const VISITOR_INCREMENT = 1;
const VISITOR_BASELINE = 128;

function getVisitorCount() {
  if (typeof window === "undefined") {
    return null;
  }

  const storedCount = window.localStorage.getItem(STORAGE_KEY);
  const parsedCount = storedCount ? Number(storedCount) : VISITOR_BASELINE;
  const safeCount = Number.isFinite(parsedCount) ? parsedCount + VISITOR_INCREMENT : VISITOR_BASELINE;

  window.localStorage.setItem(STORAGE_KEY, String(safeCount));

  return safeCount;
}

export default function VisitorCounter() {
  const visitorCount = useMemo(() => getVisitorCount(), []);

  return (
    <div className="text-center md:text-right">
      <p className="mb-2 font-[family-name:var(--font-sans)] text-[0.7rem] font-medium uppercase tracking-[0.14em] text-text-muted">
        Visitors
      </p>
      <p className="font-[family-name:var(--font-sans)] text-sm text-text-muted">
        {visitorCount === null ? "Loading..." : `${visitorCount.toLocaleString()} page visits`}
      </p>
    </div>
  );
}
