import heroImage from '../assets/hero/hero-doctor-1000.jpg'
import jarobeteg from '../assets/services/1-jarobeteg-ellatas.jpg'
import labor from '../assets/services/2-laborvizsgalatok.jpg'
import fekvobeteg from '../assets/services/3-fekvobeteg-ellatas-mutetek.jpg'
import mento from '../assets/services/4-mento.jpg'
import fogaszat from '../assets/services/5-fogaszat.jpg'
import ugyelet from '../assets/services/6-ugyeleti-ambulancia.jpg'

// A koncepció demóban még el nem készült aloldalak helykitöltő oldala.
export const PLACEHOLDER_PATH = '/keszul'

export const contacts = {
  service: { label: 'Ügyintézés', phone: '+36 1 887 3881' },
  booking: { label: 'Időpontfoglalás', phone: '+36 1 465 3100' },
  email: 'info@medicarebiztosito.hu',
}

export const telHref = (phone) => `tel:${phone.replace(/\s/g, '')}`

// Minden menüpont saját szekcióra visz, nincs két azonos célú elem.
export const nav = [
  { label: 'Csomagok', href: '/#csomagok' },
  { label: 'Miért a Medicare?', href: '/#miert' },
  { label: 'Szolgáltatások', href: '/#szolgaltatasok' },
  { label: 'GYIK', href: '/#gyik' },
  { label: 'Kapcsolat', href: '/#kapcsolat' },
]

// Tartalom cégeknek (business) és magánszemélyeknek (private)
export const hero = {
  business: {
    title: 'Egészséges kollégák, közös sikerek.',
    lead: 'Komplex vállalati egészségbiztosítás, amely segít a kiemelkedő munkaerő bevonzásában és megtartásában – már 10 fős csapattól.',
  },
  private: {
    title: 'Védje meg, ami a legfontosabb!',
    lead: 'Három gondosan összeállított egyéni egészségbiztosítási csomag a Medicare Biztosító kínálatában – válasszon és tegyen Ön is egészségéért!',
  },
  image: heroImage,
  floatingCard: {
    icon: 'calendar-check',
    title: 'Online időpontfoglalás',
    subtitle: 'Beutalók és leletek egy helyen',
  },
}

export const highlights = [
  {
    icon: 'headset',
    title: '24 órás tanácsadó vonal',
    text: 'Telefonos egészségügyi tanácsadás minden csomagban',
  },
  {
    icon: 'timer',
    title: 'Akut esetben 48 órán belül',
    text: 'Megjelenés a Medicare szolgáltatási pontján',
  },
  {
    icon: 'map-pin',
    title: 'Országos partnerhálózat',
    text: 'Saját klinikák és sokszáz szolgáltató partner',
  },
  {
    icon: 'monitor-smartphone',
    title: 'Online ügyintézés',
    text: 'Időpontok, beutalók, leletek, online fizetés',
  },
]

export const packagesSection = {
  business: {
    eyebrow: 'Vállalati csomagok',
    title: 'Öt csomag, egymásra épülő tartalommal',
    note: 'Minimum 10 fős csoportos biztosítás. Tíz fő alatt egyéni csomagjainkat ajánljuk.',
  },
  private: {
    eyebrow: 'Egyéni egészségbiztosítási csomagok',
    title: 'Három gondosan összeállított csomag az Ön egészségéért',
    note: 'Egyéni csomagjaink magánszemélyeknek és családtagjaiknak is elérhetők.',
    footnotes: [
      '* A Biztosított által a biztosítás terhére igénybe vett két fogászati szűrővizsgálat között legalább 10 hónapnak el kell telnie.',
      '¹ A Medicare Classic, Medicare Medium és Medicare Plus csomagok Szolgáltatási listái alapján.',
    ],
  },
}

