// Demo obsah — všetky údaje sú fiktívne a slúžia na ukážku.

export const company = {
  name: "Elektro Dolina",
  phone: "+421 900 123 456",
  phoneHref: "tel:+421900123456",
  email: "dispecing@elektrodolina.sk",
  region: "Liptov",
  founded: 2008,
  ico: "12 345 678",
  address: "Hlavná 14, 034 01 Ružomberok",
  hours: "Po–Pi 7:00–17:00 · poruchy 24/7",
};

export const proof = [
  { value: "4,9 / 5", label: "127 recenzií na Google" },
  { value: "§21 · §22", label: "Odborná spôsobilosť, vyhl. 508/2009 Z. z." },
  { value: "500 000 €", label: "Poistenie zodpovednosti za škodu" },
  { value: "5 rokov", label: "Záruka na vykonanú prácu" },
];

export type Service = {
  id: string;
  name: string;
  detail: string;
  price: string;
};

export const services: Service[] = [
  {
    id: "01",
    name: "Elektroinštalácia rodinného domu",
    detail: "Kompletné rozvody od hrubej stavby po osadenie zásuviek, vrátane projektu a výchozej revízie.",
    price: "od 42 € / m²",
  },
  {
    id: "02",
    name: "Rekonštrukcia starých rozvodov",
    detail: "Hliník za meď v bytoch a starších domoch. Väčšinu bytov stihneme za 3–4 pracovné dni.",
    price: "od 2 900 €",
  },
  {
    id: "03",
    name: "Výmena a zapojenie rozvádzača",
    detail: "Nový rozvádzač s prúdovými chráničmi, prepäťovou ochranou a popisom každého ističa.",
    price: "od 650 €",
  },
  {
    id: "04",
    name: "Revízie elektrických zariadení",
    detail: "Odborná prehliadka a skúška pre kolaudáciu, predaj nehnuteľnosti, poisťovňu aj prenajímateľov.",
    price: "od 90 €",
  },
  {
    id: "05",
    name: "Wallbox a nabíjanie elektromobilu",
    detail: "Posúdenie hlavného ističa, montáž wallboxu a nastavenie dynamického riadenia výkonu.",
    price: "od 390 €",
  },
  {
    id: "06",
    name: "Fotovoltika a batériové úložisko",
    detail: "Návrh a zapojenie FVE na strechu, vybavenie žiadosti o pripojenie do distribučnej sústavy.",
    price: "na obhliadke",
  },
  {
    id: "07",
    name: "Bleskozvody a uzemnenie",
    detail: "Nové hromozvody, oprava poškodených zvodov a meranie zemného odporu.",
    price: "od 480 €",
  },
  {
    id: "08",
    name: "Poruchy a havárie 24/7",
    detail: "Vypadnutý istič, iskriaca zásuvka, prúd len v polovici domu. Technik vyráža do 60 minút.",
    price: "výjazd 45 €",
  },
];

export const steps = [
  {
    n: "1",
    title: "Zavoláte alebo pošlete fotku",
    text: "Stačí fotka rozvádzača a pár viet, čo potrebujete. Ozveme sa v ten istý pracovný deň.",
  },
  {
    n: "2",
    title: "Obhliadka zdarma do 48 hodín",
    text: "Prídeme, premeriame a do dvoch dní dostanete pevnú cenu. Na faktúre bude to isté číslo.",
  },
  {
    n: "3",
    title: "Práca a revízna správa",
    text: "Po skončení upraceme, odovzdáme revíznu správu a vysvetlíme, čo ktorý istič chráni.",
  },
];

export const projects = [
  {
    img: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5",
    alt: "Nový rozvádzač s radom ističov a prúdových chráničov",
    place: "Ružomberok",
    title: "Rozvádzač pre bytový dom, 24 bytov",
    meta: "6 dní · revízia v cene",
  },
  {
    img: "https://images.unsplash.com/photo-1637417494521-78b4d1d33029",
    alt: "Rodinný dom s fotovoltickými panelmi na streche",
    place: "Liptovský Hrádok",
    title: "FVE 9,6 kWp s batériou 10 kWh",
    meta: "2 dni montáž · pripojené do 5 týždňov",
  },
  {
    img: "https://images.unsplash.com/photo-1646640381839-02748ae8ddf0",
    alt: "Elektrikár vŕta drážku do drevenej steny počas inštalácie",
    place: "Liptovská Lúžna",
    title: "Drevostavba, kompletné rozvody",
    meta: "11 dní · smart osvetlenie",
  },
];

export const areas = [
  { town: "Ružomberok", minutes: 15 },
  { town: "Liptovská Osada", minutes: 25 },
  { town: "Liptovská Lúžna", minutes: 30 },
  { town: "Ľubochňa", minutes: 20 },
  { town: "Liptovský Mikuláš", minutes: 35 },
  { town: "Liptovský Hrádok", minutes: 45 },
  { town: "Bešeňová", minutes: 25 },
  { town: "Dolný Kubín", minutes: 40 },
];

export const reviews = [
  {
    quote:
      "V sobotu večer nám vypadla polovica domu. Pán technik bol u nás o 50 minút, našiel zhorený spoj v krabici a do desiatej sme mali prúd.",
    name: "Martina K.",
    place: "Ľubochňa",
  },
  {
    quote:
      "Cenu povedali po obhliadke a presne tá bola aj na faktúre. Rekonštrukcia bytu za štyri dni, po sebe vysávali.",
    name: "Peter H.",
    place: "Ružomberok",
  },
  {
    quote:
      "Wallbox zapojili tak, že keď ide sporák aj práčka, auto si samo uberie. Hlavný istič sme nemuseli navyšovať.",
    name: "Juraj M.",
    place: "Liptovský Mikuláš",
  },
];

export const brands = ["ABB", "Schneider Electric", "Hager", "Legrand", "Eaton", "Fronius"];

export const faqs = [
  {
    q: "Koľko stojí obhliadka?",
    a: "Obhliadka v okruhu 45 minút od Ružomberka je zdarma. Ak si nás potom objednáte, platíte len dohodnutú pevnú cenu.",
  },
  {
    q: "Vybavíte aj revíznu správu na kolaudáciu?",
    a: "Áno. Revízny technik je súčasťou tímu, takže výchoziu revíziu robíme hneď po dokončení inštalácie a správu dostanete do 3 pracovných dní.",
  },
  {
    q: "Ako rýchlo prídete pri poruche?",
    a: "Pri havárii vyráža technik do 60 minút, v noci aj cez víkend. Výjazd stojí 45 €, práca sa účtuje podľa skutočného času.",
  },
  {
    q: "Pomôžete s pripojením fotovoltiky do siete?",
    a: "Pripravíme jednopólovú schému, žiadosť pre distribučku aj revíziu. Vy podpíšete splnomocnenie, papiere vybavíme my.",
  },
  {
    q: "Dá sa platiť na faktúru alebo na splátky?",
    a: "Firmám a SVB fakturujeme so splatnosťou 14 dní. Pri väčších zákazkách nad 3 000 € vieme rozložiť platbu na tri časti podľa postupu prác.",
  },
];
