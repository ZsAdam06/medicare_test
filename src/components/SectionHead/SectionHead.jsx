import styles from './SectionHead.module.css'

export default function SectionHead({ eyebrow, title, id, inverted = false, className = '' }) {
  return (
    <div className={`${styles.head} ${inverted ? styles.inverted : ''} ${className}`}>
      <p className={`t-caption ${styles.eyebrow}`}>{eyebrow}</p>
      <h2 id={id} className={`t-h2 ${styles.title}`}>
        {title}
      </h2>
    </div>
  )
}
