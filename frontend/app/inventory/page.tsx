"use client";

import { Suspense } from "react";
import InventoryContent from "./InventoryContent";

export default function InventoryPage() {
  return (
    <Suspense fallback={<div className="status">Loading inventory...</div>}>
      <InventoryContent />
    </Suspense>
  );
}