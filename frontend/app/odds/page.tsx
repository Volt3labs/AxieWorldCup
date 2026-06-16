"use client";

import { Suspense } from "react";
import OddsContent from "./OddsContent";

export default function OddsPage() {
  return (
    <Suspense fallback={<div className="status">Loading odds...</div>}>
      <OddsContent />
    </Suspense>
  );
}