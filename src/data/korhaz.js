import heroPoster from '../assets/korhaz/hero-poszter.jpg'
import mri from '../assets/korhaz/mri.jpg'
import folyoso from '../assets/korhaz/folyoso.jpg'
import csapat from '../assets/korhaz/csapat.jpg'
import tanczos from '../assets/korhaz/dr-tanczos-tamas.jpg'
import karpati from '../assets/korhaz/dr-karpati-adel.jpg'
import szekeres from '../assets/korhaz/dr-szekeres-gabor.jpg'
import szeghy from '../assets/korhaz/dr-szeghy-szabolcs.jpg'
import logoWhite from '../assets/korhaz/logo-feher.png'

export const KORHAZ_PATH = '/korhaz'

export const media = { heroPoster, mri, folyoso, csapat, logoWhite }

/** A hero mögötti videó helye: public/media/korhaz-hero.mp4 (a poszterkép fentről jön). */
export const heroVideo = '/media/korhaz-hero.mp4'

export const contact = {
  central: '+36 1 465 3131',
  emergency: '+36 1 465 3100',
  email: 'korhaz@medicare-group.hu',
  address: ['1134 Budapest, Váci út 29-31.', 'Vision Towers'],
}

export const nav = [
  { label: 'Szakterületek', hash: '#szakteruletek' },
  { label: 'Diagnosztika', hash: '#diagnosztika' },
  { label: 'Árak', hash: '#arak' },
  { label: 'Orvosok', hash: '#orvosok' },
  { label: 'Az ellátás menete', hash: '#ellatas' },
]

export const hero = {
  eyebrow: 'Medicare Magánkórház és Klinika · Budapest',
  title: ['Egy nap. Egy épület.', 'Minden vizsgálat.'],
  lead: 'Közel 40 szakterület, saját labor és képalkotó diagnosztika egy helyen – a leleteket jellemzően öt munkanapon belül megkapja.',
  specialties: ['Mind (40)', 'Kardiológia', 'Ortopédia', 'Nőgyógyászat', 'Bőrgyógyászat', 'Urológia'],
  slots: ['Legközelebbi szabad', 'Ma', 'Holnap', 'Ezen a héten'],
}

export const ticker = [
  'Kardiológia',
  'Ortopédia',
  'Nőgyógyászat',
  'Bőrgyógyászat',
  'Urológia',
  'Gasztroenterológia',
  'Szülészet',
  'Szemészet',
  'Fül-orr-gégészet',
  'Neurológia',
  'Traumatológia',
  'Aneszteziológia',
]

export const claim = {
  title: 'Nem a betegségeket kezeljük. Embereket.',
  text: 'Szakrendelés, labor és képalkotó diagnosztika ugyanabban az épületben, a Vision Towersben. Nem kell városon át utaznia egy vérvételért, és nem kell hetekig várnia a leletre – a legtöbb eredmény öt munkanapon belül megérkezik.',
  stats: [
    { value: '40+', label: 'szakterület egy helyen' },
    { value: '5', label: 'munkanap a leletekig' },
    { value: '0–24', label: 'sürgősségi ellátás' },
    { value: '2 perc', label: 'online foglalás' },
  ],
}

export const specialties = {
  eyebrow: '01 — Ellátásaink',
  title: 'Amiben segítünk',
  text: 'Közel negyven szakterület, a gyermekgyógyászattól a sebészetig – vizsgálat, diagnózis és kezelés ugyanazon a helyen.',
  items: [
    {
      n: '01',
      name: 'Járóbeteg-szakrendelés',
      desc: 'Belgyógyászat, kardiológia, ortopédia, nőgyógyászat és további 35 szakterület',
    },
    {
      n: '02',
      name: 'Képalkotó diagnosztika',
      desc: 'MRI, CT, ultrahang, röntgen – vizsgálat és kiértékelés egy helyen',
    },
    {
      n: '03',
      name: 'Laborvizsgálatok',
      desc: 'Saját labor, széles panelekkel: allergia, hormon, tumormarker, genetika',
    },
    {
      n: '04',
      name: 'Műtétek',
      desc: 'Egynapos sebészettől a széles körű beavatkozásokig, saját műtőkben',
    },
    {
      n: '05',
      name: 'Sürgősségi Centrum',
      desc: 'Hétvégén és ünnepnapokon is nyitva, előjegyzés nélkül',
    },
    {
      n: '06',
      name: 'Telemedicina',
      desc: 'Online videós konzultáció négy szakterületen, akár holnapra',
    },
  ],
}

