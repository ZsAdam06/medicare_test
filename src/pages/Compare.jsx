import { useState } from 'react'
import Button from '../components/Button/Button'
import FaqItem from '../components/FaqItem/FaqItem'
import SegmentedControl from '../components/SegmentedControl/SegmentedControl'
import { useQuoteDialog } from '../components/QuoteDialog/useQuoteDialog'
import Cta from '../sections/Cta/Cta'
import {
  compareDisclaimer,
  compareFootnotes,
  comparePackages,
  comparePage,
  compareRows,
} from '../data/comparison'
import styles from './Compare.module.css'

const selectorOptions = comparePackages.map((pkg) => ({ id: pkg.key, label: pkg.name }))

/** Cella tartalma: pipa, gondolatjel vagy kiegészítő szöveg – felolvasható formában. */
function Cell({ value }) {
  if (value === true) {
    return (
      <>
        <span className={styles.check} aria-hidden="true">
          ✓
        </span>
        <span className="visually-hidden">Tartalmazza</span>
      </>
    )
  }

  if (!value) {
    return (
      <>
        <span className={styles.dash} aria-hidden="true">
          —
        </span>
        <span className="visually-hidden">Nem tartalmazza</span>
      </>
    )
  }

  return (
    <>
      <span className={styles.check} aria-hidden="true">
        ✓
      </span>
      <span className={styles.cellNote}>{value}</span>
    </>
  )
}

export default function Compare() {
  // Mobilon egyszerre egy csomag oszlopa látszik, hogy ne kelljen oldalazni.
  const [selected, setSelected] = useState('blue')
  const [openFootnote, setOpenFootnote] = useState(null)
  const { openQuote } = useQuoteDialog()

  const columnClass = (key) => (key === selected ? '' : styles.hiddenOnMobile)

  return (
    <main id="fotartalom">
      <section className={styles.head} aria-labelledby="compare-title">
        <div className={`container ${styles.headInner}`}>
          <p className={`t-caption ${styles.eyebrow}`}>{comparePage.eyebrow}</p>
          <h1 id="compare-title" className={`t-h1 ${styles.title}`}>
            {comparePage.title}
          </h1>
          <p className={`t-body-l ${styles.lead}`}>{comparePage.lead}</p>
          <div className={styles.headActions}>
            <Button variant="onDark" onClick={() => openQuote({ audience: 'business' })}>
              Ajánlatot kérek
            </Button>
            <Button href="/#csomagok" variant="ghost" inverted>
              Vissza a csomagokhoz
            </Button>
          </div>
        </div>
      </section>

      <section className={styles.tableSection} aria-labelledby="compare-table-title">
        <div className={`container ${styles.tableInner}`}>
          <div className={styles.tableHead}>
            <h2 id="compare-table-title" className={`t-h2 ${styles.sectionTitle}`}>
              Biztosítással fedezett szolgáltatások
            </h2>
            <p className={`t-body-s ${styles.note}`}>{comparePage.note}</p>
          </div>

          <div className={styles.selector}>
            <p className={`t-body-s ${styles.selectorLabel}`} id="package-selector-label">
              Válasszon csomagot az összehasonlításhoz
            </p>
            <SegmentedControl
              options={selectorOptions}
              value={selected}
              onChange={setSelected}
              size="S"
              label="Megjelenített csomag"
              className={styles.selectorControl}
            />
          </div>

          <div
            className={styles.tableWrapper}
            role="region"
            aria-label="Csomagok összehasonlító táblázata"
            tabIndex={0}
          >
            <table className={styles.table}>
              <caption className="visually-hidden">
                A vállalati egészségbiztosítási csomagok által fedezett szolgáltatások
                összehasonlítása. A csomagonkénti oszlopok a Vanilla, Coral, White, Blue és Gold
                csomagot mutatják.
              </caption>
              <thead>
                <tr>
                  <th scope="col" className={styles.rowHeadCell}>
                    Szolgáltatás
                  </th>
                  {comparePackages.map((pkg) => (
                    <th
                      key={pkg.key}
                      scope="col"
                      className={`${styles.packageHead} ${columnClass(pkg.key)}`}
                      style={{ '--accent': `var(--package-${pkg.accent})` }}
                    >
                      <span className={styles.packageName}>{pkg.name}</span>
                      <span className={`t-caption ${styles.packageMeta}`}>
                        {pkg.highlighted ? 'Legnépszerűbb' : '(Plusz) fedezet'}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className={styles.rowHeader}>
                      <span className={styles.rowLabel}>
                        {row.label}
                        {row.marker && (
                          <span className={styles.marker} aria-hidden="true">
                            {row.marker}
                          </span>
                        )}
                      </span>
                      {row.detail && (
                        <details className={styles.details}>
                          <summary className={styles.summary}>Részletek</summary>
                          <p className={`t-body-s ${styles.detailText}`}>{row.detail}</p>
                        </details>
                      )}
                    </th>
                    {comparePackages.map((pkg) => (
                      <td key={pkg.key} className={columnClass(pkg.key)}>
                        <Cell value={row.values[pkg.key]} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={`t-body-s ${styles.disclaimer}`}>{compareDisclaimer}</p>
        </div>
      </section>

      <section className={styles.footnotes} aria-labelledby="footnotes-title">
        <div className={`container ${styles.footnotesInner}`}>
          <h2 id="footnotes-title" className={`t-h2 ${styles.sectionTitle}`}>
            Limitek és lábjegyzetek
          </h2>
          <div className={styles.footnoteList}>
            {compareFootnotes.map((footnote, i) => (
              <FaqItem
                key={footnote.marker}
                question={`${footnote.marker} ${footnote.title}`}
                answer={footnote.text}
                open={openFootnote === i}
                onToggle={() => setOpenFootnote(openFootnote === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      <Cta audience="business" />
    </main>
  )
}
