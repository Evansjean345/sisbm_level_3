# SISBM CORE — Espace Client (niveau 3)

Application Next.js autonome : elle n'a aucune dépendance vers les deux autres espaces.
Seuls les comptes de niveau 3 peuvent s'y connecter ; les autres sont renvoyés vers leur espace.

## Démarrer

```bash
cp .env.example .env      # URL de l'API + adresses des 3 espaces
npm install
npm run dev               # http://localhost:3002
```

## Commandes

```bash
npm run build && npm run start
npm run typecheck
npm run check             # Biome
```

## Organisation de `src/`

- `app/` routes · `navigation/` menu · `config/app.ts` niveau servi · `proxy.ts` garde des routes
- `features/` écrans · `components/` UI (shadcn) et providers · `services/` appels API
- `hooks/`, `lib/`, `types/`, `stores/`, `styles/`, `assets/`

Temps réel : AdonisJS Transmit (SSE) via `lib/realtime/transmit.ts`.
Mot de passe oublié : `/auth/v2/forgot-password`, code par SMS uniquement.
