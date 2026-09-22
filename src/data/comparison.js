// A vállalati csomagok részletes összehasonlítása.
// Forrás: medicarebiztosito.hu/egeszsegbiztositasi-csomagjaink (koncepció demó).

export const COMPARE_PATH = '/csomagok-osszehasonlitasa'

export const comparePage = {
  eyebrow: 'Vállalati csomagok',
  title: 'Csomagok részletes összehasonlítása',
  lead: 'Öt csomag, egymásra épülő tartalommal. A táblázat szolgáltatásonként mutatja, melyik csomag mit fedez – a hivatalos leírások soronként lenyithatók.',
  note: 'Minimum 10 fős csoportos biztosítás. Tíz fő alatt egyéni csomagjainkat ajánljuk.',
}

export const comparePackages = [
  { key: 'vanilla', name: 'Vanilla', accent: 'vanilla' },
  { key: 'coral', name: 'Coral', accent: 'coral' },
  { key: 'white', name: 'White', accent: 'white' },
  { key: 'blue', name: 'Blue', accent: 'blue', highlighted: true },
  { key: 'gold', name: 'Gold', accent: 'gold' },
]

/** true = fedezett, szöveg = fedezett, kiegészítéssel, false = nem tartalmazza. */
export const compareRows = [
  {
    label: 'Időpontfoglalás és 24 órás tanácsadás',
    detail:
      'Időpontfoglalás (+36 1 465 3188), 24 órás telefonos egészségügyi tanácsadás a Medicare Zrt.-nél (+36 1 465 3101), valamint szolgáltatásszervezés.',
    values: { vanilla: true, coral: true, white: true, blue: true, gold: true },
  },
  {
    label: 'Prevenciós vizsgálatok',
    marker: '**',
    detail:
      'Biztosítási évente egy alkalommal, csomag-, nem- és korfüggő kockázatok szerinti tartalommal, kétféle laborcsomagváltozat egyike szerint, közvetlenül a Medicare Zrt.-nél.',
    values: {
      vanilla: 'Classic laborral',
      coral: 'Classic laborral',
      white: 'Classic laborral',
      blue: 'Classic laborral',
      gold: 'Classic laborral',
    },
  },
  {
    label: 'Járóbeteg-ellátás (primer szakterületek)',
    detail:
      'Belgyógyászat, illetve gyermekgyógyászat, fül-, orr-, gégészet, szemészet, nőgyógyászat, urológia, bőrgyógyászat. Influenza elleni védőoltás orvosilag indokolt esetben, biztosítási évente egy alkalommal.',
    values: { vanilla: true, coral: true, white: true, blue: true, gold: true },
  },
  {
    label: 'Laborvizsgálatok (standard)',
    detail:
      'Alapvető vér-, vizelet- és székletvizsgálatok, széklet bakteriológiai vizsgálata, véralvadás-vizsgálat, vörösvérsejt-süllyedés vizsgálata (We), alapvető fertőzésvizsgálatok (kivéve STD-teszt, HIV-teszt) és hormonvizsgálatok (TSH, FT3, FT4), férfiaknak prosztatarák kiszűrése (PSA).',
    values: { vanilla: true, coral: true, white: true, blue: true, gold: true },
  },
  {
    label: 'Diagnosztikai vizsgálatok (standard)',
    detail:
      'Nőgyógyászati citológiai vizsgálat, nyugalmi EKG, terheléses EKG, Holter EKG, ABPM, ultrahang (UH), Röntgen (enterográfia, nyelésvizsgálat), mammográfia, Doppler-, illetve arteriográfos érvizsgálat, audiometria, dermatoszkópia, centrális csontsűrűség-vizsgálat (ODM), látótérvizsgálat, allergiatesztek (Epicutan-teszt, életkortól függően bőrön Prick-teszt, illetve vérvétellel).',
    values: { vanilla: true, coral: true, white: true, blue: true, gold: true },
  },
  {
    label: 'Széles körű járóbeteg-ellátás',
    detail:
      'További kiemelt szakterületek: allergológia, kardiológia, reumatológia, ortopédia, tüdőgyógyászat, neurológia, gasztroenterológia, endokrinológia, infektológia, diabetológia, angiológia, dietetika, elektroterápia (fizioterápia).',
    values: { vanilla: false, coral: true, white: true, blue: true, gold: true },
  },
  {
    label: 'Széles körű laborvizsgálatok',
    detail:
      'További kiemelt laborvizsgálatok: vér-, vizelet- és székletvizsgálatok, hematológia, PCR, immunológiai vizsgálatok (szerológia), fertőzésvizsgálatok (kivéve STD-teszt, HIV-teszt), hormonvizsgálatok, tumor- és rákmarkerek, genetikai vizsgálatok, toxikológiai vizsgálatok.',
    values: { vanilla: false, coral: false, white: true, blue: true, gold: true },
  },
  {
    label: 'Széles körű diagnosztikai vizsgálatok',
    detail:
      'További kiemelt vizsgálatok: aspirációs citológia, allergének kimutatása vérből, biopszia, illetve sejtdiagnosztika, szövettani vizsgálatok, endoszkópos-tükrözéses vizsgálatok (gasztroszkópia, kolonoszkópia, cystoszkópia kizárólag diagnosztikus céllal, terápiás intervenció nélkül), respiratórikus pulzoximetria, MRI, Cardio MR (viabilitás), CT, cardio-CT¹, 18 F-FDG PET-CT, EEG, EMG, ENG, érrendszeri vizsgálatok, angiográfia, enterográfia, radioizotópos vizsgálatok (scintigráfia), ízületi punkció, spirometria.',
    values: { vanilla: false, coral: false, white: true, blue: true, gold: true },
  },
  {
    label: 'Ambuláns műtétek',
    values: { vanilla: false, coral: false, white: true, blue: true, gold: true },
  },
  {
    label: 'Gyógytorna és gyógymasszázs',
    detail: 'Biztosítási évente és biztosítottanként legfeljebb 10-10 alkalommal.',
    values: { vanilla: false, coral: false, white: false, blue: true, gold: true },
  },
  {
    label: 'Egynapos sebészet (standard)',
    marker: '***',
    detail: 'Meghatározott beavatkozások esetén, a lábjegyzetben felsorolt körben.',
    values: { vanilla: false, coral: false, white: false, blue: true, gold: true },
  },
  {
    label: 'Pszichiátriai szakorvosi vizsgálatok',
    detail: 'Biztosítási évente és biztosítottanként legfeljebb 4 alkalommal.',
    values: { vanilla: false, coral: false, white: false, blue: true, gold: true },
  },
  {
    label: 'Fogászati felülvizsgálat',
    detail:
      'Biztosítási évente egy alkalommal, közvetlenül a Medicare Dental Kft.-nél, országosan.',
    values: { vanilla: true, coral: true, white: true, blue: true, gold: true },
  },
  {
    label: 'Dentálhigiéniás kezelés (fogkő-levétel)',
    detail:
      'Biztosítási évente egyszer, közvetlenül a Medicare Dental Kft.-nél, országosan.',
    values: { vanilla: false, coral: false, white: false, blue: false, gold: true },
  },
  {
    label: 'Kórházi fekvőbeteg-ellátás VIP-szinten',
    detail: 'Betegszállítással és széles körű egynapos sebészettel, a * jelű limitek szerint.',
    values: { vanilla: false, coral: false, white: false, blue: false, gold: true },
  },
]

