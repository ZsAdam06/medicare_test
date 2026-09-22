import FeatureCard from '../../components/FeatureCard/FeatureCard'
import SectionHead from '../../components/SectionHead/SectionHead'
import { features } from '../../data/content'
import styles from './WhyMedicare.module.css'

export default function WhyMedicare() {
  return (
    <section id="miert" className={styles.section} aria-labelledby="why-title">
      <div className={`container ${styles.inner}`}>
        <SectionHead
          id="why-title"
          eyebrow="Miért a Medicare?"
          title="Piacvezető egészségbiztosító, több évtizedes egészségügyi háttérrel"
        />
        <ul className={styles.grid}>
          {features.map((feature) => (
            <li key={feature.title}>
              <FeatureCard {...feature} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
