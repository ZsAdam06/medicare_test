import AudienceToggle from '../../components/AudienceToggle/AudienceToggle'
import Button from '../../components/Button/Button'
import Icon from '../../components/Icon/Icon'
import { hero, highlights } from '../../data/content'
import styles from './Hero.module.css'

export default function Hero({ audience, onAudienceChange }) {
  const copy = hero[audience]
  const { floatingCard } = hero

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <div className={styles.copy}>
            <AudienceToggle value={audience} onChange={onAudienceChange} />
            <div key={audience} className={styles.swap}>
              <h1 id="hero-title" className={`t-display ${styles.title}`}>
                {copy.title}
              </h1>
              <p className={`t-body-l ${styles.lead}`}>{copy.lead}</p>
            </div>
            <div className={styles.ctas}>
              <Button href="#ajanlat" variant="onDark">
                Ajánlatot kérek
              </Button>
              <Button href="#csomagok" variant="ghost" inverted>
                Csomagok megtekintése
              </Button>
            </div>
          </div>

          <div className={styles.visual}>
            <img
              className={styles.image}
              src={hero.image}
              alt="Orvos egy leletet mutat a páciensnek a rendelőben"
              width="493"
              height="518"
              fetchPriority="high"
            />
            <div className={styles.floatingCard}>
              <span className={styles.floatingIcon}>
                <Icon name={floatingCard.icon} />
              </span>
              <span className={styles.floatingText}>
                <span className="t-body-s">{floatingCard.title}</span>
                <span className={`t-caption ${styles.floatingSub}`}>{floatingCard.subtitle}</span>
              </span>
            </div>
          </div>
        </div>

        <ul className={styles.highlights}>
          {highlights.map((item) => (
            <li key={item.title} className={styles.highlight}>
              <span className={styles.highlightIcon}>
                <Icon name={item.icon} />
              </span>
              <span className={styles.highlightText}>
                <span className={`t-button ${styles.highlightTitle}`}>{item.title}</span>
                <span className={`t-body-s ${styles.highlightBody}`}>{item.text}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
