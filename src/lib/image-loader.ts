"use client";

type LoaderProps = { src: string; width: number; quality?: number };

/**
 * Statický export (GitHub Pages) nemá Next.js optimalizátor obrázkov,
 * preto veľkosť a formát necháme vyrátať priamo Unsplash CDN.
 */
export default function unsplashLoader({ src, width, quality }: LoaderProps) {
  if (!src.startsWith("https://images.unsplash.com/")) return src;
  return `${src}?auto=format&fit=crop&w=${width}&q=${quality ?? 75}`;
}
