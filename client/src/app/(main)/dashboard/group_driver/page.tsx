"use client";

import { DRIVER_GROUP_FAMILY } from "@/features/common/groups/group-family";
import { GroupsScreen } from "@/features/common/groups/groups-screen";

export default function Page() {
  return <GroupsScreen family={DRIVER_GROUP_FAMILY} />;
}