export const packages = {
  business: [
    {
      name: 'Vanilla',
      accent: 'vanilla',
      description: 'Prevenció és alapellátás a legfontosabb szakterületeken.',
      benefits: [
        'Prevenciós szűrés',
        'Alap járóbeteg-ellátás',
        'Labor és diagnosztika',
        'Fogászati felülvizsgálat',
      ],
      ctaLabel: 'Részletek',
    },
    {
      name: 'Coral',
      accent: 'coral',
      description: 'Széles körű járóbeteg-ellátás további kiemelt szakterületekkel.',
      benefits: [
        'Minden a Vanillából',
        '+13 kiemelt szakterület',
        'Kardiológia, ortopédia',
        'Fizioterápia',
      ],
      ctaLabel: 'Részletek',
    },
    {
      name: 'White',
      accent: 'white',
      description: 'Bővített labor és diagnosztika, ambuláns műtétek.',
      benefits: ['Minden a Coralból', 'Széles körű labor', 'MRI, CT, endoszkópia', 'Ambuláns műtétek'],
      ctaLabel: 'Részletek',
    },
    {
      name: 'Blue',
      accent: 'blue',
      highlighted: true,
      badge: 'Népszerű',
      description: 'Gyógytorna, egynapos sebészet és pszichiátriai vizsgálat.',
      benefits: [
        'Minden a White-ból',
        'Gyógytorna, masszázs',
        'Egynapos sebészet',
        'Pszichiátriai vizsgálat',
      ],
      ctaLabel: 'Részletek',
    },
    {
      name: 'Gold',
      accent: 'gold',
      description: 'A legteljesebb csomag, VIP-szintű kórházi ellátással.',
      benefits: ['Minden a Blue-ból', 'VIP kórházi ellátás', 'Betegszállítás', 'Fogkő-eltávolítás'],
      ctaLabel: 'Részletek',
    },
  ],
  private: [
    {
      name: 'Classic',
      accent: 'vanilla',
      price: '15 280 Ft',
      period: '/hó',
      description: 'Alapvető egészségvédelem',
      limit: 'Max. 8 vizit / biztosítási időszak',
      benefits: [
        'Prevenciós vizsgálatok¹',
        'Telemedicina, e-doktor, e-recept',
        'Járóbeteg-ellátás',
        'Laborvizsgálatok',
        'Diagnosztikai vizsgálatok',
        'Fogászati felülvizsgálat*',
      ],
      ctaLabel: 'Érdekel!',
    },
    {
      name: 'Medium',
      accent: 'coral',
      price: '20 690 Ft',
      period: '/hó',
      description: 'Több gondoskodás, nagyobb biztonság',
      limit: 'Max. 10 vizit / biztosítási időszak',
      benefits: [
        'Prevenciós vizsgálatok¹',
        'Telemedicina, e-doktor, e-recept',
        'Széles körű járóbeteg-ellátás',
        'Laborvizsgálatok',
        'Diagnosztikai vizsgálatok',
        'Ambuláns sebészeti műtétek',
        'Fogászati felülvizsgálat*',
      ],
      ctaLabel: 'Érdekel!',
    },
    {
      name: 'Plus',
      accent: 'blue',
      highlighted: true,
      badge: 'Legnépszerűbb',
      price: '23 395 Ft',
      period: '/hó',
      description: 'A legnépszerűbb választás',
      limit: 'Max. 10 vizit / biztosítási időszak',
      benefits: [
        'Prevenciós vizsgálatok¹',
        'Telemedicina, e-doktor, e-recept',
        'Széles körű járóbeteg-ellátás',
        'Széles körű laborvizsgálatok',
        'Széles körű diagnosztikai vizsgálatok',
        'Ambuláns sebészeti műtétek',
        'Gyógytorna és gyógymasszázs',
        'Fogászati felülvizsgálat*',
      ],
      ctaLabel: 'Érdekel!',
    },
  ],
}

export const packageComparison = {
  columns: [
    { key: 'feature', label: 'Szempont' },
    { key: 'classic', label: 'Classic' },
    { key: 'medium', label: 'Medium' },
    { key: 'plus', label: 'Plus' },
  ],
  rows: [
    {
      feature: 'Prevenciós vizsgálatok',
      classic: true,
      medium: true,
      plus: true,
    },
    {
      feature: 'Járóbeteg-ellátás',
      classic: 'Alapvető',
      medium: 'Széles körű',
      plus: 'Széles körű',
    },
    {
      feature: 'Laborvizsgálatok',
      classic: 'Alapvető',
      medium: 'Alapvető',
      plus: 'Széles körű',
    },
    {
      feature: 'Diagnosztikai vizsgálatok',
      classic: 'Alapvető',
      medium: 'Alapvető',
      plus: 'Széles körű',
    },
    {
      feature: 'Ambuláns sebészeti műtétek',
      classic: false,
      medium: true,
      plus: true,
    },
    {
      feature: 'Gyógytorna és gyógymasszázs',
      classic: false,
      medium: false,
      plus: true,
    },
    {
      feature: 'Fogászati felülvizsgálat',
      classic: true,
      medium: true,
      plus: true,
    },
  ],
}

