import FeatureCard from '../../components/FeatureCard/FeatureCard'
import SectionHead from '../../components/SectionHead/SectionHead'
import Stat from '../../components/Stat/Stat'
import { features, stats, whyMedicareSection } from '../../data/content'
import styles from './WhyMedicare.module.css'

export default function WhyMedicare({ audience = 'business' }) {
  const copy = whyMedicareSection[audience] || whyMedicareSection.business
  const featureList = features[audience] || features.business
  const statList = stats[audience] || stats.business

  return (
    <section id="miert" className={styles.section} aria-labelledby="why-title">
      <div className={`container ${styles.inner}`}>
        <SectionHead id="why-title" eyebrow={copy.eyebrow} title={copy.title} />

        {statList && statList.length > 0 && (
          <div className={styles.statsBanner}>
            {statList.map((st) => (
              <Stat key={st.label} value={st.value} suffix={st.suffix} label={st.label} />
            ))}
          </div>
        )}

        <ul
          className={`${styles.grid} ${featureList.length === 4 ? styles.gridFour : ''}`}
        >
          {featureList.map((feature) => (
            <li key={feature.title}>
              <FeatureCard {...feature} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
