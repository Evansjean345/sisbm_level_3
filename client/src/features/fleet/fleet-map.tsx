"use client";

import dynamic from "next/dynamic";

import { Skeleton } from "@/components/ui/skeleton";
import type { FleetMapProps } from "@/features/fleet/map";

/** Leaflet manipule `window` : la carte n'est rendue que côté navigateur. */
export const FleetMap = dynamic<FleetMapProps>(() => import("@/features/fleet/map"), {
  ssr: false,
  loading: () => <Skeleton className="size-full rounded-none" />,
});
