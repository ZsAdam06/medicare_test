import { useEffect, useState } from 'react'
import Button from '../../components/Button/Button'
import Icon from '../../components/Icon/Icon'
import logo from '../../assets/brand/logo.png'
import { contacts, nav, telHref } from '../../data/content'
import styles from './Header.module.css'

function UtilityBar() {
  return (
    <div className={styles.utility}>
      <div className={`container ${styles.utilityInner}`}>
        <p className={`t-caption ${styles.disclaimer}`}>Koncepció demó – nem hivatalos oldal</p>
        <ul className={`t-body-s ${styles.contacts}`}>
          <li>
            {contacts.service.label}:{' '}
            <a href={telHref(contacts.service.phone)}>{contacts.service.phone}</a>
          </li>
          <li>
            {contacts.booking.label}:{' '}
            <a href={telHref(contacts.booking.phone)}>{contacts.booking.phone}</a>
          </li>
          <li>
            <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

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
    <>
      <UtilityBar />
      <header className={styles.header}>
        <div className={`container ${styles.inner}`}>
          <a href="#top" className={styles.logo} aria-label="Medicare Biztosító – kezdőlap">
            <img src={logo} alt="" width="219" height="32" />
          </a>

          <nav className={styles.nav} aria-label="Fő navigáció">
            <ul className={styles.navList}>
              {nav.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className={styles.navLink}>
                    {item.label}
                    {item.hasMenu && <span aria-hidden="true"> ▾</span>}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <a href="#ellatas" className={styles.bookingLink}>
              Online időpontfoglalás
            </a>
            <Button href="#ajanlat" size="M">
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
                  <a href={item.href} className={styles.mobileLink} onClick={closeMenu}>
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#ellatas" className={styles.mobileLinkAccent} onClick={closeMenu}>
                  Online időpontfoglalás
                </a>
              </li>
            </ul>
            <Button href="#ajanlat" fullWidth onClick={closeMenu}>
              Ajánlatot kérek
            </Button>
          </nav>
        </div>
      </header>
    </>
  )
}
