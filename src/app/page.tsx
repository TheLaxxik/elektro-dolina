import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock, Mail, MapPin, Phone, Plus, Star } from "lucide-react";
import { Logo } from "@/components/Logo";
import { SlotChip } from "@/components/SlotChip";
import { QuoteForm } from "@/components/QuoteForm";
import { InView } from "@/components/InView";
import {
  areas,
  brands,
  company,
  faqs,
  projects,
  proof,
  reviews,
  services,
  steps,
} from "@/lib/content";

const years = 2026 - company.founded;

const eyebrow = "font-display text-sm font-semibold uppercase tracking-[0.18em]";
const h2 = "font-display text-[2.6rem] font-bold uppercase leading-[0.95] tracking-[0.005em] md:text-6xl";
const ctaPrimary =
  "inline-flex items-center justify-center gap-2.5 rounded-sm bg-volt px-6 py-4 font-display text-lg font-bold uppercase tracking-[0.06em] text-ink transition-colors hover:bg-volt-press active:translate-y-px";

export default function Home() {
  return (
    <>
      <a
        href="#obsah"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2"
      >
        Preskočiť na obsah
      </a>

      {/* Horný pás — pohotovosť */}
      <div className="bg-ink text-white/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2 text-sm md:px-8">
          <p className="flex items-center gap-2">
            <span className="live-dot h-1.5 w-1.5 rounded-full bg-live" aria-hidden="true" />
            Poruchy 24/7 — technik vyráža do 60 minút
          </p>
          <p className="hidden items-center gap-6 md:flex">
            <span className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {company.hours}
            </span>
            <a href={`mailto:${company.email}`} className="hover:text-white">
              {company.email}
            </a>
          </p>
        </div>
      </div>

      {/* Navigácia */}
      <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 md:h-[4.5rem] md:px-8">
          <Link href="/" aria-label="Elektro Dolina — domov">
            <Logo />
          </Link>
          <nav aria-label="Hlavná navigácia" className="hidden lg:block">
            <ul className="flex items-center gap-8 text-[0.95rem] font-medium">
              {[
                ["Služby", "#sluzby"],
                ["Realizácie", "#realizacie"],
                ["Kde pôsobíme", "#oblast"],
                ["Otázky", "#otazky"],
              ].map(([t, h]) => (
                <li key={h}>
                  <a href={h} className="text-ink/80 transition-colors hover:text-ink">
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-5">
            <a
              href={company.phoneHref}
              className="tabular hidden items-center gap-2 font-display text-xl font-bold tracking-[0.02em] sm:flex"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {company.phone}
            </a>
            <a
              href="#dopyt"
              className="hidden rounded-sm bg-volt px-4 py-2.5 font-display text-base font-bold uppercase tracking-[0.06em] text-ink transition-colors hover:bg-volt-press md:inline-flex"
            >
              Nezáväzná ponuka
            </a>
            <a
              href={company.phoneHref}
              className="flex h-10 w-10 items-center justify-center rounded-sm bg-ink text-white sm:hidden"
              aria-label={`Zavolať ${company.phone}`}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      <main id="obsah" className="pb-20 md:pb-0">
        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-ink text-white">
          <Image
            src="https://images.unsplash.com/photo-1660330589693-99889d60181e"
            alt="Elektrikár v reflexnom tričku zapája istič v otvorenom rozvádzači"
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover object-[70%_30%]"
          />
          <div
            className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(17,18,16,0.96)_0%,rgba(17,18,16,0.86)_38%,rgba(17,18,16,0.35)_75%,rgba(17,18,16,0.2)_100%)]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-ink to-transparent"
            aria-hidden="true"
          />
          <div className="power-overlay absolute inset-0 -z-10 bg-ink" aria-hidden="true" />

          <div className="mx-auto max-w-7xl px-5 pb-0 pt-14 md:px-8 md:pt-24">
            <h1 className="max-w-[14ch] font-display text-[3.4rem] font-extrabold uppercase leading-[0.9] tracking-[-0.005em] sm:text-7xl lg:text-[6rem]">
              <span className="hero-line" style={{ animationDelay: "220ms" }}>
                Elektrikár pre
              </span>{" "}
              <span className="hero-line" style={{ animationDelay: "330ms" }}>
                celý Liptov
              </span>
            </h1>
            <p
              className="enter mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl"
              style={{ animationDelay: "520ms" }}
            >
              Ružomberok, Liptovský Mikuláš a celá dolina. Inštalácie, rekonštrukcie rozvodov, revízie a
              wallboxy pre domy, byty aj firmy. Obhliadka zdarma do 48 hodín a pevná cena, ktorá sa už
              nezmení.
            </p>

            <div
              className="enter mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "640ms" }}
            >
              <a href={company.phoneHref} className={ctaPrimary}>
                <Phone className="h-5 w-5" aria-hidden="true" />
                <span className="tabular">{company.phone}</span>
              </a>
              <a
                href="#dopyt"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/30 px-6 py-4 font-display text-lg font-bold uppercase tracking-[0.06em] text-white transition-colors hover:border-white hover:bg-white/5"
              >
                Poslať dopyt
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>

            <div className="enter mt-8" style={{ animationDelay: "780ms" }}>
              <SlotChip />
            </div>

            {/* Billboard: roky + ghost wordmark */}
            <div className="relative mt-16 flex items-end justify-between md:mt-20">
              <p
                className="hero-wipe pointer-events-none select-none font-display text-[22vw] font-extrabold uppercase leading-[0.72] tracking-[-0.02em] text-white/[0.13] lg:text-[17rem]"
                aria-hidden="true"
              >
                Dolina
              </p>
              <div
                className="enter-soft absolute bottom-6 right-0 hidden text-right md:block"
                style={{ animationDelay: "1250ms" }}
              >
                <p className="outline-num tabular font-display text-[6rem] font-extrabold leading-[0.8]">
                  {years}
                </p>
                <p className={`${eyebrow} mt-2 text-white/70`}>rokov na Liptove</p>
              </div>
            </div>
          </div>
        </section>

        {/* Dôkazy */}
        <section aria-label="Prečo nám veriť" className="border-b border-line bg-white">
          <ul className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
            {proof.map((p, i) => (
              <li
                key={p.label}
                className={`border-line px-5 py-7 md:px-8 md:py-9 ${i % 2 === 1 ? "border-l" : ""} ${
                  i > 1 ? "border-t md:border-t-0" : ""
                } ${i === 2 ? "md:border-l" : ""}`}
              >
                <p className="tabular font-display text-2xl font-bold tracking-[0.01em] md:text-[1.7rem]">{p.value}</p>
                <p className="mt-1 text-sm font-medium leading-snug text-ink/75">{p.label}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* SLUŽBY */}
        <section id="sluzby" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className={h2}>Čo u vás urobíme</h2>
            </div>
            <p className="max-w-sm text-steel">
              Ceny sú orientačné s DPH. Presnú a pevnú cenu dostanete po obhliadke, ktorá je zdarma.
            </p>
          </div>

          <ul className="mt-12 border-t-2 border-ink">
            {services.map((s) => (
              <li key={s.id} className="border-b border-line">
                <a
                  href="#dopyt"
                  className="group grid gap-y-2 py-6 transition-colors hover:bg-white lg:grid-cols-[1.1fr_1.4fr_9rem_1.25rem] lg:items-center lg:gap-x-8 lg:px-3"
                >
                  <h3 className="font-display text-2xl font-bold uppercase leading-tight tracking-[0.01em] md:text-[1.7rem]">
                    {s.name}
                  </h3>
                  <p className="max-w-prose text-steel">{s.detail}</p>
                  <p className="tabular font-display text-xl font-semibold lg:text-right">
                    {s.price}
                  </p>
                  <ArrowUpRight
                    className="hidden h-5 w-5 text-fog transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink lg:block"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* POHOTOVOSŤ */}
        <section className="bg-graphite text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1.3fr_1fr] md:px-8 md:py-20">
            <div>
              <h2 className={`${h2} text-white`}>Vypadol prúd alebo iskrí zásuvka?</h2>
              <a
                href={company.phoneHref}
                className="tabular mt-6 block font-display text-5xl font-extrabold tracking-[0.01em] text-white hover:text-white/80 md:text-7xl"
              >
                {company.phone}
              </a>
              <p className="mt-3 flex items-center gap-2 text-white/70">
                <span className="live-dot h-2 w-2 rounded-full bg-live" aria-hidden="true" />
                Pohotovosť 24/7, aj v noci a cez víkend
              </p>
              <a href={company.phoneHref} className={`${ctaPrimary} mt-8`}>
                <Phone className="h-5 w-5" aria-hidden="true" />
                Zavolať technika
              </a>
            </div>
            <div className="md:border-l md:border-line-dark md:pl-10">
              <p className="font-display text-xl font-bold uppercase tracking-[0.04em]">Kým prídeme</p>
              <ol className="mt-5 space-y-5">
                {[
                  "Vypnite hlavný istič v rozvádzači. Ak cítite spáleninu, nezapínajte ho znova.",
                  "Nedotýkajte sa mokrých zásuviek ani spotrebičov, kým nie je prúd vypnutý.",
                  "Odfoťte rozvádzač a pošlite nám fotku. Technik príde s tými správnymi dielmi.",
                ].map((t, i) => (
                  <li key={i} className="grid grid-cols-[2rem_1fr] gap-3 text-white/80">
                    <span className="tabular font-display text-2xl font-bold text-white/60">{i + 1}</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-sm text-white/50">Výjazd 45 €, práca podľa skutočného času.</p>
            </div>
          </div>
        </section>

        {/* POSTUP */}
        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <h2 className={`${h2} max-w-3xl`}>Od telefonátu po revíznu správu</h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-0">
            {steps.map((s, i) => (
              <li
                key={s.n}
                className={`border-t-2 border-ink pt-6 md:pr-10 ${i > 0 ? "md:border-l md:border-l-line md:pl-10" : ""}`}
              >
                <p className="tabular font-display text-5xl font-extrabold leading-none text-steel">{s.n}</p>
                <h3 className="mt-4 font-display text-2xl font-bold uppercase tracking-[0.01em]">{s.title}</h3>
                <p className="mt-3 text-steel">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* REALIZÁCIE */}
        <section id="realizacie" className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className={h2}>Posledné zákazky</h2>
              </div>
              <p className="max-w-sm text-steel">Ročne odovzdáme okolo 180 zákaziek. Tu sú tri z tohto roka.</p>
            </div>

            <div className="mt-12 grid gap-x-6 gap-y-10 lg:grid-cols-[1.35fr_1fr] lg:grid-rows-2">
              {projects.map((p, i) => (
                <figure key={p.title} className={`flex flex-col ${i === 0 ? "lg:row-span-2" : ""}`}>
                  <div
                    className={`relative overflow-hidden rounded-sm bg-paper ${
                      i === 0 ? "aspect-[4/3] lg:aspect-auto lg:min-h-[22rem] lg:flex-1" : "aspect-[16/9]"
                    }`}
                  >
                    <Image
                      src={p.img}
                      alt={p.alt}
                      fill
                      sizes={i === 0 ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 42vw, 100vw"}
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-4">
                    <p className="font-display text-xl font-bold uppercase tracking-[0.01em] md:text-2xl">
                      {p.title}
                    </p>
                    <p className="mt-1 text-sm text-steel">
                      {p.place} · {p.meta}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* OBLASŤ — odchodová tabuľa */}
        <section id="oblast" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
            <div className="flex flex-col">
              <h2 className={h2}>Celá dolina do 45 minút</h2>
              <p className="mt-5 max-w-md text-steel">
                Sídlime v Ružomberku. Pri bežnej zákazke dojazd neúčtujeme v žiadnej obci z tabuľky.
              </p>
              <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-sm lg:aspect-auto lg:min-h-[18rem] lg:flex-1">
                <Image
                  src="https://images.unsplash.com/photo-1704732388818-4805bae44e80"
                  alt="Letecký pohľad na obec v horskej doline obklopenej lesmi"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <InView className="board self-start rounded-sm bg-ink p-6 text-white md:p-8">
              <div className="flex items-center justify-between border-b border-line-dark pb-4">
                <p className="font-display text-lg font-bold uppercase tracking-[0.12em]">Dojazd z Ružomberka</p>
                <p className="flex items-center gap-2 text-sm text-white/60">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {areas.length} obcí
                </p>
              </div>
              <table className="mt-2 w-full">
                <caption className="sr-only">Čas dojazdu technika do jednotlivých obcí</caption>
                <thead>
                  <tr className={`${eyebrow} text-left text-xs text-white/50`}>
                    <th scope="col" className="py-3 font-semibold">
                      Obec
                    </th>
                    <th scope="col" className="py-3 text-right font-semibold">
                      Dojazd
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {areas.map((a, i) => (
                    <tr
                      key={a.town}
                      className="border-t border-line-dark"
                      style={{ "--i": i } as React.CSSProperties}
                    >
                      <td className="py-3.5 font-display text-xl font-semibold uppercase tracking-[0.03em] md:text-2xl">
                        {a.town}
                      </td>
                      <td className="tabular py-3.5 text-right font-display text-xl font-bold md:text-2xl">
                        {a.minutes}
                        <span className="ml-1 text-base font-semibold text-white/50">min</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-4 border-t border-line-dark pt-4 text-sm text-white/60">
                Iná obec na Liptove alebo Orave? Napíšte nám, väčšinou to stihneme.
              </p>
            </InView>
          </div>
        </section>

        {/* RECENZIE */}
        <section className="border-y border-line bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 className={h2}>Čo hovoria susedia</h2>
              <p className="flex items-center gap-3">
                <span className="flex" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-ink text-ink" />
                  ))}
                </span>
                <span className="font-semibold">4,9 z 5</span>
                <span className="text-steel">· 127 recenzií na Google</span>
              </p>
            </div>
            <ul className="mt-12 grid gap-10 md:grid-cols-3 md:gap-0">
              {reviews.map((r, i) => (
                <li key={r.name} className={`flex flex-col ${i > 0 ? "md:border-l md:border-line md:pl-10" : ""} md:pr-10`}>
                  <blockquote className="flex-1 text-lg leading-relaxed text-ink">„{r.quote}“</blockquote>
                  <p className="mt-6 text-sm">
                    <span className="font-semibold">{r.name}</span>
                    <span className="text-steel"> · {r.place}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ZNAČKY */}
        <section aria-label="Značky, s ktorými pracujeme" className="mx-auto max-w-7xl px-5 py-12 md:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-steel">Montujeme materiál od výrobcov s 10-ročnou zárukou:</p>
            <ul className="flex flex-wrap gap-x-10 gap-y-3">
              {brands.map((b) => (
                <li key={b} className="font-display text-xl font-bold uppercase tracking-[0.08em] text-steel">
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* DOPYT */}
        <section id="dopyt" className="border-t border-line">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
            <div>
              <h2 className={h2}>Povedzte nám, čo treba urobiť</h2>
              <p className="mt-5 max-w-md text-lg text-steel">
                Ozveme sa do 2 pracovných hodín a dohodneme obhliadku. Pevnú cenu máte na stole do 48 hodín
                od nej.
              </p>
              <dl className="mt-10 space-y-5 border-t border-line pt-8">
                <div className="flex items-start gap-4">
                  <dt>
                    <Phone className="mt-1 h-5 w-5" aria-label="Telefón" />
                  </dt>
                  <dd>
                    <a href={company.phoneHref} className="tabular font-display text-2xl font-bold">
                      {company.phone}
                    </a>
                    <p className="text-sm text-steel">{company.hours}</p>
                  </dd>
                </div>
                <div className="flex items-start gap-4">
                  <dt>
                    <Mail className="mt-0.5 h-5 w-5" aria-label="E-mail" />
                  </dt>
                  <dd>
                    <a href={`mailto:${company.email}`} className="font-medium underline-offset-4 hover:underline">
                      {company.email}
                    </a>
                  </dd>
                </div>
                <div className="flex items-start gap-4">
                  <dt>
                    <MapPin className="mt-0.5 h-5 w-5" aria-label="Adresa" />
                  </dt>
                  <dd>{company.address}</dd>
                </div>
              </dl>
            </div>
            <QuoteForm />
          </div>
        </section>

        {/* FAQ */}
        <section id="otazky" className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <h2 className={h2}>Časté otázky</h2>
            </div>
            <div className="border-t-2 border-ink">
              {faqs.map((f) => (
                <details key={f.q} className="group border-b border-line">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-display text-xl font-bold uppercase tracking-[0.01em] md:text-2xl [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <Plus
                      className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-45"
                      aria-hidden="true"
                    />
                  </summary>
                  <p className="-mt-2 max-w-2xl pb-6 text-steel">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* PÄTIČKA */}
      <footer className="bg-ink pb-24 text-white/70 md:pb-0">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-xs text-sm">
              Elektroinštalácie, revízie a poruchy 24/7 pre Ružomberok, Liptovský Mikuláš a okolie od roku{" "}
              {company.founded}.
            </p>
          </div>
          <div className="text-sm">
            <p className="font-display text-base font-bold uppercase tracking-[0.12em] text-white">Kontakt</p>
            <p className="mt-4">
              <a href={company.phoneHref} className="tabular hover:text-white">
                {company.phone}
              </a>
            </p>
            <p className="mt-1">
              <a href={`mailto:${company.email}`} className="hover:text-white">
                {company.email}
              </a>
            </p>
            <p className="mt-1">{company.address}</p>
          </div>
          <div className="text-sm">
            <p className="font-display text-base font-bold uppercase tracking-[0.12em] text-white">Firma</p>
            <p className="mt-4">Elektro Dolina s. r. o.</p>
            <p className="mt-1">IČO {company.ico}</p>
            <p className="mt-1">Oprávnenie §21 a §22, vyhl. 508/2009 Z. z.</p>
          </div>
        </div>
        <div className="border-t border-line-dark">
          <p className="mx-auto max-w-7xl px-5 py-5 text-xs text-white/55 md:px-8">
            Ukážková stránka od{" "}
            <a href="https://esticode.sk" className="underline hover:text-white">
              Esticode
            </a>
            . Názov firmy, ceny, kontakty a recenzie sú vymyslené. Fotografie: Unsplash.
          </p>
        </div>
      </footer>

      {/* Mobilná lišta */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-paper/95 p-3 backdrop-blur md:hidden">
        <a
          href={company.phoneHref}
          className="flex items-center justify-center gap-2 rounded-sm bg-volt py-3.5 font-display text-base font-bold uppercase tracking-[0.06em] text-ink"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Zavolať
        </a>
        <a
          href="#dopyt"
          className="flex items-center justify-center gap-2 rounded-sm bg-ink py-3.5 font-display text-base font-bold uppercase tracking-[0.06em] text-white"
        >
          Dopyt
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </>
  );
}
