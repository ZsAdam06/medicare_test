import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { isAudiencePath } from '../../data/routes'

const focusTarget = (target) => {
  if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1')
  target.focus({ preventScroll: true })
}

/**
 * Oldalváltáskor a lap tetejére ugrik és az új oldal címsorára teszi a fókuszt,
 * horgonyos linknél pedig a cél szekcióra. Az első betöltéskor nem nyúl a fókuszhoz,
 * hogy az „Ugrás a tartalomra” link maradjon az első tabstop.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation()
  const previousPath = useRef(null)

  useEffect(() => {
    const isFirstRun = previousPath.current === null
    const pathChanged = !isFirstRun && previousPath.current !== pathname
    // A célcsoport-váltás is útvonalváltás, de ott a görgetési pozíció marad,
    // különben pont a kicserélődő tartalmat nem látná a látogató.
    const audienceSwitch =
      pathChanged && isAudiencePath(previousPath.current) && isAudiencePath(pathname)
    previousPath.current = pathname

    if (audienceSwitch) return

    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'auto' })
      if (pathChanged) {
        const heading = document.querySelector('main h1')
        if (heading) focusTarget(heading)
      }
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
    const frame = setTimeout(() => {
      if (!scrollToHash(behavior)) retry = setTimeout(() => scrollToHash('auto'), 250)
    }, 0)

    // Betöltéskor a képek még tolhatják a tartalmat, ezért utólag újraigazítunk.
    const onLoad = () => scrollToHash('auto')
    let correction
    if (isFirstRun) {
      window.addEventListener('load', onLoad)
      correction = setTimeout(onLoad, 500)
    }

    return () => {
      clearTimeout(frame)
      clearTimeout(retry)
      clearTimeout(correction)
      window.removeEventListener('load', onLoad)
    }
  }, [pathname, hash])

  return null
}
