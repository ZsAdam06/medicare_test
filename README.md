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
  assets/               logó, hero kép, szolgáltatás-csempék képei
```

Stílusok: CSS Modules + CSS custom property tokenek, külső UI könyvtár nélkül.
Betűtípus: Plus Jakarta Sans (Google Fonts).

## Oldalak

- `/` – nyitóoldal
- `/csomagok-osszehasonlitasa` – a vállalati csomagok részletes összehasonlítása
  (15 szolgáltatás × 5 csomag, soronként lenyitható hivatalos leírással, lábjegyzetekkel)
- minden más útvonal (`/keszul`, elgépelt cím) – „Ez az oldal még nem készült el” helykitöltő oldal,
  fejléccel és lábléccel. A demóban még el nem készült aloldalak linkjei ide mutatnak.

Kliensoldali routing (react-router), ezért statikus kiszolgálón minden útvonalat az
`index.html`-re kell irányítani (a `vite dev` és a `vite preview` ezt magától megteszi).

## Viselkedés

- **Célcsoport-váltó** (Cégeknek / Magánszemélyeknek) – a hero és a csomagok szekció
  tartalmát együtt váltja, mindkét váltó ugyanazt az állapotot vezérli.
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