export const whyMedicareSection = {
  business: {
    eyebrow: 'Miért a Medicare?',
    title: 'Piacvezető egészségbiztosító, több évtizedes egészségügyi háttérrel',
  },
  private: {
    eyebrow: 'Miért a Medicare?',
    title: 'Miért válassza a Medicare egészségbiztosítási csomagjait?',
  },
}

export const features = {
  business: [
    {
      icon: 'hospital',
      title: 'Saját klinikák, országos hálózat',
      description: 'A Medicare Zrt. klinikáin és országszerte sokszáz szolgáltató partnernél.',
    },
    {
      icon: 'clock',
      title: 'Gyors hozzáférés',
      description: 'Egyeztetett időpontban, akut esetben 48 órán belül.',
    },
    {
      icon: 'calendar-check',
      title: 'Megújult online foglalás',
      description:
        'Beutalók, leletek, időpontmódosítás és online fizetés, automatikus fedezetvizsgálattal.',
    },
    {
      icon: 'headset',
      title: '24 órás tanácsadó vonal',
      description: 'Telefonos egészségügyi tanácsadás minden vállalati csomagban.',
    },
    {
      icon: 'layers',
      title: 'Bővíthető kiegészítőkkel',
      description: 'Kórház Plusz, Onkológia, Emergency, Ügyeleti Centrum és fogászati csomagok.',
    },
    {
      icon: 'users',
      title: 'HR-portál',
      description: 'Hamarosan: szerződések, biztosítottak, számlák és ki-/belépések egy helyen.',
    },
  ],
  private: [
    {
      icon: 'clock',
      title: 'Gyors időpontok',
      description: 'Rövid várakozási idő országos partnerhálózattal.',
    },
    {
      icon: 'hospital',
      title: 'Prémium ellátás',
      description: 'Magas színvonalú magánegészségügyi ellátás.',
    },
    {
      icon: 'monitor-smartphone',
      title: 'Online ügyintézés',
      description: 'Időpontfoglalás és dokumentumkezelés egy helyen.',
    },
    {
      icon: 'shield',
      title: 'Biztonság',
      description: 'Megbízható egészségügyi és biztosítói háttér.',
    },
  ],
}

export const stats = {
  business: [],
  private: [
    { value: 15, suffix: '+ év', label: 'biztosítói háttér' },
    { value: 25, suffix: '+ év', label: 'egészségügyi tapasztalat' },
    { value: 450, suffix: '+', label: 'szerződött partner' },
  ],
}

export const howItWorksSection = {
  business: {
    eyebrow: 'Az ellátás menete',
    title: 'Így veheti igénybe az ellátást',
  },
  private: {
    eyebrow: 'Szerződéskötés és ellátás',
    title: 'Egyszerű szerződéskötési folyamat',
  },
}

export const steps = {
  business: [
    {
      title: 'Időpontfoglalás',
      description:
        'Online, vagy telefonon a +36 1 465 3100-as számon, hétköznap 7 és 20 óra között.',
    },
    {
      title: 'Fedezetellenőrzés',
      description: 'Az MRN azonosító alapján; online foglalásnál a legtöbbször automatikusan.',
    },
    {
      title: 'Ellátás',
      description:
        'Egyeztetett időpontban, akut esetben 48 órán belül a Medicare szolgáltatási pontján.',
    },
  ],
  private: [
    {
      title: 'Válasszon csomagot!',
      description:
        'Hasonlítsa össze a szolgáltatásokat, és válassza ki az Ön számára legmegfelelőbbet!',
    },
    {
      title: 'Kösse meg online!',
      description:
        'A szerződéskötés digitális rendszerünkön keresztül gyorsan és egyszerűen elvégezhető.',
    },
    {
      title: 'Foglaljon időpontot!',
      description:
        'A szerződéskötés után azonnal hozzáférhetővé válnak a fedezett szolgáltatások.',
    },
  ],
}

