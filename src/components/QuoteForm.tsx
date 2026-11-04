"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check, LoaderCircle, Phone } from "lucide-react";
import { areas, company } from "@/lib/content";

const JOBS = ["Porucha", "Nová inštalácia", "Rekonštrukcia", "Revízia", "Wallbox / FVE", "Iné"];

const field =
  "w-full rounded-sm border border-line bg-white px-3.5 py-3 text-base text-ink placeholder:text-steel transition-colors hover:border-steel focus:border-ink focus:outline-none";
const label = "mb-1.5 block text-sm font-semibold text-ink";

export function QuoteForm() {
  const [job, setJob] = useState(JOBS[1]);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState<null | { name: string }>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").replace(/\s/g, "");

    const next: Record<string, string> = {};
    if (!name) next.name = "Napíšte, ako vás máme osloviť.";
    if (!/^\+?\d{9,13}$/.test(phone)) next.phone = "Zadajte telefón, napr. 0900 123 456.";
    setErrors(next);
    const firstInvalid = Object.keys(next)[0];
    if (firstInvalid) {
      (form.elements.namedItem(firstInvalid) as HTMLElement | null)?.focus();
      return;
    }

    // Demo: nič sa neodosiela — krátko simulujeme odoslanie a zobrazíme potvrdenie.
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      setSent({ name: name.split(" ")[0] });
    }, 700);
  }

  if (sent) {
    return (
      <div className="rounded-sm border border-line bg-white p-8 md:p-10" role="status">
        <span className="pop-in flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white">
          <Check className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3
          className="enter mt-6 font-display text-3xl font-bold uppercase tracking-[0.01em]"
          style={{ animationDelay: "120ms" }}
        >
          Ďakujeme, {sent.name}.
        </h3>
        <p className="enter mt-3 max-w-md text-lg text-steel" style={{ animationDelay: "200ms" }}>
          Dopyt máme. Dispečer vám zavolá ešte dnes, najneskôr do 2 pracovných hodín, a dohodne čas obhliadky.
        </p>
        <p className="mt-6 text-sm text-steel">
          Ide o haváriu? Nečakajte a volajte{" "}
          <a href={company.phoneHref} className="font-semibold text-ink underline underline-offset-4">
            {company.phone}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSent(null)}
          className="mt-8 text-sm font-semibold text-ink underline underline-offset-4 hover:text-steel"
        >
          Poslať ďalší dopyt
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-sm border border-line bg-white p-6 md:p-8"
      aria-label="Nezáväzný dopyt"
    >
      <fieldset>
        <legend className={label}>Čo potrebujete?</legend>
        <div className="flex flex-wrap gap-2">
          {JOBS.map((j) => {
            const active = j === job;
            return (
              <label
                key={j}
                className={`cursor-pointer select-none rounded-sm border px-3.5 py-2 text-sm font-medium transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-volt ${
                  active ? "border-ink bg-ink text-white" : "border-line text-ink hover:border-steel"
                }`}
              >
                <input
                  type="radio"
                  name="job"
                  value={j}
                  checked={active}
                  onChange={() => setJob(j)}
                  className="sr-only"
                />
                {j}
              </label>
            );
          })}
        </div>
      </fieldset>

      {job === "Porucha" && (
        <p className="notice-in mt-4 flex items-start gap-3 rounded-sm bg-paper px-4 py-3 text-sm text-ink">
          <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>
            Pri poruche je telefón rýchlejší než formulár:{" "}
            <a href={company.phoneHref} className="font-semibold underline underline-offset-4">
              {company.phone}
            </a>
            , technik vyráža do 60 minút.
          </span>
        </p>
      )}

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>
            Meno
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            className={field}
            placeholder="Ján Novák"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-err" : undefined}
          />
          {errors.name && (
            <p id="name-err" className="mt-1.5 text-sm text-red-700">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className={label}>
            Telefón
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className={field}
            placeholder="0900 123 456"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-err" : undefined}
          />
          {errors.phone && (
            <p id="phone-err" className="mt-1.5 text-sm text-red-700">
              {errors.phone}
            </p>
          )}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="town" className={label}>
            Obec
          </label>
          <select id="town" name="town" className={field} defaultValue={areas[0].town}>
            {areas.map((a) => (
              <option key={a.town}>{a.town}</option>
            ))}
            <option>Iná obec na Liptove / Orave</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="msg" className={label}>
            Popíšte prácu <span className="font-normal text-steel">(nepovinné)</span>
          </label>
          <textarea
            id="msg"
            name="msg"
            rows={4}
            className={`${field} resize-y`}
            placeholder="Napr. byt 3+1, staré hliníkové rozvody, chceme nový rozvádzač a zásuvky v kuchyni."
          />
        </div>
      </div>

      <label className="mt-5 flex cursor-pointer items-center gap-3 text-sm text-ink">
        <input type="checkbox" name="urgent" className="h-4 w-4 accent-ink" />
        Potrebujem termín do 3 dní
      </label>

      <button
        type="submit"
        disabled={sending}
        aria-busy={sending}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-volt px-6 py-4 font-display text-lg font-bold uppercase tracking-[0.06em] text-ink transition-colors hover:bg-volt-press active:translate-y-px disabled:cursor-wait disabled:bg-volt-press sm:w-auto sm:min-w-[15rem]"
      >
        {sending ? (
          <>
            Odosielam
            <LoaderCircle className="h-5 w-5 animate-spin motion-reduce:animate-none" aria-hidden="true" />
          </>
        ) : (
          <>
            Odoslať dopyt
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </>
        )}
      </button>
      <p className="mt-4 text-xs text-steel">
        Odpovieme do 2 pracovných hodín. Údaje použijeme len na vybavenie dopytu.
      </p>
    </form>
  );
}
