# Medicare Biztosító – landing oldal (redesign koncepció)

React + Vite implementáció a Figma „Medicare Biztosító – Redesign koncepció” terv alapján
(Foundations, Components és Landing – Desktop 1440 / Mobile 390 oldalak).

## Futtatás

```bash
npm install
npm run dev      # fejlesztői szerver: http://localhost:5173
npm run build    # production build a dist/ mappába
npm run preview  # a build kiszolgálása
```

## Felépítés

```
src/
  styles/tokens.css     Foundations: színskálák, package színek, layout változók
  styles/global.css     reset + tipográfiai osztályok (t-display … t-caption, t-button)
  pages/                oldalak (Landing, Compare, NotReady)
  components/           a Figma Components oldal komponensei
    Button, SegmentedControl, AudienceToggle, PackageCard, FeatureCard, Stat, Step, FaqItem,
    Modal, QuoteForm (ajánlatkérő modal), QuoteDialog (provider + hook),
    ServiceTile, SectionHead, Icon (Lucide ikonok a Figmából exportálva)
  sections/             az oldal szekciói (Header, Hero, Packages, WhyMedicare,
                        HowItWorks, Ecosystem, Faq, Cta, Footer)
  data/content.js       a nyitóoldal szövegei és képei
  data/comparison.js    az összehasonlító oldal csomag- és szolgáltatásadatai
  data/quote.js         az ajánlatkérő űrlap mezői és választható értékei
  data/routes.js        a két célcsoport útvonalai
  data/korhaz.js        a kórházi oldal szövegei és képei
  pages/Korhaz/         a kórházi oldal (saját fejléc, lábléc és stílusrendszer)
  assets/               logó, hero kép, szolgáltatás-csempék képei
```

Stílusok: CSS Modules + CSS custom property tokenek, külső UI könyvtár nélkül.
Betűtípus: Plus Jakarta Sans (Google Fonts).

## Oldalak

- `/` – nyitóoldal, cégeknek szóló tartalommal
- `/maganszemelyeknek` – ugyanaz az oldal, magánszemélyeknek szóló tartalommal
- `/korhaz` – a Medicare Magánkórház nyitóoldala: önálló arculat (Instrument Serif + Manrope,
  sötét–krém ritmus, menta akcentus), videós heróval
- `/csomagok-osszehasonlitasa` – a vállalati csomagok részletes összehasonlítása
  (15 szolgáltatás × 5 csomag, soronként lenyitható hivatalos leírással, lábjegyzetekkel)
- minden más útvonal (`/keszul`, elgépelt cím) – „Ez az oldal még nem készült el” helykitöltő oldal,
  fejléccel és lábléccel. A demóban még el nem készült aloldalak linkjei ide mutatnak.

Kliensoldali routing (react-router), ezért statikus kiszolgálón minden útvonalat az
`index.html`-re kell irányítani. Ezt a `public/_redirects` fájl intézi (Render, Netlify);
a `vite dev` és a `vite preview` magától kezeli.

## Viselkedés

- **Célcsoport-váltó** (Cégeknek / Magánszemélyeknek) – a felső sávban, a fejléccel
  együtt ragadva, így végig látszik, melyik nézetben van a látogató. A két nézetnek
  saját URL-je van (megosztható, a vissza gomb működik), váltáskor a görgetési
  pozíció megmarad, a cserélődő szekciók áttűnnek, és egy rövid csík visszajelez.
  Mobilon a felső sávban egy kompakt gomb vált a másik nézetre.
- **GYIK** – akadálymentes harmonika, egyszerre egy nyitott elem.
- **Mobil menü** – hamburger gomb 1024px alatt, Esc-re záródik.
- **Csomagkártyák** – 1200px alatt vízszintesen görgethető, snap-elő sor.
- **Ajánlatkérés** – minden „Ajánlatot kérek” gomb egy modal ablakot nyit (natív <dialog>):
  három lépés (adatok → csomag → áttekintés), mezőszintű validáció, siker-állapot.
  Cégeknek és magánszemélyeknek külön mezőkészlet; a magánszemélyes kártyák
  „Érdekel!” gombja előre kiválasztja az adott csomagot.
  Koncepció demó: az űrlap nem küld adatot sehova.
- **Összehasonlító táblázat** – asztali nézetben ragadós fejléc és első oszlop,
  900px alatt csomagválasztóval egyszerre egy csomag oszlopa látszik.
- `prefers-reduced-motion` esetén az animációk kikapcsolnak.

## A kórházi hero videója

A videó helye: `public/media/korhaz-hero.mp4`. A fájl cseréjéhez elég felülírni ezt az
egy fájlt – a poszterkép (`src/assets/korhaz/hero-poszter.jpg`) addig is látszik, amíg a
videó betölt, és csökkentett mozgásigény esetén a videó meg is áll. Ajánlott: néma,
10–15 másodperces loop, 1920×1080, 3 MB alatt.

## Akadálymentesség

WCAG 2.2 AA szempontból ellenőrizve (axe-core + kézi teszt), mindkét célcsoport-nézetben
és a helykitöltő oldalon is nulla hibával.

- „Ugrás a tartalomra” link, fókuszra jelenik meg
- kettős (sötét + fehér) fókuszkeret, hogy világos és sötét háttéren is 3:1 fölött legyen
- a célcsoport-váltás `aria-live` üzenetben is megjelenik a képernyőolvasónak
- az összehasonlító táblázat: caption, `scope` fejlécek, sorfejlécek, a ✓ és — jelek
  mellett rejtett „Tartalmazza” / „Nem tartalmazza” szöveg, billentyűzettel görgethető doboz
- az új lapon nyíló linkek rejtett „(új lapon nyílik meg)” szöveget kapnak
- Windows kontrasztos témához (`forced-colors`) külön szabályok
- 320px-es szélességen sincs vízszintes görgetés