export const services = [
  { title: 'Járóbeteg-ellátás', site: 'medicare-group.hu', image: jarobeteg },
  { title: 'Laborvizsgálatok', site: 'medicarelabor.hu', image: labor },
  { title: 'Fekvőbeteg-ellátás, műtétek', site: 'medicare-group.hu', image: fekvobeteg },
  { title: 'Mentő', site: 'medicare-group.hu', image: mento },
  { title: 'Fogászat', site: 'medicaredental.hu', image: fogaszat },
  { title: 'Ügyeleti ambulancia', site: 'medicare-group.hu', image: ugyelet },
].map((service) => ({ ...service, href: `https://${service.site}` }))

export const faqs = {
  business: [
    {
      question: 'Hány főtől köthető céges egészségbiztosítás?',
      answer:
        'Minimum 10 fős csoportos biztosításra küldünk ajánlatot. Tíz fő alatt egyéni egészségbiztosítási csomagjainkat ajánljuk.',
    },
    {
      question: 'Hogyan foglalhatnak időpontot a munkatársak?',
      answer:
        'Online, a megújult foglalási felületen, vagy telefonon a +36 1 465 3100-as számon, hétköznap 7 és 20 óra között.',
    },
    {
      question: 'Kiterjeszthető a biztosítás a családtagokra?',
      answer:
        'Igen, a munkavállalók családtagjai kedvezményes feltételekkel csatlakozhatnak. A részletekről ajánlatkéréskor tájékoztatjuk.',
    },
    {
      question: 'Van limit az igénybe vehető szolgáltatásokra?',
      answer:
        'A csomagok szolgáltatásonként eltérő éves kereteket tartalmaznak. A pontos limiteket a csomagok részletes összehasonlítása mutatja.',
    },
  ],
  private: [
    {
      question: 'Csak saját magamra tudok biztosítást kötni?',
      answer:
        'Nem, akár családtagokra is megköthető. A Szerződő fél egy időben köthet saját magára, de akár családtagjaira is biztosítást. A csomagok azonban lehetnek eltérőek a különböző személyekre.',
    },
    {
      question: 'Ha több főre szeretnék csomagot választani, egy szerződésben is meg tudom kötni?',
      answer:
        'Igen, de fontos kiemelni, hogy a kockázatviselés kezdete és a tartam azonos lesz, és az összesített díjat kell fizetni, egy választott fizetési gyakoriság szerint, ismétlődő fizetéssel.',
    },
    {
      question: 'Mikor és mennyit kell fizetnem, milyen fizetési mód választható?',
      answer:
        'A biztosítás díja vagy első díjrészlete a szerződéskötési folyamat végén fizetendő. A fizetési gyakoriság lehet havi, negyedéves, féléves vagy éves is. A fizetési mód minden esetben úgynevezett ismétlődő díjfizetés (az Ön előzetes felhatalmazása alapján automatikusan vonódik le a bankszámláról).',
    },
    {
      question: 'Mikortól vehetem igénybe? Van várakozási idő?',
      answer:
        'A szerződéskötés napján indul a kockázatviselés, így már akár aznap tud időpontot foglalni a csomagban foglalt szolgáltatásokra, nincs várakozási idő.',
    },
    {
      question: 'Van önrész vagy fix díj, ha csomag terhére szeretnék ellátást igénybe venni?',
      answer: 'Nincs, a biztosítás terhére a szolgáltatások önrész nélkül vehetők igénybe.',
    },
    {
      question: 'Mit tartalmaznak pontosan a csomagok?',
      answer:
        'A szolgáltatási tartalom függ a választott csomagtól. A szolgáltatásokat elsősorban betegségekkel összefüggésben, azok kivizsgálása és kezelése céljából lehet igénybe venni. Ezen felül meghatározott szolgáltatások preventív / megelőzési céllal is igénybe vehetők.',
    },
    {
      question: 'Vannak limitek?',
      answer:
        'Igen, a biztosítási csomagok tartalmaznak limiteket. A Classic csomag terhére 8 vizit vehető igénybe a csomagtartalom szerinti szolgáltatások közül egy biztosítási évben. A Medium, illetve a Plus csomag terhére 10-10 vizit.',
    },
    {
      question: 'Milyen tartamra lehet kötni?',
      answer: 'Egy évre, amely annak letelte után akár meg is hosszabbodhat.',
    },
    {
      question: 'Milyen életkorú személyekre lehet biztosítást kötni?',
      answer:
        'A kötés napján legalább fél éves és legfeljebb 70 éves személyekre. Amennyiben kiskorúra kötnek, fontos, hogy a törvényes képviselője is biztosított legyen.',
    },
    {
      question: 'Milyen esetekre nem terjed ki a biztosítási védelem, mik a kizárt kockázatok?',
      answer: 'Ezek listáját az ÁSZF 6. és 7. §-ában találhatja meg.',
    },
    {
      question: 'Hogyan szüntethetem meg a biztosítást?',
      answer:
        'Amennyiben valaki eléri a felső életkorhatárt, annak a biztosítási év végével megszűnik a szerződés. A Szerződést a biztosítási év végével indoklás nélkül, írásban fel lehet mondani legalább az évforduló előtt 30 nappal.',
    },
    {
      question: 'Hol vehetem igénybe a biztosítás terhére a csomagomban szereplő ellátásokat?',
      answer:
        'A Medicare Zrt. saját klinikáin, illetve a Medicare Biztosító egészségügyi szolgáltatói partnerhálózatában. Az ellátásokat a Medicare szervezésében veheti igénybe, időpontot online vagy a +36 1 465 3100 számon foglalhat.',
    },
    {
      question: 'Változhat-e év közben a biztosítás díja?',
      answer:
        'A biztosítási év közben a díj változatlan. Módosításra kizárólag évfordulóval hatályba lépően van lehetőség.',
    },
  ],
}

