import SectionHead from '../../components/SectionHead/SectionHead'
import Step from '../../components/Step/Step'
import { howItWorksSection, steps } from '../../data/content'
import styles from './HowItWorks.module.css'

export default function HowItWorks({ audience = 'business' }) {
  const copy = howItWorksSection[audience] || howItWorksSection.business
  const stepList = steps[audience] || steps.business

  return (
    <section id="ellatas" className={styles.section} aria-labelledby="how-title">
      <div key={audience} className={`swap-in container ${styles.inner}`}>
        <SectionHead id="how-title" eyebrow={copy.eyebrow} title={copy.title} />
        <ol className={styles.steps}>
          {stepList.map((step, i) => (
            <Step key={step.title} index={i + 1} {...step} />
          ))}
        </ol>
      </div>
    </section>
  )
}
