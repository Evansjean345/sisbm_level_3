"use client";

import Link from "next/link";

import { BadgeCheck, ChevronUp, FileTextIcon, KeyRound, LogOut } from "lucide-react";

import { Can, useAccess } from "@/components/providers/access-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { useCurrentUser, useLogout } from "@/hooks/api/use-auth";
import { getInitials } from "@/lib/utils";

export function NavUser() {
  const { data: user, isPending } = useCurrentUser();
  // Rôle et niveau portés par /auth/me : pas d'appel à /roles (refusé à l'opérateur).
  const { meta } = useAccess();
  const logout = useLogout();

  if (isPending) {
    return <Skeleton className="h-12 w-full rounded-lg" />;
  }

  const name = user?.fullName ?? "Utilisateur";
  const roleName = user?.role?.name ?? meta.label;

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center justify-evenly rounded-lg border p-2">
              <div>
                <button
                  type="button"
                  className="focus-visible h-10 w-10 rounded-full bg-[#102b46] text-[12px] outline-none focus-visible:ring-2"
                  aria-label="Menu du compte"
                >
                  {getInitials(name)}
                </button>
              </div>
              <div>
                <div className="text-[10px]">{name}</div>
                <div className="text-[8px]">{roleName}</div>
              </div>
              <ChevronUp className="h-4 w-4" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-56 rounded-lg" side="bottom" align="end" sideOffset={4}>
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5">
                <div>
                  <button
                    type="button"
                    className="focus-visible h-10 w-10 rounded-full bg-[#102b46] text-[12px] text-white outline-none focus-visible:ring-2"
                    aria-label="Menu du compte"
                  >
                    {getInitials(name)}
                  </button>
                </div>
                <div className="grid min-w-0 flex-1 text-left text-[#102b46] text-sm leading-tight">
                  <span className="truncate font-semibold">{name}</span>
                  <span className="truncate text-muted-foreground text-xs">{user?.email}</span>
                  {roleName ? <span className="truncate text-xs">{roleName}</span> : null}
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/profile" prefetch={false}>
                  <BadgeCheck />
                  Mon compte
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Formule simulée</DropdownMenuItem>
              <DropdownMenuItem className="text-[12px] text-white hover:text-white">
                <div className="flex justify-between gap-2">
                  <div className="rounded-lg bg-[#0E508D] p-2 transition-all hover:scale-90 hover:cursor-pointer hover:text-white">
                    Standard
                  </div>
                  <div className="rounded-lg bg-[#0E508D] p-2 transition-all hover:scale-90 hover:cursor-pointer hover:text-white">
                    Gold
                  </div>
                  <div className="rounded-lg bg-[#0E508D] p-2 transition-all hover:scale-90 hover:cursor-pointer hover:text-white">
                    Premuim
                  </div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>Choisissez votre formule d'abonnements</DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/profile?tab=security" prefetch={false}>
                  <KeyRound />
                  Changer le mot de passe
                </Link>
              </DropdownMenuItem>
              <Can levels={[1, 2]}>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/audit" prefetch={false}>
                    <FileTextIcon />
                    Journal d'activité
                  </Link>
                </DropdownMenuItem>
              </Can>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem disabled={logout.isPending} onClick={() => logout.mutate()} className="text-red-500">
              <LogOut />
              Se déconnecter
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
