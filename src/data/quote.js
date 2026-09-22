// Az ajánlatkérő űrlap mezői és választható értékei.
// Forrás: medicarebiztosito.hu/ajanlatkeres (koncepció demó – az űrlap nem küld adatot sehova).

export const quotePackages = {
  business: [
    'Vanilla Egészségbiztosítási Csomag',
    'Coral Egészségbiztosítási Csomag',
    'White Egészségbiztosítási Csomag',
    'Blue Egészségbiztosítási Csomag',
    'Gold Egészségbiztosítási Csomag',
    'Kórház Plusz Kiegészítő Csomag',
    'Emergency Kiegészítő Csomag',
    'Ügyeleti Centrum Egészségbiztosítási Csomag',
    'WHITE D – fogászati csoportos csomag',
    'Kórház Plusz Onkológia Kiegészítő Csomag',
  ],
  private: [
    'Medicare Classic',
    'Medicare Medium',
    'Medicare Plus',
  ],
}

export const quoteSources = [
  'Facebook',
  'Google',
  'LinkedIn',
  'HVG',
  'HRportal',
  'Portfolio.hu',
  'Mesterséges intelligencia (ChatGPT, Claude, Gemini, Copilot)',
  'Ismerőstől',
  'Már ismertem',
  'Egyéb',
]

export const quoteCopy = {
  business: {
    title: 'Ajánlatkérés cégeknek',
    lead: 'Minimum 10 fős csoportos biztosításra tudunk ajánlatot küldeni. Töltse ki az űrlapot, és kollégáink felveszik Önnel a kapcsolatot.',
    steps: ['Kapcsolattartó', 'Cég és csomag', 'Áttekintés'],
    packagesLabel: 'Melyik biztosítási csomagunk iránt érdeklődik?',
  },
  private: {
    title: 'Ajánlatkérés magánszemélyeknek',
    lead: 'Egyéni egészségbiztosítási csomagjainkat bárki igénybe veheti. Töltse ki az űrlapot, és kollégáink felveszik Önnel a kapcsolatot.',
    steps: ['Az Ön adatai', 'Csomagválasztás', 'Áttekintés'],
    packagesLabel: 'Melyik csomag iránt érdeklődik?',
  },
}

/** A lépések mezői célcsoportonként. A harmadik lépés az áttekintés. */
export const quoteFields = {
  business: [
    [
      { name: 'contact', label: 'Kapcsolattartó neve', type: 'text', required: true, autoComplete: 'name' },
      { name: 'phone', label: 'Telefonszám', type: 'tel', required: true, autoComplete: 'tel', placeholder: '+36 30 123 4567' },
      { name: 'email', label: 'E-mail-cím', type: 'email', required: true, autoComplete: 'email' },
    ],
    [
      { name: 'company', label: 'Cégnév', type: 'text', required: true, autoComplete: 'organization' },
      { name: 'site', label: 'Cég telephelye', type: 'text', autoComplete: 'address-level2' },
      {
        name: 'headcount',
        label: 'Munkavállalói létszám',
        type: 'number',
        required: true,
        min: 10,
        hint: 'Legalább 10 fő. Tíz fő alatt egyéni csomagjainkat ajánljuk.',
      },
      { name: 'packages', label: 'Melyik biztosítási csomagunk iránt érdeklődik?', type: 'packages' },
      { name: 'source', label: 'Honnan ismeri a Medicare-t?', type: 'select' },
      { name: 'message', label: 'Üzenet', type: 'textarea' },
    ],
  ],
  private: [
    [
      { name: 'contact', label: 'Az Ön neve', type: 'text', required: true, autoComplete: 'name' },
      { name: 'phone', label: 'Telefonszám', type: 'tel', required: true, autoComplete: 'tel', placeholder: '+36 30 123 4567' },
      { name: 'email', label: 'E-mail-cím', type: 'email', required: true, autoComplete: 'email' },
    ],
    [
      { name: 'packages', label: 'Melyik csomag iránt érdeklődik?', type: 'packages' },
      {
        name: 'people',
        label: 'Hány főre kötné a biztosítást?',
        type: 'number',
        min: 1,
        hint: 'A bevonni kívánt személyeknek akár eltérő csomagok is választhatók.',
      },
      { name: 'source', label: 'Honnan ismeri a Medicare-t?', type: 'select' },
      { name: 'message', label: 'Üzenet', type: 'textarea' },
    ],
  ],
}

export const emptyQuote = {
  contact: '',
  phone: '',
  email: '',
  company: '',
  site: '',
  headcount: '',
  people: '',
  packages: [],
  source: '',
  message: '',
  consent: false,
}
