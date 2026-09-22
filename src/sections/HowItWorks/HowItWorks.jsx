import SectionHead from '../../components/SectionHead/SectionHead'
import Step from '../../components/Step/Step'
import { steps } from '../../data/content'
import styles from './HowItWorks.module.css'

export default function HowItWorks() {
  return (
    <section id="ellatas" className={styles.section} aria-labelledby="how-title">
      <div className={`container ${styles.inner}`}>
        <SectionHead
          id="how-title"
          eyebrow="Az ellátás menete"
          title="Így veheti igénybe az ellátást"
        />
        <ol className={styles.steps}>
          {steps.map((step, i) => (
            <Step key={step.title} index={i + 1} {...step} />
          ))}
        </ol>
      </div>
    </section>
  )
}
