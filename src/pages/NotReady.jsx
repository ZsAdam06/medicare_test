import Button from '../components/Button/Button'
import styles from './NotReady.module.css'

/** Helykitöltő oldal: a koncepció demóban még el nem készült aloldalak ide mutatnak. */
export default function NotReady() {
  return (
    <main id="fotartalom" className={styles.page}>
      <div className={`container ${styles.inner}`}>
        <p className={`t-caption ${styles.eyebrow}`}>Koncepció demó</p>
        <h1 className={`t-h1 ${styles.title}`}>Ez az oldal még nem készült el</h1>
        <p className={`t-body-l ${styles.text}`}>
          A bemutató a nyitóoldalra koncentrál, ez az aloldal még nem része a koncepciónak.
          Térjen vissza a nyitóoldalra, ahol minden elkészült tartalom elérhető.
        </p>
        <Button href="/">Vissza a nyitóoldalra</Button>
      </div>
    </main>
  )
}
