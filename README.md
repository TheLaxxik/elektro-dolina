# Elektro Dolina (ukážka od Esticode)

Statická Next.js stránka nasadená na GitHub Pages: https://elektrikar.esticode.sk

Stack: Next.js 16 (App Router, statický export), React 19, TypeScript, Tailwind CSS 4.

- Texty, ceny, služby, obce a recenzie: `src/lib/content.ts`
- Rozloženie stránky: `src/app/page.tsx`, komponenty v `src/components/`
- Farby, typografia a animácie: `src/app/globals.css`
- Fotografie sa načítavajú z Unsplash CDN cez `src/lib/image-loader.ts`

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # statický výstup v out/
```

Nasadenie: push do `master` (alebo `main`) spustí `.github/workflows/deploy.yml`.
V repozitári musí byť Settings → Pages → Source: GitHub Actions.
Vlastná doména sa nastavuje tam istom (Custom domain: elektrikar.esticode.sk)
a v DNS je CNAME záznam `elektrikar` na `<github-username>.github.io`.

Formulár dopytu je len ukážka — nič neodosiela.
