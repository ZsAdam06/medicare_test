import { Link } from 'react-router-dom'
import { media } from '../../data/korhaz'
import styles from './KorhazNotReady.module.css'

/**
 * Fejlesztés alatt álló aloldalak helykitöltője a Kórház szekcióhoz.
 * Illeszkedik a kórház sötét arculatához és tipográfiájához.
 */
export default function KorhazNotReady() {
  return (
    <div className={styles.page}>
      <div className={styles.glow} aria-hidden="true" />

      <header className={styles.header}>
        <Link to="/korhaz" className={styles.logoLink} aria-label="Vissza a kórház főoldalára">
          <img
            src={media.logoWhite}
            alt="Medicare Magánkórház és Klinika"
            width="196"
            height="29"
            className={styles.logo}
          />
        </Link>
      </header>

      <main className={styles.content} id="fotartalom">
        <div className={styles.card}>
          <div className={styles.iconWrapper} aria-hidden="true">
            <span className={styles.icon}>⚙️</span>
          </div>

          <h1 className={styles.title}>Ez az oldal fejlesztés alatt áll</h1>

          <p className={styles.subtitle}>
            Hamarosan itt is elérhető lesz a tartalom. Addig is böngéssze tovább a kórház főoldalát.
          </p>

          <div className={styles.actions}>
            <Link to="/korhaz" className={styles.btnMint}>
              <span className={styles.btnArrow} aria-hidden="true">←</span>
              Vissza a főoldalra
            </Link>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p className={styles.footerText}>
          Medicare Magánkórház és Klinika · Budapest
        </p>
      </footer>
    </div>
  )
}
