import heroImage from '../assets/hero/hero-doctor-1000.jpg'
import jarobeteg from '../assets/services/1-jarobeteg-ellatas.jpg'
import labor from '../assets/services/2-laborvizsgalatok.jpg'
import fekvobeteg from '../assets/services/3-fekvobeteg-ellatas-mutetek.jpg'
import mento from '../assets/services/4-mento.jpg'
import fogaszat from '../assets/services/5-fogaszat.jpg'
import ugyelet from '../assets/services/6-ugyeleti-ambulancia.jpg'

export const contacts = {
  service: { label: 'Ügyintézés', phone: '+36 1 887 3881' },
  booking: { label: 'Időpontfoglalás', phone: '+36 1 465 3100' },
  email: 'info@medicarebiztosito.hu',
}

export const telHref = (phone) => `tel:${phone.replace(/\s/g, '')}`

export const nav = [
  { label: 'Egészségbiztosítás', href: '#csomagok', hasMenu: true },
  { label: 'A biztosítóról', href: '#miert' },
  { label: 'Miért a Medicare?', href: '#miert' },
  { label: 'Kapcsolat', href: '#kapcsolat' },
]

// A „Magánszemélyeknek” változathoz nincs Figma-terv – a szövegek helykitöltők.
export const hero = {
  business: {
    title: 'Egészséges kollégák, közös sikerek.',
    lead: 'Komplex vállalati egészségbiztosítás, amely segít a kiemelkedő munkaerő bevonzásában és megtartásában – már 10 fős csapattól.',
  },
  private: {
    title: 'Egészség, amire mindig számíthat.',
    lead: 'Egyéni egészségbiztosítás gyors szakorvosi hozzáféréssel és online ügyintézéssel – önnek és családjának.',
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
    eyebrow: 'Egyéni csomagok',
    title: 'Öt csomag, egymásra épülő tartalommal',
    note: 'Egyéni csomagjaink magánszemélyeknek és tíz fő alatti csapatoknak is elérhetők.',
  },
}

export const packages = [
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
  },
  {
    name: 'White',
    accent: 'white',
    description: 'Bővített labor és diagnosztika, ambuláns műtétek.',
    benefits: ['Minden a Coralból', 'Széles körű labor', 'MRI, CT, endoszkópia', 'Ambuláns műtétek'],
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
  },
  {
    name: 'Gold',
    accent: 'gold',
    description: 'A legteljesebb csomag, VIP-szintű kórházi ellátással.',
    benefits: ['Minden a Blue-ból', 'VIP kórházi ellátás', 'Betegszállítás', 'Fogkő-eltávolítás'],
  },
]

export const features = [
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
]

export const steps = [
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
]

export const services = [
  { title: 'Járóbeteg-ellátás', site: 'medicare-group.hu', image: jarobeteg },
  { title: 'Laborvizsgálatok', site: 'medicarelabor.hu', image: labor },
  { title: 'Fekvőbeteg-ellátás, műtétek', site: 'medicare-group.hu', image: fekvobeteg },
  { title: 'Mentő', site: 'medicare-group.hu', image: mento },
  { title: 'Fogászat', site: 'medicaredental.hu', image: fogaszat },
  { title: 'Ügyeleti ambulancia', site: 'medicare-group.hu', image: ugyelet },
].map((service) => ({ ...service, href: `https://${service.site}` }))

// Az első válasz a Figmából származik, a többi helykitöltő (a tervben zárt állapotúak).
export const faqs = [
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
]

export const footer = {
  brand: {
    name: 'Medicare Biztosító',
    address: ['1134 Budapest, Váci út 29-31.', 'Vision Towers irodaház'],
  },
  columns: [
    {
      title: 'Egészségbiztosítás',
      links: ['Magánszemélyeknek', 'Vállalati csomagok', 'Kiegészítő csomagok', 'Ajánlatkérés'].map(
        (label) => ({ label, href: '#' }),
      ),
    },
    {
      title: 'Hasznos linkek',
      links: [
        'Nyomtatványok',
        'Panaszkezelési tájékoztató',
        'Kárrendezési tájékoztató',
        'Közzétételek',
      ].map((label) => ({ label, href: '#' })),
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
  legal: ['Adatkezelési tájékoztató', 'Adathalászati tájékoztató', 'Jogi nyilatkozat', 'Pénzügyi navigátor'],
}
