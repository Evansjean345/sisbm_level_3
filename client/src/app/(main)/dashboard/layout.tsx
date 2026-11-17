import type { ReactNode } from "react";

import { APP_LEVEL } from "@/config/app";
import { DashboardShell } from "@/features/common/shell/dashboard-shell";
import { AppSidebar } from "@/navigation/app-sidebar";

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <DashboardShell appLevel={APP_LEVEL} Sidebar={AppSidebar}>
      {children}
    </DashboardShell>
  );
}
