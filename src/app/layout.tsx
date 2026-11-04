import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elektrikar.esticode.sk"),
  title: "Elektro Dolina — elektrikár Ružomberok a Liptov, poruchy 24/7",
  description:
    "Elektroinštalácie, rekonštrukcie rozvodov, revízie, wallboxy a fotovoltika na Liptove. Obhliadka zdarma do 48 hodín, pevná cena, záruka 5 rokov. Ukážková stránka od Esticode.",
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: "/",
    title: "Elektro Dolina — elektrikár pre celý Liptov",
    description: "Inštalácie, rekonštrukcie, revízie a poruchy 24/7. Obhliadka zdarma do 48 hodín.",
  },
};

export const viewport: Viewport = {
  themeColor: "#111210",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body>{children}</body>
    </html>
  );
}
