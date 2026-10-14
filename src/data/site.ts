// Všetok obsah na jednom mieste. Pri novom klientovi sa mení len tento súbor.
// POZOR: názov, telefón, e-mail a ceny sú vymyslené (ukážka).

export const site = {
  name: 'Elektro Dolina',
  title: 'Elektro Dolina | Elektrikár Košice (ukážka)',
  description:
    'Elektroinštalácie, rozvádzače, revízie a poruchy v Košiciach a okolí. Ukážková stránka od Esticode.',
  phone: '+421 900 000 000',
  phoneHref: 'tel:+421900000000',
  email: 'meno@priklad.sk',
  hours: 'Po–So 7:00–19:00, poruchy aj mimo času',
  area: 'Košice vrátane Šace, Barce, Myslavy a Poľova, a obce do 25 km od mesta.',
} as const;

export type Service = {
  id: string;
  label: string; // text na štítku pod ističom
  title: string;
  text: string;
  note: string;
  rating: string; // označenie na ističi, čisto vizuálne
  wire: string; // farba vodiča nad ističom (CSS background)
};

// Farby vodičov podľa normy: hnedá, čierna, sivá, modrá, zelenožltá.
export const services: Service[] = [
  {
    id: 'instalacie',
    label: 'Inštalácie',
    title: 'Elektroinštalácie',
    text: 'Nové rozvody v byte, dome aj prevádzke, prípadne výmena starej inštalácie. Drážky po sebe zaspravíme a upraceme.',
    note: 'Pred prácou dostanete cenu písomne.',
    rating: 'B16',
    wire: '#6B3F22',
  },
  {
    id: 'rozvadzace',
    label: 'Rozvádzače',
    title: 'Rozvádzače',
    text: 'Výmena starého rozvádzača za nový s prúdovým chráničom a prepäťovou ochranou. Každý istič dostane popis.',
    note: 'Výmena v byte zvyčajne trvá jeden deň.',
    rating: 'B25',
    wire: '#15181A',
  },
  {
    id: 'revizie',
    label: 'Revízie',
    title: 'Revízie',
    text: 'Revízia elektroinštalácie a bleskozvodov pre byty, domy aj firmy. Dostanete revíznu správu.',
    note: 'Hodí sa pri predaji bytu, poistení alebo kolaudácii.',
    rating: 'B10',
    wire: '#8D959B',
  },
  {
    id: 'poruchy',
    label: 'Poruchy',
    title: 'Poruchy',
    text: 'Vypadávajú ističe, nesvieti, zapácha izolácia? Zavolajte a skúsime prísť v ten istý deň.',
    note: 'Do príchodu vypnite hlavný istič.',
    rating: 'B20',
    wire: '#2A62B0',
  },
  {
    id: 'wallbox',
    label: 'Wallbox a smart',
    title: 'Wallbox a smart domácnosť',
    text: 'Nabíjačka pre elektromobil, ovládanie svetiel a žalúzií z mobilu.',
    note: 'Pred montážou skontrolujeme, či to vydrží prípojka.',
    rating: 'C32',
    wire: 'repeating-linear-gradient(0deg,#2E9B4A 0 6px,#F2C200 6px 12px)',
  },
];

export const steps = [
  { title: 'Obhliadka', text: 'Prídeme, pozrieme stav a opýtame sa, čo potrebujete. Bez poplatku.' },
  { title: 'Cenová ponuka', text: 'Dostanete cenu písomne. Ak sa rozsah nezmení, nezmení sa ani cena.' },
  { title: 'Práca', text: 'Dohodnutý termín, čistá práca, po nás upratané.' },
  {
    title: 'Revízna správa',
    text: 'Po dokončení odovzdáme doklady, ktoré potrebujete pre poisťovňu aj kolaudáciu.',
  },
];

export const prices = [
  { item: 'Obhliadka na mieste', price: 'zadarmo' },
  { item: 'Výmena zásuvky alebo vypínača', price: 'od 15 €' },
  { item: 'Nový okruh v byte vrátane drážky', price: 'od 90 €' },
  { item: 'Výmena rozvádzača v byte', price: 'od 450 €' },
  { item: 'Revízia elektroinštalácie v byte', price: 'od 120 €' },
];

export const prepare = [
  'adresu a čo presne nefunguje',
  'fotku rozvádzača, ak sa dá',
  'číslo, na ktorom vás zastihneme',
];
