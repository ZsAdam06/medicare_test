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
  components/           a Figma Components oldal komponensei
    Button, AudienceToggle, PackageCard, FeatureCard, Stat, Step, FaqItem,
    ServiceTile, SectionHead, Icon (Lucide ikonok a Figmából exportálva)
  sections/             az oldal szekciói (Header, Hero, Packages, WhyMedicare,
                        HowItWorks, Ecosystem, Faq, Cta, Footer)
  data/content.js       minden szöveges tartalom és kép egy helyen
  assets/               logó, hero kép, szolgáltatás-csempék képei
```

Stílusok: CSS Modules + CSS custom property tokenek, külső UI könyvtár nélkül.
Betűtípus: Plus Jakarta Sans (Google Fonts).

## Viselkedés

- **Célcsoport-váltó** (Cégeknek / Magánszemélyeknek) – a hero és a csomagok szekció
  tartalmát együtt váltja, mindkét váltó ugyanazt az állapotot vezérli.
- **GYIK** – akadálymentes harmonika, egyszerre egy nyitott elem.
- **Mobil menü** – hamburger gomb 1024px alatt, Esc-re záródik.
- **Csomagkártyák** – 1200px alatt vízszintesen görgethető, snap-elő sor.
- `prefers-reduced-motion` esetén az animációk kikapcsolnak.
