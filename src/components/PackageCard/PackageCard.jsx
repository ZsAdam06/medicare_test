import Button from '../Button/Button'
import styles from './PackageCard.module.css'

/**
 * Csomagkártya. Az Accent csík színe a csomag nevét követi
 * (package/vanilla, coral, white, blue, gold).
 */
export default function PackageCard({
  name,
  accent,
  description,
  benefits,
  badge,
  highlighted = false,
  href = '#',
}) {
  return (
    <article
      className={`${styles.card} ${highlighted ? styles.highlighted : ''}`}
      style={{ '--accent': `var(--package-${accent})` }}
    >
      <div className={styles.head}>
        <h3 className={`t-h3 ${styles.title}`}>{name}</h3>
        {badge && <span className={`t-caption ${styles.badge}`}>{badge}</span>}
      </div>
      <p className={`t-body-s ${styles.description}`}>{description}</p>
      <ul className={styles.benefits}>
        {benefits.map((benefit) => (
          <li key={benefit} className={`t-body-s ${styles.benefit}`}>
            <span className={styles.check} aria-hidden="true">
              ✓
            </span>
            {benefit}
          </li>
        ))}
      </ul>
      <Button
        href={href}
        variant={highlighted ? 'onDark' : 'secondary'}
        size="M"
        fullWidth
        className={styles.cta}
        aria-label={`${name} csomag részletei`}
      >
        Részletek
      </Button>
    </article>
  )
}
