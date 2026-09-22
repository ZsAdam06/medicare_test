import { Link, useLocation } from 'react-router-dom'

const isRoutePath = (href) => typeof href === 'string' && href.startsWith('/')

/**
 * Link, amely belső útvonalnál react-router Linket, egyébként <a>-t renderel.
 * Az aktuális oldalra mutató horgony (pl. "/#csomagok" a nyitóoldalon) natív
 * <a href="#csomagok"> marad, mert a böngésző görgetését és fókuszkezelését
 * nem érdemes utánozni.
 * Külső, új lapon nyíló linknél rejtett szöveggel jelzi ezt a képernyőolvasónak.
 */
export default function AppLink({ href, external = false, children, ...rest }) {
  const { pathname } = useLocation()

  if (isRoutePath(href)) {
    const [path, hash] = href.split('#')
    const samePage = hash && (path === pathname || path === `${pathname}/`)

    if (samePage) {
      return (
        <a href={`#${hash}`} {...rest}>
          {children}
        </a>
      )
    }

    return (
      <Link to={href} {...rest}>
        {children}
      </Link>
    )
  }

  return (
    <a
      href={href}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      {...rest}
    >
      {children}
      {external && <span className="visually-hidden"> (új lapon nyílik meg)</span>}
    </a>
  )
}
