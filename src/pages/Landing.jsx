import { useEffect, useRef, useState } from 'react'
import Hero from '../sections/Hero/Hero'
import Packages from '../sections/Packages/Packages'
import WhyMedicare from '../sections/WhyMedicare/WhyMedicare'
import HowItWorks from '../sections/HowItWorks/HowItWorks'
import Ecosystem from '../sections/Ecosystem/Ecosystem'
import Faq from '../sections/Faq/Faq'
import Cta from '../sections/Cta/Cta'

const ANNOUNCEMENT = {
  business: 'Cégeknek szóló tartalom megjelenítve.',
  private: 'Magánszemélyeknek szóló tartalom megjelenítve.',
}

export default function Landing() {
  // A célcsoport-váltó a hero, a csomagok, a GYIK és a CTA tartalmát együtt váltja.
  const [audience, setAudience] = useState('business')
  const [announcement, setAnnouncement] = useState('')
  const firstRender = useRef(true)

  useEffect(() => {
    // Váltáskor a képernyőolvasó is megkapja, hogy kicserélődött az oldal tartalma.
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    setAnnouncement(ANNOUNCEMENT[audience])
  }, [audience])

  return (
    <main id="fotartalom">
      <p aria-live="polite" className="visually-hidden">
        {announcement}
      </p>
      <Hero audience={audience} onAudienceChange={setAudience} />
      <Packages audience={audience} onAudienceChange={setAudience} />
      <WhyMedicare audience={audience} />
      <HowItWorks audience={audience} />
      <Ecosystem />
      <Faq audience={audience} />
      <Cta audience={audience} />
    </main>
  )
}