export const diagnostics = {
  eyebrow: '02 — Diagnosztika',
  title: ['MRI, CT, ultrahang és röntgen', 'a saját központunkban'],
  text: 'A vizsgálat és a kiértékelés is nálunk történik, így a lelet gyorsabban a kezelőorvosához kerül.',
  cta: 'Diagnosztikai vizsgálatok',
}

export const packages = {
  eyebrow: '03 — Csomagok',
  title: ['Átlátható árak,', 'meglepetések nélkül'],
  link: 'Teljes árlista',
  items: [
    {
      eyebrow: 'Szűrővizsgálat',
      name: 'Start állapotfelmérő',
      price: '39 990 Ft',
      unit: '/ csomag',
      items: ['Komplex állapotfelmérés', 'Belgyógyászati vizsgálat', 'Nagylabor', 'Nyugalmi EKG'],
      highlighted: true,
    },
    {
      eyebrow: 'Átfogó vizsgálat',
      name: 'ALEX allergiateszt',
      price: '295',
      unit: 'allergénre',
      items: ['Egyetlen vérvételből', 'Keresztallergiák kiszűrése', 'Eredmény 5 munkanapon belül'],
    },
    {
      eyebrow: 'Laborvizsgálat',
      name: 'FOX 286 panel',
      price: '286',
      unit: 'ételféleségre',
      items: ['Ételérzékenység feltérképezése', 'Gyors laboreredmény', 'Dietetikai tanácsadással'],
    },
  ],
}

/** Valódi orvosok a medicarekorhaz.hu orvoslistája szerint. */
export const doctors = {
  eyebrow: '04 — Orvosaink',
  title: 'Akikre rábízza magát',
  link: 'Összes orvosunk',
  items: [
    { name: 'Dr. Tánczos Tamás', field: 'Traumatológia', photo: tanczos },
    { name: 'Dr. Kárpáti Adél', field: 'Aneszteziológia', photo: karpati },
    { name: 'Dr. Szekeres Gábor', field: 'Aneszteziológia', photo: szekeres },
    { name: 'Dr. Szeghy Szabolcs', field: 'Aneszteziológia', photo: szeghy },
  ],
}

export const journey = {
  eyebrow: '05 — Az ellátás menete',
  steps: [
    { n: '01', title: 'Foglalás', desc: 'Online két perc alatt, vagy telefonon – akár másnapi időponttal.' },
    {
      n: '02',
      title: 'Vizsgálat',
      desc: 'Szakrendelés, labor és képalkotó ugyanabban az épületben, egy látogatás alatt.',
    },
    {
      n: '03',
      title: 'Lelet',
      desc: 'Jellemzően öt munkanapon belül, a kezelőorvos értelmezésével együtt.',
    },
    {
      n: '04',
      title: 'Terápia',
      desc: 'Személyre szabott kezelés, szükség esetén saját műtőinkben.',
    },
  ],
}

export const quote = {
  text: '„Reggel vérvétel, délben ultrahang, két nap múlva a lelet. Életemben először nem éreztem úgy, hogy a rendszerrel kell küzdenem.”',
  author: 'Rácz Andrea',
  detail: 'Start állapotfelmérő és kardiológiai kivizsgálás · 2026. február',
  note: 'A visszajelzés a bemutatóhoz készült, fiktív példa.',
}

export const cta = {
  title: 'Foglaljon időpontot még ma',
  text: 'Online két perc alatt. Sürgős esetben a Sürgősségi Centrum hétvégén is várja.',
}

export const footer = {
  columns: [
    {
      title: 'Ellátás',
      links: ['Szakrendelések', 'Diagnosztika', 'Laborvizsgálatok', 'Műtétek', 'Sürgősségi Centrum'],
    },
    {
      title: 'Információ',
      links: ['Orvosok', 'Árak', 'Egészség A-Z', 'Kapcsolat', 'Betegjogi tájékoztató'],
    },
  ],
  group: [
    'medicare-group.hu',
    'medicaredental.hu',
    'medicarediagnosztika.hu',
    'medicarebiztosito.hu',
  ],
  legal: 'Adatkezelés · Betegjogok · Privacy',
}
