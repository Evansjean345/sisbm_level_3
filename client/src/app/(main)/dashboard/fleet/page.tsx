import { Suspense } from "react";

import { Skeleton } from "@/components/ui/skeleton";
import { Fleet } from "@/features/fleet/fleet";

export default function Page() {
  return (
    <Suspense fallback={<Skeleton className="h-[70dvh] rounded-xl" />}>
      <Fleet />
    </Suspense>
  );
}
