"use client";

import { useEffect, useState } from "react";

const DAYS = ["nedeľa", "pondelok", "utorok", "streda", "štvrtok", "piatok", "sobota"];

function nextSlot(now: Date): string {
  const day = now.getDay();
  const minutes = now.getHours() * 60 + now.getMinutes();
  const isWorkday = day >= 1 && day <= 5;

  // Najbližší voľný termín = o 2 hodiny, zaokrúhlené na pol hodinu, v pracovnom čase 7:30–15:30
  if (isWorkday && minutes < 15 * 60 + 30 - 120) {
    const slot = Math.max(7 * 60 + 30, Math.ceil((minutes + 120) / 30) * 30);
    const h = Math.floor(slot / 60);
    const m = slot % 60;
    return `dnes od ${h}:${m.toString().padStart(2, "0")}`;
  }

  let daysAhead = 0;
  let nextDay = day;
  do {
    daysAhead += 1;
    nextDay = (nextDay + 1) % 7;
  } while (nextDay === 0 || nextDay === 6);

  return `${daysAhead === 1 ? "zajtra" : `v ${DAYS[nextDay]}`} od 7:30`;
}

/** „Dispečing“ čip v hero — najbližší voľný termín technika. */
export function SlotChip() {
  const [slot, setSlot] = useState<string | null>(null);

  useEffect(() => {
    const update = () => setSlot(nextSlot(new Date()));
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <p className="inline-flex items-center gap-3 rounded-sm border border-white/15 bg-black/40 px-3 py-2 text-sm text-white/85 backdrop-blur-sm">
      <span className="live-dot h-2 w-2 rounded-full bg-live" aria-hidden="true" />
      <span>
        <span className="text-white/60">Najbližší voľný technik:</span>{" "}
        <span className="font-semibold text-white" aria-live="polite">
          <span key={slot ?? "pending"} className={slot ? "glow-in" : undefined}>
            {slot ?? "zisťujem…"}
          </span>
        </span>
      </span>
    </p>
  );
}
