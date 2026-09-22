import SectionHead from '../../components/SectionHead/SectionHead'
import ServiceTile from '../../components/ServiceTile/ServiceTile'
import { services } from '../../data/content'
import styles from './Ecosystem.module.css'

export default function Ecosystem() {
  return (
    <section id="szolgaltatasok" className={styles.section} aria-labelledby="ecosystem-title">
      <div className={`container ${styles.inner}`}>
        <SectionHead
          id="ecosystem-title"
          eyebrow="A Medicare-hálózat"
          title="Igénybe vehető egészségügyi szolgáltatások"
          inverted
        />
        <ul className={styles.tiles}>
          {services.map((service) => (
            <li key={service.title}>
              <ServiceTile {...service} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
