import AudienceToggle from '../../components/AudienceToggle/AudienceToggle'
import PackageCard from '../../components/PackageCard/PackageCard'
import SectionHead from '../../components/SectionHead/SectionHead'
import { packages, packagesSection } from '../../data/content'
import styles from './Packages.module.css'

export default function Packages({ audience, onAudienceChange }) {
  const copy = packagesSection[audience]

  return (
    <section id="csomagok" className={styles.section} aria-labelledby="packages-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.head}>
          <SectionHead id="packages-title" eyebrow={copy.eyebrow} title={copy.title} />
          <AudienceToggle value={audience} onChange={onAudienceChange} />
        </div>

        <ul className={styles.cards} aria-label="Csomagok">
          {packages.map((pkg) => (
            <li key={pkg.name} className={styles.cardItem}>
              <PackageCard {...pkg} />
            </li>
          ))}
        </ul>

        <div className={styles.compare}>
          <a href="#osszehasonlitas" className={`t-button ${styles.compareLink}`}>
            Csomagok részletes összehasonlítása →
          </a>
          <p className={`t-body-s ${styles.note}`}>{copy.note}</p>
        </div>
      </div>
    </section>
  )
}
