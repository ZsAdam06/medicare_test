import { useId } from 'react'
import styles from './FaqItem.module.css'

export default function FaqItem({ question, answer, open, onToggle }) {
  const id = useId()
  const buttonId = `${id}-button`
  const panelId = `${id}-panel`

  return (
    <div className={`${styles.item} ${open ? styles.open : ''}`}>
      <h3 className={styles.heading}>
        <button
          id={buttonId}
          type="button"
          className={styles.question}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="t-h4">{question}</span>
          <span className={`t-h3 ${styles.chevron}`} aria-hidden="true">
            {open ? '−' : '+'}
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={styles.panel}
        inert={!open}
      >
        <div className={styles.panelInner}>
          <p className={`t-body-m ${styles.answer}`}>{answer}</p>
        </div>
      </div>
    </div>
  )
}
