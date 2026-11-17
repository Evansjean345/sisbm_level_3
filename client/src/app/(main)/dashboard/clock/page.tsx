import { Suspense } from "react";

import { LoadingRows } from "@/components/query-state";
import { Schedules } from "@/features/clock/schedules";

/** `Suspense` : l'onglet, le mois et le jour vivent dans l'URL (`useSearchParams`). */
export default function Page() {
  return (
    <Suspense fallback={<LoadingRows rows={8} />}>
      <Schedules />
    </Suspense>
  );
}
