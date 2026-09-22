import { useState } from 'react'
import FaqItem from '../../components/FaqItem/FaqItem'
import { contacts, faqs, telHref } from '../../data/content'
import styles from './Faq.module.css'

export default function Faq({ audience = 'business' }) {
  const [openIndex, setOpenIndex] = useState(0)
  const faqList = faqs[audience] || faqs.business

  return (
    <section className={styles.section} aria-labelledby="faq-title">
      <div key={audience} className={`swap-in container ${styles.inner}`}>
        <div className={styles.intro}>
          <p className={`t-caption ${styles.eyebrow}`}>GYIK</p>
          <h2 id="faq-title" className={`t-h2 ${styles.title}`}>
            Gyakran ismételt kérdések
          </h2>
          <p className={`t-body-m ${styles.text}`}>
            Nem találja a választ? Hívja ügyfélszolgálatunkat:{' '}
            <a href={telHref(contacts.service.phone)} className={styles.phone}>
              {contacts.service.phone}
            </a>
          </p>
        </div>

        <div className={styles.items}>
          {faqList.map((faq, i) => (
            <FaqItem
              key={faq.question}
              {...faq}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
