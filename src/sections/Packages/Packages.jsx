import { useId, useState } from 'react'
import PackageCard from '../../components/PackageCard/PackageCard'
import SectionHead from '../../components/SectionHead/SectionHead'
import AppLink from '../../components/AppLink/AppLink'
import { useQuoteDialog } from '../../components/QuoteDialog/useQuoteDialog'
import { packageComparison, packages, packagesSection } from '../../data/content'
import { COMPARE_PATH } from '../../data/comparison'
import styles from './Packages.module.css'

/** Cella tartalma: logikai értéknél pipa/gondolatjel, olvasható szöveggel. */
function ComparisonCell({ value }) {
  if (typeof value !== 'boolean') return value

  return value ? (
    <>
      <span className={styles.check} aria-hidden="true">
        ✓
      </span>
      <span className="visually-hidden">Tartalmazza</span>
    </>
  ) : (
    <>
      <span className={styles.dash} aria-hidden="true">
        —
      </span>
      <span className="visually-hidden">Nem tartalmazza</span>
    </>
  )
}

export default function Packages({ audience }) {
  const [showComparison, setShowComparison] = useState(false)
  const { openQuote } = useQuoteDialog()
  const footnotesId = useId()
  const copy = packagesSection[audience]
  const packageList = packages[audience] || packages.business
  const isPrivate = audience === 'private'

  return (
    <section id="csomagok" className={styles.section} aria-labelledby="packages-title">
      <div className={`container ${styles.inner}`}>
        <div key={`head-${audience}`} className={`swap-in ${styles.head}`}>
          <SectionHead id="packages-title" eyebrow={copy.eyebrow} title={copy.title} />
        </div>

        <ul
          key={`cards-${audience}`}
          className={`swap-in ${styles.cards} ${isPrivate ? styles.cardsThree : ''}`}
          aria-label="Csomagok"
          aria-describedby={copy.footnotes ? footnotesId : undefined}
        >
          {packageList.map((pkg) => (
            <li key={pkg.name} className={styles.cardItem}>
              <PackageCard
                {...pkg}
                onCta={
                  isPrivate
                    ? (name) => openQuote({ audience: 'private', package: name })
                    : undefined
                }
              />
            </li>
          ))}
        </ul>

        {copy.footnotes && (
          <ul className={styles.footnotes} id={footnotesId}>
            {copy.footnotes.map((fn) => (
              <li key={fn} className={`t-caption ${styles.footnote}`}>
                {fn}
              </li>
            ))}
          </ul>
        )}

        <div className={styles.compare}>
          {isPrivate ? (
            <button
              type="button"
              className={styles.compareButton}
              onClick={() => setShowComparison(!showComparison)}
              aria-expanded={showComparison}
              aria-controls="osszehasonlitas"
            >
              <span>Csomagok összehasonlítása</span>
              <span aria-hidden="true">{showComparison ? '▲' : '▼'}</span>
            </button>
          ) : (
            <AppLink href={COMPARE_PATH} className={`t-button ${styles.compareLink}`}>
              Csomagok részletes összehasonlítása →
            </AppLink>
          )}
          <p className={`t-body-s ${styles.note}`}>{copy.note}</p>
        </div>

        {isPrivate && showComparison && (
          <div
            className={styles.tableWrapper}
            id="osszehasonlitas"
            role="region"
            aria-label="Csomagok összehasonlító táblázata"
            tabIndex={0}
          >
            <table className={styles.table}>
              <caption className="visually-hidden">
                Az egyéni egészségbiztosítási csomagok szolgáltatásainak összehasonlítása
              </caption>
              <thead>
                <tr>
                  {packageComparison.columns.map((col) => (
                    <th key={col.key} scope="col">
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {packageComparison.rows.map((row) => (
                  <tr key={row.feature}>
                    <th scope="row" className={styles.rowHeader}>
                      {row.feature}
                    </th>
                    <td>
                      <ComparisonCell value={row.classic} />
                    </td>
                    <td>
                      <ComparisonCell value={row.medium} />
                    </td>
                    <td>
                      <ComparisonCell value={row.plus} />
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
