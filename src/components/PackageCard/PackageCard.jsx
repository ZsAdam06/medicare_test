import Button from '../Button/Button'
import { PLACEHOLDER_PATH } from '../../data/content'
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
  price,
  period,
  limit,
  ctaLabel = 'Részletek',
  href = PLACEHOLDER_PATH,
  onCta,
}) {
  // onCta esetén a kártya gombja műveletet indít (ajánlatkérés), nem oldalra visz.
  const ctaProps = onCta ? { onClick: () => onCta(name) } : { href }
  return (
    <article
      className={`${styles.card} ${highlighted ? styles.highlighted : ''}`}
      style={{ '--accent': `var(--package-${accent})` }}
    >
      <div className={styles.head}>
        <h3 className={`t-h3 ${styles.title}`}>{name}</h3>
        {badge && <span className={`t-caption ${styles.badge}`}>{badge}</span>}
      </div>

      {price && (
        <div className={styles.priceContainer}>
          <span className={styles.price}>{price}</span>
          {period && <span className={styles.period}>{period}</span>}
        </div>
      )}

      {limit && (
        <div className={styles.limitBadge}>
          <span className={styles.limitText}>{limit}</span>
        </div>
      )}

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
        {...ctaProps}
        variant={highlighted ? 'onDark' : 'secondary'}
        size="M"
        fullWidth
        className={styles.cta}
        aria-label={`${name} csomag – ${ctaLabel}`}
      >
        {ctaLabel}
      </Button>
    </article>
  )
}