export const compareFootnotes = [
  {
    marker: '*',
    title: 'Korlátlan igénybevétel és a Gold csomag limitjei',
    text: 'A Vanilla, Coral, White és Blue csomagok esetén a fedezett szolgáltatások korlátlan számban igénybe vehetők a Medicare Zrt. szervezésében, ha a szolgáltatásnál nincs limit jelezve. A Gold csomagban kizárólag a kórházi fekvőbeteg-ellátás, a betegszállítás és az egynapos sebészet limitált: ezekre a Biztosító együttesen 3 500 000 Ft éves limit erejéig térít biztosított személyenként és biztosítási évente. A Biztosító biztosítási évenként legfeljebb 60 kórházban töltött napot finanszíroz biztosítottanként, betegszállításonként pedig 75 000 Ft-os limitet alkalmaz.',
  },
  {
    marker: '**',
    title: 'Prevenciós vizsgálatok tartalma',
    text: 'A szűrővizsgálat minden biztosítási időszakban annak a tartalomnak megfelelően vehető igénybe, amely a Medicare Zrt. mindenkor hatályos Szűrési Protokolljában részletezett laborcsomagok leírásában szerepel. A tartalom nemtől, életkortól és biztosítási csomagtól is függhet. A Szűrési Protokollt a Biztosító hozzáférhetővé teszi.',
  },
  {
    marker: '***',
    title: 'Fedezett egynapos sebészeti beavatkozások',
    text: 'Adhaesiolysis conjunctivae seu/et palpebrae, arcüreg drainage (intranasalis ablak Lothrop szerint), bőr hegének vagy zsugorodásának megszüntetése, bőrbeni és bőr alatti sipoly kimetszése, carpal tunnel felszabadítás, cervix elváltozás kimetszése, circumcisio, ectropium elleni műtét, elektroconisatio portionis, endometrium resectio (hysteroscop), endoszkópos (mikroszkópos) arcüregműtét, entropium elleni műtét, excisio condylomae perianalis, excisio laesionis mammae, exostosis levésés, frakcionált curettage, haemorrhoidectomia, herefüggöly eltávolítása, hüvelyi septum kiirtása, hydrokele műtét, ínhüvely exstirpatio tenosynovectomia, íntapadás leválasztás, izomeredés leválasztás részlegesen, kéz lágyrészének feltárása, kryoconisatio portionis, lábháti ganglion exstirpatio, marsupialisatio glandulae Bartholini, méhpolyp eltávolítás, méhszáj plastica, mucotomia nasi, oncotomia perianalis, orchidopexia, phimotomia, polypectomia colontos per colonoscopiam, polypectomia ventriculi per gastroscopiam, pterygium excisio, resectio palpebrae, resectio uvulae, scrotalis varicokelectomia, spermatokele resectio, sphyncterotomia ani, sutura conjunctivae, tendolysis kézen.',
  },
  {
    marker: '¹',
    title: 'Cardio-CT',
    text: '6–15% közötti PTP (pre-teszt probabilitás) esetén nem fedezett.',
  },
]

export const compareDisclaimer =
  'A biztosítási szerződésre irányadó Medicare Biztosító Zrt. csoportos kockázati szolgáltatásfinanszírozó egészségbiztosítás Általános Feltételei rendelkezéseivel együttesen értelmezendő.'
