import Button from '../../components/Button/Button'
import { useQuoteDialog } from '../../components/QuoteDialog/useQuoteDialog'
import { contacts, cta, telHref } from '../../data/content'
import styles from './Cta.module.css'

export default function Cta({ audience = 'business' }) {
  const { openQuote } = useQuoteDialog()
  const copy = cta[audience] || cta.business
  const phone = audience === 'private' ? contacts.booking.phone : contacts.service.phone

  return (
    <section id="ajanlat" className={styles.section} aria-labelledby="cta-title">
      <div className="container">
        <div className={styles.banner}>
          <div className={styles.copy}>
            <h2 id="cta-title" className={`t-h2 ${styles.title}`}>
              {copy.title}
            </h2>
            <p className={`t-body-l ${styles.text}`}>{copy.text}</p>
          </div>
          <div className={styles.buttons}>
            <Button variant="onDark" onClick={() => openQuote({ audience })}>
              {copy.primaryLabel}
            </Button>
            <Button href={telHref(phone)} variant="ghost" inverted>
              {phone}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
