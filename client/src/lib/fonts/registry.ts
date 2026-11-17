import localFont from "next/font/local";

import { GeistPixelSquare } from "geist/font/pixel";

/**
 * Polices hébergées DANS le projet (`./files`, sous-ensemble latin, axe de graisse variable).
 *
 * Plus aucun téléchargement depuis Google Fonts au démarrage ou au build :
 * `next dev` et `next build` fonctionnent hors ligne, derrière un pare-feu ou
 * sur un serveur sans accès à fonts.gstatic.com.
 *
 * Fichiers issus des paquets Fontsource (et du paquet `geist`), licence SIL OFL 1.1
 * — voir `files/LICENSE.md`. Pour ajouter une police : déposer son fichier
 * `*-latin-wght-normal.woff2` dans `files/`, puis la déclarer ci-dessous et dans
 * `fontRegistry`.
 */

const inter = localFont({
  src: "./files/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

const notoSans = localFont({
  src: "./files/noto-sans-latin-wght-normal.woff2",
  variable: "--font-noto-sans",
  weight: "100 900",
  display: "swap",
});

const roboto = localFont({
  src: "./files/roboto-latin-wght-normal.woff2",
  variable: "--font-roboto",
  weight: "100 900",
  display: "swap",
});

const geist = localFont({
  src: "./files/geist-latin-wght-normal.woff2",
  variable: "--font-geist",
  weight: "100 900",
  display: "swap",
});

const outfit = localFont({
  src: "./files/outfit-latin-wght-normal.woff2",
  variable: "--font-outfit",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./files/geist-mono-latin-wght-normal.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
  adjustFontFallback: false,
  fallback: ["ui-monospace", "monospace"],
});

const dmSans = localFont({
  src: "./files/dm-sans-latin-wght-normal.woff2",
  variable: "--font-dm-sans",
  weight: "100 900",
  display: "swap",
});

const nunitoSans = localFont({
  src: "./files/nunito-sans-latin-wght-normal.woff2",
  variable: "--font-nunito-sans",
  weight: "200 900",
  display: "swap",
});

const figtree = localFont({
  src: "./files/figtree-latin-wght-normal.woff2",
  variable: "--font-figtree",
  weight: "300 900",
  display: "swap",
});

const raleway = localFont({
  src: "./files/raleway-latin-wght-normal.woff2",
  variable: "--font-raleway",
  weight: "100 900",
  display: "swap",
});

const publicSans = localFont({
  src: "./files/public-sans-latin-wght-normal.woff2",
  variable: "--font-public-sans",
  weight: "100 900",
  display: "swap",
});

const jetBrainsMono = localFont({
  src: "./files/jetbrains-mono-latin-wght-normal.woff2",
  variable: "--font-jetbrains-mono",
  weight: "100 800",
  display: "swap",
  adjustFontFallback: false,
  fallback: ["ui-monospace", "monospace"],
});

const notoSerif = localFont({
  src: "./files/noto-serif-latin-wght-normal.woff2",
  variable: "--font-noto-serif",
  weight: "100 900",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

const robotoSlab = localFont({
  src: "./files/roboto-slab-latin-wght-normal.woff2",
  variable: "--font-roboto-slab",
  weight: "100 900",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

const merriweather = localFont({
  src: "./files/merriweather-latin-wght-normal.woff2",
  variable: "--font-merriweather",
  weight: "300 900",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

const lora = localFont({
  src: "./files/lora-latin-wght-normal.woff2",
  variable: "--font-lora",
  weight: "400 700",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

const playfairDisplay = localFont({
  src: "./files/playfair-display-latin-wght-normal.woff2",
  variable: "--font-playfair-display",
  weight: "400 900",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

export const fontRegistry = {
  geist: {
    label: "Geist",
    font: geist,
  },
  inter: {
    label: "Inter",
    font: inter,
  },
  notoSans: {
    label: "Noto Sans",
    font: notoSans,
  },
  nunitoSans: {
    label: "Nunito Sans",
    font: nunitoSans,
  },
  figtree: {
    label: "Figtree",
    font: figtree,
  },
  roboto: {
    label: "Roboto",
    font: roboto,
  },
  raleway: {
    label: "Raleway",
    font: raleway,
  },
  dmSans: {
    label: "DM Sans",
    font: dmSans,
  },
  publicSans: {
    label: "Public Sans",
    font: publicSans,
  },
  outfit: {
    label: "Outfit",
    font: outfit,
  },
  geistMono: {
    label: "Geist Mono",
    font: geistMono,
  },
  geistPixelSquare: {
    label: "Geist Pixel Square",
    font: GeistPixelSquare,
  },
  jetBrainsMono: {
    label: "JetBrains Mono",
    font: jetBrainsMono,
  },
  notoSerif: {
    label: "Noto Serif",
    font: notoSerif,
  },
  robotoSlab: {
    label: "Roboto Slab",
    font: robotoSlab,
  },
  merriweather: {
    label: "Merriweather",
    font: merriweather,
  },
  lora: {
    label: "Lora",
    font: lora,
  },
  playfairDisplay: {
    label: "Playfair Display",
    font: playfairDisplay,
  },
} as const;

export type FontKey = keyof typeof fontRegistry;

export const fontKeys = Object.keys(fontRegistry) as FontKey[];

export const fontVars = Object.values(fontRegistry)
  .map(({ font }) => font.variable)
  .join(" ");

export const fontOptions = fontKeys.map((key) => ({
  key,
  label: fontRegistry[key].label,
}));