export const cta = {
  business: {
    title: 'Kérjen ajánlatot cégének!',
    text: 'Minimum 10 fős csoportos egészségbiztosításra. Kollégáink várják megkeresését!',
    primaryLabel: 'Ajánlatot kérek',
    primaryHref: 'mailto:info@medicarebiztosito.hu?subject=Ajánlatkérés',
  },
  private: {
    title: 'Gondoskodjon egészségéről még ma!',
    text: 'Válassza ki az Önnek és családjának legmegfelelőbb egyéni egészségbiztosítási csomagot várakozási idő nélkül!',
    primaryLabel: 'Csomag kiválasztása',
    primaryHref: '#csomagok',
  },
}

export const footer = {
  brand: {
    name: 'Medicare Biztosító',
    address: ['1134 Budapest, Váci út 29-31.', 'Vision Towers irodaház'],
  },
  columns: [
    {
      title: 'Egészségbiztosítás',
      links: ['Magánszemélyeknek', 'Vállalati csomagok', 'Kiegészítő csomagok', 'Ajánlatkérés'].map(
        (label) => ({ label, href: PLACEHOLDER_PATH }),
      ),
    },
    {
      title: 'Hasznos linkek',
      links: [
        'Nyomtatványok',
        'Panaszkezelési tájékoztató',
        'Kárrendezési tájékoztató',
        'Közzétételek',
      ].map((label) => ({ label, href: PLACEHOLDER_PATH })),
    },
    {
      title: 'További weboldalaink',
      links: [
        'medicare-group.hu',
        'medicarekorhaz.hu',
        'medicaredental.hu',
        'medicareoptika.hu',
        'medicareszuleszet.hu',
      ].map((label) => ({ label, href: `https://${label}`, external: true })),
    },
  ],
  copyright: '© 2026 Medicare Biztosító Zrt. · Koncepció demó, nem hivatalos oldal',
  legal: [
    'Adatkezelési tájékoztató',
    'Adathalászati tájékoztató',
    'Jogi nyilatkozat',
    'Pénzügyi navigátor',
  ].map((label) => ({ label, href: PLACEHOLDER_PATH })),
}
