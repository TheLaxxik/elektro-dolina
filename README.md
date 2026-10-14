# Elektro Dolina (ukážka od Esticode)

Statická Astro stránka nasadená na GitHub Pages: https://elektrikar.esticode.sk

Všetky texty, ceny a kontakty sú v `src/data/site.ts`, komponenty v
`src/components/`, farby a typografia v `src/styles/global.css`.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # výstup v dist/
```

Nasadenie: push do `main` spustí `.github/workflows/deploy.yml`.
V repozitári musí byť Settings → Pages → Source: GitHub Actions.
Vlastná doména sa nastavuje tam istom (Custom domain: elektrikar.esticode.sk)
a v DNS je CNAME záznam `elektrikar` na `<github-username>.github.io`.
