import { useState } from 'react'
import Header from './sections/Header/Header'
import Hero from './sections/Hero/Hero'
import Packages from './sections/Packages/Packages'
import WhyMedicare from './sections/WhyMedicare/WhyMedicare'
import HowItWorks from './sections/HowItWorks/HowItWorks'
import Ecosystem from './sections/Ecosystem/Ecosystem'
import Faq from './sections/Faq/Faq'
import Cta from './sections/Cta/Cta'
import Footer from './sections/Footer/Footer'

export default function App() {
  // A célcsoport-váltó a hero és a csomagok szekció tartalmát együtt váltja.
  const [audience, setAudience] = useState('business')

  return (
    <div id="top">
      <Header />
      <main>
        <Hero audience={audience} onAudienceChange={setAudience} />
        <Packages audience={audience} onAudienceChange={setAudience} />
        <WhyMedicare audience={audience} />
        <HowItWorks audience={audience} />
        <Ecosystem />
        <Faq audience={audience} />
        <Cta audience={audience} />
      </main>
      <Footer />
    </div>
  )
}
