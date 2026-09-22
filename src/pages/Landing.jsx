import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Hero from '../sections/Hero/Hero'
import Packages from '../sections/Packages/Packages'
import WhyMedicare from '../sections/WhyMedicare/WhyMedicare'
import HowItWorks from '../sections/HowItWorks/HowItWorks'
import Ecosystem from '../sections/Ecosystem/Ecosystem'
import Faq from '../sections/Faq/Faq'
import Cta from '../sections/Cta/Cta'
import { AUDIENCE_PATHS, audienceFromPath } from '../data/routes'
import styles from './Landing.module.css'

const ANNOUNCEMENT = {
  business: 'Cégeknek szóló tartalmat lát.',
  private: 'Magánszemélyeknek szóló tartalmat lát.',
}

const NOTICE_MS = 4000

export default function Landing() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const audience = audienceFromPath(pathname)

  // A váltás visszajelzése: látható csík és egyben aria-live üzenet.
  const [notice, setNotice] = useState('')
  const previousAudience = useRef(audience)

  useEffect(() => {
    if (previousAudience.current === audience) return
    previousAudience.current = audience
    setNotice(ANNOUNCEMENT[audience])
    const timer = setTimeout(() => setNotice(''), NOTICE_MS)
    return () => clearTimeout(timer)
  }, [audience])

  const changeAudience = (next) => {
    if (next === audience) return
    navigate(AUDIENCE_PATHS[next], { preventScrollReset: true })
  }

  return (
    <main id="fotartalom">
      <p className={styles.notice} role="status" aria-live="polite">
        {notice && <span className={styles.noticeInner}>{notice}</span>}
      </p>
      <Hero audience={audience} onAudienceChange={changeAudience} />
      <Packages audience={audience} />
      <WhyMedicare audience={audience} />
      <HowItWorks audience={audience} />
      <Ecosystem />
      <Faq audience={audience} />
      <Cta audience={audience} />
    </main>
  )
}
