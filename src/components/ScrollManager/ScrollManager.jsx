import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const focusTarget = (target) => {
  if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1')
  target.focus({ preventScroll: true })
}

/**
 * Oldalváltáskor a lap tetejére ugrik, horgonyos linknél pedig a cél szekcióra.
 * A fókuszt is átteszi a célra, hogy billentyűzettel onnan folytatódjon a bejárás.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation()
  const firstRun = useRef(true)

  useEffect(() => {
    const isFirstRun = firstRun.current
    firstRun.current = false

    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'auto' })
      return
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    // Oldalbetöltéskor azonnal ugrunk, oldalon belüli navigációnál görgetünk.
    const behavior = isFirstRun || reduceMotion ? 'auto' : 'smooth'

    const scrollToHash = (scrollBehavior) => {
      const target = document.getElementById(hash.slice(1))
      if (!target) return false
      target.scrollIntoView({ behavior: scrollBehavior, block: 'start' })
      focusTarget(target)
      return true
    }

    // A cél szekció csak a következő kirajzolás után áll a helyén.
    let retry
    const frame = requestAnimationFrame(() => {
      if (!scrollToHash(behavior)) retry = setTimeout(() => scrollToHash('auto'), 250)
    })

    // Betöltéskor a képek még tolhatják a tartalmat, ezért utólag újraigazítunk.
    const onLoad = () => scrollToHash('auto')
    let correction
    if (isFirstRun) {
      window.addEventListener('load', onLoad)
      correction = setTimeout(onLoad, 500)
    }

    return () => {
      cancelAnimationFrame(frame)
      clearTimeout(retry)
      clearTimeout(correction)
      window.removeEventListener('load', onLoad)
    }
  }, [pathname, hash])

  return null
}
