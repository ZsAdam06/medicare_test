import { useState } from 'react'
import AudienceToggle from '../../components/AudienceToggle/AudienceToggle'
import PackageCard from '../../components/PackageCard/PackageCard'
import SectionHead from '../../components/SectionHead/SectionHead'
import { packageComparison, packages, packagesSection } from '../../data/content'
import styles from './Packages.module.css'

export default function Packages({ audience, onAudienceChange }) {
  const [showComparison, setShowComparison] = useState(false)
  const copy = packagesSection[audience]
  const packageList = packages[audience] || packages.business
  const isPrivate = audience === 'private'

  return (
    <section id="csomagok" className={styles.section} aria-labelledby="packages-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.head}>
          <SectionHead id="packages-title" eyebrow={copy.eyebrow} title={copy.title} />
          <AudienceToggle value={audience} onChange={onAudienceChange} />
        </div>

        <ul
          className={`${styles.cards} ${isPrivate ? styles.cardsThree : ''}`}
          aria-label="Csomagok"
        >
          {packageList.map((pkg) => (
            <li key={pkg.name} className={styles.cardItem}>
              <PackageCard {...pkg} />
            </li>
          ))}
        </ul>

        {copy.footnotes && (
          <div className={styles.footnotes}>
            {copy.footnotes.map((fn) => (
              <p key={fn} className={`t-caption ${styles.footnote}`}>
                {fn}
              </p>
            ))}
          </div>
        )}

        <div className={styles.compare}>
          {isPrivate ? (
            <button
              type="button"
              className={styles.compareButton}
              onClick={() => setShowComparison(!showComparison)}
              aria-expanded={showComparison}
            >
              <span>Csomagok összehasonlítása</span>
              <span aria-hidden="true">{showComparison ? '▲' : '▼'}</span>
            </button>
          ) : (
            <a href="#osszehasonlitas" className={`t-button ${styles.compareLink}`}>
              Csomagok részletes összehasonlítása →
            </a>
          )}
          <p className={`t-body-s ${styles.note}`}>{copy.note}</p>
        </div>

        {isPrivate && showComparison && (
          <div className={styles.tableWrapper} id="osszehasonlitas">
            <table className={styles.table}>
              <thead>
                <tr>
                  {packageComparison.columns.map((col) => (
                    <th key={col.key}>{col.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {packageComparison.rows.map((row) => (
                  <tr key={row.feature}>
                    <td>
                      <strong>{row.feature}</strong>
                    </td>
                    <td>
                      {typeof row.classic === 'boolean' ? (
                        row.classic ? (
                          <span className={styles.check}>✓</span>
                        ) : (
                          <span className={styles.dash}>—</span>
                        )
                      ) : (
                        row.classic
                      )}
                    </td>
                    <td>
                      {typeof row.medium === 'boolean' ? (
                        row.medium ? (
                          <span className={styles.check}>✓</span>
                        ) : (
                          <span className={styles.dash}>—</span>
                        )
                      ) : (
                        row.medium
                      )}
                    </td>
                    <td>
                      {typeof row.plus === 'boolean' ? (
                        row.plus ? (
                          <span className={styles.check}>✓</span>
                        ) : (
                          <span className={styles.dash}>—</span>
                        )
                      ) : (
                        row.plus
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  )
}
