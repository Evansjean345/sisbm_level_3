import { Suspense } from "react";

import Image from "next/image";

import { ShieldCheck } from "lucide-react";

import Logo from "@/assets/sisbm-core.jpeg";
import { APP_LEVEL } from "@/config/app";
import { APP_CONFIG } from "@/config/app-config";
import { LoginForm } from "@/features/auth/login-form";
import { LEVEL_META } from "@/lib/access/levels";

export default function LoginV2() {
  return (
    <>
      <div className="mx-auto flex w-full flex-col justify-center space-y-8 px-4 sm:w-87.5 sm:px-0">
        <div className="space-y-2 text-center items-center flex flex-col">
          <Image src={Logo} alt="Logo" className="h-24 w-24 object-contain rounded-lg" />
          <h1 className="font-medium text-3xl">Connexion</h1>
          <p className="text-muted-foreground text-sm">
            {LEVEL_META[APP_LEVEL].space} · {APP_CONFIG.name}
          </p>
        </div>
        <Suspense>
          <LoginForm appLevel={APP_LEVEL} />
        </Suspense>
      </div>

      <div className="absolute bottom-5 flex w-full justify-between px-10">
        <div className="text-sm">{APP_CONFIG.copyright}</div>
        <div className="flex items-center gap-1 text-sm">
          <ShieldCheck className="size-4 text-muted-foreground" />
          FR
        </div>
      </div>
    </>
  );
}
