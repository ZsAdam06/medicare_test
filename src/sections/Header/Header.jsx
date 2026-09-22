import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Icon from '../../components/Icon/Icon'
import AppLink from '../../components/AppLink/AppLink'
import SegmentedControl from '../../components/SegmentedControl/SegmentedControl'
import { useQuoteDialog } from '../../components/QuoteDialog/useQuoteDialog'
import logo from '../../assets/brand/logo.png'
import { contacts, nav, telHref } from '../../data/content'
import { AUDIENCE_PATHS, audienceFromPath, isAudiencePath } from '../../data/routes'
import styles from './Header.module.css'

const AUDIENCE_OPTIONS = [
  { id: 'business', label: 'Cégeknek' },
  { id: 'private', label: 'Magánszemélyeknek' },
]

const OTHER_AUDIENCE = { business: 'private', private: 'business' }

/** A célcsoport-váltó a felső sávban: végig látszik, melyik nézetben van a látogató. */
function AudienceSwitch({ audience, onChange }) {
  const other = OTHER_AUDIENCE[audience]
  const otherLabel = AUDIENCE_OPTIONS.find((option) => option.id === other).label

  return (
    <>
      <div className={styles.switchWide}>
        <SegmentedControl
          options={AUDIENCE_OPTIONS}
          value={audience}
          onChange={onChange}
          size="S"
          tone="dark"
          label="Kinek keres egészségbiztosítást?"
        />
      </div>

      {/* Mobilon nem fér ki a két felirat, ezért egy gomb vált a másik nézetre. */}
      <button
        type="button"
        className={`t-caption ${styles.switchCompact}`}
        onClick={() => onChange(other)}
      >
        <span aria-hidden="true">{AUDIENCE_OPTIONS.find((o) => o.id === audience).label}</span>
        <span className={styles.switchIcon} aria-hidden="true">
          ⇄
        </span>
        <span className="visually-hidden">{`Átváltás erre: ${otherLabel}`}</span>
      </button>
    </>
  )
}

function UtilityBar({ audience, onAudienceChange }) {
  return (
    <aside className={styles.utility} aria-label="Célcsoport és elérhetőségek">
      <div className={`container ${styles.utilityInner}`}>
        <AudienceSwitch audience={audience} onChange={onAudienceChange} />
        <ul className={`t-body-s ${styles.contacts}`}>
          <li>
            {contacts.service.label}:{' '}
            <a href={telHref(contacts.service.phone)}>{contacts.service.phone}</a>
          </li>
          <li>
            {contacts.booking.label}:{' '}
            <a href={telHref(contacts.booking.phone)}>{contacts.booking.phone}</a>
          </li>
          <li className={styles.demoNote}>Koncepció demó</li>
        </ul>
      </div>
    </aside>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { openQuote } = useQuoteDialog()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const audience = audienceFromPath(pathname)

  // A menüpontok az éppen nézett célcsoport oldalán belül ugranak a szekciókra,
  // így a menü nem dobja vissza a látogatót a céges nézetbe.
  const sectionHref = (hash) => `${AUDIENCE_PATHS[audience]}${hash}`

  const changeAudience = (next) => {
    if (next === audience && isAudiencePath(pathname)) return
    navigate(AUDIENCE_PATHS[next], { preventScrollReset: true })
  }

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    const onResize = () => window.innerWidth > 1024 && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className={styles.stack}>
      <UtilityBar audience={audience} onAudienceChange={changeAudience} />
      <header className={styles.header}>
        <div className={`container ${styles.inner}`}>
          <AppLink href="/" className={styles.logo} aria-label="Medicare Biztosító – kezdőlap">
            <img src={logo} alt="" width="219" height="32" />
          </AppLink>

          <nav className={styles.nav} aria-label="Fő navigáció">
            <ul className={styles.navList}>
              {nav.map((item) => (
                <li key={item.label}>
                  <AppLink href={sectionHref(item.hash)} className={styles.navLink}>
                    {item.label}
                  </AppLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <AppLink href={sectionHref('#ellatas')} className={styles.bookingLink}>
              Online időpontfoglalás
            </AppLink>
            <Button size="M" onClick={() => openQuote({ audience })}>
              Ajánlatot kérek
            </Button>
          </div>

          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Menü bezárása' : 'Menü megnyitása'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={28} />
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
          inert={!menuOpen}
        >
          <nav className="container" aria-label="Mobil navigáció">
            <ul className={styles.mobileList}>
              {nav.map((item) => (
                <li key={item.label}>
                  <AppLink href={sectionHref(item.hash)} className={styles.mobileLink} onClick={closeMenu}>
                    {item.label}
                  </AppLink>
                </li>
              ))}
              <li>
                <AppLink href={sectionHref('#ellatas')} className={styles.mobileLinkAccent} onClick={closeMenu}>
                  Online időpontfoglalás
                </AppLink>
              </li>
            </ul>
            <Button
              fullWidth
              onClick={() => {
                closeMenu()
                openQuote({ audience })
              }}
            >
              Ajánlatot kérek
            </Button>
          </nav>
        </div>
      </header>
    </div>
  )
}
