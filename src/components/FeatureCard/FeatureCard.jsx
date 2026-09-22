import Icon from '../Icon/Icon'
import styles from './FeatureCard.module.css'

/** Előny-kártya a „Miért a Medicare?” szekcióhoz. */
export default function FeatureCard({ icon, title, description }) {
  return (
    <article className={styles.card}>
      <div className={styles.iconWrapper}>
        <span className={styles.icon}>
          <Icon name={icon} />
        </span>
      </div>
      <h3 className={`t-h4 ${styles.title}`}>{title}</h3>
      <p className={`t-body-m ${styles.description}`}>{description}</p>
    </article>
  )
}
